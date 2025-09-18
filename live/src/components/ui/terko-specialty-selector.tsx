import { useState, useEffect } from 'react';
import { FaGem, FaHome, FaIndustry, FaPalette, FaLeaf, FaCube, FaRuler, FaGripLines, FaShapes, FaCar, FaWalking, FaTree, FaTruck } from 'react-icons/fa';

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

interface TerkoSpecialtySelectorProps {
  title: string;
  subtitle: string;
  options: TerkoOption[];
  backgroundColor?: string;
}

const TerkoSpecialtySelector = ({ title, subtitle, options, backgroundColor = "from-concrete-100 to-concrete-200" }: TerkoSpecialtySelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TerkoOption | null>(null);

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

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options]);

  return (
    <>
      <div className={`relative flex flex-col items-center justify-center py-16 bg-gradient-to-br ${backgroundColor} font-sans text-concrete-800`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-concrete-800 font-heading mb-4">
              {title}
            </h2>
            <p className="text-lg text-concrete-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {options.map((option, index) => (
              <div
                key={option.id}
                className={`group relative cursor-pointer transition-all duration-500 transform
                  ${animatedOptions.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  ${activeIndex === index ? 'scale-105 z-10' : 'hover:scale-102'}
                `}
                onClick={() => handleOptionClick(index)}
              >
                <div className={`relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300
                  ${activeIndex === index ? 'shadow-2xl ring-4 ring-primary-500' : 'hover:shadow-xl'}
                `}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-primary-600 rounded-full p-2">
                      {option.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-concrete-800 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-sm text-concrete-600 mb-4">
                      {option.description}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDetailsClick(option);
                      }}
                      className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                    >
                      📋 Részletek
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                    {selectedOption.icon}
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
                        {selectedOption.details.usage.map((use, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-concrete-800 mb-3">✅ Előnyök</h4>
                      <ul className="space-y-1 text-sm text-concrete-600">
                        {selectedOption.details.pros.map((pro, i) => (
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
                        {selectedOption.details.cons.map((con, i) => (
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

export default TerkoSpecialtySelector;