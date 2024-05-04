import React from "react";

const About = () => {
  return (
    <div
      className="flex quicksand flex-col justify-center items-center w-full min-h-screen gap-8 p-4 pt-0"
      style={{ backgroundColor: "black" }}
    >
      <div
        className="flex justify-center items-start text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl quicksand w-full"
        style={{ color: "white" }}
      >
        About Us
      </div>

      <div
        className="p-4 h-auto sm:h-[400px] md:h-auto lg:h-[400px] xl:h-auto w-full sm:w-[70%] md:w-[90%] lg:w-[70%] xl:w-[60%] flex flex-col sm:flex-row justify-center align-center items-center rounded-lg border-0 hover:border-[#787878] hover:border-1 hover:border-solid hover:shadow-lg hover:bg-gradient-to-br from-[#ccc] via-[#aeaeaedc] to-transparent transition-transform duration-2000 ease-in-out transform-gpu hover:scale-105"
        style={{ backgroundColor: "#161A1D" }}
      >
        <div className="p-4 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white pb-4 font-light ">
            Welcome To LENS
          </h2>
          <p className="w-full sm:w-[80%] lg:w-[50%] xl:w-[70%] text-white ">
            We put our hearts, souls and sweat into designing and developing
            custom AI-powered solutions for your business so you don't have
            to.
          </p>
        </div>

        <div
          className="bg-white rounded-lg inline-block my-2 mx-2 sm:mx-4 lg:mx-8 xl:mx-12"
          style={{ height: "auto", width: "auto" }}
        >
          <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-72 lg:h-72 xl:w-96 xl:h-96 overflow-hidden rounded-lg m-2  ">
            <img
              src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
              alt="people "
              className="h-full w-full object-cover object-center rounded-lg  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
