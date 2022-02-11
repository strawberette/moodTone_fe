import React from "react";
// import { useState } from "react";
import "../App.css";
import RomanticIcon from "../utility/romantic.png";
function EmotionModalRomantic() {
  return (
    <div className="modal-wrapper-romantic">
      <img
        className="romantic"
        src={RomanticIcon}
        alt="Romantic Icon in pink"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>ROMANTIC</h2>
      <p>
        {`Love is a state of intimacy, closeness, affection. It is often characterised by trust and commitment, and generally involves attractiveness and passion. It is often associated with different shades of the colour red, ranging from vivid red to pink. The colour pink, in fact,  elicit tenderness, softness, affection, nurturance, kindness. This feeling and colour are often associated with medium-fast paced music in major tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalRomantic;
