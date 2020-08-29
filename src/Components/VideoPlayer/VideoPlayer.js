import React from "react";
import "../../../node_modules/video-react/dist/video-react.css";

import { Player } from "video-react";
import { useMediaQuery } from "../Utils/useMediaQuery";

function VideoPlayer() {
  const isRowBased = useMediaQuery("(max-width: 650px)");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: !isRowBased ? "900px" : " 300px",
          marginBottom: "150px",
          maxHeight: "500px",
        }}
      >
        <Player
          playsInline
          poster="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
