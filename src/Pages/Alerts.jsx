import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import AlertStrp from "../Components/AlertStrp";

const Alerts = () => {
  const [data, setData] = useState([
    {
      id: 1,
      company: "amzn",
      sheet: 200,
      rate: -0.25,
      rateRisk: "Low-Risk",
    },
    {
      id: 2,
      company: "tsla",
      sheet: 200,
      rate: -0.25,
      rateRisk: "High-Risk",
    },
    {
      id: 3,
      company: "abqq",
      sheet: 200,
      rate: -0.25,
      rateRisk: "Low-Risk",
    },
    {
      id: 4,
      company: "msft",
      sheet: 200,
      rate: -0.25,
      rateRisk: "Low-Risk",
    },
    {
      id: 5,
      company: "nflx",
      sheet: 200,
      rate: -0.25,
      rateRisk: "Low-Risk",
    },
    {
      id: 6,
      company: "nflx",
      sheet: 200,
      rate: -0.25,
      rateRisk: "Low-Risk",
    },
    {
      id: 7,
      company: "nflx",
      sheet: 200,
      rate: -0.25,
      rateRisk: "Low-Risk",
    },
    {
      id: 8,
      company: "nflx",
      sheet: 200,
      rate: -0.25,
      rateRisk: "Low-Risk",
    },
    {
      id: 9,
      company: "nflx",
      sheet: 200,
      rate: -0.25,
      rateRisk: "Low-Risk",
    }
    
  ]);

  return (
    <div className=" absolute left-[135px] top-[3.47%] flex flex-col gap-[17px] items-center justify-center ">
      <NavBar />
      <div className="alert-strp-waper pr-2 max-h-[calc(100vh-115px)] overflow-y-scroll">
        {data.map((alret) => (
          <AlertStrp key={alret.id} alret={alret} />
        ))}
      </div>
    </div>
  );
};

export default Alerts;
