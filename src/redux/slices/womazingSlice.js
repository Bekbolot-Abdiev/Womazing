import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProduct = createAsyncThunk('products/getProduct', async () => {
    const {data} = await axios.get("https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name");
    return data;
   }
);

const womazingSlice = createSlice({
    name:'products',
    initialState:{
        productsData:[],
        loading:false,
        error:''
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.pending, (state) => {
            state.loading = true
        })
        .addCase(getProduct.fulfilled, (state, {payload}) => {
            state.loading = false
            state.productsData = payload
        })
        .addCase(getProduct.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
    }
});


export default womazingSlice.reducer //initialState