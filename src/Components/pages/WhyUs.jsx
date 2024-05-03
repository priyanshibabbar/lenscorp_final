import React from "react";
import CardList2 from "../Cards/card2";

const WhyUs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex justify-center text-4xl sm:text-5xl quicksand font-medium w-full h-full pt-8">
        Why Choose Us?
      </div>

      <div className="flex flex-col justify-center items-center h-full w-full p-4 sm:p-10 quicksand gap-4">
        <h1 className="text-2xl sm:text-3xl text-center">
          AI-DRIVEN SOLUTIONS BACKED BY SCIENCE
        </h1>

        <p className="text-lg sm:text-xl text-center pt-4">
          Every piece of AI technology shipped from LENS is thoroughly
          benchmarked via rigorous evaluations. With a global network of experts
          and academicians, we guarantee the most accurate and robust solutions
          in the market.
        </p>
        <div className="flex flex-col sm:flex-row w-full justify-center items-center h-full gap-8 pt-8">
          <div className="flex flex-col items-center sm:items-start text-left">
            <span className="bullet">State-of-the-art solutions</span>
            <span className="bullet">Fast & Efficient</span>
            <span className="bullet">No extra computation fee</span>
            <span className="bullet">No licensing fee</span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="bullet">Lifetime support & upgrades</span>
            <span className="bullet">Plug-and-Play</span>
            <span className="bullet">24x7 Progress Monitoring</span>
            <span className="bullet">Incremental Updates</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <CardList2 />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
