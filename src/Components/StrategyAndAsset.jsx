import React, { useState } from "react";

const StrategyAndAsset = () => {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      title: "Big Option Buys",
      value: "big option buys",
      active: false,
    },
    {
      id: 2,
      title: "Merger Arbitrage",
      value: "merger arbitrage",
      active: true,
    },
    {
      id: 3,
      title: "Short Reports",
      value: "short reports",
      active: false,
    },
    {
      id: 4,
      title: "Stocks",
      value: "stocks",
      active: false,
    },
    {
      id: 5,
      title: "Options",
      value: "options",
      active: true,
    },
    {
      id: 6,
      title: "Futures",
      value: "futures",
      active: false,
    },
  ]);

  return (
    <div className="grid grid-cols-2">
      <div className="mt-3 bg-[#202020] text-center" id="accordionExample">
        <h2 className="py-2" id="headingOne">
          <h3 className=" text-[15px] font-[700] font-[Poppins] leading-[24.32px]">
            strategy
          </h3>
        </h2>
        <div>
          <div className="flex flex-col items-center justify-center">
            {buttons.slice(0, 3).map((btn) => (
              <button
                key={btn.id}
                className={`${
                  btn.active ? "bg-[#53acff]" : null
                } text-[13px] font-[400] font-[Poppins] rounded-[6px] px-[6px] leading-[24.32px] hover:z-[2] focus:z-[3] focus:outline-none`}
              >
                {btn.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 bg-[#202020] text-center" id="accordionExample">
        <h2 className="py-2" id="headingOne">
          <h3 className=" text-[15px] font-[700] font-[Poppins] leading-[24.32px]">
            Asset
          </h3>
        </h2>
        <div>
          <div className="flex flex-col items-center justify-center">
            {buttons.slice(3).map((btn) => (
              <button
                key={btn.id}
                className={`${
                  btn.active ? "bg-[#53acff]" : null
                } text-[13px] font-[400] font-[Poppins] rounded-[6px] px-[6px] leading-[24.32px] hover:z-[2] focus:z-[3] focus:outline-none`}
              >
                {btn.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyAndAsset;
