import React from "react";
import { Link } from "react-router-dom";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Contact() {
  return (
    <div className="w-full bg-black text-white ">

      {/* ---------------------------------- HERO SECTION ---------------------------------- */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center border-white">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1080"
          className="absolute inset-0 w-full h-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>

        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl font-extrabold drop-shadow-2xl">
            Contact <span className="text-blue-500">AKR University</span>
          </h1>
          <p className="mt-5 text-lg text-gray-300">
            A Premier Institution Committed to Excellence in Education.
          </p>
          <p className="mt-2 text-gray-400 text-md">
            Established in 1998, AKR University has been shaping brilliant minds across India.
          </p>
        </div>
      </section>

      {/* ---------------------------------- EXTENDED ABOUT ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <h2 className="text-4xl font-bold text-center mb-6">About Our Campus</h2>

        <p className="text-gray-300 text-lg leading-8">
          AKR University stands among one of the most reputable educational institutions in India,
          offering high-quality education, exceptional faculty, and world-class infrastructure.
          Our campus features modern classrooms, digital libraries, advanced laboratories, Wi-Fi–enabled
          study zones, hostel facilities, sports arenas, and research centers designed to help students
          achieve excellence in academics and personal growth.
        </p>

        <p className="text-gray-300 text-lg mt-5 leading-8">
          With over 20,000+ alumni and 25+ years of academic leadership, AKR University continues
          to empower students in Engineering, Medical Sciences, Commerce, Management, Arts, and Technology.
          Our mission is to provide a holistic education that builds leaders of tomorrow.
        </p>
      </section>

      {/* ---------------------------------- CONTACT CARDS ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-8">

        {/* Call */}
        <div className="bg-gray-900 p-8 rounded-xl shadow hover:scale-105 transition text-center border border-gray-700">
          <CallIcon className="text-blue-400 text-5xl mx-auto" />
          <h3 className="text-2xl mt-4 font-bold">Call Us</h3>
          <p className="text-gray-400 mt-2">+91 9876543210</p>
          <p className="text-gray-400">+91 9123456789</p>
        </div>

        {/* Email */}
        <div className="bg-gray-900 p-8 rounded-xl shadow hover:scale-105 transition text-center border border-gray-700">
          <EmailIcon className="text-red-400 text-5xl mx-auto" />
          <h3 className="text-2xl mt-4 font-bold">Email</h3>
          <p className="text-gray-400 mt-2">info@akrUniversity.com</p>
          <p className="text-gray-400">support@akrUniversity.com</p>
        </div>

        {/* Address */}
        <div className="bg-gray-900 p-8 rounded-xl shadow hover:scale-105 transition text-center border border-gray-700">
          <LocationOnIcon className="text-green-400 text-5xl mx-auto" />
          <h3 className="text-2xl mt-4 font-bold">Campus Location</h3>
          <p className="text-gray-400 mt-2">AKR University Main Campus</p>
          <p className="text-gray-400">Noida Sector 62, Uttar Pradesh, India</p>
        </div>

      </section>

      {/* ---------------------------------- OFFICE HOURS ---------------------------------- */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-blue-900/20 p-8 rounded-xl shadow-md flex items-center gap-4 border border-blue-700/40">
          <AccessTimeIcon className="text-blue-400 text-5xl" />
          <div>
            <h2 className="text-3xl font-bold">Office Hours</h2>
            <p className="text-gray-300 mt-2">Monday – Saturday : 9:00 AM – 6:00 PM</p>
            <p className="text-gray-300">Sunday : Closed</p>
          </div>
        </div>
      </section>

      {/* ---------------------------------- CONTACT FORM & MAP ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-10">

        {/* Form */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-md border border-gray-700">
          <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>

          <form className="space-y-5 text-lg">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-xl shadow-lg hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* GOOGLE MAP - NOIDA LOCATION */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            className="w-full h-full min-h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0802843965826!2d77.37163107518974!3d28.63044318241991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4fbd1c4c2d%3A0xbbb5b700c6a29c5a!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1706458390475"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AKR University Map"
          ></iframe>
        </div>

      </section>

      {/* ---------------------------------- SOCIAL MEDIA ---------------------------------- */}
      <section className="max-w-4xl mx-auto px-6 mt-16 mb-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Follow Us</h2>

        <div className="flex items-center justify-center gap-6">
          <a className="text-blue-400 hover:scale-125 transition">
            <FacebookIcon className="text-4xl" />
          </a>
          <a className="text-pink-400 hover:scale-125 transition">
            <InstagramIcon className="text-4xl" />
          </a>
          <a className="text-red-500 hover:scale-125 transition">
            <YouTubeIcon className="text-4xl" />
          </a>
        </div>
      </section>

    </div>
  );
}
