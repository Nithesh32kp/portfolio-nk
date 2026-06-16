import React from "react";

const steps = [
  { title: "Research & Discovery", desc: "Understand goals, audience, and requirements." },
  { title: "Ideation & Planning", desc: "Outline structure and flow of the product." },
  { title: "Design & Development", desc: "Create visually appealing and functional interfaces." },
  { title: "Launch & Deliver", desc: "Deliver the product and ensure long-term success." },
];

export default function WorkProcess() {
  return (
    <section>
      <h2 className="text-4xl font-anton mb-8 text-white">MY WORK PROCESS</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="p-4 card">
            <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-700 rounded mb-3" />
            <h3 className="font-bold text-white">{i + 1}. {s.title}</h3>
            <p className="text-sm text-muted mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
