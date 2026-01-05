import React from "react";
import { Link } from "react-router-dom";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export default function Home() {
  return (
    <div className="w-full bg-[#0a0d14] text-white">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center">

        {/* Online BG Image */}
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="hero bg"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0d14] to-[#1b2330] opacity-90"></div>

        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Welcome to <span className="text-blue-400">AKR University</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Explore Courses • Colleges • Schools • Build Your Future With Us
          </p>

          <Link
            to="/admissions"
            className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-[0px_5px_20px_rgba(0,115,255,0.5)] hover:scale-105 transition-all"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* ---------------- NOTICE BOARD ---------------- */}
      <section className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <NotificationsActiveIcon className="text-yellow-400" /> Notice Board
        </h2>

        <div className="bg-[#131a25] p-6 rounded-xl shadow-lg border border-gray-700">
          <ul className="space-y-3 text-gray-300">
            <li>• Admissions open for 2025.</li>
            <li>• Scholarship test next week.</li>
            <li>• New campus opening soon.</li>
          </ul>
        </div>
      </section>

      {/* ---------------- POPULAR COURSES ---------------- */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <StarIcon className="text-yellow-400" /> Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "B.Tech",
              img:
                "https://images.unsplash.com/photo-1581091012184-5c1d34b4dd0c",
            },
            {
              title: "MBA",
              img:
                "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
            },
            {
              title: "BCA",
              img:
                "https://images.unsplash.com/photo-1518770660439-4636190af475",
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-[#131a25] rounded-xl border border-gray-700 hover:scale-105 transition shadow-lg"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover rounded-t-xl"
                loading="lazy"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm">
                  Learn from experts with internships and hands-on training.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- COLLEGES ---------------- */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <ApartmentIcon className="text-blue-400" /> Colleges
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Engineering College",
              img:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
            },
            {
              title: "Management College",
              img:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            },
            {
              title: "Science College",
              img:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
            },
          ].map((c, idx) => (
            <div
              key={idx}
              className="bg-[#131a25] rounded-xl border border-gray-700 hover:scale-105 transition shadow-lg"
            >
              <img
                src={c.img}
                className="w-full h-40 object-cover rounded-t-xl"
                alt="college"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm">
                  Top ranked campus with world-class faculty.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SCHOOLS ---------------- */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <SchoolIcon className="text-green-400" /> Schools
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Primary School",
              img:
                "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
            },
            {
              title: "High School",
              img:
                "https://images.unsplash.com/photo-1555529669-22697676f55c",
            },
            {
              title: "Senior Secondary",
              img:
                "https://images.unsplash.com/photo-1577896851231-70ef18881754",
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-[#131a25] rounded-xl border border-gray-700 hover:scale-105 transition shadow-lg"
            >
              <img
                src={s.img}
                className="w-full h-40 object-cover rounded-t-xl"
                alt="school"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">
                  Best schooling with modern learning facilities.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- WHY CHOOSE AKR ---------------- */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <VerifiedIcon className="text-purple-400" /> Why Choose AKR University?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { icon: <MilitaryTechIcon />, title: "Top Ranked" },
            { icon: <EmojiPeopleIcon />, title: "Expert Faculty" },
            { icon: <StarIcon />, title: "Excellent Placements" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#131a25] p-6 rounded-xl border border-gray-700 hover:scale-105 transition shadow-lg flex flex-col items-center"
            >
              <div className="text-5xl mb-3 text-blue-400">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="max-w-6xl mx-auto mt-20 px-6 pb-20">
        <h2 className="text-3xl font-bold">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              name: "Aman",
              img:
                "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
            },
            {
              name: "Ritika",
              img:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
            },
            {
              name: "Rahul",
              img:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-[#131a25] p-6 rounded-xl border border-gray-700 shadow-lg hover:scale-105 transition"
            >
              <img
                src={t.img}
                loading="lazy"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-blue-400"
              />

              <p className="text-gray-300 italic text-center mb-3">
                “AKR University gave me the best learning experience!”
              </p>

              <h3 className="font-semibold text-blue-400 text-center">
                — {t.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
