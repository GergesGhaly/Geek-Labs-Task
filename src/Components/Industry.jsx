import React, { useEffect, useState } from "react";
import { TECollapse } from "tw-elements-react";
import arrow from "../images/arrow.svg";

const Industry = ({ industry }) => {
  const [activeIndustry, setActiveIndustry] = useState(false);
  useEffect(() => {
    setActiveIndustry(true);
  },[]);
  return (
    <div className="mt-3 bg-[#202020]" id="accordionExample">
      <h2 className="mb-0" id="headingOne">
        <button
          className={`${
            activeIndustry && `text-primary !shadow-none `
          } group relative flex items-center justify-center gap-4  px-5 py-1 text-right  text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
          type="button"
          onClick={() => setActiveIndustry(!activeIndustry)}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <span
            className={`${
              activeIndustry
                ? `rotate-[-180deg] -mr-1`
                : `rotate-0 fill-[#212529]  dark:fill-white`
            } flex items-center  justify-center w-[7.36px h-[5.94px] ml-auto  shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none `}
          >
            <img src={arrow} alt="" />
          </span>
          <h3 className=" text-[15px] font-[700] font-[Poppins] leading-[24.32px]">
            Industry
          </h3>
        </button>
      </h2>
      <TECollapse
        show={activeIndustry}
        className="!mt-0 !rounded-b-none !shadow-none"
      >
        <div className="pl-5  flex gap-2">
          <ul className="pl-4 relative underlist">
            {industry.slice(0, 6).map((item) => (
              <li key={item.id} className="flex gap-2 py-[1px]">
                <img src={item.icon} alt={`${item.title} Icone`} />
                <p className=" text-[12px] font-[400] font-[Poppins] leading-[24.32px] text-white">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
          <ul className="pl-4 flex-1 underlist relative">
            {industry.slice(6).map((item) => (
              <li key={item.id} className="flex gap-2 py-[2px]">
                <img src={item.icon} alt={`${item.title} Icone`} />
                <p className=" text-[12px] font-[400] font-[Poppins] leading-[24.32px] text-white">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </TECollapse>
    </div>
  );
};

export default Industry;
