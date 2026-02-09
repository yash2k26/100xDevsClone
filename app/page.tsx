import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FifaCard from "./components/FifaCard";
import Dashboard from "./components/Dashboard";
import FifaCarousel from "./components/FifaCarousel";
import Footer from "./components/Footer";
import PricingPage from "./components/PricingPage";
import Faq from "./components/Faq";
import Features from "./components/Features";

export default function Home() {
  return (
    <section className="bg-black min-h-screen overflow-hidden ">
      <Navbar />
      <HeroSection />
      <Features />
      <PricingPage />
      <div className="flex flex-col gap-12 justify-center items-center  w-screen bg-black">
        <span className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-semibold text-transparent bg-linear-to-b from-neutral-600 to-white bg-clip-text tracking-tighter">
          Top Alumns
        </span>
        <FifaCarousel />
      </div>
      <Faq />
      <Footer />

    </section>
  );
}
