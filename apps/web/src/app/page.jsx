"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";
import {
  Sparkles,
  Heart,
  Star,
  Award,
  ArrowRight,
  MapPin,
  Users,
  Clock,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&h=1080&fit=crop&auto=format&q=80",
      title: "Skønhed & Velvære",
      subtitle: "i hjertet af Roskilde",
      description: "Oplev en verden af nordisk luksus og professionel skønhedspleje. Vi tilbyder skræddersyede behandlinger der fremhæver din naturlige skønhed i vores eksklusive klinik.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=1080&fit=crop&auto=format&q=80",
      title: "Professionel hudpleje",
      subtitle: "med synlige resultater",
      description: "Som CND Ambassadører og Master Clinic garanterer vi den højeste kvalitet. Vores certificerede eksperter står klar til at give dig den bedste vejledning og behandling.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1920&h=1080&fit=crop&auto=format&q=80",
      title: "Certificerede eksperter",
      subtitle: "siden 2015",
      description: "Med over 10 års erfaring og status som uddannelsessted for andre klinikker, er du i de tryggeste hænder hos Klinik Dandanell. Din skønhed er vores passion.",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );

  const treatments = [
    {
      title: "Ansigtsbehandlinger",
      description:
        "Professionel hudpleje med premium produkter - Vi er specialister i ansigtsbehandlinger og uddanner andre klinikker",
      href: "/behandlinger/ansigtsbehandlinger-roskilde",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop&auto=format&q=80",
    },
    {
      title: "Vipper & bryn",
      description:
        "Perfekte vipper og bryn der fremhæver din naturlige skønhed med professionel præcision",
      href: "/behandlinger/vipper-bryn-roskilde",
      image:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=600&fit=crop&auto=format&q=80",
    },
    {
      title: "CND Shellac",
      description:
        "Vi er CND Ambassadører og Master Clinic - Den bedste neglepleje i Roskilde",
      href: "/behandlinger/cnd-shellac-roskilde",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop&auto=format&q=80",
    },
    {
      title: "Massage",
      description:
        "Afslappende massage i luksus omgivelser - Genskab balance i krop og sind",
      href: "/behandlinger/massage-roskilde",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&auto=format&q=80",
    },
  ];

  const reviews = [
    {
      name: "Maria S.",
      rating: 5,
      text: "Den absolut bedste oplevelse! Klinikken er så smuk og personalet er utroligt professionelle. Jeg har prøvet mange steder i Roskilde, men Klinik Dandanell er i en klasse for sig. Min hud har aldrig set bedre ud!",
      treatment: "Ansigtsbehandling",
    },
    {
      name: "Louise K.",
      rating: 5,
      text: "Fantastisk service og resultat hver gang. Jeg kommer her månedligt og bliver aldrig skuffet. De tager sig virkelig tid til at forstå mine behov. Et ægte skattegem midt i Roskilde!",
      treatment: "Vipper & Bryn",
    },
    {
      name: "Sophie M.",
      rating: 5,
      text: "Så smukt sted og så dygtige terapeuter! Jeg har gået her i over 2 år og elsker det. De bruger de bedste produkter og atmosfæren er helt unik. Kan varmt anbefales til alle i Roskilde!",
      treatment: "CND Shellac",
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "Bedste massage jeg nogensinde har fået! Stedet er som en oase midt på Algade. Man føler sig forkælet fra det øjeblik man træder ind. Personalet er søde og kompetente. Kommer helt sikkert tilbage!",
      treatment: "Massage",
    },
    {
      name: "Isabella P.",
      rating: 5,
      text: "Jeg er flyttet fra Roskilde, men jeg kører stadig herind for mine behandlinger. Det er bare så meget bedre end alt andet. Kvaliteten er i top og prisen er fair. De er virkelig eksperter!",
      treatment: "Ansigtsbehandling",
    },
    {
      name: "Caroline H.",
      rating: 5,
      text: "Har været kunde i 3 år og det er det bedste sted! Super hyggeligt, professionelt og resultaterne er altid perfekte. Mine negle har aldrig set bedre ud. Kan ikke anbefale dem nok!",
      treatment: "Akryl Negle",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Carousel Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div style={{ y }} className="w-full h-full">
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-[120%] object-cover -mt-[10%]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-[48px] sm:text-[64px] md:text-[84px] lg:text-[104px] font-light text-white mb-3 md:mb-4 leading-[1] tracking-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-light text-[#E8D5C4] mb-6 md:mb-8 tracking-[0.05em] italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="text-[14px] md:text-[16px] lg:text-[17px] font-light text-white/90 mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {heroSlides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/kontakt-roskilde"
                  className="px-10 md:px-12 py-3.5 md:py-4 bg-[#C9A882] text-white text-[13px] md:text-[14px] font-medium tracking-widest uppercase hover:bg-[#B89770] hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Book tid
                </a>
                <a
                  href="/priser-roskilde"
                  className="px-10 md:px-12 py-3.5 md:py-4 bg-white/5 backdrop-blur-md border border-white/40 text-white text-[13px] md:text-[14px] font-medium tracking-widest uppercase hover:bg-white/15 hover:border-white/60 transition-all duration-500"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Se priser
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300"
        >
          <ChevronRight size={22} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] rounded-full transition-all duration-500 ${index === currentSlide
                ? "bg-white w-10"
                : "bg-white/40 w-10 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Om Klinik Dandanell Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-3">
                <span
                  className="text-[11px] md:text-[12px] tracking-[0.25em] text-[#C9A882] uppercase font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Siden 2015
                </span>
              </div>
              <h2
                className="text-[40px] md:text-[52px] lg:text-[62px] font-light text-[#2B2520] mb-8 md:mb-10 leading-[1.1] tracking-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Velkommen til Klinik Dandanell
              </h2>
              <div
                className="space-y-5 md:space-y-6 text-[15px] md:text-[16px] font-light text-[#2B2520]/75 leading-[1.8]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p>
                  Klinik Dandanell er et team af dedikerede skønhedsnørder, der
                  er klar til at forkæle dig fra top til tå. Vores team består
                  af kreative og professionelle kosmetologer og kosmetikere, der
                  er parat til at vejlede, rådgive og hjælpe dig med at opnå dit
                  drømmelook.
                </p>
                <p>
                  Du finder os i hjertet af Roskilde på{" "}
                  <strong className="font-medium text-[#2B2520]">
                    Algade 6, 1. sal
                  </strong>
                  , i smukke lokaler midt på gågaden lige ved siden af
                  Stændertorvet. Vores centrale placering gør det nemt at
                  kombinere din behandling med en shoppingtur eller en kop kaffe
                  i Roskildes hyggelige centrum.
                </p>
                <p>
                  Vi sørger altid for at levere en helhedsoplevelse fra det
                  øjeblik du træder ind i vores klinik. Du vil med garanti
                  opleve en sanseoplevelse ud over det sædvanlige, der er præget
                  af kvalitet, specialiserede kompetencer og et højt
                  serviceniveau.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href="/om-os-roskilde"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[#C9A882] tracking-widest uppercase hover:text-[#B89770] transition-colors duration-500"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Læs mere om os
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=1000&fit=crop&auto=format&q=80"
                alt="Klinik Dandanell i Roskilde"
                className="w-full h-[450px] md:h-[650px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#C9A882] text-white p-8 md:p-10 shadow-2xl max-w-[260px]">
                <p
                  className="text-[48px] md:text-[56px] font-light mb-1 leading-none"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  10+
                </p>
                <p
                  className="text-[13px] md:text-[14px] font-light tracking-wide leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  år med ekspertise
                  <br />i Roskilde
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#FAF8F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                icon: Trophy,
                label: "CND Ambassador",
                sublabel: "Master Clinic",
                desc: "Certificeret ekspertise",
              },
              {
                icon: Users,
                label: "500+",
                sublabel: "tilfredse kunder",
                desc: "I Roskilde området",
              },
              {
                icon: Award,
                label: "4,8",
                sublabel: "Trustpilot rating",
                desc: "Baseret på 200+ anmeldelser",
              },
              {
                icon: Clock,
                label: "10+",
                sublabel: "år i Roskilde",
                desc: "Siden 2015",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center p-8 md:p-10 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 md:w-18 md:h-18 mx-auto mb-5 rounded-full bg-[#FAF8F6] flex items-center justify-center">
                  <item.icon className="text-[#C9A882]" size={30} />
                </div>
                <p
                  className="text-[32px] md:text-[40px] font-light text-[#2B2520] mb-1 leading-none"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[14px] md:text-[15px] font-light text-[#2B2520] mb-2 tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.sublabel}
                </p>
                <p
                  className="text-[11px] md:text-[12px] font-normal text-[#2B2520]/60 tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <span
            className="text-[11px] md:text-[12px] tracking-[0.25em] text-[#C9A882] uppercase font-medium mb-4 block"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Din oplevelse
          </span>
          <h2
            className="text-[40px] md:text-[52px] lg:text-[62px] font-light text-[#2B2520] leading-[1.1] tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            En sanseoplevelse
            <br />
            ud over det almindelige
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {[
            {
              title: "Passion for detaljer",
              desc: "Vi har udviklet og designet vores klinik med en ekstrem passion, så du kan få den bedste helhedsoplevelse. Intet er overladt til tilfældighederne hos Klinik Dandanell i Roskilde.",
              icon: Sparkles,
            },
            {
              title: "Sansestimulering",
              desc: "Fra det øjeblik du træder ind, vil alle dine sanser blive bragt i spil. Du vil blive inviteret ind i et univers, hvor tiden står stille, og hvor fokus kun er på dig og dit velvære.",
              icon: Heart,
            },
            {
              title: "Certificeret ekspertise",
              desc: "Vi er CND Ambassadører og Master Clinic, og vi uddanner andre klinikker i hele Danmark. Vores specialister er blandt de bedste inden for ansigtsbehandlinger og neglepleje.",
              icon: Award,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center group"
            >
              <div className="w-18 h-18 md:w-20 md:h-20 mx-auto mb-7 rounded-full bg-[#FAF8F6] flex items-center justify-center group-hover:bg-[#F5F0EB] transition-colors duration-500">
                <item.icon className="text-[#C9A882] group-hover:scale-110 transition-transform duration-500" size={32} />
              </div>
              <h3
                className="text-[24px] md:text-[28px] font-light text-[#2B2520] mb-5 capitalize tracking-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[14px] md:text-[15px] font-light text-[#2B2520]/70 leading-[1.8]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAF8F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span
              className="text-[11px] md:text-[12px] tracking-[0.25em] text-[#C9A882] uppercase font-medium mb-4 block"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Behandlinger
            </span>
            <h2
              className="text-[40px] md:text-[52px] lg:text-[62px] font-light text-[#2B2520] mb-5 leading-[1.1] tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Vores ekspertise
            </h2>
            <p
              className="text-[14px] md:text-[16px] font-light text-[#2B2520]/70 max-w-2xl mx-auto tracking-wide"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Udforsk vores udvalg af luksus skønhedsbehandlinger med
              certificerede eksperter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
            {treatments.map((treatment, index) => (
              <motion.a
                key={index}
                href={treatment.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-700"
              >
                <div className="relative h-[300px] md:h-[360px] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <h3
                    className="text-[28px] md:text-[32px] font-light mb-3 capitalize tracking-tight"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {treatment.title}
                  </h3>
                  <p
                    className="text-[13px] md:text-[14px] font-light text-white/90 mb-5 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {treatment.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#E8D5C4] group-hover:gap-4 transition-all duration-500">
                    <span
                      className="text-[12px] md:text-[13px] font-medium tracking-widest uppercase"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Læs mere
                    </span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/behandlinger-roskilde"
              className="inline-block px-12 py-4 bg-[#C9A882] text-white text-[13px] font-medium tracking-widest uppercase hover:bg-[#B89770] hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Se alle behandlinger
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-1.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="fill-[#C9A882] text-[#C9A882]"
                />
              ))}
            </div>
            <span
              className="text-[11px] md:text-[12px] tracking-[0.25em] text-[#C9A882] uppercase font-medium mb-4 block"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Trustpilot anmeldelser
            </span>
            <h2
              className="text-[40px] md:text-[52px] lg:text-[62px] font-light text-[#2B2520] mb-5 leading-[1.1] tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Hvad vores kunder siger
            </h2>
            <p
              className="text-[14px] md:text-[16px] font-light text-[#2B2520]/70 max-w-2xl mx-auto tracking-wide"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Over 500 tilfredse kunder i Roskilde har oplevet kvaliteten hos
              Klinik Dandanell
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 md:p-9 bg-[#FAF8F6] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#C9A882] text-[#C9A882]"
                    />
                  ))}
                </div>
                <p
                  className="text-[14px] md:text-[15px] font-light text-[#2B2520]/80 mb-6 italic leading-[1.7]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  "{review.text}"
                </p>
                <div className="pt-5 border-t border-[#2B2520]/10">
                  <p
                    className="text-[14px] font-medium text-[#2B2520] mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-[12px] font-normal text-[#C9A882] tracking-wide"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {review.treatment}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAF8F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <MapPin size={28} className="text-[#C9A882]" />
                <span
                  className="text-[11px] md:text-[12px] tracking-[0.25em] text-[#C9A882] uppercase font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Find os
                </span>
              </div>
              <h2
                className="text-[40px] md:text-[52px] font-light text-[#2B2520] mb-10 leading-[1.1] tracking-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Midt i Roskilde
              </h2>
              <div
                className="space-y-6 text-[15px] md:text-[16px] font-light text-[#2B2520]/75 leading-[1.8] mb-10"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="p-7 bg-white shadow-sm border border-[#F5F0EB]">
                  <p
                    className="font-medium text-[#2B2520] mb-3 text-[17px] md:text-[18px]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Klinik Dandanell
                  </p>
                  <p>Algade 6, 1. sal</p>
                  <p>4000 Roskilde</p>
                </div>
                <p>
                  Vi ligger centralt placeret på Algade midt i Roskilde, lige
                  ved siden af Stændertorvet. Vores klinik er let tilgængelig,
                  uanset om du kommer til fods, med cykel eller bil. Der er gode
                  parkeringsmuligheder i nærheden.
                </p>
                <p>
                  Vores placering i hjertet af Roskilde gør det nemt at
                  kombinere dit besøg med shopping eller en kop kaffe i byens
                  mange caféer. Vi betjener kunder fra hele Roskilde og omegn,
                  og mange vælger at gøre deres besøg til en helhedsoplevelse i
                  byen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/kontakt-roskilde"
                  className="inline-block px-10 py-4 bg-[#C9A882] text-white text-[13px] font-medium tracking-widest uppercase hover:bg-[#B89770] hover:shadow-xl hover:scale-105 transition-all duration-500 text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Book tid
                </a>
                <a
                  href="https://maps.google.com/?q=Algade+6+Roskilde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 border-2 border-[#C9A882] text-[#C9A882] text-[13px] font-medium tracking-widest uppercase hover:bg-[#C9A882] hover:text-white transition-all duration-500 text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Se kort
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[400px] md:h-[550px] bg-[#F5F0EB] overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.123456789!2d12.0!3d55.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM2JzAwLjAiTiAxMsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sdk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Background Image */}
      <section className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop&auto=format&q=80"
            alt="Luxury spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span
              className="text-[11px] md:text-[12px] tracking-[0.3em] text-[#E8D5C4] uppercase font-medium mb-6 block"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Roskildes førende skønhedsklinik siden 2015
            </span>
            <h2
              className="text-[42px] md:text-[56px] lg:text-[68px] font-light text-white mb-8 leading-[1.1] tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Klar til at opleve forskellen?
            </h2>
            <p
              className="text-[15px] md:text-[17px] font-light text-white/90 mb-12 max-w-2xl mx-auto leading-[1.8]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book din behandling hos Roskildes førende skønhedsklinik i dag.
              <br />
              Vi glæder os til at byde dig velkommen på Algade 6.
            </p>
            <a
              href="/kontakt-roskilde"
              className="inline-block px-14 py-5 bg-white text-[#2B2520] text-[13px] font-medium tracking-[0.2em] uppercase hover:bg-[#FAF8F6] hover:shadow-2xl hover:scale-105 transition-all duration-500"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book behandling
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
}
