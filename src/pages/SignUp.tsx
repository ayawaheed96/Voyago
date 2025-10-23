import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { mockUsers } from "../assets/assets";
import { useState } from "react";

interface FormData {
  name: string;
  username: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [existedUserError, setExistedUserError] = useState("");

  const onSubmit = async (data: FormData) => {
    const userExists = mockUsers.find(
      (u: FormData) => u.username === data.username
    );

    if (userExists) {
      setExistedUserError("Sorry! this email already exists ❌");
      return;
    }

    const newUser = { ...data };
    mockUsers.push(newUser);
    const success = await login(data.username, data.password);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#F7F5F5]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center bg-white shadow-md py-8! rounded-xl! w-1/3"
      >
        <h2 className="text-2xl font-semibold my-6 text-center text-[#171717]">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs md:text-sm md:font-semibold mb-3 w-10/12">
            {errors.name.message}
          </p>
        )}

        <input
          type="text"
          placeholder="E-mail"
          {...register("username", {
            required: "E-mail is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          onChange={() => {
            if (existedUserError) setExistedUserError("");
          }}
        />
        {errors.username && (
          <p className="text-red-500 text-xs md:text-sm md:font-semibold mb-3 w-10/12">
            {errors.username.message}
          </p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs md:text-sm md:font-semibold mb-3 w-10/12">
            {errors.password.message}
          </p>
        )}
        {existedUserError && (
          <p className="text-red-500 text-xs md:text-sm md:font-semibold mb-3">
            {existedUserError}
          </p>
        )}

        <button
          type="submit"
          className="w-10/12 bg-[#9d76b7] hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-2 px-4 mt-2 transition-all"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
