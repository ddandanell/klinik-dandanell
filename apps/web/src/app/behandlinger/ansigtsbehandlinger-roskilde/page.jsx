"use client";

import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Sparkles, Heart, Clock, Award, ChevronDown, Star } from "lucide-react";

export default function AnsigtsbehandlingerPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: Sparkles,
      title: "Synlige resultater",
      desc: "Se forskellen efter første behandling",
    },
    {
      icon: Heart,
      title: "Premium produkter",
      desc: "Kun de bedste brands til din hud",
    },
    {
      icon: Award,
      title: "Professionelle terapeuter",
      desc: "Erfarne eksperter i hudpleje",
    },
    {
      icon: Clock,
      title: "Skånsom metode",
      desc: "Blid behandling for alle hudtyper",
    },
  ];

  const steps = [
    {
      title: "Konsultation",
      desc: "Vi starter med en grundig hudanalyse og diskuterer dine ønsker",
    },
    { title: "Rensning", desc: "Din hud renses dybt for urenheder og makeup" },
    { title: "Peeling", desc: "Blid exfoliering fjerner døde hudceller" },
    {
      title: "Behandling",
      desc: "Skræddersyet behandling med premium produkter",
    },
    { title: "Maske", desc: "Nærende maske tilpasset din hudtype" },
    { title: "Afslutning", desc: "Fugtcreme og SPF for optimal beskyttelse" },
  ];

  const faqs = [
    {
      q: "Hvor lang tid tager en ansigtsbehandling?",
      a: "En standard ansigtsbehandling hos Klinik Dandanell i Roskilde tager typisk 60-75 minutter. Vi tilbyder også express-behandlinger på 30 minutter og luksusbehandlinger på op til 90 minutter.",
    },
    {
      q: "Gør ansigtsbehandlingen ondt?",
      a: "Nej, vores ansigtsbehandlinger i Roskilde er designet til at være afslappende og behagelige. Du kan opleve et let prikken under peeling, men behandlingen er generelt meget skånsom.",
    },
    {
      q: "Hvilke produkter bruges til ansigtsbehandlingen?",
      a: "Vi bruger premium produkter fra anerkendte brands som Dermalogica, Environ og Maria Åkerberg. Alle produkter vælges specifikt til din hudtype og behov.",
    },
    {
      q: "Skal jeg forberede mig før behandlingen?",
      a: "Kom gerne uden makeup, men det er ikke nødvendigt - vi renser din hud grundigt som en del af behandlingen. Undgå kraftig sol-eksponering 24 timer før din behandling i Roskilde.",
    },
    {
      q: "Hvad skal jeg gøre efter ansigtsbehandlingen?",
      a: "Undgå makeup de første 4-6 timer, brug SPF dagligt, og drik masser af vand. Vi giver dig personlige råd til efterbehandling ved din besøg hos os i Roskilde.",
    },
    {
      q: "Kan jeg kombinere ansigtsbehandling med andre behandlinger?",
      a: "Ja, mange af vores kunder i Roskilde kombinerer ansigtsbehandling med vipper & bryn eller massage for en komplet wellness-oplevelse. Kontakt os for at høre om vores pakkeløsninger.",
    },
  ];

  const relatedTreatments = [
    {
      title: "Vipper & Bryn",
      image:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&h=400&fit=crop&auto=format&q=80",
      href: "/behandlinger/vipper-bryn-roskilde",
    },
    {
      title: "Massage",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&auto=format&q=80",
      href: "/behandlinger/massage-roskilde",
    },
    {
      title: "Hårfjerning",
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop&auto=format&q=80",
      href: "/behandlinger/harfjerning-roskilde",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=1080&fit=crop&auto=format&q=80"
            alt="Ansigtsbehandlinger i Roskilde"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        <div
          className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1
            className="text-[48px] md:text-[72px] lg:text-[84px] font-light text-white mb-6 leading-[1.1] tracking-wide"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Ansigtsbehandlinger
            <br />
            <span className="text-[#E8D5C4]">i Roskilde</span>
          </h1>
          <p
            className="text-[18px] md:text-[20px] font-light text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Professionel hudpleje med synlige resultater
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt-roskilde"
              className="px-10 py-4 bg-[#C9A882] text-white text-[15px] font-medium rounded-sm hover:bg-[#B89770] transition-all duration-200 shadow-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book tid nu
            </a>
            <a
              href="/priser-roskilde"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[15px] font-medium rounded-sm hover:bg-white/20 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Se priser
            </a>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-[38px] md:text-[48px] font-light text-[#2B2520] mb-8 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Hvad indeholder behandlingen?
          </h2>
          <div
            className="text-[16px] md:text-[18px] font-normal text-[#2B2520]/80 leading-relaxed space-y-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <p>
              Vores ansigtsbehandlinger i Roskilde er designet til at give din
              hud den pleje, den fortjener. Hver behandling er skræddersyet til
              din unikke hudtype og tilstand, så du får de bedst mulige
              resultater.
            </p>
            <p>
              Vi kombinerer klassiske teknikker med moderne hudplejeteknologi og
              bruger kun premium produkter fra anerkendte brands. Hos Klinik
              Dandanell i Roskilde får du en holistisk tilgang til hudpleje,
              hvor vi fokuserer på både øjeblikkelige resultater og langsigtet
              hudsundhed.
            </p>
            <p>
              Behandlingen inkluderer grundig rensning, peeling, ekstraktion af
              urenheder (hvis nødvendigt), ansigts massage, nærende maske og
              afsluttende pleje med fugtcreme og SPF. Du forlader klinikken med
              en ren, strålende og genopfrisket hud.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-[#FAF8F6]">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-[38px] md:text-[48px] font-light text-[#2B2520] mb-12 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Fordele ved ansigtsbehandling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5F0EB] flex items-center justify-center">
                  <benefit.icon className="text-[#C9A882]" size={28} />
                </div>
                <h3
                  className="text-[18px] font-medium text-[#2B2520] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-[14px] font-normal text-[#2B2520]/70"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-[38px] md:text-[48px] font-light text-[#2B2520] mb-10 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Hvem er behandlingen ideel til?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Alle hudtyper - tør, fed, kombineret eller sensitiv hud",
              "Personer med urenheder, bumser eller akne",
              "Moden hud der har brug for anti-aging pleje",
              "Stresset hud der mangler glød og vitalitet",
              "Dig der ønsker forebyggende hudpleje",
              "Alle der vil forkæle sig selv med professionel pleje i Roskilde",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[#FAF8F6] rounded-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#C9A882] mt-2 flex-shrink-0"></div>
                <p
                  className="text-[15px] font-normal text-[#2B2520]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-[#FAF8F6]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-[38px] md:text-[48px] font-light text-[#2B2520] mb-12 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Sådan foregår behandlingen
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-white rounded-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#C9A882] text-white flex items-center justify-center text-[18px] font-medium">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3
                    className="text-[20px] font-medium text-[#2B2520] mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] font-normal text-[#2B2520]/70"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-[38px] md:text-[48px] font-light text-[#2B2520] mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Priser for ansigtsbehandling
          </h2>
          <p
            className="text-[16px] md:text-[18px] font-normal text-[#2B2520]/70 mb-10"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Se vores fulde prisliste for alle ansigtsbehandlinger i Roskilde
          </p>
          <a
            href="/priser-roskilde"
            className="inline-block px-10 py-4 bg-[#C9A882] text-white text-[15px] font-medium rounded-sm hover:bg-[#B89770] transition-all duration-200 mr-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Se priser
          </a>
          <a
            href="/kontakt-roskilde"
            className="inline-block px-10 py-4 border-2 border-[#C9A882] text-[#C9A882] text-[15px] font-medium rounded-sm hover:bg-[#C9A882] hover:text-white transition-all duration-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Book tid
          </a>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-6 bg-[#FAF8F6]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-[38px] md:text-[48px] font-light text-[#2B2520] mb-12 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Kundernes anmeldelser
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Maria S.",
                rating: 5,
                text: "Fantastisk ansigtsbehandling! Min hud har aldrig set bedre ud. Personalet er professionelle og stedet er så smukt.",
              },
              {
                name: "Louise K.",
                rating: 5,
                text: "Bedste ansigtsbehandling i Roskilde! Jeg kommer tilbage hver måned. Kan varmt anbefales.",
              },
            ].map((review, index) => (
              <div key={index} className="p-6 bg-white rounded-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#C9A882] text-[#C9A882]"
                    />
                  ))}
                </div>
                <p
                  className="text-[15px] font-normal text-[#2B2520]/80 mb-4 italic"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  "{review.text}"
                </p>
                <p
                  className="text-[14px] font-medium text-[#2B2520]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-[38px] md:text-[48px] font-light text-[#2B2520] mb-12 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Ofte stillede spørgsmål
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#F5F0EB]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-5 flex items-center justify-between text-left group"
                >
                  <h3
                    className="text-[17px] md:text-[19px] font-medium text-[#2B2520] pr-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-[#C9A882] flex-shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96 pb-5" : "max-h-0"}`}
                >
                  <p
                    className="text-[15px] font-normal text-[#2B2520]/70 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/kontakt-roskilde"
              className="inline-block px-10 py-4 bg-[#C9A882] text-white text-[15px] font-medium rounded-sm hover:bg-[#B89770] transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book tid
            </a>
          </div>
        </div>
      </section>

      {/* Related Treatments Section */}
      <section className="py-20 px-6 bg-[#FAF8F6]">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-[38px] md:text-[48px] font-light text-[#2B2520] mb-12 text-center"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Andre behandlinger du måske vil elske
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedTreatments.map((treatment, index) => (
              <a
                key={index}
                href={treatment.href}
                className="group relative overflow-hidden rounded-sm bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3
                    className="absolute bottom-6 left-6 text-[24px] font-light text-white"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {treatment.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-[#2B2520] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-[42px] md:text-[56px] font-light mb-6 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Book din ansigtsbehandling i Roskilde i dag
          </h2>
          <p
            className="text-[16px] md:text-[18px] font-normal text-white/80 mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Giv din hud den professionelle pleje den fortjener hos Klinik
            Dandanell
          </p>
          <a
            href="/kontakt-roskilde"
            className="inline-block px-12 py-5 bg-[#C9A882] text-white text-[16px] font-medium rounded-sm hover:bg-[#B89770] transition-all duration-200 shadow-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Book tid nu
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
