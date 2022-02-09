import React from "react";
import "animate.css";
import "../App.css";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="App">
      <div className="wrapper">
        <ul className="circle">
          <li className="segment green" />
          <li className="segment darkBlue " />
          <li className="segment pink" />
          <li className="segment blue hidden" />
          <li className="segment purple hidden" />
          <li className="segment white hidden" />
          <li className="segment beige hidden" />
          <li className="segment gray hidden" />
          <li className="segment black hidden" />
          <li className="segment red" />
          <li className="segment orange" />
          <li className="segment yellow" />
        </ul>
        <div className="logo">
          <h1 class="animate__animated animate__fadeInLeftBig">moodTone</h1>
        </div>
        <div className="enterApp>">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button type="button" className="enter">
              ENTER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
