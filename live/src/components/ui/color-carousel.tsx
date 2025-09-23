"use client";

import { Carousel } from "./carousel";
import { useState } from "react";

// Modal component for detailed information
const ColorModal = ({ color, isOpen, onClose }: any) => {
  if (!isOpen || !color) return null;

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
            <source srcSet={color.webp} type="image/webp" />
            <img
              src={color.src}
              alt={color.title}
              className="w-full h-64 object-cover rounded-t-xl"
              loading="lazy"
            />
          </picture>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{color.title}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Ár/m²:</h4>
                <p className="text-primary-600 font-bold text-lg">{color.details.price}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Tartósság:</h4>
                <p className="text-gray-600">{color.details.durability}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Főbb tulajdonságok:</h4>
              <ul className="list-disc list-inside space-y-1">
                {color.details.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Előnyök:</h4>
                <ul className="space-y-1">
                  {color.details.pros.map((pro: string, index: number) => (
                    <li key={index} className="text-green-600 text-sm">✓ {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Hátrányok:</h4>
                <ul className="space-y-1">
                  {color.details.cons.map((con: string, index: number) => (
                    <li key={index} className="text-red-600 text-sm">• {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Ajánlott használat:</h4>
              <div className="flex flex-wrap gap-2">
                {color.details.usage.map((use: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{color.details.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ColorCarousel() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colors = [
    {
      title: "Szürke Árnyalatok",
      button: "Részletek",
      src: "/images/terko-fajtak/beton térkő.webp",
      webp: "/images/terko-fajtak/beton térkő.webp",
      details: {
        price: '8.000-30.000 Ft/m²',
        durability: '20-50 év',
        maintenance: 'Alacsony',
        features: ['Időtálló szín', 'Univerzális használat', 'Nem fakuló', 'Minden stílushoz passzenthető'],
        pros: ['Semleges, elegáns', 'Mindenhez illik', 'Praktikus választás', 'Kis szennyeződés nem látszik'],
        cons: ['Egyhangú lehet', 'Kevésbé különleges'],
        usage: ['Minden területre alkalmas', 'Modern és klasszikus stílus', 'Kereskedelmi területek'],
        fullDescription: 'A szürke térkövek a legsokoldalúbb színválasztás. Minden környezetben elegáns, időtálló megjelenést biztosítanak.'
      }
    },
    {
      title: "Barna Tónusok",
      button: "Részletek",
      src: "/images/terko-fajtak/kerámia térkő.png",
      webp: "/images/terko-fajtak/kerámia térkő.webp",
      details: {
        price: '9.000-32.000 Ft/m²',
        durability: '20-45 év',
        maintenance: 'Alacsony',
        features: ['Természetes színek', 'Meleg hangulat', 'Erdős környezethez', 'Hagyományos stílus'],
        pros: ['Természetes megjelenés', 'Meleg, barátságos', 'Klasszikus stílushoz ideális', 'Jól rejtik a szennyeződést'],
        cons: ['Fakulhat idővel', 'Korlátozott modern használat'],
        usage: ['Vidéki házak', 'Természetközeli terek', 'Hagyományos kertek', 'Erdős környezet'],
        fullDescription: 'A barna térkövek természetes, meleg hangulatot teremtenek. Tökéletesek hagyományos és természetközeli környezethez.'
      }
    },
    {
      title: "Bézs és Krém",
      button: "Részletek",
      src: "/images/terko-fajtak/márvány térkő.png",
      webp: "/images/terko-fajtak/márvány térkő.webp",
      details: {
        price: '10.000-35.000 Ft/m²',
        durability: '25-50 év',
        maintenance: 'Közepes',
        features: ['Mediterrán stílus', 'Világos tónusok', 'Hűvös felület', 'Elegáns megjelenés'],
        pros: ['Mediterrán hangulat', 'Világos, tágas érzet', 'Elegáns megjelenés', 'Hűvös nyáron'],
        cons: ['Hamarabb piszkos', 'Gyakoribb tisztítás szükséges'],
        usage: ['Mediterrán stílus', 'Medence környék', 'Napfényes teraszok', 'Luxus projektek'],
        fullDescription: 'A bézs és krém térkövek mediterrán eleganciát kölcsönöznek. Világos tónusaik tágas és hűvös érzetet teremtenek.'
      }
    },
    {
      title: "Antracit és Fekete",
      button: "Részletek",
      src: "/images/terko-fajtak/gránit térkő.webp",
      webp: "/images/terko-fajtak/gránit térkő.webp",
      details: {
        price: '12.000-40.000 Ft/m²',
        durability: '25-50 év',
        maintenance: 'Közepes',
        features: ['Sötét elegancia', 'Modern megjelenés', 'Karakteres hatás', 'Prémium érzet'],
        pros: ['Elegáns, modern', 'Karakteres megjelenés', 'Prémium hatás', 'Kortárs stílushoz ideális'],
        cons: ['Melegszik a napon', 'Por és karcolás látszik'],
        usage: ['Modern házak', 'Kortárs kertek', 'Prémium projektek', 'Designos környezet'],
        fullDescription: 'Az antracit és fekete térkövek modern, karakteres megjelenést biztosítanak. Prémium érzetet keltenek minden környezetben.'
      }
    }
  ];

  const handleSlideClick = (color: any) => {
    setSelectedColor(color);
    setIsModalOpen(true);
  };

  // Convert colors to carousel format
  const carouselSlides = colors.map(color => ({
    ...color,
    onClick: () => handleSlideClick(color)
  }));

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-concrete-800 font-heading mb-4">
            🎨 Színek és Árnyalatok
          </h2>
          <p className="text-xl text-concrete-600 max-w-4xl mx-auto">
            Válassza ki a stílusához és környezethez illő színt. Kattintson a képre a nagyításhoz, vagy a "Részletek" gombra a teljes információkért.
          </p>
        </div>

        <div className="relative">
          <Carousel slides={carouselSlides} />
        </div>
      </div>

      <ColorModal
        color={selectedColor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}