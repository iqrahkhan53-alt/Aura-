'use client';

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { clinicInfo } from '@/data/clinicData';

interface StickyMobileBarProps {
  onOpenBookingModal: () => void;
}

export default function StickyMobileBar({ onOpenBookingModal }: StickyMobileBarProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
          className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs transition-colors"
        >
          <Phone className="w-4 h-4 text-[#0b5341]" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={onOpenBookingModal}
          className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#0b5341] hover:bg-[#083f31] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-emerald-300" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}
