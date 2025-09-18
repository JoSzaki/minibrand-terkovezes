"use client";

import { Carousel } from "./carousel";
import { useState } from "react";

// Modal component for detailed information
const UsageModal = ({ usage, isOpen, onClose }: any) => {
  if (!isOpen || !usage) return null;

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
            src={usage.src}
            alt={usage.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{usage.title}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Ár/m²:</h4>
                <p className="text-primary-600 font-bold text-lg">{usage.details.price}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Tartósság:</h4>
                <p className="text-gray-600">{usage.details.durability}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Főbb tulajdonságok:</h4>
              <ul className="list-disc list-inside space-y-1">
                {usage.details.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Előnyök:</h4>
                <ul className="space-y-1">
                  {usage.details.pros.map((pro: string, index: number) => (
                    <li key={index} className="text-green-600 text-sm">✓ {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Hátrányok:</h4>
                <ul className="space-y-1">
                  {usage.details.cons.map((con: string, index: number) => (
                    <li key={index} className="text-red-600 text-sm">• {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Ajánlott használat:</h4>
              <div className="flex flex-wrap gap-2">
                {usage.details.usage.map((use: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{usage.details.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function UsageCarousel() {
  const [selectedUsage, setSelectedUsage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const usages = [
    {
      title: "Gépjármű-mentes Területek",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      details: {
        price: '8.000-30.000 Ft/m²',
        durability: '20-40 év',
        maintenance: 'Alacsony',
        features: ['40-60 mm vastagság', 'Egyenes oldalú', 'Beton/kerámia/természetes kő', 'Dekoratív megjelenés'],
        pros: ['Kedvező ár', 'Szép megjelenés', 'Könnyű telepítés', 'Változatos designok'],
        cons: ['Csak gyalogos forgalom', 'Korlátozott terhelés'],
        usage: ['Teraszok', 'Kerti járdák', 'Medence körüli területek', 'Pihenőkertek'],
        fullDescription: 'Gépjármű forgalomnak nem kitett területekre 40-60 mm vastag, egyenes oldalú térköveket ajánlunk beton, kerámia vagy természetes kő anyagból.'
      }
    },
    {
      title: "Enyhe Gépjárműforgalom",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=800&q=80",
      details: {
        price: '10.000-32.000 Ft/m²',
        durability: '25-40 év',
        maintenance: 'Alacsony',
        features: ['60 mm vastagság', 'Egyenes vagy hullámos szél', 'Beton/kerámia', 'Személyautó terhelés'],
        pros: ['Családi házakhoz ideális', 'Megbízható terhelhetőség', 'Személyautóknak megfelelő', 'Esztétikus megjelenés'],
        cons: ['Teherautóknak nem alkalmas', 'Drágább mint a vékonyabb változat'],
        usage: ['Családi házak parkolói', 'Kisebb társasházak', 'Vendégparkolók', 'Magánterületek'],
        fullDescription: 'Enyhe gépjárműforgalomnak kitett területekre 60 mm vastag, egyenes vagy hullámos oldalú beton/kerámia térköveket ajánlunk.'
      }
    },
    {
      title: "Teherautó Forgalom",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1600298882974-6be191ceeda0?auto=format&fit=crop&w=800&q=80",
      details: {
        price: '18.000-50.000 Ft/m²',
        durability: '40-60 év',
        maintenance: 'Minimális',
        features: ['80 mm vastagság', 'H-alakú', 'Ipari beton térkő', 'Maximális terhelhetőség'],
        pros: ['Teherautó forgalom', 'Ipari környezet', 'Minimális karbantartás', 'Rendkívül tartós'],
        cons: ['Nagy beruházási költség', 'Ipari megjelenés'],
        usage: ['Ipari parkolók', 'Logisztikai központok', 'Raktárudvarok', 'Tehergépjármű útvonalak'],
        fullDescription: 'Magas terhelésnek kitett, rendszeres teherautó forgalmat kezelő területekre 80 mm vastag, H-alakú beton térköveket ajánlunk.'
      }
    }
  ];

  const handleSlideClick = (usage: any) => {
    setSelectedUsage(usage);
    setIsModalOpen(true);
  };

  // Convert usages to carousel format
  const carouselSlides = usages.map(usage => ({
    ...usage,
    onClick: () => handleSlideClick(usage)
  }));

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-concrete-800 font-heading mb-4">
            📐 Felhasználási Területek
          </h2>
          <p className="text-xl text-concrete-600 max-w-4xl mx-auto">
            Válassza ki a tervezett használat szerinti megfelelő vastagságú térköveket. Kattintson a képre a nagyításhoz, vagy a "Részletek" gombra a teljes információkért.
          </p>
        </div>

        <div className="relative">
          <Carousel slides={carouselSlides} />
        </div>
      </div>

      <UsageModal
        usage={selectedUsage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}