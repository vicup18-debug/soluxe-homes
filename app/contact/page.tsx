"use client";

import Navbar from "@/components/shared/Navbar";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    // === CONFIGURATION ===
    // ENTER YOUR WHATSAPP NUMBER HERE (Any format is fine now, the code will fix it)
    // Example: "08012345678" or "+234 801 234 5678"
    const COMPANY_WHATSAPP = "+234 906 398 6082";

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // 1. CLEAN THE PHONE NUMBER (The Fix)
        // This removes +, spaces, dashes, and ensures it starts with 234
        let cleanNumber = COMPANY_WHATSAPP.replace(/\D/g, ''); // Remove non-digits
        if (cleanNumber.startsWith("0")) {
            cleanNumber = "234" + cleanNumber.substring(1); // Convert 080... to 23480...
        }

        // 2. Format the message
        const message = `
*New Website Inquiry* 🏠
-------------------------
*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
-------------------------
*Message:*
${formData.message}
    `.trim();

        // 3. Open WhatsApp (Using the robust API link)
        const url = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans pt-24">

            {/* HEADER SECTION */}
            <div className="bg-slate-50 py-16 border-b border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-medium mt-4 text-soluxe-blue">Start Your Journey.</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg font-light">
                        Whether you are looking to buy, sell, or verify a property, our team is ready to guide you.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* LEFT: CONTACT FORM */}
                    <div>
                        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-serif font-medium text-soluxe-blue mb-6">Send us a message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                            className="w-full h-12 px-4 border border-gray-300 rounded focus:border-soluxe-blue focus:ring-1 focus:ring-soluxe-blue outline-none transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                                        <input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                            className="w-full h-12 px-4 border border-gray-300 rounded focus:border-soluxe-blue focus:ring-1 focus:ring-soluxe-blue outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        required
                                        className="w-full h-12 px-4 border border-gray-300 rounded focus:border-soluxe-blue focus:ring-1 focus:ring-soluxe-blue outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        required
                                        className="w-full h-12 px-4 border border-gray-300 rounded focus:border-soluxe-blue focus:ring-1 focus:ring-soluxe-blue outline-none transition-all"
                                        placeholder="+234..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">How can we help?</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-32 p-4 border border-gray-300 rounded focus:border-soluxe-blue focus:ring-1 focus:ring-soluxe-blue outline-none transition-all"
                                        placeholder="I am interested in Soluxe Prime Gate..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full h-14 bg-soluxe-blue text-white font-bold uppercase tracking-widest hover:bg-soluxe-red transition-colors rounded shadow-lg flex items-center justify-center gap-2">
                                    <Send className="h-4 w-4" /> Send to WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT: CONTACT INFO */}
                    <div className="space-y-12">

                        <div className="rounded-xl overflow-hidden shadow-xl relative h-48 w-full group">
                            <img
                                src="/images/team-support.jpg"
                                alt="Support Team"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-soluxe-blue/80 to-transparent flex items-center px-8">
                                <div>
                                    <p className="text-white font-bold text-lg">We are here to help!</p>
                                    <p className="text-blue-100 text-xs">Chat with our team today.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="h-6 w-6 text-soluxe-blue" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Head Office</h4>
                                    <p className="text-gray-500 mt-1 leading-relaxed">
                                        Suite C6-7, Emmanuel Plaza,<br />
                                        Plot 228 POW Mafemi Crescent,<br />
                                        Utako, FCT Abuja.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="h-6 w-6 text-soluxe-blue" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Phone & WhatsApp</h4>
                                    <p className="text-gray-500 mt-1">{COMPANY_WHATSAPP}</p>
                                    <p className="text-gray-400 text-sm">Mon - Fri, 8am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="h-6 w-6 text-soluxe-blue" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Email</h4>
                                    <p className="text-gray-500 mt-1">info@soluxehomes.com</p>
                                    <p className="text-gray-500">sales@soluxehomes.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-slate-900 mb-4">Why contact us?</h4>
                            <ul className="space-y-3">
                                {["Instant response within 2 hours", "Direct access to facility managers", "Free consultation on property verification"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                        <CheckCircle2 className="h-4 w-4 text-soluxe-red" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}