import React from "react";
// import { useState } from "react";
import "../App.css";
import HappyIcon from "../utility/happy.png";
function EmotionModalHappy() {
  return (
    <div className="modal-wrapper-happy">
      <img
        className="happy"
        src={HappyIcon}
        alt="happy Icon in yellow"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>HAPPY</h2>
      <p>
        {`Happiness is a state that reflects emotional well-being. It can be triggered by a specific event (e.g. being happy for an event that occurred in your life) or can be a broader state of mind (e.g. just being happy!). It is often accompanied by a specific facial expression, the smile! :) It is often associated with the colour yellow. It has been argued that this association might be related with the positive emotions one experiences when surrounded by sunshine. This state and colour are often associated with fast paced music in major tonality.
`}
      </p>
    </div>
  );
}
export default EmotionModalHappy;
