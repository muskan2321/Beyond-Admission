import { useState, useEffect } from "react";
import api from "../../api/axios";

const CreatePage = () => {
  const [form, setForm] = useState({
    slug: "",
    title: "",
    heroHeading: "",
    heroSubheading: "",
    description: "",
    eligibility: "",
    careerScope: "",
    duration: "",
    mode: "",
  });

  const [pages, setPages] = useState([]);
  const [editingPage, setEditingPage] = useState(null);
  const [viewPage, setViewPage] = useState(null);

  // 🔹 fetch pages
  const fetchPages = async () => {
    const res = await api.get("pages");
    setPages(res.data);
  };

  useEffect(() => {
    fetchPages();
  }, []);

  // 🔹 AUTO SLUG GENERATE (NEW FIX ✅)
  useEffect(() => {
    if (!form.slug && form.title) {
      const generated = form.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      setForm((prev) => ({ ...prev, slug: generated }));
    }
  }, [form.title]);

  // 🔹 handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 submit (create + update)
  const handleSubmit = async () => {
    const generatedSlug =
      form.slug ||
      form.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

    const data = {
      slug: generatedSlug, // ✅ FIX
      title: form.title,
      content: {
        hero: {
          heading: form.heroHeading,
          subheading: form.heroSubheading,
        },
        intro: {
          description: form.description,
        },
        extra: {
          eligibility: form.eligibility,
          careerScope: form.careerScope,
          duration: form.duration,
          mode: form.mode,
        },
      },
    };

    try {
      if (editingPage) {
        await api.put(`page/${editingPage.id}`, data);
        alert("Updated ✅");
      } else {
        await api.post("page", data);
        alert("Created ✅");
      }

      resetForm();
      fetchPages();
    } catch (err) {
      console.log(err);
    }
  };

  // 🔹 edit
  const handleEdit = (page) => {
    setEditingPage(page);

    setForm({
      slug: page.slug,
      title: page.title,
      heroHeading: page.content?.hero?.heading || "",
      heroSubheading: page.content?.hero?.subheading || "",
      description: page.content?.intro?.description || "",
      eligibility: page.content?.extra?.eligibility || "",
      careerScope: page.content?.extra?.careerScope || "",
      duration: page.content?.extra?.duration || "",
      mode: page.content?.extra?.mode || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🔹 delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this page?")) return;
    await api.delete(`page/${id}`);
    fetchPages();
  };

  // 🔹 reset
  const resetForm = () => {
    setEditingPage(null);
    setForm({
      slug: "",
      title: "",
      heroHeading: "",
      heroSubheading: "",
      description: "",
      eligibility: "",
      careerScope: "",
      duration: "",
      mode: "",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        {editingPage ? "Edit Page" : "Create Page"}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="slug"
          value={form.slug}
          placeholder="Slug"
          onChange={handleChange}
          className="border p-3 rounded"
        />
        <input
          name="title"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="heroHeading"
          value={form.heroHeading}
          placeholder="Hero Heading"
          onChange={handleChange}
          className="border p-3 rounded col-span-2"
        />
        <input
          name="heroSubheading"
          value={form.heroSubheading}
          placeholder="Hero Subheading"
          onChange={handleChange}
          className="border p-3 rounded col-span-2"
        />

        <textarea
          name="description"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
          className="border p-3 rounded col-span-2"
        />

        <textarea
          name="eligibility"
          value={form.eligibility}
          placeholder="Eligibility"
          onChange={handleChange}
          className="border p-3 rounded"
        />
        <textarea
          name="careerScope"
          value={form.careerScope}
          placeholder="Career Scope"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="duration"
          value={form.duration}
          placeholder="Duration"
          onChange={handleChange}
          className="border p-3 rounded"
        />
        <input
          name="mode"
          value={form.mode}
          placeholder="Mode"
          onChange={handleChange}
          className="border p-3 rounded"
        />
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          {editingPage ? "Update" : "Save"}
        </button>

        {editingPage && (
          <button
            onClick={resetForm}
            className="bg-gray-500 text-white px-6 py-3 rounded"
          >
            Cancel
          </button>
        )}
      </div>

      {/* TABLE */}
      <h2 className="text-xl font-bold mt-10 mb-4">All Pages</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Slug</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Hero</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((page) => (
              <tr key={page.id} className="text-center">
                <td className="p-2 border">{page.slug}</td>
                <td className="p-2 border">{page.title}</td>
                <td className="p-2 border">{page.content?.hero?.heading}</td>

                <td className="p-2 border">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => setViewPage(page)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      View
                    </button>

                    <button
                      onClick={() => handleEdit(page)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(page.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* VIEW MODAL */}
      {viewPage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="text-xl font-bold mb-3">{viewPage.title}</h2>

            <p>
              <b>Slug:</b> {viewPage.slug}
            </p>
            <p>
              <b>Hero:</b> {viewPage.content?.hero?.heading}
            </p>
            <p>
              <b>Description:</b> {viewPage.content?.intro?.description}
            </p>

            <button
              onClick={() => setViewPage(null)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            ></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePage;
