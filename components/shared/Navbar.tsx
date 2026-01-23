"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-50 border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-6 h-full flex items-center justify-between relative">

                {/* 1. LOGO IMAGE (Replaces text) */}
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    {/* This loads your logo file. h-10 sets the height, w-auto keeps the shape correct */}
                    <img
                        src="/images/logo.png"
                        alt="Soluxe Homes"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* 2. DESKTOP MENU (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-gray-600 hover:text-soluxe-red transition-colors">HOME</Link>
                    <Link href="/rent" className="text-sm font-medium text-gray-600 hover:text-soluxe-red transition-colors">PROPERTIES</Link>
                    <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-soluxe-red transition-colors">ABOUT</Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-soluxe-red transition-colors">CONTACT</Link>

                    <Link href="/contact" className="bg-soluxe-blue text-white px-5 py-2.5 rounded text-xs font-bold tracking-widest hover:bg-soluxe-red transition-colors flex items-center gap-2">
                        <Phone className="w-3 h-3" /> BOOK CALL
                    </Link>
                </div>

                {/* 3. MOBILE HAMBURGER BUTTON */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-soluxe-blue focus:outline-none"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* 4. MOBILE DROPDOWN (Clean Professional List) */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col animate-in slide-in-from-top-2 duration-200">
                        <Link onClick={() => setIsOpen(false)} href="/" className="px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-50">
                            HOME
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/rent" className="px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-50">
                            PROPERTIES
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/about" className="px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-50">
                            ABOUT US
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="/contact" className="px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-50">
                            CONTACT
                        </Link>
                        <div className="p-6 bg-gray-50">
                            <Link onClick={() => setIsOpen(false)} href="/contact" className="block w-full bg-soluxe-blue text-white text-center py-3 rounded text-sm font-bold tracking-widest">
                                BOOK INSPECTION
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
}