import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
import { Link, Redirect } from "react-router-dom";
import LoveBody from "../utility/fullromantic.png";
import Rainbow from "../utility/rainbow.png";
function Login({ user, setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = `${process.env.REACT_APP_BASE_URL}/user/login`;

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      email: userName,
      password: password,
    });

    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await res.json();
    const loggedInUser = {
      username: data.user.name,
      id: data.user.id,
      jwt: data.token,
    };
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };
  if (user) {
    return <Redirect to="/emotions" />;
  }

  return (
    <>
      <ChakraProvider>
        <Toggle />
      </ChakraProvider>

      <div className="login-container">
        <div className="welcome-info">
          <h2>Welcome to </h2>
          <img
            className="rainbowlogo"
            src={Rainbow}
            alt="moodtone logo rainbow colours in a semi circle shape"
          />
          <h1>moodTone </h1>
          <p>
           {`You are invited to a journey of discovery of your emotions, bathing in colours and music. 
           Register or Login to enter an immersive sensory experience. `}
          </p>
        </div>
        <div className="login-form">
          <div className="form-header">
            <h1>Login Here..</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="user">Email:</label>
              <br />
              <input
                className="form-input"
                type="text"
                name="user"
                value={userName}
                placeholder="email"
                onChange={handleUserName}
              />
            </div>
            <br />

            <div className="password">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <div className="footer">
              <div className="submit-button">
                <button type="submit" className="btn-sub">
                  Submit
                </button>
              </div>
              <div className="switch-btn">
                <Link to="/register" className="btn btn-link">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>

        <img
          className="lovebody"
          src={LoveBody}
          alt="illustration of girl in pink listening to music on headphones"
        />
      </div>
    </>
  );
}

export default Login;
