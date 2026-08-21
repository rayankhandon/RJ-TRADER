"use client";

import React from "react";
import { ShieldCheck, Tag, Truck, CheckCircle2, Headphones, Boxes } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "GENUINE PRODUCTS",
      desc: "Original & Quality Assured",
    },
    {
      icon: Tag,
      title: "WHOLESALE PRICING",
      desc: "Competitive Bulk Rates for Workshops, Fleets, and Retailers",
    },
    {
      icon: Truck,
      title: "FAST DELIVERY",
      desc: "Reliable Nationwide Shipping",
    },
    {
      icon: CheckCircle2,
      title: "QUALITY CHECKED",
      desc: "Every Part and Oil Batch Inspected Before Shipping",
    },
    {
      icon: Headphones,
      title: "EXPERT SUPPORT",
      desc: "Knowledgeable Assistance When You Need It",
    },
    {
      icon: Boxes,
      title: "WIDE SELECTION",
      desc: "Thousands of Truck Parts and Oil Grades Available",
    },
  ];

  return (
    <section className="w-full bg-[#F7F8FA] border-b border-[#E5E7EB] py-14 lg:py-16">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
            <div className="text-[11px] font-extrabold tracking-widest text-[#F97316] uppercase mb-1.5">
              WHY CHOOSE RJ TRADERS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06182F] uppercase tracking-tight font-sans">
              EVERYTHING YOU NEED TO KEEP YOUR TRUCK MOVING
            </h2>
          </div>
        </AnimatedSection>

        {/* 6 Equal-Width Cards Grid (2 cols Mobile, 3 cols Tablet, 6 cols Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4.5 lg:gap-5 items-stretch">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={idx} delayMs={idx * 70} className="h-full">
                <div className="bg-white rounded-[16px] border border-[#E5E7EB] p-4 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:border-[#F97316]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full cursor-default">
                  
                  <div>
                    {/* Soft Light-Orange Circular Icon Container */}
                    <div className="w-11 h-11 rounded-full bg-[#F97316]/10 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 mb-4 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Benefit Title */}
                    <h3 className="text-[14px] font-black text-[#06182F] uppercase tracking-tight font-sans group-hover:text-[#F97316] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Small Orange Accent Line */}
                    <div className="w-6 h-0.5 bg-[#F97316] rounded-full my-2 group-hover:w-10 transition-all duration-300" />

                    {/* Benefit Description */}
                    <p className="text-[13px] text-gray-600 leading-relaxed font-normal mt-1">
                      {item.desc}
                    </p>
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
