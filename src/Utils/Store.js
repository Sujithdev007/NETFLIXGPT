import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSclice';
import MovieReducer from './MovieSclice';
import GptReducer from './GPTsclice';


const Store = configureStore({
    reducer:{
        user: UserReducer,
        movie: MovieReducer,
        gpt: GptReducer,
    }
})

export default Store;