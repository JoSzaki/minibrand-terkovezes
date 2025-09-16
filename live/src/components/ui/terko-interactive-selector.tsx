import React, { useState, useEffect } from 'react';
import { FaGem, FaHome, FaIndustry, FaPalette, FaLeaf } from 'react-icons/fa';

interface TerkoOption {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
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
      title: "Antik T�rk�vek",
      description: "Klasszikus, id�t�ll� elegancia",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      icon: <FaGem size={24} className="text-white" />,
      details: {
        price: "12.000-25.000 Ft/m2",
        durability: "25-30+ �v",
        maintenance: "K�zepes",
        features: ["Rusztikus fel�let", "Term�szetes kop�s", "Id�j�r�s�ll�", "Patina fejl�d�s"],
        pros: [
          "Egyedi, k�zzel k�sz�tett megjelen�s",
          "Rendk�v�l tart�s �s strapab�r�", 
          "Id�vel szebb lesz (patina)",
          "Magas ingatlan �rt�kn�vel�s",
          "Klasszikus st�lusokhoz t�k�letes"
        ],
        cons: [
          "Magasabb beszerz�si k�lts�g",
          "Egyenetlen fel�let (nem minden�tt alkalmas)",
          "Speci�lis tiszt�t�s sz�ks�ges"
        ],
        usage: ["T�rt�nelmi �p�letek", "Kocsibe�ll�k", "Kerti utak", "Teraszok", "Udvari burkolatok"],
        fullDescription: "Az antik t�rk�vek haszn�lt, patin�s k�vek, amelyek k�l�nleges hangulatot �s autentikus megjelen�st k�lcs�n�znek minden projektnek. Kiv�l� min�s�g�, id�t�ll� burkol�anyag, amely �vtizedekig szolg�l."
      }
    },
    {
      id: 'modern',
      title: "Modern T�rk�vek",
      description: "Sima, clean vonalak",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      icon: <FaHome size={24} className="text-white" />,
      details: {
        price: "10.000-20.000 Ft/m2",
        durability: "20-25 �v",
        maintenance: "Alacsony",
        features: ["Sima fel�let", "Egys�ges sz�nek", "Nagy m�retek", "Prec�z illeszt�s"],
        pros: [
          "Tiszta, minim�l design",
          "K�nny� tiszt�t�s �s karbantart�s",
          "Egys�ges, hib�tlan megjelen�s",
          "Modern �p�t�szethez t�k�letes",
          "J� �r-�rt�k ar�ny"
        ],
        cons: [
          "Kev�sb� karakteres",
          "Foltok jobban l�tszanak",
          "Cs�sz�s lehet nedvesen"
        ],
        usage: ["Modern h�zak", "Minim�l kertek", "Medence k�r�li ter�let", "Bej�r�k", "Parkol�k"],
        fullDescription: "A modern t�rk�vek sima fel�let�, egyenletes sz�nez�s� burkol�anyagok. T�k�letesek modern, letisztult k�rnyezethez, ahol a funkcionalit�s �s az eszt�tikum egyar�nt fontos."
      }
    },
    {
      id: 'szines',
      title: "Sz�nes T�rk�vek",
      description: "Kreat�v sz�nkombin�ci�k",
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=800&q=80",
      icon: <FaPalette size={24} className="text-white" />,
      details: {
        price: "11.000-22.000 Ft/m2",
        durability: "18-22 �v",
        maintenance: "K�zepes",
        features: ["V�ltozatos sz�nek", "Kreat�v mint�zatok", "Egyedi design", "Sz�nstabil fest�k"],
        pros: [
          "Egyedi, szem�lyre szabott megjelen�s",
          "Kreat�v mint�zatok lehet�s�ge",
          "Vid�m, �l�nk hangulat� ter�letek",
          "Gyermekbar�t k�rnyezetek",
          "Z�n�z�sra t�k�letes"
        ],
        cons: [
          "Id�vel fakul a sz�nez�s",
          "Dr�g�bb a standard t�rk�n�l",
          "Nem minden st�lushoz passzol�"
        ],
        usage: ["J�tsz�terek", "Kerti d�sz�t�sek", "Terasz sz�nez�se", "Log�/minta kialak�t�sa", "Akcentusk�nt"],
        fullDescription: "A sz�nes t�rk�vek lehet�v� teszik egyedi, kreat�v burkolatok kialak�t�s�t. K�l�nb�z� sz�n� t�rk�vek kombin�l�s�val mint�k, log�k vagy egyszer�en sz�nes fel�letek hozhat�k l�tre."
      }
    },
    {
      id: 'ipari',
      title: "Ipari T�rk�vek",
      description: "Extra tart�s, nagy terhelhet�s�g",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      icon: <FaIndustry size={24} className="text-white" />,
      details: {
        price: "15.000-30.000 Ft/m2",
        durability: "30+ �v",
        maintenance: "Alacsony",
        features: ["Rendk�v�li szil�rds�g", "Vegyszer�ll�", "Fagy�ll�", "Nagyterhel�s"],
        pros: [
          "Maxim�lis tart�ss�g",
          "Teheraut� terhel�st b�r",
          "Vegyszerek ellen ellen�ll�",
          "Minim�lis karbantart�s",
          "Hossz�t�v� beruh�z�s"
        ],
        cons: [
          "Magas beszerz�si k�lts�g",
          "Kev�sb� dekorat�v",
          "Speci�lis szerel�st ig�nyel"
        ],
        usage: ["Ipari udvarok", "Kamionparkol�k", "�zemek", "Rakt�rak", "Nagy forgalm� ter�letek"],
        fullDescription: "Az ipari t�rk�vek a legnagyobb ig�nybev�telnek ellen�ll� burkol�anyagok. Speci�lisan ipari k�rnyezetek, nagy terhel�s� ter�letek sz�m�ra fejlesztett extra er�s t�rk�vek."
      }
    },
    {
      id: 'termeszetes',
      title: "Term�szetes K�",
      description: "Pr�mium term�szetes anyagok",
      image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80",
      icon: <FaLeaf size={24} className="text-white" />,
      details: {
        price: "20.000-40.000+ Ft/m2",
        durability: "50+ �v",
        maintenance: "K�zepes-magas",
        features: ["Egyedi term�szetes rajzolat", "Pr�mium megjelen�s", "L�gz�k�pes", "H�tart�"],
        pros: [
          "Luxus, pr�mium megjelen�s",
          "Minden darab egyedi",
          "K�rnyezetbar�t term�szetes anyag",
          "�vsz�zados tart�ss�g",
          "�rt�kn�vel� beruh�z�s"
        ],
        cons: [
          "Nagy beszerz�si k�lts�g",
          "Speci�lis karbantart�s sz�ks�ges",
          "Id�ig�nyes szerel�s",
          "Foltokra �rz�keny"
        ],
        usage: ["Luxus vill�k", "Pr�mium teraszok", "Wellness ter�letek", "Reprezentat�v bej�r�k", "Exkluz�v projektek"],
        fullDescription: "A term�szetes k� burkolatok a legmagasabb sz�nvonal� megold�sok. Gr�nit, m�szk�, travertin �s m�rv�nylapok egyedi sz�ps�g�, �vsz�zados tart�ss�g� fel�leteket biztos�tanak."
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
            ??? Fedezze Fel a T�rk� T�pusokat
          </h2>
          <p className="text-lg md:text-xl text-concrete-600 font-medium max-w-xl mx-auto">
            V�lasszon a k�l�nb�z� t�rk� t�pusok k�z�l. Kattintson a k�pre a nagy�t�shoz, vagy a "R�szletek" gombra a teljes inform�ci�k�rt.
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
                    ?? R�szletek
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
                �
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
                  <div className="text-sm text-green-600">�r tartom�ny</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">{selectedOption.details.durability}</div>
                  <div className="text-sm text-blue-600">�lettartam</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-700">{selectedOption.details.maintenance}</div>
                  <div className="text-sm text-purple-600">Karbantart�s</div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-concrete-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-concrete-800 mb-3">?? Le�r�s</h4>
                <p className="text-concrete-700 leading-relaxed">{selectedOption.details.fullDescription}</p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-concrete-800 mb-3">? Tulajdons�gok</h4>
                  <ul className="space-y-2">
                    {selectedOption.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-concrete-700">
                        <span className="text-primary-500">�</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-concrete-800 mb-3">??? Felhaszn�l�si ter�letek</h4>
                  <ul className="space-y-2">
                    {selectedOption.details.usage.map((use, index) => (
                      <li key={index} className="flex items-center gap-2 text-concrete-700">
                        <span className="text-primary-500">�</span> {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                    ? El�ny�k
                  </h4>
                  <ul className="space-y-2">
                    {selectedOption.details.pros.map((pro, index) => (
                      <li key={index} className="text-green-700 text-sm">{pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    ?? H�tr�nyok
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
                  Bez�r�s
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
