    import React from "react";
    import profile from "@/public/image.png";
    import Image from "next/image";

    export default function Hero() {
        return (
            <section className="mt-10">
                <div className="card rounded-[2rem] border border-cyan-400/20 bg-slate-950/80 p-6 lg:p-10 xl:p-12 shadow-2xl">
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                                <span className="font-mono">&lt;C/&gt;</span>
                                <span>Full Stack Developer</span>
                            </div>

                            <div>
                                <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.92] tracking-tight text-white">
                                    Full Stack
                                    <br />
                                    <span className="text-cyan-400">Developer</span>
                                </h1>
                            </div>

                            <p className="max-w-2xl text-slate-300 text-sm md:text-base">
                               Full-stack web developer with experience building responsive
                                applications, admin panels, and API integrations for business
                                and e-commerce platforms. Skilled in JavaScript, PHP, and
                                modern frameworks, with a focus on team collaboration and
                                delivering scalable, user-aligned solutions.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                                >
                                    View Resume
                                </a>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-sm">
                            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                            <div className="absolute -right-6 bottom-4 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-4">
                                <div className="relative h-[420px] w-full rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                                    <Image src={profile} alt="Profile" fill className="object-cover rounded-[1.75rem]" />
                                </div>

                                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-cyan-300">
                                    <span className="font-mono">Full Stack Developer</span>
                                    {/* <span>Developer</span> */}
                                </div>

                                <div className="absolute right-6 bottom-6 rounded-3xl border border-cyan-400/20 bg-slate-950/80 px-4 py-3 text-xs font-semibold text-slate-200">
                                    Web design • Mobile UI
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
