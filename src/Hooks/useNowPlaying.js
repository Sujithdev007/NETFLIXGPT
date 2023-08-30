import { useDispatch } from "react-redux";
import { addMovieLists} from '../Utils/MovieSclice';
import { useEffect } from "react";
import { API_options } from "../Utils/Constant";


const useNowPlaying  = () => {
const dispatch = useDispatch();

const fetchMovies = async() =>{
    const getMovies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en&page=1', API_options);
    const getMovieJson = await getMovies.json();
    dispatch(addMovieLists(getMovieJson?.results));

}

useEffect(()=>{
    fetchMovies();
},[]);

}

export default useNowPlaying;