import React from "react";
import { useState } from "react";
import MoodToneLogo from "../utility/moodTone.jpg";
import EmotionModal from "./EmotionModal";
import "../App.css";
// import EmotionModalAnger from "./EmotionModalAnger";
const EmotionsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="body">
      <div className="fullBox diagonalBox">
        <div className="emotionsPage">
          <div className="iconsWrapper">
            <div className="emoticon">
              <EmotionModal />
            </div>
            <div className="emoticon">
              <EmotionModal />
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
              <div className="emoticon">
                <EmotionModal />
              </div>
            </div>
            <div className="logoWrapper">
              <img
                src={MoodToneLogo}
                className="logo2"
                alt="moodTone rainbow logo "
              ></img>
            </div>
            <div className="Info">
              <h2>Welcome to moodTone</h2>
              <br />
              <br />

              <p>
                Here you can find out about the different colours we chose for
                this new App! Warm colors like red, yellow and orange evoke
                higher arousal emotions, such as love, passion, happiness, and
                anger. Cool colors, like blue, green and purple are linked to
                calmness, sadness and indifference. Colors can trigger these
                arousal states and emotions. Much like music does!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionsPage;
