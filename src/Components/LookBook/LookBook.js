import React from "react";
import NavBar from "../Navbar/Navbar";
import HeroMulti from "../HeroMulti/HeroMulti";
import PhotoGallery from "../LookBook/PhotoGallery/PhotoGallery";

import BottomSection from "../HomePage/BottomSection/Bottomsection";
import Footer from "../Footer/Footer";

function LookBook() {
  return (
    <div>
      <NavBar />
      <HeroMulti />
      <PhotoGallery />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default LookBook;
