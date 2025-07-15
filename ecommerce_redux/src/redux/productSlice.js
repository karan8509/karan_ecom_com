// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   AllProduct: [],
// };

// const userProductStore = createSlice({
//   name: "Product",

//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.AllProduct.push(action.payload);
//     },
//     removeCartProduct: (state, action) => {
//       state.AllProduct = state.AllProduct.filter(
//         (item) => item.id !== action.payload.id
//       );
//     },
//   },
// });

// export const { addToCart, removeCartProduct } = userProductStore.actions;
// export default userProductStore.reducer;
import { createSlice } from "@reduxjs/toolkit";

// ✅ Define initialState properly
const initialState = {
  AllProduct: [],
};

const userProductStore = createSlice({
  name: "product",          // ✅ Correct position
  initialState,             // ✅ Used properly
  reducers: {
    addToCart: (state, action) => {
      state.AllProduct.push(action.payload);  // Example logic
    },
    removeCartProduct: (state, action) => {
      state.AllProduct = state.AllProduct.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeCartProduct } = userProductStore.actions;
export default userProductStore.reducer; // ✅ Don't forget this!
