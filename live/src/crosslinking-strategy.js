// Keresztlinkel�si Strat�giai Terv
// T�rk�vez�s Debrecen Topical Authority Projekt

export const CROSSLINKING_STRATEGY = {
  // 1. PILLAR OLDAL - K�zponti hub
  pillar: {
    url: "/terkovezes-debrecen",
    title: "T�rk�vez�s Debrecen - Szak�rt� Szolg�ltat�s",
    type: "service",
    linkingPower: 100, // Legmagasabb priorit�s
    internalLinksFrom: "ALL", // Minden oldal linkel ide
    internalLinksTo: [
      "supporting-articles", // Minden t�mogat� cikkhez
      "contact", // Kapcsolat oldalhoz
      "portfolio" // Referenci�khoz
    ]
  },

  // 2. T�MOGAT� CIKKEK - Topical Cluster
  supportingArticles: [
    {
      url: "/terkovezes-arak-debrecen",
      title: "T�rk�vez�s �rak Debrecenben 2025",
      type: "blog",
      keywords: ["t�rk�vez�s �r", "t�rk�vez�s k�lts�g", "debrecen �rak"],
      linksTo: ["pillar", "kovezes-tipusok", "beruhazas-megt�r�l�s"],
      linksFrom: ["pillar", "anyagok", "kivitelezes"]
    },
    {
      url: "/terkovezes-anyagok-tipusok",
      title: "T�rk�vez�s anyagok �s t�pusok �tmutat�ja",
      type: "guide", 
      keywords: ["t�rk�ves t�pusok", "j�r�lapok", "k� anyagok"],
      linksTo: ["pillar", "arak", "karbantartas"],
      linksFrom: ["pillar", "kivitelezes", "beruhazas"]
    },
    {
      url: "/terkovezes-kivitelezes-lepesek",
      title: "T�rk�vez�s kivitelez�se l�p�sr�l l�p�sre",
      type: "tutorial",
      keywords: ["t�rk�vez�s folyamat", "kivitelez�s", "�p�t�s l�p�sek"],
      linksTo: ["pillar", "anyagok", "beruhazas"],
      linksFrom: ["pillar", "arak", "hibak"]
    },
    {
      url: "/terkovezes-karbantartas-tippek",
      title: "T�rk�vez�s karbantart�sa - Gyakorlati tippek",
      type: "blog",
      keywords: ["t�rk� tiszt�t�s", "karbantart�s", "fel�j�t�s"],
      linksTo: ["pillar", "anyagok", "hibak"],
      linksFrom: ["pillar", "arak", "kivitelezes"]
    },
    {
      url: "/terkovezes-beruhazas-megt�r�l�s",
      title: "T�rk�vez�s mint befektet�s - Megt�r�l�si sz�m�t�s",
      type: "blog",
      keywords: ["ingatlan �rt�k", "befektet�s megt�r�l�s", "ROI"],
      linksTo: ["pillar", "arak", "anyagok"],
      linksFrom: ["pillar", "kivitelezes", "hibak"]
    },
    {
      url: "/gyakori-terkovezes-hibak-elkeruelse",
      title: "7 gyakori t�rk�vez�si hiba �s elker�l�s�k",
      type: "blog",
      keywords: ["t�rk�vez�s hib�k", "rossz kivitelez�s", "probl�m�k"],
      linksTo: ["pillar", "kivitelezes", "karbantartas"],
      linksFrom: ["pillar", "beruhazas", "anyagok"]
    },
    {
      url: "/terkovezes-engedelyezes-hatosagi-ugyint�zes",
      title: "T�rk�vez�s enged�lyez�se �s hat�s�gi �gyint�z�s",
      type: "guide",
      keywords: ["�p�t�si enged�ly", "hat�s�g", "�gyint�z�s"],
      linksTo: ["pillar", "kivitelezes", "beruhazas"],
      linksFrom: ["pillar", "arak", "hibak"]
    },
    {
      url: "/modern-terkovezes-trendek-2025",
      title: "Modern t�rk�vez�si trendek 2025-ben",
      type: "blog",
      keywords: ["t�rk�vez�s trendek", "modern design", "�j anyagok"],
      linksTo: ["pillar", "anyagok", "beruhazas"],
      linksFrom: ["pillar", "karbantartas", "arak"]
    },
    {
      url: "/terkovezes-vs-egyeb-burkolatok",
      title: "T�rk�vez�s vs. egy�b udvari burkolatok �sszehasonl�t�sa",
      type: "guide",
      keywords: ["burkolat t�pusok", "�sszehasonl�t�s", "v�laszt�s"],
      linksTo: ["pillar", "anyagok", "arak"],
      linksFrom: ["pillar", "beruhazas", "trendek"]
    },
    {
      url: "/terkovezes-debrecen-referenci�k-esettanulm�nyok",
      title: "Debreceni t�rk�vez�si referenci�k �s esettanulm�nyok",
      type: "content",
      keywords: ["referenci�k", "projektek", "esettanulm�nyok"],
      linksTo: ["pillar", "beruhazas", "trendek"],
      linksFrom: ["pillar", "arak", "anyagok"]
    }
  ],

  // 3. T�MOGAT� OLDALAK
  supportingPages: [
    {
      url: "/kapcsolat",
      title: "Kapcsolat - T�rk�vez�s Debrecen",
      type: "contact",
      linksTo: ["pillar"],
      linksFrom: ["pillar", "ALL_ARTICLES"] // Minden cikkb�l
    },
    {
      url: "/galeria-referenci�k",
      title: "Gal�ria �s referenci�k",
      type: "content", 
      linksTo: ["pillar", "referenci�k"],
      linksFrom: ["pillar", "beruhazas", "trendek"]
    }
  ]
};

