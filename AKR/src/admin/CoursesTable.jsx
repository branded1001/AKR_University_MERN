import React from "react";

export default function CoursesTable() {
  const courses = [
    { id: 1, name: "B.Tech (CSE)", duration: "4 Years" },
    { id: 2, name: "MBA", duration: "2 Years" },
  ];

  return (
    <div className="bg-[#111117] p-6 rounded-xl shadow-lg mb-10">
      <h3 className="text-2xl font-bold mb-4">Courses Management</h3>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-600">
            <th>ID</th>
            <th>Course Name</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((c, i) => (
            <tr key={i} className="border-b border-gray-700">
              <td className="py-3">{c.id}</td>
              <td>{c.name}</td>
              <td>{c.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
