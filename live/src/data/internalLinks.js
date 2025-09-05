// Internal linking structure for cross-referencing paving content
// Based on blogPosts.js and paving industry topics

export const contentRelationships = {
  // Kocsibeálló térkövezés kapcsolatok
  "kocsibeallo-terkovezes-arak-tipusok-kivitelezes": {
    mainTopics: ["hogyan-valasszunk-terkovet", "kocsibeallo-vizellevezetes-terkovezes-rendszerek"],
    related: ["terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas", "terkovezes-tervezes-alapjai"],
    supporting: ["beton-vs-termeszetes-ko-terkovek", "terkovezes-koltsegkalkulator-2025"]
  },
  
  "hogyan-valasszunk-terkovet": {
    mainTopics: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "beton-vs-termeszetes-ko-terkovek"],
    related: ["antik-terko-jellemzoi-felhasznalasa", "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas"],
    supporting: ["terkovezes-tervezes-alapjai", "terkovezes-koltsegkalkulator-2025"]
  },

  "kocsibeallo-vizellevezetes-terkovezes-rendszerek": {
    mainTopics: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "terkovezes-tervezes-alapjai"],
    related: ["terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas", "terkozott-jardak-karbantartasa-evszakonkent"],
    supporting: ["kerti-utak-tervezese-terko-vs-termeszetes-ko", "diy-terasz-terkovezes-lepesrol-lepesre"]
  },

  "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas": {
    mainTopics: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "beton-vs-termeszetes-ko-terkovek"],
    related: ["hogyan-valasszunk-terkovet", "terkovezes-koltsegkalkulator-2025"],
    supporting: ["antik-terko-jellemzoi-felhasznalasa", "szines-terkovek-kreativ-mintak-kombinaciok"]
  },

  // Terasz térkövezés kapcsolatok
  "terasz-terkovezes-trendek-2025": {
    mainTopics: ["diy-terasz-terkovezes-lepesrol-lepesre", "szines-terkovek-kreativ-mintak-kombinaciok"],
    related: ["terasz-betonozas-budapest", "beton-vs-termeszetes-ko-terkovek"],
    supporting: ["terkovezes-tervezes-alapjai", "antik-terko-jellemzoi-felhasznalasa"]
  },
  
  "diy-terasz-terkovezes-lepesrol-lepesre": {
    mainTopics: ["terasz-terkovezes-trendek-2025", "kerti-utak-tervezese-terko-vs-termeszetes-ko"],
    related: ["terkovezes-tervezes-alapjai", "terkozott-jardak-karbantartasa-evszakonkent"],
    supporting: ["beton-vs-termeszetes-ko-terkovek", "terkovezes-koltsegkalkulator-2025"]
  },

  // Kert és járda térkövezés kapcsolatok
  "kerti-utak-tervezese-terko-vs-termeszetes-ko": {
    mainTopics: ["terkozott-jardak-karbantartasa-evszakonkent", "beton-vs-termeszetes-ko-terkovek"],
    related: ["diy-terasz-terkovezes-lepesrol-lepesre", "szines-terkovek-kreativ-mintak-kombinaciok"],
    supporting: ["terkovezes-tervezes-alapjai", "antik-terko-jellemzoi-felhasznalasa"]
  },
  
  "terkozott-jardak-karbantartasa-evszakonkent": {
    mainTopics: ["kerti-utak-tervezese-terko-vs-termeszetes-ko", "diy-terasz-terkovezes-lepesrol-lepesre"],
    related: ["kocsibeallo-vizellevezetes-terkovezes-rendszerek", "beton-vs-termeszetes-ko-terkovek"],
    supporting: ["antik-terko-jellemzoi-felhasznalasa", "szines-terkovek-kreativ-mintak-kombinaciok"]
  },

  // Térkő típusok kapcsolatok
  "beton-vs-termeszetes-ko-terkovek": {
    mainTopics: ["antik-terko-jellemzoi-felhasznalasa", "szines-terkovek-kreativ-mintak-kombinaciok"],
    related: ["hogyan-valasszunk-terkovet", "kerti-utak-tervezese-terko-vs-termeszetes-ko"],
    supporting: ["terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas", "terkovezes-koltsegkalkulator-2025"]
  },
  
  "antik-terko-jellemzoi-felhasznalasa": {
    mainTopics: ["beton-vs-termeszetes-ko-terkovek", "szines-terkovek-kreativ-mintak-kombinaciok"],
    related: ["terasz-terkovezes-trendek-2025", "kerti-utak-tervezese-terko-vs-termeszetes-ko"],
    supporting: ["hogyan-valasszunk-terkovet", "terkovezes-tervezes-alapjai"]
  },
  
  "szines-terkovek-kreativ-mintak-kombinaciok": {
    mainTopics: ["antik-terko-jellemzoi-felhasznalasa", "beton-vs-termeszetes-ko-terkovek"],
    related: ["terasz-terkovezes-trendek-2025", "kerti-utak-tervezese-terko-vs-termeszetes-ko"],
    supporting: ["diy-terasz-terkovezes-lepesrol-lepesre", "terkovezes-tervezes-alapjai"]
  },

  // Tervezés és tanácsadás kapcsolatok
  "terkovezes-tervezes-alapjai": {
    mainTopics: ["terkovezes-koltsegkalkulator-2025", "kocsibeallo-vizellevezetes-terkovezes-rendszerek"],
    related: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "diy-terasz-terkovezes-lepesrol-lepesre"],
    supporting: ["hogyan-valasszunk-terkovet", "beton-vs-termeszetes-ko-terkovek"]
  },
  
  "terkovezes-koltsegkalkulator-2025": {
    mainTopics: ["terkovezes-tervezes-alapjai", "kocsibeallo-terkovezes-arak-tipusok-kivitelezes"],
    related: ["terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas", "hogyan-valasszunk-terkovet"],
    supporting: ["beton-vs-termeszetes-ko-terkovek", "diy-terasz-terkovezes-lepesrol-lepesre"]
  },

  // Új blog bejegyzések kapcsolatok
  "terkovezes-karbantartas-javitas-szakertoi-tippek": {
    mainTopics: ["terkozott-jardak-karbantartasa-evszakonkent", "beton-vs-termeszetes-ko-terkovek"],
    related: ["kocsibeallo-terkovezes-arak-tipusok-kivitelezes", "hogyan-valasszunk-terkovet"],
    supporting: ["antik-terko-jellemzoi-felhasznalasa", "terkovezes-tervezes-alapjai"]
  },

  "modern-terkovezes-trendek-design-otletek-2025": {
    mainTopics: ["szines-terkovek-kreativ-mintak-kombinaciok", "terasz-terkovezes-trendek-2025"],
    related: ["antik-terko-jellemzoi-felhasznalasa", "beton-vs-termeszetes-ko-terkovek"],
    supporting: ["diy-terasz-terkovezes-lepesrol-lepesre", "terkovezes-tervezes-alapjai"]
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
  "kocsibeallo-terkovezes-arak-tipusok-kivitelezes": ["kocsibeálló térkövezés árak", "térkövezés kivitelezés", "kocsibeálló térkő árak"],
  "hogyan-valasszunk-terkovet": ["térkő választás", "kocsibeálló térkő típusok", "térkő kiválasztás"],
  "kocsibeallo-vizellevezetes-terkovezes-rendszerek": ["vízelvezetés térkövezéssel", "térkövezés vízelvezetés", "vízelvezetési rendszerek"],
  "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas": ["térkő vs aszfalt", "burkolat összehasonlítás", "kocsibeálló burkolatok"],
  "terasz-terkovezes-trendek-2025": ["terasz térkövezés trendek", "modern térkövezés", "térkő trendek 2025"],
  "diy-terasz-terkovezes-lepesrol-lepesre": ["DIY térkövezés", "térkövezés lépésről lépésre", "saját kezű térkövezés"],
  "kerti-utak-tervezese-terko-vs-termeszetes-ko": ["kerti utak térkő", "térkő vs természetes kő", "kerti út tervezés"],
  "terkozott-jardak-karbantartasa-evszakonkent": ["térkő karbantartás", "járda karbantartás", "térkövezett felület ápolás"],
  "beton-vs-termeszetes-ko-terkovek": ["beton vs természetes kő", "térkő típusok", "térkő összehasonlítás"],
  "antik-terko-jellemzoi-felhasznalasa": ["antik térkő", "klasszikus térkő", "antik térkő tulajdonságai"],
  "szines-terkovek-kreativ-mintak-kombinaciok": ["színes térkövek", "térkő minták", "kreatív térkövezés"],
  "terkovezes-tervezes-alapjai": ["térkövezés tervezés", "térkövezési alapelvek", "térkövezés megtervezése"],
  "terkovezes-koltsegkalkulator-2025": ["térkövezés költségek", "térkő árak 2025", "térkövezés kalkulátor"],
  "terkovezes-karbantartas-javitas-szakertoi-tippek": ["térkövezés karbantartás", "térkő javítás", "térkő ápolás szakértői tippek"],
  "modern-terkovezes-trendek-design-otletek-2025": ["modern térkövezés trendek", "térkő design ötletek", "2025 térkövezési trendek"]
};

// Function to get anchor text for a link
export function getAnchorText(slug, index = 0) {
  const texts = anchorTexts[slug];
  if (!texts || !texts[index]) return slug.replace(/-/g, ' ');
  return texts[index];
}