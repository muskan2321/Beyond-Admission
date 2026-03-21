import { useState } from "react";
import { Outlet } from "react-router-dom"; 
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <AdminHeader setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <Outlet /> {/* 👈 Yaha nested pages render honge */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
