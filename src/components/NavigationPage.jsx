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
    <ul className="navBar">
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
      <div className="burgerMenu">
        <ul className="burgerMenuLines">
          <li className="burgerLines blackLines"></li>
          <li className="burgerLines whiteLines"></li>
          <li className="burgerLines blackLines"></li>
          <li className="burgerLines whiteLines"></li>
          <li className="burgerLines blackLines"></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default NavigationPage;
