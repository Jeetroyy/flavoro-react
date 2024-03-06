import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SerachSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search here"
          name="search"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="border border-gray-400 rounded-lg outline-none p-3 w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
