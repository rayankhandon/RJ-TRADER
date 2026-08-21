"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { OrderTrackingModal } from "@/components/ui/OrderTrackingModal";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";
import { BLOG_POSTS } from "@/data/blogPosts";
import { ChevronRight, Clock, Calendar, ShieldCheck, CheckCircle2, ArrowLeft } from "lucide-react";

const SafeImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/images/categories/engine-oil.png")}
      className={className || "w-full h-full object-contain"}
    />
  );
};

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <TopBar />
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenTrackingModal={() => setIsTrackModalOpen(true)}
      />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Header Banner */}
      <div className="bg-[#06182F] text-white py-12 lg:py-16 border-b border-white/10 relative overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-4 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316] transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <Link href="/blog" className="hover:text-[#F97316] transition-colors">BLOG</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#F97316] line-clamp-1">{post.category}</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest">
              <span>{post.category}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white font-sans leading-tight">
              {post.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#B8C4D9] max-w-3xl font-normal leading-relaxed">
              {post.subtitle}
            </p>
          </div>

          {/* Author & Meta Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
              <div>
                <span className="font-extrabold text-white block">{post.author.name}</span>
                <span className="text-[10px] text-gray-400 font-medium block">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 font-semibold">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <main className="flex-1 w-full py-12 lg:py-16">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Article Content (8 Cols) */}
            <article className="lg:col-span-8 bg-white rounded-[24px] border border-gray-200/90 p-6 sm:p-9 lg:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.04)] space-y-8">
              
              {/* Back to Blog Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-black text-[#06182F] hover:text-[#F97316] uppercase tracking-wider transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#F97316]" />
                <span>Back to All Articles</span>
              </Link>

              {/* Featured Image */}
              <div className="relative w-full h-[280px] sm:h-[360px] bg-[#F8FAFC] rounded-2xl border border-gray-200/80 p-6 overflow-hidden flex items-center justify-center">
                <SafeImage
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-contain p-6"
                />
              </div>

              {/* Article Content Blocks */}
              {post.content.map((block, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-black text-[#06182F] uppercase tracking-tight font-sans">
                    {block.heading}
                  </h2>

                  {block.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Highlight Quote Callout */}
                  {block.highlightQuote && (
                    <div className="my-6 p-6 bg-[#06182F] text-white rounded-2xl border-l-4 border-[#F97316] relative overflow-hidden shadow-md">
                      <p className="text-xs sm:text-sm font-bold italic leading-relaxed text-[#F8FAFC]">
                        &ldquo;{block.highlightQuote}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Section Image */}
                  {block.image && (
                    <div className="my-6 space-y-2">
                      <div className="relative w-full h-[250px] sm:h-[300px] bg-[#F8FAFC] rounded-xl border border-gray-200 p-4 flex items-center justify-center overflow-hidden">
                        <SafeImage
                          src={block.image}
                          alt={block.imageCaption || block.heading}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      {block.imageCaption && (
                        <p className="text-[11px] text-gray-500 font-medium italic text-center">
                          {block.imageCaption}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Bullet Points */}
                  {block.bulletPoints && (
                    <div className="my-4 bg-[#F8FAFC] rounded-xl p-5 border border-gray-200/80 space-y-2.5">
                      <span className="text-xs font-black uppercase text-[#06182F] tracking-wider block mb-2">
                        KEY TAKEAWAYS &amp; TECHNICAL SPECS:
                      </span>
                      {block.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-700 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}

              {/* Tags */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black text-gray-500 uppercase tracking-wider">TAGS:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#F8FAFC] border border-gray-200 rounded-lg text-xs font-bold text-gray-700 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200/90 flex items-center gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#F97316]"
                />
                <div>
                  <span className="text-xs font-black uppercase text-gray-400 tracking-wider block">WRITTEN BY</span>
                  <h4 className="text-sm sm:text-base font-black text-[#06182F] uppercase">{post.author.name}</h4>
                  <p className="text-xs text-gray-600 font-normal mt-0.5">{post.author.role}</p>
                </div>
              </div>

            </article>

            {/* Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Quote CTA Widget */}
              <div className="bg-[#06182F] text-white rounded-[24px] border border-white/10 p-7 shadow-xl space-y-4 relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#F97316] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>WHOLESALE SUPPLIER</span>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white font-sans">
                    NEED THIS LUBRICANT OR PART IN BULK?
                  </h3>
                  <p className="text-xs text-[#B8C4D9] font-normal leading-relaxed">
                    Get direct factory pricing on 208L steel drums and genuine spare parts with nationwide freight delivery.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full py-3 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
                  >
                    REQUEST BULK QUOTE NOW
                  </button>
                </div>
              </div>

              {/* Related Articles Card */}
              <div className="bg-white rounded-[24px] border border-gray-200/90 p-6 shadow-sm space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#06182F] border-b border-gray-100 pb-3">
                  MORE TECHNICAL ARTICLES
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((rel) => (
                    <div key={rel.id} className="group space-y-1.5">
                      <span className="text-[10px] font-black text-[#F97316] uppercase tracking-wider block">
                        {rel.category}
                      </span>
                      <h4 className="text-xs font-extrabold text-[#06182F] group-hover:text-[#F97316] uppercase transition-colors leading-snug line-clamp-2">
                        <Link href={`/blog/${rel.slug}`}>
                          {rel.title}
                        </Link>
                      </h4>
                      <span className="text-[10.5px] text-gray-400 font-medium block">{rel.readTime}</span>
                    </div>
                  ))}
                </div>
              </div>

            </aside>

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
