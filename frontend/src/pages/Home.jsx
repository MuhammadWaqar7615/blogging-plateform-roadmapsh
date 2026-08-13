import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

function Home() {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const URL = import.meta.env.VITE_BASE_URL;

      try {
        const response = await fetch(`${URL}/blogs`);

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const result = await response.json();
        setAllBlogs(result.allBlogs);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const handleEdit = (blog) => {
    console.log("Edit blog:", blog);
    alert(`Edit: ${blog.post}`);
  };

  const handleDelete = (blogId) => {
    console.log("Delete blog:", blogId);
    alert(`Delete blog: ${blogId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Discover Amazing Stories
          </h1>

          <p className="text-lg text-gray-100 max-w-2xl">
            Read blogs from developers, writers, and creators around the world.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Latest Blogs
        </h2>

        {allBlogs.length === 0 ? (
          <div className="text-center text-gray-500 text-lg mt-10">
            No blogs available.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allBlogs.map((blog) => (
              <div
                key={blog._id}
                className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                  >
                    Delete
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-5 pr-32">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-lg font-bold text-white">
                      {blog?.username?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {blog.username}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-7 whitespace-pre-wrap break-words">
                    {blog.post}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;