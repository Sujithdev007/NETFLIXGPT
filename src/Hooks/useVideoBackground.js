import {  useEffect } from "react";
import { API_options } from "../Utils/Constant"
import { useDispatch } from "react-redux";
import { addBackgroundVideo } from "../Utils/MovieSclice";


const useVideoBackground = (movieId) => {
    const dispatch = useDispatch();

    const getBackgroundVideo = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options);
        const dataResponse = await data.json();
        const backgroundVideo = dataResponse?.results;
        const filterData = backgroundVideo?.filter((movie) => movie.type==='Trailer');
        const trailer =filterData?.length ?  filterData[0]: backgroundVideo[0];

        dispatch(addBackgroundVideo(trailer));
        
        
    }

    useEffect(()=>{
            getBackgroundVideo();
    }, [])
}

export default useVideoBackground;