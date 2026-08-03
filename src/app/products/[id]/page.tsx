"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { OrderTrackingModal } from "@/components/ui/OrderTrackingModal";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";
import { PRODUCTS } from "@/data/products";
import { ChevronRight, ShieldCheck, Truck, Tag, ArrowRight, CheckCircle2, FileText } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]">
      <TopBar />
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenTrackingModal={() => setIsTrackModalOpen(true)}
      />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Breadcrumb Header */}
      <div className="bg-[#07172B] text-white py-8 border-b border-white/10">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
            <Link href="/" className="hover:text-[#F97316]">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-[#F97316]">WHOLESALE PRODUCTS</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F97316] truncate">{product.name}</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
            {product.name}
          </h1>
        </div>
      </div>

      {/* Product Detail Main */}
      <main className="flex-1 w-full py-8 lg:py-12">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Image Gallery */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative overflow-hidden h-[380px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-[#F97316] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Trust Badges under Image */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 border border-gray-200 rounded-lg text-center">
                  <ShieldCheck className="w-5 h-5 text-[#F97316] mx-auto mb-1" />
                  <span className="text-[10px] font-black uppercase text-gray-800 block">100% Genuine</span>
                </div>
                <div className="bg-white p-3 border border-gray-200 rounded-lg text-center">
                  <Truck className="w-5 h-5 text-[#F97316] mx-auto mb-1" />
                  <span className="text-[10px] font-black uppercase text-gray-800 block">Fast Dispatch</span>
                </div>
                <div className="bg-white p-3 border border-gray-200 rounded-lg text-center">
                  <Tag className="w-5 h-5 text-[#F97316] mx-auto mb-1" />
                  <span className="text-[10px] font-black uppercase text-gray-800 block">Bulk Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Specifications & Pricing */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
                
                <span className="text-xs font-black text-[#F97316] uppercase tracking-wider">
                  {product.categoryName}
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-[#0A1A2F] uppercase tracking-tight mt-1">
                  {product.name}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* MOQ Highlight Banner */}
                <div className="my-6 p-4 bg-[#07172B] text-white rounded-lg flex items-center justify-between border border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">MINIMUM ORDER QUANTITY (MOQ)</span>
                    <p className="text-sm font-black text-[#F97316] mt-0.5">{product.moq}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded border border-emerald-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>In Stock for Bulk Supply</span>
                  </div>
                </div>

                {/* Bulk Pricing Tier Table */}
                <div className="mb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1A2F] mb-3">
                    WHOLESALE BULK PRICING TIERS
                  </h4>
                  <div className="overflow-x-auto border border-gray-200 rounded-lg">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-[#0A1A2F] text-white font-black uppercase">
                        <tr>
                          <th className="px-4 py-2.5">Order Quantity Range</th>
                          <th className="px-4 py-2.5">Wholesale Price / Unit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 font-semibold text-gray-800">
                        {product.priceTiers.map((tier, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-2.5 font-mono">{tier.quantity}</td>
                            <td className="px-4 py-2.5 text-[#F97316] font-bold">{tier.pricePerUnit}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="mb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1A2F] mb-3">
                    TECHNICAL SPECIFICATIONS
                  </h4>
                  <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 text-xs">
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between px-4 py-2.5 bg-white">
                        <span className="font-bold text-gray-600 uppercase">{key}</span>
                        <span className="font-semibold text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="flex-1 h-12 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <FileText className="w-4 h-4" />
                    <span>ADD TO QUOTE REQUEST</span>
                  </button>
                </div>

              </div>
            </div>

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
