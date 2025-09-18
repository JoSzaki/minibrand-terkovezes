// Térkő data definitions for multiple selectors

import { FaCube, FaGem, FaIndustry, FaPalette, FaRuler, FaCar, FaWalking, FaTruck, FaTree, FaHome } from 'react-icons/fa';

export const materialOptions = [
  {
    id: 'beton',
    title: 'Beton Térkövek',
    description: 'Legsokoldalúbb és legkedveltebb megoldás',
    image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=800&q=80',
    icon: FaCube,
    details: {
      price: '8.000-18.000 Ft/m2',
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
    id: 'keramia',
    title: 'Kerámia Térkövek',
    description: 'Prémium minőség és tartósság',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    icon: FaGem,
    details: {
      price: '15.000-35.000 Ft/m2',
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
    id: 'marvany',
    title: 'Márvány',
    description: 'Luxus természetes kő megoldás',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80',
    icon: FaGem,
    details: {
      price: '25.000-60.000 Ft/m2',
      durability: '50+ év',
      maintenance: 'Magas',
      features: ['Egyedi természetes mintázat', 'Luxus megjelenés', 'Hűvös felület', 'Polírozható'],
      pros: ['Lenyűgöző szépség', 'Természetes elegancia', 'Értékálló befektetés', 'Egyedi darabok'],
      cons: ['Nagyon drága', 'Savakra érzékeny', 'Rendszeres karbantartás', 'Nehéz szerelés'],
      usage: ['Luxus villák', 'Wellness területek', 'Reprezentatív terek', 'Exkluzív projektek'],
      fullDescription: 'A márvány a legprémiumabb természetes kő választás. Egyedi szépségével és tartósságával évszázadokig szolgál.'
    }
  }
];

export const patternOptions = [
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
  }
];

export const colorOptions = [
  {
    id: 'szurke',
    title: 'Szürke Árnyalatok',
    description: 'Semleges, elegáns választás',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    icon: FaPalette,
    details: {
      price: '8.000-30.000 Ft/m2',
      durability: '20-50 év',
      maintenance: 'Alacsony',
      features: ['Időtálló szín', 'Univerzális használat', 'Nem fakuló', 'Minden stílushoz passzenthető'],
      pros: ['Semleges, elegáns', 'Mindenhez illik', 'Praktikus választás', 'Kis szennyeződés nem látszik'],
      cons: ['Egyhangú lehet', 'Kevésbé különleges'],
      usage: ['Minden területre alkalmas', 'Modern és klasszikus stílus', 'Kereskedelmi területek'],
      fullDescription: 'A szürke térkövek a legsokoldalúbb színválasztás. Minden környezetben elegáns, időtálló megjelenést biztosítanak.'
    }
  }
];

export const thicknessOptions = [
  {
    id: 'vekony-40mm',
    title: '40 mm Vastagság',
    description: 'Könnyű terhelésű területekre',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    icon: FaRuler,
    details: {
      price: '8.000-25.000 Ft/m2',
      durability: '15-25 év',
      maintenance: 'Alacsony',
      features: ['Könnyű kezelés', 'Gazdaságos', 'Gyors telepítés', 'Dekoratív használat'],
      pros: ['Kedvező ár', 'Könnyű szállítás', 'Egyszerű telepítés', 'Dekorációhoz ideális'],
      cons: ['Korlátozott terhelhetőség', 'Csak gyalogos forgalom'],
      usage: ['Teraszok', 'Kerti járdák', 'Dekoratív területek', 'Medence környék'],
      fullDescription: '40 mm vastag térkövek ideálisak könnyű terhelésű, főként dekoratív és gyalogos forgalmú területekre.'
    }
  }
];

export const usageOptions = [
  {
    id: 'nem-jarmu',
    title: 'Gépjármű-mentes Területek',
    description: 'Teraszok, kerti járdák, medence környék - 40-60 mm vastag',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    icon: FaWalking,
    details: {
      price: '8.000-30.000 Ft/m2',
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
    id: 'enyhe-jarmu',
    title: 'Enyhe Gépjárműforgalom',
    description: 'Családi házak, kisebb társasházak - 60 mm vastag',
    image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=800&q=80',
    icon: FaHome,
    details: {
      price: '10.000-32.000 Ft/m2',
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
    id: 'teherjarmu',
    title: 'Teherautó Forgalom',
    description: 'Ipari területek, logisztika - 80 mm vastag',
    image: 'https://images.unsplash.com/photo-1600298882974-6be191ceeda0?auto=format&fit=crop&w=800&q=80',
    icon: FaTruck,
    details: {
      price: '18.000-50.000 Ft/m2',
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