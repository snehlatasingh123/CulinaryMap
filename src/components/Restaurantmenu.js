import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    console.log(resId);

    //useEffect takes two arguments, one callback function, another optional dependency array
    //if the dependency array is not there, useEffect will be called everytime the component renders, 
    //but it is not necessary as we don't want to make the API call everytime the component renders, 
    // we just want make it once  when our component renders (empty dependency array)
    useEffect(()=>{
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    if (resInfo === null) return <Shimmer />; 
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // console.log(resInfo?.cards[2]?.card?.card?.info.name);
    // console.log(name);
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[(1 || 2)]?.card?.card;
                                                                    //condition cards[1 or 2] needed, cause one of the API data is at 1 and others are at2
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards ) || {};
    console.log(itemCards);

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} : {costForTwoMessage}</p>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {(item.card.info.price)/100 || (item.card.info.defaultPrice)/100}</li>
            ))}
        </div>
    )
}
export default RestaurantMenu;