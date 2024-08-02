import { useSelector } from "react-redux";
import Header from "./Header";
const Browse = () => {
  let firstName = useSelector((store) => store.user.displayName);
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-white">
          Welcome to Netflix, {firstName}!
        </h1>
      </div>
    </>
  );
};

export default Browse;
