import React from "react";
import { imgURL } from "../utils/Api";

function Resturantcard({ resData }) {
  const { name, avgRating, cloudinaryImageId, cuisines, locality } =
    resData?.info;
  return (
    <div className="flex flex-col gap-4 p-4 w-56 hover:ease-in-out transform hover:scale-95 transition duration-300 ease-in">
      <img
        src={imgURL + cloudinaryImageId}
        alt="logo"
        className="w-48 rounded-xl object-cover object-center h-32 "
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="font-medium">{avgRating}</p>
        <p className="text-gray-500 font-medium">{cuisines.join(", ")}</p>
        <p className="text-gray-500 font-medium">{locality}</p>
      </div>
    </div>
  );
}

export default Resturantcard;