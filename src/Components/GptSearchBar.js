

const GptSearchBar = () => {
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12">
                <input className=" m-4 px-25  py-[14px] col-span-9" placeholder="Enter Your Movie to Enjoy" type="text"/>
                <button className="bg-red-500 px-4 py-1 m-4  rounded-lg col-span-3">Search</button>
               
            </form>
        </div>
    )
}

export default GptSearchBar;