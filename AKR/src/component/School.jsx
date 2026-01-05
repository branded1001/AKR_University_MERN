import React, { useState, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";

export default function School() {
  const categories = ["All", "Primary", "Secondary", "Senior Secondary"];

  const schools = [
    {
      name: "Bright Future Primary School",
      category: "Primary",
      img: "https://images.unsplash.com/photo-1606326608695-df8e20d1e4c1",
      desc: "A nurturing environment for early childhood learning.",
    },
    {
      name: "Green Valley Secondary School",
      category: "Secondary",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
      desc: "Top-ranked school focused on academic excellence.",
    },
    {
      name: "City Senior Secondary School",
      category: "Senior Secondary",
      img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
      desc: "Known for best Science & Commerce Streams.",
    },
    {
      name: "Blue Diamond Primary School",
      category: "Primary",
      img: "https://images.unsplash.com/photo-1555529771-35a38a1e8d4b",
      desc: "Modern classrooms & digital learning.",
    },
    {
      name: "Sunrise Senior Secondary School",
      category: "Senior Secondary",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      desc: "Excellent record in competitive exams.",
    },
    {
      name: "National Secondary School",
      category: "Secondary",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      desc: "Strong academic curriculum & sports training.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredSchools = useMemo(() => {
    return schools
      .filter((s) =>
        activeCategory === "All" ? true : s.category === activeCategory
      )
      .filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      );
  }, [search, activeCategory]);

  const PER_PAGE = 3;
  const totalPages = Math.ceil(filteredSchools.length / PER_PAGE);
  const paginatedData = filteredSchools.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5]">

      {/* 🔥 HERO SECTION */}
      <div
        className="w-full h-[300px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
       "url('https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-2">
            🏫 Schools
          </h1>
          <p className="text-lg md:text-xl">
            Explore top-rated AKR University Schools with world-class facilities.
          </p>
        </div>
      </div>

      {/* ---------------------------- SEARCH BAR ---------------------------- */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center bg-gray-200 px-4 py-3 rounded-xl w-full max-w-xl shadow">
          <SearchIcon className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Search for schools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent w-full outline-none text-lg"
          />
        </div>
      </div>

      {/* ---------------------------- FILTER BUTTONS ---------------------------- */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setPage(1);
            }}
            className={`px-5 py-2 rounded-full border text-lg font-semibold transition
            ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ---------------------------- SCHOOL LIST ---------------------------- */}
      <div className="grid md:grid-cols-3 gap-10">
        {paginatedData.length === 0 && (
          <p className="text-center col-span-3 text-xl text-gray-500">
            No schools found!
          </p>
        )}

        {paginatedData.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition border">
                <img
                  src={s.img}
                  loading="lazy"
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <p className="text-blue-600 font-semibold mt-1">{s.category}</p>
                  <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* ---------------------------- PAGINATION ---------------------------- */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
