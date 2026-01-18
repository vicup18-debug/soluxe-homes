import Link from "next/link";
import { Phone, Menu, Search } from "lucide-react";

export default function Navbar() {
    return (
        // TRANSPARENT GLASS EFFECT (Blends with Hero)
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/60 to-transparent">
            <div className="container mx-auto px-6 h-28 flex items-center justify-between">

                {/* LOGO: Wrapped in a soft white glow to ensure visibility on dark images */}
                <Link href="/" className="flex items-center justify-center bg-white/95 px-4 py-2 rounded-lg shadow-lg">
                    <img
                        src="/images/logo.png"
                        alt="Soluxe Homes"
                        className="h-16 w-auto object-contain"
                    />
                </Link>

                {/* DESKTOP LINKS: White text with shadow for readability */}
                <div className="hidden md:flex items-center space-x-12 bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
                    <Link href="/" className="text-white font-bold uppercase tracking-widest text-xs hover:text-soluxe-red transition-colors">
                        Home
                    </Link>
                    <Link href="/rent" className="text-white font-bold uppercase tracking-widest text-xs hover:text-soluxe-red transition-colors">
                        Properties
                    </Link>
                    <Link href="/about" className="text-white font-bold uppercase tracking-widest text-xs hover:text-soluxe-red transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-white font-bold uppercase tracking-widest text-xs hover:text-soluxe-red transition-colors">
                        Contact
                    </Link>
                </div>

                {/* CTA BUTTON */}
                <div className="hidden md:flex">
                    <Link href="/contact" className="flex items-center gap-2 bg-soluxe-red text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-soluxe-red transition-all shadow-xl rounded-sm">
                        <Phone className="h-4 w-4" />
                        Book Call
                    </Link>
                </div>

                {/* MOBILE MENU */}
                <button className="md:hidden text-white bg-black/40 p-2 rounded">
                    <Menu className="h-8 w-8" />
                </button>
            </div>
        </nav>
    );
}