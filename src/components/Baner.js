"use client";
//react & next
import React, { useState } from "react";
import Image from "next/image";
//fonts
import { Open_Sans } from "next/font/google";
import { Raleway } from "next/font/google";
//images & icons
import logo from "../../public/images/logo.svg";
//framer
import { motion } from "framer-motion";
//effects
import { fadeIn } from "@/fadeIn";

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
  const [step, setStep] = useState(1);

  return (
    <section className="flex flex-col gap-8 justify-center items-center w-mobile-width mx-auto">
      <div className="flex flex-col items-center justify-center gap-8">
        <motion.div
          className="mt-4"
          variants={fadeIn("up", 0.45)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <Image priority src={logo} alt="Logo Give me Art" />
        </motion.div>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className={`${open_sans.variable} font-openSans text-center text-xl`}
        >
          Generate your ART by typing in field below any words that comes to
          your mind !
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("up", 0.55)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className={`${raleway.variable} font-raleway rounded flex w-[90vw]`}
      >
        <div
          className={`${
            step === 1
              ? "progressBarRed rounded "
              : [2, 3].includes(step)
              ? "progressBarRed rounded-l"
              : "progressBarGray"
          }`}
        >
          <div
            onClick={() => setStep(1)}
            className={`${
              [1, 2, 3].includes(step)
                ? "progressBarRedNumber"
                : "progressBarGrayNumber"
            }`}
          >
            <span>1</span>
          </div>
          <div className="progressBarDesc">
            <span
              className={`${
                [1, 2, 3].includes(step)
                  ? "progressBarRedText"
                  : "progressBarGrayText"
              }`}
            >
              Generate image
            </span>
          </div>
        </div>

        <div
          className={`${
            step === 2
              ? "progressBarRed rounded-r"
              : step === 3
              ? "progressBarRed"
              : "progressBarGray"
          } transition duration-300`}
        >
          <div
            onClick={() => setStep(2)}
            className={`${
              [2, 3].includes(step)
                ? "progressBarRedNumber"
                : "progressBarGrayNumber"
            } transition duration-300`}
          >
            <span>2</span>
          </div>
          <div className="progressBarDesc">
            <span
              className={`${
                [2, 3].includes(step)
                  ? "progressBarRedText"
                  : "progressBarGrayText"
              } transition duration-300`}
            >
              Choose your product
            </span>
          </div>
        </div>
        <div
          className={`${
            step === 3 ? "progressBarRed rounded-r" : "progressBarGray"
          } transition duration-300`}
        >
          <div
            onClick={() => setStep(3)}
            className={`${
              step === 3 ? "progressBarRedNumber" : "progressBarGrayNumber"
            } transition duration-300`}
          >
            <span>3</span>
          </div>
          <div className="progressBarDesc">
            <span
              className={`${
                step === 3 ? "progressBarRedText" : "progressBarGrayText"
              } transition duration-300`}
            >
              Order
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Baner;
