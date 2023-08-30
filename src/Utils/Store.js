import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSclice';
import MovieReducer from './MovieSclice';


const Store = configureStore({
    reducer:{
        user: UserReducer,
        movie: MovieReducer,
    }
})

export default Store;