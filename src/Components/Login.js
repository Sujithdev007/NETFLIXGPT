import Header from "./Header";
import { useState } from "react";

const Login  = () => {
    const[toggleSignUp, setToggleSignUp] = useState(true);

    const ToggleSignIn = () => {
        setToggleSignUp(!toggleSignUp);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="header" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{toggleSignUp ? "Sign In": "Sign Up"} </h1>
                {!toggleSignUp && <input  type="name" placeholder="Name" className="p-4 my-4 w-full bg-gray-800"  />}
                <input type="email" placeholder="email address" className="p-4 my-4 w-full bg-gray-800" />
                <input type="password" placeholder="password" className="p-4 my-4 w-full  bg-gray-800" />
                <button className="p-4 my-6 bg-red-600 w-full rounded-lg">{toggleSignUp ? "Sign In": "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={ToggleSignIn}>{toggleSignUp ? "New to Netflix? Sign up Now": "Already Rejestered ? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login;