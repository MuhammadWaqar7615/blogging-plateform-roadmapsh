const Blogs = require("../models/blogsModel");
const path = require("path");

const getBlogs = async (req, res) => {
  const blogs = await Blogs.find();
  console.log("all blogs: ", blogs);

  console.log("getBlogs: ", req.url);
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

const deleteBlog = async (req, res) => {
  console.log('this url is triggering', req.body.blogId);
  const blogDelete = await Blogs.findByIdAndDelete(req.body.blogId);
  res.status(204).send();
}

const updateBlog = async (req, res) => {
  console.log("this url was triggered", req.body );
  await Blogs.findByIdAndUpdate(req.body.blogId, { post: req.body.blogContent });
  console.log('edited blog: ', Blogs.findById(req.body.blogId));
  res.status(204).send();
}

module.exports = {
  getBlogs,
  blogForm,
  createBlog,
  deleteBlog,
  updateBlog
};

