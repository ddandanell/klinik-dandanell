"use client";

import {
  Facebook,
  Instagram,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  const behandlinger = [
    {
      label: "Ansigtsbehandlinger",
      href: "/behandlinger/ansigtsbehandlinger-roskilde",
    },
    { label: "Vipper & Bryn", href: "/behandlinger/vipper-bryn-roskilde" },
    {
      label: "Manicure & Pedicure",
      href: "/behandlinger/manicure-pedicure-roskilde",
    },
    { label: "CND Shellac", href: "/behandlinger/cnd-shellac-roskilde" },
    {
      label: "Akryl & Gelé Negle",
      href: "/behandlinger/akryl-gele-negle-roskilde",
    },
    { label: "Hårfjerning", href: "/behandlinger/harfjerning-roskilde" },
    { label: "Massage", href: "/behandlinger/massage-roskilde" },
  ];

  return (
    <footer className="bg-[#2B2520] text-white">
      {/* Trustpilot Section */}
      <div className="bg-[#FAF8F6] py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="fill-[#C9A882] text-[#C9A882]"
              />
            ))}
          </div>
          <p
            className="text-[20px] md:text-[24px] font-medium text-[#2B2520] mb-2"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            4,8 ud af 5 stjerner
          </p>
          <p
            className="text-[15px] font-normal text-[#2B2520]/70"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Elsket af over 500 kunder i Roskilde
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo and CTA */}
          <div className="text-center mb-16 pb-12 border-b border-white/10">
            <h2
              className="text-[32px] md:text-[42px] font-light mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Klinik Dandanell
            </h2>
            <p
              className="text-[16px] md:text-[18px] font-light text-white/80 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Roskildes førende skønhedsklinik siden 2015
            </p>
            <a
              href="/kontakt-roskilde"
              className="inline-block px-10 py-4 bg-[#C9A882] text-white text-[15px] font-medium rounded-sm hover:bg-[#B89770] hover:shadow-lg hover:scale-105 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book din behandling i dag
            </a>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - Kontakt */}
            <div>
              <h3
                className="text-[18px] font-medium mb-6 text-white flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <MapPin size={20} className="text-[#C9A882]" />
                Kontakt & Lokation
              </h3>
              <div
                className="space-y-4 text-[14px] font-normal text-white/80"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-[#C9A882] mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-white">Algade 6, 1. sal</p>
                    <p>4000 Roskilde</p>
                    <p className="text-[13px] mt-1">
                      Midt på gågaden ved Stændertorvet
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#C9A882] flex-shrink-0" />
                  <a
                    href="tel:+4512345678"
                    className="hover:text-[#C9A882] transition-colors duration-200"
                  >
                    +45 12 34 56 78
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#C9A882] flex-shrink-0" />
                  <a
                    href="mailto:info@klinikdandanell.dk"
                    className="hover:text-[#C9A882] transition-colors duration-200"
                  >
                    info@klinikdandanell.dk
                  </a>
                </div>
                <div className="pt-2">
                  <div className="flex items-start gap-3 mb-2">
                    <Clock
                      size={16}
                      className="text-[#C9A882] mt-1 flex-shrink-0"
                    />
                    <p className="font-medium text-white">Åbningstider</p>
                  </div>
                  <div className="pl-7 space-y-1 text-[13px]">
                    <p>Mandag - Fredag: 10:00 - 18:00</p>
                    <p>Lørdag: 10:00 - 15:00</p>
                    <p>Søndag: Lukket</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Behandlinger */}
            <div>
              <h3
                className="text-[18px] font-medium mb-6 text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Vores Behandlinger
              </h3>
              <ul className="space-y-3">
                {behandlinger.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-[14px] font-normal text-white/80 hover:text-[#C9A882] transition-colors duration-200 flex items-center gap-2 group"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C9A882] group-hover:scale-150 transition-transform duration-200"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Information */}
            <div>
              <h3
                className="text-[18px] font-medium mb-6 text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Information
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/priser-roskilde"
                    className="text-[14px] font-normal text-white/80 hover:text-[#C9A882] transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A882] group-hover:scale-150 transition-transform duration-200"></span>
                    Priser
                  </a>
                </li>
                <li>
                  <a
                    href="/gavekort-roskilde"
                    className="text-[14px] font-normal text-white/80 hover:text-[#C9A882] transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A882] group-hover:scale-150 transition-transform duration-200"></span>
                    Gavekort
                  </a>
                </li>
                <li>
                  <a
                    href="/om-os-roskilde"
                    className="text-[14px] font-normal text-white/80 hover:text-[#C9A882] transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A882] group-hover:scale-150 transition-transform duration-200"></span>
                    Om os
                  </a>
                </li>
                <li>
                  <a
                    href="/kontakt-roskilde"
                    className="text-[14px] font-normal text-white/80 hover:text-[#C9A882] transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A882] group-hover:scale-150 transition-transform duration-200"></span>
                    Kontakt
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="/cookiepolitik"
                    className="text-[13px] font-normal text-white/60 hover:text-[#C9A882] transition-colors duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Cookiepolitik
                  </a>
                </li>
                <li>
                  <a
                    href="/privatlivspolitik"
                    className="text-[13px] font-normal text-white/60 hover:text-[#C9A882] transition-colors duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Privatlivspolitik
                  </a>
                </li>
                <li>
                  <a
                    href="/handelsbetingelser"
                    className="text-[13px] font-normal text-white/60 hover:text-[#C9A882] transition-colors duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Handelsbetingelser
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Sociale Medier & Certificates */}
            <div>
              <h3
                className="text-[18px] font-medium mb-6 text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Følg os
              </h3>
              <div className="flex gap-3 mb-8">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#C9A882] hover:border-[#C9A882] hover:scale-110 transition-all duration-200"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-[#C9A882] hover:border-[#C9A882] hover:scale-110 transition-all duration-200"
                >
                  <Instagram size={20} />
                </a>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p
                  className="text-[14px] font-medium text-white mb-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Certificeringer
                </p>
                <div className="space-y-2 text-[13px] text-white/80">
                  <p className="flex items-center gap-2">
                    <span className="text-[#C9A882]">✓</span> CND Ambassador &
                    Master Clinic
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#C9A882]">✓</span> Uddanner klinikker
                    i hele Danmark
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/10">
            <p
              className="text-[13px] font-normal text-white/60"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © 2025 Klinik Dandanell. Alle rettigheder forbeholdes. | Skønhed &
              Velvære i Roskilde siden 2015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
