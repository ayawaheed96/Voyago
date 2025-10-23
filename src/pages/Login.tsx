import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    const success = await login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#F7F5F5] ">
      <div className="flex flex-col items-center justify-center bg-white shadow-md py-8! rounded-xl! w-1/3 ">
        <h2 className="text-2xl! font-semibold! my-4! text-center text-[#171717]">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (error) setError("");
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError("");
          }}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />

        {error && (
          <p className="text-red-500 text-xs md:text-sm md:font-semibold mb-3">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-10/12 bg-[#9d76b7] hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-2 px-4 transition-all"
          disabled={!username || !password}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
