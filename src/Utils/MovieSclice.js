import { createSlice } from "@reduxjs/toolkit"


const MovieSclice = createSlice({
    name: 'movie',
    initialState:{
        nowplayingList: null,
        backgroundVideos: null
    },
    reducers:{
        addMovieLists: (state, action)=>{
            state.nowplayingList = action.payload;
        },
        addBackgroundVideo: (state, action) => {
            state.backgroundVideos = action.payload;
        }
    }
})


export default MovieSclice.reducer;

export const { addMovieLists, addBackgroundVideo } = MovieSclice.actions;