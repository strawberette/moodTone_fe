import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
import Logo from "./Logo";

const NavigationPage = () => {
  
  // const handleClick = ({ user, setUser }) => {
  //   setUser(null);
  // };

  return (
    <>
    <div className="navPage">
    <div><ul className="navBar">
        <li><div className="darkModeToggle">
          <ChakraProvider >
              <Toggle />
          </ChakraProvider>
        </div></li>
        <li className="navbarlink"><Link to="/emotions">Emotional Colours</Link></li>
        <li className="navbarlink"><Link to="/musisphere">Musisphere</Link></li>
        <li><Logo /></li>
        <li className="navbarlink"><Link to="/profile">Profile</Link></li>
        <li className="navbarlink"><div><Link to="/" style={{ textDecoration: "none" }}>Log Out</Link></div></li>
      </ul>
      </div>
      <div className="burgerMenu"></div>
    </div>
    </>
  );
};

export default NavigationPage;
