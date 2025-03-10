import { useState } from "react";
import ItemList from "./ItemList";

const MenuList = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const clickHandler = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="p-4 border-b-2 bg-emerald-100 rounded-lg border-gray-400">
        <div
          className="flex justify-between items-center cursor-pointer pb-2"
          onClick={clickHandler}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        <div>
        {showItems && < ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
