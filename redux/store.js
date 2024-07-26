import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./api";


const reduxStore = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
    },
    middleware: defaulmoddalware => [...defaulmoddalware(), Api.middleware]
})

export default reduxStore