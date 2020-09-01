import React from "react";
import { useMediaQuery } from "../../Utils/useMediaQuery";

function MapsSection() {
  const isRowBased = useMediaQuery("(max-width: 650px)");

  return (
    <div
      style={{
        marginTop: "90px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "block", width: "100%", flex: "10" }}>
        <img
          src={require("../../static/misc/googleMap.jpg")}
          alt="map"
          style={{ width: !isRowBased ? "70%" : "100%" }}
        />
      </div>
    </div>
  );
}

export default MapsSection;
