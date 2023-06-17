import React from "react";
import HeroSection from "../components/homepageComponents/HeroSection";
import Platform from "../components/homePageComponents/Platform";
import TeamSection from "../components/homepageComponents/TeamSection";
import Footer from "../components/homepageComponents/Footer";
import RoadMap from "../components/homePageComponents/RoadMap";
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroSection />
        <Platform />
        <RoadMap />
        <TeamSection />
      </div>
      <Footer />
    </>
  );
}
