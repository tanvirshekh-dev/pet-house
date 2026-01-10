import { CircleArrowRight } from "lucide-react";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../../assets/user.png";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("user logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className="bg-white pr-8">
      <nav className="flex items-center justify-between">
        {/* image */}
        <div>
          <img className="w-60" src="/logo.png" alt="" />
        </div>

        {/* Links */}
        <ul className="flex gap-8 text-black font-medium">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
        </ul>

        {/* profile */}
        <div className="flex items-center justify-center gap-4">
          {/* avatar */}
          {user && (
            <div className="relative group flex items-center cursor-pointer">
              {/* user name */}
              <span className="absolute top-14 right-8 scale-0 group-hover:scale-100 bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md z-10">
                {user?.displayName || "user name"}
              </span>

              {/* user avatar */}
              <div className="w-11 h-11 mt-4 rounded-full border-2 border-gray-500 overflow-hidden flex items-center">
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
