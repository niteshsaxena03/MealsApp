import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
{
  /*Default export is being imported*/
}

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
