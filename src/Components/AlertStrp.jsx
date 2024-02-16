import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import dollarSign from "../images/dollarSign.svg";
import dollar from "../images/dollar.svg";
import peaper from "../images/peaper.svg";
import analysis from "../images/analysisIcon.svg";

const AlertStrp = ({ alret }) => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <div className="py-2 md:w-[650px] lg:w-[846.23px] ">
      <div id={alret.id}>
        <div className="w-full rounded-[28px]    ">
          <div className="mb-0 " id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `!bg-[#53acff] text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]  dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              } group relative w-full grid grid-cols-4   border-0 ${
                !activeElement && "!bg-[#313131]"
              } rounded-[7.69px] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="flex w-full gap-[17px] justify-center items-center">
                <div className="text-white font-meduim text-[15px] font-[Poppins]">
                  <img src={dollarSign} alt="" />
                </div>
                <div className="text-white font-meduim text-[15px] font-[Poppins]">
                  {alret.company.toUpperCase()}
                </div>
              </div>
              <div className="flex w-full gap-[17px] justify-center items-center">
                <div className="text-white font-meduim text-[15px] font-[Poppins]">
                  <img src={peaper} alt="" />
                </div>
                <div className="text-white font-meduim text-[15px] font-[Poppins]">
                  {alret.sheet}
                </div>
              </div>
              <div className="flex w-full gap-[17px] justify-center items-center">
                <div className="text-white font-meduim text-[15px] font-[Poppins]">
                  <img src={analysis} alt="" />
                </div>
                <div
                  className={` ${
                    alret.rateRisk == "High-Risk"
                      ? "text-[#D94111]"
                      : "text-[#118F4B]"
                  } font-meduim text-[15px] font-[Poppins]`}
                >
                  {alret.rate} %
                </div>
              </div>
              <div className="flex w-full gap-[17px] justify-center items-center">
                <div className="text-white font-meduim text-[15px] font-[Poppins]">
                  <img src={dollar} alt="" />
                </div>
                <div className="text-white font-meduim text-[15px] font-[Poppins]">
                  {alret.rateRisk}
                </div>
              </div>
            </button>
          </div>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-b-none !shadow-none !bg-[#181818] text-white"
          >
            <div className="px-5 py-4 ">
              {alret.company.toUpperCase() + " "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eu rhoncus purus, vitae tincidunt nibh. Vivamus
              elementum egestas ligula in varius. Proin ac erat pretium,
              ultricies leo at, cursus ante. Pellentesque at odio euismod,
              mattis urna ac, accumsan metus. Nam nisi leo, malesuada vitae
              pretium et, laoreet at lorem. Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
      </div>
    </div>
  );
};

export default AlertStrp;
