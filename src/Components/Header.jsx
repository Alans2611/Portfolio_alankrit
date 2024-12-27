import React from "react";
//images
import Logo from "../assets/Alankrit-removebg-preview.png";

const Header = () => {
  return (
    <header className="px-4 py-4 md:py-6 lg:py-8 translate-y-2 mb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img className="h-[clamp(6rem,10vw,9rem)]" src={Logo} alt="Logo" />
          </a>
          {/* Button */}
          <button className="btn btn-sm md:btn-md lg:btn-lg mt-4 md:mt-0">
            Work with me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
