import React from "react";
import { imgURL } from "../utils/Api";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handelItem = (item) =>{
    dispatch(addItem(item))
  }
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            className="flex justify-between items-center py-2 border-b-1 border-gray-500 gap-x-10"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <li className="font-bold text-gray-700 text-sm sm:text-base">{item.card.info.name}</li>
              <p className="font-semibold">
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
              <p className="font-normal text-gray-500 text-sm sm:text-base">
                {item.card.info.description}
              </p>
            </div>
            <div className="3/12">
              <img
                src={imgURL + item?.card?.info?.imageId}
                alt="logo"
                className="sm:h-36 h-20 rounded-xl object-cover object-center sm:w-40 w-24 overflow-clip "
              />
              <button className="p-2 bg-gray-300 shadow-lg rounded-lg relative bottom-5 sm:left-14 left-6 text-xs sm:text-base"
              onClick={()=>(handelItem(item))}>
                add+
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
