import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatcher = useDispatch();
  const handelClearCart = () => {
    dispatcher(clearCart());
  };
  return (
    <div className="px-60 mt-10">
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      <button
        className="bg-black text-white p-2 rounded-lg mt-5 flex mx-auto mb-4 hover:bg-gray-600 transition duration-300 ease-in-out"
        onClick={handelClearCart}
      >
        Clear Cart
      </button>
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
