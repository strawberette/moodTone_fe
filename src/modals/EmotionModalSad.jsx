import React from "react";
// import { useState } from "react";
import "../App.css";
import SadIcon from "../utility/sad.png";
function EmotionModalSad() {
  return (
    <div className="modal-wrapper-sad">
      <img
        className="Sad"
        src={SadIcon}
        alt="Sad Icon in grey"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>SAD</h2>
      <p>
        {`Sadness is a state of unhappiness and pain. It ranges in intensity and it is often associated with a sense of loss. This feeling is often associated with cool, desaturated colours, particularly the colour grey. The colour grey is, in fact, considered to be the transition between two non-colours (black and white), and to promote feelings of detachment and neutrality. This state and colour are often associated with slow paced music in minor tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalSad;
