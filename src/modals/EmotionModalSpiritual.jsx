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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea a,
        eligendi cupiditate odio quam dolorum? Laudantium iste consequatur
        consequuntur vel earum pariatur culpa nemo, eum blanditiis odio mollitia
        eius! Nostrum corrupti placeat facilis nobis voluptas beatae molestiae,
        iure pariatur velit accusantium quia fugiat magni voluptatem tenetur
        ipsa consequatur eaque eos nam quae amet expedita quam. Fugiat officiis
        voluptatibus odit. Sunt veniam tempore rem deleniti, voluptate nobis
      </p>
    </div>
  );
}
export default EmotionModalSpiritual;
