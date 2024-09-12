import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignForm = () => {
    setErrorMsg("");
    setIsSignForm(!isSignForm);
  };

  const validateForm = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name?.current?.value,
      isSignForm
    );
    setErrorMsg(message);
    if (message) return;
    if (message == null) {
      if (!isSignForm) {
       
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user; 
            updateProfile(user,{
              displayName : name?.current?.value,
              photoURL: "https://avatars.githubusercontent.com/u/32638942?v=4",
            }).then(()=>{
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName : displayName,
                photoURL: photoURL
              }))
               navigate("/browse");
            })
          
          })
          .catch((error) => {
            setErrorMsg("Sign up failed");
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/browse");
            // ...
          })
          .catch((error) => {
            setErrorMsg("Login failed. Incorrect user or password");
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl m-2">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 m-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 m-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 m-2 font-bold text-lg">{errorMsg}</p>
        <button
          className="p-4 m-2 w-full my-4 bg-red-500"
          onClick={validateForm}
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <h3
          className="cursor-pointer p-2 m-2 w-full my-1"
          onClick={toggleSignForm}
        >
          {isSignForm
            ? "New to Netflix? Sign up Now"
            : "Already Registered Sign In now"}{" "}
        </h3>
      </form>
    </div>
  );
};

export default Login;
