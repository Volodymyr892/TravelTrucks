import { createSlice } from "@reduxjs/toolkit";
import { fetchCamper, idCemper } from "./operationsCatalog";
idCemper


const camperSlice = createSlice({
    name: "camper",
    initialState:{
        total: 0,
        items: [],
        idCamper:{},
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
        })
        .addCase(fetchCamper.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(idCemper.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(idCemper.fulfilled, (state, action) => {
            state.loading = false;
            state.idCamper = action.payload;
        })
        .addCase(idCemper.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export const camperReducer = camperSlice.reducer;