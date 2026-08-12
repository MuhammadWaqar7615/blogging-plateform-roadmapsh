import React from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

function CreateBlogs() {
  const URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    console.log("form data:", formValues);
    console.log("env variable: ", `${URL}/`);

    try {
      console.log("try catch triggered")
      const response = await fetch(`${URL}/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      console.log('After API calling');
      navigate('/');
    } catch (error) {
      console.error("error: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            ✍️ Write a New Blog
          </h1>

          <p className="mt-2 text-gray-500">
            Share your thoughts, ideas, and experiences with everyone.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Blog Content */}
          <div>
            <label
              htmlFor="post"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Blog Content
            </label>

            <textarea
              id="post"
              name="post"
              rows={10}
              placeholder="Write your blog content here..."
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="reset"
              className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Clear
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg"
            >
              🚀 Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlogs;
