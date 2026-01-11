import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // React Router navigation hook
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Retrieve stored user credentials from localStorage
    const stored = localStorage.getItem("userCredentials");

    // If no user is registered
    if (!stored) {
      alert("No registered user found. Please register first.");
      return;
    }

    // Parse the stored credentials
    const savedUser = JSON.parse(stored);

    // Check if entered credentials match stored ones
    if (username === savedUser.username && password === savedUser.password) {
      // Save logged-in user info in localStorage
      localStorage.setItem("user", JSON.stringify({ username }));
      // Navigate to home page
      navigate("/home");
    } else {
      // Show error if credentials are incorrect
      alert("Invalid username or password. Try again.");
    }
  };

  return (
    // Page background with image and center-aligned login form
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/f2.jpg')" }} 
    >
      {/* Login form container */}
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm bg-opacity-90">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Redirect to register link */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;