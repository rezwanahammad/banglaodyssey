import Image from "next/image";
import Link from "next/link"; // 👈 Import Link
import React from "react";
import { Libre_Baskerville } from "next/font/google";

const interfont = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-libre-baskerville",
});

const Mainfeed = () => {
  return (
    <div className={`${interfont.variable} relative w-full h-screen`}>
      {/* Background Image */}
      <Image
        src="/img/rural.jpg"
        alt="mainpic"
        fill
        priority
        style={{ objectFit: "cover" }}
        className="z-0"
      />

      {/* Clickable Logo at top-left */}
      <div className="absolute top-4 left-4 sm:left-8 z-10">
        <Link href="/" passHref>
          <Image
            src="/img/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] "
          />
        </Link>
      </div>

      {/* Centered Title & Subtitle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10 translate-y-[-40px] sm:translate-y-[-150px]">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold drop-shadow-md text-green-800">
          Explore Bangladesh
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-3 drop-shadow-sm">
          Explore the beauty and diversity of Bangladesh through us.
        </p>
      </div>
    </div>
  );
};

export default Mainfeed;
