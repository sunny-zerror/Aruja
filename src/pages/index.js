import React, { useEffect, useState } from "react";
import IntroLoader from "@/components/common/IntroLoader";
import Hero from "@/components/Home/Hero";
import MobileHero from "@/components/Home/MobileHero";
import ReviewSection from "@/components/Home/ReviewSection";
import ServiceSlider from "@/components/Home/ServiceSlider";
import StaticImage from "@/components/Home/StaticImage";
import StickyWork from "@/components/Home/StickyWork";

const Index = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (!hasSeenLoader) {
      setShowLoader(true);

      const flagTimer = setTimeout(() => {
        sessionStorage.setItem("hasSeenLoader", "true");
      }, 4000);

      const hideTimer = setTimeout(() => {
        setShowLoader(false);
      }, 7000);

      return () => {
        clearTimeout(flagTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  return (
    <>
      {showLoader && <IntroLoader />}

      <div className="lg:hidden w-full">
        <MobileHero />
      </div>
      <div className="hidden lg:block w-full">
        <Hero />
      </div>
      <StaticImage />
      <StickyWork />
      <ServiceSlider />
      <ReviewSection />
    </>
  );
};

export default Index;
