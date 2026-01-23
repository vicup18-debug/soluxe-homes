import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, Home as HomeIcon, Key, Users, Search as SearchIcon, TrendingUp, ShieldCheck, Banknote, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[95vh] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-hero.jpg.jpeg"
            alt="Soluxe Luxury"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 md:bg-black/50"></div>
        </div>

        {/* FIX: Increased padding to pt-64 to push text WAY down */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-64 md:pt-48">
          <div className="max-w-4xl space-y-6 md:space-y-8 animate-fade-in-up">

            {/* Badge */}
            <span className="inline-block py-2 px-5 border border-white/30 rounded-full text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md mb-2">
              Abuja • Lagos • Port Harcourt
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tight leading-[1.1]">
              Real Estate, <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Refined.</span>
            </h1>

            <p className="text-base md:text-xl text-gray-200 max-w-xl font-light leading-relaxed border-l-2 md:border-l-4 border-soluxe-red pl-4 md:pl-6">
              Secure verified lands and premium homes without the hassle. Experience the Soluxe standard of trust, transparency, and timely delivery.
            </p>

            <div className="pt-8 flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Link href="/rent" className="inline-flex h-14 md:h-16 w-full md:w-auto items-center justify-center bg-soluxe-red px-10 text-sm font-bold text-white uppercase tracking-widest hover:bg-white hover:text-soluxe-red transition-all shadow-xl rounded-sm">
                Browse Listings <ArrowUpRight className="ml-3 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex h-14 md:h-16 w-full md:w-auto items-center justify-center border border-white/30 bg-white/5 backdrop-blur-sm px-10 text-sm font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm">
                Book Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center divide-x divide-gray-100">
          {[
            { val: "RC:8363147", label: "Registered" },
            { val: "100%", label: "Verified Titles" },
            { val: "N480m+", label: "Sales Volume" },
            { val: "50+", label: "Happy Clients" }
          ].map((item, i) => (
            <div key={i} className="px-2">
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900">{item.val}</h3>
              <p className="text-[10px] md:text-xs text-gray-400 mt-2 uppercase tracking-widest font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MARKET INSIGHTS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs">Market Analysis</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-3 text-slate-900">Why Invest in Nigerian Real Estate Now?</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              In an era of economic volatility, real estate remains the most secure asset class in Africa. Here is why savvy investors are moving capital into the Abuja and Lagos property markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-soluxe-blue transition-colors group">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-soluxe-blue transition-colors">
                <ShieldCheck className="h-6 w-6 text-soluxe-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inflation Hedge</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                While cash depreciates, land appreciates. Verified data shows that properties in Maitama 2 and Katampe Extension have seen a <strong>35-40% value increase</strong> year-on-year.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-soluxe-blue transition-colors group">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-soluxe-blue transition-colors">
                <TrendingUp className="h-6 w-6 text-soluxe-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">High Rental Yields</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                The demand for quality housing in Abuja exceeds supply. Our clients enjoying rental yields of up to <strong>8-12% annually</strong> on our terrace and semi-detached units.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-soluxe-blue transition-colors group">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-soluxe-blue transition-colors">
                <Banknote className="h-6 w-6 text-soluxe-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Currency Security</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Real estate is a tangible asset that holds intrinsic value. Investing in FCDA-approved land locks your wealth in a secure asset class immune to banking fluctuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="text-center md:text-left w-full md:w-auto">
              <span className="text-soluxe-red font-bold tracking-widest uppercase text-[10px] md:text-xs">Curated Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-3 text-slate-900">Featured Opportunities</h2>
            </div>
            <Link href="/rent" className="hidden md:flex items-center gap-2 text-soluxe-blue font-bold uppercase text-xs tracking-widest border-b border-soluxe-blue pb-1 hover:text-soluxe-red hover:border-soluxe-red transition-all">
              View All Listings <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Estora Residence", loc: "Maitama 2", price: "₦5.5M", sub: "Initial", img: "/images/estora.jpg", badge: "Hot Deal" },
              { title: "Target Hills", loc: "Katampe Ext.", price: "₦45M", sub: "Unit", img: "/images/target-hills.jpg", badge: "Diplomatic Zone" },
              { title: "Goldmark City", loc: "Kyami", price: "₦25M", sub: "Plot", img: "/images/goldmark.jpg", badge: "Selling Fast" }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 bg-white/95 text-slate-900 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">{item.loc}</span>
                  <span className="absolute bottom-4 right-4 bg-soluxe-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">{item.badge}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-4">
                    <span className="text-soluxe-red font-bold text-lg">{item.price} <span className="text-[10px] text-gray-400 font-normal uppercase">/ {item.sub}</span></span>
                    <Link href="/rent" className="text-[10px] font-bold uppercase tracking-widest text-slate-900 bg-gray-100 px-3 py-1 rounded-full hover:bg-soluxe-blue hover:text-white transition-colors">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/rent" className="inline-block w-full border border-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm">
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-soluxe-blue/10 rounded-full blur-2xl"></div>
            <img
              src="/images/royalux.jpeg"
              alt="Modern House"
              className="relative z-10 w-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-soluxe-blue font-bold tracking-widest uppercase text-[10px] md:text-xs">The Soluxe Standard</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-6 text-slate-900 leading-tight">More than just <br />a real estate company.</h2>
            <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                We understand that buying property in Nigeria can be daunting. The market is flooded with unverified titles, Omonile issues, and stalled projects. That is why <strong>Soluxe Homes</strong> was built on a foundation of radical transparency.
              </p>
              <p>
                Our legal team conducts a 21-point due diligence check on every square meter of land we acquire. We don't just sell you a plot; we hand you a legacy free from litigation and government encumbrances.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {["100% Litigation-Free Guarantee", "Direct-to-Developer Prices (No Middlemen)", "Comprehensive Verification & Documentation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-soluxe-blue shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-soluxe-blue text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-white/60 font-bold tracking-widest uppercase text-xs">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-3">Trusted by Over 50 Families</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Ibrahim K.", role: "Surgeon, Abuja", text: "I was skeptical about buying land online, but Soluxe's transparency is unmatched. They did a video call inspection for me, and my documents were ready in 48 hours." },
              { name: "Mrs. Chioma E.", role: "Business Owner, Lagos", text: "I bought a terrace in Katampe for investment. In just 8 months, the value has appreciated by over 6 million Naira. I am definitely buying my next property from Soluxe." },
              { name: "Engr. David O.", role: "Diaspora Investor, UK", text: "Living in the UK makes it hard to monitor projects. Soluxe gave me peace of mind. Regular updates, clear paperwork, and no hidden fees." }
            ].map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 relative">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-blue-100 leading-relaxed italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <p className="text-xs text-white/60 uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Your Path to Ownership</h2>
          <p className="text-gray-400 mt-4 font-light">Three simple steps to secure your future.</p>
        </div>

        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 text-center relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>

          {[
            { icon: SearchIcon, title: "1. Browse", desc: "Explore our verified listings in Abuja, Lagos, and PH." },
            { icon: Users, title: "2. Inspect", desc: "Schedule a physical or virtual site visit with our team." },
            { icon: Key, title: "3. Secure", desc: "Make payment and receive your deeds instantly." }
          ].map((step, i) => (
            <div key={i} className="relative z-10 bg-white p-4">
              <div className="w-20 h-20 mx-auto bg-soluxe-blue rounded-full flex items-center justify-center mb-6 shadow-xl text-white border-4 border-white">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
              <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2">Everything you need to know about buying with Soluxe.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What kind of titles do your properties have?", a: "All our properties come with verified titles including FCDA Right of Occupancy (R of O), Certificate of Occupancy (C of O), or Government Allocation papers." },
              { q: "Do you offer installment payment plans?", a: "Yes, we offer flexible payment plans ranging from 3 to 12 months for most of our estates. A 30% initial deposit is typically required to secure a plot or unit." },
              { q: "Can I inspect the property if I am not in Nigeria?", a: "Absolutely. We specialize in serving diaspora clients. We can schedule a live video inspection (Zoom/WhatsApp) where our agent walks you through the site in real-time." },
              { q: "Are there any hidden charges?", a: "We believe in transparency. The price we quote usually covers the land cost. Ancillary fees like Survey, Deed of Assignment, and Development Levy are clearly stated in your offer letter." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-soluxe-red">Q.</span> {faq.q}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm pl-6 border-l-2 border-gray-100">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / FOOTER PREVIEW */}
      <section className="py-20 md:py-32 bg-soluxe-red relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-serif font-medium text-white mb-6">Stop renting. <br />Start owning.</h2>
          <p className="text-white/80 text-base md:text-xl max-w-xl mx-auto mb-10 font-light">
            Properties in our portfolio have appreciated by an average of 35% in the last 12 months.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/rent" className="bg-white text-soluxe-red px-10 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl rounded-sm w-full md:w-auto">
              View Available Lands
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-soluxe-red transition-all rounded-sm w-full md:w-auto">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-16 pb-10 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img src="/images/logo.png" alt="Soluxe Logo" className="h-10 w-auto mb-6" />
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Soluxe Homes & Realty Ltd (RC: 8363147). Dedicated to providing affordable luxury and secure investment opportunities for Nigerians at home and abroad.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-xs md:text-sm text-gray-500">
              <li><Link href="/" className="hover:text-soluxe-blue">Home</Link></li>
              <li><Link href="/rent" className="hover:text-soluxe-blue">Properties</Link></li>
              <li><Link href="/about" className="hover:text-soluxe-blue">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-soluxe-blue">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-xs md:text-sm text-gray-500">
              <li>Suite C6-7, Emmanuel Plaza</li>
              <li>Utako, FCT Abuja</li>
              <li>+234 906 398 6082</li>
              <li>soluxehomesrealty@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 text-center border-t border-gray-100 pt-8">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2026 Soluxe Homes. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}