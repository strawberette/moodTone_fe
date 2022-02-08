import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
import Logout from "./Logout";

const NavigationPage = () => {
  
  return (
    <>
    <div className="navPage">
      <ul className="navBar">
        <li><div className="darkModeToggle">
          <ChakraProvider >
            {/* <ColorModeProvider> */}
              <Toggle />
            {/* </ColorModeProvider> */}
          </ChakraProvider>
        </div></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/emotions">Emotional Colours</Link></li>
        <li><Link to="/musisphere">Musisphere</Link></li>
        <li><Logout className="logOutInfo"/></li>
      </ul>
    </div>
    </>
  );
};

export default NavigationPage;
