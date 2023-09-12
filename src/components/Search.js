//react & next
import React from "react";
import Image from "next/image";
//fonts
import { Raleway } from "next/font/google";
//images & icons
import searchIcon from "../../public/images/search.svg";

const raleway = Raleway({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

function Search() {
  return (
    <div className="w-mobile-width mx-auto mt-28">
      <div className="w-full relative">
        <input
          className={`w-full ${raleway.variable} font-raleway shadow-customShadow p-4 rounded-lg bg-search-bg outline-none`}
          type="text"
          placeholder="What do you want to create?"
        />
        <div className="absolute top-0 right-0 h-full flex rounded-lg items-center justify-center px-4 bg-main-red">
          <Image priority src={searchIcon} alt="Search icon" />
        </div>
      </div>
    </div>
  );
}

export default Search;
