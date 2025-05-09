import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (username && password) {
      localStorage.setItem("userCredentials", JSON.stringify({ username, password }));
      alert("Registration successful! Please log in.");
      navigate("/");
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/f2.jpg')" }} // Ensure f2.jpg is inside the public/assets folder
    >
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-sm bg-opacity-90">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/" className="text-green-600 underline hover:text-green-800">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
