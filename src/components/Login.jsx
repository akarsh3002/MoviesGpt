import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-3/12 absolute rounded-lg p-8 bg-black/90 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-2xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="name"
          placeholder="Full Name"
          className="p-4 my-4 w-full placeholder:text-gray-500 bg-gray-900 rounded"
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full placeholder:text-gray-500 bg-gray-900 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full placeholder:text-gray-500 bg-gray-900 rounded"
        />
        <button type="submit" className="p-4 cursor-pointer my-4 bg-red-500 w-full rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to netflix? Sign Up"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
