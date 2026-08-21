"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";

const ActionShotImage: React.FC<{ src: string; fallbackSrc: string; alt: string }> = ({
  src,
  fallbackSrc,
  alt,
}) => {
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
      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
    />
  );
};

export const HomeBlogSection: React.FC = () => {
  const postsToDisplay = BLOG_POSTS.slice(0, 3);

  return (
    <section className="w-full bg-[#F7F8FA] py-[64px] border-b border-[#E5E7EB]">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Centered Section Header Block */}
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center mb-10 pb-6 border-b border-gray-200/80">
            <div className="text-[11px] font-extrabold tracking-widest text-[#ff7a1a] uppercase mb-1">
              INSIGHTS &amp; GUIDES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#06182F] uppercase tracking-tight font-sans">
              FROM OUR BLOG
            </h2>

            {/* View All Articles Link Centered Below Heading */}
            <Link
              href="/blog"
              className="relative group inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#06182F] hover:text-[#ff7a1a] uppercase tracking-wider transition-colors duration-300 py-1 mt-4"
            >
              <span>VIEW ALL ARTICLES</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#ff7a1a]" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff7a1a] transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 2. Wider Blog Cards Grid (1360px Max Width, 3 Columns, 28px gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
          {postsToDisplay.map((post, idx) => (
            <AnimatedSection key={post.id} delayMs={idx * 150} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white rounded-[12px] border border-black/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-350 ease-out overflow-hidden cursor-pointer justify-between"
              >
                <div>
                  {/* Image Container with 16/9 aspect ratio and dark gradient overlay */}
                  <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden shrink-0">
                    <ActionShotImage
                      src={post.featuredImage}
                      fallbackSrc={post.fallbackImage}
                      alt={post.title}
                    />
                    
                    {/* Subtle Dark Gradient Overlay at Bottom of Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

                    {/* Category Tag Badge with Backdrop Blur & Rounded 6px */}
                    <div className="absolute top-3.5 left-3.5 z-20 bg-[#0A1730]/75 backdrop-blur-[4px] border border-white/10 text-[#ff7a1a] text-[10px] font-black uppercase px-3 py-1.5 rounded-[6px] tracking-wider shadow-sm pointer-events-none">
                      {post.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold mb-2.5 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-[#ff7a1a]" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-base sm:text-[17px] font-bold text-[#06182F] group-hover:text-[#ff7a1a] transition-colors duration-300 ease-out leading-snug line-clamp-2 font-sans">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Footer with Divider */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#06182F] group-hover:text-[#ff7a1a] transition-colors mt-auto">
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300 ease-out text-[#ff7a1a]" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
