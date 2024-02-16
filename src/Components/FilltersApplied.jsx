import React from "react";
import close from "../images/close.svg";
const FilltersApplied = () => {
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full flex  justify-between text-[14px] font-[Poppins] font-[500] leading-[24.32px]">
        <h3 className="">Filters Applied</h3>
        <h3>Clear All</h3>
      </div>

      {/* Fillters Applied Body */}
      <div className="flex w-full min-h-[51px] flex-wrap bg-[#202020] p-2 rounded-[6.86px]">
        <div
          data-te-chip-init=""
          data-te-ripple-init=""
          className=" flex justify-between items-center w-[86.39px] h-[15.48px] px-1 py-2 leading-[17.93px] font-[Poppins] rounded-[4.42px]
          text-[11.06px] font-[400] text-[#202020]
     bg-[#53ACFF]   "
          data-te-ripple-color="dark"
        >
          Real Estate
          <span data-te-chip-close="" className="cursor-pointer      ">
            <img src={close} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilltersApplied;
