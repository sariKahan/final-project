import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/categoriesSlice";
import personSlice from "./features/personSlice";
import filterSlice from "./features/filterSlice";
import imageSlice from "./features/imageSlice";

export default configureStore({
    reducer: {
      imageSlice,
      categoriesSlice,
      personSlice,
    //   filterSlice
    }
  });