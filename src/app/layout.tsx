import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load JetBrains Mono Google Font
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salman Shafi - System Administrator",
  description: "Professional portfolio of Salman Shafi, System Administrator from Bogura, Bangladesh. Specialised in DNS, Mail infrastructure, Linux, WireGuard VPN, Podman containers, and self-hosted services.",
  keywords: "System Administrator, DNS, DNSSEC, PowerDNS, BIND, Knot, WireGuard, VPN, Podman, Docker, Linux, RHEL, AlmaLinux, Debian, Caddy, NGINX, Mail Server, Stalwart, SPF, DKIM, DMARC, SELinux, LUKS, BGP, Networking, Cloudflare, Self-hosted, Bangladesh",
  authors: [{ name: "Salman Shafi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-black text-[#e5e5e5] min-h-screen flex flex-col selection:bg-[#EE0000] selection:text-white">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
