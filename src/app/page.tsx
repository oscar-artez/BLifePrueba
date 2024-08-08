import BarNav from "@/components/BarNav";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BarNav/>
      <HeroSection/>

    </main>
  );
}