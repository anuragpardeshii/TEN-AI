// import Connect from "@/components/Connect";
import Demo from "@/components/Demo";
import Experts from "@/components/Experts";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Reviews from "@/components/Reviews";
import VideoCarousel from "@/components/VideoCarousel";
import Impact from "@/components/Impact";
import React, { lazy, Suspense } from "react";
import Insights from "@/components/Insights";
import Loader from "@/components/ui/Loader";
// import AgentCard from "@/components/AgentCard";

function Home() {

  const Connect = lazy(() => import("@/components/Connect"));

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
      <Suspense fallback={<Loader />}>
        <Connect />
      </Suspense>
      {/* <AgentCard /> */}
    </div>
  );
}

export default Home;
