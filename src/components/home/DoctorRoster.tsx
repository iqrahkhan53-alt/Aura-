'use client';

import React from 'react';
import Image from 'next/image';
import { doctorsData } from '@/data/clinicData';
import { ShieldCheck, Calendar, Award, Globe, Clock } from 'lucide-react';

interface DoctorRosterProps {
  onBookDoctor: (serviceId?: string) => void;
}

export default function DoctorRoster({ onBookDoctor }: DoctorRosterProps) {
  return (
    <section id="doctors" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b5341] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 inline-block">
            Our Medical Directorate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1b2a] tracking-tight">
            Consultant Physicians & Specialists
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            All Aura Health doctors are registered with the Irish Medical Council and bring decades of clinical leadership from Ireland and the UK&apos;s foremost teaching hospitals.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#faf9f6] rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Doctor Portrait */}
              <div className="relative w-full sm:w-48 h-64 sm:h-56 rounded-2xl overflow-hidden shadow-md shrink-0 border border-stone-200">
                <Image
                  src={doc.photoUrl}
                  alt={`${doc.name}, ${doc.title} at Aura Health Dublin`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 200px"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#0a1b2a]/85 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider">
                  {doc.imcNumber}
                </div>
              </div>

              {/* Doctor Details */}
              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-[#0a1b2a]">{doc.name}</h3>
                    <span title="Irish Medical Council Verified">
                      <ShieldCheck className="w-4 h-4 text-[#0b5341]" />
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#0b5341]">{doc.title}</p>
                  <p className="text-xs text-stone-500 font-medium">{doc.qualifications}</p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {doc.bio}
                </p>

                {/* Specialties & Languages */}
                <div className="pt-2 border-t border-stone-200/80 space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-1.5 font-medium text-stone-800">
                    <Award className="w-3.5 h-3.5 text-[#0b5341] shrink-0" />
                    <span>Specialty: {doc.specialty}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-500">
                    <Globe className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>Languages: {doc.languages.join(', ')}</span>
                  </div>
                </div>

                {/* Next Available & Booking CTA */}
                <div className="pt-3 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-stone-400 block text-[11px]">Earliest Appointment:</span>
                    <span className="font-semibold text-emerald-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {doc.nextAvailable}
                    </span>
                  </div>

                  <button
                    onClick={() => onBookDoctor()}
                    className="bg-[#0b5341] hover:bg-[#083f31] text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book With {doc.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
