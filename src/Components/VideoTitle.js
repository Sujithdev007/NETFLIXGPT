
const VideoTitle = ({title, overview}) => {
    return(
        <div className="pt-36 px-12">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg py-3 w-1/4">{overview}</p>
            
            <div className="pt-5">
                <button className="px-[36px] py-[7px] text-lg bg-gray-400 bg-opacity-30 rounded-md">Play ▶️</button>
                <button className="mx-2 px-[36px] py-[7px] text-lg bg-gray-400 bg-opacity-30 rounded-md">More Info ⓘ</button>
            </div>
        </div>
    )
}

export default VideoTitle;