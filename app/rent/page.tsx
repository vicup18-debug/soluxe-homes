import Link from "next/link";
import { Search, MapPin, CheckCircle, Shield, Zap, TrendingUp, ArrowRight, Star } from "lucide-react";

interface PropertyPrice {
    size: string;
    price: string;
    oldPrice?: string;
    type: string;
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
    prices: PropertyPrice[];
}

export default function RentPage() {
    const properties: Property[] = [
        {
            id: "estora-maitama",
            title: "Estora Residence",
            location: "Maitama 2 (Garui Shere Road)",
            badge: "50% Mega Promo",
            status: "FCDA R of O",
            image: "/images/estora.jpg",
            description: "Luxury living in the heart of Maitama 2. Limited time 50% discount promo.",
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
            image: "/images/target-hills.jpg",
            description: "Exclusive luxury homes in the diplomatic zone. The pinnacle of Abuja living.",
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
            description: "Premium plots immediately after Custom Senior Staff Quarters.",
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
            description: "Strategic location in Apo with high ROI potential. Limited plots available.",
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
            description: "Pre-sale offer in one of Abuja's most serene districts.",
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
            description: "Located in the fast-developing Idu industrial and residential hub.",
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
            image: "/images/prime-gate-new.jpg",
            description: "12 mins to ShopRite. 30 mins to Airport. High appreciation value.",
            facilities: ["Proximity to Airport", "ShopRite Nearby", "Dunamis Glory Dome Nearby"],
            prices: [
                { size: "180 SQM", price: "₦6m", type: "Terrace Duplex" },
                { size: "250 SQM", price: "₦8.4m", type: "Semi-Detached" },
                { size: "350 SQM", price: "₦11.8m", type: "Fully Detached" },
                { size: "500 SQM", price: "₦16.8m", type: "Detached + BQ" }
            ]
        },
        {
            id: "soluxe-court",
            title: "Soluxe Court Kuje",
            location: "Beside SS Simon & Jude Seminary, Kuje",
            badge: "Budget Friendly",
            status: "FCDA Approved",
            // UPDATED: Using the simple renamed file
            image: "/images/kuje.jpg",
            description: "The most affordable FCDA approved land in the axis.",
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
        // UPDATED: Selection color is now Blue
        <div className="min-h-screen bg-black text-white pt-24 font-sans selection:bg-[#0088FF] selection:text-white">

            {/* HEADER */}
            <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter text-white">
            // UPDATED: Gradient text is now Blue
                        Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088FF] to-blue-600">Inventory</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Direct from developer. FCDA Verified. High ROI.
                    </p>
                </div>
                <div className="flex gap-4 mt-6 md:mt-0">
                    <div className="bg-[#111] px-6 py-3 border border-white/10 rounded-lg">
            // UPDATED: Text count is now Blue
                        <span className="block text-2xl font-bold text-[#0088FF]">{properties.length}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest">Active Sites</span>
                    </div>
                </div>
            </div>

            {/* PROPERTIES GRID */}
            <div className="container mx-auto px-6 pb-20 space-y-24">
                {properties.map((property, index) => (
                    // UPDATED: Hover border is now Blue
                    <div key={index} className="group relative bg-[#0a0a0a] border border-white/10 hover:border-[#0088FF]/50 transition-all duration-500 overflow-hidden">

                        <div className="flex flex-col lg:flex-row">
                            {/* IMAGE COLUMN */}
                            <div className="lg:w-[45%] relative h-[400px] lg:h-auto overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                                {/* Badges */}
                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  // UPDATED: Badge background is now Blue
                                    <span className="bg-[#0088FF] text-white text-xs font-bold px-4 py-2 uppercase tracking-widest shadow-lg">
                                        {property.badge}
                                    </span>
                                    <span className="bg-white text-black text-xs font-bold px-4 py-2 uppercase tracking-widest shadow-lg flex items-center gap-2">
                                        <CheckCircle className="h-3 w-3" /> {property.status}
                                    </span>
                                </div>
                            </div>

                            {/* INFO COLUMN */}
                            <div className="lg:w-[55%] p-8 lg:p-12 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                    // UPDATED: Hover text color is now Blue
                                        <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#0088FF] transition-colors">
                                            {property.title}
                                        </h2>
                                        {property.id === "estora-maitama" && <Star className="text-yellow-500 fill-yellow-500 h-6 w-6 animate-pulse" />}
                                    </div>

                  // UPDATED: Map icon is now Blue
                                    <p className="text-gray-400 flex items-center gap-2 mb-6 text-sm uppercase tracking-wider">
                                        <MapPin className="h-4 w-4 text-[#0088FF]" /> {property.location}
                                    </p>

                                    <p className="text-gray-300 mb-8 font-light leading-relaxed border-l-2 border-white/20 pl-4">
                                        {property.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* PRICING */}
                                        <div className="bg-[#111] p-6 border border-white/5">
                      // UPDATED: Icon is now Blue
                                            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                                <TrendingUp className="h-4 w-4 text-[#0088FF]" /> Price List
                                            </h3>
                                            <ul className="space-y-3">
                                                {property.prices.map((price, i) => (
                                                    <li key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
                                                        <span className="text-gray-500">{price.size}</span>
                                                        <div className="text-right">
                                                            {price.oldPrice && (
                                                                // UPDATED: Strike-through text is now a visible light Blue
                                                                <span className="block text-xs text-blue-400 line-through decoration-blue-400">{price.oldPrice}</span>
                                                            )}
                                                            <span className="block font-bold text-white">{price.price}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* FACILITIES */}
                                        <div className="bg-[#111] p-6 border border-white/5">
                      // UPDATED: Icon is now Blue
                                            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                                <Zap className="h-4 w-4 text-[#0088FF]" /> Amenities
                                            </h3>
                                            <ul className="grid grid-cols-1 gap-2">
                                                {property.facilities.map((fac, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-xs text-gray-400">
                            // UPDATED: Bullet point is now Blue
                                                        <div className="h-1.5 w-1.5 bg-[#0088FF] rounded-full"></div>
                                                        {fac}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-xs text-gray-600 uppercase tracking-widest">Soluxe Homes Official</span>
                  // UPDATED: Hover link color is now Blue
                                    <Link href="/contact" className="group/btn flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#0088FF] transition-colors">
                                        Request Layout <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}