import React, { useState } from "react";
import logo from "../images/street suite logo-04 1.svg";
import bell from "../images/bell.svg";
import gears from "../images/gear.svg";
import analysis from "../images/analysis.svg";
import file from "../images/file.svg";
import hat from "../images/hat.svg";
import admin from "../images/admin.jpg";

const SideMenu = () => {
  const [sideLinks, setSideLinks] = useState([
    {
      id: 1,
      title: "Alerts",
      icon: bell,
      alt: "white bell icon",
      available: true,
    },
    {
      id: 2,
      title: "Training",
      icon: hat,
      alt: "white hat icon",
      available: true,
    },
    {
      id: 3,
      title: "Automation",
      icon: gears,
      alt: "white 3 gears icon",
      available: false,
    },
    {
      id: 4,
      title: "Portfolio",
      icon: file,
      alt: "white document icon",
      available: false,
    },
    {
      id: 5,
      title: "Trading",
      icon: analysis,
      alt: "white analysis icon",
      available: false,
    },
  ]);

  return (
    <div className="z-20 side-menu  p-4 absolute left-[7px] w-[80px] hover:w-[180px] h-full flex flex-col items-center bg-[#181818] shadow-[10px 4px 21.100000381469727px 0px rgba(0, 0, 0, 0.38)]  rounded-[8px] ">
      <div className="absolute top-[3.47%] flex items-center ">
        <img
          src={logo}
          alt="Dark rectangular logo inside st suite
        It is divided into two parts, each of them on a separate rectangle
        With large shades of white"
        />
      </div>
      {/* Side Menu Pages Links */}
      <div className="Menu-Links absolute top-[129px]">
        <ul className=" flex flex-col gap-[17px]">
          {sideLinks.map((link) => (
            <>
              <li
                key={link.id}
                className={`relative flex items-center gap-[17px] font-[Poppins]
             my-2
              ${
                link.available
                  ? "text-white   hover:text-[#53ACFF]"
                  : "text-white/30  cursor-not-allowed"
              }
             ${link.title == "Alerts" ? "font-semibold" : "font-normal"}
           
              `}
              >
                <div className="icon w-[25px] ">
                  <img
                    src={link.icon}
                    className="w-full h-full select-none"
                    alt={link.alt}
                  />
                </div>
                <div
                  className="
                 link-title transition ease-out delay-[0.3s] hidden text-[19px] leading-[28.5px] select-none"
                >
                  {link.title}
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[17px] items-center justify-center absolute bottom-[30px]">
        <div className="side-menu-footer flex gap-[17px] ">
          <div>
            <img
              className="cover bg-blend-screen		"
              src={admin}
              alt="admin profile photo"
            />
          </div>
          <div className="admin-name  flex-col hidden">
            <h5 className="text-white  font-[Poppins] text-[15px] font-[700] leading-[22.5px] select-none">
              Moni Roy
            </h5>
            <h2 className="text-[#979797]  font-[Poppins] text-[13px] font-[600] leading-[19.5px] select-none">
              Beginner
            </h2>
          </div>
        </div>

        <div className="Street hidden  text-[#424242]  font-[Poppins] text-[14px] font-[400]  leading-[21px]">
          Street Suite. 2.0
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
