import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
import Logo from "./logo";
import Logout from "./Logout";

const NavigationPage = (props) => {
  return (
    <>
    <div className="navPage">
      <ul className="navBar">
        <li><div className="darkModeToggle">
          <ChakraProvider >
              <Toggle />
          </ChakraProvider>
        </div></li>
        <li><Link to="/emotions">Emotional Colours</Link></li>
        <li><Link to="/musisphere">Musisphere</Link></li>
        {/* <li><div><Link to="/" style={{ textDecoration: "none" }}>Log Out</Link></div></li> */}
        <li><Logout user={props.user} setUser={props.setUser} /></li>
      </ul>
    </div>
    </>
  );
};

export default NavigationPage;
