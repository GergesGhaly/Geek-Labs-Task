import React, { useEffect, useState } from "react";
import { TECollapse } from "tw-elements-react";
import arrow from "../images/arrow.svg";

const MarketAndRisk = () => {
  const [activeRisk, setactiveRisk] = useState(false);
  const [activeMarket, setactiveMarket] = useState(false);
  useEffect(() => {
    setactiveMarket(true);
    setactiveRisk(true);
  }, []);

  return (
    <div className="grid grid-cols-2">
      <div className="mt-3 bg-[#202020]" id="accordionExample">
        <h2 className="mb-0" id="headingOne">
          <button
            className={`${
              activeMarket && `text-primary !shadow-none `
            } group relative flex items-center justify-center gap-4  px-5 py-2 text-right  text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
            type="button"
            onClick={() => setactiveMarket(!activeMarket)}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <span
              className={`${
                activeMarket
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529]  dark:fill-white`
              } flex items-center  justify-center w-[7.36px h-[5.94px] ml-auto  shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none `}
            >
              <img src={arrow} alt="" />
            </span>
            <h3 className=" text-[15px] font-[700] font-[Poppins] leading-[24.32px]">
              market cap
            </h3>
          </button>
        </h2>
        <TECollapse
          show={activeMarket}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="pl-5  ">
            <ul className="pl-4  ">
              <li className="flex relative gap-4 items-center  py-[1px]">
                <span class="checkmark"></span>
                <input className="input" checked id="x" type="radio" />
                <label
                  className="text-[13px] font-[400] font-[Poppins] leading-[24.32px]"
                  htmlFor="x"
                >
                  Micro
                </label>
              </li>
              <li className="flex relative gap-4 items-center  py-[2px]">
                <span class="checkmark"></span>
                <input
                  className="input"
                  checked="checked"
                  id="x"
                  type="radio"
                />
                <label
                  className="text-[13px] font-[400] font-[Poppins] leading-[24.32px]"
                  htmlFor="x"
                >
                  Small
                </label>
              </li>

              <li className="flex relative gap-4 items-center  py-[2px]">
                <span class="checkmark"></span>
                <input
                  className="input"
                  checked="checked"
                  id="x"
                  type="radio"
                />
                <label
                  className="text-[13px] font-[400] font-[Poppins] leading-[24.32px]"
                  htmlFor="x"
                >
                  Large
                </label>
              </li>
            </ul>
          </div>
        </TECollapse>
      </div>
      <div className="mt-3 bg-[#202020]" id="accordionExample">
        <h2 className="mb-0" id="headingOne">
          <button
            className={`${
              activeRisk && `text-primary !shadow-none `
            } group relative flex items-center justify-center gap-4  px-5 py-2 text-right  text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
            type="button"
            onClick={() => setactiveRisk(!activeRisk)}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <span
              className={`${
                activeRisk
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529]  dark:fill-white`
              } flex items-center  justify-center w-[7.36px h-[5.94px] ml-auto  shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none `}
            >
              <img src={arrow} alt="" />
            </span>
            <h3 className=" text-[15px] font-[700] font-[Poppins] leading-[24.32px]">
              Risk Level
            </h3>
          </button>
        </h2>
        <TECollapse
          show={activeRisk}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="pl-5  ">
            <ul className="pl-4  ">
              <li className="flex relative gap-4 items-center  py-[1px]">
                <span class="checkmark"></span>
                <input className="input" checked id="x" type="radio" />
                <label
                  className="text-[13px] font-[400] font-[Poppins] leading-[24.32px]"
                  htmlFor="x"
                >
                  Low Risk
                </label>
              </li>
              <li className="flex relative gap-4 items-center  py-[2px]">
                <span class="checkmark"></span>
                <input
                  className="input"
                  checked="checked"
                  id="x"
                  type="radio"
                />
                <label
                  className="text-[13px] font-[400] font-[Poppins] leading-[24.32px]"
                  htmlFor="x"
                >
                  Mid Risk
                </label>
              </li>

              <li className="flex relative gap-4 items-center  py-[2px]">
                <span class="checkmark"></span>
                <input
                  className="input"
                  checked="checked"
                  id="x"
                  type="radio"
                />
                <label
                  className="text-[13px] font-[400] font-[Poppins] leading-[24.32px]"
                  htmlFor="x"
                >
                  Low Risk
                </label>
              </li>
            </ul>
          </div>
        </TECollapse>
      </div>
    </div>
  );
};

export default MarketAndRisk;
