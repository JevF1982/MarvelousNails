import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import NavBar from "../Navbar/Navbar";
// import HeroMulti from "../HeroMulti/HeroMulti";
// import PhotoGallery from "../LookBook/PhotoGallery/PhotoGallery";

// import BottomSection from "../HomePage/BottomSection/Bottomsection";
// import Footer from "../Footer/Footer";

const Bottomsection = React.lazy(() =>
  import("../HomePage/BottomSection/Bottomsection")
);
const Footer = React.lazy(() => import("../Footer/Footer"));
const HeroMulti = React.lazy(() => import("../HeroMulti/HeroMulti"));
const PhotoGallery = React.lazy(() =>
  import("../LookBook/PhotoGallery/PhotoGallery")
);

function LookBook() {
  return (
    <div>
      <NavBar />
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <HeroMulti />
        <PhotoGallery />
        <Bottomsection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default LookBook;
