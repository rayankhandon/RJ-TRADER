import React from "react";
import { Star, Quote, Building2, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Tariq Mahmood",
      company: "Lahore Auto Supplies & Spares",
      role: "Managing Director",
      rating: 5,
      quote: "RJ Traders has been our primary wholesale lube supplier for 4 years. Their 208L drums are always genuine quality, delivered on time, and priced competitively across Punjab.",
    },
    {
      name: "Shahid Iqbal",
      company: "National Freight Logistics Hub",
      role: "Fleet Maintenance Manager",
      rating: 5,
      quote: "Running 65 heavy trucks requires reliable 20W-50 engine oil and gear fluids. RJ Traders handles bulk supply seamlessly with zero fleet downtime.",
    },
    {
      name: "Zubair Ahmad",
      company: "Apex Packaging Solutions Ltd",
      role: "Operations Head",
      rating: 5,
      quote: "Their custom drum labeling and steel container packaging service saved us weeks of hassle. Professional B2B team that responds instantly.",
    },
  ];

  return (
    <section className="w-full bg-[#07172B] text-white py-14 lg:py-20 border-t border-white/10 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[11px] font-extrabold tracking-widest uppercase mb-3">
              <Quote className="w-3.5 h-3.5" />
              <span>CLIENT REVIEWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-4">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              Trusted by distributors, logistics fleets, industrial plants, and retail chains across Pakistan.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <AnimatedSection key={idx} delayMs={idx * 100}>
              <div className="bg-[#0D233E]/80 border border-white/10 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#F97316]/50 transition-all duration-300 shadow-xl group hover:-translate-y-1 h-full">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#F97316] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316]" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold uppercase text-white group-hover:text-[#F97316] transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#F97316]/20 border border-[#F97316]/50 flex items-center justify-center text-[#F97316] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
