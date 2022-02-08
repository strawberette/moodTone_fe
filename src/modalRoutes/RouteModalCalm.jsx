import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import CalmIcon from "../utility/calm.png";
// import "./App.css";
import EmotionModalCalm from "../modals/EmotionModalCalm";
const RouteModalCalm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* calm  */}
      <div className="calmIcon" onClick={() => setOpen(true)}>
        <img
          src={CalmIcon}
          alt="calm Icon in light blue"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalCalm />
      </Modal>
    </>
  );
};

export default RouteModalCalm;
