import React from "react";
import Image from "next/image";

const services = [
  {
    slug: "web-development",
    title: "Modern Web Applications",
    desc: "Responsive front ends and scalable application architecture for products that need to grow.",
    stack: ["Next.js", "React.js", "TypeScript"],
    image: "/service/web-apps.png",
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps built with React Native for fast, efficient deployment.",
    stack: ["React Native", "JavaScript", "TypeScript"],
    image: "/service/mobile-app.png",
  },
  {
    slug: "admin-panels",
    title: "Admin Panels & Dashboards",
    desc: "Operational dashboards with clean data flows, reporting, and user-friendly management tools.",
    stack: ["Laravel", "Livewire", "Tailwind CSS"],
    image: "/service/dashboard.png",
  },
  {
    slug: "api-integration",
    title: "REST API Development",
    desc: "Reliable APIs and database-backed integrations that keep business systems connected smoothly.",
    stack: ["REST APIs", "MySQL", "Laravel"],
    image: "/service/api.png",
  },
  {
    slug: "database-debugging",
    title: "Database Management & Debugging",
    desc: "Hands-on database setup, live deployment, and troubleshooting — from connecting production databases to diagnosing and fixing backend errors, ensuring systems run reliably.",
    stack: ["MySQL", "PostgreSQL", "Laravel", "Debugging", "Problem Solving"],
    image: "/service/database-debug.png",
  },
  {
    slug: "deployment-hosting",
    title: "Deployment & Hosting",
    desc: "Containerized deployments, CI/CD pipelines, and managed hosting setups to keep production systems healthy and scalable.",
    stack: ["Docker", "Render", "Vercel"],
    image: "/service/deployment.png",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-16 lg:px-12">
      <section id="services" className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-4xl font-anton text-white">My services</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg">
              <div className="mb-4 rounded-md overflow-hidden bg-linear-to-br from-slate-800 to-slate-700 text-sm text-slate-300">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={`${service.title} - ${service.desc.split('.')[0]} icon`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-slate-950/40 rounded px-3 py-2">
                      <a href="#contact" className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950">
                        Discuss this service
                      </a>
                    </div>
                  </div>
                </div>
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