import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () =>{
    const movies = useSelector((state) => state.movie?.nowplayingList);

    if(!movies) return;

    const mainMovie = movies[1];
    const { original_title, overview, id} = mainMovie;





    return(
        <div className="w-screen">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>

        </div>

    );
}

export default MainContainer;