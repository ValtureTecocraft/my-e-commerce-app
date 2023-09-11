import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api/features";

// Define an async thunk for fetching user registration data
export const fetchData = createAsyncThunk(
  "userData/fetchRegistrationData", // Provide a unique action type
  async () => {
    try {
      const response = await API.get("products");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  isDataLoading: false,
  product: [],
  cart: [],
  wishList: [],
  categories: [],
};

const signupSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setDataLoading: (state, action) => {
      state.isDataLoading = action.payload;
    },
    setProducts: (state, action) => {
      state.product = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setWishList: (state, action) => {
      state.wishList = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isDataLoading = false;
      });
  },
});

export const {
  setDataLoading,
  setProducts,
  setCart,
  setWishList,
  setCategories,
} = signupSlice.actions;

export default signupSlice.reducer;
