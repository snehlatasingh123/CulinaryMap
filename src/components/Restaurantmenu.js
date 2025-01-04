import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import greenCircle from "../utils/assets/green_circle.png"
import ResMenuCard from "../components/ResMenuCard";
import menu_design from "../utils/assets/menu_design.svg"
import search_icon from "../utils/assets/search.svg"
import ShimmerMenuCard from "../components/ShimmerMenuCard"

const RestaurantMenu = () => {

    const [searchDish, setSearchDish] = useState("")
    const [listOfDishes, setListOfDishes] = useState([]);
    const [filteredDishes, setFilteredDishes] = useState([]);
    const [resInfo, setResInfo] = useState(null);
    const [isVegDish, setIsVegDish] = useState(false);
    const [isNonVeg, setIsNonVeg] = useState(false);

    const { resId } = useParams();
    console.log(resId);

    
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
        setListOfDishes((json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards===undefined ? 
            json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards: 
            json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
        ));
        setFilteredDishes((json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards===undefined ? 
            json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards: 
            json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
        ));
        console.log("list", json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
        console.log(listOfDishes);
        console.log("listOfDishes", listOfDishes);

    };
    // return <ShimmerMenuCard />;
    if (resInfo === null) return <ShimmerMenuCard />;

    const { name, cuisines, costForTwoMessage, areaName, sla, itemAttribute } = (resInfo?.cards[2]?.card?.card?.info===undefined?
        resInfo?.cards[1]?.card?.card?.info: resInfo?.cards[2]?.card?.card?.info
    );
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itemCards",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    // Handlers to toggle the buttons
    // const handleVegToggle = () => {

    //     if(!isVegDish){
    //       const vegDish = listOfDishes.filter((dish) => (dish.card.info.isVeg===1));
    //       setFilteredDishes(vegDish);
    //     }
    //     if(isVegDish){
    //         setFilteredDishes(listOfDishes);
    //     }
    //     setIsVegDish(!isVegDish);
    //     setIsNonVeg(false); // Disable Non-Veg when Veg is selected
    // };

    // const handleNonVegToggle = () => {
    //     setIsNonVeg(!isNonVeg);
    //     setIsVegDish(false); // Disable Veg when Non-Veg is selected
    // };

    return (
        <div className="res-menu-body">
            <div className="menu-header-container">
                <h1 className="menu-header">{name}</h1>
            </div>
            <div className="menu-top-card">
                <div className="menu-top-card-box">
                    <div style={{ marginBottom: "20px" }}></div>
                    <div className="cost-for-two">
                        <div className="image-container-green">
                            <img loading="lazy" style={{ width: "20px", height: "20px" }} src={greenCircle} />
                        </div>
                        <div className="new-key">NEW</div>
                        <div style={{ margin: "0px 8px" }}>•</div>
                        <div className="cost-for-two-value">{costForTwoMessage}</div>
                    </div>
                    <div className="cusines-box">
                        <div className="cusines-box-text">{cuisines.join(", ")}</div>
                    </div>
                    <div className="outlet-box">
                        <div className="outlet-left-line">
                            <div className="outlet-left-line-one"></div>
                            <div className="outlet-left-line-two"></div>
                            <div className="outlet-left-line-three"></div>
                        </div>
                        <div className="outlet-box-right">
                            <div className="outlet-box-right-top">
                                <div className="outlet-box-right-text">Outlet</div>
                                <div className="outlet-box-right-address">{areaName}</div>
                            </div>
                            <div className="outlet-box-right-bottom">
                                <div className="outlet-box-right-delTime">{sla.slaString}</div>
                            </div>

                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="menu-heading-container">
                <img loading="lazy" src={menu_design} />
            </div>
            <div className="menu-search-container">
                <img loading="lazy" className="menu-search-icon" src={search_icon} />

                <div style={{ display: "flex" }} >
                    <input type="text" placeholder="Search for Dishes" className="menu-search-button-input" 
                        value={searchDish} onChange={(e) => {
                        setSearchDish(e.target.value);
                        const dishInput = e.target.value.toLowerCase();
                        if(dishInput===""){
                            setFilteredDishes(listOfDishes);
                        }else{
                            const filteredDish = listOfDishes.filter((dish) => (dish.card.info.name.toLowerCase().includes(searchDish.toLowerCase()) || dish.card.info.category.toLowerCase().includes(searchDish.toLowerCase()) ));
                            setFilteredDishes(filteredDish);
                        }
                        setIsNonVeg(false);
                        setIsVegDish(false);
                    }} />
                    {/* <button className="menu-search-button" onClick={() => {
                        const filteredDish = listOfDishes.filter((dish) => (dish.card.info.name.toLowerCase().includes(searchDish.toLowerCase()) || dish.card.info.category.toLowerCase().includes(searchDish.toLowerCase()) ));
                        setFilteredDishes(filteredDish);
                        setIsNonVeg(false);
                        setIsVegDish(false);
                    }} > */}
                        {/* <div className="menu-search-button-text">Search for Dishes</div> */}
                    {/* </button> */}
                </div>

            </div>

            <div className="toggle-buttons" >
                <button className={`toggle-button ${isVegDish ? "active" : ""}`}
                    onClick={() => {
                        isVegDish ? setFilteredDishes(listOfDishes) : setFilteredDishes(listOfDishes.filter((dish) => (dish.card.info.itemAttribute.vegClassifier === "VEG")));
                        setIsVegDish(!isVegDish);
                        setIsNonVeg(false);
                        setSearchDish("");
                    }} >
                    <div className={`icon-container ${isVegDish ? "active" : ""}`} >
                        <span className={`circle ${isVegDish ? "active" : ""}`}></span>
                    </div>
                    <div className="toggle-slider"></div>
                </button>

                <button className={`toggle-button ${isNonVeg ? "active non-veg" : ""}`}
                    onClick={() => {
                        isNonVeg ? setFilteredDishes(listOfDishes) : setFilteredDishes(listOfDishes.filter((dish) => (dish.card.info.itemAttribute.vegClassifier === "NONVEG")));
                        setIsNonVeg(!isNonVeg);
                        setIsVegDish(false);
                        setSearchDish("");
                    }} >
                    <div className={`icon-container ${isNonVeg ? "active non-veg" : ""}`} >
                        <span className={`triangle ${isNonVeg ? "active non-veg" : ""}`}></span>
                    </div>
                    <div className="toggle-slider"></div>
                </button>
            </div>




            {filteredDishes.map((item) => (
                <ResMenuCard key={item.card.info.id} dishData={item} />
            ))}

            <p>{cuisines.join(", ")} : {costForTwoMessage}</p>
            {filteredDishes.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {(item.card.info.price) / 100 || (item.card.info.defaultPrice) / 100}</li>
            ))}
        </div>
    )
}
export default RestaurantMenu;