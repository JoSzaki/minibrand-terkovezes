// Kapcsolódó cikkek adatstruktúra - minden blogcikkhez dinamikus linkek
export const relatedArticlesMap = {
  "kocsibeallo-terkovezes-arak-tipusok-kivitelezes": [
    "hogyan-valasszunk-terkovet",
    "kocsibeallo-vizelvezes-terkovezes",
    "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas"
  ],
  "hogyan-valasszunk-terkovet": [
    "kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
    "beton-vagy-termeszetes-ko-terkovek",
    "antik-terko-jellemzoi-felhasznalasa"
  ],
  "kocsibeallo-vizelvezes-terkovezes": [
    "kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
    "kocsibeallo-vizelvezetesi-terkovezes-rendszerek",
    "terkovezes-hibak-problemak-megoldasok-budapest"
  ],
  "kocsibeallo-vizelvezetesi-terkovezes-rendszerek": [
    "kocsibeallo-vizelvezes-terkovezes",
    "profi-terkovezes-kivitelezes-lepesek-hibak",
    "kornyezetbarat-terkovezes-megoldasok-2025"
  ],
  "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas": [
    "kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
    "terkovezes-koltsegkalkulator-2025",
    "beton-vagy-termeszetes-ko-terkovek"
  ],
  "terkovezes-karbantartas-javitas-szakertoi-tippek": [
    "terkozott-jardak-karbantartasa-evszakonkent",
    "terkovezes-hibak-problemak-megoldasok-budapest",
    "profi-terkovezes-kivitelezes-lepesek-hibak"
  ],
  "modern-terkovezes-trendek-design-otletek-2025": [
    "szines-terkovek-kreativ-mintak-kombinaciok",
    "terasz-terkovezes-trendek-2025",
    "kornyezetbarat-terkovezes-megoldasok-2025"
  ],
  "terasz-terkovezes-trendek-2025": [
    "modern-terkovezes-trendek-design-otletek-2025",
    "diy-terasz-terkovezes-lepesrol-lepesre",
    "szines-terkovek-kreativ-mintak-kombinaciok"
  ],
  "diy-terasz-terkovezes-lepesrol-lepesre": [
    "terasz-terkovezes-trendek-2025",
    "terkovezes-tervezes-alapjai",
    "profi-terkovezes-kivitelezes-lepesek-hibak"
  ],
  "kerti-utak-tervezese-terko-vs-termeszetes-ko": [
    "terkovezes-tervezes-alapjai",
    "beton-vagy-termeszetes-ko-terkovek",
    "kornyezetbarat-terkovezes-megoldasok-2025"
  ],
  "terkozott-jardak-karbantartasa-evszakonkent": [
    "terkovezes-karbantartas-javitas-szakertoi-tippek",
    "kornyezetbarat-terkovezes-megoldasok-2025",
    "terkovezes-hibak-problemak-megoldasok-budapest"
  ],
  "beton-vagy-termeszetes-ko-terkovek": [
    "hogyan-valasszunk-terkovet",
    "antik-terko-jellemzoi-felhasznalasa",
    "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas"
  ],
  "antik-terko-jellemzoi-felhasznalasa": [
    "beton-vagy-termeszetes-ko-terkovek",
    "hogyan-valasszunk-terkovet",
    "szines-terkovek-kreativ-mintak-kombinaciok"
  ],
  "szines-terkovek-kreativ-mintak-kombinaciok": [
    "modern-terkovezes-trendek-design-otletek-2025",
    "antik-terko-jellemzoi-felhasznalasa",
    "terkovezes-tervezes-alapjai"
  ],
  "terkovezes-tervezes-alapjai": [
    "kerti-utak-tervezese-terko-vs-termeszetes-ko",
    "szines-terkovek-kreativ-mintak-kombinaciok",
    "diy-terasz-terkovezes-lepesrol-lepesre"
  ],
  "terkovezes-koltsegkalkulator-2025": [
    "kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
    "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas",
    "terkovezes-budapest-keruletek-arak-szolgaltatasok"
  ],
  "profi-terkovezes-kivitelezes-lepesek-hibak": [
    "terkovezes-karbantartas-javitas-szakertoi-tippek",
    "terkovezes-hibak-problemak-megoldasok-budapest",
    "diy-terasz-terkovezes-lepesrol-lepesre"
  ],
  "kornyezetbarat-terkovezes-megoldasok-2025": [
    "modern-terkovezes-trendek-design-otletek-2025",
    "kerti-utak-tervezese-terko-vs-termeszetes-ko",
    "terkozott-jardak-karbantartasa-evszakonkent"
  ],
  "terkovezes-hibak-problemak-megoldasok-budapest": [
    "profi-terkovezes-kivitelezes-lepesek-hibak",
    "terkovezes-karbantartas-javitas-szakertoi-tippek",
    "kocsibeallo-vizelvezes-terkovezes"
  ],
  "terkovezes-budapest-keruletek-arak-szolgaltatasok": [
    "terkovezes-koltsegkalkulator-2025",
    "kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
    "profi-terkovezes-kivitelezes-lepesek-hibak"
  ],

  // Kapcsolódó cikkek - csak létező blog postokra
};

