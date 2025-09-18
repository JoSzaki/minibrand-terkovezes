"use client";

import { Carousel } from "./carousel";
import { useState } from "react";

// Modal component for detailed information
const MaterialModal = ({ material, isOpen, onClose }: any) => {
  if (!isOpen || !material) return null;

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
          <img
            src={material.src}
            alt={material.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{material.title}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Ár/m²:</h4>
                <p className="text-primary-600 font-bold text-lg">{material.details.price}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Tartósság:</h4>
                <p className="text-gray-600">{material.details.durability}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Főbb tulajdonságok:</h4>
              <ul className="list-disc list-inside space-y-1">
                {material.details.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Előnyök:</h4>
                <ul className="space-y-1">
                  {material.details.pros.map((pro: string, index: number) => (
                    <li key={index} className="text-green-600 text-sm">✓ {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Hátrányok:</h4>
                <ul className="space-y-1">
                  {material.details.cons.map((con: string, index: number) => (
                    <li key={index} className="text-red-600 text-sm">• {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Ajánlott használat:</h4>
              <div className="flex flex-wrap gap-2">
                {material.details.usage.map((use: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{material.details.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function MaterialCarousel() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const materials = [
    {
      title: "Beton Térkövek",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=800&q=80",
      details: {
        price: '8.000-18.000 Ft/m²',
        durability: '20-30 év',
        maintenance: 'Alacsony',
        features: ['Tartós és erős', 'Változatos formák', 'Kedvező ár', 'Gyors telepítés'],
        pros: ['Megfizethető ár', 'Nagy választék', 'Jó ár-érték arány', 'Könnyen javítható'],
        cons: ['Kevésbé prémium megjelenés', 'Idővel fakul'],
        usage: ['Kocsibejárók', 'Teraszok', 'Járdák', 'Parkolók'],
        fullDescription: 'A beton térkövek a leggyakrabban használt burkolóanyagok. Kiváló ár-érték arányú, tartós megoldást nyújtanak minden térkövezési projekthez.'
      }
    },
    {
      title: "Kerámia Térkövek",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      details: {
        price: '15.000-35.000 Ft/m²',
        durability: '30-40 év',
        maintenance: 'Közepes',
        features: ['Vízhatlan felület', 'Fagyálló', 'Színtartó', 'Egyenletes textúra'],
        pros: ['Kiváló vízellenállás', 'Nem fakulnak', 'Precíz méretek', 'Prémium megjelenés'],
        cons: ['Magasabb ár', 'Törékenyebb', 'Speciális szerelés'],
        usage: ['Teraszok', 'Medence környék', 'Modern építészet', 'Prémium projektek'],
        fullDescription: 'A kerámia térkövek a legmagasabb minőségi kategóriába tartoznak. Kiváló vízellenállás és tartósság jellemzi őket.'
      }
    },
    {
      title: "Márvány",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80",
      details: {
        price: '25.000-60.000 Ft/m²',
        durability: '50-100+ év',
        maintenance: 'Közepes-magas',
        features: ['Természetes szépség', 'Egyedi erezetrajz', 'Prémium megjelenés', 'Értéknövelő'],
        pros: ['Luxus megjelenés', 'Természetes anyag', 'Időtálló', 'Egyedi mintázat'],
        cons: ['Nagyon magas ár', 'Savérzékeny', 'Porózus felület', 'Rendszeres ápolás'],
        usage: ['Reprezentatív területek', 'Luxus teraszok', 'Beltéri használat', 'Prémium projektek'],
        fullDescription: 'A márvány a legprémiumabb természetes kő burkolat. Egyedi szépségével és tartósságával hosszú távú értéket képvisel.'
      }
    },
    {
      title: "Bazalt",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80",
      details: {
        price: '18.000-40.000 Ft/m²',
        durability: '80-100+ év',
        maintenance: 'Alacsony',
        features: ['Rendkívül tartós', 'Vulkanikus eredet', 'Csúszásmentes', 'Időjárásálló'],
        pros: ['Extrém tartósság', 'Természetes csúszásmentesség', 'Minimális karbantartás', 'Időjárásálló'],
        cons: ['Magas ár', 'Nehéz megmunkálás', 'Korlátozott színválaszték'],
        usage: ['Nagy forgalmú területek', 'Ipari alkalmazások', 'Közterek', 'Hosszú távú projektek'],
        fullDescription: 'A bazalt vulkanikus eredetű természetes kő, amely rendkívüli tartósságáról és ellenálló képességéről ismert.'
      }
    },
  ];

  const handleSlideClick = (material: any) => {
    setSelectedMaterial(material);
    setIsModalOpen(true);
  };

  // Convert materials to carousel format
  const carouselSlides = materials.map(material => ({
    ...material,
    onClick: () => handleSlideClick(material)
  }));

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-concrete-50 to-concrete-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-concrete-800 font-heading mb-4">
            🏗️ Térkő Fajták Anyag Szerint
          </h2>
          <p className="text-xl text-concrete-600 max-w-4xl mx-auto">
            Válasszon a különböző alapanyagok közül. Kattintson a képre a nagyításhoz, vagy a "Részletek" gombra a teljes információkért.
          </p>
        </div>

        <div className="relative">
          <Carousel slides={carouselSlides} />
        </div>
      </div>

      <MaterialModal
        material={selectedMaterial}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}