import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Cards from "./Cards";
import Analytics from "./Analytics";
import UsersTable from "./UsersTable";
import AdmissionRequests from "./AdmissionRequests";
import CoursesTable from "./CoursesTable";

export default function AdminDashboard() {
  return (
    <div className="flex bg-[#0F0F14] text-white min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        
        {/* Header */}
        <Header />

        {/* Stats Cards */}
        <Cards />

        {/* Analytics Chart */}
        <Analytics />

        {/* Users Table */}
        <UsersTable />

        {/* Admission Requests */}
        <AdmissionRequests />

        {/* Courses Table */}
        <CoursesTable />
      </div>

    </div>
  );
}
