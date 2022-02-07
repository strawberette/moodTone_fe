import { useState } from "react";
import { Modal } from "react-responsive-modal";
import RomanticIcon from "../utility/romantic.png";
// import "./App.css";
import EmotionModalRomantic from "../modals/EmotionModalRomantic";
const RouteModalRomantic = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Romantic  */}
      <div className="RomanticIcon" onClick={() => setOpen(true)}>
        <img
          src={RomanticIcon}
          alt="romantic Icon in pink"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalRomantic />
      </Modal>
    </>
  );
};

export default RouteModalRomantic;
