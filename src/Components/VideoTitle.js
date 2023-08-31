
const VideoTitle = ({title, overview}) => {
    return(
        <div className="absolute pt-[10%] w-screen aspect-video bg-gradient-to-tr from-black text-white px-12">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg py-3 w-1/4">{overview}</p>
            
            <div className="pt-5">
                <button className="px-[36px] py-[7px] text-lg  bg-white text-black hover:bg-opacity-50 rounded-md">Play ▶️</button>
                <button className="mx-2 px-[36px] py-[7px] text-lg bg-gray-400 bg-opacity-30 rounded-md">More Info ⓘ</button>
            </div>
        </div>
    )
}

export default VideoTitle;