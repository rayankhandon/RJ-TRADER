"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Hero } from "@/components/home/Hero";
import { BenefitsBar } from "@/components/home/BenefitsBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PopularProducts } from "@/components/home/PopularProducts";
import { PackagingCtaBanner } from "@/components/home/PackagingCtaBanner";
import { TrustInfoSection } from "@/components/home/TrustInfoSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { StatsBar } from "@/components/home/StatsBar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { OrderTrackingModal } from "@/components/ui/OrderTrackingModal";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]">
      {/* 1. Slim Top Information Bar */}
      <TopBar />

      {/* 2. Main Header (Logo, Category Dropdown, Search Bar, Header Actions) */}
      <Header
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenTrackingModal={() => setIsTrackModalOpen(true)}
        onToggleMobileNav={() => setIsMobileNavOpen(!isMobileNavOpen)}
        isMobileNavOpen={isMobileNavOpen}
      />

      {/* 3. Dark Navy Primary Navigation Bar */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {/* 4. Full-Width Background Hero Section */}
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 5. Benefits / Trust Strip */}
        <BenefitsBar />

        {/* 6. How Can We Help Your Business? (Services Grid) */}
        <ServicesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 7. Popular Wholesale Products (Category Cards) */}
        <PopularProducts onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 8. Packaging & Delivery CTA Banner */}
        <PackagingCtaBanner onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 9. Industries, Nationwide Delivery, Why Choose Us */}
        <TrustInfoSection />

        {/* 10. Client Testimonials */}
        <TestimonialsSection />

        {/* 11. Statistics Bar */}
        <StatsBar />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp + Sticky Mobile Bar + Scroll Top) */}
      <FloatingWidgets onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Interactive Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Order Tracking Modal */}
      <OrderTrackingModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />
    </div>
  );
}
