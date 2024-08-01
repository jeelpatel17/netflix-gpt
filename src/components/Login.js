import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  let toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div
      id="loginForm"
      className="text-white h-screen flex justify-center items-center"
    >
      <form
        className={`flex flex-col h-3/4 ${
          isSignIn ? "w-3/12" : "w-fit"
        } gap-5 justify-center bg-black bg-opacity-60 px-16`}
      >
        <h1 className="text-3xl font-extrabold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className="flex gap-4">
            <input
              className="bg-black bg-opacity-50 outline outline-1 outline-gray-500 py-3 px-3 rounded-sm text-sm"
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-black bg-opacity-50 outline outline-1 outline-gray-500 py-3 px-3 rounded-sm text-sm"
              type="text"
              placeholder="Last Name"
            />
          </div>
        )}
        {isSignIn ? (
          <input
            className="bg-black bg-opacity-50 outline outline-1 outline-gray-500 py-3 px-3 rounded-sm text-sm"
            type="text"
            placeholder="Email or phone number"
          />
        ) : (
          <div className="flex gap-4">
            <input
              className="bg-black bg-opacity-50 outline outline-1 outline-gray-500 py-3 px-3 rounded-sm text-sm"
              type="email"
              placeholder="Email address"
            />
            <input
              className="bg-black bg-opacity-50 outline outline-1 outline-gray-500 py-3 px-3 rounded-sm text-sm"
              type="tel"
              placeholder="Phone number"
            />
          </div>
        )}
        <input
          className="bg-black bg-opacity-50 outline outline-1 outline-gray-500 py-3 px-3 rounded-sm text-sm"
          type="password"
          placeholder="Password"
        />
        <button className="bg-[#c11119] px-3 py-2 rounded-sm">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="text-center">Forgot password?</h3>
        <label className="text-sm">
          <input className="gap-3" type="checkbox" />
          Remember me
        </label>
        <h3 className="text-sm">
          {isSignIn ? (
            <>
              <span className="text-[#ffffffb3]">New to Netflix?</span>{" "}
              <span onClick={toggleSignIn} className="cursor-pointer">
                Sign up now.
              </span>
            </>
          ) : (
            <>
              <span className="text-[#ffffffb3]">Already a member?</span>{" "}
              <span onClick={toggleSignIn} className="cursor-pointer">
                Sign In now.
              </span>
            </>
          )}
        </h3>
        <p className="text-xs text-[#8c8c8c]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
