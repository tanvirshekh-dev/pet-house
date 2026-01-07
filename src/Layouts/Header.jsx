import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
        {/* image */}
      <div>
        <img className="w-15" src="../../assets/logo.jpg" alt="" />
      </div>

        {/* Links */}
        <ul className="flex gap-8 text-black">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
        </ul>

        {/* profile button */}
        <div className="flex items-center ">
            <img className="pr-4" src="../../assets/Favicon.png" alt="" />
            <button className="btn btn-xs sm:btn-sm md:btn-md">Click Me</button>
        </div>

    </div>
  );
};

export default Header;
