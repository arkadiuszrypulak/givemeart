import React from "react";
//fonts
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

function Search() {
  return (
    <div className="w-mobile-width mx-auto mt-24">
      <div className="w-full relative">
        <input
          className={`w-full ${raleway.variable} font-raleway shadow-lg p-4 rounded-lg bg-search-bg outline-none`}
          type="text"
          placeholder="What do you want to create?"
        />
        <div className="absolute top-0 right-0">img</div>
      </div>
    </div>
  );
}

export default Search;
