import React from "react";
import Logo from "../utility/logo.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
function LandingPage() {

  return (
    <div className="App">
    <ChakraProvider>
      <Toggle />
    </ChakraProvider>
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
        <img
          src={Logo}
          className="logo"
          alt="black and white logo mood flow"
        ></img>
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
