import React, { Suspense } from "react";
import NavBar from "../Navbar/Navbar";

import Spinner from "react-bootstrap/Spinner";

const Bottomsection = React.lazy(() =>
  import("../HomePage/BottomSection/Bottomsection")
);
const Footer = React.lazy(() => import("../Footer/Footer"));
const HeroMulti = React.lazy(() => import("../HeroMulti/HeroMulti"));
const PriceBlock = React.lazy(() => import("./PriceBlock/PriceBlock"));

function ServicePage() {
  return (
    <div>
      <NavBar />
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <HeroMulti />
        <PriceBlock />
        <Bottomsection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default ServicePage;
