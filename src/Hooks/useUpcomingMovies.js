import { useEffect } from "react";
import { addUpcomingMovies } from "../Utils/MovieSclice";
import { useDispatch } from "react-redux";
import { API_options } from "../Utils/Constant";


const useUpcomingMovies = () =>{
    const dispatch = useDispatch();

    const fetchMovies = async() =>{
        const getMovies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options);
        const getMovieJson = await getMovies.json();
        dispatch(addUpcomingMovies(getMovieJson?.results));
    
    }
    
    useEffect(()=>{
        fetchMovies();
    },[]);
}

export default useUpcomingMovies;