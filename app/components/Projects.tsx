import React from "react";

const projects = [
  {
    title: "Vendor App/Store",
    desc: "A vendor-oriented store experience built to streamline product oversight, order handling, and day-to-day operations for business teams.",
    stack: ["Laravel", "Livewire", "MySQL", "REST APIs"],
    link: "https://vendors.bhangarukalasam.com/login",
  },
  {
    title: "Sales Manager Store",
    desc: "A practical sales management platform focused on lead tracking, customer activity, and performance visibility for growing teams.",
    stack: ["Laravel", "Livewire", "MySQL", "REST APIs"],
    link: "https://sales.bhangarukalasam.com/login",
  },
  {
    title: "Store My Truck",
    desc: "A mobile-friendly logistics and booking experience built to help users manage service requests and track operations efficiently.",
    stack: ["React Native", "Tailwind CSS", "REST APIs"],
    link: "https://www.storemytruck.com/",
  },
  {
    title: "Shankara Hospital",
    desc: "A healthcare-focused web experience created to support appointment flow, patient information access, and service discovery with a simple UI.",
    stack: ["React Native", "Tailwind CSS", "Laravel"],
    link: "https://sankaraeye.com",
  },
  {
    title: "E-Commerce Store",
    desc: "A live storefront with a custom catalog experience, product management flows, and a polished shopping journey built for a growing retail brand.",
    stack: ["Next.js", "DaisyUI", "Laravel",'Tailwind CSS', "REST APIs", "MySQL", "TypeScript"],
    link: "https://shop.bhangarukalasam.com/login",
  },
  {
    title: "BKJS Customer App",
    desc: "A live web or mobile application built to deliver a smooth user experience and support real business workflows.",
    stack: ["Laravel", "REST APIs"],
    link: "https://play.google.com/store/apps/details?id=com.bhangarukalasam.bkjs",
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
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-cyan-300 underline decoration-cyan-400/50 underline-offset-4"
            >
              View Live Site
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
