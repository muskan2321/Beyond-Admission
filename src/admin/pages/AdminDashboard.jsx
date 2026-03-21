import { FaUsers, FaUniversity, FaBook, FaBlog } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Overview
        </h2>
        <p className="text-gray-500 mt-2">
          Welcome back! Here’s what’s happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Users</p>
              <h3 className="text-3xl font-bold text-blue-600 mt-2">1200</h3>
            </div>
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <FaUsers />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Universities</p>
              <h3 className="text-3xl font-bold text-green-600 mt-2">75</h3>
            </div>
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaUniversity />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Courses</p>
              <h3 className="text-3xl font-bold text-purple-600 mt-2">320</h3>
            </div>
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <FaBook />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Blog</p>
              <h3 className="text-3xl font-bold text-orange-600 mt-2">240</h3>
            </div>
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <FaBlog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
