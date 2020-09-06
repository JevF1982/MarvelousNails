import React, { Suspense } from "react";
import NavBar from "../Navbar/Navbar";
import Spinner from "react-bootstrap/Spinner";
import FormSection from "./FormSection/FormSection";

const Bottomsection = React.lazy(() =>
  import("../HomePage/BottomSection/Bottomsection")
);
const Footer = React.lazy(() => import("../Footer/Footer"));
const HeroMulti = React.lazy(() => import("../HeroMulti/HeroMulti"));
const MapsSection = React.lazy(() => import("./MapsSection/MapsSection"));

function ContactPage() {
  return (
    <div>
      <NavBar />
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <HeroMulti />
        <MapsSection />
      </Suspense>
      <FormSection />
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <Bottomsection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default ContactPage;
