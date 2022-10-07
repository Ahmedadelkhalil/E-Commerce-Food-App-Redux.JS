import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Shopping/CartSlice";
import cartUi from "./Shopping/CartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUi.reducer,
  },
});

export default store;
