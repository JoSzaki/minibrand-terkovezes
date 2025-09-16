import { contentRelationships, anchorTexts } from '../data/internalLinks.js';

// Kulcsszavak �s a hozz�juk tartoz� slug-ok
const keywordMappings = {
  // Alapoz�s kateg�ria
  'alapoz�s': 'alapozas-budapest',
  'alapoz�si': 'alapozas-budapest',
  'alapoz�si szolg�ltat�sok': 'alapozas-budapest',
  'lemezalap': 'lemezalapok-budapest',
  'lemezalapok': 'lemezalapok-budapest',
  'lemezalapos': 'lemezalapok-budapest',
  'pontalap': 'pontalapok-budapest',
  'pontalapok': 'pontalapok-budapest',
  'pont alapok': 'pontalapok-budapest',
  's�valapos': 'savalapok-budapest',
  's�valapok': 'savalapok-budapest',
  's�v alapok': 'savalapok-budapest',
  
  // Aljzat kateg�ria
  'aljzat betonoz�s': 'aljzatbetonozas-budapest',
  'aljzatok': 'aljzatbetonozas-budapest',
  'estrich': 'estrich-aljzat-budapest',
  'estrich aljzat': 'estrich-aljzat-budapest',
  'padl�f�t�s aljzat': 'padlofutes-aljzat-budapest',
  'padl�f�t�ses aljzat': 'padlofutes-aljzat-budapest',
  
  // Speci�lis betonok
  'speci�lis betonoz�s': 'specialis-betonozas-budapest',
  'gyorsk�t� beton': 'gyorskoto-beton-budapest',
  'gyorsk�t�': 'gyorskoto-beton-budapest',
  'k�nny�beton': 'konnyubeton-budapest',
  'k�nny� beton': 'konnyubeton-budapest',
  'v�z�ll� beton': 'vizallo-beton-budapest',
  'v�z�ll�': 'vizallo-beton-budapest',
  
  // Technol�gi�k
  'betonoz�si technol�gi�k': 'betonozasi-technologiak',
  'betonoz�si technol�gia': 'betonozasi-technologiak',
  'zsaluz�s': 'zsaluzas-budapest',
  'zsaluzat': 'zsaluzas-budapest',
  'betonpumpa': 'betonpumpa-szolgaltatas-budapest',
  
  // Szolg�ltat�sok
  'j�rda betonoz�s': 'jarda-betonozas-budapest',
  'terasz betonoz�s': 'terasz-betonozas-budapest',
  'udvar betonoz�s': 'udvar-betonozas-budapest',
  'kocsibe�ll� betonoz�s': 'kocsibeallo-betonozas-budapest',
  'ipari padl�': 'ipari-padlobetonozas-budapest',
  'ipari padl�k': 'ipari-padlobetonozas-budapest',
  
  // Blog t�m�k
  't�li betonoz�s': 'teli-betonozas',
  'betonkever�s': 'betonkeveres-titkai',
  'beton adal�kanyagok': 'beton-adalekanyagok',
  'adal�kanyagok': 'beton-adalekanyagok',
  'reped�sek': 'repedesek-okai',
  'beton reped�sek': 'repedesek-okai',
  'szerkezeti probl�m�k': 'szerkezeti-problemak',
  'beton jav�t�s': 'beton-javitas',
  'betonjav�t�s': 'beton-javitas',
  'rehabilit�ci�': 'rehabilitacio-megerosites',
  'dilat�ci�s h�zagok': 'dilatacios-hezagok',
  'h�zagok': 'dilatacios-hezagok',
  'min�s�gbiztos�t�s': 'minosegbiztositas',
  'ut�kezel�s': 'utokezeles-fontossaga'
};

// Optimized link tracking with WeakMap for better memory management
const paragraphLinkCache = new WeakMap();

// Get or create link set for a paragraph element
function getParagraphLinks(paragraphId) {
  return linkedWordsInParagraph || new Set();
}

// M�r linkelt szavak nyomon k�vet�se egy bekezd�sben
let linkedWordsInParagraph = new Set();

// Reset a bekezd�s elej�n
export function resetParagraphLinks() {
  linkedWordsInParagraph.clear();
}

// Ellen�rzi, hogy egy sz� m�r linkelt-e ebben a bekezd�sben
function isAlreadyLinked(word) {
  return linkedWordsInParagraph.has(word.toLowerCase());
}

