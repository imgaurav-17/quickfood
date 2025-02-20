import React from 'react'
import Resturantcard from './Resturantcard'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import { swiggyApi } from '../utils/Api'

export default function () {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch(swiggyApi);
    const fetchData = await response.json();
    setRestaurantData(fetchData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  return restaurantData.length === 0 ? <Shimmer /> : (
    <div>
      <div className='px-40'>
        <button className=' bg-black text-white px-6 py-2 hover:shadow-lg shadow-lime-700 transition-shadow duration-300 cursor-pointer rounded-b-xl '
        onClick={()=> {const filteredList = restaurantData.filter((restaurant) => restaurant.info.avgRating > 4.5)
          setRestaurantData(filteredList)
        }}>
          Top Resturants
        </button>
      </div>
      <div className='px-20 pt-10 justify-center flex flex-wrap gap-4 '>
        {restaurantData.map((restaurant) => (
          <Link to={"/resturantmenu/" + restaurant.info.id} key={restaurant.info.id}>
            <Resturantcard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}
