import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import SadIcon from "../utility/sad.png";
// import "./App.css";
import EmotionModalSad from "../modals/EmotionModalSad";
const RouteModalSad = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sad  */}
      <div className="sadIcon" onClick={() => setOpen(true)}>
        <img
          src={SadIcon}
          alt="Sad Icon in grey"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalSad />
      </Modal>
    </>
  );
};

export default RouteModalSad;
