import { useDispatch } from "react-redux";
import { addPopluarMovies } from "../Utils/MovieSclice";
import { useEffect } from "react";
import { API_options } from "../Utils/Constant";




const usePopularMovies = () => {
    const dispatch = useDispatch();

    const fetchMovies = async() =>{
        const getMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options);
        const getMovieJson = await getMovies.json();
        dispatch(addPopluarMovies(getMovieJson?.results));
    
    }
    
    useEffect(()=>{
        fetchMovies();
    },[]);
}

export default usePopularMovies;