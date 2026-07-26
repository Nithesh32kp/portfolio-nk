import React from "react";

const workExamples = [
  {
    title: "Customer App",
    category: "E-Commerce",
    desc: "Built a customer-facing e-commerce mobile and web app with order tracking, payment integration, and personalized recommendations.",
    tech: ["React Native", "Next.js", "Laravel", "REST APIs"],
  },
  {
    title: "Investor App",
    category: "Financial Dashboard",
    desc: "Developed a comprehensive investor dashboard with real-time portfolio analytics, performance tracking, and reporting tools.",
    tech: ["React.js", "TypeScript", "Node.js", "MySQL"],
  },
  {
    title: "Admin Portal",
    category: "Operations",
    desc: "Created a full-featured admin system for managing users, inventory, transactions, and generating business insights.",
    tech: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
  },
  {
    title: "API Integration",
    category: "Backend",
    desc: "Designed and deployed scalable REST APIs connecting multiple platforms and third-party services seamlessly.",
    tech: ["Laravel", "REST APIs", "Node.js", "PostgreSQL"],
  },
];

export default function WorkProcess() {
  return (
    <section>
      <h2 className="text-4xl font-anton mb-8 text-white">MY WORK PROCESS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workExamples.map((work) => (
          <div key={work.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg">
            <div className="h-40 rounded-md mb-4 bg-linear-to-br from-slate-800 to-slate-700 flex items-center justify-center text-sm text-slate-300">
              {work.category}
            </div>
            <h3 className="text-xl font-semibold text-white">{work.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{work.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {work.tech.map((t) => (
                <span key={t} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-300">
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
