import { useDispatch } from "react-redux";
import { addtopRatedMovies } from "../Utils/MovieSclice";
import { useEffect } from "react";
import { API_options } from "../Utils/Constant";



const useTopratedMovies = () => {

    const dispatch = useDispatch();

const fetchMovies = async() =>{
    const getMovies = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options);
    const getMovieJson = await getMovies.json();
    console.log("INSIDE",getMovieJson);
    dispatch(addtopRatedMovies(getMovieJson?.results));

}

useEffect(()=>{
    fetchMovies();
},[]);

}

export default useTopratedMovies;