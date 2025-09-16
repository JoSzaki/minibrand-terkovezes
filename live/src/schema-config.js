// Schema konfigur�ci�s f�jl - automatikus bet�lt�s a Cloud sz�m�ra
export const SCHEMAS = {
  // Local Business Schema
  LOCAL_BUSINESS: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "",
    "description": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "",
      "postalCode": "",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "",
      "longitude": ""
    },
    "telephone": "",
    "openingHours": [],
    "url": "",
    "priceRange": "",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "",
      "reviewCount": ""
    }
  },

  // Article Schema
  ARTICLE: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "",
    "description": "",
    "author": {
      "@type": "Person",
      "name": ""
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": "",
    "dateModified": "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": ""
    },
    "image": {
      "@type": "ImageObject",
      "url": "",
      "width": "",
      "height": ""
    }
  },

  // FAQ How-to Schema kombin�ci�
  FAQ_HOWTO: {
    "faq": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": []
    },
    "howto": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "",
      "description": "",
      "image": "",
      "totalTime": "",
      "estimatedCost": "",
      "supply": [],
      "tool": [],
      "step": []
    }
  }
};

// Oldalt�pusok �s hozz�juk tartoz� schema konfigur�ci�k
export const PAGE_TYPE_SCHEMAS = {
  // Szolg�ltat�s oldalak - teljes schema lefedetts�g
  "service": [SCHEMAS.LOCAL_BUSINESS, SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq],
  
  // Blog bejegyz�sek - minden blog gyakorlati �tmutat� FAQ-val
  "blog": [SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq, SCHEMAS.FAQ_HOWTO.howto],
  
  // �tmutat�/Tutorial oldalak - l�p�sr�l l�p�sre + FAQ
  "tutorial": [SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq, SCHEMAS.FAQ_HOWTO.howto],
  
  // FAQ oldalak - tiszt�n GYIK
  "faq": [SCHEMAS.FAQ_HOWTO.faq],
  
  // Komplex �tmutat�k - teljes schema spektrum
  "guide": [SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq, SCHEMAS.FAQ_HOWTO.howto],
  
  // Helyi szolg�ltat�s oldalak - helyi �zlet + gyakorlati tan�csok
  "local-service": [SCHEMAS.LOCAL_BUSINESS, SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq, SCHEMAS.FAQ_HOWTO.howto],
  
  // Term�k/szolg�ltat�s bemutat� - �zleti + tartalmi
  "product": [SCHEMAS.LOCAL_BUSINESS, SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq],
  
  // �ltal�nos tartalmi oldalak - csak cikk
  "content": [SCHEMAS.ARTICLE],
  
  // Kapcsolat/El�rhet�s�g oldalak - helyi �zlet info
  "contact": [SCHEMAS.LOCAL_BUSINESS]
};

// Schema gener�l� f�ggv�ny
export function getSchemas(pageType) {
  const schemas = PAGE_TYPE_SCHEMAS[pageType];
  if (!schemas) {
    console.warn(`Ismeretlen oldalt�pus: ${pageType}. Alap�rtelmezett Article schema haszn�lata.`);
    return [SCHEMAS.ARTICLE];
  }
  return schemas;
}

// Schema kit�lt� f�ggv�ny
export function fillSchema(schemaTemplate, data) {
  const schema = JSON.parse(JSON.stringify(schemaTemplate));
  
  // Rekurz�v kit�lt�s
  function fillRecursive(obj, dataObj) {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          if (dataObj[key] && Array.isArray(dataObj[key])) {
            obj[key] = dataObj[key];
          }
        } else {
          fillRecursive(obj[key], dataObj[key] || {});
        }
      } else if (obj[key] === "" && dataObj[key]) {
        obj[key] = dataObj[key];
      }
    }
  }
  
  fillRecursive(schema, data);
  return schema;
}

// Automatikus schema gener�l�s oldalt�pus alapj�n
export function generateSchemasForPage(pageType, contentData) {
  const requiredSchemas = getSchemas(pageType);
  const filledSchemas = [];
  
  for (const schema of requiredSchemas) {
    const filledSchema = fillSchema(schema, contentData);
    filledSchemas.push(filledSchema);
  }
  
  return filledSchemas;
}

// Export a Cloud sz�m�ra
export default {
  SCHEMAS,
  PAGE_TYPE_SCHEMAS,
  getSchemas,
  fillSchema,
  generateSchemasForPage
};
