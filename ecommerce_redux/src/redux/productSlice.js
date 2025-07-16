import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Define initialState properly
const initialState = {
  AllProduct: JSON.parse(localStorage.getItem("product")) || [],
  isLoding: false,
  data: [],
  isError: false,
};

export const fetchProductData = createAsyncThunk("fatchproduct", async () => {
  const product = await axios.get("https://api.escuelajs.co/api/v1/products");
  return product.data;
});

const userProductStore = createSlice({
  name: "product", // ✅ Correct position
  initialState, // ✅ Used properly
  reducers: {
    addToCart: (state, action) => {
      state.AllProduct.push(action.payload); // Example logic
      localStorage.setItem("product", JSON.stringify(state.AllProduct));
    },
    removeCartProduct: (state, action) => {
      state.AllProduct = state.AllProduct.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("product", JSON.stringify(state.AllProduct));
    },
   
  },
   extraReducers: (builder) => {
      builder.addCase(fetchProductData.pending, (state, action) => {
        state.isLoding = true;
      });

      builder.addCase(fetchProductData.fulfilled, (state, action) => {
        state.isLoding = false;
        state.data = action.payload;
      });

      builder.addCase(fetchProductData.rejected, (state, action) => {
        console.log("error in reject ", action.state);
        state.isError = true;
      });
    },
});

export const { addToCart, removeCartProduct } = userProductStore.actions;
export default userProductStore.reducer; // ✅ Don't forget this!
