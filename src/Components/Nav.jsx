import React from "react";
// Import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
// Links
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-4 md:bottom-8 w-full z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/40 h-[70px] md:h-[96px] backdrop-blur-2xl rounded-full max-w-[380px] md:max-w-[460px] mx-auto px-4 md:px-5 flex justify-between items-center">
          <NavItem to="home" icon={<BiHomeAlt />} />
          <NavItem to="about" icon={<BiUser />} />
          <NavItem to="services" icon={<BsClipboardData />} />
          <NavItem to="work" icon={<BsBriefcase />} />
          <NavItem to="contact" icon={<BsChatSquareText />} />
        </div>
      </div>
    </nav>
  );
};

// Reusable NavItem Component
const NavItem = ({ to, icon }) => (
  <Link
    to={to}
    activeClass="active"
    smooth={true}
    spy={true}
    offset={-70}
    className="cursor-pointer w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex items-center justify-center text-2xl md:text-3xl transition-all hover:text-white/80"
  >
    {icon}
  </Link>
);

export default Nav;
