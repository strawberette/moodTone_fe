import React, { useState } from "react";
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
    <div className="login-container">
      <div className="logowrapper">
        <ul className="circle">
          <li className="segment green" />
          <li className="segment darkBlue " />
          <li className="segment pink" />
          <li className="segment blue hidden" />
          <li className="segment purple hidden" />
          <li className="segment white hidden" />
          <li className="segment beige hidden" />
          <li className="segment gray hidden" />
          <li className="segment black hidden" />
          <li className="segment red" />
          <li className="segment orange" />
          <li className="segment yellow" />
        </ul>
      </div>
      <div className="welcome-info">
        <h2>Welcome to </h2>
        <img
          className="rainbowlogo"
          src={Rainbow}
          alt="moodtone logo rainbow colours in a semi circle shape"
        />
        <h1>moodTone </h1>
        <p>
          The brand new music app that takes care of your emotions! Login here
          to experience our unique musiSphere and let your emotions fly! If you
          are new to this App then click on the Register link!
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
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
        </form>
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
      </div>

      <img
        className="lovebody"
        src={LoveBody}
        alt="illustration of girl in pink listening to music on headphones"
      />
    </div>
  );
}

export default Login;
