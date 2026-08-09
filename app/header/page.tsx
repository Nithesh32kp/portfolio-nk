"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-4 left-0 right-0 z-50">
            <div className="mx-auto max-w-6xl px-4">
                <nav className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 md:px-4 md:py-3 shadow-lg backdrop-blur-md">
                    <div className="flex items-center gap-1.5 md:gap-3">
                        <Link href="#home" className="flex items-center gap-2">
                            <Image src="/logo.png" alt="Nithesh Dev Logo" width={32} height={32} className="rounded-full border border-cyan-300/20 bg-slate-950/90" />
                            <span className="hidden md:inline font-semibold text-cyan-300 text-sm sm:text-base whitespace-nowrap">Full Stack Dev</span>
                        </Link>
                    </div>

                    <ul className="hidden items-center gap-6 md:flex">
                        {navLinks.map(({ href, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
                                >
                                    {label}
                                    <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2 md:gap-3">
                        <a
                            href="https://github.com/Nithesh32kp"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition hover:bg-cyan-400/20 md:h-auto md:w-auto md:inline-flex md:px-3 md:py-2 md:gap-2"
                        >
                            <svg className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .297a12 12 0 00-3.795 23.4c.6.111.82-.261.82-.58v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.305 3.495.998.108-.776.418-1.305.761-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 016.003 0c2.292-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.623-5.476 5.921.43.371.814 1.102.814 2.222v3.293c0 .322.218.697.825.58A12 12 0 0012 .297z" />
                            </svg>
                            <span className="hidden md:inline">GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nithesh-kumar-9126aa288/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition hover:bg-cyan-400/20 md:h-auto md:w-auto md:inline-flex md:px-3 md:py-2 md:gap-2"
                        >
                            <svg className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732 0-.928.784-1.73 1.75-1.73s1.75.802 1.75 1.73c0 .928-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.865 0-2.151 1.455-2.151 2.959v5.704h-3v-10h2.879v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.592v5.603z" />
                            </svg>
                            <span className="hidden md:inline">LinkedIn</span>
                        </a>

                        <a
                            href="#contact"
                            className="hidden rounded-md bg-cyan-400 px-3 py-2 font-semibold text-slate-950 transition hover:scale-105 md:inline-flex"
                            style={{ minWidth: 44, minHeight: 44 }}
                        >
                            Hire me
                        </a>

                        <button
                            aria-label="Toggle menu"
                            onClick={() => setOpen((s) => !s)}
                            className="inline-flex items-center justify-center rounded-md bg-transparent p-2.5 text-slate-300 transition hover:bg-slate-900/40 md:hidden"
                            style={{ minWidth: 44, minHeight: 44 }}
                        >
                            {open ? (
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </nav>

                <div className={`md:hidden fixed top-[72px] left-0 right-0 z-40 transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}>
                    <div className="mx-4 rounded-xl border border-white/10 bg-slate-950/95 p-4 shadow-lg backdrop-blur-md">
                        <ul className="flex flex-col gap-3">
                            {navLinks.map(({ href, label }) => (
                                <li key={label}>
                                    <Link href={href} onClick={() => setOpen(false)} className="block rounded px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900/60">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
