import React from 'react';
import Link from 'next/link';
import { clinicInfo } from '@/data/clinicData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1b2a] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-stone-800/80">
          {/* Col 1: Brand & Clinical Accreditation */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 4v16m-8-8h16" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">Aura Health Dublin</span>
                <p className="text-xs text-stone-400">Private Medical & Specialist Clinic</p>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed">
              A private Irish healthcare clinic setting the benchmark for European clinical excellence, unhurried consultations, and rapid diagnostic access in Dublin 2.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Irish Medical Council (IMC) Registered Clinicians</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ICGP Affiliated General Practice</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-300">
                <HeartPulse className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct billing recognized: VHI, Laya, Irish Life</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Directory (High-SEO Value Internal Links) */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">Medical Services</h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Private GP Consultations (Dublin 2)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Executive Health & Biomarker Screening</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Rapid Blood Diagnostics & Pathology</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Dermatology & Digital Mole Mapping</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Well Woman, CervicalCheck & Menopause</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Minor Surgical Suite & Joint Injections</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Dublin Location & Transit */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">Clinic & Transport</h3>
            <div className="space-y-3.5 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <strong className="text-stone-200 block">{clinicInfo.name}</strong>
                  <span>{clinicInfo.addressLine1}, {clinicInfo.addressLine2}</span>
                  <span className="block text-emerald-300 font-medium">Eircode: {clinicInfo.eircode}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <span className="block text-stone-200">Monday – Friday: {clinicInfo.openingHours.weekdays}</span>
                  <span className="block">Saturday: {clinicInfo.openingHours.saturday}</span>
                  <span className="block text-xs text-stone-400">Sunday: {clinicInfo.openingHours.sunday}</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800 text-xs text-stone-400 space-y-1">
                <p className="text-stone-300 font-medium">Transit Links:</p>
                <p>• {clinicInfo.transit.luas}</p>
                <p>• {clinicInfo.transit.parking}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Appointments */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">Contact & Triage</h3>
            <div className="space-y-4 text-sm text-stone-400">
              <a
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-900/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-400 block uppercase font-medium">Dublin Reception Desk</span>
                  <span className="text-white font-semibold text-base group-hover:text-emerald-300">{clinicInfo.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 text-xs text-stone-400">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{clinicInfo.email}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-stone-300">
                <strong className="text-red-300 block mb-1">Medical Emergencies</strong>
                <p className="text-stone-400 leading-relaxed">
                  In life-threatening situations (severe chest pain, breathing difficulties, collapse), please dial <strong>112</strong> or <strong>999</strong> immediately or visit your nearest hospital emergency department.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Tax Relief Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Aura Health Dublin Limited. All rights reserved. Registered in Ireland.
          </p>
          <div className="flex items-center gap-6">
            <span>Irish Revenue Med 1 Eligible</span>
            <span>GDPR / Data Protection Compliant</span>
            <a href="#faq" className="hover:text-stone-400">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
