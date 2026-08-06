import React from "react";
import { Star, Quote, Building2, Building, Truck, ShieldCheck, PackageCheck } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Tariq Mahmood",
      initials: "TM",
      company: "Lahore Auto Supplies & Spares",
      role: "Managing Director",
      rating: 5,
      quote: "RJ Traders has been our primary wholesale lube supplier for 4 years. Their 208L drums are always genuine quality, delivered on time, and priced competitively across Punjab.",
    },
    {
      name: "Shahid Iqbal",
      initials: "SI",
      company: "National Freight Logistics Hub",
      role: "Fleet Maintenance Manager",
      rating: 5,
      quote: "Running 65 heavy trucks requires reliable 20W-50 engine oil and gear fluids. RJ Traders handles bulk supply seamlessly with zero fleet downtime.",
    },
    {
      name: "Zubair Ahmad",
      initials: "ZA",
      company: "Apex Packaging Solutions Ltd",
      role: "Operations Head",
      rating: 5,
      quote: "Their custom drum labeling and steel container packaging service saved us weeks of hassle. Professional B2B team that responds instantly.",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "WHOLESALE PARTNERS",
      subtext: "Commercial Distributors",
      icon: Building,
    },
    {
      number: "10+",
      label: "PAKISTAN CITIES",
      subtext: "Nationwide Coverage",
      icon: Truck,
    },
    {
      number: "200+",
      label: "B2B CLIENTS",
      subtext: "Active Businesses",
      icon: ShieldCheck,
    },
    {
      number: "5,000+",
      label: "ORDERS PACKAGED",
      subtext: "Quality Delivered",
      icon: PackageCheck,
    },
  ];

  return (
    <section className="w-full bg-[#07172B] text-white py-16 lg:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Decorative Radial Glow behind Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/15 border border-[#F97316]/35 text-[#F97316] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3.5 backdrop-blur-xs">
              <Quote className="w-3.5 h-3.5" />
              <span>CLIENT REVIEWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-3.5">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Trusted by distributors, logistics fleets, industrial plants, and retail chains across Pakistan.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <AnimatedSection key={idx} delayMs={idx * 100} className="h-full">
              <div className="bg-[#0D233E]/90 border border-white/10 border-t-2 border-t-[#F97316] rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#F97316]/60 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group hover:-translate-y-1.5 h-full relative overflow-hidden">
                
                {/* Large Faded Decorative Quote Mark */}
                <Quote className="absolute top-4 right-5 w-16 h-16 text-[#F97316]/10 group-hover:text-[#F97316]/20 transition-colors pointer-events-none" />

                <div className="relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5 text-[#F97316] mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316]" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic mb-8 font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Client Info with Initial Avatar Circle */}
                <div className="pt-5 border-t border-white/10 flex items-center gap-3.5 relative z-10">
                  {/* Avatar Initials Circle */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md border border-white/20">
                    {item.initials}
                  </div>

                  <div className="overflow-hidden">
                    <h4 className="text-sm font-extrabold uppercase text-white group-hover:text-[#F97316] transition-colors truncate">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5 truncate">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{item.company}</span>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 4 Upgraded Achievement Stat Cards (Reduced Gap ~40-50px) */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0D233E] to-[#0A1D34] border border-white/10 hover:border-[#F97316]/50 flex flex-col items-center justify-center text-center space-y-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-200 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#F97316] font-sans tracking-tight">
                    {st.number}
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-white">
                      {st.label}
                    </div>
                    <div className="text-[11px] font-medium text-gray-400 mt-0.5">
                      {st.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
