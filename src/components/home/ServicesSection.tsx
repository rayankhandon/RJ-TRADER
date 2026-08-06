import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Package,
  Droplets,
  Warehouse,
  Box,
  Truck,
  Headphones,
} from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const services = [
    {
      num: "01",
      title: "WHOLESALE SUPPLY",
      desc: "Reliable bulk supply solutions for retailers, distributors, commercial buyers and growing businesses.",
      points: ["Bulk Orders", "Business Supply", "Product Sourcing"],
      ctaText: "LEARN MORE",
      link: "/products",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Warehouse inventory shelves stacked with wholesale goods",
      icon: Package,
    },
    {
      num: "02",
      title: "OILS & LUBRICANTS",
      desc: "A practical range of automotive and industrial oils and lubricants for commercial requirements.",
      points: ["Engine Oils", "Industrial Oils", "Automotive Fluids"],
      ctaText: "VIEW PRODUCTS",
      link: "/products",
      image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Commercial engine oil bottles and industrial lubricants",
      icon: Droplets,
    },
    {
      num: "03",
      title: "WAREHOUSING",
      desc: "Flexible storage solutions designed to support inventory, bulk goods and business operations.",
      points: ["Product Storage", "Inventory Handling", "Bulk Goods"],
      ctaText: "LEARN MORE",
      link: "/packaging",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Forklift moving pallets in modern industrial warehouse",
      icon: Warehouse,
    },
    {
      num: "04",
      title: "PACKAGING SOLUTIONS",
      desc: "Professional packaging services for safer handling, storage, transportation and distribution.",
      points: ["Industrial Packaging", "Secure Packing", "Custom Solutions"],
      ctaText: "GET A QUOTE",
      isModal: true,
      image: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Professional packaging technician sealing cardboard boxes",
      icon: Box,
    },
    {
      num: "05",
      title: "LOGISTICS & DELIVERY",
      desc: "Reliable logistics support for moving wholesale and commercial goods across Pakistan.",
      points: ["Nationwide Delivery", "Business Distribution", "Order Dispatch"],
      ctaText: "LEARN MORE",
      link: "/delivery",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Logistics delivery truck transporting wholesale cargo nationwide",
      icon: Truck,
    },
    {
      num: "06",
      title: "CUSTOMER SUPPORT",
      desc: "Dedicated assistance for product inquiries, quotations, orders and delivery coordination.",
      points: ["Product Assistance", "Quote Support", "Order Updates"],
      ctaText: "CONTACT US",
      link: "/contact",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Dedicated B2B customer support representative with headset",
      icon: Headphones,
    },
  ];

  return (
    <section
      className="w-full py-14 lg:py-20 border-b border-gray-200"
      style={{ background: "linear-gradient(180deg, #fdf6f0 0%, #ffffff 100%)" }}
    >
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-black tracking-widest text-[#F97316] uppercase mb-1.5">
              OUR SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#06182F] uppercase tracking-tight font-sans">
              HOW CAN WE SUPPORT YOUR BUSINESS?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-normal mt-2 max-w-2xl mx-auto leading-relaxed">
              From sourcing to delivery, RJ Traders provides practical solutions that help businesses manage their supply requirements more efficiently.
            </p>
          </div>
        </AnimatedSection>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <AnimatedSection key={idx} delayMs={idx * 100} className="h-full">
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full hover:-translate-y-1">
                  
                  <div>
                    {/* Top Image Thumbnail with Overlapping Icon Badge */}
                    <div className="relative w-full h-52 sm:h-56 bg-gray-100 overflow-hidden">
                      <img
                        src={srv.image}
                        alt={srv.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Floating Orange Icon Badge Overlapping Bottom Left */}
                      <div className="absolute -bottom-5 left-6 z-10 w-11 h-11 rounded-xl bg-[#F97316] text-white flex items-center justify-center shadow-md border-2 border-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="pt-8 px-6 pb-4">
                      <h3 className="text-base sm:text-lg font-black text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors font-sans">
                        {srv.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mt-2 line-clamp-2">
                        {srv.desc}
                      </p>

                      {/* Bullet List */}
                      <ul className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                        {srv.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="px-6 pb-6 pt-2 mt-auto">
                    {srv.isModal ? (
                      <button
                        type="button"
                        onClick={onOpenQuoteModal}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#F97316] group-hover:text-[#EA580C] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>{srv.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <Link
                        href={srv.link || "/products"}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#F97316] group-hover:text-[#EA580C] uppercase tracking-wider transition-colors"
                      >
                        <span>{srv.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
