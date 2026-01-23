import Link from "next/link";
import { Search, MapPin, CheckCircle, Shield, Zap, TrendingUp, ArrowRight, Star, Info, FileText } from "lucide-react";

interface Price {
    size: string;
    price: string;
    type: string;
    oldPrice?: string;
}

interface Property {
    id: string;
    title: string;
    location: string;
    badge: string;
    status: string;
    image: string;
    description: string;
    facilities: string[];
    prices: Price[];
}

export default function RentPage() {
    const properties: Property[] = [
        {
            id: "lekki-luxury",
            title: "Lekki Phase 1 Luxury",
            location: "Lekki Phase 1, Lagos",
            badge: "High-End",
            status: "C of O",
            image: "/images/lekki.jpg",
            description: "Ultra-modern 5 Bedroom Fully Detached Duplex with Cinema and Pool. Designed for the elite who value privacy and opulence.",
            facilities: ["Swimming Pool", "Private Cinema", "Smart Home Automation", "Fitted Kitchen"],
            prices: [
                { size: "5 Bed", price: "₦480m", type: "Fully Detached Duplex" }
            ]
        },
        {
            id: "utako-terrace",
            title: "Utako Residence",
            location: "Utako District, Abuja",
            badge: "Move-In Ready",
            status: "C of O",
            image: "/images/utako.jpg",
            description: "Decent and spacious 3 Bedroom Terrace Duplex in the heart of the city. Perfect for families working in the Central Business District.",
            facilities: ["Ample Parking", "Security", "Good Road Network", "Serene Environment"],
            prices: [
                { size: "3 Bed", price: "Call for Price", type: "Terrace Duplex" }
            ]
        },
        {
            id: "estora-maitama",
            title: "Estora Residence",
            location: "Maitama 2 (Garui Shere Road)",
            badge: "50% Mega Promo",
            status: "FCDA R of O",
            image: "/images/estora.jpeg",
            description: "Luxury living in the heart of Maitama 2. This is our fastest-selling project due to the massive pre-sale discount. A massive ROI opportunity.",
            facilities: ["Perimeter Fence", "Street Lights", "Good Road Network", "24/7 Security", "Shopping Center"],
            prices: [
                { size: "250 SQM", price: "₦5.5m", oldPrice: "₦11m", type: "4 Bed Terrace" },
                { size: "450 SQM", price: "₦9.9m", oldPrice: "₦19.8m", type: "3 Bed Detached" },
                { size: "600 SQM", price: "₦13.2m", oldPrice: "₦26.4m", type: "5 Bed Detached" },
                { size: "1000 SQM", price: "₦22m", oldPrice: "₦44m", type: "Block of Flats" }
            ]
        },
        {
            id: "target-hills",
            title: "Target Hills Luxury",
            location: "Diplomatic Zone, Katampe Extension",
            badge: "Diplomatic Zone",
            status: "FCDA R of O",
            image: "/images/target-hills.jpeg",
            description: "Exclusive luxury homes in the diplomatic zone. The pinnacle of Abuja living, surrounded by embassies and high-net-worth individuals.",
            facilities: ["Adequate Water", "Power Supply", "Children's Playground", "Shopping Center"],
            prices: [
                { size: "250 SQM", price: "₦45m", type: "4 Bed Semi-Detached + BQ" },
                { size: "500 SQM", price: "₦85m", type: "6 Bed Fully Detached + BQ" }
            ]
        },
        {
            id: "goldmark-kyami",
            title: "Goldmark City",
            location: "Kyami (Before Goodluck Jonathan's Farm)",
            badge: "Now Selling",
            status: "FCDA C of O",
            image: "/images/goldmark.jpg",
            description: "Premium plots immediately after Custom Senior Staff Quarters. A strategic location for investors looking for rapid land appreciation.",
            facilities: ["Perimeter Fence", "Street Lights", "Asphalt Road", "Well Landscaped"],
            prices: [
                { size: "250 SQM", price: "₦25m", type: "4 Bed Terrace" },
                { size: "300 SQM", price: "₦30m", type: "5 Bed Terrace + BQ" },
                { size: "500 SQM", price: "₦50m", type: "4 Bed Detached + BQ" },
                { size: "1000 SQM", price: "₦90m", type: "Block of Flats" }
            ]
        },
        {
            id: "royalux-apo",
            title: "Royalux Estate",
            location: "Waru District, Apo (After Mechanic Village)",
            badge: "Mega Pre-Sale",
            status: "FCDA R of O",
            image: "/images/royalux.jpeg",
            description: "Strategic location in Apo with high ROI potential. We have limited plots available at this pre-sale price before the infrastructure levy kicks in.",
            facilities: ["Power Supply", "Perimeter Fence", "Street Lights", "24/7 Security"],
            prices: [
                { size: "180 SQM", price: "₦11.5m", type: "2 Bed Terrace" },
                { size: "250 SQM", price: "₦16m", type: "4 Bed Terrace" },
                { size: "450 SQM", price: "₦28.5m", type: "4 Bed Penthouse + BQ" },
                { size: "1000 SQM", price: "₦63m", type: "Block of Flats" }
            ]
        },
        {
            id: "lifecamp",
            title: "Lifecamp Estate",
            location: "Beside Ochacho Homes Phase 2, Lifecamp",
            badge: "New Site Alert",
            status: "R of O + Building Plan",
            image: "/images/lifecamp.jpg",
            description: "Pre-sale offer in one of Abuja's most serene districts. Neighbors include Ochacho Homes, ensuring high property value stability.",
            facilities: ["Advance Security", "Modern Gate House", "Water Supply", "Good Roads"],
            prices: [
                { size: "200 SQM", price: "₦14m", type: "Residential Plot" },
                { size: "300 SQM", price: "₦18m", type: "Residential Plot" },
                { size: "450 SQM", price: "₦22.5m", type: "Residential Plot" }
            ]
        },
        {
            id: "conquerors-idu",
            title: "Conquerors Residence",
            location: "Idu (Behind Technocrats Court)",
            badge: "Pre-Sale Offer",
            status: "FCDA R of O",
            image: "/images/conquerors.jpg",
            description: "Located in the fast-developing Idu industrial and residential hub. Perfect for investors targeting the railway and industrial workforce.",
            facilities: ["Security Post", "Children's Playground", "Perimeter Fencing", "Street Lights"],
            prices: [
                { size: "180 SQM", price: "₦8m", type: "2 Bed Terrace" },
                { size: "250 SQM", price: "₦11.2m", type: "4 Bed Terrace" },
                { size: "350 SQM", price: "₦15.5m", type: "4 Bed Semi-Detached" },
                { size: "500 SQM", price: "₦22.2m", type: "5 Bed Detached + BQ" }
            ]
        },
        {
            id: "prime-gate",
            title: "Soluxe Prime Gate",
            location: "Pyakasa, Along Kabusa-Ketti Express",
            badge: "20 Plots Only",
            status: "FCDA R of O",
            image: "/images/prime-gate-new.bmp",
            description: "12 mins to ShopRite. 30 mins to Airport. This location is poised for a massive price jump once the new express road is completed.",
            facilities: ["Proximity to Airport", "ShopRite Nearby", "Dunamis Glory Dome Nearby"],
            prices: [
                { size: "180 SQM", price: "₦6m", type: "Terrace Duplex" },
                { size: "250 SQM", price: "₦8.4m", type: "Semi-Detached" },
                { size: "350 SQM", price: "₦11.8m", type: "Fully Detached" },
                { size: "500 SQM", price: "₦16.8m", type: "Detached + BQ" }
            ]
        },
        {
            id: "lagos-luxury",
            title: "Lagos Affordable Luxury",
            location: "Lagos Mainland",
            badge: "Best Seller",
            status: "C of O",
            image: "/images/lagos.jpg",
            description: "Contemporary design meeting affordability. Perfect for young families looking to stop paying rent in Lagos.",
            facilities: ["Paved Roads", "Security", "Water Treatment"],
            prices: [
                { size: "4 Bed", price: "Call for Price", type: "Semi-Detached" }
            ]
        },
        {
            id: "soluxe-court",
            title: "Soluxe Court Kuje",
            location: "Beside SS Simon & Jude Seminary, Kuje",
            badge: "Budget Friendly",
            status: "FCDA Approved",
            image: "/images/kuje.jpeg",
            description: "The most affordable FCDA approved land in the axis. An entry-level investment that allows anyone to become a landlord in Abuja.",
            facilities: ["Asphalt Road", "Shopping Center", "Well Landscaped", "Security Post"],
            prices: [
                { size: "180 SQM", price: "₦1.8m", type: "2 Bed Terrace" },
                { size: "250 SQM", price: "₦2.5m", type: "2 Bed Bungalow" },
                { size: "350 SQM", price: "₦3.5m", type: "3 Bed Detached" },
                { size: "500 SQM", price: "₦5m", type: "5 Bed Detached + BQ" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 font-sans selection:bg-soluxe-red selection:text-white">

            {/* HEADER SECTION (Content Rich) */}
            <div className="bg-white border-b border-gray-200 py-16">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <span className="text-soluxe-red font-bold tracking-widest uppercase text-xs mb-4 block animate-fade-in">Our Portfolio</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-soluxe-blue mb-6 tracking-tight">
                        Curated for Value.<br />Verified for Peace of Mind.
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                        We don't list everything. We only list properties that meet our strict <strong>21-point verification checklist</strong>. Whether you are looking for a high-yield investment in Katampe or a budget-friendly start in Kuje, every estate here is litigation-free and FCDA approved.
                    </p>

                    {/* Key Metrics */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-400">
                        <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-soluxe-blue" /> FCDA Approved</span>
                        <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-soluxe-blue" /> 100% Safe Titles</span>
                        <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-soluxe-blue" /> High ROI Potential</span>
                    </div>
                </div>
            </div>

            {/* PROPERTIES GRID */}
            <div className="container mx-auto px-6 py-20 space-y-24">
                {properties.map((property, index) => (
                    <div key={index} className="group relative bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-xl overflow-hidden">

                        <div className="flex flex-col lg:flex-row">
                            {/* IMAGE COLUMN */}
                            <div className="lg:w-[45%] relative h-[400px] lg:h-auto overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                                {/* Badges */}
                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                    <span className="bg-soluxe-red text-white text-xs font-bold px-4 py-2 uppercase tracking-widest shadow-lg rounded-sm">
                                        {property.badge}
                                    </span>
                                    <span className="bg-white text-soluxe-blue text-xs font-bold px-4 py-2 uppercase tracking-widest shadow-lg flex items-center gap-2 rounded-sm">
                                        <CheckCircle className="h-3 w-3" /> {property.status}
                                    </span>
                                </div>
                            </div>

                            {/* INFO COLUMN */}
                            <div className="lg:w-[55%] p-8 lg:p-12 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-800 group-hover:text-soluxe-blue transition-colors">
                                            {property.title}
                                        </h2>
                                        {property.id === "estora-maitama" && <Star className="text-yellow-500 fill-yellow-500 h-6 w-6 animate-pulse" />}
                                    </div>

                                    <p className="text-gray-500 flex items-center gap-2 mb-6 text-sm uppercase tracking-wider font-bold">
                                        <MapPin className="h-4 w-4 text-soluxe-red" /> {property.location}
                                    </p>

                                    <p className="text-gray-600 mb-8 font-light leading-relaxed border-l-2 border-soluxe-blue pl-4">
                                        {property.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* PRICING */}
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <h3 className="text-soluxe-blue font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                                <TrendingUp className="h-4 w-4" /> Price List
                                            </h3>
                                            <ul className="space-y-3">
                                                {property.prices.map((price, i) => (
                                                    <li key={i} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2 last:border-0">
                                                        <span className="text-gray-500">{price.size}</span>
                                                        <div className="text-right">
                                                            {price.oldPrice && (
                                                                <span className="block text-xs text-red-400 line-through">{price.oldPrice}</span>
                                                            )}
                                                            <span className="block font-bold text-slate-900">{price.price}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* FACILITIES */}
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <h3 className="text-soluxe-blue font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                                <Zap className="h-4 w-4" /> Amenities
                                            </h3>
                                            <ul className="grid grid-cols-1 gap-2">
                                                {property.facilities.map((fac, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-xs text-gray-500">
                                                        <div className="h-1.5 w-1.5 bg-soluxe-red rounded-full"></div>
                                                        {fac}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs text-gray-400 uppercase tracking-widest">Soluxe Homes Official</span>
                                    <Link href="/contact" className="group/btn flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-soluxe-red transition-colors">
                                        Request Layout <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FOOTER INFO: HOW TO BUY (Content Rich) */}
            <div className="bg-soluxe-blue text-white py-20">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-3xl font-serif font-medium mb-6">How to Secure Your Unit</h2>
                    <p className="text-blue-100 mb-10 leading-relaxed">
                        Our process is designed for transparency. We don't accept cash payments; all transfers are made to the corporate account of Soluxe Homes & Realty Ltd to ensure accountability.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/10 p-6 rounded-lg">
                            <FileText className="h-8 w-8 mb-4 text-soluxe-red" />
                            <h3 className="font-bold mb-2">1. Request Form</h3>
                            <p className="text-xs text-gray-300">Fill out the KYC (Know Your Customer) form to initiate the offer letter.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg">
                            <Search className="h-8 w-8 mb-4 text-soluxe-red" />
                            <h3 className="font-bold mb-2">2. Verification</h3>
                            <p className="text-xs text-gray-300">We encourage you to conduct your own independent search at AGIS or FCDA.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg">
                            <CheckCircle className="h-8 w-8 mb-4 text-soluxe-red" />
                            <h3 className="font-bold mb-2">3. Allocation</h3>
                            <p className="text-xs text-gray-300">Upon initial deposit, you receive your provisional allocation letter instantly.</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="/contact" className="inline-block bg-white text-soluxe-blue px-10 py-4 font-bold uppercase tracking-widest hover:bg-soluxe-red hover:text-white transition-all shadow-xl rounded-sm">
                            Start Process
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}