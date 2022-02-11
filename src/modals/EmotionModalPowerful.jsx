import React from "react";
// import { useState } from "react";
import "../App.css";
import PowerfulIcon from "../utility/powerful.png";
function EmotionModalPowerful() {
  return (
    <div className="modal-wrapper-powerful">
      <img
        className="powerful"
        src={PowerfulIcon}
        alt="powerful Icon in red"
        style={{
          position: "relative",
          left: "200px",
          width: "200px",
          cursor: "pointer",
        }}
      />
      <h2>POWERFUL</h2>
      <p>
        {`Personal power is an internal state that move you to consider your needs, and to act in their favour, and in your best interest. It empowers you to maintain control of your life, it makes you aware of your intellectual, emotional, and physiological resources and provides you with ways to regulate them, and with responses to guide your actions and behaviour. It is often associated to the colour black, with elicit a sense of strength, self-confidence, importance, formality and authority. There is also an association of this state and this colour with fast paced music in minor tonality.`}
      </p>
    </div>
  );
}
export default EmotionModalPowerful;
