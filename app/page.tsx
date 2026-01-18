import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, Home as HomeIcon, Key, Users, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">

      {/* 1. HERO SECTION (Tall & Cinematic) */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-hero.jpg.jpeg"
            alt="Soluxe Luxury"
            className="w-full h-full object-cover scale-105"
          />
          {/* Black Overlay (User requested) */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
          <div className="max-w-4xl space-y-8 animate-fade-in-up">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md">
              Abuja • Lagos • Port Harcourt
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.05]">
              Real Estate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Redefined.</span>
            </h1>

            <p className="text-xl text-gray-200 max-w-xl font-light leading-relaxed border-l-4 border-soluxe-red pl-6">
              Secure verified lands and premium homes without the hassle. Experience the Soluxe standard of trust.
            </p>

            <div className="pt-8 flex flex-wrap gap-4">
              <Link
                href="/rent"
                className="inline-flex h-16 items-center justify-center bg-soluxe-red px-10 text-sm font-bold text-white uppercase tracking-widest hover:bg-white hover:text-soluxe-red transition-all shadow-xl"
              >
                Browse Listings
                <ArrowUpRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-16 items-center justify-center border border-white/30 bg-white/5 backdrop-blur-sm px-10 text-sm font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Book Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP (Clean White) */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
          {[
            { val: "RC:8363147", label: "Registered" },
            { val: "100%", label: "Verified Titles" },
            { val: "N480m+", label: "Property Sales" },
            { val: "50+", label: "Happy Clients" }
          ].map((item, i) => (
            <div key={i} className="px-4">
              <h3 className="text-4xl font-bold text-slate-900">{item.val}</h3>
              <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED COLLECTION (Grid Preview) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs">Curated Portfolio</span>
              <h2 className="text-4xl font-bold mt-2 text-slate-900">Featured Opportunities</h2>
            </div>
            <Link href="/rent" className="hidden md:flex items-center gap-2 text-soluxe-blue font-bold uppercase text-xs tracking-widest border-b border-soluxe-blue pb-1 hover:text-soluxe-red hover:border-soluxe-red transition-all">
              View All Listings <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ITEM 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/estora.jpg" alt="Estora" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-soluxe-blue text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Maitama 2</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Estora Residence</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Luxury living in the heart of Maitama 2 with 50% discount promo.</p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <span className="text-soluxe-red font-bold">₦5.5M <span className="text-xs text-gray-400 font-normal">/ Initial</span></span>
                  <Link href="/rent" className="text-xs font-bold uppercase tracking-widest text-slate-900">Details</Link>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/target-hills.jpg" alt="Target Hills" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-soluxe-blue text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Katampe Ext.</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Target Hills Luxury</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Exclusive luxury homes in the diplomatic zone. The pinnacle of Abuja living.</p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <span className="text-soluxe-red font-bold">₦45M <span className="text-xs text-gray-400 font-normal">/ Unit</span></span>
                  <Link href="/rent" className="text-xs font-bold uppercase tracking-widest text-slate-900">Details</Link>
                </div>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src="/images/goldmark.jpg" alt="Goldmark" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-soluxe-blue text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Kyami</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Goldmark City</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">Premium plots immediately after Custom Senior Staff Quarters.</p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <span className="text-soluxe-red font-bold">₦25M <span className="text-xs text-gray-400 font-normal">/ Plot</span></span>
                  <Link href="/rent" className="text-xs font-bold uppercase tracking-widest text-slate-900">Details</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/rent" className="inline-block border border-slate-900 px-8 py-3 text-xs font-bold uppercase tracking-widest">
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / MISSION SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full z-0"></div>
            <img
              src="/images/royalux.jpeg"
              alt="Modern House"
              className="relative z-10 w-full rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-soluxe-blue/10 z-0"></div>
          </div>

          <div>
            <span className="text-soluxe-blue font-bold tracking-widest uppercase text-xs">The Soluxe Standard</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">More than just <br />a real estate company.</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We understand that buying property in Nigeria can be daunting. That is why Soluxe Homes was built on a foundation of radical transparency. We don't just sell land; we verify titles, secure government approvals, and ensure your investment is safe for generations to come.
            </p>

            <ul className="space-y-4">
              {["100% Litigation-Free Guarantee", "Direct-to-Developer Prices", "Comprehensive Facility Management"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-soluxe-blue" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link href="/about" className="text-soluxe-red font-bold uppercase tracking-widest text-sm hover:underline">
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (How it works) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Your Path to Ownership</h2>
          <p className="text-gray-400 mt-4">Three simple steps to secure your future.</p>
        </div>

        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12 text-center relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0"></div>

          {[
            { icon: Search, title: "1. Browse", desc: "Explore our verified listings in Abuja, Lagos, and PH." },
            { icon: Users, title: "2. Inspect", desc: "Schedule a physical or virtual site visit with our team." },
            { icon: Key, title: "3. Secure", desc: "Make payment and receive your deeds instantly." }
          ].map((step, i) => (
            <div key={i} className="relative z-10 bg-slate-900 p-4">
              <div className="w-20 h-20 mx-auto bg-soluxe-blue rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA / FOOTER PREVIEW */}
      <section className="py-32 bg-soluxe-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Stop renting. Start owning.</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Properties in our portfolio have appreciated by an average of 35% in the last 12 months. Don't wait to buy real estate, buy real estate and wait.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/rent" className="bg-white text-soluxe-red px-10 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl rounded-sm">
              View Available Lands
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-soluxe-red transition-all rounded-sm">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src="/images/logo.png" alt="Soluxe Logo" className="h-12 w-auto mb-6" />
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Soluxe Homes & Realty Ltd (RC: 8363147). We are dedicated to providing affordable luxury and secure investment opportunities for Nigerians at home and abroad.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-soluxe-blue">Home</Link></li>
              <li><Link href="/rent" className="hover:text-soluxe-blue">Buy Property</Link></li>
              <li><Link href="/about" className="hover:text-soluxe-blue">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-soluxe-blue">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>Suite C6-7, Emmanuel Plaza</li>
              <li>Utako, FCT Abuja</li>
              <li>+234 800 000 0000</li>
              <li>info@soluxehomes.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 text-center border-t border-gray-100 pt-8">
          <p className="text-xs text-gray-400 uppercase tracking-widest">© 2026 Soluxe Homes. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

// Helper component for the search icon in step 5
function Search(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}