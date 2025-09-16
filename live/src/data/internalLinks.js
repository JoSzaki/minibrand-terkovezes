// Internal linking structure for cross-referencing paving content
// Based on blogPosts.js and paving industry topics

export const contentRelationships = {
  // Kocsibe�ll� t�rk�vez�s kapcsolatok
  "kocsibeallo-terkovezes-arak-tipusok-kivitelezes": {
    mainTopics: ["hogyan-valasszunk-terkovet", "kocsibeallo-vizellevezetes-terkovezes-rendszerek"],
    related: ["terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas", "terkovezes-tervezes-alapjai"],
    supporting: ["beton-vagy-termeszetes-ko-terkovek", "terkovezes-koltsegkalkulator-2025"]
  },
  
  "hogyan-valasszunk-terkovet": {
    mainTopics: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "beton-vagy-termeszetes-ko-terkovek"],
    related: ["antik-terko-jellemzoi-felhasznalasa", "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas"],
    supporting: ["terkovezes-tervezes-alapjai", "terkovezes-koltsegkalkulator-2025"]
  },

  "kocsibeallo-vizellevezetes-terkovezes-rendszerek": {
    mainTopics: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "terkovezes-tervezes-alapjai"],
    related: ["terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas", "terkozott-jardak-karbantartasa-evszakonkent"],
    supporting: ["kerti-utak-tervezese-terko-vs-termeszetes-ko", "diy-terasz-terkovezes-lepesrol-lepesre"]
  },

  "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas": {
    mainTopics: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "beton-vagy-termeszetes-ko-terkovek"],
    related: ["hogyan-valasszunk-terkovet", "terkovezes-koltsegkalkulator-2025"],
    supporting: ["antik-terko-jellemzoi-felhasznalasa", "szines-terkovek-kreativ-mintak-kombinaciok"]
  },

  // Terasz t�rk�vez�s kapcsolatok
  "terasz-terkovezes-trendek-2025": {
    mainTopics: ["diy-terasz-terkovezes-lepesrol-lepesre", "szines-terkovek-kreativ-mintak-kombinaciok"],
    related: ["terasz-terkovezes-trendek-2025", "beton-vagy-termeszetes-ko-terkovek"],
    supporting: ["terkovezes-tervezes-alapjai", "antik-terko-jellemzoi-felhasznalasa"]
  },
  
  "diy-terasz-terkovezes-lepesrol-lepesre": {
    mainTopics: ["terasz-terkovezes-trendek-2025", "kerti-utak-tervezese-terko-vs-termeszetes-ko"],
    related: ["terkovezes-tervezes-alapjai", "terkozott-jardak-karbantartasa-evszakonkent"],
    supporting: ["beton-vagy-termeszetes-ko-terkovek", "terkovezes-koltsegkalkulator-2025"]
  },

  // Kert �s j�rda t�rk�vez�s kapcsolatok
  "kerti-utak-tervezese-terko-vs-termeszetes-ko": {
    mainTopics: ["terkozott-jardak-karbantartasa-evszakonkent", "beton-vagy-termeszetes-ko-terkovek"],
    related: ["diy-terasz-terkovezes-lepesrol-lepesre", "szines-terkovek-kreativ-mintak-kombinaciok"],
    supporting: ["terkovezes-tervezes-alapjai", "antik-terko-jellemzoi-felhasznalasa"]
  },
  
  "terkozott-jardak-karbantartasa-evszakonkent": {
    mainTopics: ["kerti-utak-tervezese-terko-vs-termeszetes-ko", "diy-terasz-terkovezes-lepesrol-lepesre"],
    related: ["kocsibeallo-vizellevezetes-terkovezes-rendszerek", "beton-vagy-termeszetes-ko-terkovek"],
    supporting: ["antik-terko-jellemzoi-felhasznalasa", "szines-terkovek-kreativ-mintak-kombinaciok"]
  },

  // T�rk� t�pusok kapcsolatok
  "beton-vagy-termeszetes-ko-terkovek": {
    mainTopics: ["antik-terko-jellemzoi-felhasznalasa", "szines-terkovek-kreativ-mintak-kombinaciok"],
    related: ["hogyan-valasszunk-terkovet", "kerti-utak-tervezese-terko-vs-termeszetes-ko"],
    supporting: ["terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas", "terkovezes-koltsegkalkulator-2025"]
  },
  
  "antik-terko-jellemzoi-felhasznalasa": {
    mainTopics: ["beton-vagy-termeszetes-ko-terkovek", "szines-terkovek-kreativ-mintak-kombinaciok"],
    related: ["terasz-terkovezes-trendek-2025", "kerti-utak-tervezese-terko-vs-termeszetes-ko"],
    supporting: ["hogyan-valasszunk-terkovet", "terkovezes-tervezes-alapjai"]
  },
  
  "szines-terkovek-kreativ-mintak-kombinaciok": {
    mainTopics: ["antik-terko-jellemzoi-felhasznalasa", "beton-vagy-termeszetes-ko-terkovek"],
    related: ["terasz-terkovezes-trendek-2025", "kerti-utak-tervezese-terko-vs-termeszetes-ko"],
    supporting: ["diy-terasz-terkovezes-lepesrol-lepesre", "terkovezes-tervezes-alapjai"]
  },

  // Tervez�s �s tan�csad�s kapcsolatok
  "terkovezes-tervezes-alapjai": {
    mainTopics: ["terkovezes-koltsegkalkulator-2025", "kocsibeallo-vizellevezetes-terkovezes-rendszerek"],
    related: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "diy-terasz-terkovezes-lepesrol-lepesre"],
    supporting: ["hogyan-valasszunk-terkovet", "beton-vagy-termeszetes-ko-terkovek"]
  },
  
  "terkovezes-koltsegkalkulator-2025": {
    mainTopics: ["terkovezes-tervezes-alapjai", "kocsibeallo-terkovezes-arak-tipusok-kivitelezes"],
    related: ["terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas", "hogyan-valasszunk-terkovet"],
    supporting: ["beton-vagy-termeszetes-ko-terkovek", "diy-terasz-terkovezes-lepesrol-lepesre"]
  },

  // �j blog bejegyz�sek kapcsolatok
  "terkovezes-karbantartas-javitas-szakertoi-tippek": {
    mainTopics: ["terkozott-jardak-karbantartasa-evszakonkent", "beton-vagy-termeszetes-ko-terkovek"],
    related: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "hogyan-valasszunk-terkovet"],
    supporting: ["antik-terko-jellemzoi-felhasznalasa", "terkovezes-tervezes-alapjai"]
  },

  "modern-terkovezes-trendek-design-otletek-2025": {
    mainTopics: ["szines-terkovek-kreativ-mintak-kombinaciok", "terasz-terkovezes-trendek-2025"],
    related: ["antik-terko-jellemzoi-felhasznalasa", "beton-vagy-termeszetes-ko-terkovek"],
    supporting: ["diy-terasz-terkovezes-lepesrol-lepesre", "terkovezes-tervezes-alapjai"]
  },

  // �j batch 4 blog bejegyz�sek kapcsolatok
  "profi-terkovezes-kivitelezes-lepesek-hibak": {
    mainTopics: ["terkovezes-tervezes-alapjai", "kocsibeallo-terkovezes-arak-tipusok-kivitelezes"],
    related: ["terkovezes-koltsegkalkulator-2025", "hogyan-valasszunk-terkovet"],
    supporting: ["kocsibeallo-vizellevezetes-terkovezes-rendszerek", "beton-vagy-termeszetes-ko-terkovek"]
  },

  "kornyezetbarat-terkovezes-megoldasok-2025": {
    mainTopics: ["beton-vagy-termeszetes-ko-terkovek", "modern-terkovezes-trendek-design-otletek-2025"],
    related: ["kocsibeallo-vizellevezetes-terkovezes-rendszerek", "terkovezes-tervezes-alapjai"],
    supporting: ["terasz-terkovezes-trendek-2025", "kerti-utak-tervezese-terko-vs-termeszetes-ko"]
  },

  // Batch 5 SEO posts
  "terkovezes-hibak-problemak-megoldasok-budapest": {
    mainTopics: ["profi-terkovezes-kivitelezes-lepesek-hibak", "terkovezes-karbantartas-javitas-szakertoi-tippek"],
    related: ["terkovezes-koltsegkalkulator-2025", "kocsibeallo-terkovezes-arak-tipusok-kivitelezes"],
    supporting: ["terkovezes-tervezes-alapjai", "beton-vagy-termeszetes-ko-terkovek"]
  },

  "terkovezes-budapest-keruletek-arak-szolgaltatasok": {
    mainTopics: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "terkovezes-koltsegkalkulator-2025"],
    related: ["profi-terkovezes-kivitelezes-lepesek-hibak", "hogyan-valasszunk-terkovet"],
    supporting: ["terkovezes-tervezes-alapjai", "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas"]
  }
};

