import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your admission request has been submitted!");
  };

  const criteria = [
    {
      id: 1,
      title: "Engineering (B.Tech / M.Tech)",
      img: "https://images.unsplash.com/photo-1509223197845-458d87318791",
      desc: `Minimum 50% in PCM (10+2). Entrance exams like JEE / State CET. 
             Lateral entry available for diploma holders. Practical & lab-based selection.`,
    },
    {
      id: 2,
      title: "Medical (MBBS / Nursing / Paramedical)",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      desc: `NEET qualification required for MBBS/BDS. Biology mandatory in 12th.
             For Nursing/Paramedical: Minimum 45% with PCB.`,
    },
    {
      id: 3,
      title: "Management (BBA / MBA)",
      img: "https://images.unsplash.com/photo-1573164574472-797cdf4a583c",
      desc: `No specific subject restriction. Minimum 50% marks.
             For MBA: CAT / MAT / XAT / State CET exams preferred.`,
    },
    {
      id: 4,
      title: "IT & Computer (BCA / MCA)",
      img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      desc: `Minimum 45% in any stream.  
             For MCA: BCA/BSc IT + entrance exam of institution.`,
    },
    {
      id: 5,
      title: "Pharmacy (D.Pharm / B.Pharm)",
      img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
      desc: `Minimum 45% in PCB/PCM.  
             PCI approved institutions require specific criteria.`,
    },
    {
      id: 6,
      title: "Arts & Humanities (BA / MA)",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      desc: `Open eligibility. Minimum 40–45% in 12th for BA.  
             For MA: Bachelor’s degree in relevant specialization.`,
    },
  ];

  return (
    <div className="bg-[#08080C] text-white">

      {/* HERO SECTION */}
      <div
        className="h-[50vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="relative text-5xl font-bold z-10 text-white text-center">
          Admissions 2025
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* INTRO */}
        <p className="text-gray-300 text-center mb-10 text-lg">
          Apply for admissions across Engineering, Medical, Management, IT, Pharmacy,
          and Arts programs. Read the criteria and fill the form below to get started.
        </p>

        {/* ADMISSION PROCESS STEPS */}
        <h2 className="text-3xl font-semibold mb-6">Admission Process</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          {["Registration", "Document Upload", "Verification", "Final Admission"].map(
            (step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#12121A] p-6 rounded-xl shadow-lg border border-gray-700 text-center"
              >
                <h3 className="text-xl font-bold mb-2">{step}</h3>
                <p className="text-gray-400">
                  {index === 0 && "Start by registering through the admission form."}
                  {index === 1 && "Upload your required documents online safely."}
                  {index === 2 && "Our team verifies your academic eligibility."}
                  {index === 3 && "Final approval and allotment of seat."}
                </p>
              </motion.div>
            )
          )}
        </div>

        {/* ADMISSION CRITERIA SECTION */}
        <h2 className="text-3xl font-semibold mb-8">Admission Criteria</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {criteria.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Tilt glareEnable glareMaxOpacity={0.35} className="bg-[#12121A] rounded-xl overflow-hidden shadow-xl shadow-blue-900/40">
                <img
                  loading="lazy"
                  src={item.img}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* ADMISSION FORM */}
        <h2 className="text-3xl font-semibold mt-16 mb-6">Apply for Admission</h2>
        <div className="bg-[#11111A] p-8 rounded-xl shadow-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              onChange={handleChange}
              className="p-3 rounded bg-[#1A1A24] outline-none border border-gray-700"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
              className="p-3 rounded bg-[#1A1A24] outline-none border border-gray-700"
            />

            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              onChange={handleChange}
              className="p-3 rounded bg-[#1A1A24] outline-none border border-gray-700"
            />

            <select
              name="course"
              required
              onChange={handleChange}
              className="p-3 rounded bg-[#1A1A24] outline-none border border-gray-700"
            >
              <option value="">Select Course</option>
              <option>Engineering</option>
              <option>Medical</option>
              <option>Management</option>
              <option>IT & Computer</option>
              <option>Pharmacy</option>
              <option>Arts & Humanities</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Your query (optional)"
              onChange={handleChange}
              className="md:col-span-2 p-3 rounded bg-[#1A1A24] outline-none border border-gray-700"
            />

            <button
              type="submit"
              className="md:col-span-2 py-3 rounded bg-blue-600 hover:bg-blue-700 transition text-lg font-semibold"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
