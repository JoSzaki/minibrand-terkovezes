"use client";

import { Carousel } from "./carousel";
import { useState } from "react";

// Modal component for detailed information
const PatternModal = ({ pattern, isOpen, onClose }: any) => {
  if (!isOpen || !pattern) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
          >
            ×
          </button>
          <picture>
            <source srcSet={pattern.webp} type="image/webp" />
            <img
              src={pattern.src}
              alt={pattern.title}
              className="w-full h-64 object-cover rounded-t-xl"
              loading="lazy"
            />
          </picture>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{pattern.title}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Ár/m²:</h4>
                <p className="text-primary-600 font-bold text-lg">{pattern.details.price}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Tartósság:</h4>
                <p className="text-gray-600">{pattern.details.durability}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Főbb tulajdonságok:</h4>
              <ul className="list-disc list-inside space-y-1">
                {pattern.details.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Előnyök:</h4>
                <ul className="space-y-1">
                  {pattern.details.pros.map((pro: string, index: number) => (
                    <li key={index} className="text-green-600 text-sm">✓ {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Hátrányok:</h4>
                <ul className="space-y-1">
                  {pattern.details.cons.map((con: string, index: number) => (
                    <li key={index} className="text-red-600 text-sm">• {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Ajánlott használat:</h4>
              <div className="flex flex-wrap gap-2">
                {pattern.details.usage.map((use: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{pattern.details.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function PatternCarousel() {
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const patterns = [
    {
      title: "Egyenes Szélű",
      button: "Részletek",
      src: "/images/terko-fajtak/egyenes szélű beton térkő.png",
      webp: "/images/terko-fajtak/egyenes szélű beton térkő.webp",
      details: {
        price: '8.000-25.000 Ft/m²',
        durability: '20-50 év',
        maintenance: 'Alacsony',
        features: ['Egyenes vonalak', 'Precíz illeszkedés', 'Modern megjelenés', 'Változatos méretek'],
        pros: ['Tiszta, letisztult design', 'Könnyen tervezhető', 'Minimál stílushoz ideális', 'Gyors telepítés'],
        cons: ['Kevésbé dekoratív', 'Egyhangú lehet'],
        usage: ['Modern házak', 'Minimál kertek', 'Irodaépületek', 'Kortárs projektek'],
        fullDescription: 'Az egyenes szélű térkövek modern, letisztult megjelenést biztosítanak. Tökéletesek kortárs építészeti stílusokhoz.'
      }
    },
    {
      title: "Hullámos Szegélyű",
      button: "Részletek",
      src: "/images/terko-fajtak/hullámos szegélyű beton térkő.png",
      webp: "/images/terko-fajtak/hullámos szegélyű beton térkő.png",
      details: {
        price: '9.000-27.000 Ft/m²',
        durability: '20-45 év',
        maintenance: 'Közepes',
        features: ['Hullámos vonalvezetés', 'Természetes megjelenés', 'Jobb tapadás', 'Dekoratív hatás'],
        pros: ['Esztétikus megjelenés', 'Csúszásgátló', 'Természetes hatás', 'Egyedi mintázat'],
        cons: ['Komplexebb telepítés', 'Magasabb ár', 'Nehezebb tisztítás'],
        usage: ['Hagyományos házak', 'Kerti ösvények', 'Dekoratív területek', 'Természetközeli terek'],
        fullDescription: 'A hullámos szegélyű térkövek természetes, organikus megjelenést kölcsönöznek. Kiváló választás hagyományos és természetközeli környezethez.'
      }
    },
    {
      title: "H-alakú",
      button: "Részletek",
      src: "/images/terko-fajtak/h alakú térkő.png",
      webp: "/images/terko-fajtak/h alakú térkő.webp",
      details: {
        price: '15.000-40.000 Ft/m²',
        durability: '30-60 év',
        maintenance: 'Minimális',
        features: ['H-alakú forma', 'Maximális stabilitás', 'Nehéz terhelés', 'Ipari minőség'],
        pros: ['Rendkívül stabil', 'Nagy terhelhetőség', 'Hosszú élettartam', 'Minimális karbantartás'],
        cons: ['Drága beszerzés', 'Ipari megjelenés', 'Speciális telepítés'],
        usage: ['Ipari területek', 'Teherautó parkolók', 'Logisztikai központok', 'Nagy forgalmú utak'],
        fullDescription: 'A H-alakú térkövek a legnagyobb terhelhetőségű megoldások. Ipari környezetben és nagy forgalmú területeken használatosak.'
      }
    },
    {
      title: "Gyephézagos",
      button: "Részletek",
      src: "/images/terko-fajtak/gyephézagos térkő.png",
      webp: "/images/terko-fajtak/gyephézagos térkő.webp",
      details: {
        price: '10.000-30.000 Ft/m²',
        durability: '25-40 év',
        maintenance: 'Közepes',
        features: ['Fű növekedésére alkalmas', 'Vízelvezetés', 'Környezetbarát', 'Természetes megjelenés'],
        pros: ['Zöld felület', 'Vízelvezetés', 'Környezetbarát', 'Természetes hűtés'],
        cons: ['Rendszeres karbantartás', 'Fű gondozása szükséges', 'Szezonális megjelenés'],
        usage: ['Parkolók', 'Tűzoltó utak', 'Rekreációs területek', 'Környezettudatos projektek'],
        fullDescription: 'A gyephézagos térkövek lehetővé teszik a növényzet növekedését, így környezetbarát és természetes megoldást nyújtanak.'
      }
    },
  ];

  const handleSlideClick = (pattern: any) => {
    setSelectedPattern(pattern);
    setIsModalOpen(true);
  };

  // Convert patterns to carousel format
  const carouselSlides = patterns.map(pattern => ({
    ...pattern,
    onClick: () => handleSlideClick(pattern)
  }));

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-concrete-800 font-heading mb-4">
            🎨 Térkő Minták és Formák
          </h2>
          <p className="text-xl text-concrete-600 max-w-4xl mx-auto">
            Válasszon a különböző formák és mintázatok közül. Kattintson a képre a nagyításhoz, vagy a "Részletek" gombra a teljes információkért.
          </p>
        </div>

        <div className="relative">
          <Carousel slides={carouselSlides} />
        </div>
      </div>

      <PatternModal
        pattern={selectedPattern}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}