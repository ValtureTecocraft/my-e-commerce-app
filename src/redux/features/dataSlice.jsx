import { createSlice } from "@reduxjs/toolkit";
// import { API } from "../../api/features";

// Define an async thunk for fetching user registration data
// export const fetchData = createAsyncThunk(
//   "userData/fetchRegistrationData", // Provide a unique action type
//   async () => {
//     try {
//       const response = await API.get("products");
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

const initialState = {
  isDataLoading: false,
  product: [],
  cart: [],
  wishList: [],
  categories: [],
};

const dataSlice = createSlice({
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
      state.cart = [...state.cart, action.payload];
    },
    setWishList: (state, action) => {
      state.wishList = [...state.wishList, action.payload];
    },
    removeFromWishList: (state, action) => {
      const idToRemove = action.payload._id;
      state.wishList = state.wishList.filter((item) => item._id !== idToRemove);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setDataLoading,
  setProducts,
  setCart,
  setWishList,
  setCategories,
  removeFromWishList,
} = dataSlice.actions;

export default dataSlice.reducer;

export const dataState = (state) => state.userData;
