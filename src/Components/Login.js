import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from "../Utils/validate";
import {  createUserWithEmailAndPassword ,  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBase";
import { useNavigate } from "react-router-dom";
import { background } from "../Utils/Constant";


const Login  = () => {
    const[toggleSignUp, setToggleSignUp] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const ToggleSignIn = () => {
        setToggleSignUp(!toggleSignUp);
    }
    // getting reference of the input box
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const handleOnclick = () => {
     const message =  checkValidate(name?.current?.value, email?.current?.value, password?.current?.value);
     setErrorMessage(message)
      if(message) return

        
      // then autheticate the user

      if(!toggleSignUp){ //Signup Logic

        createUserWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
    // ..
  });


      } else{ //sign in logic

        signInWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
  });

      }
        
       
    }

    return (
        <div>
            <Header />
            <div className="absolute">
            <img src={background}
            // src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="header" />
            </div>
            <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{toggleSignUp ? "Sign In": "Sign Up"} </h1>
                {!toggleSignUp && 
                <input  
                    type="name" 
                    placeholder="Name" 
                    className="p-4 my-4 w-full bg-gray-800"
                    ref={name}
                 />}
                <input 
                    type="email" 
                    placeholder="email address" 
                    className="p-4 my-4 w-full bg-gray-800"
                    ref={email}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    className="p-4 my-4 w-full  bg-gray-800"
                    ref={password}
                />
                <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
                <button onClick={handleOnclick} className="p-4 my-6 bg-red-600 w-full rounded-lg">{toggleSignUp ? "Sign In": "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={ToggleSignIn}>{toggleSignUp ? "New to Netflix? Sign up Now": "Already Rejestered ? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login;