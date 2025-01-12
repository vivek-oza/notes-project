import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

import Home from "./pages/Home/Home";
import Signup from "./auth/Signup/Signup";
import Login from "./auth/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

const NotesyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/Signup",
    element: <Signup />,
    errorElement: <NotFound />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={NotesyRouter} />
      <Toaster />
    </>
  );
}
