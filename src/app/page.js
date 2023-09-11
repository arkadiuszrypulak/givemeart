//components
import Baner from "@/components/Baner";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <section className=" min-h-screen bg-hero-pattern bg-no-repeat">
      <Nav />
      <Baner />
    </section>
  );
}
