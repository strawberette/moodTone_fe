import React from "react";
import { Redirect } from "react-router-dom";

const Logout = (props) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    props.setUser(null);
  };
  if (!props.user) {
    return <Redirect to="/login" />;
  }

  return <button onClick={handleClick}>Log out</button>;
};

export default Logout;
