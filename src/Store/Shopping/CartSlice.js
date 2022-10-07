import { createSlice } from "@reduxjs/toolkit";
const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const totalAmount =
  localStorage.getItem("totalAmout") !== null
    ? JSON.parse(localStorage.getItem("totalAmout"))
    : 0;

const setLocalStorageFunction = (items, totalQuantity, totalAmout) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("totalAmout", JSON.stringify(totalAmout));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmout: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmout = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // =================== LOCAL STORAGE SECTION ====================

      setLocalStorageFunction(
        state.cartItems.map((item) => item),
        state.totalQuantity,
        state.totalAmout
      );
    },

    // ======= REMOVE ITEM =========

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.cartItems.find((item) => item.id !== id);
      } else {
        state.totalQuantity--;
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }
      state.totalAmout = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      // =================== LOCAL STORAGE SECTION ====================

      setLocalStorageFunction(
        state.cartItems.map((item) => item),
        state.totalQuantity,
        state.totalAmout
      );
    },

    // ======= DELETE ITEM =========

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);

        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmout = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      // =================== LOCAL STORAGE SECTION ====================

      setLocalStorageFunction(
        state.cartItems.map((item) => item),
        state.totalQuantity,
        state.totalAmout
      );
    },
  },
});
export const addingToCart = cartSlice.actions;

export default cartSlice;
