import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
import Logo from "./Logo";
import BurgerMenuLink from "./burgerMenuLink";
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
        <li className="navbarlink"><Link to="/emotions">Emotional Colours</Link></li>
        <li className="navbarlink"><Link to="/musisphere">Musisphere</Link></li>
        <li><Logo /></li>
        <li className="navbarlink"><Link to="/profile">Profile</Link></li>
        <li className="navbarLink"><div className="navbarLink"><Logout user={props.user} setUser={props.setUser}/></div></li>
      </ul>
      <BurgerMenuLink />
    </div>
    </>
  );
};

export default NavigationPage;
