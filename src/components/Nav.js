"use client";
// React & Next
import React, { useState } from "react";
import Image from "next/image";
// Hamburger
import { Divide as Hamburger } from "hamburger-react";
// Icons
import heart from "../../public/images/heart.svg";
import user from "../../public/images/user.svg";
import cart from "../../public/images/cart.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    {
      id: 1,
      name: "Link 1",
      href: "#",
    },
    {
      id: 2,
      name: "Link 2",
      href: "#",
    },
    {
      id: 3,
      name: "Link 3",
      href: "#",
    },
  ];

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="h-16 w-mobile-width mx-auto flex items-center justify-between">
      <Hamburger toggle={setIsOpen} toggled={isOpen} />

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
          onClick={handleOverlayClick}
        />
      )}

      <div className="absolute top-5 right-5 flex items-center gap-3">
        <Image priority src={heart} alt="Heart icon in nav" />
        <Image priority src={cart} alt="Cart icon" />
        <Image priority src={user} alt="User icon" />
      </div>

      <div
        className={`${
          isOpen
            ? "fixed opacity-1 translate-y-0"
            : "opacity-0 translate-y-full"
        } top-0 left-0 w-full h-1/2 bg-white z-20 transform transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute top-3 left-5">
          <Hamburger toggle={setIsOpen} toggled={isOpen} />
        </div>

        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          {menu.map((el) => (
            <li key={el.id}>
              <a href={el.href}>{el.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
