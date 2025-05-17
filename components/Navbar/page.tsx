"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.trim()) {
      const slug = searchText
        .toLowerCase()
        .replace(/'/g, "")
        .replace(/\s+/g, "-");
      router.push(`/districts/${slug}`);
      setSearchText(""); // optional: clear input
      setMenuOpen(false); // optional: close menu
    }
  };

  return (
    <nav className="absolute top-12 right-8 z-50 flex flex-col items-end gap-2">
      <div className="flex items-center gap-3">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search 64 districts"
            className="w-64 px-4 py-1.5 rounded-full bg-white/20 text-green-800 placeholder-white focus:outline-none"
          />
        </form>
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
      </div>

      {menuOpen && (
        <div className="bg-white/95 text-gray-800 rounded-xl shadow-lg py-3 px-5 w-60 space-y-3 mt-2 border border-gray-200 transition-all duration-300">
          <Link href="/" className="block hover:text-green-700">
            Home
          </Link>
          <Link href="/about" className="block hover:text-green-700">
            About
          </Link>
          <Link href="/contact" className="block hover:text-green-700">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
