import React, { useState } from "react";
import Search from "../images/search (1).svg";
import heart from "../images/heart.svg";
import resaycle from "../images/resaycle.svg";
import enrgy from "../images/anrgy.svg";
import Group from "../images/Group.svg";
import cart from "../images/cart.svg";
import home from "../images/home.svg";
import it from "../images/it.svg";
import meesag from "../images/meesag.svg";
import Industrials from "../images/Industrials.svg";
import Utilities from "../images/Utilities.svg";
import Financials from "../images/Financials.svg";
import FilterSearch from "./FilterSearch";
import Industry from "./Industry";
import MarketAndRisk from "./MarketAndRisk";
import StrategyAndAsset from "./StrategyAndAsset";

const FilltersStock = () => {
  const [industry, setIndustry] = useState([
    {
      id: 1,
      icon: heart,
      title: "Health care",
    },
    {
      id: 2,
      icon: resaycle,
      title: "Materials",
    },
    {
      id: 3,
      icon: enrgy,
      title: "Energy",
    },
    {
      id: 4,
      icon: Group,
      title: "Consumer discretionary",
    },
    {
      id: 5,
      icon: cart,
      title: "Consumer staples",
    },
    {
      id: 6,
      icon: home,
      title: "Real estate",
    },
    {
      id: 7,
      icon: it,
      title: "IT",
    },
    {
      id: 8,
      icon: meesag,
      title: "Communication",
    },
    {
      id: 9,
      icon: Industrials,
      title: "Industrials",
    },
    {
      id: 10,
      icon: Utilities,
      title: "Utilities",
    },
    {
      id: 11,
      icon: Financials,
      title: "Financials",
    },
  ]);

  return (
    <div className="w-full flex flex-col bg-[#202020] mt-4 py-2 px-4 rounded-[6.86px]">
      <h3 className=" text-[15px] font-[700] font-[Poppins] leading-[32px]">
        Stock
      </h3>
      <div>
        {/* Search */}
        <div className="relative flex ">
          <input
            type="search"
            className="rounded-[5px] h-[27px] z-10  block min-w-0 flex-auto rounded-l bg-[#313131] 
            placeholder:text-[13px] placeholder:leading-[24.32px] placeholder:text-[#737373] placeholder:font-[Poppins] placeholder:font-[400]
            text-[13px] leading-[24.32px] text-[#737373] font-[Poppins] font-[400] 
             bg-clip-padding px-3 py-2 text-base outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none"
            placeholder="$ TICKER"
          />
          {/*Search button*/}
          <button className=" z-20 " type="button">
            <img
              src={Search}
              alt="Search button Icon "
              className="absolute z-40 right-[10px] top-[6px] "
            />
          </button>
        </div>

        {/* Filter By Industry */}
        <Industry industry={industry} />

        {/* Filter By market cap & Risk Level */}
        <MarketAndRisk />

        {/* strategy & asset */}
        <StrategyAndAsset />
      </div>
    </div>
  );
};

export default FilltersStock;
