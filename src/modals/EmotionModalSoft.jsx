import React from "react";
// import { useState } from "react";
import "../App.css";
import SoftIcon from "../utility/soft.png";
function EmotionModalSoft() {
  return (
    <div className="modal-wrapper-soft">
      <img
        className="Soft"
        src={SoftIcon}
        alt="Soft Icon in beige"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>COSY</h2>
      <p>
        {`Cosiness is a state of comfort and relaxation. A warm, intimate feeling of safety and contentment, that reflects a culture of low stress, slowing down and staying in. It is often associated with the colour beige, which represents simplicity, a sense of sweetness and inspires tranquillity. This feeling of cosiness and the colour beige are often also associated with slow paced music in major tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalSoft;
