import React, { Suspense } from "react";
import NavBar from "../Navbar/Navbar";
import Spinner from "react-bootstrap/Spinner";
// import HeroMulti from "../HeroMulti/HeroMulti";
// import MapsSection from "./MapsSection/MapsSection";
// import FormSection from "./FormSection/FormSection";
// import Bottomsection from "../HomePage/BottomSection/Bottomsection";
// import Footer from "../Footer/Footer";

const Bottomsection = React.lazy(() =>
  import("../HomePage/BottomSection/Bottomsection")
);
const Footer = React.lazy(() => import("../Footer/Footer"));
const HeroMulti = React.lazy(() => import("../HeroMulti/HeroMulti"));
const MapsSection = React.lazy(() => import("./MapsSection/MapsSection"));
const FormSection = React.lazy(() => import("./FormSection/FormSection"));

function ContactPage() {
  return (
    <div>
      <NavBar />
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <HeroMulti />
        <MapsSection />
        <FormSection />
        <Bottomsection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default ContactPage;
