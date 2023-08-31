import useNowPlaying from "../Hooks/useNowPlaying";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopratedMovies from "../Hooks/useTopratedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {


    useNowPlaying();
    usePopularMovies();
    useUpcomingMovies();
    useTopratedMovies();



    return(
        <div>
           <Header />
           <MainContainer />
           <SecondaryContainer />
           {
            //MAIN CONTAINER
                // --video background
                // --video title
            //seconadry conatiner
                //--movie lists*n
                //cards lits*n
           }
        </div>
    )
} 

export default Browse;
