import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () =>{
    const movies = useSelector((state) => state.movie?.nowplayingList);

    if(!movies) return;

    const mainMovie = movies[10];
// console.log(mainMovie);
    const { original_title, overview, id} = mainMovie;

    // console.log(original_title);
    // console.log('ob:', overview);





    return(
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>

        </div>

    );
}

export default MainContainer;