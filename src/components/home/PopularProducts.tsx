import React from "react";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface PopularProductsProps {
  onOpenQuoteModal: () => void;
}

export const PopularProducts: React.FC<PopularProductsProps> = ({ onOpenQuoteModal }) => {
  const products = [
    {
      title: "ENGINE OILS",
      category: "AUTOMOTIVE FLUIDS",
      desc: "Synthetic & mineral engine oils for petrol & diesel engines.",
      badge: "BULK AVAILABLE",
      image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Motor oil bottle container product shot",
    },
    {
      title: "208L OIL DRUMS",
      category: "INDUSTRIAL BULK",
      badge: "208L DRUMS",
      desc: "Heavy-duty steel drums for industrial lubricant supply.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Steel oil drums product shot",
    },
    {
      title: "INDUSTRIAL LUBRICANTS",
      category: "COMMERCIAL SUPPLY",
      badge: "HIGH PERFORMANCE",
      desc: "Multi-purpose machinery grease & friction reduction fluids.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Industrial grease cans and lubricants product shot",
    },
    {
      title: "HYDRAULIC FLUIDS",
      category: "HEAVY MACHINERY",
      badge: "INDUSTRIAL GRADE",
      desc: "Anti-wear hydraulic oil for machinery & manufacturing.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Hydraulic oil canister product shot",
    },
    {
      title: "AUTOMOTIVE COOLANTS",
      category: "FLEET MAINTENANCE",
      badge: "COMMERCIAL FLEET",
      desc: "Radiator coolant & antifreeze for commercial vehicles.",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Automotive coolant bottles product shot",
    },
    {
      title: "GEAR & TRANSMISSION OILS",
      category: "DRIVETRAIN FLUIDS",
      badge: "WHOLESALE SUPPLY",
      desc: "Extreme pressure gear oils for heavy commercial transport.",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Transmission gear oil container product shot",
    },
    {
      title: "INDUSTRIAL PACKAGING",
      category: "PACKAGING MATERIAL",
      badge: "CUSTOM SOURCING",
      desc: "Corrugated boxes, strapping & heavy-duty shipping containers.",
      image: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Packaging boxes product shot",
    },
    {
      title: "BRAKE & CLUTCH FLUIDS",
      category: "SAFETY FLUIDS",
      badge: "DOT 4 / DOT 3",
      desc: "High boiling point brake fluid for heavy vehicle braking.",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Brake fluid bottle product shot",
    },
    {
      title: "PETROCHEMICAL SOLVENTS",
      category: "CHEMICAL PRODUCTS",
      badge: "BULK BARRELS",
      desc: "Industrial degreasers, cleaning solvents & chemical barrels.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Solvent chemical containers product shot",
    },
    {
      title: "FILTRATION ACCESSORIES",
      category: "HARDWARE & SPARES",
      badge: "WHOLESALE ONLY",
      desc: "Industrial oil filters & bulk fluid transfer accessories.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Wholesale hardware and filters storage product shot",
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-gray-200">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-[11px] font-extrabold tracking-widest text-[#F97316] uppercase mb-1">
              WHOLESALE CATALOG
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06182F] uppercase tracking-tight font-sans">
              EXPLORE OUR WHOLESALE PRODUCTS
            </h2>
            <p className="text-sm text-gray-600 font-normal mt-2 max-w-2xl mx-auto">
              Browse product categories available for wholesale and commercial requirements.
            </p>
            <div className="mt-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#F97316] hover:text-[#EA580C] uppercase tracking-wider transition-colors group"
              >
                <span>VIEW ALL PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* 10 Compact Product Cards Grid (5 per row on desktop, 4 on tablet, 2-3 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {products.map((prod, idx) => (
            <AnimatedSection key={idx} delayMs={idx * 50} className="h-full">
              <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:-translate-y-0.5 h-full">
                
                <div>
                  {/* Clean Studio Product Image Container (1:1 ratio) */}
                  <div className="relative w-full aspect-square bg-[#F8FAFC] border-b border-gray-100 p-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                    />
                    
                    {/* Top-left Category Tag (Subtle outline style) */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="text-[9px] font-bold text-gray-700 bg-white/95 backdrop-blur-xs border border-gray-200 px-2 py-0.5 rounded-md shadow-2xs uppercase tracking-wider">
                        {prod.category}
                      </span>
                    </div>

                    {/* Top-right Secondary Tag (Subtle outline style) */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="text-[8px] font-bold text-gray-600 bg-white/90 backdrop-blur-xs border border-gray-200 px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body (Compact Padding) */}
                  <div className="p-3.5 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-bold text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors font-sans line-clamp-1">
                      {prod.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-gray-500 font-normal line-clamp-1 mt-1">
                      {prod.desc}
                    </p>

                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium mt-2.5">
                      <Tag className="w-3 h-3 text-[#F97316]" />
                      <span>Wholesale Tier</span>
                    </div>
                  </div>
                </div>

                {/* Compact Request Price Button */}
                <div className="px-3.5 pb-3.5 pt-0 mt-auto">
                  <button
                    type="button"
                    onClick={onOpenQuoteModal}
                    className="w-full py-1.5 px-3 bg-[#06182F] hover:bg-[#F97316] text-white text-[11px] font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>REQUEST PRICE</span>
                    <ArrowRight className="w-3 h-3" />
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
