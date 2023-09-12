"use client";
//react & next
import React from "react";
import Image from "next/image";
//fonts
import { Open_Sans } from "next/font/google";
import { Raleway } from "next/font/google";
//images & icons
import logo from "../../public/images/logo.svg";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-openSans",
});

const raleway = Raleway({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

function Baner() {
  return (
    <section className="flex flex-col gap-8 justify-center items-center w-mobile-width mx-auto">
      <div className="flex flex-col items-center justify-center gap-8">
        <Image className="mt-4" priority src={logo} alt="Logo Give me Art" />
        <p
          className={`${open_sans.variable} font-openSans text-center text-xl`}
        >
          Generate your ART by typing in field below any words that comes to
          your mind !
        </p>
      </div>
      <div className={`${raleway.variable} font-raleway flex w-[90vw]`}>
        <div className="relative w-1/3 h-1 rounded bg-main-red flex justify-center items-center">
          <div className="absolute flex items-center justify-center text-white h-5 w-5 rounded bg-main-red -top-2 left-1/2 transform -translate-x-1/2 ">
            <span>1</span>
          </div>
          <div className="absolute flex items-center justify-center transform top-5 left-1/2 -translate-x-1/2">
            <span className="text-center text-main-red text-sm font-semibold">
              Generate image
            </span>
          </div>
        </div>

        <div className="relative w-1/3 h-1 bg-line-gray flex justify-center items-center">
          <div className="absolute flex items-center justify-center text-text-gray h-5 w-5 rounded bg-line-gray -top-2 left-1/2 transform -translate-x-1/2 ">
            <span>2</span>
          </div>
          <div className="absolute flex items-center justify-center transform top-5 left-1/2 -translate-x-1/2">
            <span className="text-center text-line-gray text-sm font-medium">
              Choose your product
            </span>
          </div>
        </div>
        <div className="relative w-1/3 rounded-r h-1 bg-line-gray flex justify-center items-center">
          <div className="absolute flex items-center justify-center text-text-gray h-5 w-5 rounded bg-line-gray -top-2 left-1/2 transform -translate-x-1/2 ">
            <span>3</span>
          </div>
          <div className="absolute flex items-center justify-center transform top-5 left-1/2 -translate-x-1/2">
            <span className="text-center text-line-gray text-sm font-medium">
              Order
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Baner;
