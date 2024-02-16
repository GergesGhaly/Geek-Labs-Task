import React from "react";
import Search from "../images/Search.svg";
import blueBell from "../images/Group 103.svg";

const NavBar = () => {
  return (
    <div className=" z-10 flex gap-[17px] items-center justify-center  h-[72px] ">
      <h1 className="relative nav-logo text-[28px] md:text-[48px] font-[700] text-[#FFFFFF]">
        ALERTS
      </h1>
      <div className="flex items-center justify-center gap-[17px]">
        <div className="search-bar h-full lg:w-[611px] ">
          <div className="relative flex ">
            <input
              type="search"
              className="rounded-[5px] z-10 m-0 -mr-0.5 block min-w-0 flex-auto rounded-l bg-[#313131] bg-clip-padding px-3 py-[0.25rem] 
              text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]   focus:outline-none "
              placeholder="Search By"
            />
            {/*Search button*/}
            <button className=" z-20 " type="button">
              <img
                src={Search}
                alt="Search button Icon "
                className="absolute z-40 right-[10px] top-[5px] "
              />
            </button>
          </div>
        </div>
        <div className="bell-icon">
          <img src={blueBell} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
