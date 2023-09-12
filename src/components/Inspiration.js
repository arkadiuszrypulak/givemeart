//react & next
import React from "react";
import Image from "next/image";
//fonts
import { Raleway } from "next/font/google";
//images & icons
import arrowRight from "../../public/images/arrow-right-with-line.svg";
import evil from "../../public/images/devil_heart.svg";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

function Inspiration() {
  return (
    <section
      className={`${raleway.variable} font-raleway w-mobile-width mx-auto my-5 rounded-lg bg-search-bg flex flex-col justify-center items-center gap-3`}
    >
      <div className="uppercase text-button-red text-xl text-center font-bold mt-1">
        get inspired!
      </div>
      <div className="uppercase text-xl font-medium text-center">
        best users designs
      </div>
      <div className="flex gap-2 text-semiLightBlack">
        <span className="font-semibold text-lg">See more</span>

        <Image
          className="inline-block"
          priority
          src={arrowRight}
          alt="Right arrow icon"
        />
      </div>
      <div>
        <Image priority src={evil} alt="Image of evil with shape of heart" />
      </div>
      <div className="w-full flex rounded-lg">
        <div className="w-4/6 p-3 bg-line-gray rounded-l-lg">
          punk heart, gothic
        </div>
        <div className="w-2/6 p-3 text-center bg-gradient-to-b from-gray-300 via-opacity-0 to-transparent rounded-r-lg uppercase">
          Artistic
        </div>
      </div>
      <div className="uppercase flex justify-center items-center w-1/2 mx-auto bg-button-red rounded-lg text-white mb-3">
        <span className="inline-block py-2">buy</span>
      </div>
    </section>
  );
}

export default Inspiration;
