import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"; // Assuming cn is a utility for conditional classes

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setMenuopen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white dark:bg-zinc-800 border-b shadow-md flex justify-center items-center h-[5rem]">
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
          <div className="hidden sm:flex justify-center items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-black dark:border-b-white text-black dark:text-white font-semibold p-2 "
                  : "text-black dark:text-white font-normal hover:border-b-2 hover:border-b-gray-700  dark:hover:border-b-white hover:text-gray-700 dark:hover:text-white p-2 "
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/Login"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-black dark:border-b-white text-black dark:text-white font-semibold p-2 "
                  : "text-black dark:text-white font-normal hover:border-b-2 hover:border-b-gray-700  dark:hover:border-b-white hover:text-gray-700 dark:hover:text-white p-2 "
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/Signup"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-black dark:border-b-white text-black dark:text-white font-semibold p-2 "
                  : "text-black dark:text-white font-normal hover:border-b-2 hover:border-b-gray-700  dark:hover:border-b-white hover:text-gray-700 dark:hover:text-white p-2 "
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
