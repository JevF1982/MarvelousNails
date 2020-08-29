import React from "react";
import Navigation from "../Navbar/Navbar";
import HeroSection from "../HomePage/Herosection/Herosection";
import InfoSection from "../HomePage/InfoSection/InfoSection";
import VideoPlayer from "../HomePage/VideoPlayer/VideoPlayer";
import ServiceSection from "../HomePage/ServiceSection/ServiceSection";
import AboutMeSection from "../HomePage/AboutMeSection/AboutMeSection";
import ClientSection from "../HomePage/ClientSection/Clientsection";
import AppointmentSection from "../HomePage/AppointmentSection/AppointmentSection";

function Homepage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <InfoSection />
      <VideoPlayer />
      <ServiceSection />
      <AboutMeSection />
      <ClientSection />
      <AppointmentSection />
    </div>
  );
}

export default Homepage;