// Function to get related links for a given slug
export function getInternalLinks(slug, type = 'related', limit = 3) {
  const relationships = contentRelationships[slug];
  if (!relationships || !relationships[type]) return [];
  
  return relationships[type].slice(0, limit);
}

// Function to get contextual links (for embedding within content)
export function getContextualLinks(slug) {
  const relationships = contentRelationships[slug];
  if (!relationships) return {};
  
  return {
    primary: relationships.mainTopics || [],
    secondary: relationships.related || [],
    supporting: relationships.supporting || []
  };
}

// SEO-friendly anchor text suggestions for internal links
export const anchorTexts = {
  "kocsibeallo-terkovezes-arak-tipusok-kivitelezes": ["kocsibe�ll� t�rk�vez�s �rak", "t�rk�vez�s kivitelez�s", "kocsibe�ll� t�rk� �rak"],
  "hogyan-valasszunk-terkovet": ["t�rk� v�laszt�s", "kocsibe�ll� t�rk� t�pusok", "t�rk� kiv�laszt�s"],
  "kocsibeallo-vizellevezetes-terkovezes-rendszerek": ["v�zelvezet�s t�rk�vez�ssel", "t�rk�vez�s v�zelvezet�s", "v�zelvezet�si rendszerek"],
  "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas": ["t�rk� vs aszfalt", "burkolat �sszehasonl�t�s", "kocsibe�ll� burkolatok"],
  "terasz-terkovezes-trendek-2025": ["terasz t�rk�vez�s trendek", "modern t�rk�vez�s", "t�rk� trendek 2025"],
  "diy-terasz-terkovezes-lepesrol-lepesre": ["DIY t�rk�vez�s", "t�rk�vez�s l�p�sr�l l�p�sre", "saj�t kez� t�rk�vez�s"],
  "kerti-utak-tervezese-terko-vs-termeszetes-ko": ["kerti utak t�rk�", "t�rk� vs term�szetes k�", "kerti �t tervez�s"],
  "terkozott-jardak-karbantartasa-evszakonkent": ["t�rk� karbantart�s", "j�rda karbantart�s", "t�rk�vezett fel�let �pol�s"],
  "beton-vagy-termeszetes-ko-terkovek": ["beton vagy term�szetes k�", "t�rk� t�pusok", "t�rk� �sszehasonl�t�s"],
  "antik-terko-jellemzoi-felhasznalasa": ["antik t�rk�", "klasszikus t�rk�", "antik t�rk� tulajdons�gai"],
  "szines-terkovek-kreativ-mintak-kombinaciok": ["sz�nes t�rk�vek", "t�rk� mint�k", "kreat�v t�rk�vez�s"],
  "terkovezes-tervezes-alapjai": ["t�rk�vez�s tervez�s", "t�rk�vez�si alapelvek", "t�rk�vez�s megtervez�se"],
  "terkovezes-koltsegkalkulator-2025": ["t�rk�vez�s k�lts�gek", "t�rk� �rak 2025", "t�rk�vez�s kalkul�tor"],
  "terkovezes-karbantartas-javitas-szakertoi-tippek": ["t�rk�vez�s karbantart�s", "t�rk� jav�t�s", "t�rk� �pol�s szak�rt�i tippek"],
  "modern-terkovezes-trendek-design-otletek-2025": ["modern t�rk�vez�s trendek", "t�rk� design �tletek", "2025 t�rk�vez�si trendek"],
  "profi-terkovezes-kivitelezes-lepesek-hibak": ["professzion�lis t�rk�vez�s", "t�rk�vez�s kivitelez�s", "t�rk�vez�si hib�k elker�l�se"],
  "kornyezetbarat-terkovezes-megoldasok-2025": ["k�rnyezetbar�t t�rk�vez�s", "v�z�tereszt� t�rk�", "�ko t�rk�vez�s megold�sok"],
  "terkovezes-hibak-problemak-megoldasok-budapest": ["t�rk�vez�s hib�k jav�t�sa", "t�rk� probl�m�k Budapest", "t�rk�vez�si jav�t�s k�lts�gek"],
  "terkovezes-budapest-keruletek-arak-szolgaltatasok": ["t�rk�vez�s Budapest �rak", "ker�leti t�rk�vez�s", "budapesti t�rk�vez� v�llalkoz�k"]
};

// Function to get anchor text for a link
export function getAnchorText(slug, index = 0) {
  const texts = anchorTexts[slug];
  if (!texts || !texts[index]) return slug.replace(/-/g, ' ');
  return texts[index];
}
