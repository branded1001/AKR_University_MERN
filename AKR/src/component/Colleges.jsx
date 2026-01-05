import React, { useMemo, useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";

/**
 * Advanced single-file Colleges component
 * - Filter (category)
 * - Search
 * - Pagination
 * - 3D Tilt effect on hover (mouse move)
 * - Framer Motion entry animations
 * - Lazy loading images (loading="lazy")
 *
 * Paste this as Colleges.jsx and use <Colleges /> where needed.
 */

const PAGE_SIZE = 6; // cards per page

// Sample, expanded colleges data (you can extend/edit)
const ALL_COLLEGES = [
  {
    id: 1,
    title: "School of Engineering & Technology",
    category: "Engineering",
    established: 2010,
    students: 4200,
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1350&q=80",
    desc:
      "Leading engineering institution offering top-notch technical education, modern labs and strong industry tie-ups.",
    courses: ["B.Tech", "M.Tech", "Diploma", "AI & ML"],
  },
  {
    id: 2,
    title: "School of Management & Commerce",
    category: "Management",
    established: 2012,
    students: 2700,
    image:
      "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1350&q=80",
    desc:
      "Premier management school shaping future business leaders with practical training, internships and placement support.",
    courses: ["BBA", "MBA", "B.Com", "Entrepreneurship"],
  },
  {
    id: 3,
    title: "School of Medical & Health Sciences",
    category: "Medical",
    established: 2014,
    students: 1800,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1350&q=80",
    desc:
      "Advanced medical studies with clinical exposure, allied health programs and research opportunities.",
    courses: ["B.Pharma", "D.Pharma", "B.Sc Nursing", "Physiotherapy"],
  },
  {
    id: 4,
    title: "School of Arts & Humanities",
    category: "Arts",
    established: 2011,
    students: 1200,
    image:
      "https://images.unsplash.com/photo-1598653222000-ebe0fbaa6399?auto=format&fit=crop&w=1350&q=80",
    desc:
      "Vibrant school promoting creativity, communication and critical thinking across arts and humanities.",
    courses: ["BA", "MA", "Psychology", "Journalism"],
  },
  {
    id: 5,
    title: "School of Computer Applications",
    category: "Engineering",
    established: 2013,
    students: 1500,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1350&q=80",
    desc:
      "Industry-oriented computer programs with focus on software, cloud and data engineering.",
    courses: ["BCA", "MCA", "Fullstack Bootcamp", "Data Science"],
  },
  {
    id: 6,
    title: "Institute of Design & Media",
    category: "Arts",
    established: 2016,
    students: 800,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80",
    desc: "Design oriented programs in UI/UX, multimedia and creative arts.",
    courses: ["B.Des", "M.Des", "Animation", "Graphic Design"],
  },
  // more items for pagination/demo
  {
    id: 7,
    title: "College of Pharmacy",
    category: "Medical",
    established: 2015,
    students: 900,
    image:
      "https://images.unsplash.com/photo-1580281657524-55b0cae9a9a0?auto=format&fit=crop&w=1350&q=80",
    desc:
      "Quality pharma education, labs and research programs shaped for industry demands.",
    courses: ["B.Pharma", "M.Pharma"],
  },
  {
    id: 8,
    title: "Business Analytics Institute",
    category: "Management",
    established: 2018,
    students: 500,
    image:
      "https://images.unsplash.com/photo-1553882804-3d79f4816f7f?auto=format&fit=crop&w=1350&q=80",
    desc: "Focused analytics and data driven management curriculum.",
    courses: ["PG Diploma - BA", "Certification in Data Analytics"],
  },
  {
    id: 9,
    title: "School of Sciences",
    category: "Science",
    established: 2009,
    students: 1600,
    image:
      "https://images.unsplash.com/photo-1526378729711-2d6b2a7a5bcb?auto=format&fit=crop&w=1350&q=80",
    desc: "Pure and applied sciences with research labs and international faculty collaborations.",
    courses: ["B.Sc", "M.Sc", "Research Programs"],
  },
  {
    id: 10,
    title: "Vocational & Skill Development Center",
    category: "Vocational",
    established: 2017,
    students: 600,
    image:
      "https://images.unsplash.com/photo-1605792657660-8b1f3a6d5c17?auto=format&fit=crop&w=1350&q=80",
    desc: "Short-term job-oriented courses and training for immediate industry entry.",
    courses: ["ITI", "Certificate Courses"],
  },
  {
    id: 11,
    title: "School of Law",
    category: "Law",
    established: 2019,
    students: 400,
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1350&q=80",
    desc: "Integrated law programs and moot-court opportunities.",
    courses: ["BA LLB", "LLM"],
  },
  {
    id: 12,
    title: "Center for Continuing Education",
    category: "Continuing",
    established: 2011,
    students: 1100,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80",
    desc: "Evening & weekend classes for working professionals and distance learners.",
    courses: ["Diploma Programs", "Online Certifications"],
  },
];

const CATEGORIES = [
  "All",
  "Engineering",
  "Management",
  "Medical",
  "Arts",
  "Science",
  "Law",
  "Vocational",
  "Continuing",
];

export default function Colleges() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [perPage] = useState(PAGE_SIZE);
  const [filtered, setFiltered] = useState(ALL_COLLEGES);
  const [hover3d, setHover3d] = useState({}); // hold tilt state per card

  // filter & search logic
  useEffect(() => {
    let list = ALL_COLLEGES.slice();

    if (category !== "All") {
      list = list.filter((c) => c.category === category);
    }

    if (query.trim() !== "") {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.desc.toLowerCase().includes(q) ||
          c.courses.join(" ").toLowerCase().includes(q)
      );
    }

    setFiltered(list);
    setPage(1); // reset to first page when filters change
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  const visible = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  // Handlers for 3D tilt - small JS tilt effect
  const handleMouseMove = (e, id) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top; // y position within element
    const px = (x / rect.width) * 2 - 1; // -1 .. 1
    const py = (y / rect.height) * 2 - 1; // -1 .. 1
    const rotateX = py * 6; // tilt amount
    const rotateY = px * -6;
    const transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    setHover3d((s) => ({ ...s, [id]: transform }));
  };

  const handleMouseLeave = (id) => {
    setHover3d((s) => ({ ...s, [id]: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)" }));
  };

  // Accessibility: keyboard pagination
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setPage((p) => Math.min(totalPages, p + 1));
      if (e.key === "ArrowLeft") setPage((p) => Math.max(1, p - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [totalPages]);

  return (
    <div className="w-full bg-black text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title + subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-blue-400">Colleges</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Explore our schools and colleges — wide range of programs, expert faculty, and
            modern labs to prepare you for a successful career. Use the filters, search or
            pagination to find the program that suits you best.
          </p>
        </div>

        {/* Controls: Search + Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* search */}
          <div className="flex items-center bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 w-full md:w-1/2">
            <SearchIcon className="text-gray-400 mr-2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colleges, courses, keywords..."
              className="bg-transparent outline-none w-full text-gray-200 placeholder-gray-500"
            />
          </div>

          {/* categories */}
          <div className="flex items-center gap-2 overflow-x-auto px-1 py-1">
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border ${
                category === "All"
                  ? "bg-blue-500 text-black border-blue-500"
                  : "bg-transparent text-gray-300 border-gray-700"
              }`}
              onClick={() => setCategory("All")}
            >
              <FilterListIcon /> All
            </button>

            {CATEGORIES.filter((c) => c !== "All").map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-2 rounded-md text-sm font-medium border ${
                  category === cat
                    ? "bg-blue-500 text-black border-blue-500"
                    : "bg-transparent text-gray-300 border-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((college) => (
            <motion.div
              key={college.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div
                onMouseMove={(e) => handleMouseMove(e, college.id)}
                onMouseLeave={() => handleMouseLeave(college.id)}
                style={{
                  transform: hover3d[college.id] || "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                  transition: "transform 0.12s ease-out",
                }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
              >
                {/* image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={college.image}
                    loading="lazy"
                    alt={college.title}
                    className="w-full h-full object-cover transform transition-transform duration-500"
                    style={{ backfaceVisibility: "hidden" }}
                  />
                </div>

                {/* content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{college.title}</h3>
                      <div className="text-sm text-gray-400 mt-1">
                        {college.category} • Established {college.established}
                      </div>
                    </div>

                    <div className="text-right text-sm text-gray-400">
                      <div>{college.students.toLocaleString()} students</div>
                      <div className="mt-2 text-xs text-gray-500">ID #{college.id}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mt-4 text-sm leading-relaxed">{college.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {college.courses.slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded-full border border-gray-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md flex items-center gap-2 transition">
                      View Courses <ArrowForwardIcon fontSize="small" />
                    </button>

                    <a
                      className="ml-auto text-sm text-gray-400 hover:text-white underline"
                      href={`/colleges/${college.id}`}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* pagination + totals */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="text-gray-400">
            Showing <span className="text-white font-medium">{(page - 1) * perPage + 1}</span> -{" "}
            <span className="text-white font-medium">{Math.min(page * perPage, filtered.length)}</span> of{" "}
            <span className="text-white font-medium">{filtered.length}</span> colleges
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-md bg-gray-800 border border-gray-700 hover:bg-gray-700 disabled:opacity-50"
              aria-label="Previous page"
            >
              <ArrowBackIcon />
            </button>

            {/* simple numeric paging with a few pages visible */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pg = idx + 1;
                // show only near pages if many
                if (totalPages > 7 && Math.abs(pg - page) > 2 && pg !== 1 && pg !== totalPages) {
                  // skip printing: show first/last and around current
                  if (
                    (pg === 2 && page > 4) ||
                    (pg === totalPages - 1 && page < totalPages - 3)
                  ) {
                    return <span key={pg} className="px-2 text-gray-500">...</span>;
                  }
                  if (Math.abs(pg - page) > 2) return null;
                }
                return (
                  <button
                    key={pg}
                    onClick={() => setPage(pg)}
                    className={`px-3 py-1 rounded-md border ${
                      page === pg ? "bg-blue-500 text-black border-blue-500" : "bg-gray-800 border-gray-700 text-gray-300"
                    }`}
                  >
                    {pg}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-md bg-gray-800 border border-gray-700 hover:bg-gray-700 disabled:opacity-50"
              aria-label="Next page"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

