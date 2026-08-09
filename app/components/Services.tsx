import React from "react";

const services = [
  {
    slug: "web-development",
    title: "Modern Web Applications",
    desc: "Responsive front ends and scalable application architecture for products that need to grow.",
    stack: ["Next.js", "React.js", "TypeScript"],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps built with React Native for fast, efficient deployment.",
    stack: ["React Native", "JavaScript", "TypeScript"],
  },
  {
    slug: "admin-panels",
    title: "Admin Panels & Dashboards",
    desc: "Operational dashboards with clean data flows, reporting, and user-friendly management tools.",
    stack: ["Laravel", "Livewire", "Tailwind CSS"],
  },
  {
    slug: "api-integration",
    title: "REST API Development",
    desc: "Reliable APIs and database-backed integrations that keep business systems connected smoothly.",
    stack: ["REST APIs", "MySQL", "Laravel"],
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-16 lg:px-12">
      <section id="services" className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-4xl font-anton text-white">My services</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg">
              <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-linear-to-br from-slate-800 to-slate-700 text-sm text-slate-300">
                <a href="#contact" className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950">
                  Discuss this service
                </a>
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{service.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}