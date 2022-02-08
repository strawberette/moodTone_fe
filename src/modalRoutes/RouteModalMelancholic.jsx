import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import MelancholicIcon from "../utility/melancholic.png";
// import "./App.css";
import EmotionModalMelancholic from "../modals/EmotionModalMelancholic";
const RouteModalMelancholic = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Melancholic  */}
      <div className="melancholicIcon" onClick={() => setOpen(true)}>
        <img
          src={MelancholicIcon}
          alt="Melancholic Icon in dark blue"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalMelancholic />
      </Modal>
    </>
  );
};

export default RouteModalMelancholic;
