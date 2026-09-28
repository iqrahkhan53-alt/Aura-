'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, ShieldCheck, ChevronRight, ArrowLeft } from 'lucide-react';
import { servicesData, doctorsData, clinicInfo } from '@/data/clinicData';
import { formatPrice } from '@/lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedServiceId }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedService, setSelectedService] = useState<string>(preselectedServiceId || servicesData[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('today');
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  
  // Patient Details
  const [patientData, setPatientData] = useState({
    fullName: '',
    email: '',
    phone: '',
    insuranceProvider: 'Self-Pay',
    symptomsBrief: '',
    agreedGdpr: true,
  });

  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedService(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentServiceObj = servicesData.find(s => s.id === selectedService) || servicesData[0];
  const currentDoctorObj = doctorsData.find(d => d.id === selectedDoctor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomRef);
    setStep(5);
  };

  const timeSlots = [
    '09:00 AM', '09:40 AM', '10:30 AM', '11:15 AM',
    '02:00 PM', '02:45 PM', '03:30 PM', '04:15 PM', '05:00 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-stone-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-[#0a1b2a] text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Aura Health Dublin</span>
            <h2 className="text-lg font-bold text-white">Book In-Clinic Consultation</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-800/80 hover:bg-stone-700 flex items-center justify-center text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Funnel Progress Indicator */}
        {step < 5 && (
          <div className="px-6 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs font-medium text-stone-500">
            <span className={step >= 1 ? 'text-[#0b5341] font-semibold' : ''}>1. Service</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#0b5341] font-semibold' : ''}>2. Doctor</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#0b5341] font-semibold' : ''}>3. Date & Time</span>
            <span>→</span>
            <span className={step >= 4 ? 'text-[#0b5341] font-semibold' : ''}>4. Details</span>
          </div>
        )}

        {/* Step Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: SELECT SERVICE */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#0a1b2a]">Select Medical Consultation or Service</h3>
                <p className="text-xs text-stone-500">Choose from our private GP, diagnostic, or specialist care tracks.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesData.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setSelectedService(svc.id)}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedService === svc.id
                        ? 'border-[#0b5341] bg-emerald-50/50 ring-2 ring-[#0b5341]/20'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-sm text-[#0a1b2a]">{svc.title}</span>
                      <span className="font-bold text-sm text-[#0b5341]">{formatPrice(svc.priceEur)}</span>
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-2 mb-2">{svc.shortDesc}</p>
                    <div className="flex items-center gap-3 text-[11px] text-stone-400 font-medium">
                      <span>⏱ {svc.durationMins} mins</span>
                      {svc.isInsuranceCovered && <span className="text-emerald-700">Insurance Claimable</span>}
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-[#0b5341] hover:bg-[#083f31] text-white text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Continue to Doctor Selection</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SELECT DOCTOR */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#0a1b2a]">Choose Preferred Physician</h3>
                <p className="text-xs text-stone-500">All clinicians are registered with the Irish Medical Council (IMC).</p>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor('any')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedDoctor === 'any'
                      ? 'border-[#0b5341] bg-emerald-50/50 ring-2 ring-[#0b5341]/20'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0b5341] flex items-center justify-center font-bold">
                      ★
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#0a1b2a]">First Available Senior Doctor</h4>
                      <p className="text-xs text-stone-500">Fastest appointment turnaround (Recommended for urgent visits)</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                    Earliest Slot
                  </span>
                </button>

                {doctorsData.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setSelectedDoctor(doc.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedDoctor === doc.id
                        ? 'border-[#0b5341] bg-emerald-50/50 ring-2 ring-[#0b5341]/20'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={doc.photoUrl} 
                        alt={doc.name} 
                        className="w-12 h-12 rounded-full object-cover border border-stone-200" 
                      />
                      <div>
                        <h4 className="font-semibold text-sm text-[#0a1b2a]">{doc.name}</h4>
                        <p className="text-xs text-stone-500">{doc.qualifications} • {doc.imcNumber}</p>
                        <p className="text-[11px] text-emerald-700 font-medium">{doc.specialty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-stone-400 block">Next Available</span>
                      <span className="text-xs font-semibold text-[#0a1b2a]">{doc.nextAvailable}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-stone-600 hover:text-stone-900 text-sm font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-[#0b5341] hover:bg-[#083f31] text-white text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Select Date & Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SELECT DATE & TIME */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#0a1b2a]">Select Consultation Slot</h3>
                <p className="text-xs text-stone-500">Fitzwilliam Place Clinic, Dublin 2</p>
              </div>

              {/* Day Selector */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'today', label: 'Today', date: 'Monday' },
                  { id: 'tomorrow', label: 'Tomorrow', date: 'Tuesday' },
                  { id: 'wednesday', label: 'Wednesday', date: 'Next day' },
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDate(d.id)}
                    className={`py-3 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedDate === d.id
                        ? 'border-[#0b5341] bg-emerald-50 text-[#0b5341] font-bold shadow-xs'
                        : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-wider">{d.label}</span>
                    <span className="text-sm font-semibold">{d.date}</span>
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                  Available Dublin Consultation Slots:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        selectedTime === slot
                          ? 'bg-[#0b5341] text-white border-[#0b5341] shadow-xs'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-emerald-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Standard private consultation duration is 20 to 30 minutes. You will receive an immediate SMS confirmation.</span>
              </div>

              <div className="pt-2 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-stone-600 hover:text-stone-900 text-sm font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-[#0b5341] hover:bg-[#083f31] text-white text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Enter Patient Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: PATIENT DETAILS */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#0a1b2a]">Patient Information & Insurance</h3>
                <p className="text-xs text-stone-500">Your medical data is encrypted and protected under Irish GDPR legislation.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={patientData.fullName}
                    onChange={(e) => setPatientData({ ...patientData, fullName: e.target.value })}
                    placeholder="e.g. Siobhan O'Reilly"
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0b5341] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile Telephone (Irish / Intl) *</label>
                  <input
                    type="tel"
                    required
                    value={patientData.phone}
                    onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })}
                    placeholder="e.g. +353 87 123 4567"
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0b5341] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={patientData.email}
                    onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                    placeholder="name@domain.ie"
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0b5341] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Irish Health Insurance</label>
                  <select
                    value={patientData.insuranceProvider}
                    onChange={(e) => setPatientData({ ...patientData, insuranceProvider: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0b5341] focus:outline-hidden bg-white"
                  >
                    <option value="Self-Pay">Self-Pay (Med 1 Tax Relievable)</option>
                    <option value="VHI Healthcare">VHI Healthcare</option>
                    <option value="Laya Healthcare">Laya Healthcare</option>
                    <option value="Irish Life Health">Irish Life Health</option>
                    <option value="Garda Medical Aid">Garda / Other Corporate Policy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Reason for Consultation (Optional / Confidential)</label>
                <textarea
                  rows={2}
                  value={patientData.symptomsBrief}
                  onChange={(e) => setPatientData({ ...patientData, symptomsBrief: e.target.value })}
                  placeholder="Brief note on symptoms, repeat prescription, or health check objectives..."
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0b5341] focus:outline-hidden"
                />
              </div>

              {/* Booking Summary Box */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
                <div className="flex justify-between text-stone-700">
                  <span>Selected Service:</span>
                  <span className="font-semibold text-stone-900">{currentServiceObj.title} ({formatPrice(currentServiceObj.priceEur)})</span>
                </div>
                <div className="flex justify-between text-stone-700">
                  <span>Consultant / Doctor:</span>
                  <span className="font-semibold text-stone-900">
                    {selectedDoctor === 'any' ? 'First Available Senior Physician' : currentDoctorObj?.name}
                  </span>
                </div>
                <div className="flex justify-between text-stone-700">
                  <span>Time & Venue:</span>
                  <span className="font-semibold text-stone-900">{selectedDate.toUpperCase()} at {selectedTime} (Fitzwilliam Place)</span>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-stone-600 hover:text-stone-900 text-sm font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="bg-[#0b5341] hover:bg-[#083f31] text-white text-sm font-semibold px-7 py-3 rounded-full flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/15"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Confirm Appointment Reservation</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: SUCCESS CONFIRMATION */}
          {step === 5 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0b5341] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Booking Confirmed
                </span>
                <h3 className="text-2xl font-bold text-[#0a1b2a] mt-3">We Look Forward to Welcoming You</h3>
                <p className="text-sm text-stone-600 mt-1 max-w-md mx-auto">
                  Your consultation request has been reserved. A confirmation SMS & digital calendar invitation have been dispatched.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="text-stone-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-stone-900">{bookingRef}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-semibold text-stone-900">{currentServiceObj.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="text-stone-500">Scheduled Time:</span>
                  <span className="font-semibold text-stone-900">{selectedTime}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Location:</span>
                  <span className="font-semibold text-stone-900">14 Fitzwilliam Place, Dublin 2 ({clinicInfo.eircode})</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#0a1b2a] hover:bg-stone-800 text-white text-sm font-semibold px-8 py-2.5 rounded-full cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
