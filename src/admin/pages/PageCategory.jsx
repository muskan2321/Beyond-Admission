import { useEffect, useState } from "react";
import api from "../../api/axios";

function PageCategory() {
  const [navbars, setNavbars] = useState([]);
  const [categories, setCategories] = useState([]);

  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    navbar_id: "",
    title: "",
    order: "",
  });

  // ================= FETCH NAVBARS =================
  useEffect(() => {
    fetchNavbars();
  }, []);

  const fetchNavbars = async () => {
    try {
      const res = await api.get("navbars");
      setNavbars(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= FETCH CATEGORIES =================
  const fetchCategories = async (navbarId) => {
    if (!navbarId) return;

    try {
      const res = await api.get(`categories/${navbarId}`);
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setFormData({
        ...formData,
        title: value,
        slug: value.toLowerCase().replace(/\s+/g, "-"),
      });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "navbar_id") {
        fetchCategories(value);
      }
    }
  };

  // ================= STORE =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      order: formData.order || null,
    };

    try {
      await api.post("categories", payload);
      alert("Category Created Successfully");

      setFormData({
        navbar_id: "",
        title: "",
        order: "",
      });

      fetchCategories(payload.navbar_id);
    } catch (error) {
      console.log("Validation Error:", error.response?.data);
    }
  };

  // ================= EDIT =================
  const handleEdit = (cat) => {
    setEditId(cat.id);

    setFormData({
      navbar_id: cat.navbar_id,
      title: cat.title,
      order: cat.order || "",
    });

    fetchCategories(cat.navbar_id);
  };

  // ================= UPDATE =================
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await api.post(`categories-update/${editId}`, formData);

      alert("Category Updated Successfully");

      setEditId(null);

      setFormData({
        navbar_id: "",
        title: "",
        order: "",
      });

      fetchCategories(formData.navbar_id);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;

    try {
      await api.delete(`categories/${id}`);
      fetchCategories(formData.navbar_id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      {/* ===== Create Form ===== */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">
          {editId ? "Update Page Category" : "Create Page Category"}
        </h2>

        <form
          onSubmit={editId ? handleUpdate : handleSubmit}
          className="grid md:grid-cols-4 gap-4"
        >
          {/* Navbar Select */}
          <select
            name="navbar_id"
            value={formData.navbar_id}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          >
            <option value="">Select Navbar</option>
            {navbars.map((nav) => (
              <option key={nav.id} value={nav.id}>
                {nav.title}
              </option>
            ))}
          </select>

          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            name="order"
            placeholder="Order"
            value={formData.order}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button className="bg-indigo-600 text-white py-3 rounded-lg md:col-span-4">
            {editId ? "Update Category" : "Create Category"}
          </button>
        </form>
      </div>

      {/* ===== List ===== */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">All Categories</h2>

        {categories.length > 0 ? (
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">#</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Order</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((cat, index) => (
                <tr key={cat.id} className="text-center">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{cat.title}</td>
                  <td className="p-3 border">{cat.order}</td>
                  <td className="p-3 border space-x-2">
                    <button
                      onClick={() => handleEdit(cat)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-6 text-gray-500">No Categories Found</p>
        )}
      </div>
    </div>
  );
}

export default PageCategory;
