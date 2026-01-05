import React from "react";
import { IconButton } from "@mui/material";

// MUI Icons
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X"; // Twitter

export default function Footer() {
  return (
    <footer className="bg-[#0b0e13] text-gray-300 mt-20 pt-16 pb-8 px-6 border-t border-gray-800">

      {/* ⚡ Top Search Bar Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-black/40 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.15)] border border-gray-700">

          <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Stay Updated
          </h2>

          <div className="flex items-center w-full md:w-1/2 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 shadow-inner">
            <input
              type="text"
              placeholder="Search courses, colleges, coaching..."
              className="w-full bg-transparent text-white outline-none"
            />
            <IconButton>
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
          </div>

        </div>
      </div>

      {/* ⚡ Footer Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1: Logo + Intro */}
        <div>
          <h1 className="text-3xl font-extrabold text-white pb-2 drop-shadow-[0_0_8px_white]">
            AKR <span className="text-gray-300">UNIVERSITY</span>
          </h1>
          <p className="text-gray-400">
            Colleges • Schools • Coaching  
            <br />Your trusted institute for government exam preparation.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-5">
            {[InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon, XIcon].map(
              (Icon, i) => (
                <IconButton key={i} className="hover:scale-110 transition">
                  <Icon style={{ color: "white" }} />
                </IconButton>
              )
            )}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-[0_0_6px_white]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "About", "Colleges", "Schools", "Coaching", "Admissions"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3: Courses */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-[0_0_6px_white]">
            Popular Courses
          </h3>
          <ul className="space-y-2">
            {[
              "B.Sc",
              "BCA",
              "BA",
              "B-Tech", 
              "Polytechnic",
              "ITI",
              "Banking Coaching",
              "Railway Coaching",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white hover:translate-x-1 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-[0_0_6px_white]">
            Contact Us
          </h3>

          <div className="flex items-center gap-3 mb-3">
            <LocationOnIcon />  
            <p>AKR Campus, Uttar Pradesh, India</p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <PhoneIcon />  
            <p>+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <EmailIcon />  
            <p>info@akruni.edu</p>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-16 pt-6 border-t border-gray-800">
        © {new Date().getFullYear()} <span className="text-white">AKR University</span>.  
        All Rights Reserved.
      </div>
    </footer>
  );
}

