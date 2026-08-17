'use client';

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Contact from "@/components/home/Contact";

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Salman Shafi",
    "alternateName": "Salman Shafi Portfolio",
    "jobTitle": "System Administrator",
    "description": "Professional System Administrator from Bogura, Bangladesh. Specialised in DNS, Mail infrastructure, Linux, WireGuard VPN, Podman containers, and self-hosted services.",
    "url": "https://salmanshafi.net",
    "image": "https://salmanshafi.net/photo.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogura",
      "addressCountry": "Bangladesh"
    },
    "email": "mailto:hello@salmanshafi.net",
    "telephone": "+8801603161647",
    "knowsAbout": [
      "System Administration",
      "DNS Management",
      "DNSSEC",
      "Mail Infrastructure",
      "Linux",
      "WireGuard",
      "Podman",
      "Self-hosted Services"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://github.com/EliteSalman",
      "https://twitter.com/EliteSalmanX"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "System Administrator",
      "occupationalCategory": "15-1244.00 Network and Computer Systems Administrators",
      "skills": [
        "Linux Server Administration",
        "DNS Configuration",
        "Mail Server Infrastructure",
        "Containerisation"
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://salmanshafi.net"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
