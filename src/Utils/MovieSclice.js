import { createSlice } from "@reduxjs/toolkit"


const MovieSclice = createSlice({
    name: 'movie',
    initialState:{
        nowplayingList: null,
        backgroundVideos: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies:null,
    },
    reducers:{
        addMovieLists: (state, action)=>{
            state.nowplayingList = action.payload;
        },
        addBackgroundVideo: (state, action) => {
            state.backgroundVideos = action.payload;
        },
        addPopluarMovies:(state, action) => {
            state.popularMovies = action.payload;
        },
        addtopRatedMovies:(state, action) => {
            state.topRatedMovies =action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies =action.payload;
        }
    }
})


export default MovieSclice.reducer;

export const { addMovieLists, addBackgroundVideo, addPopluarMovies, addtopRatedMovies, addUpcomingMovies } = MovieSclice.actions;