import logo from "../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className="bg-black w-full py-3 min-h-[80px] flex items-center sticky top-0">
      <div className="w-11/12 mx-auto flex text-white justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="w-7 h-7 sm:w-10 sm:h-10 "
          />
          <p className="w-[100px] sm:w-fit text-sm sm:text-xl font-semibold">
            Abstract | Help Center
          </p>
        </div>
        <div className="w-fit sm:min-w-[200px]">
          {location.pathname === "/addCard" ? (
            <div
              className="border-solid w-fit border-white border-2 py-1 px-2 sm:py-2 sm:px-4 rounded-lg hover:bg-white hover:text-black hover:font-semibold box-border cursor-pointer text-sm sm:text-base"
              onClick={() => navigate("/")}
            >
              Back to home
            </div>
          ) : (
            <div
              className="border-solid sm:w-fit border-white border-2 py-1 px-2 sm:py-2 sm:px-4 rounded-lg hover:bg-white hover:text-black hover:font-semibold box-border cursor-pointer text-sm sm:text-base"
              onClick={() => navigate("/addCard")}
            >
              Submit a request
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
