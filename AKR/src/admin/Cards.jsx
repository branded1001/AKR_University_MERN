import React from "react";

export default function Cards() {
  const cardDetails = [
    { title: "Total Students", value: "12,540" },
    { title: "Admissions Requests", value: "835" },
    { title: "Courses", value: "145" },
    { title: "Colleges", value: "24" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-10">
      {cardDetails.map((data, index) => (
        <div
          key={index}
          className="p-6 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 shadow-xl"
        >
          <h3 className="text-lg">{data.title}</h3>
          <h2 className="text-3xl font-bold mt-2">{data.value}</h2>
        </div>
      ))}
    </div>
  );
}
