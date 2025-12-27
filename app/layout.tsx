import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarung Goyor Pemalang | Tenun ATBM Asli Ekspor Timur Tengah",
  description: "Sarung Goyor Pemalang kualitas premium dengan teknik ATBM (Alat Tenun Bukan Mesin). Terbukti ekspor ke Timur Tengah. Motif Botolan, Balian, dan Modern. Benang rayon viskosa premium. Pesan langsung via WhatsApp.",
  keywords: [
    "sarung goyor",
    "sarung pemalang",
    "tenun ATBM",
    "sarung premium",
    "sarung ekspor",
    "tenun ikat",
    "sarung handmade",
    "sarung tradisional",
    "sarung goyor asli",
    "sarung wanarejan",
    "sarung jawa tengah",
    "motif botolan",
    "motif balian",
    "sarung rayon",
    "sarung timur tengah"
  ],
  authors: [{ name: "Sarung Goyor Pemalang" }],
  creator: "Sarung Goyor Pemalang",
  publisher: "Sarung Goyor Pemalang",

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "https://sarunggoyor.com",
    siteName: "Sarung Goyor Pemalang",
    title: "Sarung Goyor Pemalang - Warisan Budaya Indonesia Berkualitas Ekspor",
    description: "Sarung tenun ATBM asli Pemalang dengan kualitas ekspor ke Timur Tengah. Dibuat dengan teknik tradisional, benang rayon premium, dan motif autentik.",
    images: [
      {
        url: "/og-image.jpg", // Ganti dengan path image asli
        width: 1200,
        height: 630,
        alt: "Sarung Goyor Pemalang - Tenun ATBM Premium",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sarung Goyor Pemalang | Tenun ATBM Ekspor Timur Tengah",
    description: "Sarung premium dengan teknik ATBM. Kualitas ekspor, motif autentik, benang rayon viskosa. Pesan sekarang!",
    images: ["/og-image.jpg"], // Ganti dengan path image asli
    creator: "@sarunggoyor", // Ganti dengan Twitter handle asli
  },

  // Additional SEO
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

  verification: {
    // google: "your-google-verification-code", // Tambahkan setelah setup Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  category: "E-commerce",
  classification: "Textile & Fashion",
};

import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://sarunggoyor.com/#organization",
                  name: "Sarung Goyor Pemalang",
                  url: "https://sarunggoyor.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://sarunggoyor.com/logo.png",
                  },
                  description: "Produsen sarung tenun ATBM asli Pemalang dengan kualitas ekspor",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Pemalang",
                    addressRegion: "Jawa Tengah",
                    postalCode: "52364",
                    addressCountry: "ID",
                    streetAddress: "Desa Wanarejan Utara",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+62-812-3456-7890",
                    contactType: "Customer Service",
                    availableLanguage: ["Indonesian", "English"],
                  },
                  sameAs: [
                    "https://instagram.com/sarunggoyor",
                    "https://facebook.com/sarunggoyor",
                  ],
                },
                {
                  "@type": "Product",
                  "@id": "https://sarunggoyor.com/#product",
                  name: "Sarung Goyor Pemalang",
                  description: "Sarung tenun ATBM dengan teknik ikat, benang rayon viskosa premium",
                  brand: {
                    "@type": "Brand",
                    name: "Sarung Goyor",
                  },
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "IDR",
                    lowPrice: "200000",
                    highPrice: "600000",
                    availability: "https://schema.org/InStock",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "150",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://sarunggoyor.com/#website",
                  url: "https://sarunggoyor.com",
                  name: "Sarung Goyor Pemalang",
                  description: "Sarung tenun ATBM asli Pemalang kualitas ekspor",
                  publisher: {
                    "@id": "https://sarunggoyor.com/#organization",
                  },
                },
              ],
            }),
          }}
        />

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
