import React, { useEffect, useState } from "react";
import IntroLoader from "@/components/common/IntroLoader";
import Hero from "@/components/Home/Hero";
import MobileHero from "@/components/Home/MobileHero";
import ReviewSection from "@/components/Home/ReviewSection";
import StaticImage from "@/components/Home/StaticImage";
import StickyWork from "@/components/Home/StickyWork";

const Index = () => {

  return (
    <>
      <IntroLoader />
      <div className="lg:hidden w-full">
        <MobileHero />
      </div>
      <div className="hidden lg:block w-full">
        <Hero />
      </div>
      <StaticImage />
      <StickyWork />
      <ReviewSection />
    </>
  );
};

export default Index;
