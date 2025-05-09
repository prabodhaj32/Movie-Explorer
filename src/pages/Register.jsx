import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Used to programmatically navigate

const Register = () => {
  // State to store username and password input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router hook to redirect user

  // Function to handle form submission
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Check if both username and password fields are filled
    if (username && password) {
      // Save the credentials to localStorage
      localStorage.setItem("userCredentials", JSON.stringify({ username, password }));

      // Notify the user and redirect to login
      alert("Registration successful! Please log in.");
      navigate("/"); // Navigate to login page
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/f2.jpg')" }} // Background image
    >
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-sm bg-opacity-90">
        {/* Registration form header */}
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register</h2>

        {/* Registration form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Username input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Link to login page */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/" className="text-green-600 underline hover:text-green-800">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
