import Link from "next/link";
import { Phone, Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 h-24 flex items-center justify-between relative z-10">

                {/* LOGO AREA - SLIMMED DOWN */}
                <Link href="/" className="group relative">
                    <div className="absolute inset-0 bg-white/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Reduced padding (py-2) to make it less bulky */}
                    <div className="relative bg-white/90 backdrop-blur-xl border border-white/50 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                        <img
                            src="/images/logo.png"
                            alt="Soluxe Homes"
                            className="h-8 md:h-10 w-auto object-contain"
                        />
                    </div>
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link href="/" className="text-white font-bold uppercase tracking-widest text-xs hover:text-soluxe-red transition-colors drop-shadow-md">Home</Link>
                    <Link href="/rent" className="text-white font-bold uppercase tracking-widest text-xs hover:text-soluxe-red transition-colors drop-shadow-md">Properties</Link>
                    <Link href="/about" className="text-white font-bold uppercase tracking-widest text-xs hover:text-soluxe-red transition-colors drop-shadow-md">About</Link>
                    <Link href="/contact" className="text-white font-bold uppercase tracking-widest text-xs hover:text-soluxe-red transition-colors drop-shadow-md">Contact</Link>
                </div>

                {/* CTA BUTTON */}
                <div className="hidden md:flex">
                    <Link href="/contact" className="flex items-center gap-2 bg-soluxe-red text-white px-6 py-2.5 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-soluxe-red transition-all shadow-xl rounded-sm border-2 border-transparent hover:border-soluxe-red">
                        <Phone className="h-4 w-4" />
                        Book Call
                    </Link>
                </div>

                {/* MOBILE MENU */}
                <button className="md:hidden text-white bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </nav>
    );
}