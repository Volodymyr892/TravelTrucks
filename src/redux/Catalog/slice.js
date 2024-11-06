import { createSlice } from "@reduxjs/toolkit";
import { fetchCamper } from "./operationsCatalog";


const camperSlice = createSlice({
    name: "camper",
    initialState:{
        total: 0,
        items: [],
        loading: false,
        error: null,
    },
    extraReducers : builder =>{
        builder
        .addCase(fetchCamper.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchCamper.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload.items;
            console.log("🚀 ~ .addCase ~  state.items:",  state.items)
        })
        .addCase(fetchCamper.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const camperReducer = camperSlice.reducer;