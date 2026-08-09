import Link from "next/link";
import React from "react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="fixed top-4 left-0 right-0 z-50">
            <div className="mx-auto max-w-6xl px-4">
                <nav className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-lg backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <Link href="#home" className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-linear-to-tr from-cyan-400 to-teal-400 font-bold text-slate-950">&lt;N/&gt;</div>
                            <span className="font-semibold text-cyan-300">Full Stack Dev</span>
                        </Link>
                    </div>

                    <ul className="hidden items-center gap-6 md:flex">
                        {navLinks.map(({ href, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
                                >
                                    {label}
                                    <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-cyan-300" aria-label="GitHub">GitHub</a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-cyan-300" aria-label="LinkedIn">LinkedIn</a>
                        <a href="#contact" className="ml-2 rounded-md bg-cyan-400 px-3 py-1.5 font-semibold text-slate-950 transition hover:scale-105">Hire me</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
