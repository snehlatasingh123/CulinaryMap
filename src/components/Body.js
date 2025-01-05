import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import search_icon from "../utils/assets/search.png"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      
    );
    const json = await data.json();
    // console.log(json);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(listOfRestaurants[0].info.id)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };

  const handleTopRatedSort = () => {
    const sortedRestaurants = [...listOfRestaurants].sort((a, b) => {
      const ratingA = parseFloat(a.info.avgRating || 0);
      const ratingB = parseFloat(b.info.avgRating || 0);

      if (ratingB > ratingA) return 1; // Higher rating first
      if (ratingB < ratingA) return -1; // Lower rating later

      // If ratings are the same, sort lexicographically by name
      return a.info.name.localeCompare(b.info.name);
    });

    setFilteredRestaurants(sortedRestaurants);
  };


  console.log(listOfRestaurants);
  console.log("Body rendered");
  // return <Shimmer />;
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        {/* <div className="search">
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
        </div> */}

        <div className="res-search-container" >
              <img  className="res-search-icon" src={search_icon} />
              <div style={{ display: "flex" }} >
                  <input type="text" placeholder="Search for Restaurant" className="res-search-button-input" 
                      value={searchText} onChange={(e) => {
                      setSearchText(e.target.value);
                      const inputvalue = e.target.value.toLowerCase();
                      if(inputvalue === ""){
                        setFilteredRestaurants(listOfRestaurants);
                      }else{
                        const filteredRestaurantList = listOfRestaurants.filter(
                          (res) => res.info.name.toLowerCase().includes(inputvalue)
                        )
                        console.log(filteredRestaurantList)
                        setFilteredRestaurants(filteredRestaurantList);
                      }
                  }} />
              </div>
        </div>
        <button
          className="filter-btn"
          // onClick={() => {
          //   //Filter Logic here
          //   const filteredList = listOfRestaurants.filter(
          //     (res) => res.info.avgRating > 4
          //   );
          //   setFilteredRestaurants(filteredList);
          //   console.log(listOfRestaurants);
          // }}
          onClick={handleTopRatedSort}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div style={{margin:"1% 12%"}}>
        <div className="res-container-headline">
          Restaurants with online food delivery in Delhi
        </div>
      </div>
      <div className={`res-container ${filteredRestaurant.length===0?"no-grid":""}`}>
        
        {
          (filteredRestaurant.length===0) ?
            (
              <div className="no-name-res">
                <p>No restaurants found matching "{searchText}"</p>
              </div>
            ) :
           (filteredRestaurant.map((restaurant) => (
          <Link className="res-card-container" style={{textDecoration:"none"}} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} > <RestaurantCard resData={restaurant} /> </Link>
        )))} 
      </div>
    </div>
  );
};
export default Body;
