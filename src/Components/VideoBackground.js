import { useSelector } from "react-redux";
import useVideoBackground from "../Hooks/useVideoBackground";



const VideoBackground = ({movieId}) => {

   
    useVideoBackground(movieId);
    const trailer = useSelector((state)=> state.movie?.backgroundVideos);   
    return(
        <div>
           <iframe 
               
                src={"https://www.youtube.com/embed/"+trailer?.key}
                title="YouTube video player" 
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >

            </iframe>
        </div>
    )
}

export default VideoBackground;