import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Colleges", href: "/colleges" },
    { name: "Schools", href: "/schools" },
    { name: "Coaching", href: "/coaching" },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  // Shrink navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 border-b border-gray-800 transition-all duration-300 
      ${shrink ? "py-2 bg-black/80 backdrop-blur-xl" : "py-4 bg-black/95"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* 3D Logo */}
        <h1 className="text-3xl font-extrabold text-white cursor-pointer tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:scale-110 transition-all">
          AKR <span className="text-gray-300">UNIVERSITY</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {links.map((item) => {
            const active = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg font-medium transition-all duration-200 ${
                  active
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <IconButton className="md:hidden" onClick={() => setOpen(true)}>
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0a0d14] text-white p-6 transform 
        transition-transform duration-300 shadow-2xl z-[999] 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Menu</h2>

          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </div>

        <nav className="flex flex-col gap-6 text-xl">
          {links.map((item) => {
            const active = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`transition-all duration-200 ${
                  active
                    ? "text-white font-semibold border-b border-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
