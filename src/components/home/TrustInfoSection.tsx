"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Wrench,
  Truck,
  Car,
  Boxes,
  Building2,
  Package,
  HardHat,
  Tractor,
  ShieldCheck,
  Users,
  Headphones,
  LucideIcon
} from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { PakistanGisMap } from "./PakistanGisMap";

interface TrustInfoSectionProps {
  onOpenQuoteModal?: () => void;
}

interface StatDef {
  targetNum: number;
  suffix: string;
  staticText?: string;
  label1: string;
  label2: string;
  icon: LucideIcon;
  delayMs: number;
}

// Compact Single Stat Component (~110-125px tall on desktop)
const AnimatedStatItem: React.FC<{ stat: StatDef; isVisible: boolean }> = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isVisible || stat.targetNum === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(stat.targetNum);
      return;
    }

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * stat.targetNum));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(stat.targetNum);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, stat.targetNum]);

  const displayValue = stat.targetNum > 0
    ? `${count.toLocaleString()}${stat.suffix}`
    : stat.staticText;

  return (
    <div
      style={{
        transitionDelay: `${stat.delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
      }}
      className={`group relative py-1 px-2 flex flex-col items-center justify-center cursor-default transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"
        }`}
    >
      {/* Icon Container with Subtle Orange Pulse & Hover Elevation */}
      <div className="w-8 h-8 rounded-full bg-[#FFF1E7] text-[#FF6B00] flex items-center justify-center mb-1 shrink-0 transition-all duration-300 group-hover:-translate-y-[3px] group-hover:scale-[1.08] group-hover:bg-[#FFE8D6] group-hover:shadow-md group-hover:shadow-[#FF6B00]/25">
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Stat Number */}
      <div className="text-lg sm:text-xl font-black text-[#071A33] tracking-tight font-sans transition-transform duration-300 group-hover:-translate-y-[2px] leading-none">
        {displayValue}
      </div>

      {/* Labels */}
      <div className="text-[10px] sm:text-[10.5px] font-extrabold text-[#5B6472] uppercase mt-1 leading-tight tracking-wider text-center">
        <div>{stat.label1}</div>
        <div>{stat.label2}</div>
      </div>

      {/* Thin Orange Accent Line on Hover (32px) */}
      <div className="w-0 h-[2px] bg-[#FF6B00] rounded-full transition-all duration-250 ease-out group-hover:w-[32px] mt-1.5 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export const TrustInfoSection: React.FC<TrustInfoSectionProps> = () => {
  const customerCategories = [
    {
      title: "AUTO REPAIR WORKSHOPS",
      description: "Engine oils, filters & genuine spare parts for daily workshop needs.",
      icon: Wrench,
    },
    {
      title: "FLEET & TRANSPORT HUBS",
      description: "Bulk lubricants and maintenance parts for commercial fleets.",
      icon: Truck,
    },
    {
      title: "COMMERCIAL VEHICLE OUTLETS",
      description: "Products for trucks, buses, vans and heavy-duty vehicles.",
      icon: Car,
    },
    {
      title: "SPARE PART RETAILERS",
      description: "Reliable wholesale supply with competitive bulk pricing.",
      icon: Boxes,
    },
    {
      title: "CAR DEALERSHIPS",
      description: "Genuine oils and maintenance parts for dealership service centers.",
      icon: Building2,
    },
    {
      title: "LOGISTICS COMPANIES",
      description: "Lubricants and spare parts for high-mileage transport operations.",
      icon: Package,
    },
    {
      title: "CONSTRUCTION & HEAVY EQUIPMENT",
      description: "Heavy-duty engine oils and parts for machinery and equipment.",
      icon: HardHat,
    },
    {
      title: "AGRICULTURAL & TRACTOR BUSINESSES",
      description: "Reliable lubricants and replacement parts for tractors and agricultural vehicles.",
      icon: Tractor,
    },
  ];

  // Statistics Definitions
  const statisticsList: StatDef[] = [
    {
      targetNum: 10000,
      suffix: "+",
      label1: "PARTS & LUBRICANTS",
      label2: "IN STOCK",
      icon: Package,
      delayMs: 0,
    },
    {
      targetNum: 500,
      suffix: "+",
      label1: "WORKSHOPS & RETAILERS",
      label2: "SERVED",
      icon: Users,
      delayMs: 100,
    },
    {
      targetNum: 0,
      suffix: "",
      staticText: "Nationwide",
      label1: "DELIVERY ACROSS",
      label2: "PAKISTAN",
      icon: Truck,
      delayMs: 200,
    },
    {
      targetNum: 100,
      suffix: "%",
      label1: "GENUINE PRODUCTS",
      label2: "GUARANTEED",
      icon: ShieldCheck,
      delayMs: 300,
    },
    {
      targetNum: 0,
      suffix: "",
      staticText: "Dedicated",
      label1: "24/7 B2B",
      label2: "SUPPORT",
      icon: Headphones,
      delayMs: 400,
    },
  ];

  // Map Entrance Observer
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapVisible, setMapVisible] = useState(false);

  // Stats Entrance Observer
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observerMap = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observerMap.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const observerStats = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observerStats.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (mapContainerRef.current) observerMap.observe(mapContainerRef.current);
    if (statsContainerRef.current) observerStats.observe(statsContainerRef.current);

    return () => {
      observerMap.disconnect();
      observerStats.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-[#F8FAFC] py-10 lg:py-14 border-b border-[#E5E7EB] relative">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 space-y-7">

        {/* SECTION HEADER - LEFT ALIGNED */}
        <AnimatedSection>
          <div className="text-left space-y-1">
            <span className="text-[11px] font-extrabold tracking-widest text-[#FF6B00] uppercase block">
              WHOLESALE CLIENTELE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071A33] uppercase tracking-tight font-sans">
              INDUSTRIES WE SUPPLY
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6472] font-normal leading-relaxed">
              RJ Traders is the trusted supply partner for workshops, fleet operators, transport companies, and retailers across Pakistan.
            </p>
          </div>
        </AnimatedSection>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

            {/* LEFT SIDE — 8 CUSTOMER CARDS */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 h-full">
                {customerCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <AnimatedSection key={idx} delayMs={idx * 100} className="h-full">
                      <div
                        className="group bg-white rounded-[16px] border border-[#E5E7EB] p-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#FF6B00] hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)] hover:-translate-y-[6px] transition-all duration-300 ease-out flex flex-col justify-between h-full cursor-default"
                      >
                        <div className="space-y-2.5">
                          {/* Icon & Title Row */}
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#FFF1E7] text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-2xs">
                              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                            </div>
                            <h3 className="text-xs sm:text-[13px] font-extrabold text-[#071A33] group-hover:text-[#FF6B00] transition-colors duration-300 uppercase tracking-tight leading-snug">
                              {cat.title}
                            </h3>
                          </div>

                          {/* Short Description */}
                          <p className="text-[11.5px] text-[#5B6472] font-normal leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE — NATIONWIDE DELIVERY MAP PANEL (SaaS Dashboard Look) */}
            <div className="lg:col-span-5 bg-[#071A33] text-white rounded-[20px] border border-white/10 p-5 sm:p-6 flex flex-col justify-between h-full min-h-[480px] shadow-xl relative overflow-hidden">

              {/* Header: Title + Subtitle */}
              <div className="relative z-10 space-y-0.5 mb-2">
                <h3 className="text-2xl sm:text-[26px] font-black uppercase text-white tracking-tight font-sans">
                  NATIONWIDE DELIVERY
                </h3>
                <p className="text-xs text-[#94A3B8] font-normal leading-relaxed">
                  Fast &amp; reliable engine oil &amp; spare parts delivery across Pakistan.
                </p>
              </div>

              {/* Real GIS Pakistan Vector Map Canvas Container */}
              <div ref={mapContainerRef} className="my-2 w-full flex-1 flex items-center justify-center">
                <PakistanGisMap isVisible={mapVisible} />
              </div>

              {/* Bottom Coverage Footer */}
              <div className="relative z-10 pt-3 border-t border-white/12 space-y-0.5 mt-1">
                <span className="text-[10px] font-extrabold text-[#FF6B00] uppercase tracking-wider block">
                  NATIONWIDE COVERAGE
                </span>
                <p className="text-xs text-[#CBD5E1] font-normal leading-snug">
                  Serving workshops, retailers, fleets &amp; businesses across Pakistan.
                </p>
              </div>

            </div>

          </div>
        </AnimatedSection>

        {/* SLIM HIGH-END B2B STATISTICS STRIP (~110-125PX HEIGHT) */}
        <div ref={statsContainerRef}>
          <div className="bg-white rounded-[18px] border border-[#E5E7EB] px-4 py-3 sm:py-3.5 shadow-[0_3px_12px_rgba(0,0,0,0.02)] overflow-hidden min-h-[110px] md:min-h-[120px] flex items-center justify-center">
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 text-center divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] items-center">
              {statisticsList.map((st, idx) => (
                <div
                  key={idx}
                  className={`${idx === 4 ? "col-span-2 md:col-span-1 pt-2 md:pt-0" : ""
                    } ${idx !== 0 && idx !== 4 ? "pt-2 md:pt-0" : ""}`}
                >
                  <AnimatedStatItem stat={st} isVisible={statsVisible} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
