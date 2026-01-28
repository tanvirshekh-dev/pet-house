import { CircleArrowRight, Menu } from "lucide-react";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../../assets/user.png";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("User logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="bg-white pr-8">
      <nav className="flex items-center justify-between">
        {/* image */}
        <div className="dropdown dropdown-start block md:hidden">
          <div tabIndex={0} role="button" className="btn my-2 ml-6 px-3 text-black bg-white py-0 border-0">
            <Menu size={26} />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-white text-black rounded-box z-10 w-52 p-2 shadow-sm ml-6"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/profile"}>My Profile</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Link to={"/"}>
            <img className="w-60" src="/logo.png" alt="logo" href={"/"} />
          </Link>
        </div>

        {/* Links */}
        <ul className="flex gap-8 text-black font-medium">
          <li className="hidden md:block">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hidden md:block">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="hidden md:block">
            <Link to={"/profile"}>My Profile</Link>
          </li>
        </ul>

        {/* profile */}
        <div className="flex items-center justify-center gap-4">
          {/* avatar */}
          {user && (
            <div className="relative group flex items-center cursor-pointer">
              {/* user name */}
              <span className="absolute top-14 right-8 text-center scale-0 group-hover:scale-100 bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md z-10">
                {user?.displayName || "user name"}
              </span>

              {/* user avatar */}
              <div className="w-11 h-11 mt-1 rounded-full border-2 border-gray-500 overflow-hidden flex items-center">
                <img
                  className="w-full h-full object-cover"
                  src={user?.photoURL ? user.photoURL : userIcon}
                  alt="USER"
                />
              </div>
            </div>
          )}

          {/* user login logout button */}
          {user ? (
            <button onClick={handleLogOut} className="btn btn-secondary">
              LogOut <CircleArrowRight size={20} strokeWidth={3} />
            </button>
          ) : (
            <Link to={"/auth/login"} className="btn btn-primary">
              Login <CircleArrowRight size={20} strokeWidth={3} />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
