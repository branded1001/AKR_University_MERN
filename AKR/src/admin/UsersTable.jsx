import React from "react";

export default function UsersTable() {
  const users = [
    { name: "Aman Kumar", email: "aman@gmail.com", course: "B.Tech" },
    { name: "Riya Sharma", email: "riya@gmail.com", course: "MBA" },
  ];

  return (
    <div className="bg-[#111117] p-6 rounded-xl shadow-lg mb-10">
      <h3 className="text-2xl font-bold mb-4">Registered Users</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="py-3">Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={i} className="border-b border-gray-700">
              <td className="py-2">{u.name}</td>
              <td>{u.email}</td>
              <td>{u.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
