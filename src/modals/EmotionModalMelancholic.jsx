import React from "react";
// import { useState } from "react";
import "../App.css";
import MeloncholicIcon from "../utility/melancholic.png";
function EmotionModalMelancholic() {
  return (
    <div className="modal-wrapper-melancholic">
      <img
        className="melancholic"
        src={MeloncholicIcon}
        alt="Melancholic Icon in dark blue"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>MELANCHOLIC</h2>
      <p>
        {`Melancholy is a state of pensive sadness and contemplation. It is a reflective feeling of introspective nature, a sober thoughtfulness, usually with not obvious cause. It is often associated with darker shades of the colour blue. This association is also reflected semantically, “feeling blue”. Scientific studies have been arguing that people with depression perceive the colour blue more than other colours. This state and colour are often associated with slow paced music in minor tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalMelancholic;
