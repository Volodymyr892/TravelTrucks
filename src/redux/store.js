import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./Catalog/slice";

export const store = configureStore({
    reducer: {
        camper: camperReducer
    }
})