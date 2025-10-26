import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";
import { loginUser } from "../store/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const toast = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(result)) {
      toast.success(`Login Successfully! 🎉`);
      navigate("/dashboard");
    } else {
      toast.error((result.payload as string) || " Wrong credentials ");
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
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />

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
