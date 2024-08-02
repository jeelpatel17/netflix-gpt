import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Header from "./Header";

const Landing = () => {
  return (
    <>
      <Header />
      <form
        id="landingForm"
        className="flex justify-center items-center flex-col h-screen text-center text-white gap-8"
      >
        <h1 className="text-5xl font-black">
          Unlimited movies, TV shows, and more
        </h1>
        <h3 className="text-2xl">Watch anywhere. Cancel anytime.</h3>
        <h3 className="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="w-5/12 flex gap-2">
          <input
            type="email"
            className="grow px-4 py-3 rounded-sm bg-black bg-opacity-50 outline outline-slate-600 outline-2"
            placeholder="Email address"
          />
          <Link to={"/login"}>
            <button className="grow-0 bg-red-600 font-bold flex justify-center items-center rounded-sm text-xl px-6 h-full">
              Get Started{" "}
              <ChevronRightIcon
                aria-hidden="true"
                className="-mr-1 w-8 text-white"
              />
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Landing;
