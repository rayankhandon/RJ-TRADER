import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Tag } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface PopularProductsProps {
  onOpenQuoteModal: () => void;
}

export const PopularProducts: React.FC<PopularProductsProps> = ({ onOpenQuoteModal }) => {
  const products = [
    {
      title: "ENGINE OILS",
      category: "Automotive Fluids",
      desc: "High-grade engine oils for petrol, diesel, and heavy-duty commercial transport vehicles.",
      badge: "BULK AVAILABLE",
      image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Motor oil bottle container standing upright in full natural color",
    },
    {
      title: "ENGINE OIL DRUMS",
      category: "Industrial Bulk (208L)",
      desc: "Standard 208L steel drums of commercial engine oils for fleet operators and industrial clients.",
      badge: "208L DRUMS",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Blue and red 208L steel oil drums stacked in full natural color",
    },
    {
      title: "LUBRICANTS",
      category: "Commercial Supply",
      desc: "Multi-purpose industrial lubricants engineered for friction reduction and machine performance.",
      badge: "HIGH PERFORMANCE",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Industrial grease tubs and lubricant containers in full natural color",
    },
    {
      title: "INDUSTRIAL OILS",
      category: "Heavy Machinery Fluids",
      desc: "Hydraulic fluids, gear oils, and specialized machinery oils for manufacturing plants.",
      badge: "INDUSTRIAL GRADE",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Industrial oil canister and hydraulic machinery fluid in full natural color",
    },
    {
      title: "AUTOMOTIVE FLUIDS",
      category: "Fleet Maintenance",
      desc: "Transmission fluids, brake fluids, coolants, and specialized automotive care liquids.",
      badge: "COMMERCIAL FLEET",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Colorful automotive fluid bottles coolants brake fluids in full natural color",
    },
    {
      title: "OTHER PRODUCTS",
      category: "Wholesale & Custom",
      desc: "Custom industrial packaging materials, containers, and non-standard bulk product sourcing.",
      badge: "CUSTOM SOURCING",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Stacked industrial packaging boxes and containers in full natural color",
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-gray-200">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-[11px] font-extrabold tracking-widest text-[#F97316] uppercase mb-1">
                WHOLESALE CATALOG
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#06182F] uppercase tracking-tight font-sans">
                EXPLORE OUR WHOLESALE PRODUCTS
              </h2>
              <p className="text-sm text-gray-600 font-normal mt-2 max-w-2xl">
                Browse product categories available for wholesale and commercial requirements.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#F97316] hover:text-[#EA580C] uppercase tracking-wider transition-colors shrink-0"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 6 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod, idx) => (
            <AnimatedSection key={idx} delayMs={idx * 100}>
              <div className="bg-[#F5F6F8] rounded-lg border border-gray-200 flex flex-col justify-between hover:border-[#F97316]/60 transition-all group overflow-hidden h-full">
                <div>
                  {/* Card Thumbnail Image (4:3 aspect ratio) in full natural color */}
                  <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden border-b border-gray-200">
                    <img
                      src={prod.image}
                      alt={prod.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="text-[10px] font-extrabold text-white uppercase tracking-wider bg-[#F97316] px-2.5 py-1 rounded shadow-md">
                        {prod.category}
                      </span>
                      <span className="text-[9px] font-black text-white uppercase tracking-widest bg-[#06182F]/90 backdrop-blur-xs px-2.5 py-1 rounded shadow-sm border border-white/20">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors font-sans mb-2">
                      {prod.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed font-normal mb-4">
                      {prod.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-gray-200 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                    <Tag className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Wholesale Tier</span>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenQuoteModal}
                    className="bg-[#06182F] hover:bg-[#F97316] hover:scale-[1.02] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>REQUEST PRICE →</span>
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