// Kapcsolódó cikkek lekérése funkcióval fallback-kel
export function getRelatedArticles(currentSlug, blogPosts) {
  const currentPost = blogPosts.find(post => post.slug === currentSlug);

  // 1. Próbáljuk meg a manuális kapcsolódó cikkeket
  const relatedSlugs = relatedArticlesMap[currentSlug] || [];
  let relatedArticles = relatedSlugs
    .map(slug => blogPosts.find(post => post.slug === slug))
    .filter(Boolean);

  // 2. Ha nincs elég manuális kapcsolódó cikk, kategória alapján kiegészítjük
  if (relatedArticles.length < 3 && currentPost) {
    const categoryArticles = blogPosts
      .filter(post =>
        post.slug !== currentSlug && // Nem az aktuális cikk
        post.category === currentPost.category && // Ugyanaz a kategória
        !relatedArticles.some(related => related.slug === post.slug) // Még nincs a listában
      )
      .slice(0, 3 - relatedArticles.length); // Annyit vesz, amennyi hiányzik

    relatedArticles = [...relatedArticles, ...categoryArticles];
  }

  // 3. Ha még mindig nincs elég, véletlenszerű cikkekkel töltjük fel
  if (relatedArticles.length < 3) {
    const randomArticles = blogPosts
      .filter(post =>
        post.slug !== currentSlug && // Nem az aktuális cikk
        !relatedArticles.some(related => related.slug === post.slug) // Még nincs a listában
      )
      .sort(() => Math.random() - 0.5) // Véletlenszerű sorrend
      .slice(0, 3 - relatedArticles.length);

    relatedArticles = [...relatedArticles, ...randomArticles];
  }

  return relatedArticles.slice(0, 3); // Maximum 3 kapcsolódó cikk
}

// Kapcsolódó cikkek alapadatai rövidített formában
export function getRelatedArticlesBasic(currentSlug) {
  const relatedArticlesData = {
    "kocsibeallo-terkovezes-arak-tipusok-kivitelezes": [
      {
        slug: "hogyan-valasszunk-terkovet",
        title: "Térkő választás kocsibeállóhoz: útmutató 2025",
        excerpt: "Hogyan válasszunk megfelelő térkövet kocsibeállóhoz? Típusok, teherbírás, árak..."
      },
      {
        slug: "kocsibeallo-vizelvezes-terkovezes",
        title: "Kocsibeálló vízelvezetés térkövezésnél",
        excerpt: "Vízelvezetési rendszerek kocsibeálló térkövezésénél. Csatornák, lejtések..."
      },
      {
        slug: "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas",
        title: "Térkő vs aszfalt vs beton összehasonlítás",
        excerpt: "Kocsibeálló burkolatok összehasonlítása: térkő, aszfalt, beton előnyei..."
      }
    ],
    "hogyan-valasszunk-terkovet": [
      {
        slug: "kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
        title: "Kocsibeálló térkövezés 2025: Árak, típusok, kivitelezés",
        excerpt: "Teljes útmutató kocsibeálló térkövezéshez 2025-ben. Árak, térkőtípusok..."
      },
      {
        slug: "beton-vagy-termeszetes-ko-terkovek",
        title: "Beton vagy természetes kő térkövek",
        excerpt: "Beton vs természetes kő térkövek összehasonlítása. Előnyök, hátrányok..."
      },
      {
        slug: "antik-terko-jellemzoi-felhasznalasa",
        title: "Antik térkő jellemzői",
        excerpt: "Antik térkő típusok, jellemzők, felhasználási területek, árak..."
      }
    ]
    // További cikkek kapcsolódó adatai...
  };

  return relatedArticlesData[currentSlug] || [];
}