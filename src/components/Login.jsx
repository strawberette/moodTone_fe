import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import moodTone from "../utility/moodTone.jpg";
import "./style.scss";

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
    setUser({ username: data.user.name, id: data.user.id, jwt: data.token });
  };
  if (user) {
    return <Redirect to="/navigationPage" />;
  }

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={moodTone} alt={"moodtone rainbow logo"} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="user">Email:</label>
              <input
                type="text"
                name="user"
                placeholder="email"
                value={userName}
                onChange={handleUserName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
