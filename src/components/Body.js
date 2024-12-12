import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { use, useEffect, useState } from "react";

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList); //this is just destructuring of array
  // const arr  = useState( resList );
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1]; // above lines and these are same definition

  //Normal JS variable
  // let listOfRestaurantsJS = [
  //     {
  //         data: {
  //             id: "334475",
  //             name: "KFC",
  //             cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/a64ce30a-7492-444b-a485-1b7e2804e091_671928.JPG",
  //             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //             costForTwo: 25000,
  //             costForTwoString: "₹250 FOR TWO",
  //             deliveryTime: 31,
  //             avgRating: "3.8",
  //         }
  //     },
  //     {
  //         data: {
  //             id: "334476",
  //             name: "Meghana Foods",
  //             cloudinaryImageId: "w_660/iivuhjc2mswi9lublktf",
  //             cuisines: [
  //                 "Biryani",
  //                 "Andhra",
  //                 "South Indian",
  //                 "North Indian",
  //                 "Chinese",
  //                 "Seafood",
  //               ],
  //             costForTwo: 25000,
  //             costForTwoString: "₹250 FOR TWO",
  //             deliveryTime: 31,
  //             avgRating: "4.8",
  //         }
  //     }

  // ]

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5223812&lng=77.4085149&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(restaurants[0].info.id)
    setListOfRestaurants(restaurants);
  };

  console.log("Body rendered");
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
