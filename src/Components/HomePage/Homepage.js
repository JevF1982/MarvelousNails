import React, { Suspense } from "react";
import Navigation from "../Navbar/Navbar";
import HeroSection from "../HomePage/Herosection/Herosection";
import Spinner from "react-bootstrap/Spinner";

import CookieBan from "../Utils/CookieBan";

const InfoSection = React.lazy(() =>
  import("../HomePage/InfoSection/InfoSection")
);
const VideoPlayer = React.lazy(() =>
  import("../HomePage/VideoPlayer/VideoPlayer")
);
const ServiceSection = React.lazy(() =>
  import("../HomePage/ServiceSection/ServiceSection")
);
const AboutMeSection = React.lazy(() =>
  import("../HomePage/AboutMeSection/AboutMeSection")
);
const ClientSection = React.lazy(() =>
  import("../HomePage/ClientSection/Clientsection")
);
const AppointmentSection = React.lazy(() =>
  import("../HomePage/AppointmentSection/AppointmentSection")
);
const ImgSection = React.lazy(() =>
  import("../HomePage/ImgSection/ImgSection")
);
const BottomSection = React.lazy(() =>
  import("../HomePage/BottomSection/Bottomsection")
);
const Footer = React.lazy(() => import("../Footer/Footer"));

function Homepage() {
  return (
    <div>
      <CookieBan />
      <Navigation />
      <HeroSection />
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <InfoSection />
      </Suspense>
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <VideoPlayer />
      </Suspense>
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <ServiceSection />
      </Suspense>
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <AboutMeSection />
      </Suspense>
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <ClientSection />
      </Suspense>
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <AppointmentSection />
      </Suspense>
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <ImgSection />
      </Suspense>
      <Suspense
        fallback={<Spinner animation="border" style={{ marginTop: "200px" }} />}
      >
        <BottomSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Homepage;
