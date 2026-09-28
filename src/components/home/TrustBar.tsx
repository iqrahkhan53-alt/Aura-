import React from 'react';
import { ShieldCheck, Award, HeartPulse, CheckCircle2, FileCheck2 } from 'lucide-react';

export default function TrustBar() {
  const credentials = [
    { label: "Irish Medical Council", sub: "Fully Registered Clinicians", icon: ShieldCheck },
    { label: "ICGP Affiliated", sub: "Irish College of General Practitioners", icon: Award },
    { label: "Health Insurance Direct", sub: "VHI • Laya • Irish Life Health", icon: HeartPulse },
    { label: "Irish Revenue Med 1", sub: "20% Medical Tax Relief Eligible", icon: FileCheck2 },
  ];

  return (
    <section className="bg-white border-y border-stone-200/80 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0b5341] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0a1b2a] tracking-tight">{item.label}</h4>
                  <p className="text-[11px] sm:text-xs text-stone-500">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
