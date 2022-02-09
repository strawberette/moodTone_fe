import React from "react";
import { Redirect } from "react-router-dom";


const Logout = (props) => {
  // const user = localStorage.getItem("user")
  console.log("props.user", props.user)
  const handleClick = () => {
    localStorage.removeItem("user");
    props.setLoggedOut(true)
  };
  if (!props.user) {
    // return <Redirect to="/home" />;
    return <></>
  }


  
  return <button onClick={handleClick}>Log out</button>
}

export default Logout;
