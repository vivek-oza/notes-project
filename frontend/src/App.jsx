import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

const NotesyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <NotFound />,
  },
  {
    path: "/Signup",
    element: <Signup />,
    // errorElement: <NotFound />,
  },
  {
    path: "/Login",
    element: <Login />,
    // errorElement: <NotFound />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={NotesyRouter} />
    </>
  );
}
