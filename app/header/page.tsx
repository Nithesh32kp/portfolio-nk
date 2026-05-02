import Link from "next/link"
import React from "react"

const navLinks = [
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/certificate", label: "Certificate" },
]

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-white via-blue-50 to-white shadow-sm backdrop-blur-sm transition-all duration-300">
            <nav className="max-w-6xl mx-auto px-3 py-4 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight hover:text-blue-700 transition-colors">
                    Nithesh.dev
                </Link>

                {/* Nav Links */}
                <ul className="flex items-center gap-6">
                    {navLinks.map(({ href, label }) => (
                        <li key={label}>
                            <Link
                                href={href}
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
                            >
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <span className="bg-yellow-200 rounded-sm text-amber-700 p-1 font-bold">
                        Hire me
                    </span>
                </div>
            </nav>
        </header>
    )
}