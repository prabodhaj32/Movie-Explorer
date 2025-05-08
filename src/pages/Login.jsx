// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check hardcoded credentials
    if (username === "admin" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/home"); // Redirect to home
    } else {
      alert("Invalid username or password. Try admin / 1234.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300, margin: "100px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 10, marginBottom: 10, width: "100%" }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 10, marginBottom: 10, width: "100%" }}
        />
        <button type="submit" style={{ padding: 10, width: "100%" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
