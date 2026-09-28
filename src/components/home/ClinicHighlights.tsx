import React from 'react';
import Image from 'next/image';
import { Clock, Shield, Sparkles, Building2, Stethoscope, FileText } from 'lucide-react';

export default function ClinicHighlights() {
  const pillars = [
    {
      title: "20-Minute Minimum Visits",
      desc: "We reject the 7-minute rushed appointment model. Our physicians take the time to conduct thorough clinical examinations and listen carefully to your history.",
      icon: Clock,
    },
    {
      title: "On-Site Diagnostic Suite",
      desc: "Phlebotomy, resting 12-lead ECG, lung spirometry, and dermoscopic imaging performed on-site with rapid turnaround times.",
      icon: Stethoscope,
    },
    {
      title: "Direct Healthmail E-Prescribing",
      desc: "Prescriptions sent securely to your chosen Irish pharmacy before you leave your consultation room.",
      icon: FileText,
    },
    {
      title: "Calm Architectural Sanctuary",
      desc: "Designed using natural Scandinavian white oak, soft daylight, and acoustic privacy to create a restful, anxiety-free healthcare experience.",
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0a1b2a] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-700/60 aspect-4/3 sm:aspect-16/11">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Aura Health Dublin luxury clinic reception and consultation lounge on Fitzwilliam Place"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b2a]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0a1b2a]/80 backdrop-blur-md border border-white/10 text-xs">
                <span className="text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  Fitzwilliam Place Consulting Suites
                </span>
                <p className="text-stone-300">
                  Modern European clinical aesthetics paired with advanced Irish medical technology.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clinical Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-full inline-block">
                The European Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Healthcare Reimagined for Discerning Patients
              </h2>
              <p className="text-stone-400 text-base leading-relaxed">
                Founded on the belief that premium medicine requires both clinical precision and genuine human connection. Every touchpoint at Aura Health Dublin is engineered for exceptional patient outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="space-y-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-emerald-900/50 text-emerald-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">{pillar.title}</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
