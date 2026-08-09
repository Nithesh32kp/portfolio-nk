import React from "react";

const services = [
  {
    slug: "ecommerce-website",
    title: "E-Commerce Website Development",
    desc: "End-to-end e-commerce storefronts with custom catalogues, product management, and inventory tracking — built for real businesses to sell online.",
    stack: ["Next.js", "Laravel", "MySQL", "DaisyUI"],
  },
  {
    slug: "ecommerce-api",
    title: "REST API Development for E-Commerce",
    desc: "Scalable backend APIs powering e-commerce platforms — handling products, orders, payments, and inventory with secure, well-structured endpoints.",
    stack: ["Laravel", "REST APIs", "MySQL", "PostgreSQL"],
  },
  {
    slug: "mobile-web-api",
    title: "Mobile & Web App API Development",
    desc: "Custom REST APIs built to power mobile and web applications, enabling smooth data flow between front-end apps and backend systems.",
    stack: ["Laravel", "REST APIs", "Node.js"],
  },
  {
    slug: "app-design",
    title: "App Design (UI/UX)",
    desc: "Clean, functional app interfaces designed for usability — from wireframes to polished front-end implementation for web and mobile apps.",
    stack: ["Figma", "React Native", "Next.js", "TypeScript"],
  },
  {
    slug: "database-debugging",
    title: "Database Management & Debugging",
    desc: "Hands-on database setup, live deployment, and troubleshooting — from connecting production databases to diagnosing and fixing backend errors, ensuring systems run reliably.",
    stack: ["MySQL", "PostgreSQL", "Laravel", "Debugging", "Problem Solving"],
  },
  {
    slug: "deployment-hosting",
    title: "Deployment & Hosting",
    desc: "Taking applications from local development to production — configuring live servers, connecting cloud databases, and setting up reliable, publicly accessible APIs.",
    stack: ["Render", "Docker", "Supabase", "CI/CD"],
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