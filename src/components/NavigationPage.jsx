import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
import Logo from "./logo";

const NavigationPage = () => {
  
  // const handleClick = ({ user, setUser }) => {
  //   setUser(null);
  // };

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
        {/* <li><Logo /></li> */}
        <li><Link to="/profile">Profile</Link></li>
        <li><div><Link to="/" style={{ textDecoration: "none" }}>Log Out</Link></div></li>
      </ul>
    </div>
    </>
  );
};

export default NavigationPage;
