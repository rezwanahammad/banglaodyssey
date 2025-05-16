"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const slug = search.trim().toLowerCase();
      if (slug) {
        router.push(`/districts/${slug}`);
      }
    }
  };

  const handleMenuClick = () => {
    alert("Menu clicked!");
  };

  return (
    <nav className="absolute top-12 right-8 z-50 flex items-center gap-3">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
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
