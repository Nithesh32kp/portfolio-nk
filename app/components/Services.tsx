import React from "react";
import Link from "next/link";

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Building responsive, modern web apps with React.js, Next.js, and Laravel",
  },
  {
    slug: "admin-panels",
    title: "Admin Panels & Dashboards",
    desc: "Dynamic admin panels and dashboards using Livewire, Tailwind CSS, and TypeScript",
  },
  {
    slug: "api-integration",
    title: "API Integration",
    desc: "Seamless REST API integration and database optimization for scalable apps",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-12">
      <section className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-anton mb-8 text-white">MY SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.slug} className="p-4 card">
              <div className="h-40 rounded-md mb-4 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-700">
                <Link href={`/service/${s.slug}`}>
                  <button className="bg-yellow-400 px-4 py-2 rounded font-semibold">
                    See Details
                  </button>
                </Link>
              </div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-muted mt-2">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}