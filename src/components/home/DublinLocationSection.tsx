import React from 'react';
import { clinicInfo } from '@/data/clinicData';
import { MapPin, Navigation, Clock, Phone, Car, Train, Bus, ShieldAlert } from 'lucide-react';

export default function DublinLocationSection({ onOpenBookingModal }: { onOpenBookingModal: () => void }) {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b5341] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 inline-block">
            Central Dublin Clinic Location
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1b2a] tracking-tight">
            Visiting Our Fitzwilliam Place Clinic
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Conveniently situated in Dublin 2, minutes from St. Stephen&apos;s Green, the Grand Canal, and the Luas Green Line.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Directions & Transit Guide (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Header */}
              <div className="flex items-start gap-4 pb-6 border-b border-stone-100">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0b5341] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a1b2a]">{clinicInfo.name}</h3>
                  <p className="text-sm text-stone-600">{clinicInfo.addressLine1}, {clinicInfo.addressLine2}, {clinicInfo.city}</p>
                  <p className="text-sm font-semibold text-emerald-800 mt-0.5">Eircode: {clinicInfo.eircode}</p>
                </div>
              </div>

              {/* Transit Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                    <Train className="w-4 h-4 text-[#0b5341]" />
                    <span>Luas Green Line</span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Harcourt Stop (4 min walk) or St. Stephen&apos;s Green (7 min walk).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                    <Bus className="w-4 h-4 text-[#0b5341]" />
                    <span>Dublin Bus</span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Routes 11, 14, 15, 39A, 46A stops at Leeson Street &amp; Stephen&apos;s Green.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                    <Car className="w-4 h-4 text-[#0b5341]" />
                    <span>Patient Parking</span>
                  </div>
                  <p className="text-xs text-stone-500">
                    Dedicated patient bays on-site &amp; on-street Pay-and-Display parking.
                  </p>
                </div>
              </div>

              {/* Hours Table */}
              <div className="p-4 rounded-2xl bg-[#faf9f6] border border-stone-200/80 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <Clock className="w-4 h-4 text-[#0b5341]" />
                  <span>Clinic Opening Hours (Dublin Time):</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-stone-600 pt-1">
                  <div>
                    <span className="font-semibold block text-stone-900">Monday – Friday</span>
                    <span>{clinicInfo.openingHours.weekdays}</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-stone-900">Saturday</span>
                    <span>{clinicInfo.openingHours.saturday}</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-stone-900">Sunday</span>
                    <span>{clinicInfo.openingHours.sunday}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${clinicInfo.name} ${clinicInfo.addressLine1} ${clinicInfo.eircode}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold px-5 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#0b5341]" />
                <span>Open in Google Maps / Directions</span>
              </a>

              <a
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto bg-[#0a1b2a] hover:bg-stone-800 text-white text-xs font-bold px-5 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Dublin Desk: {clinicInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map Representation (5 cols) */}
          <div className="lg:col-span-5 bg-[#0a1b2a] text-white rounded-3xl p-8 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-semibold border border-emerald-800">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dublin 2 Medical Quarter</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Minutes From Dublin&apos;s Key Districts
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Aura Health Dublin provides priority medical care to patients throughout central Dublin, including:
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold block text-stone-200">Ballsbridge (D4)</span>
                  <span className="text-[11px] text-stone-400">6 min drive</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold block text-stone-200">Grand Canal Dock</span>
                  <span className="text-[11px] text-stone-400">8 min drive / DART</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold block text-stone-200">Ranelagh</span>
                  <span className="text-[11px] text-stone-400">5 min via Luas</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold block text-stone-200">St. Stephen&apos;s Green</span>
                  <span className="text-[11px] text-stone-400">7 min walk</span>
                </div>
              </div>
            </div>

            {/* Emergency Notice Pill */}
            <div className="pt-6 relative z-10">
              <div className="p-4 rounded-2xl bg-red-950/40 border border-red-800/40 text-xs text-stone-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-red-300">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  <span>Clinical Triage Notice</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  For sudden, life-threatening symptoms (stroke, acute chest tightness, severe anaphylaxis), please attend St. Vincent&apos;s or St. James&apos;s Emergency Department or call 112/999 directly.
                </p>
              </div>

              <button
                onClick={onOpenBookingModal}
                className="mt-4 w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0a1b2a] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
              >
                Reserve Appointment At Fitzwilliam Place
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
