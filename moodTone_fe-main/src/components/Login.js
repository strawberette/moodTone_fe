import { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, Route, Redirect } from "react-router-dom";
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819

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
    console.log(data.user.name);
  };
  if (user) {
    return (
      <div className="App">
        <p>You are already logged in!</p>
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
<<<<<<< HEAD
        <label htmlFor="user">User:</label>
=======
        <label htmlFor="user">Email:</label>
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819
        <input
          type="text"
          name="user"
          value={userName}
          onChange={handleUserName}
        />

<<<<<<< HEAD
        <label htmlFor="password">User:</label>
=======
        <label htmlFor="password">Password:</label>
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
<<<<<<< HEAD

        <input type="submit" value="Submit" />
      </form>

      <Link to="/">Home</Link>
=======
        <Link to="/navigationPage">
          <button type="button"> Submit </button>
        </Link>
      </form>
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819
    </>
  );
}

export default Login;
