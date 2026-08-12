import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">📝</span>
          <h2 className="text-2xl font-bold text-indigo-600">
            BlogSpace
          </h2>
        </Link>
        
        <nav className="flex gap-4">
          <Link
            to="/"
            className="px-5 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            Explore
          </Link>

          <Link
            to="/create-blog"
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
          >
            ✍️ Write Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;