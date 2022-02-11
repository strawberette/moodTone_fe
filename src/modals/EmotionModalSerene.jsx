import React from "react";
// import { useState } from "react";
import "../App.css";
import SereneIcon from "../utility/serene.png";
function EmotionModalSerene() {
  return (
    <div className="modal-wrapper-serene">
      <img
        className="serene"
        src={SereneIcon}
        alt="Serene Icon in green"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>SERENE</h2>
      <p>
        {`Serenity is a state of mind that reflects peace and acceptance. It is associated with an untroubled way of leaving, which embraces calm. It is often associated with the colour green, that is a colour that stimulates hope and relaxation. It has been argued that this association may be the result of the sense of serenity one feels when immersed in nature, surrounded by green. This state and colour are often associated with slow paced music in major tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalSerene;
