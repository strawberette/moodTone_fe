import { useState } from "react";
import { Modal } from "react-responsive-modal";
import SereneIcon from "../utility/serene.png";
// import "./App.css";
import EmotionModalSerene from "../modals/EmotionModalSerene";
const RouteModalSerene = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Serene  */}
      <div className="sereneIcon" onClick={() => setOpen(true)}>
        <img
          src={SereneIcon}
          alt="Serene Icon in green"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalSerene />
      </Modal>
    </>
  );
};

export default RouteModalSerene;
