import { useState, useEffect } from "react";
import api from "../../api/axios";

export default function AddStudyAbroad() {
  const [form, setForm] = useState({
    slug: "",
    hero_title: "",
    hero_subtitle: "",
    hero_description: "",
    why_usa_title: "",
    why_usa_description: "",
    benefits: [],
    courses: [],
    universities: [],
    steps: [],
    eligibility: [],
    fees: [],
    scholarships: [],
    visa_steps: [],
    status: 1,
  });

  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);

  // 🔥 NEW STATE (EDIT)
  const [editId, setEditId] = useState(null);

  const [inputs, setInputs] = useState({
    benefits: "",
    courses: "",
    universities: "",
    steps: "",
    eligibility: "",
    fees: "",
    scholarships: "",
    visa_steps: "",
  });

  // ================= FETCH =================
  const fetchData = async () => {
    try {
      const res = await api.get("/study-abroad");
      setData(res.data.data || res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= FORM =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addItem = (field) => {
    if (!inputs[field]) return;

    setForm({
      ...form,
      [field]: [...form[field], inputs[field]],
    });

    setInputs({ ...inputs, [field]: "" });
  };

  // ================= EDIT FUNCTION =================
  const handleEdit = (item) => {
    setEditId(item.id);

    const parse = (field) => {
      try {
        return Array.isArray(field) ? field : JSON.parse(field || "[]");
      } catch {
        return [];
      }
    };

    setForm({
      ...item,
      benefits: parse(item.benefits),
      courses: parse(item.courses),
      universities: parse(item.universities),
      steps: parse(item.steps),
      eligibility: parse(item.eligibility),
      fees: parse(item.fees),
      scholarships: parse(item.scholarships),
      visa_steps: parse(item.visa_steps),
    });
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (Array.isArray(form[key])) {
        formData.append(key, JSON.stringify(form[key]));
      } else {
        formData.append(key, form[key]);
      }
    });

    if (image) {
      formData.append("hero_image", image);
    }

    try {
     if (editId) {
       // ✅ FINAL FIX
       await api.post(`/study-abroad/${editId}?_method=PUT`, formData);
       alert("Updated Successfully ✅");
     } else {
       await api.post("/study-abroad", formData);
       alert("Saved Successfully 🎉");
     }

      setEditId(null);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Error ❌");
    }
  };

  // ================= DELETE =================
  const deleteItem = async (id) => {
    if (!confirm("Delete this item?")) return;

    try {
      await api.delete(`/study-abroad/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* ================= FORM ================= */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        {editId ? "Edit Study Abroad Page" : "Add Study Abroad Page"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* BASIC */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="slug"
            value={form.slug}
            placeholder="Slug"
            onChange={handleChange}
            className="input"
          />
          <input
            name="hero_title"
            value={form.hero_title}
            placeholder="Hero Title"
            onChange={handleChange}
            className="input"
          />
          <input
            name="hero_subtitle"
            value={form.hero_subtitle}
            placeholder="Hero Subtitle"
            onChange={handleChange}
            className="input"
          />
          <input
            name="why_usa_title"
            value={form.why_usa_title}
            placeholder="Why Title"
            onChange={handleChange}
            className="input"
          />
        </div>

        <textarea
          name="hero_description"
          value={form.hero_description}
          placeholder="Hero Description"
          onChange={handleChange}
          className="input w-full"
        />
        <textarea
          name="why_usa_description"
          value={form.why_usa_description}
          placeholder="Why Description"
          onChange={handleChange}
          className="input w-full"
        />

        {/* DYNAMIC */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.keys(inputs).map((field) => (
            <div key={field} className="border p-3 rounded-lg">
              <label className="font-semibold">{field}</label>

              <div className="flex gap-2 mt-2">
                <input
                  value={inputs[field]}
                  onChange={(e) =>
                    setInputs({ ...inputs, [field]: e.target.value })
                  }
                  className="input flex-1"
                />
                <button
                  type="button"
                  onClick={() => addItem(field)}
                  className="bg-green-500 text-white px-3 rounded"
                >
                  Add
                </button>
              </div>

              <ul className="mt-2">
                {form[field].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          {editId ? "Update" : "Save"}
        </button>
      </form>

      {/* ================= TABLE ================= */}
      <h2 className="text-3xl font-bold mt-16 mb-6 text-center">
        All Study Pages
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b text-center">
                <td>{item.id}</td>

                <td>
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.hero_image}`}
                    className="w-20 h-14 object-cover mx-auto"
                  />
                </td>

                <td>{item.hero_title}</td>
                <td>{item.slug}</td>

                <td>{item.status == 1 ? "Active" : "Inactive"}</td>

                <td className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
