import { ClinicInfo, Doctor, MedicalService, PatientReview, FaqItem } from '@/types';

export const clinicInfo: ClinicInfo = {
  name: "Aura Health Dublin",
  addressLine1: "14 Fitzwilliam Place",
  addressLine2: "Dublin 2",
  city: "Dublin",
  county: "Co. Dublin",
  eircode: "D02 FP84",
  phone: "+353 (0)1 485 3200",
  emergencyPhone: "112 / 999",
  email: "care@aurahealth.ie",
  openingHours: {
    weekdays: "07:30 – 20:00",
    saturday: "08:30 – 17:00",
    sunday: "10:00 – 16:00 (Urgent Care)",
  },
  googleRating: 4.9,
  reviewCount: 540,
  transit: {
    luas: "Harcourt Stop (Green Line) — 4 min walk",
    bus: "Routes 11, 14, 15, 39A, 46A (Leeson St / Stephen's Green)",
    parking: "Designated patient parking on-site & Q-Park St. Stephen's Green",
  },
};

export const doctorsData: Doctor[] = [
  {
    id: "dr-liam-gallagher",
    name: "Dr. Liam Gallagher",
    title: "Medical Director & Senior GP",
    imcNumber: "IMC #412984",
    qualifications: "MB BCh BAO (TCD), MRCPI, MICGP",
    role: "Lead Physician",
    specialty: "Preventive Medicine, Men's Health & Cardiovascular Screening",
    photoUrl: "/images/doctor-liam.jpg",
    bio: "Graduated with honors from Trinity College Dublin. With over 18 years of clinical practice in Dublin and London teaching hospitals, Dr. Gallagher specializes in comprehensive executive health screening and proactive longevity care.",
    consultationFee: 75,
    languages: ["English", "Irish (Gaeilge)", "French"],
    nextAvailable: "Today, 14:15",
  },
  {
    id: "dr-aoife-oconnor",
    name: "Dr. Aoife O'Connor",
    title: "Consultant Physician & Women's Health Lead",
    imcNumber: "IMC #428913",
    qualifications: "MB BCh BAO (UCD), MRCOG, Dip Derm",
    role: "Senior Consultant",
    specialty: "Women's Health, Dermatology & Preventive Diagnostics",
    photoUrl: "/images/doctor-aoife.jpg",
    bio: "Trained at University College Dublin and the National Maternity Hospital. Dr. O'Connor brings specialized expertise in menopause management, dermatological mole mapping, and hormonal health with an empathetic, personalized approach.",
    consultationFee: 85,
    languages: ["English", "German"],
    nextAvailable: "Today, 16:00",
  },
];

export const servicesData: MedicalService[] = [
  {
    id: "general-practice",
    title: "General Practice & Family Medicine",
    slug: "general-practice",
    category: "General Practice",
    shortDesc: "In-depth 20-minute private GP consultations for acute illness, ongoing medical management, and immediate care.",
    fullDesc: "Unlike rushed appointments, our consultations provide the time you need. Includes comprehensive physical assessment, digital prescription sent directly to your Irish pharmacy of choice, and doctor follow-up notes.",
    priceEur: 75,
    durationMins: 20,
    isPrsiEligible: true,
    isInsuranceCovered: true,
    popular: true,
    keyBenefits: [
      "Same-day or next-day appointments guaranteed",
      "Direct e-Prescription (Healthmail) to your local pharmacy",
      "Comprehensive medical sick certs & specialist referral letters",
      "Full digital patient summary provided after visit"
    ],
  },
  {
    id: "executive-health-screen",
    title: "Executive Health & Longevity Screen",
    slug: "executive-health-screening",
    category: "Diagnostics",
    shortDesc: "Comprehensive 90-minute full-body biomarker screening, cardiovascular stress testing, and custom wellness roadmap.",
    fullDesc: "Designed for proactive health optimization. Evaluates 52 blood biomarkers, resting & exercise ECG, lung spirometry, visceral fat analysis, and a detailed 1-on-1 review with a senior physician.",
    priceEur: 295,
    durationMins: 90,
    isPrsiEligible: false,
    isInsuranceCovered: true,
    popular: true,
    keyBenefits: [
      "52 comprehensive blood & metabolic biomarkers",
      "Resting 12-lead ECG & cardiovascular risk scoring",
      "Full doctor consultation & 16-page personalized health report",
      "Eligible for 20% Irish Tax Relief (Med 1 form)"
    ],
  },
  {
    id: "rapid-blood-diagnostics",
    title: "Rapid Blood Testing & Pathology",
    slug: "rapid-blood-testing",
    category: "Diagnostics",
    shortDesc: "Full phlebotomy suite with same-day and 24-hour turnaround for vitamins, thyroid, hormones, and organ function.",
    fullDesc: "State-of-the-art diagnostic testing processed through accredited Irish medical laboratories. No GP referral needed.",
    priceEur: 60,
    durationMins: 15,
    isPrsiEligible: true,
    isInsuranceCovered: true,
    keyBenefits: [
      "Gentle specialist phlebotomist sampling",
      "Results delivered via secure encrypted patient portal",
      "Includes Ferritin, Vitamin D, Full Blood Count, Thyroid, Lipid profile",
      "Physician commentary included on all abnormal results"
    ],
  },
  {
    id: "dermatology-mole-check",
    title: "Dermatology & Full-Body Mole Mapping",
    slug: "dermatology-mole-mapping",
    category: "Specialist Care",
    shortDesc: "High-magnification digital dermoscopy for early skin cancer detection, acne management, and eczema therapy.",
    fullDesc: "Advanced optical assessment of atypical moles, lesions, and persistent dermatological conditions with on-site minor biopsy capability.",
    priceEur: 120,
    durationMins: 30,
    isPrsiEligible: false,
    isInsuranceCovered: true,
    keyBenefits: [
      "Digital optical dermoscopy imaging",
      "Melanoma and basal cell carcinoma screening",
      "Cryotherapy and rapid minor skin excision available on-site",
      "Specialist dermatology treatment plans"
    ],
  },
  {
    id: "womens-health-wellwoman",
    title: "Well Woman & Menopause Clinic",
    slug: "womens-health-wellwoman",
    category: "Women's Health",
    shortDesc: "Specialized female hormonal profiling, cervical screening, fertility advice, and evidence-based HRT management.",
    fullDesc: "Compassionate, expert care led by Dr. Aoife O'Connor. Tailored to every life stage from reproductive health to perimenopause and post-menopause transition.",
    priceEur: 110,
    durationMins: 30,
    isPrsiEligible: true,
    isInsuranceCovered: true,
    popular: true,
    keyBenefits: [
      "Comprehensive hormone panel & bone density review",
      "Registered CervicalCheck provider",
      "Evidence-based body-identical HRT guidance",
      "Contraception counseling & intrauterine device services"
    ],
  },
  {
    id: "minor-surgery-joint-injections",
    title: "Minor Surgery & Joint Injections",
    slug: "minor-surgery",
    category: "Specialist Care",
    shortDesc: "Sterile clinic theatre for skin tag/cyst removals, ingrown toenail procedures, and ultrasound-guided joint pain relief.",
    fullDesc: "Avoid hospital waiting lists. Performed under local anesthesia in our accredited clinical procedure suite with minimal downtime.",
    priceEur: 165,
    durationMins: 45,
    isPrsiEligible: false,
    isInsuranceCovered: true,
    keyBenefits: [
      "Accredited minor operations theater",
      "Histopathology analysis of all excised tissue",
      "Hyaluronic acid and corticosteroid joint injections",
      "Fully claimable on VHI, Laya, and Irish Life Health policies"
    ],
  },
];

