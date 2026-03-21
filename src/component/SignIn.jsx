import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";
import api from "../api/axios";

const SignIn = () => {
  const navigate = useNavigate();

  //  Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //  Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //  Login Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("login", formData);

      const user = response.data.data;
      const token = response.data.token;

      alert(response.data.message);

      //  Save Data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);

      //  Role Based Redirect
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className="min-h-[90vh] flex overflow-hidden">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white items-center justify-center p-10">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Beyond Admission</h1>
          <p className="text-blue-100">
            Your gateway to smarter applications, easier tracking and faster
            approvals.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <MdWavingHand className="text-yellow-500 text-3xl" />
          </div>

          <p className="text-gray-500 mb-8">Sign in to access your dashboard</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
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
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>

            {/* Remember */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 shadow-lg"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-8 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
