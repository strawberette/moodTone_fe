import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import SpiritualIcon from "../utility/spiritual.png";
// import "./App.css";
import EmotionModalSpiritual from "../modals/EmotionModalSpiritual";
const RouteModalSpiritual = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Spiritual  */}
      <div className="spiritualIcon" onClick={() => setOpen(true)}>
        <img
          src={SpiritualIcon}
          alt="Spiritual Icon in purple"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalSpiritual />
      </Modal>
    </>
  );
};

export default RouteModalSpiritual;
