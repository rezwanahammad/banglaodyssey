import Image from "next/image";
import React from "react";
import { Libre_Baskerville } from "next/font/google";

const interfont = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-libre-baskerville",
});

const Mainfeed = () => {
  return (
    <div className={`${interfont.variable} relative w-full h-[500px] mb-124`}>
      {/* Background Image - z-0 */}
      <Image
        src="/img/rural.jpg"
        alt="mainpic"
        objectFit="cover"
        priority
        width={1700}
        height={500}
        className="z-0"
      />

      {/* Overlay content - z-10 */}
      <div className="absolute top-4 left-15 z-10">
        <Image src="/img/logo.png" alt="logo" width={120} height={120} />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-3 z-10">
        <h1 className="text-6xl font-bold">Explore Bangladesh</h1>
        <p className="text-lg mt-2">
          Explore the beauty and diversity of Bangladesh through us.
        </p>
      </div>
    </div>
  );
};

export default Mainfeed;
