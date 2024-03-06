import React, { useEffect, useState } from "react";
import FoodData from "../data/Fooddata";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySilce";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const setUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    setUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="flex gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden mb-10">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`py-2 px-3 rounded-lg font-bold bg-gray-200 hover:bg-green-500 hover:text-white ${selectedCategory === "All" &&  "bg-green-500 text-white"}`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className= {`py-2 px-3 rounded-lg font-bold bg-gray-200 hover:bg-green-500 hover:text-white ${selectedCategory === category &&  "bg-green-500 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
