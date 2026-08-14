"use client";

import React, { useState } from "react";
import { X, Search, Truck, CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({ isOpen, onClose }) => {
  const [orderId, setOrderId] = useState("");
  const [statusResult, setStatusResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock tracking result
      setStatusResult({
        trackingNo: orderId.toUpperCase(),
        status: "In Transit",
        carrier: "RJ Traders Logistics Fleet #14",
        origin: "Sadiqabad Central Warehouse",
        destination: "Karachi Industrial Zone",
        estDelivery: "Tomorrow by 4:00 PM",
        items: "4x 208L Engine Oil Drums + 20x Jerrycans",
        steps: [
          { label: "Order Confirmed & Processed", done: true, time: "Yesterday, 10:00 AM" },
          { label: "Packed & Sealed at Factory", done: true, time: "Yesterday, 3:30 PM" },
          { label: "Dispatched via Heavy Transport", done: true, time: "Today, 6:00 AM" },
          { label: "Out for Final Delivery", done: false, time: "Pending" },
        ],
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs transition-all duration-300 animate-in fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#06182F] border border-white/20 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] text-white overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* Header with Texture & Glow */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0B2545] relative overflow-hidden">
          
          {/* Faint Dot Grid Texture Overlay (5% opacity) */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "12px 12px"
            }}
          />

          {/* Soft Radial Glow behind Title */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F97316]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-2.5 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center text-[#F97316] shrink-0">
              <Truck className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white">
              TRACK YOUR SHIPMENT
            </h3>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 flex items-center justify-center text-white transition-all duration-200 cursor-pointer relative z-10 shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <p className="text-xs sm:text-sm text-[#B8C4D9] mb-5 font-normal leading-relaxed">
            Enter your RJ Traders Order ID or Tracking Number below (e.g. <span className="text-[#F97316] font-mono font-extrabold">RJ-88421</span>).
          </p>

          {/* Search Input & Action Button */}
          <form onSubmit={handleTrack} className="flex items-center gap-3 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g. RJ-88421)..."
                className="w-full h-12 bg-white/[0.06] border border-white/20 rounded-xl px-4 text-xs font-mono text-white placeholder:text-white/45 focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 transition-all duration-200"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="h-12 bg-[#F97316] hover:bg-[#ea580c] hover:scale-[1.03] active:scale-95 text-white text-xs font-extrabold uppercase tracking-wider px-6 rounded-xl shadow-lg hover:shadow-[0_10px_25px_rgba(249,115,22,0.35)] transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
            >
              <span>{loading ? "SEARCHING..." : "TRACK"}</span>
              {!loading && <Search className="w-4 h-4" />}
            </button>
          </form>

          {/* Tracking Result Display */}
          {statusResult && (
            <div className="bg-[#0B2545]/90 border border-white/15 rounded-2xl p-5 sm:p-6 space-y-4 animate-in fade-in duration-300 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-wider">TRACKING ID</span>
                  <p className="text-sm font-black font-mono text-[#F97316] mt-0.5">{statusResult.trackingNo}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-extrabold uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{statusResult.status}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">ORIGIN</span>
                  <span className="font-bold text-gray-200 mt-0.5 block">{statusResult.origin}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">DESTINATION</span>
                  <span className="font-bold text-gray-200 mt-0.5 block">{statusResult.destination}</span>
                </div>
                <div className="col-span-2 pt-1">
                  <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">ESTIMATED DELIVERY</span>
                  <span className="font-black text-[#F97316] text-sm mt-0.5 block">{statusResult.estDelivery}</span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="pt-3.5 border-t border-white/10 space-y-2.5">
                <span className="text-[10px] uppercase font-black tracking-wider text-gray-400 block mb-1">
                  SHIPMENT TIMELINE
                </span>
                {statusResult.steps.map((step: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    {step.done ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 flex items-center justify-between">
                      <span className={step.done ? "text-gray-200 font-semibold" : "text-gray-400 font-normal"}>
                        {step.label}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">{step.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
