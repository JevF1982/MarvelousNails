import React from "react";
import NavBar from "../Navbar/Navbar";
import HeroMulti from "../HeroMulti/HeroMulti";
import MapsSection from "./MapsSection/MapsSection";
import FormSection from "./FormSection/FormSection";
import Bottomsection from "../HomePage/BottomSection/Bottomsection";
import Footer from "../Footer/Footer";

function ContactPage() {
  return (
    <div>
      <NavBar />
      <HeroMulti />
      <MapsSection />
      <FormSection />
      <Bottomsection />
      <Footer />
    </div>
  );
}

export default ContactPage;
