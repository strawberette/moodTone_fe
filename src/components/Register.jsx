import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
import { Link } from "react-router-dom";
import Rainbow from "../utility/rainbow.png";
import FullCalm from "../utility/fullcalm.png";
import Fullhappy from "../utility/fullhappy.png";
import FullSerene from "../utility/fullserene.png";
function Register(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});
  const baseURL = `${process.env.REACT_APP_BASE_URL}/user/registeruser`;
  
  const handleUserChange = (e) => setUser(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      email: user,
      password: password,
    });
    console.log(payload);
    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });

    setResponse(res);
  };

  if (props.user) {
    return (
      <div className="already-logged-route">
        <div className=""></div>
        <div className="already-in">
          <p>You are already logged in!</p>
          <Link to="/login">
            <button className="takemeback">Take me back to login..</button>{" "}
          </Link>
        </div>
      </div>
    );
  }

  if (response.status === 401) {
    return (
      <>
        <ChakraProvider>
          <Toggle />
        </ChakraProvider>
        <div className="already-registered">
          <div className="serenebody">
            <img
              className="fullserene"
              src={FullSerene}
              alt="green coloured illustration of man on one knee holding a plant listening to music with earphones"
            />
          </div>
          <div className="already-reg">
            <p>User {user} is already registered!</p>
            <Link to="/login">
              <button className="tryagain">
                Please try registering again.
              </button>
            </Link>
            <h5>or</h5>

            <Link to="/">
              <button className="leavesite">Leave </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  if (response.status === 201) {
    return (
      <>
        <ChakraProvider>
          <Toggle />
        </ChakraProvider>
        <div className="register-route">
          <div className="happybody">
            <img
              className="fullhappy"
              src={Fullhappy}
              alt="orange coloured illustration of lady on picnic blanket listening to music with earphones"
            />
          </div>
          <div className="success">
            <p>Successfully registered! please login.</p>
            <Link to="/login">
              <button className="takemeback">Take me back to login..</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ChakraProvider>
        <Toggle />
      </ChakraProvider>
      <div className="register-container">
        <div className="welcome-info">
          <h2>New?</h2>
          <img
            className="rainbowlogo"
            src={Rainbow}
            alt="moodtone logo rainbow colours in a semi circle shape"
          />
          <h1>moodTone</h1>
          <p>
            Then sign up here! To the brand new music app that takes care of
            your emotions! Register to experience our unique musiSphere and let
            your emotions fly! If you are already subcribedn then click on the
            Login link!
          </p>
        </div>
        <div className="login-form">
          <div className="form-header">
            <h1>Sign Up Here..</h1>
          </div>
          <form onSubmit={submitForm}>
            <div className="email">
              <label htmlFor="user">Email:</label>
              <br />
              <input
                className="form-input"
                type="text"
                name="user"
                value={user}
                placeholder="email"
                onChange={handleUserChange}
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
                onChange={handlePasswordChange}
              />
            </div>
            <div className="footer">
              <div className="submit-regsiter">
                <input type="submit" value="Submit" className="btn-reg-sub" />
              </div>
              <div className="switch2-btn">
                <Link to="/login" className="btn btn-link">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
        <img
          className="calmbody"
          src={FullCalm}
          alt="illustration of girl in blue listening to music on headphones while meditating"
        />
      </div>
    </>
  );
}

export default Register;
