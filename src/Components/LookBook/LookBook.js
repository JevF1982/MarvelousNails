import React from "react";
import NavBar from "../Navbar/Navbar";
import HeroMulti from "../HeroMulti/HeroMulti";
import Gallery from "react-photo-gallery";
import { photos } from "./LookBookData";
import BottomSection from "../HomePage/BottomSection/Bottomsection";
import Footer from "../Footer/Footer";

function LookBook() {
  return (
    <div>
      <NavBar />
      <HeroMulti />
      <Gallery photos={photos()} direction={"column"} />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default LookBook;
