import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      {/* <p>
        For a Better Experience, Download <br /> Tomato App
      </p> */}
      <p className="app-download-text">
        For an <span className="highlight-text">Unbeatable Experience</span>,
        Download <br />
        <span className="brand-text">
          Tomato
          <span className="tomato-emoji">🍅</span>
          App
        </span>
      </p>
      <div className="app-download-platforms">
        <img
          src={assets.play_store}
          alt="Play Store"
          className="download-icon"
        />
        <img src={assets.app_store} alt="App Store" className="download-icon" />
      </div>
    </div>
  );
};

export default AppDownload;
