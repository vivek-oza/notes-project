import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"; // Assuming cn is a utility for conditional classes

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setMenuopen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white dark:bg-zinc-800 border-b shadow-md flex justify-center items-center">
        <div className="container mx-auto flex justify-between items-center p-4 lg:px-8">
          {/* LOGO */}
          <div>
            <NavLink
              to={"/"}
              className="text-xl md:text-3xl font-black font-bree text-black dark:text-white"
            >
              Notesy
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-zinc-300 dark:bg-zinc-600 text-black dark:text-white font-semibold px-4 py-2 rounded"
                  : "text-black dark:text-white font-normal hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/Login"
              className={({ isActive }) =>
                isActive
                  ? "bg-zinc-300 dark:bg-zinc-600 text-black dark:text-white font-semibold px-4 py-2 rounded"
                  : "text-black dark:text-white font-normal hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/Signup"
              className={({ isActive }) =>
                isActive
                  ? "bg-zinc-300 dark:bg-zinc-600 text-black dark:text-white font-semibold px-4 py-2 rounded"
                  : "text-black dark:text-white font-normal hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded"
              }
            >
              Signup
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
