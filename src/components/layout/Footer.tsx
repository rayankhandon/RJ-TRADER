import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/common/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#06182F] text-white pt-12 pb-6 border-t border-navy-900">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand Info & Official Logo (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <Logo size="footer" />
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm font-normal pt-1">
              RJ Traders provides wholesale products, packaging and logistics solutions for businesses across Pakistan.
            </p>

            <div className="pt-2 text-xs text-gray-400 font-medium">
              <span>Business Location: </span>
              <strong className="text-white">Lahore, Punjab, Pakistan</strong>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#F97316]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-normal">
              <li>
                <Link href="/" className="hover:text-[#F97316] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F97316] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F97316] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-[#F97316] transition-colors">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F97316] transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#F97316]">
              PRODUCTS
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-normal">
              <li>
                <Link href="/products" className="hover:text-[#F97316] transition-colors">
                  Engine Oils
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F97316] transition-colors">
                  Oil Drums
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F97316] transition-colors">
                  Lubricants
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F97316] transition-colors">
                  Industrial Oils
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F97316] transition-colors">
                  Automotive Fluids
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F97316] transition-colors">
                  Other Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#F97316]">
              CONTACT US
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-normal">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <span>+92 321 1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <span>info@rjtraders.pk</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © RJ Traders. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
