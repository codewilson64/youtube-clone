import React from "react";
import menu_icon from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/create.svg";
import notification_icon from "../../assets/notification.svg";
import profile_icon from "../../assets/profile.svg";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="nav-left flex items-center py-[10px] px-[2%] justify-between bg-black sticky top-0 shadow-md z-[10]">
      <div className="flex items-center">
        <img src={menu_icon} alt="menu-icon" className="w-[22px] mr-[25px] lg:flex hidden" onClick={() => setSidebar((prev) => (prev === false ? true : false))} />
        <Link to="/">
          <img src={logo} alt="logo" className="lg:w-[40px] w-[30px]" />
        </Link>
      </div>

      <div className="nav-mid flex items-center">
        <div className="flex items-center border border-[#4a4a4a] mr-[15px] py-[8px] px-[12px] rounded-[25px]">
          <input type="text" placeholder="Search" className="lg:w-[400px] w-[100px] text-white border-none outline-none bg-transparent" />
          <img src={search_icon} alt="" className="w-[18px]" />
        </div>
      </div>

      <div className="nav-right flex items-center ">
        <img src={upload_icon} alt="" className="w-[25px] mr-[25px] lg:flex hidden" />
        <img src={notification_icon} alt="" className="w-[25px] mr-[25px] lg:flex hidden" />
        <img src={profile_icon} alt="" className="lg:w-[25px] w-[20px] mr-[25px] rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
