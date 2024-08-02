import { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  let fName = useRef(null);
  let email = useRef(null);
  let pwd = useRef(null);
  let dispatch = useDispatch();

  let validateInfo = () => {
    let msg = validateData(email.current.value, pwd.current.value);
    setMsg(msg);
    // If there's a message returned from the validateData function, then don't proceed with the function, just stop the func execution from that point
    if (msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pwd.current.value
      )
        .then((userCredential) => {
          let user = userCredential.user;

          updateProfile(user, {
            displayName: fName.current.value,
            photoURL:
              "https://occ-0-19-90.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb7kuX9mKPrFGfvZ0oJ9eMBbFCB7ZhumT7uHIoILp1FtGpeIhybv8zoGgNK76rr7N8bMdhn-kkbRnD6ut8mFLwqYXmdpwCw.png?r=eea",
          })
            .then(() => {
              console.log("Username updated!");
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          setMsg(err.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
        .then((userCredential) => {
          navigate("/browse");
          //   const user = userCredential.user;
          //   console.log(user);
        })
        .catch((err) => {
          setMsg(err.message);
        });
    }
  };

  let toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setMsg(null);
  };
  return (
    <>
      <Header />
      <div
        id="loginForm"
        className="text-white h-screen flex justify-center items-center"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
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
                ref={fName}
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
              className={`bg-black bg-opacity-50 outline outline-1 outline-${
                msg?.[1] === 0 ? "red" : "gray"
              }-500 py-3 px-3 rounded-sm text-sm`}
              type="text"
              ref={email}
              placeholder="Email or phone number"
            />
          ) : (
            <div className="flex gap-4">
              <input
                ref={email}
                className={`bg-black bg-opacity-50 outline outline-1 outline-${
                  msg?.[1] === 0 ? "red" : "gray"
                }-500 py-3 px-3 rounded-sm text-sm`}
                type="email"
                placeholder="Email address"
              />
              <input
                className={`bg-black bg-opacity-50 outline outline-1 outline-gray-500 py-3 px-3 rounded-sm text-sm`}
                type="tel"
                placeholder="Phone number"
              />
            </div>
          )}
          <input
            ref={pwd}
            className={`bg-black bg-opacity-50 outline outline-1 
            outline-${
              msg?.[1] === 1 ? "red" : "gray"
            }-500 py-3 px-3 rounded-sm text-sm`}
            type="password"
            placeholder="Password"
          />
          <p>{msg != null && msg}</p>
          <button
            className="bg-[#c11119] px-3 py-2 rounded-sm"
            onClick={validateInfo}
          >
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
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
