import { useSelector } from "react-redux";
import useNowPlaying from "../Hooks/useNowPlaying";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopratedMovies from "../Hooks/useTopratedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTsearch from "./GPTsearch";



const Browse = () => {


    useNowPlaying();
    usePopularMovies();
    useUpcomingMovies();
    useTopratedMovies();

    const {toogleGPT} = useSelector((state)=> state?.gpt);

    // console.log('---->',toogleGPT);



    return(
        <div>
           <Header />
           {
                toogleGPT ? 
                 <GPTsearch /> : 
           <>
                <MainContainer />
                <SecondaryContainer />
           
           </>}
           
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
