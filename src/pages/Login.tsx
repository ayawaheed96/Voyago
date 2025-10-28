import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";
import { loginUser } from "../store/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { useForm } from "react-hook-form";

interface FormData {
  username: string;
  password: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    const { username, password } = data;
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center bg-white shadow-md py-8  rounded-xl w-3/4 md:w-1/3"
      >
        <h2 className="text-2xl font-semibold my-4 text-center text-[#171717]">
          Login
        </h2>

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
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs md:text-sm md:font-semibold mb-3 w-10/12">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          className="w-10/12 bg-[#9d76b7] hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-2 px-4 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
