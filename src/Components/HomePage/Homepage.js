import React from "react";
import Navigation from "../Navbar/Navbar";
import HeroSection from "../Herosection/Herosection";
import InfoSection from "../InfoSection/InfoSection";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function Homepage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <InfoSection />
      <VideoPlayer />
    </div>
  );
}

export default Homepage;
