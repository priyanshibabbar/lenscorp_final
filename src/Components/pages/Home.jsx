import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-[100vh] flex flex-col p-24 pt-0 align-middle justify-center quicksand"
         style={{backgroundImage: `url('https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="w-[50%] text-[50px] font-semibold slide-in">
        We are at the
      </div>
      <div className="w-[50%] text-[50px] font-semibold slide-in">
        forefront of AI
      </div>
      <div className="mt-4 w-[50%] text-[24px] slide-in">
        From Conserving Wildlife to
      </div>
      <div className="mt-4 w-[50%] text-[24px] slide-in">
        Automatically Generating Caricatures – We Do It All
      </div>

      <button className="flex justify-center border border-black w-[100px] rounded-md">
        Learn More
      </button>
    </div>
  );
};

export default Home;
