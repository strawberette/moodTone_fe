import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import EnergyIcon from "../utility/energy.png";
// import "./App.css";
import EmotionModalEnergy from "../modals/EmotionModalEnergy";
const RouteModalEnergy = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Energy  */}
      <div className="energyIcon" onClick={() => setOpen(true)}>
        <img
          src={EnergyIcon}
          alt="Energy Icon in orange"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalEnergy />
      </Modal>
    </>
  );
};

export default RouteModalEnergy;
