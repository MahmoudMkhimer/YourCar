import { configureStore } from "@reduxjs/toolkit";
import ItemsReducer from "./ItemsReducer";
import CartShow from "./CartShow";
const store = configureStore({
  reducer: {
    items: ItemsReducer,
    visible: CartShow,
  },
});
export default store;
