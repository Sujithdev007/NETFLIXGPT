import useNowPlaying from "../Hooks/useNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";



const Browse = () => {


    useNowPlaying();



    return(
        <div>
           <Header />
           <MainContainer />
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
