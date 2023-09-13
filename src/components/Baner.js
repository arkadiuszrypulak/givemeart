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
        <div className="progressBarRed">
          <div className="progressBarRedNumber">
            <span>1</span>
          </div>
          <div className="progressBarDesc">
            <span className="progressBarRedText">Generate image</span>
          </div>
        </div>

        <div className="progressBarGray">
          <div className="progressBarGrayNumber">
            <span>2</span>
          </div>
          <div className="progressBarDesc">
            <span className="progressBarGrayText">Choose your product</span>
          </div>
        </div>
        <div className="progressBarGray">
          <div className="progressBarGrayNumber">
            <span>3</span>
          </div>
          <div className="progressBarDesc">
            <span className="progressBarGrayText">Order</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Baner;
