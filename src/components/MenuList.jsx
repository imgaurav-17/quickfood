import { useState } from "react";
import ItemList from "./ItemList";

const MenuList = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  
  const clickHandler = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="p-4 border-b-2 border-gray-200">
        <div
          className="flex justify-between items-center cursor-pointer pb-2"
          onClick={clickHandler}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        <div className={`transition-all ease-in-out duration-600 ${
          showItems ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          
            <ItemList items={data.itemCards} />
          
        </div>
      </div>
    </div>
  );
};

export default MenuList;