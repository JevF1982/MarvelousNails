import React from "react";
import Navigation from "../Navbar/Navbar";
import HeroMulti from "../HeroMulti/HeroMulti";
import Footer from "../Footer/Footer";
import Bottomsection from "../HomePage/BottomSection/Bottomsection";

function AppointmentsPage() {
  return (
    <div>
      <Navigation />
      <HeroMulti />
      <div>
        <iframe
          src="https://marvelous-nails-1.salonized.com/bookings/new?layout=embed"
          style={{
            width: "100%",
            maxWidth: " 700px",
            height: " 600px",
            border: " none",
            marginTop: "90px",
          }}
        ></iframe>
      </div>
      <Bottomsection />
      <Footer />
    </div>
  );
}

export default AppointmentsPage;
