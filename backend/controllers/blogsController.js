const Blogs = require("../models/blogsModel");
const path = require("path");

const getBlogs = async (req, res) => {
  const blogs = await Blogs.find();
  console.log("all blogs: ", blogs);

  console.log("getBlogs: ", req.url);
  // res.render("home", { title: "home page", "allBlogs": blogs });
  res.status(200).json({message: "success", title: "home page", allBlogs: blogs})
};

const blogForm = (req, res) => {
  console.log("blogForm: ", req.url);
  res.render("createBlogs", { title: "Create Blogs" });
};

const createBlog = async (req, res) => {
  console.log("createBlog: ", req.url);
  const formData = req.body;
  const data = Object.keys(formData);

  const blogCreation = await Blogs.create(formData);
  console.log(blogCreation);

  res.redirect(`/`);
};

module.exports = {
  getBlogs,
  blogForm,
  createBlog,
};
