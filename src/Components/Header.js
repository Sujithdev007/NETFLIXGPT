import { FaSignOutAlt } from "react-icons/fa";
import {  signOut } from "firebase/auth";
import { auth } from "./FireBase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser,removeUser } from "../Utils/UserSclice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { toogleGPTView } from "../Utils/GPTsclice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user  =  useSelector((state) => state.user);
    const {toogleGPT} = useSelector((state)=> state?.gpt);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                navigate('/browse');
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate('/');
            }
    });
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
           dispatch(removeUser());
          }).catch((error) => {
            navigate('/error');
          });
    }

    const handleGPTSearch = () => {
      dispatch(toogleGPTView())
    }
    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {user && <div className="">
              <button onClick={handleGPTSearch} className="bg-red-700 px-[30px] py-[15px] mr-2">{toogleGPT ?  "home" :"GPTSearch" }</button>
                <button onClick={handleSignOut} className="bg-red-700 p-5"><h1><FaSignOutAlt/></h1></button>
               
            </div>}
        </div>
    )
}

export default Header;