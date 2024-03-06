import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const ItemCard = ({ id, name, img, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 rounded-lg shadow-md p-2">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, img, price, qty }));
          toast(`${name} Removed`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 cursor-pointer text-gray-600"
      />
      <img src={img} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="text-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold ">₹{price}</span>
          <div className="flex justify-center items-center absolute right-7 gap-2">
            <AiOutlineMinus
              onClick={() => {
                qty > 0 ? dispatch(decrementQty({ id })) : (qty = 0);
              }}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:border-none 
          hover:bg-green-500 rounded-md p-1 text-xl trasition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => {
                dispatch(incrementQty({ id }));
              }}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:border-none 
          hover:bg-green-500 rounded-md p-1 text-xl trasition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
