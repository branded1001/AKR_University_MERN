import React from "react";

export default function AdmissionRequests() {
  const requests = [
    { name: "Mohit", course: "BCA", status: "Pending" },
    { name: "Sneha", course: "B.Tech", status: "Approved" },
  ];

  return (
    <div className="bg-[#111117] p-6 rounded-xl shadow-lg mb-10">
      <h3 className="text-2xl font-bold mb-4">Admission Requests</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-600">
            <th>Name</th>
            <th>Course</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req, i) => (
            <tr key={i} className="border-b border-gray-700">
              <td className="py-3">{req.name}</td>
              <td>{req.course}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded text-sm ${
                    req.status === "Approved"
                      ? "bg-green-600"
                      : "bg-yellow-600"
                  }`}
                >
                  {req.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
