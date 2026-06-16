import React from "react";

const works = [
  { title: "React Development" },
  { title: "App Design & Development" },
  { title: "Course Website" },
  { title: "Mobile UI" },
  { title: "E-commerce" },
];

export default function RecentWorks() {
  return (
    <section>
      <h2 className="text-4xl font-anton mb-8 text-white">MY RECENT WORKS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {works.map((w, i) => (
          <div key={w.title} className="p-4">
            <div className="h-48 bg-blue-700 rounded mb-3 flex items-center justify-center text-white shadow-lg">Preview</div>
            <div className="text-white font-semibold">{w.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
