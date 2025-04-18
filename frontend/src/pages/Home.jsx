import Connect from "@/components/Connect";
import Demo from "@/components/Demo";
import Experts from "@/components/Experts";
import Expertise from '@/components/Expertise';
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Reviews from "@/components/Reviews";
import VideoCarousel from "@/components/VideoCarousel";
import Impact from "@/components/Impact";
import React from "react";
import Insights from "@/components/Insights";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Demo />
      <VideoCarousel />
      <Offerings />
      <Reviews />
      <Expertise />
      <Experts />
      <Impact />
      <Insights isHomePage={true} />
      <Connect />
    </div>
  );
}

export default Home;
