import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";


function MobileMenu() {
    const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="sm:hidden bg-white shadow-lg border border-gray-200 rounded-t-lg p-4 transition-all duration-300 ease-in-out animate-slideUp">
      <ul className="flex gap-4 justify-center">
        <li className="hover:text-green-800 font-semibold cursor-pointer text-sm">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-green-800 font-semibold cursor-pointer text-sm">
          <Link to="about">About us</Link>
        </li>
        <li className="hover:text-green-800 font-semibold cursor-pointer text-sm">
          <Link to="Contact">Contact us</Link>
        </li>
        <li className="hover:text-green-800 font-semibold cursor-pointer text-sm">
          <Link to="cart" className="flex items-center">
            <BsFillCartFill />({cartItems.length} items)
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
