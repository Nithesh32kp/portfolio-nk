import React from "react";

const projects = [
  {
    title: "Bhangaru Kalasam — E‑commerce Store",
    desc: "Live e‑commerce storefront with a custom catalogue layout and product management. Next.js front-end using DaisyUI and a Laravel REST API backend.",
    stack: ["Next.js", "DaisyUI", "Laravel", "REST APIs", "MySQL"," TypeScript"],
    link: "https://shop.bhangarukalasam.com/login",
  },
 {
    title: "Investor App",
    desc: "A secure investment management platform that enables investors to track portfolios, monitor returns, access financial reports, and receive real-time investment insights.",
    stack: ["Next.js", "TypeScript", "Laravel", "MySQL"],
    link: "#contact",
  },
  {
    title: "Vendor App",
    desc: "A comprehensive vendor management system for managing products, inventory, orders, payments, and business performance through a fast and responsive interface.",
    stack: ["Laravel", "Livewire", "MySQL", "REST API"],
    link: "#contact",
  },
  {
    title: "Sales Manager App",
    desc: "A sales management application designed to streamline lead tracking, customer management, sales performance monitoring, and reporting with a dynamic admin dashboard.",
    stack: ["Laravel", "Livewire", "MySQL", "REST API"],
    link: "#contact",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="mb-6 text-3xl font-anton text-white">Selected projects</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg">
            <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-linear-to-br from-slate-800 to-slate-700 text-sm text-slate-300">
              Featured build
            </div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{project.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="mt-5 inline-block text-sm font-semibold text-cyan-300 underline decoration-cyan-400/50 underline-offset-4">
              Discuss this project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
