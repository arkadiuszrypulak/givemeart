"use client";
//react & next
import React from "react";
import Image from "next/image";
//fonts
import { Raleway } from "next/font/google";
//images & icons
import arrowRight from "../../public/images/arrow-right-with-line.svg";
import evil from "../../public/images/devil_heart.svg";
//framer
import { motion } from "framer-motion";
//effects
import { fadeIn } from "@/fadeIn";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

const containerVariants = {
  hidden: { opacity: 1 },
  hover: { opacity: 1 },
};

const imageVariants = {
  hidden: { translateX: 0 },
  hover: { translateX: "5px" },
};

function Inspiration() {
  return (
    <motion.section
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className={`${raleway.variable} font-raleway w-mobile-width mx-auto my-5 rounded-lg bg-search-bg flex flex-col justify-center items-center gap-3`}
    >
      <motion.div
        variants={fadeIn("up", 0.55)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="uppercase text-button-red text-xl text-center font-bold mt-1"
      >
        get inspired!
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="uppercase text-xl font-medium text-center"
      >
        best users designs
      </motion.div>
      <motion.div
        variants={[fadeIn("up", 0.65), containerVariants]}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        viewport={{ once: false, amount: 0.7 }}
        className="flex gap-2 text-semiLightBlack cursor-pointer"
      >
        <span className="font-semibold text-lg">See more</span>
        <motion.div className="transform" variants={imageVariants}>
          <Image
            priority
            className="inline-block"
            src={arrowRight}
            alt="Right arrow icon"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <Image priority src={evil} alt="Image of evil with shape of heart" />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full flex rounded-lg"
      >
        <div className="w-4/6 p-3 bg-line-gray rounded-l-lg">
          punk heart, gothic
        </div>
        <div className="w-2/6 p-3 text-center bg-gradient-to-b from-gray-300 via-opacity-0 to-transparent rounded-r-lg uppercase">
          Artistic
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="uppercase flex justify-center items-center w-1/2 mx-auto bg-button-red rounded-lg text-white mb-3 cursor-pointer transition duration-300 hover:shadow-insetShadow"
      >
        <span className="inline-block py-2">buy</span>
      </motion.div>
    </motion.section>
  );
}

export default Inspiration;
