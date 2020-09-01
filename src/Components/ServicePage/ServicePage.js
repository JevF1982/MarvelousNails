import React from "react";
import NavBar from "../Navbar/Navbar";
import HeroMulti from "../HeroMulti/HeroMulti";
import PriceBlock from "./PriceBlock/PriceBlock";
import Bottomsection from "../HomePage/BottomSection/Bottomsection";
import Footer from "../Footer/Footer";

function ServicePage() {
  return (
    <div>
      <NavBar />
      <HeroMulti />
      <PriceBlock />
      <Bottomsection />
      <Footer />
    </div>
  );
}

export default ServicePage;
