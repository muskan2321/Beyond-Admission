import { useEffect, useState } from "react";
import api from "../api/axios";
import { BsCalendar2Date } from "react-icons/bs";
import { FaArrowRight, FaCommentAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("blogs")
      .then((res) => {
        if (res.data?.status) {
          setBlogs(res.data.data);
        } else {
          setBlogs([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center gap-6 pt-28 pb-28 lg:pt-48 lg:pb-48 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0A2F66] leading-tight">
          Beyond Admission Blog
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-700">
          Guidance, growth, and real-world success — everything students need
          after enrollment, all in one place.
        </p>

        <ul className="flex flex-row items-center justify-center gap-3 text-[#0A2F66] font-semibold">
          <li className="flex items-center gap-2 hover:underline cursor-pointer">
            Home <FaChevronRight />
          </li>
          <li>Beyond Admission</li>
        </ul>
      </div>

      <div className="w-full mt-10 mb-10">
        <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-12 lg:px-24">
          <span className="bg-[#3d6a5d] text-white font-bold rounded-xl px-6 py-3 w-fit">
            BLOG POST
          </span>

          <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
            <h1 className="text-4xl font-bold">Post Popular Post</h1>
            <a
              href="/contact"
              className="bg-[#0ab99d] flex items-center gap-3 text-white font-bold rounded-xl px-6 py-3"
            >
              All Blog Post <FaArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full">
            {loading ? (
              <p>Loading...</p>
            ) : blogs.length > 0 ? (
              blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white flex flex-col rounded-xl p-4 gap-3 h-full shadow"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-xl w-full h-48 object-cover"
                    onError={(e) => {
                      console.log("Failed Image:", blog.image);
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image";
                    }}
                  />

                  <ul className="flex gap-4 py-3 text-sm">
                    <li className="flex items-center gap-2">
                      <BsCalendar2Date />
                      <span>
                        {new Date(blog.publish_date).toLocaleDateString()}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCommentAlt />
                      <span>Comment({blog.comments_count ?? 0})</span>
                    </li>
                  </ul>

                  <h1 className="text-lg text-black font-semibold">
                    {blog.title}
                  </h1>

                  <a
                    href="/contact"
                    className="bg-[#0ab99d] self-start flex items-center gap-3 text-white font-bold rounded-xl px-6 py-3"
                  >
                    All Blog Post <FaArrowRight />
                  </a>
                </div>
              ))
            ) : (
              <p>No Blogs Found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
