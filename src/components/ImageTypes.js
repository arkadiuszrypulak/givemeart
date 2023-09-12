//react & next
import React from "react";
import Image from "next/image";
//fonts
import { Raleway } from "next/font/google";
//images & icons
import guitar from "../../public/images/guitar_boy.svg";
import locker from "../../public/images/padlock.svg";
import artistic from "../../public/images/artistic.svg";
import arrowLeft from "../../public/images/arrow-left.svg";
import arrowRight from "../../public/images/arrow-right.svg";

const raleway = Raleway({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

function ImageTypes() {
  return (
    <section
      className={`${raleway.variable} font-raleway w-mobile-width flex flex-col gap-5 mx-auto my-5`}
    >
      <div className="flex gap-3">
        <div className="bg-search-bg rounded-lg py-3 w-1/3 text-center text-sm flex items-center justify-center">
          <span>High Quality</span>
        </div>
        <div className="bg-search-bg rounded-lg py-3 w-1/3 text-center text-sm flex items-center justify-center">
          <span>Pop Art</span>
        </div>
        <div className="bg-search-bg rounded-lg py-3 w-1/3 text-center text-sm flex items-center justify-center">
          <span>Realistic Look</span>
        </div>
      </div>
      <div className="flex relative w-full shadow-biggerShadow rounded-lg">
        <div className="w-1/2 rounded-l-lg bg-lightgray relative flex flex-col py-2 justify-center items-center">
          <div className="text-lightBlack text-sm">Style preview</div>
          <Image src={guitar} priority alt="Man with electric guitar" />
        </div>
        <div className="w-1/2 bg-lighter-bg flex items-center rounded-r-lg">
          <div className="flex flex-col w-2/3 mx-auto justify-center items-center gap-3">
            <div className="uppercase text-sm font-semibold">minimalistic</div>
            <div className="rounded-lg shadow-insetShadow bg-button-red uppercase text-search-bg text-semibold px-6 py-3">
              cartoon
            </div>
            <div className="relative flex justify-center items-center">
              <Image
                className="absolute top-0 -left-3"
                priority
                src={locker}
                alt="Locker icon"
              />
              <Image
                className="flex items-center"
                priority
                src={artistic}
                alt="Artistic text"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-2 left-2">
          <Image src={arrowLeft} priority alt="Arrow left icon" />
        </div>
        <div className="absolute top-2 right-2">
          <Image src={arrowRight} priority alt="Arrow right icon" />
        </div>
      </div>
    </section>
  );
}

export default ImageTypes;
