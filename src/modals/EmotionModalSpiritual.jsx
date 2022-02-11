import React from "react";
// import { useState } from "react";
import "../App.css";
import SpiritualIcon from "../utility/spiritual.png";
function EmotionModalSpiritual() {
  return (
    <div className="modal-wrapper-spiritual">
      <img
        className="spiritual"
        src={SpiritualIcon}
        alt="spiritual Icon in  black"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>SPIRITUAL</h2>
      <p>
        {`Spirituality is a state that elicits concern for, or an interest in the things of the spirit and the soul. It might be associated with religious experiences, prompted by nature and art, or exists on its own, as a reflective state of the mind. Spirituality is often associated with the colour purple, which is connected with a sense of mystery and unknown, with wisdom, with the supernatural and the divine. This state and colour are often associated with medium paced music in minor tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalSpiritual;
