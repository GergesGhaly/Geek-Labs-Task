import React from "react";
import FilltersApplied from "./FilltersApplied";
import FilltersStock from "./FilltersStock";
import ApplyBtn from "./ApplyBtn";

const Filters = () => {
  return (
    <div className="filter-menu z-50 absolute max-h-full xl:h-[95%] overflow-y-auto w-[427px]  right-[-402px] top-0 xl:top-[26px]  hover:right-0 xl:right-0 flex flex-col items-center  bg-[#181818] p-6 text-white rounded-[8px]">
      <h2 className="text-white text-[24px] font-[Poppins] font-[600] leading-[32px]">
        Filters
      </h2>
      <FilltersApplied />
      <h2 className="xl:hidden text-white rotate-[270deg] absolute left-[-3px] top-[50%]  text-[14px] font-[Poppins] font-[400] leading-[32px]">
        Filters
      </h2>

      <FilltersStock />
      <ApplyBtn />
    </div>
  );
};

export default Filters;
