import { useState, useEffect } from 'react';
import { FaCube, FaGripLines, FaShapes, FaTh } from 'react-icons/fa';

const PatternSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const options = [
    {
      id: 'egyenes',
      title: 'Egyenes Szélű',
      description: 'Modern, tiszta vonalak',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      icon: FaCube,
      details: {
        price: '8.000-25.000 Ft/m2',
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
      id: 'hullamos',
      title: 'Hullámos Szegélyű',
      description: 'Organikus formák és természetes hatás',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      icon: FaGripLines,
      details: {
        price: '9.000-27.000 Ft/m2',
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
      id: 'h-alaku',
      title: 'H-alakú',
      description: 'Ipari szilárdság és stabilitás',
      image: 'https://images.unsplash.com/photo-1600298882974-6be191ceeda0?auto=format&fit=crop&w=800&q=80',
      icon: FaShapes,
      details: {
        price: '15.000-40.000 Ft/m2',
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
      id: 'gyephezagos',
      title: 'Gyephézagos',
      description: 'Környezetbarát és természetes megoldás',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      icon: FaTh,
      details: {
        price: '10.000-30.000 Ft/m2',
        durability: '25-40 év',
        maintenance: 'Közepes',
        features: ['Fű növekedésére alkalmas', 'Vízelvezetés', 'Környezetbarát', 'Természetes megjelenés'],
        pros: ['Zöld felület', 'Vízelvezetés', 'Környezetbarát', 'Természetes hűtés'],
        cons: ['Rendszeres karbantartás', 'Fű gondozása szükséges', 'Szezonális megjelenés'],
        usage: ['Parkolók', 'Tűzoltó utak', 'Rekreációs területek', 'Környezettudatos projektek'],
        fullDescription: 'A gyephézagos térkövek lehetővé teszik a növényzet növekedését, így környezetbarát és természetes megoldást nyújtanak.'
      }
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleDetailsClick = (option: any) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOption(null);
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-br from-green-50 to-green-100 font-sans text-concrete-800">
        {/* Header Section */}
        <div className="w-full max-w-2xl px-6 mt-8 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-concrete-800 mb-4 tracking-tight drop-shadow-sm">
            🎨 Térkő Minták és Formák
          </h2>
          <p className="text-lg md:text-xl text-concrete-600 font-medium max-w-xl mx-auto">
            Válasszon a különböző formák és mintázatok közül. Kattintson a képre a nagyításhoz, vagy a "Részletek" gombra a teljes információkért.
          </p>
        </div>

        {/* Options Container */}
        <div className="options flex w-full max-w-[1000px] min-w-[700px] h-[450px] mx-0 items-stretch overflow-hidden relative rounded-xl shadow-2xl">
          {options.map((option, index) => (
            <div
              key={index}
              className={`
                option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out cursor-pointer
                ${activeIndex === index ? 'active' : ''}
              `}
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
                backgroundPosition: 'center',
                backfaceVisibility: 'hidden',
                opacity: animatedOptions.includes(index) ? 1 : 0,
                transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
                minWidth: '80px',
                minHeight: '100px',
                margin: 0,
                borderRadius: 0,
                borderWidth: '3px',
                borderStyle: 'solid',
                borderColor: activeIndex === index ? '#0ea5e9' : '#d1d5db',
                backgroundColor: '#f8fafc',
                boxShadow: activeIndex === index
                  ? '0 25px 70px rgba(0,0,0,0.40)'
                  : '0 10px 25px rgba(0,0,0,0.20)',
                flex: activeIndex === index ? '6 1 0%' : '1 1 0%',
                zIndex: activeIndex === index ? 10 : 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                willChange: 'flex-grow, box-shadow, background-size, background-position'
              }}
              onClick={() => handleOptionClick(index)}
            >
              {/* Dark overlay for better text readability */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none transition-all duration-700 ease-in-out"
                style={{
                  opacity: activeIndex === index ? 1 : 0.8
                }}
              ></div>

              {/* Label with icon and info */}
              <div className="label relative z-10 p-6 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="icon w-12 h-12 flex items-center justify-center rounded-full bg-primary-500 shadow-lg">
                    <option.icon size={24} className="text-white" />
                  </div>
                  <div className="info">
                    <div
                      className="main font-bold text-xl transition-all duration-700 ease-in-out"
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                      }}
                    >
                      {option.title}
                    </div>
                    <div
                      className="sub text-base text-gray-200 transition-all duration-700 ease-in-out"
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                      }}
                    >
                      {option.description}
                    </div>
                  </div>
                </div>

                {/* Details button - only visible for active option */}
                <div
                  className="transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDetailsClick(option);
                    }}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    📋 Részletek
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedOption && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
              >
                ×
              </button>

              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-600 rounded-full p-3 mr-4">
                    <selectedOption.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-concrete-800">{selectedOption.title}</h3>
                    <p className="text-lg text-concrete-600">{selectedOption.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedOption.image}
                      alt={selectedOption.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-concrete-800 mb-3">⚙️ Tulajdonságok</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Ár:</strong> {selectedOption.details.price}</div>
                        <div><strong>Élettartam:</strong> {selectedOption.details.durability}</div>
                        <div><strong>Karbantartás:</strong> {selectedOption.details.maintenance}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-concrete-800 mb-3">📝 Leírás</h4>
                      <p className="text-sm text-concrete-600">{selectedOption.details.fullDescription}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-concrete-800 mb-3">🏠 Felhasználási területek</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedOption.details.usage.map((use: string, i: number) => (
                          <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-concrete-800 mb-3">✅ Előnyök</h4>
                      <ul className="space-y-1 text-sm text-concrete-600">
                        {selectedOption.details.pros.map((pro: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-concrete-800 mb-3">⚠️ Hátrányok</h4>
                      <ul className="space-y-1 text-sm text-concrete-600">
                        {selectedOption.details.cons.map((con: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatternSelector;