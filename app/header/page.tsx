import Link from "next/link";
import React from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="fixed top-4 left-0 right-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <nav className="flex items-center justify-between backdrop-blur-md panel rounded-xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2">
                              <div className="w-9 h-9 rounded-md bg-gradient-to-tr from-teal-400 to-cyan-400 flex items-center justify-center text-gray-900 font-bold">&lt;C/&gt;</div>
                              <span className="font-semibold text-teal-300">Softer</span>
                        </Link>
                    </div>

                    <ul className="hidden md:flex items-center gap-6">
                        {navLinks.map(({ href, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                      className="text-sm font-medium text-muted text-gray-300 hover:text-teal-300 transition-colors relative group"
                                >
                                    {label}
                                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <a href="#" className="text-gray-300 hover:text-teal-300 transition" aria-label="LinkedIn">LinkedIn</a>
                        <a href="#" className="text-gray-300 hover:text-teal-300 transition" aria-label="Github">GitHub</a>
                        <Link href="/contact" className="ml-2 px-3 py-1.5 bg-teal-400 text-gray-900 rounded-md font-semibold hover:scale-105 transform transition">Hire me</Link>
                        <button className="md:hidden ml-2 text-gray-200">Menu</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
