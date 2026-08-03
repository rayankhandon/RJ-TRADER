import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      ctaText: "LEARN MORE →",
      link: "/products",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Warehouse inventory shelves stacked with wholesale goods",
    },
    {
      num: "02",
      title: "OILS & LUBRICANTS",
      desc: "A practical range of automotive and industrial oils and lubricants for commercial requirements.",
      points: ["Engine Oils", "Industrial Oils", "Automotive Fluids"],
      ctaText: "VIEW PRODUCTS →",
      link: "/products",
      image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Commercial engine oil bottles and industrial lubricants",
    },
    {
      num: "03",
      title: "WAREHOUSING",
      desc: "Flexible storage solutions designed to support inventory, bulk goods and business operations.",
      points: ["Product Storage", "Inventory Handling", "Bulk Goods"],
      ctaText: "LEARN MORE →",
      link: "/packaging",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Forklift moving pallets in modern industrial warehouse",
    },
    {
      num: "04",
      title: "PACKAGING SOLUTIONS",
      desc: "Professional packaging services for safer handling, storage, transportation and distribution.",
      points: ["Industrial Packaging", "Secure Packing", "Custom Solutions"],
      ctaText: "GET A QUOTE →",
      isModal: true,
      image: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Professional packaging technician sealing cardboard boxes",
    },
    {
      num: "05",
      title: "LOGISTICS & DELIVERY",
      desc: "Reliable logistics support for moving wholesale and commercial goods across Pakistan.",
      points: ["Nationwide Delivery", "Business Distribution", "Order Dispatch"],
      ctaText: "LEARN MORE →",
      link: "/delivery",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Logistics delivery truck transporting wholesale cargo nationwide",
    },
    {
      num: "06",
      title: "CUSTOMER SUPPORT",
      desc: "Dedicated assistance for product inquiries, quotations, orders and delivery coordination.",
      points: ["Product Assistance", "Quote Support", "Order Updates"],
      ctaText: "CONTACT US →",
      link: "/contact",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&h=450&q=80",
      alt: "Dedicated B2B customer support representative with headset",
    },
  ];

  return (
    <section className="w-full bg-[#F5F6F8] py-12 lg:py-16 border-b border-gray-200">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-[11px] font-extrabold tracking-widest text-[#F97316] uppercase mb-1">
                B2B SERVICES OVERVIEW
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#06182F] uppercase tracking-tight font-sans">
                HOW CAN WE SUPPORT YOUR BUSINESS?
              </h2>
              <p className="text-sm text-gray-600 font-normal mt-2 max-w-2xl">
                From sourcing to delivery, RJ Traders provides practical solutions that help businesses manage their supply requirements more efficiently.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#F97316] hover:text-[#EA580C] uppercase tracking-wider transition-colors shrink-0"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <AnimatedSection key={idx} delayMs={idx * 100}>
              <div className="bg-white rounded-lg border border-gray-200 flex flex-col justify-between hover:shadow-md transition-all group relative overflow-hidden h-full">
                <div>
                  {/* Card Thumbnail Image (4:3 aspect ratio) in full natural color */}
                  <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden border-b border-gray-100">
                    <img
                      src={srv.image}
                      alt={srv.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-xs font-black px-2.5 py-1 rounded bg-[#06182F] text-white font-mono shadow-md border border-white/20">
                        {srv.num}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-black text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors font-sans">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {srv.desc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-gray-100">
                      {srv.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-auto">
                  {srv.isModal ? (
                    <button
                      type="button"
                      onClick={onOpenQuoteModal}
                      className="inline-flex items-center gap-2 text-xs font-black text-[#06182F] group-hover:text-[#F97316] transition-colors cursor-pointer"
                    >
                      <span>{srv.ctaText}</span>
                    </button>
                  ) : (
                    <Link
                      href={srv.link || "/products"}
                      className="inline-flex items-center gap-2 text-xs font-black text-[#06182F] group-hover:text-[#F97316] transition-colors"
                    >
                      <span>{srv.ctaText}</span>
                    </Link>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
