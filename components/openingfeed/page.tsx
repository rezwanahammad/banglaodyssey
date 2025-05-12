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
    <div>
      <div className={`${interfont.variable}`}>
        <span className="absolute top-10 left-15 flex items-center">
          <Image src="/img/logo.png" alt="logo" width={120} height={120} />
        </span>
        <div className="absolute inset-140 top-5 flex flex-col items-center justify-center text-white font-main">
          <h1 className="text-5xl font-bold text-center">Explore Bangladesh</h1>
          <p className="text-lg text-center mt-2">
            Explore the beauty of Bangladesh through us.
          </p>
        </div>
        <Image src="/img/rural.jpg" alt="mainpic" width={1700} height={900} />
      </div>
    </div>
  );
};

export default Mainfeed;
