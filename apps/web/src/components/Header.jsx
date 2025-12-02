"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Sparkles,
  Heart,
  Scissors,
  Calendar,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBehandlingerOpen, setIsBehandlingerOpen] = useState(false);

  const behandlinger = [
    {
      label: "Ansigtsbehandlinger",
      href: "/behandlinger/ansigtsbehandlinger-roskilde",
      icon: Sparkles,
    },
    {
      label: "Vipper & Bryn",
      href: "/behandlinger/vipper-bryn-roskilde",
      icon: Heart,
    },
    {
      label: "Manicure & Pedicure",
      href: "/behandlinger/manicure-pedicure-roskilde",
      icon: Scissors,
    },
    {
      label: "CND Shellac",
      href: "/behandlinger/cnd-shellac-roskilde",
      icon: Sparkles,
    },
    {
      label: "Akryl & Gelé Negle",
      href: "/behandlinger/akryl-gele-negle-roskilde",
      icon: Sparkles,
    },
    {
      label: "Hårfjerning",
      href: "/behandlinger/harfjerning-roskilde",
      icon: Scissors,
    },
    { label: "Massage", href: "/behandlinger/massage-roskilde", icon: Heart },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-[#E8D5C4]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Icon */}
            <a href="/" className="flex items-center gap-3 md:gap-4">
              <img
                src="https://ucarecdn.com/2fdd63a3-202f-4393-89ed-9f4f03705f33/"
                alt="Klinik Dandanell Logo"
                className="h-10 md:h-12 w-auto"
              />

            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                className="text-[14px] font-normal text-[#2B2520] hover:text-[#C9A882] transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Forside
              </a>

              {/* Behandlinger Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsBehandlingerOpen(true)}
                onMouseLeave={() => setIsBehandlingerOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-[14px] font-normal text-[#2B2520] hover:text-[#C9A882] transition-colors duration-300 tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Behandlinger
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isBehandlingerOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isBehandlingerOpen && (
                  <div className="absolute top-full left-0 mt-3 w-[280px] bg-white backdrop-blur-md border border-[#E8D5C4]/30 shadow-2xl rounded-sm py-2 animate-fadeIn">
                    {behandlinger.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 px-5 py-3 text-[13px] font-normal text-[#2B2520] hover:bg-[#FAF8F6] hover:text-[#C9A882] transition-all duration-200 group"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <item.icon
                          size={16}
                          className="text-[#C9A882] group-hover:scale-110 transition-transform duration-200"
                        />
                        <span className="tracking-wide">{item.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/priser-roskilde"
                className="text-[14px] font-normal text-[#2B2520] hover:text-[#C9A882] transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Priser
              </a>

              <a
                href="/gavekort-roskilde"
                className="text-[14px] font-normal text-[#2B2520] hover:text-[#C9A882] transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Gavekort
              </a>

              <a
                href="/om-os-roskilde"
                className="text-[14px] font-normal text-[#2B2520] hover:text-[#C9A882] transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Om os
              </a>

              <a
                href="/kontakt-roskilde"
                className="text-[14px] font-normal text-[#2B2520] hover:text-[#C9A882] transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Kontakt
              </a>

              <a
                href="/kontakt-roskilde"
                className="ml-4 px-7 py-2.5 bg-[#C9A882] text-white text-[13px] font-medium tracking-wide hover:bg-[#B89770] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Book tid
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-[#FAF8F6] rounded-sm transition-all duration-200"
            >
              {isMenuOpen ? (
                <X size={24} className="text-[#2B2520]" />
              ) : (
                <Menu size={24} className="text-[#2B2520]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#F5F0EB] max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="px-4 py-6 space-y-4">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[16px] font-normal text-[#2B2520] py-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Forside
              </a>

              <div>
                <button
                  onClick={() => setIsBehandlingerOpen(!isBehandlingerOpen)}
                  className="flex items-center justify-between w-full text-[16px] font-normal text-[#2B2520] py-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Behandlinger
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isBehandlingerOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isBehandlingerOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {behandlinger.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 text-[14px] font-normal text-[#2B2520]/80 py-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <item.icon size={16} className="text-[#C9A882]" />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* rest of mobile menu items */}
              <a
                href="/priser-roskilde"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[16px] font-normal text-[#2B2520] py-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Priser
              </a>

              <a
                href="/gavekort-roskilde"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[16px] font-normal text-[#2B2520] py-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Gavekort
              </a>

              <a
                href="/om-os-roskilde"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[16px] font-normal text-[#2B2520] py-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Om os
              </a>

              <a
                href="/kontakt-roskilde"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[16px] font-normal text-[#2B2520] py-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Kontakt
              </a>

              <a
                href="/kontakt-roskilde"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-8 py-3 bg-[#C9A882] text-white text-[14px] font-medium rounded-sm text-center mt-4 hover:bg-[#B89770] transition-all duration-200"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Book tid
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky Mobile Book Button */}
      <a
        href="/kontakt-roskilde"
        className="lg:hidden fixed bottom-6 right-6 z-40 px-6 py-4 bg-[#C9A882] text-white text-[14px] font-medium rounded-full shadow-lg hover:bg-[#B89770] hover:scale-110 transition-all duration-200 flex items-center gap-2"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Phone size={18} />
        Book tid
      </a>

      {/* Add fadeIn animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
