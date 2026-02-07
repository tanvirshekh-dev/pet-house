import {
  Building2,
  CircleArrowRight,
  CircleUserRound,
  House,
  Menu,
} from "lucide-react";
import React, { use } from "react";
import { Link, NavLink } from "react-router";
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
    <header className="bg-white pr-6 py-0 md:pr-4 lg:pr-8 md:py-2 lg:py-0">
      <nav className="flex items-center justify-between">
        {/* image */}
        <div className="dropdown dropdown-start block md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn my-2 ml-6 px-3 text-black bg-white py-0 border-0"
          >
            <Menu size={26} />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-white text-black rounded-box z-10 w-52 p-2 shadow-sm ml-6"
          >
            <li>
              <div className="flex items-center justify-start gap-1">
                <House size={20} />
                <NavLink to={"/"}
                 className={({ isActive }) =>
                  isActive
                    ? "text-pink-400 font-semibold underline"
                    : "text-gray-600"
                }
                >Home</NavLink>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start gap-1">
                <Building2 size={20} />
                <NavLink to={"/services"}
                 className={({ isActive }) =>
                  isActive
                    ? "text-pink-400 font-semibold underline"
                    : "text-gray-600"
                }
                >Services</NavLink>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start gap-1">
                <CircleUserRound size={20} />
                <NavLink to={"/profile"}
                 className={({ isActive }) =>
                  isActive
                    ? "text-pink-400 font-semibold underline"
                    : "text-gray-600"
                }
                >My Profile</NavLink>
              </div>
            </li>
          </ul>
        </div>

        {/* nav start */}
        <div className="hidden md:block">
          <Link to={"/"}>
            <img className="w-40 lg:w-60" src="/logo.png" alt="logo" href={"/"} />
          </Link>
        </div>

        {/* nav center */}
        <ul className="flex md:gap-4 lg:gap-8 text-black font-medium">
          <li className="hidden md:block">
            <div className="flex items-center justify-center gap-1">
              <House size={20} />
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-400 font-semibold underline"
                    : "text-gray-600"
                }
              >
                Home
              </NavLink>
            </div>
          </li>
          <li className="hidden md:block">
            <div className="flex items-center justify-center gap-1">
              <Building2 size={20} />
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-400 font-semibold underline"
                    : "text-gray-600"
                }
              >
                Services
              </NavLink>
            </div>
          </li>
          <li className="hidden md:block">
            <div className="flex items-center justify-center gap-1">
              <CircleUserRound size={20} />
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-400 font-semibold underline"
                    : "text-gray-600"
                }
              >
                My Profile
              </NavLink>
            </div>
          </li>
        </ul>

        {/* nev end */}
        <div className="flex items-center justify-center gap-4">
          {/* avatar */}
          {user && (
            <div className="relative group flex items-center cursor-pointer">
              {/* user name */}
              <span className="absolute top-14 right-8 text-center scale-0 group-hover:scale-100 bg-gray-800 text-white text-sm px-3 py-2 rounded-md z-10 w-24">
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
