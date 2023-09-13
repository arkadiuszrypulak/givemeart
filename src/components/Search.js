"use client";
//react & next
import React from "react";
import Image from "next/image";
//fonts
import { Raleway } from "next/font/google";
//images & icons
import searchIcon from "../../public/images/search.svg";
//framer
import { motion } from "framer-motion";
//effects
import { fadeIn } from "@/fadeIn";

const raleway = Raleway({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

function Search() {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-mobile-width mx-auto mt-28"
    >
      <div className="w-full relative">
        <input
          className={`w-full ${raleway.variable} font-raleway shadow-customShadow p-4 rounded-lg bg-search-bg outline-none`}
          type="text"
          placeholder="What do you want to create?"
        />
        <div className="absolute top-0 right-0 h-full flex rounded-lg items-center justify-center px-4 bg-main-red cursor-pointer">
          <Image priority src={searchIcon} alt="Search icon" />
        </div>
      </div>
    </motion.div>
  );
}

export default Search;
