import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
import Logout from "./Logout";
import { Redirect } from "react-router-dom";

const NavigationPage = (props) => {
  console.log("props", props)
  const [loggedOut, setLoggedOut] = useState(false)
  // const handleClick = ({ user, setUser }) => {
  //   setUser(null);
  // };
  if (loggedOut) {
    return <Redirect to="/" />;
  }
  
  return (
    <>
    <div className="navPage">
      <ul className="navBar">
        <li><div className="darkModeToggle">
          <ChakraProvider >
              <Toggle />
          </ChakraProvider>
        </div></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/emotions">Emotional Colours</Link></li>
        <li><Link to="/musisphere">Musisphere</Link></li>
        {/* <li><div><Link to="/" style={{ textDecoration: "none" }}>Log Out</Link></div></li> */}
        <li><Logout user={props.user} setUser={props.setUser} setLoggedOut={setLoggedOut} /></li>
      </ul>
    </div>
    </>
  );
};

export default NavigationPage;
