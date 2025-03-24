import React from "react";
import Resturantcard from "./Resturantcard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { swiggyApi } from "../utils/Api";
import { GoSearch } from "react-icons/go";

export default function () {
  const [restaurantData, setRestaurantData] = useState([]);
  const [search, setSearch] = useState("");



  const fetchData = async () => {
    const response = await fetch(swiggyApi);
    const apiData = await response.json();
    setRestaurantData(
      apiData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(Array.isArray(restaurantData))
  console.log(restaurantData);
  return restaurantData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="sm:px-40 px-10">
        <button
          className=" bg-black text-white px-2 text-xs sm:text-base sm:px-6 py-2 hover:shadow-lg shadow-lime-700 transition-shadow duration-300 cursor-pointer rounded-b-xl "
          onClick={() => {
            const filteredList = restaurantData.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setRestaurantData(filteredList);
          }}
        >
          Top Resturants
        </button>
        <div className="relative inline-block w-6/12 ml-8">
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border text-xs sm:text-base border-gray-400 rounded-b-xl w-full py-2 px-2 pr-12"
    placeholder="Search restaurants..."
  />
  <button
    className="absolute right-0  bg-black text-white text-xs sm:text-2xl px-2 py-1 h-full  rounded-b-lg hover:bg-gray-800"
    onClick={() => {
      const searchList = restaurantData?.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(search.toLowerCase())
      );
      setRestaurantData(searchList);
    }}
  >
    <GoSearch/>
  </button>
</div>
      </div>
      <div className="sm:px-20 pt-10 justify-center flex flex-wrap gap-4 ">
        {restaurantData?.map((restaurant) => (
          <Link
            to={"/resturantmenu/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <Resturantcard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}
