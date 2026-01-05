import React, { useState, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";

const courseData = [
  {
    id: 1,
    name: "Bachelor of Technology (B.Tech)",
    category: "Engineering",
    img: "https://images.unsplash.com/photo-1581092795360-516cb06d813a",
    details:
      "A 4-year engineering program focusing on core technical skills, industrial training, practical labs, internships, and specialization tracks like CSE, Mechanical, Civil, Electronics, AI & ML.",
  },
  {
    id: 2,
    name: "Bachelor of Computer Applications (BCA)",
    category: "IT",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    details:
      "A 3-year IT program covering programming, web development, software engineering, databases, cloud computing, cybersecurity, and real-world software projects.",
  },
  {
    id: 3,
    name: "Bachelor of Business Administration (BBA)",
    category: "Management",
    img: "https://images.unsplash.com/photo-1560264280-88b68371db39",
    details:
      "A management course focusing on entrepreneurship, business analytics, finance, marketing, HR, management case studies, and corporate internships.",
  },
  {
    id: 4,
    name: "Bachelor of Medicine and Surgery (MBBS)",
    category: "Medical",
    img: "https://images.unsplash.com/photo-1580281657527-47d5d13b1f9a",
    details:
      "A professional medical program focusing on anatomy, clinical practice, physiology, surgery training, hospital internships, and patient care specializations.",
  },
  {
    id: 5,
    name: "Bachelor of Pharmacy (B.Pharm)",
    category: "Pharmacy",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    details:
      "Pharmacy course focusing on drug formulation, clinical pharmacy, pharmacology, hospital training, medical chemistry, and pharmaceutical industry exposure.",
  },
  {
    id: 6,
    name: "Bachelor of Arts (BA)",
    category: "Arts",
    img: "https://images.unsplash.com/photo-1610484826967-09c572a56c35",
    details:
      "A 3-year arts program including subjects like Psychology, English, Sociology, Political Science, History, Fine Arts, and Media Studies.",
  },
  {
    id: 7,
    name: "Bachelor of Law (LLB)",
    category: "Law",
    img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab",
    details:
      "A professional law course focusing on Indian Penal Code, contracts, criminal law, civil law, constitutional studies, and practical courtroom training.",
  },
  {
    id: 8,
    name: "MBA – Master of Business Administration",
    category: "Management",
    img: "https://images.unsplash.com/photo-1573168242454-1f3a3c44a035",
    details:
      "A master’s level program covering business strategy, analytics, marketing, finance, HR, business development, internships, and industry projects.",
  },
  {
    id: 9,
    name: "MCA – Master of Computer Applications",
    category: "IT",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details:
      "An advanced IT course focusing on software architecture, AI, machine learning, advanced programming, cloud systems, and large-scale real-world applications.",
  },
  {
    id: 10,
    name: "M.Tech – Master of Technology",
    category: "Engineering",
    img: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e0",
    details:
      "A PG engineering course focused on research, advanced technical subjects, industrial exposure, IoT, robotics, computational studies, and thesis work.",
  },
];

export default function Courses() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 4;

  // Filter Logic
  const filtered = useMemo(() => {
    return courseData.filter((course) => {
      const matchesCategory =
        category === "All" || course.category === category;
      const matchesSearch =
        course.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="bg-[#08080C] text-white min-h-screen">

      {/* HERO SECTION */}
      <div
        className="h-[45vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513258496099-48168024aec0')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-5xl font-bold z-10">
          Explore Our Courses
        </h1>
      </div>

      {/* BODY CONTENT */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <p className="text-center text-gray-300 mb-8 text-lg">
          Choose from a wide range of professional, technical, medical, and
          management programs designed to build your future career.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center bg-[#1A1A22] px-5 py-3 rounded-full w-full max-w-lg gap-3">
            <SearchIcon className="text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full text-white"
            />
          </div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            "All",
            "Engineering",
            "IT",
            "Medical",
            "Pharmacy",
            "Management",
            "Arts",
            "Law",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full border transition ${
                category === cat
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-500 text-gray-300 hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* COURSE CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {paginated.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Tilt glareEnable glareMaxOpacity={0.45} className="rounded-xl bg-[#12121A] shadow-lg shadow-blue-900/40 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.name}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-semibold mb-2">
                    {course.name}
                  </h2>
                  <p className="text-blue-400 mb-3">{course.category}</p>
                  <p className="text-gray-300 text-sm">{course.details}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40"
          >
            Prev
          </button>

          <span className="px-4 py-2">
            {page}/{totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
