import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validateForm";
import homeBGImage from "../assets/homeBg.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    // Form validation
    const invalidDataMessage = checkValidData(
      name?.current?.value,
      email.current.value,
      password.current.value,
    );
    setErrorMessage(invalidDataMessage);
    if (invalidDataMessage) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: name.current.value,
                }),
              );

              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Sign In success", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0">
        <img
          src={homeBGImage}
          alt="bg-img"
          className="h-full w-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 mx-auto mt-24 w-[calc(100%-2rem)] max-w-md rounded-lg bg-black/90 p-6 pt-8 text-white sm:mt-36 sm:w-8/12 sm:p-8 md:w-6/12 lg:w-4/12 xl:w-3/12"
      >
        <h1 className="font-bold text-2xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="name"
            placeholder="Full Name"
            className="p-4 my-4 w-full placeholder:text-gray-500 bg-gray-900 rounded"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full placeholder:text-gray-500 bg-gray-900 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full placeholder:text-gray-500 bg-gray-900 rounded"
        />
        <p className="text-red-500 font-semibold text-xs">{errorMessage}</p>
        <button
          className="p-4 cursor-pointer my-4 bg-red-500 w-full rounded"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "Are you new here? Sign Up"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
