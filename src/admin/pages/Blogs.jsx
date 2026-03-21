import { useEffect, useState } from "react";
import api from "../../api/axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [viewBlog, setViewBlog] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    publish_date: "",
  });

  // Fetch Blogs
  const fetchBlogs = async () => {
    try {
      const res = await api.get("blogs");
      if (res.data.status) {
        setBlogs(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle Text Inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle File Input
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Add OR Update Blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("publish_date", formData.publish_date);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      if (isEdit) {
        await api.post(`blogs/${editId}?_method=PUT`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Blog Updated Successfully");
      } else {
        await api.post("blogs", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Blog Added Successfully");
      }

      resetForm();
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  // Edit
  const handleEdit = (blog) => {
    setIsEdit(true);
    setEditId(blog.id);
    setViewBlog(null);

    setFormData({
      title: blog.title,
      description: blog.description,
      image: null,
      publish_date: blog.publish_date,
    });

    window.scrollTo(0, 0);
  };

  // View
  const handleView = (blog) => {
    setViewBlog(blog);
    setIsEdit(false);
    window.scrollTo(0, 0);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;

    try {
      await api.delete(`blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image: null,
      publish_date: "",
    });
    setIsEdit(false);
    setEditId(null);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Manage Blog Posts</h2>

      {/* View Blog Details */}
      {viewBlog && (
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="text-xl font-bold mb-4">Blog Details</h3>

          <img
            src={viewBlog.image}
            alt={viewBlog.title}
            className="w-full max-w-md h-60 object-cover rounded mb-4"
          />

          <h4 className="text-lg font-semibold">{viewBlog.title}</h4>

          <p className="text-gray-600 mt-2">{viewBlog.description}</p>

          <p className="text-sm text-gray-500 mt-2">
            Publish Date: {viewBlog.publish_date}
          </p>

          <button
            onClick={() => setViewBlog(null)}
            className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}

      {/* Add / Edit Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">
          {isEdit ? "Edit Blog" : "Add New Blog"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full border p-2 rounded"
            required={!isEdit}
          />

          <input
            type="date"
            name="publish_date"
            value={formData.publish_date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              {isEdit ? "Update Blog" : "Add Blog"}
            </button>

            {isEdit && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-6 py-2 rounded"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Blog List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">All Blogs</h3>

        {loading ? (
          <p>Loading...</p>
        ) : blogs.length > 0 ? (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border p-4 rounded flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div>
                    <h4 className="font-semibold">{blog.title}</h4>
                    <p className="text-sm text-gray-500">{blog.publish_date}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleView(blog)}
                    className="bg-green-900 text-white px-4 py-1 rounded"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No Blogs Found</p>
        )}
      </div>
    </>
  );
};

export default Blogs;
