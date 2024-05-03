import React from "react";
import CardList from "../Cards/Card";

const Services = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full min-h-screen gap-8 p-4 pt-0 pb-8"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="flex justify-center  text-4xl sm:text-5xl lg:text-6xl xl:text-7xl quicksand w-full">
        Services
      </div>
      <div className="quicksand text-4xl sm:text-5xl lg:text-6xl">
        We provide Artificial Intelligence Services
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        <div className="flex flex-col gap-4">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Services;
