/**
 * @Author: sarahnouh
 * @Date:   1985-10-26T10:15:00+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-06-12T00:19:40+02:00
 */

import React from "react";
import videoImg from "./images/man.jpg";
import rec_icon from "./images/rec_icon.png";
import start_rec from "./images/start_rec.png";
import thumbnail from "./images/thumbnail.png";
import focus from "./images/focus.png";
import frame from "./images/frame.png";
import "./App.scss";

function App() {
  return (
    <div className="row">
      <div className="col-12 darkblue-header" />
      <div className="col-3 orange-sidebar" />
      <div className="col-12 col-md-9 video-content text-center">
        <div className="row">
          <h3 className="col-12 text-center video-title">The Video Title</h3>
          <div className="col-12">
            <div className="video-image-container">
              <img className="video-img" src={videoImg} alt="" />
              {/* <img className="frame" src={frame} alt="" /> */}
              <img className="start-rec" src={start_rec} alt="" />
              <img className="focus" src={focus} alt="" />
              <div className="rec-items">
                <img className="rec-icon" src={rec_icon} alt="" />
                <p className="rec-text">rec</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="video-img" /> */}
        <div className="row">
          <div className="offset-md-3 col-4 col-md-2 thumbnail">
            <img src={thumbnail} className=" thumbnail-img" />
            <div className="overlay" />
          </div>
          <div className="col-4 col-md-2 thumbnail">
            <img src={thumbnail} className=" thumbnail-img" />
            <div className="overlay" />
          </div>
          <div className="col-4 col-md-2 thumbnail">
            <img src={thumbnail} className=" thumbnail-img" />
            <div className="overlay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
