import { CircleArrowRight } from "lucide-react";
import React from "react";

const Header = () => {
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>

        {/* profile button */}
        <div className="flex items-center ">
          <img className="pr-4" src="../../assets/Favicon.png" alt="" />
          <button className="btn btn-primary">
            Click Me <CircleArrowRight size={20} strokeWidth={3} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
