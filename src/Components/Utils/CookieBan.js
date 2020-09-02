import React from "react";
import CookieConsent from "react-cookie-consent";

function CookieBan() {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Accept Cookies"
        acceptOnScroll={true}
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          color: "white",
          fontSize: "13px",
          backgroundColor: "grey",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </div>
  );
}

export default CookieBan;
