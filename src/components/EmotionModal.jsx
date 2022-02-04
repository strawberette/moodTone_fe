// import React from "react";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import AngerIcon from "../utility/anger.png";
import EnergyIcon from "../utility/energy.png";
import HappyIcon from "../utility/happy.png";
import SereneIcon from "../utility/serene.png";
import MelancholieIcon from "../utility/melancholic.png";
import RomanticIcon from "../utility/romantic.png";
import SpiritualIcon from "../utility/spiritual.png";
import CalmIcon from "../utility/calm.png";
import PeaceIcon from "../utility/peace.png";
import SoftIcon from "../utility/soft.png";
import SadIcon from "../utility/sad.png";
import PowerfulIcon from "../utility/powerful.png";
import "../App.css";
import EmotionModalAnger from "./EmotionModalAnger";
import EmotionModalEnergy from "./EmotionModalEnergy";
import EmotionModalHappy from "./EmotionModalHappy";
import EmotionModalSerene from "./EmotionModalSerene";
import EmotionModalMelancholic from "./EmotionModalMelancholic";
import EmotionModalRomantic from "./EmotionModalRomantic";
import EmotionModalSpiritual from "./EmotionModalSpiritual";
import EmotionModalCalm from "./EmotionModalCalm";
import EmotionModalPeaceful from "./EmotionModalPeaceful";
import EmotionModalSoft from "./EmotionModalSoft";
import EmotionModalSad from "./EmotionModalSad";
import EmotionModalPowerful from "./EmotionModalPowerful";

const EmotionModal = () => {
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

      {/* energy  */}
      <div className="energyIcon" onClick={() => setOpen(true)}>
        <img
          src={EnergyIcon}
          alt="energy Icon in orange"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalEnergy />
      </Modal>

      {/* happy  */}
      <div className="happyIcon" onClick={() => setOpen(true)}>
        <img
          src={HappyIcon}
          alt="happy Icon in yellow"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalHappy />
      </Modal>

      {/* serene  */}
      <div className="sereneIcon" onClick={() => setOpen(true)}>
        <img
          src={SereneIcon}
          alt="serene Icon in green"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalSerene />
      </Modal>

      {/* melancholly  */}
      <div className="melancholicIcon" onClick={() => setOpen(true)}>
        <img
          src={MelancholieIcon}
          alt="melancholic Icon in darkblue"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalMelancholic />
      </Modal>

      {/* romantic  */}
      <div className="romanticIcon" onClick={() => setOpen(true)}>
        <img
          src={RomanticIcon}
          alt="romantic Icon in pink"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalRomantic />
      </Modal>

      {/* spiritual  */}
      <div className="spiritualIcon" onClick={() => setOpen(true)}>
        <img
          src={SpiritualIcon}
          alt="spiritual Icon in purple"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalSpiritual />
      </Modal>

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

      {/* peaceful  */}
      <div className="peaceIcon" onClick={() => setOpen(true)}>
        <img
          src={PeaceIcon}
          alt="peaceful Icon in off white"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalPeaceful />
      </Modal>

      {/* sad */}
      <div className="softIcon" onClick={() => setOpen(true)}>
        <img
          src={SoftIcon}
          alt="soft Icon in beige"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalSoft />
      </Modal>

      {/* poweful  */}
      <div className="sadIcon" onClick={() => setOpen(true)}>
        <img
          src={SadIcon}
          alt="sad Icon in grey"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalSad />
      </Modal>
      <div className="powerfulIcon" onClick={() => setOpen(true)}>
        <img
          src={PowerfulIcon}
          alt="powerful Icon in black"
          style={{ width: "100px", cursor: "pointer" }}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <EmotionModalPowerful />
      </Modal>
    </>
  );
};
export default EmotionModal;
