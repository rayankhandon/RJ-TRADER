"use client";

import React, { useState } from "react";
import { X, Search, Truck, CheckCircle2, Clock, PackageCheck, AlertCircle } from "lucide-react";

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
      // Mock result
      setStatusResult({
        trackingNo: orderId.toUpperCase(),
        status: "In Transit",
        carrier: "RJ Traders Logistics Fleet #14",
        origin: "Lahore Central Warehouse",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#07172B] border border-white/20 rounded-xl shadow-2xl text-white overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D233E]">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#F97316]" />
            <h3 className="text-base font-extrabold uppercase tracking-wide">TRACK YOUR SHIPMENT</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs text-gray-300 mb-4">
            Enter your RJ Traders Order ID or Tracking Number below (e.g. <span className="text-[#F97316] font-mono">RJ-88421</span>).
          </p>

          <form onSubmit={handleTrack} className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g. RJ-88421)..."
                className="w-full h-11 bg-[#0A1A2F] border border-white/20 rounded px-4 text-xs font-mono text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F97316]"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="h-11 bg-[#F97316] hover:bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider px-5 rounded flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
            >
              {loading ? "SEARCHING..." : "TRACK"}
              {!loading && <Search className="w-4 h-4" />}
            </button>
          </form>

          {/* Tracking Result Display */}
          {statusResult && (
            <div className="bg-[#0A1A2F] border border-white/15 rounded-lg p-5 space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Tracking ID</span>
                  <p className="text-sm font-black font-mono text-[#F97316]">{statusResult.trackingNo}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{statusResult.status}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px]">ORIGIN</span>
                  <span className="font-semibold text-gray-200">{statusResult.origin}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">DESTINATION</span>
                  <span className="font-semibold text-gray-200">{statusResult.destination}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-400 block text-[10px]">ESTIMATED DELIVERY</span>
                  <span className="font-bold text-[#F97316]">{statusResult.estDelivery}</span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">SHIPMENT TIMELINE</span>
                {statusResult.steps.map((step: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    {step.done ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 flex items-center justify-between">
                      <span className={step.done ? "text-gray-200 font-medium" : "text-gray-400"}>
                        {step.label}
                      </span>
                      <span className="text-[10px] text-gray-500">{step.time}</span>
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
