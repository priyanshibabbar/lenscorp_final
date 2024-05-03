import React from "react";
import CardList from "../Cards/Card";

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex justify-center items-center mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl quicksand font-medium w-full h-full p-4">
        Our Blogs
      </div>
      <div className="flex flex-col gap-8 justify-center items-center p-4 sm:p-8">
        <CardList />
      </div>
    </div>
  );
};

export default Blogs;
