"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* 1. MAIN NAVBAR (Always on top) */}
            <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-50 border-b border-gray-100 shadow-sm flex items-center">
                <div className="container mx-auto px-6 flex items-center justify-between w-full">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                        <span className="text-2xl font-serif font-bold text-soluxe-blue">
                            Soluxe<span className="text-soluxe-red">.</span>
                        </span>
                    </Link>

                    {/* DESKTOP LINKS (Hidden on mobile) */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-soluxe-red transition-colors">HOME</Link>
                        <Link href="/rent" className="text-sm font-medium text-gray-600 hover:text-soluxe-red transition-colors">PROPERTIES</Link>
                        <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-soluxe-red transition-colors">ABOUT</Link>
                        <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-soluxe-red transition-colors">CONTACT</Link>
                        <Link href="/contact" className="bg-soluxe-blue text-white px-5 py-2.5 rounded text-xs font-bold tracking-widest hover:bg-soluxe-red transition-colors flex items-center gap-2">
                            <Phone className="w-3 h-3" /> BOOK CALL
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-soluxe-blue focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>

                </div>
            </nav>

            {/* 2. MOBILE MENU OVERLAY (Only shows when isOpen is true) */}
            {isOpen && (
                <div className="fixed inset-0 top-20 bg-white z-40 md:hidden flex flex-col p-6 space-y-6 overflow-y-auto">
                    <Link onClick={() => setIsOpen(false)} href="/" className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-4">
                        Home
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="/rent" className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-4">
                        Properties
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="/about" className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-4">
                        About Us
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="/contact" className="text-lg font-medium text-gray-800 border-b border-gray-100 pb-4">
                        Contact
                    </Link>

                    <Link onClick={() => setIsOpen(false)} href="/contact" className="bg-soluxe-blue text-white py-4 rounded text-center font-bold tracking-widest shadow-lg mt-4">
                        BOOK INSPECTION
                    </Link>
                </div>
            )}
        </>
    );
}