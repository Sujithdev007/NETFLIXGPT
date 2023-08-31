import MovieCard from "./MovieCard";


const MovieList = ({title, movies}) => {
    return(
        <div className="px-6 text-white">
              <h1 className="text-3xl py-4">{title}</h1>
            <div className="flex overflow-x-scroll">
                
                <div className="flex">
                    {movies?.length ? movies?.map((movie)=>   <MovieCard posterPath = {movie?.poster_path} />) : ''}
                </div>
            </div>

        </div>
    )
}

export default MovieList;