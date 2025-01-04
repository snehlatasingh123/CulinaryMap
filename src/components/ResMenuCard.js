
import veg_label from "../utils/assets/veg_label.svg"
import non_veg_label from "../utils/assets/non_veg_label.svg"
import star from "../utils/assets/star.png"

const ResMenuCard = (props) => {
    // console.log("menuList", props);
    const { dishData } = props;
    const { name, price, defaultPrice, isVeg, ratings, description, imageId } = dishData?.card?.info;

    return (
        <div className="res-menu-container">
            <div style={{ padding: "4px 0px" }}>
                <div className="dish-card-container">
                    <div>
                        <div className="veg-non-veg-symbol">
                            <img loading="lazy" style={{ width: "32px", height: "16px" }} src={`${isVeg ? veg_label : non_veg_label}`} alt={isVeg ? "Veg Dish" : "Non-Veg Dish"} />
                        </div>
                        <div className="food-label-heading">
                            {name}
                        </div>
                        <div className="food-label-price-container">
                            <div className="food-label-price">
                                <span style={{ marginRight: "0px" }}>
                                    <div className="food-price">₹ {Number(price) / 100 || Number(defaultPrice) / 100}</div>

                                </span>
                            </div>
                        </div>
                        <div className="rating-container">
                            {ratings?.aggregatedRating?.rating != undefined ?
                                <>
                                    <div style={{ width: "14px", height: "14px" }}>
                                        <img loading="lazy" style={{ width: "14px", height: "14px" }} src={star} />
                                    </div>
                                    <div className="rating-value">
                                        {Number(ratings?.aggregatedRating?.rating)}
                                    </div>
                                    <div className="rating-number">
                                        ({Number(ratings?.aggregatedRating?.ratingCountV2)})
                                    </div>
                                </> : null
                            }

                        </div>

                        <div className="description-container">
                            <div className="description-box">
                                {description}
                            </div>
                        </div>

                    </div>
                    <div className="food-image-container">
                        <button className="food-image-box">
                            <img loading="lazy" className="food-img-style" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} />
                        </button>
                    </div>

                </div>

                <div className="card-divider">

                </div>
            </div>
            {/* {itemCards.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {(item.card.info.price)/100 || (item.card.info.defaultPrice)/100}</li>
            ))} */}
        </div>
    )
}
export default ResMenuCard;