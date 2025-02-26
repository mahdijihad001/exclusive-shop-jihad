import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useRegisterUserMutation } from '../../Redux/Auth/authApi';

const RegisterForm = () => {

  const { register, handleSubmit, reset ,formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const HandleRegister = async (data) => {
    try {
      const responce = await registerUser(data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: responce.data.message,
        showConfirmButton: false,
        timer: 1500
      });
      navigate(`/login`);
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registraction Faild please try again!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Create an account
        </h1>
        <p className="text-gray-600 font-bold text-xl text-center mb-6">
          Enter your details below
        </p>
        <form onSubmit={handleSubmit(HandleRegister)} className="space-y-4">
          <div>
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="tel"
              {...register("number")}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Create Account
          </button>
        </form>
        <p className="text-xl text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;