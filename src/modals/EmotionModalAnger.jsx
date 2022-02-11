import React from "react";
// import { useState } from "react";
import "../App.css";
import AngerIcon from "../utility/anger.png";
function EmotionModalAnger() {
  return (
    <div className="modal-wrapper-anger">
      <img
        className="anger"
        src={AngerIcon}
        alt="anger Icon in red"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>ANGRY</h2>
      <p>
        {`Anger is a state of disturbance, displeasure, annoyance or hostility. It can arise from a feeling of threat, any other interruption of a peaceful state or a sense of injustice. It is often associated with the colour red, which is a colour that can stimulate strong emotions, energy and aggression. Anger and the colour red are often semantically associated by the saying “Seeing red”, and physiologically associated: when we experience anger the blood floods to our face which turns red. `}
      </p>
    </div>
  );
}
export default EmotionModalAnger;
