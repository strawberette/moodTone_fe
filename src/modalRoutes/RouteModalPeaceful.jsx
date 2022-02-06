import { useState } from "react";
import { Modal } from "react-responsive-modal";
import PeacefulIcon from "../utility/peace.png";
// import "./App.css";
import EmotionModalPeaceful from "../modals/EmotionModalPeaceful";
const RouteModalPeaceful = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Peaceful  */}
      <div className="peacefulIcon" onClick={() => setOpen(true)}>
        <img
          src={PeacefulIcon}
          alt="Peaceful Icon in white"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalPeaceful />
      </Modal>
    </>
  );
};

export default RouteModalPeaceful;
