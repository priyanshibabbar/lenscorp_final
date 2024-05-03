import React from "react";

const About = () => {
  return (
    <div
      className="flex quicksand flex-col justify-center items-center w-full h-screen gap-8 p-4 pt-0 pt-0"
      style={{ backgroundColor: "black" }}
    >
      <div
        className="flex justify-center items-start text-center text-[4rem] quicksand w-full"
        style={{ color: "white" }}
      >
        About Us
      </div>

      <div
        className=" p-4 h-[400px] w-[70%] flex justify-center align-center items-center rounded-lg border-0 hover:border-[#787878] hover:border-1 hover:border-solid hover:shadow-lg hover:bg-gradient-to-br from-[#ccc] via-[#aeaeaedc] to-transparent transition-transform duration-2000 ease-in-out transform-gpu hover:scale-105"
        style={{ backgroundColor: "#161A1D" }}
      >
        <div className="p-4">
          <h2 className="text-[30px] text-white pb-4 font-light ">
            Welcome To LENS
          </h2>
          <p className="w-[50%] text-white ">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don't have
            to.
          </p>
        </div>

        <div
          className="bg-white rounded-lg inline-block my-2 mx-2"
          style={{ height: "380px" }}
        >
          <div className="w-96 h-96 overflow-hidden rounded-lg m-2  ">
            <img
              src="src/assets/people.jpg"
              alt="people "
              className="h-[95%] w-full object-cover object-center rounded-lg  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
