"use client";
//react & next
import React from "react";
import Image from "next/image";
//images & icons
import logo from "../../public/images/logo.svg";
import lineGray from "../../public/images/line_gray.svg";
import lineRed from "../../public/images/line_red.svg";

function Baner() {
  return (
    <section className="w-mobile-width mx-auto">
      <div>
        <Image priority src={logo} alt="Logo Give me Art" />
        <p>
          Generate your ART by typing in field below any words that comes to
          your mind!
        </p>
      </div>
      <div className="flex">
        <div className="relative flex justify-center items-center">
          <Image priority src={lineRed} alt="First step" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red">
            1
          </div>
        </div>
        <div className="relative">
          <Image priority src={lineRed} alt="First step" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red">
            2
          </div>
        </div>
        <div className="relative">
          <Image priority src={lineRed} alt="First step" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red">
            3
          </div>
        </div>
      </div>
      <div>szukajka</div>
    </section>
  );
}

export default Baner;
