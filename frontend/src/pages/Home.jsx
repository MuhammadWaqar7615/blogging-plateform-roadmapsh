import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useRef } from "react";

function Home() {
  const URL = import.meta.env.VITE_BASE_URL;
  const [allBlogs, setAllBlogs] = useState([]);
  const [popup, setPopup] = useState(false);
  const postRef = useRef()

  useEffect(() => {
    const getData = async () => {

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

  const handleEdit = (blogId) => {
    const blogContent = postRef.current.value;
    console.log("hanelEdit Triggered!!", blogId);
    console.log("post ref: ", blogContent);
    setPopup(!popup);

    try {
      const result = fetch(`${URL}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ blogContent, blogId }),
      })
      setAllBlogs(
        allBlogs.map((blog) => (
          blog._id == blogId ? {...blog, post: blogContent} : blog
        ))
      )
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (blogId) => {
    const URL = import.meta.env.VITE_BASE_URL;
    try {
      console.log("triggered");
      const response = await fetch(`${URL}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogId }),
      });
      console.log("Delete blog:", blogId);
      alert(`Delete blog: ${blogId}`);

      setAllBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== blogId),
      );
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <Header />

        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">
              Discover Amazing Stories
            </h1>

            <p className="text-lg text-gray-100 max-w-2xl">
              Read blogs from developers, writers, and creators around the
              world.
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
                      onClick={() => setPopup(!popup)}
                      className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition cursor-pointer"
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

      {popup && (
        <>
          {allBlogs.map((blog) => (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

              {/* Popup */}
              <div className="relative z-10 w-1/2 max-w-lg rounded-xl bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between bg-gray-300 px-6 py-2 rounded-t-lg">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {blog.username}
                  </h2>

                  {/* Close button */}
                  <button
                    onClick={() => setPopup(!popup)}
                    type="button"
                    className="rounded-full p-2 px-3 text-2xl leading-none text-gray-600 transition hover:bg-gray-100 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>

                <div className="px-6 py-8">
                  <textarea ref={postRef} className="w-full h-full">{blog.post}</textarea>
                </div>

                <div className="flex justify-end gap-3 rounded-b-xl border-t bg-gray-50 px-6 py-4">
                  <button
                    onClick={() => setPopup(!popup)}
                    type="button"
                    className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => handleEdit(blog._id)}
                    type="button"
                    className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Home;
