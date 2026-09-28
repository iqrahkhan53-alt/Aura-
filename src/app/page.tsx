'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroClinic from '@/components/home/HeroClinic';
import QuickBookingBar from '@/components/home/QuickBookingBar';
import TrustBar from '@/components/home/TrustBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import ClinicHighlights from '@/components/home/ClinicHighlights';
import DoctorRoster from '@/components/home/DoctorRoster';
import InsurancePricingSection from '@/components/home/InsurancePricingSection';
import PatientReviewsSection from '@/components/home/PatientReviewsSection';
import DublinLocationSection from '@/components/home/DublinLocationSection';
import FaqSection from '@/components/home/FaqSection';
import StickyMobileBar from '@/components/home/StickyMobileBar';
import BookingModal from '@/components/booking/BookingModal';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Clinic Header & Triage Bar */}
      <Header onOpenBookingModal={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroClinic onOpenBookingModal={handleOpenBooking} />

        {/* Quick Booking Bar */}
        <QuickBookingBar onSearchSlots={handleOpenBooking} />

        {/* Trust & Clinical Accreditation */}
        <TrustBar />

        {/* Core Medical Services Grid */}
        <ServicesGrid onSelectService={handleOpenBooking} />

        {/* European Standards & Architectural Facility Highlights */}
        <ClinicHighlights />

        {/* IMC Registered Physicians Roster */}
        <DoctorRoster onBookDoctor={handleOpenBooking} />

        {/* Fees, Med 1 Tax Relief & Irish Insurance Guide */}
        <InsurancePricingSection onOpenBookingModal={handleOpenBooking} />

        {/* Patient Stories & Social Proof */}
        <PatientReviewsSection />

        {/* Dublin 2 Clinic Location, Luas Transit & Accessibility */}
        <DublinLocationSection onOpenBookingModal={() => handleOpenBooking()} />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenBookingModal={() => handleOpenBooking()} />
      </main>

      {/* Footer with Local SEO NAP & Legal */}
      <Footer />

      {/* Sticky Conversion Bar for Mobile Patients */}
      <StickyMobileBar onOpenBookingModal={() => handleOpenBooking()} />

      {/* Multi-Step Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={selectedServiceId}
      />
    </div>
  );
}
