import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = (userState) => {
  let user = useSelector((store) => store.user);
  let navigate = useNavigate();
  let handleSignOut = () => {
    user &&
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          navigate("/Error");
        });
  };
  return (
    <div className="flex absolute w-full justify-around items-center">
      <Link to={"/"}>
        <div className="w-48">
          <img
            alt="netflix-logo"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          />
        </div>
      </Link>
      <div className="flex items-center gap-6">
        {!userState ? (
          <button className="inline-flex justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              role="img"
              data-icon="LanguagesSmall"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                fill="currentColor"
              ></path>
            </svg>
            English
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-8 text-white"
            />
          </button>
        ) : (
          <img alt="profile" src={user?.photoURL} />
        )}
        <Link to={"/login"}>
          <button
            onClick={handleSignOut}
            className="bg-red-600 font-semibold text-white py-1 px-4 rounded-sm"
          >
            {user ? "Sign Out" : "Sign In"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
