import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Services from "./Components/pages/Services";
import WhyUs from "./Components/pages/WhyUs";
import Vision from "./Components/pages/Vision";
import Blogs from "./Components/pages/Blogs";

const Container = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <WhyUs />
      <Vision />
      <Blogs />
    </>
  );
};

export default Container;
