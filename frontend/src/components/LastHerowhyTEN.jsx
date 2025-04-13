"use client";
import { useEffect, useState } from "react";
import { Boxes } from "@/components/ui/background-boxes"; 

const LastHerowhyTEN = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollX(scrollTop * 0.5); // adjust speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[75vh] w-full flex items-center justify-center bg-blue-600 overflow-hidden text-white ">
      {/* Overlay Mask (Optional: Keeps text readable) */}
      <div className="absolute inset-0 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated Boxes Background */}
      <Boxes />

      {/* Content */}
      <div className="z-30 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Start your AI journey <br /> with Nurix today
        </h1>
        <button className="mt-3 px-3 py-2 text-sm bg-white text-black rounded-full hover:bg-black hover:text-white transition">
          <span className="mx-auto">Contact Us →</span>
        </button>
      </div>
    </section>
  );
};

export default LastHerowhyTEN;
