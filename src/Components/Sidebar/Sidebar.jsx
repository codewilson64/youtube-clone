import React from "react";
import home from "../../assets/home.svg";
import game_icon from "../../assets/gaming.svg";
import automobiles from "../../assets/car.svg";
import sports from "../../assets/sports.svg";
import entertainment from "../../assets/movie.svg";
import tech from "../../assets/tech.png";
import music from "../../assets/music.svg";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.svg";
import "./Sidebar.css";
import { sidebarLinks } from "../Constants";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"} w-[15%] h-screen fixed top-0 pl-[2%] pt-[80px] lg:flex hidden`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? "active" : ""} flex flex-wrap items-center mb-[25px] w-fit cursor-pointer`} onClick={() => setCategory(0)}>
          <img src={home} alt="icon" className="w-[20px] mr-[20px]" />
          <p className="font-normal text-[14px] text-white">Home</p>
        </div>

        <div className={`side-link ${category === 20 ? "active" : ""} flex flex-wrap items-center mb-[25px] w-fit cursor-pointer`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="icon" className="w-[20px] mr-[20px]" />
          <p className="font-normal text-[14px] text-white">Gaming</p>
        </div>

        <div className={`side-link ${category === 2 ? "active" : ""} flex flex-wrap items-center mb-[25px] w-fit cursor-pointer`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="icon" className="w-[20px] mr-[20px]" />
          <p className="font-normal text-[14px] text-white">Automobiles</p>
        </div>

        <div className={`side-link ${category === 17 ? "active" : ""} flex flex-wrap items-center mb-[25px] w-fit cursor-pointer`} onClick={() => setCategory(17)}>
          <img src={sports} alt="icon" className="w-[20px] mr-[20px]" />
          <p className="font-normal text-[14px] text-white">Sports</p>
        </div>

        <div className={`side-link ${category === 24 ? "active" : ""} flex flex-wrap items-center mb-[25px] w-fit cursor-pointer`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="icon" className="w-[20px] mr-[20px]" />
          <p className="font-normal text-[14px] text-white">Entertainment</p>
        </div>

        <div className={`side-link ${category === 10 ? "active" : ""} flex flex-wrap items-center mb-[25px] w-fit cursor-pointer`} onClick={() => setCategory(10)}>
          <img src={music} alt="icon" className="w-[20px] mr-[20px]" />
          <p className="font-normal text-[14px] text-white">Music</p>
        </div>

        <div className={`side-link ${category === 25 ? "active" : ""} flex flex-wrap items-center mb-[25px] w-fit cursor-pointer`} onClick={() => setCategory(25)}>
          <img src={news} alt="icon" className="w-[20px] mr-[20px]" />
          <p className="font-normal text-[14px] text-white">News</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
