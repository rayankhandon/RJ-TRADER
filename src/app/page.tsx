"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Hero } from "@/components/home/Hero";
import { CategoryIconRow } from "@/components/home/CategoryIconRow";
import { BenefitsBar } from "@/components/home/BenefitsBar";
import { PopularProducts } from "@/components/home/PopularProducts";
import { HomeBlogSection } from "@/components/home/HomeBlogSection";
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
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]" suppressHydrationWarning>
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

        {/* 5. 6-Card Feature Row (Engine Oil & Spare Parts Focus) */}
        <BenefitsBar />

        {/* 6. "Shop by Category" Section */}
        <CategoryIconRow />

        {/* 7. Products Section with Client-Side Tabbed Filtering */}
        <PopularProducts onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 8. Packaging & Delivery CTA Banner */}
        <PackagingCtaBanner onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 9. Wholesale Clientele, Stats & CTA (Who We Supply) */}
        <TrustInfoSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 10. From Our Blog Section */}
        <HomeBlogSection />

        {/* 11. Client Testimonials */}
        <TestimonialsSection />

        {/* 13. Statistics Bar */}
        <StatsBar />
      </main>

      {/* 14. Footer */}
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
