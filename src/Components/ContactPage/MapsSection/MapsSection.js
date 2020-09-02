import React from "react";

function MapsSection() {
  return (
    <div
      style={{
        marginTop: "90px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "block", width: "100%", flex: "10" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.9979200541843!2d5.526979051625798!3d50.97922905690233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0d944212d9965%3A0x1929604666ff9920!2sWeg%20naar%20As%20272%2C%203600%20Genk!5e0!3m2!1sen!2sbe!4v1599039955736!5m2!1sen!2sbe"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="google-map"
        ></iframe>
      </div>
    </div>
  );
}

export default MapsSection;
