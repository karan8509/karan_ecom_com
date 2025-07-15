import { configureStore } from "@reduxjs/toolkit";
import userProductStore from './productSlice'

const Store = configureStore({
    reducer : {
        product : userProductStore
    }
})

export default Store