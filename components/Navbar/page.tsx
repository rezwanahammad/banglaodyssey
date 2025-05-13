"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  const handleMenuClick = () => {
    alert("Menu clicked!");
  };

  return (
    <nav className="absolute top-12 right-8 z-50 flex items-center gap-3">
      <input
        type="text"
        placeholder="Search 64 districts"
        className="w-64 px-4 py-1.5 rounded-full bg-white/20 text-green-800 placeholder-white focus:outline-none"
      />
      <button
        onClick={handleMenuClick}
        className="hover:bg-white/20 p-2 rounded-full transition duration-200"
        title="Open menu"
      >
        <Image
          src="/img/menu-icon.png"
          alt="Menu Icon"
          width={30}
          height={30}
        />
      </button>
    </nav>
  );
};

export default Navbar;
