// import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import moodTone from "../utility/moodTone.jpg";
import "./style.scss";
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
      <div className="App">
        <p>You are already logged in!</p>
        <br />
        <Link to="/emotions">Home</Link>
      </div>
    );
  }

  if (response.status === 401) {
    return (
      <div className="App">
        <p>User {user} is already registered!</p>
        <br />
        <a href="/home">Try again</a>
        <br />
        <Link to="/home">Home</Link>
      </div>
    );
  }

  if (response.status === 201) {
    return <Redirect to="/emotions" />;
  }

  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={moodTone} alt={"mood tone rainbow logo"} />
        </div>
        <form onSubmit={submitForm}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="user">Email:</label>
              <input
                type="text"
                name="user"
                placeholder="email"
                value={user}
                onChange={handleUserChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
