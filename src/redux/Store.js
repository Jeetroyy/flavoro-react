import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySilce from "./slices/CategorySilce";
import SerachSlice from "./slices/SerachSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySilce,
    search: SerachSlice,
  },
});

export default Store;
