import React from "react";
import { Link } from "react-router-dom";

import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import PlayCircleIcon from "@mui/icons-material/PlayCircleFilled";
import StarIcon from "@mui/icons-material/Star";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

export default function About() {
  return (
    <div className="w-full bg-white text-black">

      {/* ---------------------------------- HERO SECTION ---------------------------------- */}
      <section className="relative w-full h-[75vh] flex items-center justify-center text-center">

        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1080"
          className="absolute inset-0 w-full h-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-gray-200"></div>

        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-6xl font-extrabold drop-shadow-2xl">
            About <span className="text-blue-600">AKR University</span>
          </h1>

          <p className="mt-5 text-lg text-gray-700">
            A Premier Institution Shaping The Leaders Of Tomorrow
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ---------------------------------- UNIVERSITY OVERVIEW ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold mb-6 flex items-center gap-2">
          <ApartmentIcon className="text-blue-600" />
          AKR University Overview
        </h2>

        <div className="bg-gray-100 p-8 rounded-xl shadow-md leading-8 text-gray-700 text-lg">
          <p>
            AKR University was established in <b>2012</b> with the vision of providing
            world-class education to students from all backgrounds. Over the years,
            the university has expanded into multiple colleges, schools, and online
            coaching programs under the AKR Group.
          </p>

          <p className="mt-4">
            The institution aims to build leaders, innovators, and responsible
            citizens equipped with strong academic knowledge and real-world skills.
          </p>
        </div>
      </section>

      {/* ---------------------------------- PRINCIPAL & CHAIRMAN ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-10">

        {/* Principal */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
            className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-blue-600"
          />
          <h3 className="text-2xl font-bold mt-4">Dr. Anil Kumar</h3>
          <p className="text-gray-600">Principal, AKR University</p>

          <p className="mt-4 text-gray-700">
            With 25+ years of experience in education, Dr. Kumar focuses on
            discipline, innovation, and student-centered learning.
          </p>
        </div>

        {/* Chairman */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-blue-600"
          />
          <h3 className="text-2xl font-bold mt-4">Mr. Rajesh Verma</h3>
          <p className="text-gray-600">Chairman, AKR Group</p>

          <p className="mt-4 text-gray-700">
            A visionary leader who established the AKR Group of Institutions with
            a commitment to affordable, high-quality education.
          </p>
        </div>
      </section>

      {/* ---------------------------------- COLLEGES & SCHOOLS DETAILS ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20">

        <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <SchoolIcon className="text-green-600" /> Colleges & Schools Under AKR
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">AKR College of Science</h3>
            <p className="text-gray-600">
              Established: <b>2013</b>
            </p>
            <p className="mt-2">
              Offers B.Sc, M.Sc programs with modern laboratories and expert faculty.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">AKR Management Institute</h3>
            <p className="text-gray-600">
              Established: <b>2015</b>
            </p>
            <p className="mt-2">
              MBA, BBA programs known for outstanding placements and industry exposure.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">AKR Senior Secondary School</h3>
            <p className="text-gray-600">
              Established: <b>2010</b>
            </p>
            <p className="mt-2">
              One of the top ranked CBSE schools focusing on discipline & academics.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------- MISSION & VALUES (ORIGINAL CODE) ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold mb-8">Our Mission & Vision</h2>

        <div className="bg-gray-100 p-8 rounded-xl shadow-md">
          <p className="text-lg leading-8 text-gray-700">
            At AKR University, our mission is to provide world-class education,
            cutting-edge research, and holistic development. We aim to empower
            students with knowledge, skills, and values needed to thrive in a
            fast-changing world.
          </p>
        </div>
      </section>

      {/* ---------------------------------- CAMPUS GALLERY (ORIGINAL) ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold mb-8">Campus Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
            "https://images.unsplash.com/photo-1537202108838-e7072bad1927",
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img src={img} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------- FACULTY SECTION (ORIGINAL) ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <GroupsIcon className="text-blue-600" /> Experienced Faculty
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Rakesh Sharma",
              img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
              role: "Head of Computer Science",
            },
            {
              name: "Dr. Neha Verma",
              img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
              role: "Professor, Management Studies",
            },
            {
              name: "Dr. Arjun Mehta",
              img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
              role: "Dean, Science Department",
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:scale-105 transition text-center"
            >
              <img
                src={f.img}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-2 border-blue-600"
              />
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="text-gray-600">{f.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------- ACHIEVEMENTS SECTION (ORIGINAL) ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <EmojiEventsIcon className="text-yellow-600" /> Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <MilitaryTechIcon className="text-blue-600 text-5xl" />,
              title: "Top Ranked",
              desc: "Ranked among the top universities in India.",
            },
            {
              icon: <StarIcon className="text-yellow-500 text-5xl" />,
              title: "Best Placement",
              desc: "Over 95% placement rate every year.",
            },
            {
              icon: <VerifiedIcon className="text-green-500 text-5xl" />,
              title: "NAAC A+ Certified",
              desc: "Recognized for excellence in education.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:scale-105 transition text-center"
            >
              <div>{item.icon}</div>
              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------- VIDEO SECTION (ORIGINAL) ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20 mb-20">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <PlayCircleIcon className="text-red-600" /> Campus Tour (Video)
        </h2>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/1-0ZQFbkS10"
            title="Campus Tour"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}
