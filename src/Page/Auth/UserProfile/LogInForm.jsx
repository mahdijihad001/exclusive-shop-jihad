import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useLogInUserMutation } from '../../../Redux/Auth/authApi';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../Redux/Auth/authSlice';

const LoginForm = () => {

  const dispatch = useDispatch();



  const {register , handleSubmit , formState : {errors}} = useForm();

  const [logInUser , {isLoading , isError}] = useLogInUserMutation();
  const navigate = useNavigate();

  const LogInUsers = async(data) =>{
    try {
      const responce = await logInUser(data).unwrap();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login success!",
        showConfirmButton: false,
        timer: 1500
      });
      dispatch(setUser({user : responce.data}));
      navigate("/");
    } catch (error) {
      console.log("Login Faild");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please provide valid information!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Log in to Exclusive
        </h1>
        <p className="text-gray-600 font-bold text-xl text-center mb-6">
          Enter your details below
        </p>
        <form onSubmit={handleSubmit(LogInUsers)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Log In
          </button>
        </form>
        <p className="text-xl text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-500 hover:underline font-medium">
            Register
          </Link>
        </p>
        <p className="text-center text-gray-600 mt-2">
          <Link className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;