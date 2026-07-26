import React from "react";
import profile from "@/public/image.png";
import Image from "next/image";

const highlights = ["Next.js", "React Native", "TypeScript", "React.js", "Laravel", "REST APIs"];

export default function Hero() {
    return (
        <section id="home" className="mt-10">
            <div className="card rounded-4xl border border-cyan-400/20 bg-slate-950/80 p-6 shadow-2xl lg:p-10 xl:p-12">
                <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                            <span className="font-mono">&lt;C/&gt;</span>
                            <span>Full Stack Developer • 2.5+ Years Experience</span>
                        </div>

                        <div>
                            <h1 className="text-5xl font-extrabold leading-[0.92] tracking-tight text-white md:text-6xl">
                                Building scalable web apps with
                                <span className="mt-3 block text-cyan-400">Next.js, TypeScript, Laravel & MySQL</span>
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

                        <div className="flex flex-wrap gap-2">
                            {highlights.map((item) => (
                                <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-sm">
                        <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                        <div className="absolute -right-6 bottom-4 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />

                        <div className="relative overflow-hidden rounded-4xl border border-cyan-400/20 bg-slate-900/80 p-4">
                            <div className="relative h-105 w-full overflow-hidden rounded-[1.75rem] bg-linear-to-br from-slate-800 to-slate-900">
                                <Image src={profile} alt="Profile" fill className="rounded-[1.75rem] object-cover" />
                            </div>

                            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-cyan-300">
                                <span className="font-mono">Available for freelance</span>
                            </div>

                            <div className="absolute bottom-6 right-6 rounded-3xl border border-cyan-400/20 bg-slate-950/80 px-4 py-3 text-xs font-semibold text-slate-200">
                                React • Next • Laravel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
