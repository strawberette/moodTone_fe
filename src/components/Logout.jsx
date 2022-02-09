import React from "react";

const Logout = ({ user, setUser }) => {
  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  if (!user) {
    return <></>;
  }

  return (
    <div id="logOutInfo">
      <p>
        Logged in as <b>{user.username}</b>
      </p>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
}

export default Logout;
