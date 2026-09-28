import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLdSchema from "@/components/seo/JsonLdSchema";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a1b2a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aurahealth.ie"),
  title: {
    default: "Aura Health Dublin | Private Doctor & GP Clinic Fitzwilliam Place D2",
    template: "%s | Aura Health Dublin",
  },
  description:
    "Premier private medical clinic in Dublin 2. Same-day GP appointments, unhurried 20-minute consultations, executive health screens & rapid blood testing. Irish Medical Council registered doctors.",
  keywords: [
    "private GP Dublin",
    "doctor Dublin 2",
    "same-day GP appointment Dublin",
    "executive health check Ireland",
    "Fitzwilliam Place clinic",
    "private doctor near me Dublin",
    "dermatologist Dublin private",
    "blood test Dublin no referral",
    "VHI clinic Dublin",
    "Laya Healthcare doctor Dublin"
  ],
  authors: [{ name: "Dr. Liam Gallagher, Medical Director" }],
  creator: "Aura Health Dublin",
  publisher: "Aura Health Dublin",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://aurahealth.ie",
    languages: {
      "en-IE": "https://aurahealth.ie",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://aurahealth.ie",
    siteName: "Aura Health Dublin",
    title: "Aura Health Dublin | Private Medical Clinic & GP Services",
    description: "Unhurried European standard healthcare in Dublin 2. Same-day private doctor appointments, diagnostics, and executive screening.",
    images: [
      {
        url: "/images/hero-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Aura Health Dublin Private Consultation Room with Doctor and Patient",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Health Dublin | Private Medical Clinic",
    description: "Modern private healthcare clinic in Fitzwilliam Place, Dublin 2. Unhurried 20-minute doctor consultations.",
    images: ["/images/hero-clinic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" className={`${jakartaSans.variable} scroll-smooth`}>
      <head>
        <JsonLdSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-[#121c24] antialiased selection:bg-emerald-100 selection:text-emerald-900 pb-16 sm:pb-0">
        {children}
      </body>
    </html>
  );
}
