import React from "react";
// import { useState } from "react";
import "../App.css";
import PeacefulIcon from "../utility/peace.png";
function EmotionModalPeaceful() {
  return (
    <div className="modal-wrapper-peaceful">
      <img
        className="peaceful"
        src={PeacefulIcon}
        alt="peaceful Icon in white"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>PEACEFUL</h2>
      <p>
        {`Peacefulness is a state of harmony, in which you are spiritually and mentally at peace. It is a feeling of bliss and happiness that provides you with the strength and the resilience to overcome stress. It is often associated with the colour white, which is a symbol of purity, innocence, and balance and inspires a sense of light and freshness. Peaceful states and white colour are often associated with slow paced music in major tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalPeaceful;
