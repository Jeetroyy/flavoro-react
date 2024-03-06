import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-screen h-full lg:w-[20vw] p-5 bg-white mb-3 
        ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all z-50 duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center bg-white my-3 ">
          <span className="bg-white text-xl font-bold text-gray-800 ">
            My Order
          </span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="bg-white border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                price={food.price}
                img={food.img}
                qty={food.qty}
                id={food.id}
                name={food.name}
              />
            );
          })
        ) : (
          <h2>Your cart is empty</h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            total Amount : {totalPrice}
          </h3>
          <hr className="my-2 w-[90vw] lg:w-[18vw]" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 rounded-lg text-white py-2 w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        className={`bg-white rounded-full shadow-md text-5xl fixed bottom-4 right-4 p-3 ${
          totalQty > 0 && "animate-bounce delay-500 trasition-all"
        }`}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
