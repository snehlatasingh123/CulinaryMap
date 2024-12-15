import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo } = resData?.info;
  return (
    <div
      className="res-card"
      style={{ color: "blue", backgroundColor: "#f0f0f0" }}
    >
      {/* <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" /> */}
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
      />
      {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,
        w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30a-7492-444b-a485-1b7e2804e091_671928.JPG */}
      {/* <img className="res-logo" alt="res-logo" src={props.image} /> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
