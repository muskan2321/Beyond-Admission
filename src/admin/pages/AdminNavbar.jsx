import { useEffect, useState } from "react";
import api from "../../api/axios";

function AdminNavbar() {
  const [navbars, setNavbars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    order: "",
    status: 1,
  });

  // ================= FETCH NAVBARS =================
  useEffect(() => {
    fetchNavbars();
  }, []);

  const fetchNavbars = async () => {
    try {
      setLoading(true);
      const res = await api.get("navbars");
      setNavbars(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // UPDATE
        await api.put(`navbars/${editId}`, formData);
        alert("Navbar Updated Successfully");
      } else {
        // CREATE
        await api.post("navbars", formData);
        alert("Navbar Created Successfully");
      }

      setFormData({
        title: "",
        order: "",
        status: 1,
      });

      setEditId(null);

      fetchNavbars();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // ================= EDIT =================
  const handleEdit = (nav) => {
    setFormData({
      title: nav.title,
      order: nav.order,
      status: nav.status,
    });

    setEditId(nav.id);
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await api.delete(`navbars/${id}`);
      fetchNavbars();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Create / Update Form */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">
          {editId ? "Update Navbar" : "Create Navbar"}
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4">
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="number"
            name="order"
            placeholder="Order"
            value={formData.order}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button className="bg-indigo-600 text-white py-3 rounded-lg md:col-span-3 hover:bg-indigo-700">
            {editId ? "Update Navbar" : "Create Navbar"}
          </button>
        </form>
      </div>

      {/* Navbar List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">All Navbars</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Order</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {navbars.map((nav, index) => (
                <tr key={nav.id} className="text-center">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{nav.title}</td>
                  <td className="p-3 border">{nav.order}</td>
                  <td className="p-3 border space-x-2">
                    <button
                      onClick={() => handleEdit(nav)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(nav.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {navbars.length === 0 && !loading && (
          <p className="text-center py-6 text-gray-500">No Navbars Found</p>
        )}
      </div>
    </div>
  );
}

export default AdminNavbar;
