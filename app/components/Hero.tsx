import React from "react";
import profile from "@/public/image.png";
import Image from "next/image";

const skillGroups = [
    {
        title: "Frontend",
        items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "DaisyUI"],
    },
    {
        title: "Backend",
        items: ["Laravel", "Node.js", "REST APIs", "Livewire"],
    },
    {
        title: "Database & DevOps",
        items: ["MySQL", "PostgreSQL", "Supabase", "Docker"],
    },
    {
        title: "Mobile",
        items: ["React Native"],
    },
];

export default function Hero() {
    return (
        <section id="home" className="mt-10">
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/85 p-6 shadow-[0_0_80px_rgba(34,211,238,0.12)] lg:p-10 xl:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.12),_transparent_32%)]" />

                <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                            <span className="font-mono">&lt;C/&gt;</span>
                            <span>Full Stack Developer • 2.5+ Years Experience</span>
                        </div>

                        <div className="max-w-3xl">
                            <h1 className="font-anton text-4xl font-normal leading-[1.1] tracking-normal text-white sm:text-5xl lg:text-6xl">
                                <span className="block">Building scalable web apps with</span>
                                <span className="mt-4 block leading-[1.1] text-cyan-400">Next.js, TypeScript, Laravel & MySQL</span>
                            </h1>
                        </div>

                        <p className="max-w-2xl text-sm text-slate-300 md:text-base">
                            I design and ship modern web platforms for startups and growing businesses, combining polished front ends with robust backend systems, secure APIs, and reliable databases.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                                Explore Projects
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200">
                                Let&apos;s Talk
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
                        <div className="absolute left-4 top-4 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
                        <div className="absolute bottom-2 right-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />

                        <div className="relative w-full overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-4 shadow-2xl">
                            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-cyan-300">
                                <span className="font-mono">Available for freelance</span>
                            </div>

                            <div className="absolute bottom-6 right-6 rounded-full border border-cyan-400/20 bg-slate-950/80 px-4 py-3 text-xs font-semibold text-slate-200">
                                React • Next • Laravel
                            </div>

                            <div className="relative h-[26rem] overflow-hidden rounded-[1.5rem] bg-linear-to-br from-slate-800 via-slate-900 to-slate-950">
                                <Image src={profile} alt="Profile" fill className="object-cover" />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-slate-900/10" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Core Stack</span>
                    </div>

                    <div className="space-y-3">
                        {skillGroups.map((group) => (
                            <div key={group.title} className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                                <span className="text-sm font-semibold text-cyan-300">{group.title}</span>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
