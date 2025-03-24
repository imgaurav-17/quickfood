import React from "react";
import { imgURL } from "../utils/Api";

function Resturantcard({ resData }) {
  const { name, avgRating, cloudinaryImageId, cuisines, locality } =
    resData?.info;
  return (
    <div className="flex sm:flex-col justify-center gap-4 p-4 sm:w-56 w-96 hover:ease-in-out transform hover:scale-95 transition duration-300 ease-in">
      <div className="w-6/12 sm:w-auto">
        <img
          src={imgURL + cloudinaryImageId}
          alt="logo"
          className="w-52 sm:w-48 rounded-xl object-cover object-center sm:h-32 h-28 "
        />
      </div>
      <div className="w-6/12 sm:w-auto">
        <p className="font-bold">{name}</p>
        <p className="font-medium">{avgRating}</p>
        <p className="text-gray-500 font-medium">{cuisines.join(", ")}</p>
        <p className="text-gray-500 font-medium">{locality}</p>
      </div>
    </div>
  );
}

export default Resturantcard;