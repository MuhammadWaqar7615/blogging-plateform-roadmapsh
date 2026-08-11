import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
// import Home from "./Pages/home_page/Home";
// import Login from "./Pages/login_page/login";
// import Admin from "./Pages/admin_page/admin";

import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlogs";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-blog",
        element: <CreateBlog />,
      }
    ]
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
