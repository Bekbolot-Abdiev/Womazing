import { configureStore } from "@reduxjs/toolkit";
import womazingSlice from "./slices/womazingSlice";
import detailIdSlices from "./slices/womazingDetailSlices";

const store=configureStore({
    reducer:{
        products:womazingSlice,
        product:detailIdSlices,
    }
})

export default store