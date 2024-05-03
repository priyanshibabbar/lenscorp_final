import React from "react";

const Home = () => {
  const handleClick = () => {
    alert("Work in Progress! Until then, there's a lot more you can learn! Keep practicing.");
  }
  return (
    <div className="relative w-full min-h-screen flex flex-col p-4 md:p-24 pt-0 align-middle justify-center quicksand"
         style={{backgroundImage: `url('https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="w-[90%] md:w-[50%] text-[40px] md:text-[4rem] text-left font-semibold slide-in">
        We are at the forefront of AI
      </div>
      <div className="mt-4 w-full md:w-[50%] text-left text-[18px] md:text-[24px] slide-in">
        From Conserving Wildlife to Automatically Generating Caricatures – We Do It All
      </div>

      <button onClick={handleClick} className="flex justify-center border border-black w-full md:w-[100px] mt-4 rounded-md">
        Learn More
      </button>
    </div>
  );
};

export default Home;
