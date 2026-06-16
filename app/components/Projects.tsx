import React from "react";

const sample = [
  {
    title: "Project One",
    desc: "A modern web app built with React and Next.js.",
    link: "#",
  },
  {
    title: "Project Two",
    desc: "Design system and component library for consistent UI.",
    link: "#",
  },
  {
    title: "Project Three",
    desc: "Performance-focused site with accessibility in mind.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-anton mb-6 text-white">Selected projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sample.map((p) => (
          <article key={p.title} className="card p-6 rounded-lg">
            <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-300">Preview</div>
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-muted text-sm">{p.desc}</p>
            <a href={p.link} className="mt-4 inline-block text-teal-300 underline">View project</a>
          </article>
        ))}
      </div>
    </section>
  );
}
