import { Img_CDN } from "../Utils/Constant";


const MovieCard = ({posterPath}) => {
    return(
        <div className="w-48 pr-4">
            <img className="rounded-lg" alt="moviecard" src={Img_CDN+posterPath}/>

        </div>
    )
}

export default MovieCard;