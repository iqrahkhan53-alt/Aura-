'use client';

import React, { useState } from 'react';
import { Calendar, UserCheck, Stethoscope, Search } from 'lucide-react';
import { servicesData } from '@/data/clinicData';

interface QuickBookingBarProps {
  onSearchSlots: (serviceId: string) => void;
}

export default function QuickBookingBar({ onSearchSlots }: QuickBookingBarProps) {
  const [selectedService, setSelectedService] = useState(servicesData[0].id);
  const [consultType, setConsultType] = useState('in-person');
  const [preferredDate, setPreferredDate] = useState('today');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSlots(selectedService);
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-xl border border-stone-200/90 p-4 sm:p-6">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          
          {/* Field 1: Service */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-[#0b5341]" />
              <span>Medical Service</span>
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium text-[#0a1b2a] bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#0b5341]"
            >
              {servicesData.map((svc) => (
                <option key={svc.id} value={svc.id}>
                  {svc.title} (€{svc.priceEur})
                </option>
              ))}
            </select>
          </div>

          {/* Field 2: Appointment Type */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#0b5341]" />
              <span>Consultation Type</span>
            </label>
            <select
              value={consultType}
              onChange={(e) => setConsultType(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium text-[#0a1b2a] bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#0b5341]"
            >
              <option value="in-person">In-Clinic Visit (Dublin 2)</option>
              <option value="video">Secure Video Consultation</option>
            </select>
          </div>

          {/* Field 3: Date Preference */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0b5341]" />
              <span>Preferred Day</span>
            </label>
            <select
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium text-[#0a1b2a] bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#0b5341]"
            >
              <option value="today">Today (Priority Same-Day)</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="this-week">Later This Week</option>
            </select>
          </div>

          {/* CTA Action */}
          <div className="pt-2 md:pt-5">
            <button
              type="submit"
              className="w-full bg-[#0b5341] hover:bg-[#083f31] text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Search className="w-4 h-4 text-emerald-200" />
              <span>Check Live Slots</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