// 4. KERESZTLINKEL�SI SZAB�LYOK
export const LINKING_RULES = {
  // Anchor text vari�ci�k
  anchorTextVariations: {
    pillar: [
      "t�rk�vez�s Debrecen",
      "szak�rt� t�rk�vez�si szolg�ltat�s",
      "t�rk�vez�s Debrecenben",
      "megb�zhat� t�rk�vez�",
      "t�rk�vez�si szak�rt�"
    ],
    price: [
      "t�rk�vez�s �rak",
      "k�lts�gkalkul�ci�", 
      "�r inform�ci�",
      "�raj�nlat k�r�s"
    ],
    materials: [
      "t�rk� t�pusok",
      "burkolati anyagok",
      "j�r�lap v�laszt�k",
      "k� anyagok"
    ],
    process: [
      "kivitelez�si folyamat",
      "t�rk�vez�s l�p�sei", 
      "munkaf�zisok",
      "�p�t�si folyamat"
    ],
    maintenance: [
      "karbantart�si tippek",
      "tiszt�t�si m�dszerek",
      "fel�j�t�s",
      "meg�v�s"
    ]
  },

  // Link elhelyez�si strat�gia
  linkPlacement: {
    introduction: "1-2 link a bevezet� bekezd�sben",
    body: "3-5 kontextu�lis link a t�rzssz�vegben", 
    conclusion: "1-2 �sszefoglal� link",
    sidebar: "Kapcsol�d� cikkek widget",
    footerCTA: "Tov�bbi inform�ci� call-to-action"
  },

  // Link t�pusok
  linkTypes: {
    contextual: "Term�szetes sz�vegk�rnyezetben",
    navigational: "Navig�ci�s men�ben", 
    related: "Kapcsol�d� cikkek szekci�ban",
    cta: "Call-to-action gombokban",
    breadcrumb: "Breadcrumb navig�ci�ban"
  }
};

// 5. LINK BUILDING PRIORIT�S
export const PRIORITY_MATRIX = {
  high: [
    "Minden cikk � Pillar oldal",
    "Pillar � Top 3 t�mogat� cikk",
    "�rak - Anyagok - Kivitelez�s (h�romsz�g)"
  ],
  medium: [
    "T�mogat� cikkek egym�s k�z�tt (topical clustering)",
    "Referenci�k � Pillar",
    "Kapcsolat minden cikkb�l"
  ],
  low: [
    "Kieg�sz�t� oldalak egym�s k�z�tt",
    "Szezon�lis cross-linking"
  ]
};

// 6. SEO LINK JUICE FLOW MODELL
export const LINK_AUTHORITY_FLOW = {
  pillarPage: {
    receives: "100% k�ls� link authority",
    distributes: "60% supporting articles, 30% key pages, 10% utility"
  },
  supportingArticles: {
    receives: "Authority pillarb�l + k�ls� linkek",
    distributes: "20% vissza pillarhez, 80% k�z�tt elosztva"
  },
  crossLinkingDensity: {
    pillar: "8-12 bels� link",
    supporting: "5-8 bels� link", 
    utility: "2-4 bels� link"
  }
};

// 7. AUTOMATIZ�L�SI SZAB�LYOK
export const AUTOMATION_RULES = {
  // �j cikk hozz�ad�sakor
  newArticle: {
    autoLinkTo: ["pillar", "topRelevantArticles"],
    autoLinkFrom: ["pillar", "relatedByKeywords"],
    anchorTextGeneration: "contextualKeywordMatch"
  },
  
  // Link karbantart�s
  maintenance: {
    brokenLinkCheck: "weekly",
    anchorTextDiversity: "monthly audit", 
    linkDistribution: "quarterly optimization"
  },

  // Schema kapcsolatok
  schemaLinking: {
    breadcrumb: "automatikus hierarchia",
    sitelinks: "pillar + top supporting",
    faq: "kereszthivatkoz�sok FAQ v�laszokban"
  }
};

// 8. HASZN�LAT
export function generateCrossLinks(currentPage, allPages) {
  const strategy = CROSSLINKING_STRATEGY;
  const rules = LINKING_RULES;
  
  // Logika a relev�ns linkek gener�l�s�ra
  return {
    outboundLinks: getRelevantOutboundLinks(currentPage, allPages),
    anchorTexts: generateAnchorTexts(currentPage, rules.anchorTextVariations),
    linkPlacements: rules.linkPlacement
  };
}

export default {
  CROSSLINKING_STRATEGY,
  LINKING_RULES,
  PRIORITY_MATRIX,
  LINK_AUTHORITY_FLOW,
  AUTOMATION_RULES,
  generateCrossLinks
};
