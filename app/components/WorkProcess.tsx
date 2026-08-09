import React from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "I start by understanding your goals, audience, and constraints so the build is shaped around real business needs.",
  },
  {
    number: "02",
    title: "Design",
    desc: "I turn the requirements into a clear structure with clean flows, user-friendly screens, and a scalable technical plan.",
  },
  {
    number: "03",
    title: "Build",
    desc: "I develop the product in focused iterations, keeping the frontend, backend, and APIs aligned from day one.",
  },
  {
    number: "04",
    title: "Test & Deploy",
    desc: "I validate performance, refine the experience, and launch everything with stability, documentation, and room to grow.",
  },
];

export default function WorkProcess() {
  return (
    <section>
      <h2 className="mb-8 text-4xl font-anton text-white">My work process</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
