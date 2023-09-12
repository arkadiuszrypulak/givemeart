//components
import Baner from "@/components/Baner";
import ImageTypes from "@/components/ImageTypes";
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import Inspiration from "@/components/Inspiration";
import React from "react";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen ">
      <div className="bg-hero-pattern bg-no-repeat absolute -z-50 top-0 -right-6 w-full h-full"></div>

      <Nav />
      <Baner />
      <Search />
      <ImageTypes />
      <Inspiration />
    </section>
  );
}
