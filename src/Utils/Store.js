import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSclice';

const Store = configureStore({
    reducer:{
        user: UserReducer,
    }
})

export default Store;