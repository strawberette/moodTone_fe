import { useState } from "react";
import { Modal } from "react-responsive-modal";
import AngerIcon from "../utility/anger.png";
// import "./App.css";
import EmotionModalAnger from "../modals/EmotionModalAnger";
const RouteModalAnger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* anger  */}
      <div className="angerIcon" onClick={() => setOpen(true)}>
        <img
          src={AngerIcon}
          alt="anger Icon in red"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalAnger />
      </Modal>
    </>
  );
};

export default RouteModalAnger;
