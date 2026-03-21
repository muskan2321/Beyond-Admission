import React from "react";                 //user dashboard
import {
  FaFileAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          Welcome Back <MdWavingHand className="text-yellow-500 text-3xl" />
        </h2>
        <p className="text-gray-500 mt-1">
          Here’s an overview of your applications
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Applications */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition duration-300">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Total Applications</h3>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
              <FaFileAlt size={18} />
            </div>
          </div>
          <p className="text-4xl font-bold text-blue-600 mt-4">12</p>
        </div>

        {/* Approved */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition duration-300">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Approved</h3>
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
              <FaCheckCircle size={18} />
            </div>
          </div>
          <p className="text-4xl font-bold text-green-600 mt-4">8</p>
        </div>

        {/* Pending */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition duration-300">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-600 font-medium">Pending</h3>
            <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full">
              <FaClock size={18} />
            </div>
          </div>
          <p className="text-4xl font-bold text-yellow-500 mt-4">4</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
