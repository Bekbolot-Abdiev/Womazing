import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const { id } = useParams();

export const getDetailProduct = createAsyncThunk(
  "product/getDetailProduct",
  async (id) => {
    const { data } = await axios.get(
      "https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name/" + id
    );
    return data;
  }
);

const detailIdSlices = createSlice({
  name: "product",
  initialState: {
    productData: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetailProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetailProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.productData = payload;
      })
      .addCase(getDetailProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default detailIdSlices.reducer;
