import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPersonAdd } from "react-icons/md";
import api from "../api/axios"; // 

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("register", formData);

      alert(response.data.message);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        alert("Registration Failed");
      }
    }
  };

  return (
    <div className="min-h-[90vh] w-screen flex overflow-hidden">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white items-center justify-center p-10">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Beyond Admission</h1>
          <p className="text-blue-100">
            Create your account and start managing your applications easily.
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <MdPersonAdd className="text-blue-600 text-3xl" />
          </div>

          <p className="text-gray-500 mb-8">Sign up to get started</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm mt-8 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
