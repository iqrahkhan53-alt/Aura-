'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Calendar, Clock, MapPin, Menu, X, ShieldCheck, ChevronDown } from 'lucide-react';
import { clinicInfo } from '@/data/clinicData';

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top Clinical & Triage Announcement Bar */}
      <div className="bg-[#0a1b2a] text-stone-200 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-stone-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 pulse-indicator" />
            <span className="font-medium text-white">Dublin Clinic Open Today:</span>
            <span>{clinicInfo.openingHours.weekdays}</span>
            <span className="hidden md:inline text-stone-500">•</span>
            <span className="hidden md:inline text-emerald-300">Same-Day & Walk-In Appointments Available</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden lg:flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{clinicInfo.addressLine1}, {clinicInfo.addressLine2} ({clinicInfo.eircode})</span>
            </div>
            <div className="flex items-center gap-1 text-amber-300 font-medium">
              <span>Emergency: Dial 112 / 999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-[#0b5341] flex items-center justify-center text-white shadow-md shadow-emerald-900/10 transition-transform group-hover:scale-105">
            {/* Elegant European Medical Cross Icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v16m-8-8h16" />
              <circle cx="12" cy="12" r="9" strokeOpacity="0.3" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-[#0a1b2a]">Aura Health</span>
              <span className="text-xs font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60">Dublin</span>
            </div>
            <p className="text-[11px] text-stone-500 tracking-wide">Private Medical Clinic • Fitzwilliam Place</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
          <a href="#services" className="hover:text-[#0b5341] transition-colors py-1">
            Medical Services
          </a>
          <a href="#doctors" className="hover:text-[#0b5341] transition-colors py-1">
            Our Doctors
          </a>
          <a href="#pricing" className="hover:text-[#0b5341] transition-colors py-1">
            Fees & Insurance
          </a>
          <a href="#reviews" className="hover:text-[#0b5341] transition-colors py-1">
            Patient Stories
          </a>
          <a href="#location" className="hover:text-[#0b5341] transition-colors py-1">
            Clinic & Transit
          </a>
          <a href="#faq" className="hover:text-[#0b5341] transition-colors py-1">
            FAQs
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-2 text-sm font-semibold text-[#0a1b2a] hover:text-[#0b5341] transition-colors px-3 py-2 rounded-lg hover:bg-stone-100/80"
            title="Call Aura Health Clinic Reception"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#0b5341] flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight hidden xl:block">
              <span className="text-[10px] text-stone-500 block uppercase font-medium">Direct Line</span>
              <span>{clinicInfo.phone}</span>
            </div>
          </a>

          <button
            onClick={onOpenBookingModal}
            className="flex items-center gap-2 bg-[#0b5341] hover:bg-[#083f31] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-emerald-950/10 transition-all hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-200" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-4 pb-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-stone-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 hover:text-[#0b5341]"
            >
              Medical Services & Treatments
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 hover:text-[#0b5341]"
            >
              IMC-Registered Doctors
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 hover:text-[#0b5341]"
            >
              Fees, PRSI & Insurance Cover
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 hover:text-[#0b5341]"
            >
              Patient Testimonials
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 hover:text-[#0b5341]"
            >
              Location & Luas Green Line
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 hover:text-[#0b5341]"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-stone-300 text-stone-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#0b5341]" />
              <span>Call Clinic: {clinicInfo.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBookingModal) onOpenBookingModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0b5341] text-white font-semibold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
