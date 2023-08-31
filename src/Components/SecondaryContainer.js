import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {

    const moviesList = useSelector((state)=> state.movie?.nowplayingList);
    const toprated = useSelector((state)=> state.movie?.topRatedMovies);
    const upcoming = useSelector((state) => state.movie?.upcomingMovies);
    const popluar = useSelector((state) => state.movie?.popularMovies);

    console.log("top:", toprated);
    console.log("upcoming:", upcoming);
    console.log("popluar:", popluar);
    return(
        <div className="bg-black">
            {
                //movielist - nowplaying
                //movielist - trending movie list
                //movie list -trending
                //movielist
            }
            <div className="-mt-52 pl-12 relative z-30">
            {moviesList &&    <MovieList title={"Now Playing"} movies={moviesList}/> }
            {toprated &&    <MovieList title={"Top Rated"} movies={toprated}/> }
            {upcoming &&    <MovieList title={"Up coming"} movies={upcoming}/> }
            {popluar &&    <MovieList title={"Popular"} movies={popluar}/> }
            {/* {moviesList &&    <MovieList title={"Now Playing"} movies={moviesList}/> }
            {moviesList &&    <MovieList title={"Now Playing"} movies={moviesList}/> }
            {moviesList &&    <MovieList title={"Now Playing"} movies={moviesList}/> }
            {moviesList &&    <MovieList title={"Now Playing"} movies={moviesList}/> } */}
            </div>
         
        </div>
    )
}

export default SecondaryContainer;