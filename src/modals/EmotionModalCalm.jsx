import React from "react";
// import { useState } from "react";
import "../App.css";
import CalmIcon from "../utility/calm.png";
function EmotionModalCalm() {
  return (
    <div className="modal-wrapper-calm">
      <img
        className="calm"
        src={CalmIcon}
        alt="calm Icon in light blue"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>CALM</h2>
      <p>
        {`Calmness is a state of openness, tranquillity and reflectiveness. It is characterised by the absence of turbulence, agitation and excitement in the mind. It is often associated with shades of blue, like pastel blue or baby blue. It has been argued that this association may reflect the sense of calmness one feels when looking at a clear blue sky, or clear waters. This state and colour are often associated with slow paced music in major tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalCalm;
