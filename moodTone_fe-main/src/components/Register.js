import { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, Redirect } from "react-router-dom";
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819

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

    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });

    setResponse(res);

    // const resJson = await res.json();
    // console.log(resJson);
    // setResult(resJson);
  };
  if (props.user) {
    return (
      <div className="App">
        <p>You are already logged in!</p>
        <br />
        <Link to="/home">Home</Link>
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
<<<<<<< HEAD
    return (
      <div className="App">
        <p>User {user} successfully registered!</p>
        <br />
        <Link to="/">Home</Link>
      </div>
    );
=======
    return <Redirect to="/navigationPage" />;
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={submitForm}>
<<<<<<< HEAD
        <label htmlFor="user">User:</label>
=======
        <label htmlFor="user">Email:</label>
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819
        <input
          type="text"
          name="user"
          value={user}
          onChange={handleUserChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;
