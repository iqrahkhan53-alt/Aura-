'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Phone, ShieldCheck, Star, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { clinicInfo } from '@/data/clinicData';

interface HeroClinicProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export default function HeroClinic({ onOpenBookingModal }: HeroClinicProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#f5f8f6] via-[#faf9f6] to-[#faf9f6]">
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#0a1b2a 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Conversion CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Live Clinic Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200/80 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-indicator" />
              <span className="text-xs font-semibold text-[#0a1b2a]">
                Dublin Clinic Open Today
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-xs text-[#0b5341] font-medium">
                Next In-Clinic Slot Available at 14:15
              </span>
            </div>

            {/* Large Typography European Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0a1b2a] leading-[1.08]">
                Modern Healthcare, Rooted in <span className="text-[#0b5341] italic font-serif">Precision</span> & Compassion.
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
                Private GP consultations, executive health screens, and advanced diagnostics at Fitzwilliam Place, Dublin 2. Experience unhurried 20-minute consultations led by Irish Medical Council registered physicians.
              </p>
            </div>

            {/* Quick Highlights Guarantee */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b5341] shrink-0" />
                <span>20-Min Full Consultations</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b5341] shrink-0" />
                <span>Same-Day Prescriptions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#0b5341] shrink-0" />
                <span>VHI & Laya Claimable</span>
              </div>
            </div>

            {/* High-Converting CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="bg-[#0b5341] hover:bg-[#083f31] text-white text-base font-semibold px-8 py-4 rounded-full shadow-xl shadow-emerald-950/15 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-emerald-200" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href="#services"
                className="bg-white hover:bg-stone-50 text-stone-800 text-base font-semibold px-6 py-4 rounded-full border border-stone-300/80 shadow-xs flex items-center justify-center gap-2 transition-all hover:border-stone-400"
              >
                <span>Explore Services & Fees</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Trust Proof & Verified Rating Stack */}
            <div className="pt-3 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-[#0a1b2a]">{clinicInfo.googleRating} / 5.0</span>
                <span className="text-stone-400">({clinicInfo.reviewCount}+ Google Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 text-stone-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0b5341]" />
                <span>Irish Medical Council Reg. #412984</span>
              </div>
            </div>
          </div>

          {/* Right Column: Healthcare Imagery & Trust Cards (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Main Hero Photograph Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-16/11 lg:aspect-4/5">
              <Image
                src="/images/hero-clinic.jpg"
                alt="Doctor consulting with patient in modern European clinic suite at Aura Health Dublin"
                fill
                priority
                className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b2a]/60 via-transparent to-transparent" />

              {/* Bottom Floating Card Inside Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">Fitzwilliam Place Suite</span>
                  <p className="text-xs font-semibold text-[#0a1b2a]">Unhurried European Standard Care</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-500 block">GP Consultations From</span>
                  <span className="text-sm font-bold text-[#0b5341]">€75</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Accent Badge (Top Right) */}
            <div className="hidden sm:flex absolute -top-4 -right-4 p-3.5 rounded-2xl bg-white shadow-xl border border-stone-200/80 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b5341] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-stone-400 block font-medium">Standard Visit</span>
                <span className="text-xs font-bold text-[#0a1b2a]">20-Minute Minimum</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
