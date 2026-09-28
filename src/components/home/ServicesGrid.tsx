'use client';

import React, { useState } from 'react';
import { servicesData } from '@/data/clinicData';
import { formatPrice } from '@/lib/utils';
import { Clock, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceId: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'General Practice', 'Diagnostics', 'Specialist Care', 'Women\'s Health'];

  const filteredServices = activeFilter === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b5341] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 inline-block">
            Comprehensive Clinical Practice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1b2a] tracking-tight">
            Specialist Healthcare Services in Dublin 2
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Delivering unhurried European clinical medicine with on-site diagnostics, rapid pathology results, and transparent pricing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#0a1b2a] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 bg-[#0b5341] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-300" />
                  <span>Most Requested</span>
                </div>
              )}

              <div>
                {/* Category & Duration */}
                <div className="flex items-center justify-between gap-2 text-xs font-medium text-stone-500 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-semibold">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1 text-stone-500">
                    <Clock className="w-3.5 h-3.5 text-[#0b5341]" />
                    <span>{service.durationMins} mins</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#0a1b2a] tracking-tight group-hover:text-[#0b5341] transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Key Benefits List */}
                <ul className="space-y-2 mb-6 pt-2 border-t border-stone-100">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#0b5341] mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Booking Trigger */}
              <div className="pt-5 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-400 block font-medium">Standard Consultation</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-[#0a1b2a]">{formatPrice(service.priceEur)}</span>
                    {service.isInsuranceCovered && (
                      <span className="text-[10px] text-emerald-700 font-semibold">Ins. Claimable</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="bg-stone-100 hover:bg-[#0b5341] text-stone-800 hover:text-white p-3 rounded-2xl transition-all flex items-center justify-center cursor-pointer group-hover:bg-[#0b5341] group-hover:text-white"
                  title={`Book ${service.title}`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice on Med 1 and Insurance */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b5341] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-stone-900 block text-sm">Need a specialized or urgent appointment?</strong>
              <span>We provide emergency triage slots, same-day fit-to-fly certificates, and direct referrals to Blackrock Clinic, Beacon Hospital & Mater Private.</span>
            </div>
          </div>
          <button
            onClick={() => onSelectService(servicesData[0].id)}
            className="bg-[#0a1b2a] hover:bg-stone-800 text-white font-semibold px-5 py-2.5 rounded-full shrink-0 cursor-pointer"
          >
            Speak With Medical Team
          </button>
        </div>

      </div>
    </section>
  );
}
