import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-[#d0e3ec] to-white text-white flex items-center justify-between sticky top-0 z-20 h-[5.5rem] w-full min-w-[1024px] sm:min-w-[768px] lg:min-w-[1024px]">
      <img
        className="h-[70px]"
        src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
        alt="Logo"
      />

      <div className="flex text-black gap-8 text-[18px] pr-16">
        <a href="#">MakeMyWeb</a>
        <a href="#">Home</a>
        <a href="#">Company</a>
        <a href="#">Blogs</a>
      </div>
    </nav>
  );
};

export default Navbar;
