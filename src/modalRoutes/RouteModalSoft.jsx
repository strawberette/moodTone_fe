import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import SoftIcon from "../utility/soft.png";
// import "./App.css";
import EmotionModalSoft from "../modals/EmotionModalSoft";
const RouteModalSoft = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Soft  */}
      <div className="softIcon" onClick={() => setOpen(true)}>
        <img
          src={SoftIcon}
          alt="Soft Icon in beige"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalSoft />
      </Modal>
    </>
  );
};

export default RouteModalSoft;
