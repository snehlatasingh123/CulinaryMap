import { CDN_URL } from "../utils/constants";
import star from "../utils/assets/star.png"

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo, sla, areaName  } = resData?.info;
  return (
    
      <div className="res-card-container">
        <div
          className="res-card"
        >
          {/* <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" /> */}
          <div style={{position:"relative", width:"310px", height:"206px"}}>
            <div className="res-logo-outer">
              <div className="res-logo-box">
                <img
                  loading="lazy"
                  className="res-logo"
                  alt="res-logo"
                  src={CDN_URL+cloudinaryImageId}
                />
              </div>
            </div>
          </div>
          
          
          {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,
            w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30a-7492-444b-a485-1b7e2804e091_671928.JPG */}
          {/* <img className="res-logo" alt="res-logo" src={props.image} /> */}
          <div style={{marginLeft:"12px"}}>
            <div className="res-logo-heading">
              <div>{name}</div>
            </div>
            <div className="res-card-subtext-container">
              <div style={{marginTop:"-2px"}}>
                <img src={star} alt="rating-star-img" style={{width:"12px", height:"12px"}} />
              </div>
              <div className="res-card-subtext">
                <div className="res-card-subtext-rating">
                  <span>{avgRating} • {sla.slaString}</span>
                </div>
              </div>
            </div>
            <div className="res-card-cusines-container">  
                <div className="res-card-cusines">
                  {cuisines.join(", ")}
                </div>
                <div className="res-card-locality">
                  {areaName}
                </div>
            </div>
            {/* <h4>{cuisines.join(", ")}</h4> */}
            {/* <h4>{avgRating}</h4> */}
            {/* <h4>{deliveryTime}</h4> */}
          </div>
          
        </div>
      </div>
    
    
  );
};
export default RestaurantCard;
