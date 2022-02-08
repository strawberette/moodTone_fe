import React from "react";

const Logout = ({ user, setUser }) => {
  const handleClick = () => {
    setUser(null);
  };
  if (!user) {
    return <></>;
  }

  return (
    <div>
      <p id="logOutInfo">
        Logged in as <b>{user.username}</b>
      </p>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
}

export default Logout;
