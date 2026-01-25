import Navbar from "@/components/shared/Navbar";
import Link from "next/link";
import { Shield, Target, Users, ArrowRight, CheckCircle2, Briefcase, Quote, Sparkles, Heart, Lightbulb, Scale, Handshake, Award, Facebook, Instagram } from "lucide-react";

// Custom TikTok Icon Component (Since it's not in standard Lucide)
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export default function AboutPage() {
    const leaders = [
        {
            name: "Barr Chukwunonso Aniebo",
            role: "M.D",
            fullTitle: "Managing Director",
            image: "/images/md-aniebo.jpg", // Ensure this matches your file name
            bio: "As the Managing Director, he is the driving force behind the strategic vision and operational success of Soluxe Homes. With a deep understanding of the real estate landscape, he steers the company towards sustainable growth and market innovation. His leadership style is defined by a commitment to excellence and a passion for delivering premium value.",
            socials: {
                facebook: "#", // Add link when available
                instagram: "#", // Add link when available
                tiktok: "#"    // Add link when available
            }
        },
        {
            name: "Ukwome Chukwunonso Gabriel",
            role: "E.D",
            fullTitle: "Executive Director / CEO",
            image: "/images/ed-ukwome.jpg", // Ensure this matches your file name
            bio: "He provides strategic leadership and oversight for the company’s operations and growth. He drives the company’s vision, upholds professional standards, and ensures the delivery of transparent, value-focused real estate solutions. His leadership is centered on integrity, operational excellence, and long-term value creation.",
            socials: {
                facebook: "https://www.facebook.com/share/1CsuHJqA24/?mibextid=wwXIfr",
                instagram: "https://www.instagram.com/chukwunonso00001?igsh=MWpzZ3l3N2FmZW93MQ%3D%3D&utm_source=qr",
                tiktok: "https://www.tiktok.com/@nonso2081?_r=1&_t=ZS-93MuKhDSVzl"
            }
        }
    ];

    const coreValues = [
        { name: "Integrity", desc: "Truthfulness in words and actions.", icon: Shield },
        { name: "Respect", desc: "Valuing diversity and individuality.", icon: Users },
        { name: "Teamwork", desc: "Joining forces towards common goals.", icon: Handshake },
        { name: "Innovation", desc: "Staying ahead of the curve.", icon: Lightbulb },
        { name: "Accountability", desc: "Being responsible for actions and decisions.", icon: Scale },
        { name: "Excellence", desc: "Striving for high quality performance.", icon: Award },
        { name: "Humanity", desc: "Showing empathy & kindness.", icon: Heart },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans pt-24">

            {/* 1. HERO SECTION */}
            <div className="relative bg-slate-50 py-24 border-b border-gray-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-soluxe-blue/5 skew-x-12 transform origin-bottom-left"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs mb-4 block animate-fade-in">Who We Are</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-soluxe-blue mb-6 tracking-tight">
                        The Future of Living.
                    </h1>
                    <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                        Soluxe Homes & Realty Ltd is a transformative real estate brand, leading the future of living and working through sustainable development and smart technology.
                    </p>
                </div>
            </div>

            {/* 2. VISION & MISSION */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-12">
                        {/* Vision */}
                        <div className="bg-white border-l-4 border-soluxe-blue pl-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <span className="text-soluxe-blue font-bold tracking-widest uppercase text-xs mb-2 block">Our Vision</span>
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Leading the Future</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                "To be the most trusted and transformative real estate brand, leading the future of living and working through sustainable development, smart technology, and unparalleled human connection."
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white border-l-4 border-soluxe-red pl-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs mb-2 block">Our Mission</span>
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Affordable Luxury</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                "To deliver exceptional services that transforms the lives of both low and high income earners by providing them with affordable yet luxury housing."
                            </p>
                        </div>

                        <div className="pt-8">
                            <p className="font-serif italic text-2xl text-gray-400">
                                "You will be amazed at how you can predict the future with your confidence."
                            </p>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[500px] group">
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-soluxe-blue rounded-lg z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                        <img
                            src="/images/estora.jpg"
                            alt="Soluxe Vision"
                            className="relative z-10 w-full h-full rounded-lg shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs">Our Ethos</span>
                        <h2 className="text-4xl font-serif font-medium mt-2">Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {coreValues.map((val, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group duration-300">
                                <val.icon className="h-8 w-8 text-soluxe-red mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{val.name}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. LEADERSHIP SECTION (UPDATED) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs">Leadership</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-soluxe-blue mt-2">Meet The Executives</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {leaders.map((leader, index) => (
                            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-soluxe-blue">

                                {/* Image Area */}
                                <div className="relative h-[450px] w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 md:p-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">{leader.name}</h3>
                                            <p className="text-soluxe-red font-bold uppercase tracking-widest text-xs mt-1">{leader.fullTitle}</p>
                                        </div>
                                        <div className="h-10 w-10 bg-soluxe-blue/10 rounded-full flex items-center justify-center text-soluxe-blue font-serif font-bold">
                                            {leader.role}
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-gray-100 my-6"></div>

                                    <p className="text-gray-600 leading-relaxed text-sm mb-8">
                                        {leader.bio}
                                    </p>

                                    {/* Social Icons */}
                                    <div className="flex gap-4 pt-2">
                                        <a href={leader.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full text-soluxe-blue hover:bg-soluxe-blue hover:text-white transition-colors duration-300">
                                            <Facebook size={20} />
                                        </a>
                                        <a href={leader.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full text-soluxe-red hover:bg-soluxe-red hover:text-white transition-colors duration-300">
                                            <Instagram size={20} />
                                        </a>
                                        <a href={leader.socials.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full text-slate-800 hover:bg-black hover:text-white transition-colors duration-300">
                                            <TikTokIcon className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TEAM GALLERY */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs">Our Culture</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-medium text-soluxe-blue mt-2">The People Behind the Brand</h2>
                        </div>
                        <p className="text-gray-500 max-w-sm text-sm text-right hidden md:block">
                            A diverse team of professionals united by a single goal: Your satisfaction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
                        {/* 1. Large Group Photo */}
                        <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                            <img src="/images/team-all.jpeg" alt="Soluxe Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                            <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold">The Soluxe Family</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">United in excellence.</p>
                            </div>
                        </div>
                        {/* 2. Ladies in Blue */}
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-lg">
                            <img src="/images/team-support.jpeg" alt="Support Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        {/* 3. Single Man Blue Suit */}
                        <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl shadow-lg">
                            <img src="/images/team-lead.jpeg" alt="Manager" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        {/* 4. Men in Suits */}
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-lg">
                            <img src="/images/team-sales.jpeg" alt="Sales Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA SECTION */}
            <section className="bg-soluxe-blue py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-8">Ready to invest with confidence?</h2>
                    <Link href="/contact" className="inline-flex items-center bg-white text-soluxe-blue px-10 py-4 font-bold uppercase tracking-widest hover:bg-soluxe-red hover:text-white transition-all shadow-xl rounded-sm group">
                        Speak to a Consultant <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

        </div>
    );
}