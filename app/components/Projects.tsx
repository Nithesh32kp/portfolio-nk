import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Vendor App/Store",
    desc: "A vendor-oriented store experience built to streamline product oversight, order handling, and day-to-day operations for business teams.",
    stack: ["Laravel", "Livewire", "MySQL", "REST APIs"],
    link: "https://vendors.bhangarukalasam.com/login",
    image: "/project/vendor-app.png",
  },
  {
    title: "Sales Manager Store",
    desc: "A practical sales management platform focused on lead tracking, customer activity, and performance visibility for growing teams.",
    stack: ["Laravel", "Livewire", "MySQL", "REST APIs"],
    link: "https://sales.bhangarukalasam.com/login",
    image: "/project/sales-manager.png",
  },
  {
    title: "Store My Truck",
    desc: "A mobile-friendly logistics and booking experience built to help users manage service requests and track operations efficiently.",
    stack: ["React Native", "Tailwind CSS", "REST APIs"],
    link: "https://www.storemytruck.com/",
    image: "/project/store-my-truck.png",
  },
  {
    title: "Shankara Hospital",
    desc: "A healthcare-focused web experience created to support appointment flow, patient information access, and service discovery with a simple UI.",
    stack: ["React Native", "Tailwind CSS", "Laravel"],
    link: "https://sankaraeye.com",
    image: "/project/shankara-hospital.png",
  },
  {
    title: "E-Commerce Store",
    desc: "A live storefront with a custom catalog experience, product management flows, and a polished shopping journey built for a growing retail brand.",
    stack: ["Next.js", "DaisyUI", "Laravel",'Tailwind CSS', "REST APIs", "MySQL", "TypeScript"],
    link: "https://shop.bhangarukalasam.com/login",
    image: "/project/ecommerce-store.png",
  },
  {
    title: "Mobile/App project",
    desc: "A live web or mobile application built to deliver a smooth user experience and support real business workflows.",
    stack: ["Laravel", "REST APIs"],
    link: "https://play.google.com/store/apps/details?id=com.bhangarukalasam.bkjs",
    image: "/project/mobile-app-project.png",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="mb-6 text-3xl font-anton text-white">Selected projects</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg">
              <div className="mb-4 rounded-md overflow-hidden">
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-linear-to-br from-slate-800 to-slate-700">
                  <Image src={project.image} alt={`${project.title} - live site screenshot`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-center" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-slate-950/40 rounded px-3 py-2">
                      <a href={project.link} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950">
                        View Live Site
                      </a>
                    </div>
                  </div>
                </div>
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
            </article>
          ))}
        </div>
    </section>
  );
}
