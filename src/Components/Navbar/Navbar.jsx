import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSelect = (e) => {
    // Handle navigation based on selected option
    console.log("Selected option:", e.target.value);
  };

  return (
    <nav className="bg-gradient-to-b from-[#d0e3ec] to-white text-white flex items-center justify-between sticky top-0 z-20 h-[5.5rem] w-full px-4 sm:px-6 lg:px-8">
      <img
        className="h-[70px] sm:h-auto"
        src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
        alt="Logo"
      />

      {/* Render select dropdown on small screens */}
      <div className="sm:hidden">
        <select
          className="block text-black text-[16px] px-2 py-1 rounded-md border border-gray-300 bg-white"
          onChange={handleSelect}
        >
          <option value="">MENU</option>
          <option value="#">MakeMyWeb</option>
          <option value="#">Home</option>
          <option value="#">Company</option>
          <option value="#">Blogs</option>
        </select>
      </div>

      {/* Render navigation links on larger screens */}
      <div className="hidden sm:flex text-black gap-8 text-[18px]">
        <a href="#">MakeMyWeb</a>
        <a href="#">Home</a>
        <a href="#">Company</a>
        <a href="#">Blogs</a>
      </div>
    </nav>
  );
};

export default Navbar;
