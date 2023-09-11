"use client";
//react & next
import React, { useState } from "react";
import Image from "next/image";
//hamburger
import { Divide as Hamburger } from "hamburger-react";
//icons
import heart from "../../public/images/heart.svg";
import user from "../../public/images/user.svg";
import cart from "../../public/images/cart.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-16 container w-mobile-width mx-auto flex items-center justify-between">
      <Hamburger toggle={setIsOpen} toggled={isOpen} />
      <div className="flex items-center gap-3">
        <Image priority src={heart} alt="Heart icon in nav" />
        <Image priority src={cart} alt="Cart icon" />
        <Image priority src={user} alt="User icon" />
      </div>
    </nav>
  );
}

export default Nav;
