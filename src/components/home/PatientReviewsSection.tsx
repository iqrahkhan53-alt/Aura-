import React from 'react';
import { reviewsData, clinicInfo } from '@/data/clinicData';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function PatientReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b5341] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 inline-block">
              Verified Patient Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1b2a] tracking-tight">
              Trusted by Over 12,000 Dublin Residents
            </h2>
            <p className="text-base text-stone-600">
              Read real feedback from patients who experience our unhurried consultations, compassionate care, and rapid diagnostics.
            </p>
          </div>

          {/* Google Review Score Badge */}
          <div className="p-4 rounded-2xl bg-[#faf9f6] border border-stone-200 shadow-xs flex items-center gap-4 shrink-0">
            <div className="text-center">
              <span className="text-3xl font-extrabold text-[#0a1b2a] block leading-none">{clinicInfo.googleRating}</span>
              <span className="text-[11px] text-stone-500 font-medium">Out of 5.0</span>
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-stone-700">
                Google Verified Reviews ({clinicInfo.reviewCount}+)
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#faf9f6] rounded-3xl p-7 border border-stone-200/80 shadow-xs flex flex-col justify-between relative group hover:shadow-md transition-shadow"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400">{rev.date}</span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Patient Details & Service Info */}
              <div className="pt-4 border-t border-stone-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#0a1b2a]">{rev.patientName}</h4>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-800 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Verified Patient
                  </span>
                </div>
                <p className="text-xs text-stone-500">{rev.location}</p>
                <p className="text-[11px] text-[#0b5341] font-medium pt-1">
                  Consultation: {rev.serviceReceived} ({rev.doctorName})
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
