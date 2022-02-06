import { useState } from "react";
import { Modal } from "react-responsive-modal";
import HappyIcon from "../utility/happy.png";
// import "./App.css";
import EmotionModalHappy from "../modals/EmotionModalHappy";
const RouteModalHappy = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Happy  */}
      <div className="happyIcon" onClick={() => setOpen(true)}>
        <img
          src={HappyIcon}
          alt="Happy Icon in yellow"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalHappy />
      </Modal>
    </>
  );
};

export default RouteModalHappy;
