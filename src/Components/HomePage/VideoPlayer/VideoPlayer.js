import React from "react";
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import { useMediaQuery } from "../../Utils/useMediaQuery";
import { videoSectionData } from "../../Utils/ImgDataGlobal";

function VideoPlayer() {
  const isRowBased = useMediaQuery("(max-width: 650px)");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "120px",
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
          poster={videoSectionData.img}
          src={videoSectionData.mov}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
