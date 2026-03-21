import { useEffect, useState } from "react";
import api from "../../api/axios";

function PageSubSubCategory() {
  const [navbars, setNavbars] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [allSubSubCategories, setAllSubSubCategories] = useState([]);

  const [formData, setFormData] = useState({
    navbar_id: "",
    page_category_id: "",
    page_sub_category_id: "",
    title: "",
    slug: "",
    order: "",
  });

  // ================= INITIAL LOAD =================
  useEffect(() => {
    fetchNavbars();
    fetchAllSubSubCategories();
  }, []);

  // ================= FETCH NAVBARS =================
  const fetchNavbars = async () => {
    try {
      const res = await api.get("navbars");
      if (res.data.status) {
        setNavbars(res.data.data);
      }
    } catch (error) {
      console.log("Navbar Error:", error);
    }
  };

  // ================= FETCH CATEGORIES =================
  const fetchCategories = async (navbarId) => {
    try {
      const res = await api.get(`categories/${navbarId}`);
      if (res.data.status) {
        setCategories(res.data.data);
      }
    } catch (error) {
      console.log("Category Error:", error);
    }
  };

  // ================= FETCH SUB CATEGORIES =================
  const fetchSubCategories = async (categoryId) => {
    try {
      const res = await api.get(`sub-categories/${categoryId}`);
      if (res.data.status) {
        setSubCategories(res.data.data);
      }
    } catch (error) {
      console.log("SubCategory Error:", error);
    }
  };

  // ================= FETCH ALL SUB SUB =================
  const fetchAllSubSubCategories = async () => {
    try {
      const res = await api.get("all-sub-sub-categories"); // ✅ FIXED

      if (res.data.status) {
        setAllSubSubCategories(res.data.data);
      }
    } catch (error) {
      console.log("All SubSub Error:", error);
    }
  };

  // ================= HANDLE CHANGE =================
  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setFormData({
        ...formData,
        title: value,
        slug: value.toLowerCase().replace(/\s+/g, "-"),
      });
      return;
    }

    setFormData({ ...formData, [name]: value });

    if (name === "navbar_id") {
      setCategories([]);
      setSubCategories([]);
      await fetchCategories(value);

      setFormData((prev) => ({
        ...prev,
        navbar_id: value,
        page_category_id: "",
        page_sub_category_id: "",
      }));
    }

    if (name === "page_category_id") {
      setSubCategories([]);
      await fetchSubCategories(value);

      setFormData((prev) => ({
        ...prev,
        page_category_id: value,
        page_sub_category_id: "",
      }));
    }
  };

  // ================= STORE =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("sub-sub-categories", {
        page_sub_category_id: formData.page_sub_category_id,
        title: formData.title,
        slug: formData.slug,
        order: formData.order || 0,
        status: 1,
      });

      if (res.data.status) {
        alert("Sub Sub Category Created Successfully");
        fetchAllSubSubCategories();

        setFormData({
          navbar_id: "",
          page_category_id: "",
          page_sub_category_id: "",
          title: "",
          slug: "",
          order: "",
        });

        setCategories([]);
        setSubCategories([]);
      }
    } catch (error) {
      console.log(error.response?.data);
      alert("Error creating sub sub category");
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this sub sub category?")) return;

    try {
      await api.delete(`sub-sub-categories/${id}`);
      fetchAllSubSubCategories();
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Create Page Sub Sub Category</h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4">
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
            <option value="">Select Page Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>

          <select
            name="page_sub_category_id"
            value={formData.page_sub_category_id}
            onChange={handleChange}
            className="border p-3 rounded"
            required
            disabled={!formData.page_category_id}
          >
            <option value="">Select Sub Category</option>
            {subCategories.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.title}
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
            name="slug"
            placeholder="Slug"
            value={formData.slug}
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
            Create Sub Sub Category
          </button>
        </form>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">All Sub Sub Categories</h2>

        {allSubSubCategories.length > 0 ? (
          <table className="w-full border text-center">
            <tbody>
              {allSubSubCategories.map((item, index) => (
                <tr key={item.id}>
                  <td className="border p-2">{index + 1}</td>

                  {/* ✅ FIXED HERE */}
                  <td className="border p-2">
                    {item?.sub_category?.category?.navbar?.title ?? "-"}
                  </td>

                  <td className="border p-2">
                    {item?.sub_category?.category?.title ?? "-"}
                  </td>

                  <td className="border p-2">
                    {item?.sub_category?.title ?? "-"}
                  </td>

                  <td className="border p-2">{item.title}</td>
                  <td className="border p-2">{item.slug}</td>
                  <td className="border p-2">{item.order}</td>

                  <td className="border p-2">
                    <button
                      onClick={() => handleDelete(item.id)}
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
          <p>No Sub Sub Categories Found</p>
        )}
      </div>
    </div>
  );
}

export default PageSubSubCategory;
