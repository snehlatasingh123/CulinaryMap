import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link } from "react-router";

const Body = () => {
  //Local State Variable
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList); //this is just destructuring of array
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  //WHenever State variable update, react triggers reconciliation cycle (re-renders the component)
  // const arr  = useState( resList );
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1]; // above lines and these are same definition

  // console.log(listOfRestaurants[0].info.cloudinaryImageId)
  // console.log(resList[0].info.cloudinaryImageId)
  useEffect(() => {
    fetchData();
  }, []);
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   // Optional Chaining
  //   setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  //   setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  // };

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5223812&lng=77.4085149&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(listOfRestaurants[0].info.id)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  console.log("Body rendered");

  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />
  // }
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} />
          <button onClick={() => {
            console.log("Search got clicked")
            const filteredRestaurantList = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                // console.log(res.info.name.includes(searchText))
            );
            console.log(filteredRestaurantList)
            setFilteredRestaurants(filteredRestaurantList);
          }} >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          // <p>ghjk</p>
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} > <RestaurantCard resData={restaurant} /> </Link>
        ))} 
      </div>
    </div>
  );
};
export default Body;
