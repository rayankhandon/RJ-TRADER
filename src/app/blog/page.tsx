"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { OrderTrackingModal } from "@/components/ui/OrderTrackingModal";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { BLOG_POSTS } from "@/data/blogPosts";
import { ChevronRight, Clock, Calendar, ArrowRight, Sparkles, Filter, BookOpen, Layers, RefreshCw, ShieldCheck } from "lucide-react";

const ActionShotImage = ({ src, fallbackSrc, alt, className }: { src: string; fallbackSrc: string; alt: string; className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        setHasError(true);
        setImgSrc(fallbackSrc);
      }}
      className={className || "w-full h-full object-cover object-center"}
    />
  );
};

export default function BlogListingPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const categories = ["ALL", "OIL CARE TIPS", "SAFETY & MAINTENANCE", "SPARE PARTS GUIDE", "MAINTENANCE GUIDE"];

  const handleCategoryChange = (cat: string) => {
    if (cat === selectedCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(cat);
      setIsTransitioning(false);
    }, 200);
  };

  const filteredPosts =
    selectedCategory === "ALL"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <TopBar />
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenTrackingModal={() => setIsTrackModalOpen(true)}
      />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Header Banner */}
      <div 
        className="text-white py-10 lg:py-14 border-b border-white/10 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1730 0%, #0d1f3f 60%, #0a1730 100%)"
        }}
      >
        <style>{`
          @keyframes drawUnderline {
            0% { width: 0px; opacity: 0; }
            100% { width: 80px; opacity: 1; }
          }
        `}</style>

        {/* Soft Radial Glow behind Right Column */}
        <div 
          className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[400px] rounded-full pointer-events-none blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.85) 0%, transparent 65%)"
          }}
        />

        {/* Diagonal Line Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(45deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
            backgroundSize: "24px 24px"
          }}
        />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column (~65% width) */}
            <div className="lg:col-span-7 lg:pr-4 space-y-4">
              {/* Breadcrumb with fade-in */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold animate-load-subtext">
                <Link href="/" className="text-white hover:underline transition-all">HOME</Link>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <span className="text-[#F97316] font-bold">BLOG &amp; ARTICLES</span>
              </div>

              {/* Badge with pulsing glow */}
              <div 
                style={{ animationDelay: "100ms" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/15 border border-[#F97316]/50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.25)] animate-[pulse_3s_ease-in-out_infinite]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>INSIGHTS &amp; GUIDES</span>
              </div>

              {/* Heading with drawUnderline animation */}
              <div 
                style={{ animationDelay: "200ms" }}
                className="relative"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans animate-load-heading">
                  ENGINE OIL &amp; SPARE PARTS ARTICLES
                </h1>
                <div 
                  className="h-[3px] bg-[#F97316] rounded-full mt-3.5 animate-[drawUnderline_0.6s_ease-out_0.4s_forwards]"
                  style={{ width: "0px" }}
                />
              </div>

              {/* Subtitle Paragraph */}
              <p 
                style={{ animationDelay: "300ms" }}
                className="text-xs sm:text-sm text-[#B8C4D9] max-w-2xl font-normal leading-relaxed animate-load-subtext pt-1"
              >
                Expert B2B maintenance guides, lubricant grade comparisons, brake rotor safety standards, and heavy fleet part replacement advice from RJ Traders.
              </p>
            </div>

            {/* Right Column (~35% width) - Single Cohesive Summary Panel */}
            <div className="lg:col-span-5 pt-2 lg:pt-0">
              <div 
                style={{ animationDelay: "400ms" }}
                className="rounded-[16px] bg-white/[0.03] border border-white/[0.08] p-6 sm:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-[#F97316]/40 hover:shadow-[0_12px_40px_rgba(249,115,22,0.12)] transition-all duration-300 backdrop-blur-md animate-feature-box"
              >
                {/* Top Row */}
                <div className="grid grid-cols-2 gap-5 sm:gap-6">
                  {/* Stat 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-black text-white uppercase tracking-tight">12+ Articles</div>
                      <div className="text-[10px] sm:text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Published Lube Guides</div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-black text-white uppercase tracking-tight">4 Core Topics</div>
                      <div className="text-[10px] sm:text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Oil &amp; Parts Categories</div>
                    </div>
                  </div>
                </div>

                {/* Thin Divider Line */}
                <div className="border-t border-white/[0.06] my-5" />

                {/* Bottom Row */}
                <div className="grid grid-cols-2 gap-5 sm:gap-6">
                  {/* Stat 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-black text-white uppercase tracking-tight">Updated Weekly</div>
                      <div className="text-[10px] sm:text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Fresh Industry Advice</div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-black text-white uppercase tracking-tight">100% Verified</div>
                      <div className="text-[10px] sm:text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">OEM Fleet Technicals</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <main className="flex-1 w-full py-12 lg:py-16 space-y-12 lg:space-y-14">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Featured Article Card */}
          {featuredPost && (
            <AnimatedSection delayMs={100}>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="block bg-white rounded-[16px] border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)] hover:-translate-y-[4px] transition-all duration-300 ease-out overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Featured Image Box */}
                  <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] bg-gray-100 overflow-hidden">
                    <ActionShotImage
                      src={featuredPost.featuredImage}
                      fallbackSrc={featuredPost.fallbackImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    {/* Dark gradient overlay at bottom-left corner for text/badge readability */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top right, rgba(6,24,47,0.85) 0%, rgba(6,24,47,0.4) 35%, transparent 70%)"
                      }}
                    />

                    {/* FEATURED ARTICLE Badge with Pulsing Glow */}
                    <div className="absolute top-4 left-4 z-10 bg-[#06182F] border border-[#F97316]/50 text-[#F97316] text-[10px] font-black uppercase px-3.5 py-1.5 rounded-md tracking-wider shadow-[0_0_12px_rgba(249,115,22,0.3)] animate-[pulse_3s_ease-in-out_infinite]">
                      FEATURED ARTICLE
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-gray-500">
                        <span className="text-[#F97316] uppercase font-black tracking-wider hover:underline transition-all">
                          {featuredPost.category}
                        </span>
                        <span className="text-[#F97316] font-bold">•</span>
                        <span className="flex items-center gap-1.5 text-gray-500">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors leading-snug">
                        {featuredPost.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                        {featuredPost.summary}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
                      {/* Author Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#F97316]/30 shadow-xs"
                        />
                        <div>
                          <span className="text-xs font-extrabold text-[#06182F] block">
                            {featuredPost.author.name}
                          </span>
                          <span className="text-[10px] text-gray-500 font-medium block">
                            {featuredPost.author.role}
                          </span>
                        </div>
                      </div>

                      {/* READ FULL ARTICLE Button */}
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97316] group-hover:bg-[#ea580c] text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-[1.05] group-hover/btn">
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                  </div>

                </div>
              </Link>
            </AnimatedSection>
          )}

          {/* Category Filter Tabs */}
          <AnimatedSection delayMs={150}>
            <div className="relative">
              <div className="flex items-center gap-2 mb-3 text-[11px] font-black uppercase text-gray-500 tracking-[0.5px]">
                <Filter className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <span>FILTER ARTICLES BY CATEGORY:</span>
              </div>
              <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2">
                {categories.map((cat, catIdx) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      style={{ animationDelay: `${catIdx * 40}ms` }}
                      onClick={() => handleCategoryChange(cat)}
                      className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer whitespace-nowrap inline-flex items-center justify-center animate-feature-box ${
                        isActive
                          ? "bg-[#06182F] text-white border border-[#06182F] shadow-md shadow-[#06182F]/20 scale-[1.03]"
                          : "bg-white text-[#06182F] border border-black/[0.08] hover:bg-[#F97316]/[0.08] hover:border-[#F97316] hover:text-[#F97316]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* 3-Column Articles Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 transition-all duration-300 ease-out ${
            isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}>
            {filteredPosts.map((post, idx) => (
              <AnimatedSection key={post.id} delayMs={idx * 90} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-[12px] border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:-translate-y-[8px] transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between group h-full cursor-pointer"
                >
                  <div>
                    {/* Post Image Container */}
                    <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden shrink-0 border-b border-black/[0.05]">
                      <ActionShotImage
                        src={post.featuredImage}
                        fallbackSrc={post.fallbackImage}
                        alt={post.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.08] transition-transform duration-500 ease-out"
                      />
                      {/* Glassmorphic Category Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10 bg-[#06182F]/80 backdrop-blur-md text-[#F97316] text-[10px] font-black uppercase px-3 py-1 rounded-md tracking-wider shadow-sm border border-white/10">
                        {post.category}
                      </div>
                    </div>

                    {/* Post Text Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400">
                        <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-base sm:text-[17px] font-extrabold text-[#06182F] uppercase tracking-tight group-hover:text-[#F97316] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-gray-600 font-normal leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-3.5 flex items-center justify-between border-t border-black/[0.05]">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-gray-200"
                      />
                      <span className="text-[11px] font-extrabold text-[#06182F]">
                        {post.author.name}
                      </span>
                    </div>

                    <div className="text-xs font-black text-[#06182F] group-hover:text-[#F97316] uppercase tracking-wider flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F97316]" />
                    </div>
                  </div>

                </Link>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWidgets onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <OrderTrackingModal isOpen={isTrackModalOpen} onClose={() => setIsTrackModalOpen(false)} />
    </div>
  );
}

