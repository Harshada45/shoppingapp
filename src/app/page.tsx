import Image from "next/image";
import Hero from "./components/Hero";
import { title } from "process";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";
import MobileNavbar from "./components/MobileNavbar";

export default function Home() {
 

  return (
    <main >
      <Hero/>
      <NewProducts/>
      <Testimonial/>
      <MobileNavbar/>
    </main>
  );
}
