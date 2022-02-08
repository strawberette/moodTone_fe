import { useState } from "react";
import { Modal } from "react-responsive-modal";
import PowerfulIcon from "../utility/powerful.png";
// import "./App.css";
import EmotionModalPowerful from "../modals/EmotionModalPowerful";
const RouteModalPowerful = () => {
  const [open, setOpen] = useState(false);
  // const [close, setClose] = useState(false);
  return (
    <>
      {/* Powerful  */}
      <div className="powerfulIcon" onClick={() => setOpen(true)}>
        <img
          src={PowerfulIcon}
          alt="Powerful Icon in black"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalPowerful />
      </Modal>
    </>
  );
};

export default RouteModalPowerful;
