import React from "react";
// import { useState } from "react";
import "../App.css";
import EnergyIcon from "../utility/energy.png";
function EmotionModalEnergy() {
  return (
    <div className="modal-wrapper-energy">
      <img
        className="energy"
        src={EnergyIcon}
        alt="energy Icon in orange"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>ENERGETIC</h2>
      <p>
        {`Energy is a state of high intensity, that elicits pleasure, wellbeing, positive emotions, and promote human flourishing . It is often associated with the colour orange, which is a combination of the colour red (which stimulates energy), and the colour yellow (that elicits happiness). The colour orange is known to stimulate mental activity and to produce an invigorating effect. This state and colour are often associated with  fast paced music in major tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalEnergy;
