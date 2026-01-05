import React, { useState, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";

// Coaching Data
const coachingData = [
  {
    id: 1,
    name: "Allen Career Institute",
    category: "Engineering",
    img: "https://images.unsplash.com/photo-1558025178-4d59a5d6a5cb",
  },
  {
    id: 2,
    name: "Resonance Kota",
    category: "Engineering",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  {
    id: 3,
    name: "Aakash Institute",
    category: "Medical",
    img: "https://images.unsplash.com/photo-1559757175-20a414d89a88",
  },
  {
    id: 4,
    name: "FIITJEE",
    category: "Engineering",
    img: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa",
  },
  {
    id: 5,
    name: "BYJU’S Learning Hub",
    category: "Foundation",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    id: 6,
    name: "Unacademy Center",
    category: "Foundation",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
];

export default function Coaching() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // Filter Logic
  const filtered = useMemo(() => {
    return coachingData.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="bg-[#0B0B0F] min-h-screen text-white">
      
      {/* Header Section */}
      <div
        className="h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523580494863-6f3031226710')",
        }}
      >
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Coaching Centers
        </h1>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">

        {/* Subtitle */}
        <p className="text-center text-gray-300 text-lg mb-10">
          Explore India’s top coaching centers with modern teaching, expert mentors
          & best results.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3 bg-[#1A1A22] px-4 py-3 rounded-full w-full max-w-lg">
            <SearchIcon className="text-gray-400" />
            <input
              type="text"
              placeholder="Search coaching centers..."
              className="w-full bg-transparent outline-none text-white"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", "Engineering", "Medical", "Foundation"].map((cat) => (
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

        {/* Coaching Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {paginated.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.4}
                className="bg-[#15151D] rounded-2xl overflow-hidden shadow-lg shadow-blue-800/40"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-blue-400">{item.category}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40"
          >
            Prev
          </button>

          <span className="px-4 py-2">{page} / {totalPages}</span>

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
