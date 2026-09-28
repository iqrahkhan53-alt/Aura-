import React from 'react';
import { clinicInfo, doctorsData, servicesData, faqData } from '@/data/clinicData';

export default function JsonLdSchema() {
  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness', 'MedicalOrganization'],
    '@id': 'https://aurahealth.ie/#clinic',
    name: clinicInfo.name,
    description: 'Premier private medical clinic located at Fitzwilliam Place, Dublin 2, providing unhurried private GP consultations, executive health screening, rapid diagnostics, and specialist dermatology.',
    url: 'https://aurahealth.ie',
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    priceRange: '€€',
    image: 'https://aurahealth.ie/images/hero-clinic.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicInfo.addressLine1,
      addressLocality: clinicInfo.addressLine2,
      addressRegion: 'Co. Dublin',
      postalCode: clinicInfo.eircode,
      addressCountry: 'IE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.3344,
      longitude: -6.2525,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:30',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: clinicInfo.googleRating,
      reviewCount: clinicInfo.reviewCount,
      bestRating: '5.0',
      worstRating: '1.0',
    },
    medicalSpecialty: [
      'https://schema.org/GeneralPractice',
      'https://schema.org/Dermatology',
      'https://schema.org/Cardiovascular',
    ],
    availableService: servicesData.map(s => ({
      '@type': 'MedicalProcedure',
      name: s.title,
      description: s.shortDesc,
    })),
    employee: doctorsData.map(d => ({
      '@type': 'Physician',
      name: d.name,
      jobTitle: d.title,
      description: d.bio,
      identifier: d.imcNumber,
      medicalSpecialty: d.specialty,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
