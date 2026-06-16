import React from "react";

const services = [
  {
    title: "Web Design",
    desc: "We create modern, responsive, stunning websites",
  },
  { title: "App Design", desc: "Sleek, intuitive app designs that enhance UX" },
  { title: "360 Development", desc: "From front-end to back-end, clean efficient code" },
];

export default function Services() {
  return (
    <section>
      <h2 className="text-4xl font-anton mb-8 text-white">MY SERVICES</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <article key={s.title} className="p-4 card">
            <div className="h-40 rounded-md mb-4 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-700">
              <button className="bg-yellow-400 px-4 py-2 rounded font-semibold">See Details</button>
            </div>
            <h3 className="text-xl font-semibold text-white">{s.title}</h3>
            <p className="text-sm text-muted mt-2">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
