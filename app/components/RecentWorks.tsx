import React from "react";

const recentWorks = [
  {
    title: "Bhangaru Kalasam E-Commerce",
    desc: "Live company storefront with custom catalogue and inventory management.",
    tech: ["Next.js", "DaisyUI", "Laravel", "MySQL"],
    status: "Live",
  },
  {
    title: "Customer App — E-Commerce",
    desc: "Mobile and web app for customers with order tracking and payments.",
    tech: ["React Native", "Next.js", "REST APIs"],
    status: "Complete",
  },
  {
    title: "Investor App — Dashboard",
    desc: "Financial dashboard with portfolio analytics and real-time reporting.",
    tech: ["React.js", "TypeScript", "Node.js", "MySQL"],
    status: "Complete",
  },
  {
    title: "Admin Portal",
    desc: "Operations system for user, inventory, and transaction management.",
    tech: ["Laravel", "Livewire", "Tailwind CSS"],
    status: "Complete",
  },
  {
    title: "REST API Development",
    desc: "Scalable backend APIs connecting multiple platforms and services.",
    tech: ["Laravel", "Node.js", "MySQL", "REST APIs"],
    status: "Complete",
  },
  {
    title: "Analytics & Reporting",
    desc: "Real-time analytics platform with custom dashboards and exports.",
    tech: ["React.js", "Chart.js", "Laravel", "MySQL"],
    status: "In-progress",
  },
];

export default function RecentWorks() {
  return (
    <section>
      <h2 className="text-4xl font-anton mb-8 text-white">MY RECENT WORKS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentWorks.map((work) => (
          <div key={work.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg overflow-hidden">
            <div className="h-40 rounded-md mb-4 bg-linear-to-br from-slate-800 to-slate-700 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                {work.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">{work.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{work.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {work.tech.map((t) => (
                <span key={t} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-xs font-semibold text-cyan-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

