'use client';

import React, { useState } from 'react';
import { faqData } from '@/data/clinicData';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { clinicInfo } from '@/data/clinicData';

export default function FaqSection({ onOpenBookingModal }: { onOpenBookingModal: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b5341] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 inline-block">
            Patient Support & Information
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1b2a] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-stone-600">
            Clear answers regarding consultations, Irish health insurance rebates, Med 1 tax relief, and same-day clinic appointments.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200/90 overflow-hidden transition-all bg-[#faf9f6]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base cursor-pointer hover:text-[#0b5341] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#0b5341] shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#0b5341]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-3xl bg-stone-50 border border-stone-200/80 text-center space-y-4">
          <p className="text-xs sm:text-sm font-semibold text-stone-800">
            Have a question about a specific medical condition or referral?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-300 font-bold text-stone-800 hover:border-emerald-600 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#0b5341]" />
              <span>Call Reception ({clinicInfo.phone})</span>
            </a>
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b5341] text-white font-bold hover:bg-[#083f31] transition-colors cursor-pointer"
            >
              <span>Book Consultation Online</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
