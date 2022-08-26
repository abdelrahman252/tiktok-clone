import React from "react";
import "./VideoFooter.scss";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="VideoFooter">
      <div className="videoFooterText">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooterTicker">
          <MusicNoteIcon className="VideoFooter-icon" />
          <p>{song}</p>
        </div>
      </div>

      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        className="videoFooterIMG"
      />
    </div>
  );
};

export default VideoFooter;
