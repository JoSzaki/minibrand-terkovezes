import { useState, useEffect } from 'react';
import { FaGem, FaHome, FaIndustry, FaPalette, FaLeaf } from 'react-icons/fa';

interface TerkoOption {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  details: {
    price: string;
    durability: string;
    maintenance: string;
    features: string[];
    pros: string[];
    cons: string[];
    usage: string[];
    fullDescription: string;
  };
}

const TerkoInteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TerkoOption | null>(null);
  
  const terkoOptions: TerkoOption[] = [
    {
      id: 'antik',
      title: "Antik Térkövek",
      description: "Klasszikus, időtálló elegancia",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      icon: <FaGem size={24} className="text-white" />,
      details: {
        price: "12.000-25.000 Ft/m2",
        durability: "25-30+ év",
        maintenance: "Közepes",
        features: ["Rusztikus felület", "Természetes kopás", "Időjárásálló", "Patina fejlődés"],
        pros: [
          "Egyedi, kézzel készített megjelenés",
          "Rendkívül tartós és strapabíró",
          "Idővel szebb lesz (patina)",
          "Magas ingatlan értéknövelés",
          "Klasszikus stílusokhoz tökéletes"
        ],
        cons: [
          "Magasabb beszerzési költség",
          "Egyenetlen felület (nem mindenütt alkalmas)",
          "Speciális tisztítás szükséges"
        ],
        usage: ["Történelmi épületek", "Kocsibellállók", "Kerti utak", "Teraszok", "Udvari burkolatok"],
        fullDescription: "Az antik térkövek használt, patinás kövek, amelyek különleges hangulatot és autentikus megjelenést kölcsönöznek minden projektnek. Kiváló minőségű, időtálló burkolóanyag, amely évtizedekig szolgál."
      }
    },
    {
      id: 'modern',
      title: "Modern Térkövek",
      description: "Sima, clean vonalak",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      icon: <FaHome size={24} className="text-white" />,
      details: {
        price: "10.000-20.000 Ft/m2",
        durability: "20-25 év",
        maintenance: "Alacsony",
        features: ["Sima felület", "Egységes színek", "Nagy méretek", "Precíz illesztés"],
        pros: [
          "Tiszta, minimál design",
          "Könnyű tisztítás és karbantartás",
          "Egységes, hibátlan megjelenés",
          "Modern építészethez tökéletes",
          "Jó ár-érték arány"
        ],
        cons: [
          "Kevésbé karakteres",
          "Foltok jobban látszanak",
          "Csúszás lehet nedvesen"
        ],
        usage: ["Modern házak", "Minimál kertek", "Medence körüli terület", "Bejárók", "Parkolók"],
        fullDescription: "A modern térkövek sima felületű, egyenletes színezésű burkolóanyagok. Tökéletesek modern, letisztult környezethez, ahol a funkcionalitás és az esztétikum egyaránt fontos."
      }
    },
    {
      id: 'szines',
      title: "Színes Térkövek",
      description: "Kreatív színkombinációk",
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=800&q=80",
      icon: <FaPalette size={24} className="text-white" />,
      details: {
        price: "11.000-22.000 Ft/m2",
        durability: "18-22 év",
        maintenance: "Közepes",
        features: ["Változatos színek", "Kreatív mintázatok", "Egyedi design", "Színstabil festék"],
        pros: [
          "Egyedi, személyre szabott megjelenés",
          "Kreatív mintázatok lehetősége",
          "Vidám, élénk hangulatú területek",
          "Gyermekbarát környezetek",
          "Zónázásra tökéletes"
        ],
        cons: [
          "Idővel fakul a színezés",
          "Drágább a standard térkőnél",
          "Nem minden stílushoz passzóló"
        ],
        usage: ["Játszóterek", "Kerti díszítések", "Terasz színezése", "Logó/minta kialakítása", "Akcentusként"],
        fullDescription: "A színes térkövek lehetővé teszik egyedi, kreatív burkolatok kialakítását. Különböző színű térkövek kombinálásával minták, logók vagy egyszerűen színes felületek hozhatók létre."
      }
    },
    {
      id: 'ipari',
      title: "Ipari Térkövek",
      description: "Extra tartós, nagy terhelhetőség",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      icon: <FaIndustry size={24} className="text-white" />,
      details: {
        price: "15.000-30.000 Ft/m2",
        durability: "30+ év",
        maintenance: "Alacsony",
        features: ["Rendkívüli szilárdság", "Vegyszerálló", "Fagyálló", "Nagyterhelés"],
        pros: [
          "Maximális tartósság",
          "Teherautó terhelést bír",
          "Vegyszerek ellen ellenálló",
          "Minimális karbantartás",
          "Hosszútávú beruházás"
        ],
        cons: [
          "Magas beszerzési költség",
          "Kevésbé dekoratív",
          "Speciális szerelést igényel"
        ],
        usage: ["Ipari udvarok", "Kamionparkolók", "Üzemek", "Raktárak", "Nagy forgalmú területek"],
        fullDescription: "Az ipari térkövek a legnagyobb igénybevételnek ellenálló burkolóanyagok. Speciálisan ipari környezetek, nagy terhelésű területek számára fejlesztett extra erős térkövek."
      }
    },
    {
      id: 'termeszetes',
      title: "Természetes Kő",
      description: "Prémium természetes anyagok",
      image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80",
      icon: <FaLeaf size={24} className="text-white" />,
      details: {
        price: "20.000-40.000+ Ft/m2",
        durability: "50+ év",
        maintenance: "Közepes-magas",
        features: ["Egyedi természetes rajzolat", "Prémium megjelenés", "Légzőképes", "Hőtartó"],
        pros: [
          "Luxus, prémium megjelenés",
          "Minden darab egyedi",
          "Környezetbarát természetes anyag",
          "Évszázados tartósság",
          "Értéknövelő beruházás"
        ],
        cons: [
          "Nagy beszerzési költség",
          "Speciális karbantartás szükséges",
          "Időigényes szerelés",
          "Foltokra érzékeny"
        ],
        usage: ["Luxus villák", "Prémium teraszok", "Wellness területek", "Reprezentatív bejárók", "Exkluzív projektek"],
        fullDescription: "A természetes kő burkolatok a legmagasabb színvonalú megoldások. Gránit, mészkő, travertin és márványlapok egyedi szépségű, évszázados tartósságú felületeket biztosítanak."
      }
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleDetailsClick = (option: TerkoOption) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOption(null);
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    terkoOptions.forEach((_, i) => {
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
      <div className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-br from-concrete-100 to-concrete-200 font-sans text-concrete-800"> 
        {/* Header Section */}
        <div className="w-full max-w-2xl px-6 mt-8 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-concrete-800 mb-4 tracking-tight drop-shadow-sm">
            🏗️ Fedezze Fel a Térkő Típusokat
          </h2>
          <p className="text-lg md:text-xl text-concrete-600 font-medium max-w-xl mx-auto">
            Válasszon a különböző térkő típusok közül. Kattintson a képre a nagyításhoz, vagy a "Részletek" gombra a teljes információkért.
          </p>
        </div>

        {/* Options Container */}
        <div className="options flex w-full max-w-[1000px] min-w-[700px] h-[450px] mx-0 items-stretch overflow-hidden relative rounded-xl shadow-2xl">
          {terkoOptions.map((option, index) => (
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
                    {option.icon}
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

      {/* Modal for details */}
      {showModal && selectedOption && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {selectedOption.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-concrete-800">{selectedOption.title}</h3>
                  <p className="text-concrete-600">{selectedOption.description}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Hero Image */}
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={selectedOption.image} 
                  alt={selectedOption.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Info Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">{selectedOption.details.price}</div>
                  <div className="text-sm text-green-600">Ár tartomány</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">{selectedOption.details.durability}</div>
                  <div className="text-sm text-blue-600">Élettartam</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-700">{selectedOption.details.maintenance}</div>
                  <div className="text-sm text-purple-600">Karbantartás</div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-concrete-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-concrete-800 mb-3">📝 Leírás</h4>
                <p className="text-concrete-700 leading-relaxed">{selectedOption.details.fullDescription}</p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-concrete-800 mb-3">⚙️ Tulajdonságok</h4>
                  <ul className="space-y-2">
                    {selectedOption.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-concrete-700">
                        <span className="text-primary-500">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-concrete-800 mb-3">🏠 Felhasználási területek</h4>
                  <ul className="space-y-2">
                    {selectedOption.details.usage.map((use, index) => (
                      <li key={index} className="flex items-center gap-2 text-concrete-700">
                        <span className="text-primary-500">•</span> {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                    ✅ Előnyök
                  </h4>
                  <ul className="space-y-2">
                    {selectedOption.details.pros.map((pro, index) => (
                      <li key={index} className="text-green-700 text-sm">{pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    ⚠️ Hátrányok
                  </h4>
                  <ul className="space-y-2">
                    {selectedOption.details.cons.map((con, index) => (
                      <li key={index} className="text-orange-700 text-sm">{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center pt-4 border-t border-gray-200">
                <button 
                  onClick={closeModal}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Bezárás
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerkoInteractiveSelector;