// Megjel�li egy sz�t linkeltk�nt
function markAsLinked(word) {
  linkedWordsInParagraph.add(word.toLowerCase());
}

// Anchor sz�veg gener�l�s v�ltozatoss�ggal
function getVariedAnchorText(slug, originalText) {
  const texts = anchorTexts[slug];
  if (!texts) return originalText;
  
  // Random kiv�laszt�s a 3 vari�ci� k�z�l
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

// Cache for compiled regexes to improve performance
const regexCache = new Map();

function getRegex(keyword) {
  if (!regexCache.has(keyword)) {
    regexCache.set(keyword, new RegExp(`\\b${keyword}\\b`, 'gi'));
  }
  return regexCache.get(keyword);
}

// Pre-sort keywords once to avoid repeated sorting
const sortedKeywords = Object.keys(keywordMappings).sort((a, b) => b.length - a.length);

// Sz�veg feldolgoz�s term�szetes linkel�ssel - optimized version
export function processContentForLinks(content, currentSlug, maxLinksPerParagraph = 2) {
  // Early return for empty content
  if (!content || typeof content !== 'string') return content;
  
  resetParagraphLinks();
  
  // Split paragraphs to handle links per paragraph
  const paragraphs = content.split(/\n\s*\n/);
  
  return paragraphs.map(paragraph => {
    resetParagraphLinks();
    let processedParagraph = paragraph;
    let linksInThisParagraph = 0;
    
    // Use pre-sorted keywords for better performance
    for (const keyword of sortedKeywords) {
      if (linksInThisParagraph >= maxLinksPerParagraph) break;
      
      const targetSlug = keywordMappings[keyword];
      
      // Ne linkelj�k �nmagunkra
      if (targetSlug === currentSlug) continue;
      
      // Ne linkelj�nk m�r linkelt szavakat
      if (isAlreadyLinked(keyword)) continue;
      
      // Use cached regex for better performance
      const regex = getRegex(keyword);
      regex.lastIndex = 0; // Reset regex state
      
      if (regex.test(processedParagraph)) {
        // Reset for replacement
        regex.lastIndex = 0;
        
        // Haszn�ljuk a vari�lt anchor sz�veget
        const anchorText = getVariedAnchorText(targetSlug, keyword);
        const linkHtml = `<a href="/${targetSlug}" class="text-primary-600 hover:text-primary-700 underline">${anchorText}</a>`;
        
        // Csak az els� el�fordul�st cser�lj�k le
        processedParagraph = processedParagraph.replace(regex, linkHtml);
        
        markAsLinked(keyword);
        linksInThisParagraph++;
      }
    }
    
    return processedParagraph;
  }).join('\n\n');
}

// Kapcsol�d� cikkek lek�r�se egy adott slug-hoz
export function getRelatedArticles(currentSlug, limit = 3) {
  const relationships = contentRelationships[currentSlug];
  if (!relationships) return [];
  
  const relatedSlugs = [
    ...(relationships.mainTopics || []),
    ...(relationships.related || [])
  ].slice(0, limit);
  
  return relatedSlugs.map(slug => ({
    slug,
    anchorText: getVariedAnchorText(slug, slug.replace(/-/g, ' '))
  }));
}

// Kontextu�lis linkek beszerz�se (sidebar vagy kapcsol�d� tartalom blokkokhoz)
export function getContextualLinkSuggestions(currentSlug, type = 'related') {
  const relationships = contentRelationships[currentSlug];
  if (!relationships || !relationships[type]) return [];
  
  return relationships[type].map(slug => ({
    slug,
    url: `/${slug}`,
    title: getVariedAnchorText(slug, slug.replace(/-/g, ' ')),
    anchorText: getVariedAnchorText(slug, slug.replace(/-/g, ' '))
  }));
}

// Smart link density sz�m�t�s (ne t�l sok link legyen)
export function calculateOptimalLinkCount(textLength) {
  // Kb. 150-200 sz�k�nt 1 link
  const words = textLength / 6; // �tlagos sz�hossz becsl�s
  return Math.max(1, Math.floor(words / 175));
}

// Debug funkci� - melyik kulcsszavak tal�lhat�k egy sz�vegben
export function findPotentialLinks(content) {
  const foundKeywords = [];
  
  Object.keys(keywordMappings).forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    if (regex.test(content)) {
      foundKeywords.push({
        keyword,
        targetSlug: keywordMappings[keyword]
      });
    }
  });
  
  return foundKeywords;
}
