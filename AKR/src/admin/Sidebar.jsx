import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BookIcon from "@mui/icons-material/Book";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#111117] h-screen p-6 sticky top-0">
      <h1 className="text-3xl font-bold mb-10 text-blue-500">
        AKR Admin
      </h1>

      <nav className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-[#1A1A22] rounded-lg cursor-pointer">
          <DashboardIcon /> Dashboard
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-[#1A1A22] rounded-lg cursor-pointer">
          <PeopleIcon /> Users
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-[#1A1A22] rounded-lg cursor-pointer">
          <AssignmentIcon /> Admission Requests
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-[#1A1A22] rounded-lg cursor-pointer">
          <BookIcon /> Courses
        </div>

        <div className="flex items-center gap-3 p-3 hover:bg-[#1A1A22] rounded-lg cursor-pointer">
          <SchoolIcon /> Colleges
        </div>
      </nav>
    </div>
  );
}
