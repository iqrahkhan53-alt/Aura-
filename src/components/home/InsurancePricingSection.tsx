import React from 'react';
import { formatPrice } from '@/lib/utils';
import { ShieldCheck, FileCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { servicesData } from '@/data/clinicData';

export default function InsurancePricingSection({ onOpenBookingModal }: { onOpenBookingModal: (id?: string) => void }) {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b5341] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 inline-block">
            Transparent Irish Healthcare Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1b2a] tracking-tight">
            Clear Fees & Maximum Insurance Rebates
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            No unexpected clinic facility charges. We issue official digital receipts recognized for instant insurance claims and Irish Revenue 20% Med 1 tax relief.
          </p>
        </div>

        {/* Pricing Table / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Private GP Consultation */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold">Standard Practice</span>
                <span className="text-xs text-stone-400">20 Mins</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a1b2a]">Private GP Consultation</h3>
                <p className="text-xs text-stone-500 mt-1">Full medical evaluation, diagnosis, e-prescription & referral.</p>
              </div>
              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#0a1b2a]">€75</span>
                  <span className="text-xs text-stone-400">/ visit</span>
                </div>
                <p className="text-xs text-emerald-800 font-semibold mt-1">
                  Effective cost ~€60 after 20% Med 1 Tax Relief
                </p>
              </div>
              <ul className="space-y-2 text-xs text-stone-600 pt-3 border-t border-stone-100">
                <li>• Same-day appointment availability</li>
                <li>• Direct Healthmail prescription to Irish pharmacy</li>
                <li>• Medical certificates & hospital referrals</li>
                <li>• VHI, Laya, Irish Life Health claimable</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBookingModal('general-practice')}
              className="mt-6 w-full py-3 rounded-full bg-[#0a1b2a] hover:bg-stone-800 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Book GP Consultation
            </button>
          </div>

          {/* Card 2: Executive Health Screening (FEATURED) */}
          <div className="bg-[#0a1b2a] text-white rounded-3xl p-8 border-2 border-emerald-500/60 shadow-xl flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-[#0a1b2a] text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              Most Comprehensive Care
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold">Full Diagnostic</span>
                <span className="text-xs text-stone-400">90 Mins</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Executive Health Screen</h3>
                <p className="text-xs text-stone-400 mt-1">Full-body cardiovascular, metabolic & biomarker assessment.</p>
              </div>
              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">€295</span>
                  <span className="text-xs text-stone-400">/ screen</span>
                </div>
                <p className="text-xs text-emerald-400 font-semibold mt-1">
                  Save €59 via Revenue Med 1 20% Tax Refund
                </p>
              </div>
              <ul className="space-y-2 text-xs text-stone-300 pt-3 border-t border-stone-800">
                <li>• 52 vital blood biomarkers & organ panels</li>
                <li>• 12-Lead Resting & Exercise ECG</li>
                <li>• Lung spirometry & cardiovascular risk score</li>
                <li>• 16-page personalized physician report</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBookingModal('executive-health-screen')}
              className="mt-6 w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0a1b2a] text-xs font-extrabold transition-all cursor-pointer shadow-lg"
            >
              Book Executive Screen
            </button>
          </div>

          {/* Card 3: Specialist & Diagnostics */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold">Specialist Care</span>
                <span className="text-xs text-stone-400">30–45 Mins</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a1b2a]">Specialist & Diagnostics</h3>
                <p className="text-xs text-stone-500 mt-1">Dermatology, Well Woman, Rapid Bloods & Minor Surgery.</p>
              </div>
              <div className="pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#0a1b2a]">From €60</span>
                  <span className="text-xs text-stone-400">/ test</span>
                </div>
                <p className="text-xs text-emerald-800 font-semibold mt-1">
                  Rapid 24-hr accredited Irish lab turnaround
                </p>
              </div>
              <ul className="space-y-2 text-xs text-stone-600 pt-3 border-t border-stone-100">
                <li>• Rapid blood test panels: €60</li>
                <li>• Full-body mole mapping & dermoscopy: €120</li>
                <li>• Well Woman & Menopause clinic: €110</li>
                <li>• Minor surgical procedures: €165</li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBookingModal('rapid-blood-diagnostics')}
              className="mt-6 w-full py-3 rounded-full bg-[#0a1b2a] hover:bg-stone-800 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Book Specialist Service
            </button>
          </div>

        </div>

        {/* Insurance & Med 1 Guide Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <FileCheck className="w-4 h-4" />
              <span>Irish Revenue Med 1 Tax Relief & Insurance Claimback</span>
            </div>
            <h4 className="text-xl font-bold text-white">How Irish Patients Save Up to 70% on Fees</h4>
            <p className="text-xs text-emerald-100/90 leading-relaxed">
              In Ireland, private healthcare expenses qualify for <strong>20% standard tax relief</strong> via the Revenue Commissioner Med 1 scheme. Furthermore, policies with <strong>VHI, Laya Healthcare, Irish Life Health</strong> and <strong>Garda Medical Aid</strong> provide direct rebates on outpatient consultations. Our clinic receipts contain all required IMC registration codes for one-click claim submission.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal()}
            className="bg-white hover:bg-stone-100 text-[#0b5341] font-bold text-xs px-6 py-3.5 rounded-full shrink-0 shadow-md cursor-pointer transition-all"
          >
            Schedule Consultation Now
          </button>
        </div>

      </div>
    </section>
  );
}
