import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Central service data — keep slugs in sync with app/service/page.tsx
const services = {
  "web-development": {
    title: "Web Development",
    tagline: "Responsive, production-ready web apps",
    description:
      "I build modern, responsive web applications from the ground up using React.js, Next.js, and Laravel. From component architecture to deployment, I focus on clean, maintainable code that scales with your business.",
    highlights: [
      "React.js & Next.js front-ends with TypeScript",
      "Laravel & Livewire back-ends",
      "Tailwind CSS for fast, responsive styling",
      "Performance and SEO-conscious builds",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Laravel", "Tailwind CSS"],
  },
  "admin-panels": {
    title: "Admin Panels & Dashboards",
    tagline: "Dynamic dashboards that make data usable",
    description:
      "I design and build admin panels and dashboards that give teams real control over their data — vendor management, payroll, logistics, and reporting modules built for daily operational use.",
    highlights: [
      "Dynamic dashboards with Livewire & React.js",
      "Role-based access and workflow management",
      "Reporting and analytics modules",
      "Built for non-technical end users",
    ],
    stack: ["Livewire", "React.js", "TypeScript", "Tailwind CSS", "MySQL"],
  },
  "api-integration": {
    title: "API Integration",
    tagline: "Seamless, optimized data connections",
    description:
      "I integrate REST APIs and optimize databases so your applications run efficiently. From third-party services to internal systems, I make sure data flows reliably across your stack.",
    highlights: [
      "REST API design & integration",
      "Database optimization and query tuning",
      "Workflow automation between systems",
      "Secure, scalable data handling",
    ],
    stack: ["REST APIs", "Node.js", "MySQL", "Laravel"],
  },
  "mobile-development": {
    title: "Mobile App Development",
    tagline: "Native and cross-platform mobile solutions",
    description:
      "I build high-performance mobile applications using React Native for iOS and Android. From e-commerce apps to custom business solutions, I deliver responsive and efficient mobile experiences.",
    highlights: [
      "React Native apps for iOS & Android",
      "Cross-platform development with shared codebase",
      "Native modules and performance optimization",
      "Seamless API integration with backend systems",
    ],
    stack: ["React Native", "JavaScript", "TypeScript", "REST APIs", "Firebase"],
  },
} as const;

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          ← Back to home
        </Link>

        <div className="mt-8 rounded-4xl border border-cyan-400/20 bg-slate-900/60 p-8 shadow-2xl lg:p-12">
          <p className="font-mono text-sm text-cyan-400">{service.tagline}</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {service.title}
          </h1>

          <p className="mt-6 max-w-2xl text-slate-300 text-base leading-relaxed">
            {service.description}
          </p>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              What's included
            </h2>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-200"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Tech stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}