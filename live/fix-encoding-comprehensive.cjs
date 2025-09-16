const fs = require('fs');
const path = require('path');

// Read the blogPosts.js file
const filePath = path.join(__dirname, 'src', 'data', 'blogPosts.js');
let content = fs.readFileSync(filePath, 'utf8');

console.log(`Original file size: ${content.length} characters`);
console.log(`Original � count: ${(content.match(/�/g) || []).length}`);

// Comprehensive Hungarian character replacements based on common encoding issues
// When UTF-8 Hungarian characters are misinterpreted, they often become these sequences
const replacements = [
  // Common UTF-8 to Latin-1 misinterpretation patterns
  ['Ã¡', 'á'],   // á -> Ã¡
  ['Ã©', 'é'],   // é -> Ã©
  ['Ã­', 'í'],   // í -> Ã­
  ['Ã³', 'ó'],   // ó -> Ã³
  ['Ã¶', 'ö'],   // ö -> Ã¶
  ['Å', 'ő'],    // ő -> Å'
  ['Ãº', 'ú'],   // ú -> Ãº
  ['Ã¼', 'ü'],   // ü -> Ã¼
  ['Å±', 'ű'],   // ű -> Å±
  ['Ã', 'Á'],    // Á -> Ã
  ['Ã‰', 'É'],   // É -> Ã‰
  ['Ã', 'Í'],    // Í -> Ã
  ['Ã"', 'Ó'],   // Ó -> Ã"
  ['Ã–', 'Ö'],   // Ö -> Ã–
  ['Å', 'Ő'],    // Ő -> Å
  ['Ãš', 'Ú'],   // Ú -> Ãš
  ['Ãœ', 'Ü'],   // Ü -> Ãœ
  ['Å°', 'Ű'],   // Ű -> Å°

  // Direct � character replacements - most common patterns from the file
  ['tÄ\u0085rkĹ\u0091', 'térkő'],
  ['TÄ\u0085rkĹ\u0091', 'Térkő'],
  ['kÄ\u0091vezÄ\u0085s', 'kövezés'],
  ['KÄ\u0091vezÄ\u0085s', 'Kövezés'],
  ['Ä\u0085rak', 'árak'],
  ['Ä\u0081rak', 'Árak'],
  ['tĂ­pusok', 'típusok'],
  ['TĂ­pusok', 'Típusok'],
  ['Ă\u00BAtmutatĂ³', 'útmutató'],
  ['Ă\u009AtmutatĂ³', 'Útmutató'],

  // Try byte-by-byte common Hungarian replacements for � characters
  [/\u00E1/g, 'á'],  // á
  [/\u00E9/g, 'é'],  // é
  [/\u00ED/g, 'í'],  // í
  [/\u00F3/g, 'ó'],  // ó
  [/\u00F6/g, 'ö'],  // ö
  [/\u0151/g, 'ő'],  // ő
  [/\u00FA/g, 'ú'],  // ú
  [/\u00FC/g, 'ü'],  // ü
  [/\u0171/g, 'ű'],  // ű
  [/\u00C1/g, 'Á'],  // Á
  [/\u00C9/g, 'É'],  // É
  [/\u00CD/g, 'Í'],  // Í
  [/\u00D3/g, 'Ó'],  // Ó
  [/\u00D6/g, 'Ö'],  // Ö
  [/\u0150/g, 'Ő'],  // Ő
  [/\u00DA/g, 'Ú'],  // Ú
  [/\u00DC/g, 'Ü'],  // Ü
  [/\u0170/g, 'Ű'],  // Ű

  // Most common word patterns with � (based on context)
  [/t\uFFFDrk\uFFFD/g, 'térkő'],
  [/T\uFFFDrk\uFFFD/g, 'Térkő'],
  [/k\uFFFDvez\uFFFDs/g, 'kövezés'],
  [/K\uFFFDvez\uFFFDs/g, 'Kövezés'],
  [/\uFFFDrak/g, 'árak'],
  [/\uFFFDrak/g, 'Árak'],
  [/t\uFFFDpusok/g, 'típusok'],
  [/T\uFFFDpusok/g, 'Típusok'],
  [/\uFFFDtmutat\uFFFD/g, 'útmutató'],
  [/\uFFFDtmutat\uFFFD/g, 'Útmutató'],
  [/l\uFFFDp\uFFFDs/g, 'lépés'],
  [/L\uFFFDp\uFFFDs/g, 'Lépés'],
  [/kivitelez\uFFFDs/g, 'kivitelezés'],
  [/Kivitelez\uFFFDs/g, 'Kivitelezés'],
  [/szak\uFFFDrt\uFFFDi/g, 'szakértői'],
  [/Szak\uFFFDrt\uFFFDi/g, 'Szakértői'],
  [/tan\uFFFDcsok/g, 'tanácsok'],
  [/Tan\uFFFDcsok/g, 'Tanácsok'],
  [/k\uFFFDlts\uFFFDg/g, 'költség'],
  [/K\uFFFDlts\uFFFDg/g, 'Költség'],
  [/\uFFFDll\uFFFD/g, 'álló'],
  [/kocsibe\uFFFDll\uFFFD/g, 'kocsibeálló'],
  [/Kocsibe\uFFFDll\uFFFD/g, 'Kocsibeálló'],
  [/ter\uFFFDlet/g, 'terület'],
  [/Ter\uFFFDlet/g, 'Terület'],
  [/m\uFFFDret/g, 'méret'],
  [/M\uFFFDret/g, 'Méret'],
  [/\uFFFDv/g, 'év'],
  [/\uFFFDv/g, 'Év'],
  [/tart\uFFFDss\uFFFDg/g, 'tartósság'],
  [/Tart\uFFFDss\uFFFDg/g, 'Tartósság'],
  [/teherb\uFFFDr\uFFFDs/g, 'teherbírás'],
  [/Teherb\uFFFDr\uFFFDs/g, 'Teherbírás'],
  [/karbantart\uFFFDs/g, 'karbantartás'],
  [/Karbantart\uFFFDs/g, 'Karbantartás'],
  [/v\uFFFDzelvezet\uFFFDs/g, 'vízelvezetés'],
  [/V\uFFFDzelvezet\uFFFDs/g, 'Vízelvezetés'],
  [/alapoz\uFFFDs/g, 'alapozás'],
  [/Alapoz\uFFFDs/g, 'Alapozás'],
  [/tervez\uFFFDs/g, 'tervezés'],
  [/Tervez\uFFFDs/g, 'Tervezés'],
  [/felm\uFFFDr\uFFFDs/g, 'felmérés'],
  [/Felm\uFFFDr\uFFFDs/g, 'Felmérés'],
  [/aj\uFFFDnlat/g, 'ajánlat'],
  [/Aj\uFFFDnlat/g, 'Ajánlat'],
  [/szolg\uFFFDltat\uFFFDs/g, 'szolgáltatás'],
  [/Szolg\uFFFDltat\uFFFDs/g, 'Szolgáltatás'],
  [/min\uFFFDs\uFFFDg/g, 'minőség'],
  [/Min\uFFFDs\uFFFDg/g, 'Minőség'],
  [/m\uFFFDly/g, 'mély'],
  [/M\uFFFDly/g, 'Mély'],
  [/m\uFFFDlys\uFFFDg/g, 'mélység'],
  [/M\uFFFDlys\uFFFDg/g, 'Mélység'],
  [/professzion\uFFFDlis/g, 'professzionális'],
  [/Professzion\uFFFDlis/g, 'Professzionális'],
];

let changes = 0;

// Apply all replacements
replacements.forEach(([pattern, replacement], index) => {
  const isRegex = pattern instanceof RegExp;
  const before = content;

  if (isRegex) {
    const matches = (before.match(pattern) || []).length;
    content = content.replace(pattern, replacement);
    if (matches > 0) {
      console.log(`${index + 1}. Applied regex ${pattern.source} -> ${replacement}: ${matches} matches`);
      changes += matches;
    }
  } else {
    const matches = (before.split(pattern).length - 1);
    content = content.split(pattern).join(replacement);
    if (matches > 0) {
      console.log(`${index + 1}. Applied string "${pattern}" -> "${replacement}": ${matches} matches`);
      changes += matches;
    }
  }
});

console.log(`\nTotal changes applied: ${changes}`);
console.log(`Final file size: ${content.length} characters`);
console.log(`Final � count: ${(content.match(/�/g) || []).length}`);

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');
console.log('File saved successfully!');