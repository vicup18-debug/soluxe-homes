"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-soluxe-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            {/* Using CSS filter to make the logo white for the dark background */}
                            <img
                                src="/images/logo.png"
                                alt="Soluxe Homes"
                                className="h-14 w-auto brightness-0 invert opacity-90"
                            />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Secure verified lands and premium homes in Abuja and Lagos.
                            100% litigation-free properties tailored for your peace of mind.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon href="#" icon={<Facebook className="w-5 h-5" />} />
                            <SocialIcon href="#" icon={<Instagram className="w-5 h-5" />} />
                            <SocialIcon href="#" icon={<Twitter className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-soluxe-gold font-bold tracking-widest text-sm mb-6">QUICK LINKS</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/rent" label="Properties" />
                            <FooterLink href="/about" label="About Us" />
                            <FooterLink href="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-soluxe-gold font-bold tracking-widest text-sm mb-6">CONTACT US</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-soluxe-gold shrink-0 mt-0.5" />
                                <span>No. 5, Igbosere Road,<br />Lagos Island, Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-soluxe-gold shrink-0" />
                                <a href="tel:+2348012345678" className="hover:text-white transition-colors">+234 801 234 5678</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-soluxe-gold shrink-0" />
                                <a href="mailto:info@soluxehomes.com" className="hover:text-white transition-colors">info@soluxehomes.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-soluxe-gold font-bold tracking-widest text-sm mb-6">NEWSLETTER</h3>
                        <p className="text-gray-300 text-sm mb-4">Subscribe to get the latest property alerts.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded text-sm focus:outline-none focus:border-soluxe-gold transition-colors placeholder:text-gray-500"
                            />
                            <button className="w-full bg-soluxe-red text-white py-3 rounded text-sm font-bold tracking-wide hover:bg-red-800 transition-colors flex items-center justify-center gap-2">
                                SUBSCRIBE <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} Soluxe Homes. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-400">
                        <Link href="#" className="hover:text-soluxe-gold transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-soluxe-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-soluxe-gold hover:text-soluxe-blue transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link href={href} className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 text-sm inline-flex items-center gap-2">
                {/* Tiny dot that appears on hover could go here, or just the padding shift */}
                {label}
            </Link>
        </li>
    );
}
