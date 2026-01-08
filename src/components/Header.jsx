import { CircleArrowRight } from "lucide-react";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../../assets/user.png"

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
      alert("user log out successfully")
      })
      .catch((error) => {
      console.log(error)
    })
  }
  return (
    <header className="bg-white px-8">
      <nav className="flex items-center justify-between">
        {/* image */}
        <div>
          <img className="w-60" src="/logo.png" alt="" />
        </div>

        {/* Links */}
        <ul className="flex gap-8 text-black">
          <li>
            <Link to={"/"} >Home</Link>
          </li>
          <li>
            <Link to={"/services"} >Services</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
        </ul>

        {/* profile button */}
        <div className="flex items-center ">
          <img className="pr-4" src={user ? user.photoURL : userIcon} alt="" />
          {user ?
            (<button onClick={handleLogOut} className="btn btn-secondary">LogOut <CircleArrowRight size={20} strokeWidth={3} /></button>)
            :
            (<Link to={"/auth/login"} className="btn btn-primary">
            Login <CircleArrowRight size={20} strokeWidth={3} />
          </Link>)}
        </div>
      </nav>
    </header>
  );
};

export default Header;
