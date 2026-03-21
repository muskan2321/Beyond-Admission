import { useState, useEffect } from "react";
import api from "../../api/axios";

function SubCategoryForm() {
  const [navbars, setNavbars] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    navbar_id: "",
    page_category_id: "",
    title: "",
    order: "",
  });

  // ================= INITIAL LOAD =================
  useEffect(() => {
    fetchNavbars();
    fetchSubCategories();
  }, []);

  const fetchNavbars = async () => {
    const res = await api.get("navbars");
    if (res.data.status) {
      setNavbars(res.data.data);
    }
  };

  const fetchCategories = async (navbarId) => {
    const res = await api.get(`categories/${navbarId}`);
    if (res.data.status) {
      setCategories(res.data.data);
    }
  };

  const fetchSubCategories = async () => {
    const res = await api.get("sub-categories");
    if (res.data.status) {
      setSubCategories(res.data.data);
    }
  };

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "navbar_id") {
      fetchCategories(value);
      setFormData((prev) => ({
        ...prev,
        navbar_id: value,
        page_category_id: "",
      }));
    }
  };

  // ================= CREATE =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("sub-categories", formData);
      alert(res.data.message);

      setFormData({
        navbar_id: "",
        page_category_id: "",
        title: "",
        order: "",
      });

      fetchSubCategories();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // ================= EDIT =================
  const handleEdit = (sub) => {
    setIsEdit(true);
    setEditId(sub.id);

    setFormData({
      navbar_id: sub.category?.navbar?.id || "",
      page_category_id: sub.page_category_id,
      title: sub.title,
      order: sub.order,
    });

    fetchCategories(sub.category?.navbar?.id);
  };

  // ================= UPDATE =================
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await api.put(`sub-categories/update/${editId}`, formData);

      alert(res.data.message);

      setIsEdit(false);
      setEditId(null);

      setFormData({
        navbar_id: "",
        page_category_id: "",
        title: "",
        order: "",
      });

      fetchSubCategories();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    await api.delete(`sub-categories/${id}`);
    fetchSubCategories();
  };

  return (
    <div className="space-y-6">
      {/* ================= FORM ================= */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Update Sub Category" : "Create Sub Category"}
        </h2>

        <form
          onSubmit={isEdit ? handleUpdate : handleSubmit}
          className="grid md:grid-cols-4 gap-4"
        >
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

          <select
            name="page_category_id"
            value={formData.page_category_id}
            onChange={handleChange}
            className="border p-3 rounded"
            required
            disabled={!formData.navbar_id}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
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
            type="number"
            name="order"
            placeholder="Order"
            value={formData.order}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <button className="md:col-span-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg">
            {isEdit ? "Update Sub Category" : "Create Sub Category"}
          </button>
        </form>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">All Sub Categories</h2>

        <table className="w-full border text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Id</th>
              <th className="p-3 border">Navbar</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Order</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {subCategories.map((sub, index) => (
              <tr key={sub.id}>
                <td className="p-3 border">{index + 1}</td>

                <td className="p-3 border">
                  {sub.category?.navbar?.title || "-"}
                </td>

                <td className="p-3 border">{sub.category?.title || "-"}</td>

                <td className="p-3 border">{sub.title}</td>
                <td className="p-3 border">{sub.order}</td>

                <td className="p-3 border space-x-2">
                  <button
                    onClick={() => handleEdit(sub)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(sub.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {subCategories.length === 0 && (
          <p className="text-center py-6 text-gray-400">
            No Sub Categories Found
          </p>
        )}
      </div>
    </div>
  );
}

export default SubCategoryForm;
