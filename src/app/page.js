//components
import Baner from "@/components/Baner";
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import React from "react";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen ">
      <div className="bg-hero-pattern bg-no-repeat absolute -z-50 top-0 -right-6 w-full h-full"></div>

      <Nav />
      <Baner />
      <Search />
    </section>
  );
}
