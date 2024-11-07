import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io"

export const fetchCamper = createAsyncThunk(
    "camper/fetchCamper",
    async(filter, thunkAPI)=>{
        try {
            const response = await axios.get("/campers", {params: filter})
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const idCemper = createAsyncThunk (
    "camper/idCamper",
    async(id, thunkAPI)=>{
        try {
            const response = await axios.get(`/campers/${id}`)
            
            console.log("🚀 ~ async ~ response:", response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)