import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MenuDropDown = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toogleOpen = useCallback(() => {
    console.log("btn is clicked");
    setIsOpen(!isOpen);
    console.log(isOpen);
  });
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer ">
          <h4>AirCNC your home</h4>
        </div>
        <div
          onClick={() => toogleOpen(isOpen)}
          className="flex flex-row gap-3 p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 items-center justify-center gap rounded-full cursor-pointer hover:shadow-md transtion"
        >
          <AiOutlineMenu />
          <div className="hidden md:block ">
            <p>
              <Avatar />
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link to="/" className="block md:hidden px-4">
              Home
            </Link>
            {user ? (
              <div
                onClick={logOut}
                className="px-4 
              py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
              >
                Logout
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transiton font-semibold "
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold "
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropDown;
