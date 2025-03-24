import useMenu from "../utils/useMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { imgURL } from "../utils/Api";
import MenuList from "./MenuList";

const Resturantmenu = () => {
  const { resid } = useParams();
  const menuData = useMenu(resid);
  if (menuData === null) return <Shimmer />;
  const { name, avgRating, costForTwoMessage, totalRatingsString, cuisines } =
    menuData?.cards[2]?.card?.card?.info;
  // console.log(menuData?.cards[2]?.card?.card?.info);
  // console.log(
  //   menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // );
  console.log(menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 const categories = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] == 
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
  console.log(categories);
  

  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:px-60 px-10 pt-10">
        <p className="font-bold text-xl">{name}</p>
        <div className=" px-2 py-3 border-2 border-gray-200 rounded-lg ">
          <p className="font-bold text-sm">
            {avgRating} ({totalRatingsString}) - {costForTwoMessage}
          </p>
          <p>{cuisines.join(", ")}</p>
        </div>
      </div>
      <div className="sm:px-60 px-10 py-10">
        {categories.map((category) => <MenuList data={category.card.card} key={category.card.card.id}/>)}
      </div>
    </div>
  );
};

export default Resturantmenu;