export const reviewsData: PatientReview[] = [
  {
    id: "rev-1",
    patientName: "Ciara Fitzgerald",
    location: "Dublin 4 (Ballsbridge)",
    date: "12 days ago",
    rating: 5,
    serviceReceived: "Well Woman & Hormone Consultation",
    doctorName: "Dr. Aoife O'Connor",
    comment: "The highest standard of care I've experienced in Dublin. Dr. Aoife took 30 minutes to thoroughly listen to my symptoms and formulate a personalized HRT plan. The clinic itself is calm, beautiful, and completely unhurried.",
    verified: true,
  },
  {
    id: "rev-2",
    patientName: "Declan Murphy",
    location: "Grand Canal Dock",
    date: "3 weeks ago",
    rating: 5,
    serviceReceived: "Executive Health Screen",
    doctorName: "Dr. Liam Gallagher",
    comment: "Booked an executive health check after putting it off for years. The thoroughness of the cardiovascular tests and blood panels was incredible. I received a clear 16-page report within 48 hours. Worth every euro.",
    verified: true,
  },
  {
    id: "rev-3",
    patientName: "Fiona Byrne",
    location: "Ranelagh",
    date: "1 month ago",
    rating: 5,
    serviceReceived: "Same-Day GP Consultation",
    doctorName: "Dr. Liam Gallagher",
    comment: "Managed to get a same-day appointment within 2 hours of booking online. Prescription was at my local Boots pharmacy before I even walked out the door. Remarkable service and immaculate clinic.",
    verified: true,
  },
];

export const faqData: FaqItem[] = [
  {
    question: "How do I book a same-day doctor appointment?",
    answer: "You can book directly via our online booking engine on this page in under 60 seconds, or call our Dublin reception team at +353 (0)1 485 3200. We reserve dedicated same-day priority appointment slots each morning starting at 07:30.",
    category: "Appointments",
  },
  {
    question: "Can I claim consultation fees back on Irish health insurance?",
    answer: "Yes. All our physicians are fully registered with the Irish Medical Council (IMC). Depending on your level of cover with VHI Healthcare, Laya Healthcare, Irish Life Health, or Garda Medical Aid, you can typically claim between 50% and 75% of your consultation and screening fees back using the official digital receipt we issue instantly.",
    category: "Fees & Insurance",
  },
  {
    question: "Can I claim Irish tax relief (Med 1 form) on medical expenses?",
    answer: "Yes. Under Irish Revenue guidelines, you are entitled to claim 20% tax relief on non-reimbursed health expenses including doctor visits, diagnostic blood tests, and medical procedures via the Revenue MyAccount Med 1 facility.",
    category: "Fees & Insurance",
  },
  {
    question: "Where is the clinic located and what are the transit options?",
    answer: "Aura Health Dublin is situated at 14 Fitzwilliam Place, Dublin 2 (Eircode D02 FP84). We are a 4-minute walk from the Harcourt Luas Green Line stop and 10 minutes from St. Stephen's Green. Reserved patient parking is accessible on-site.",
    category: "Location",
  },
  {
    question: "How long are standard appointments?",
    answer: "Our standard GP consultations are 20 minutes minimum — double the length of typical NHS or HSE visits. Specialist screenings, Well Woman checks, and executive assessments range from 30 to 90 minutes to ensure a comprehensive, unhurried medical evaluation.",
    category: "Appointments",
  },
];
