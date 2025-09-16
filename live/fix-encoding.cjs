const fs = require('fs');
const path = require('path');

// Read the blogPosts.js file
const filePath = path.join(__dirname, 'src', 'data', 'blogPosts.js');
let content = fs.readFileSync(filePath, 'utf8');

console.log(`Original file size: ${content.length} characters`);
console.log(`Original � count: ${(content.match(/�/g) || []).length}`);

// Hungarian character mappings - most common patterns
const replacements = [
  // Most common patterns from context analysis
  [/t�rk�/g, 'térkő'],
  [/T�rk�/g, 'Térkő'],
  [/k�vez�s/g, 'kövezés'],
  [/K�vez�s/g, 'Kövezés'],
  [/�rak/g, 'árak'],
  [/�rak/g, 'Árak'],
  [/t�pusok/g, 'típusok'],
  [/T�pusok/g, 'Típusok'],
  [/�tmutat�/g, 'útmutató'],
  [/�tmutat�/g, 'Útmutató'],
  [/l�p�s/g, 'lépés'],
  [/L�p�s/g, 'Lépés'],
  [/kivitelez�s/g, 'kivitelezés'],
  [/Kivitelez�s/g, 'Kivitelezés'],
  [/szak�rt�i/g, 'szakértői'],
  [/Szak�rt�i/g, 'Szakértői'],
  [/tan�csok/g, 'tanácsok'],
  [/Tan�csok/g, 'Tanácsok'],
  [/k�lts�g/g, 'költség'],
  [/K�lts�g/g, 'Költség'],
  [/�ll�/g, 'álló'],
  [/beáll�/g, 'beálló'],
  [/Beáll�/g, 'Beálló'],
  [/kocsibe�ll�/g, 'kocsibeálló'],
  [/Kocsibe�ll�/g, 'Kocsibeálló'],
  [/ter�let/g, 'terület'],
  [/Ter�let/g, 'Terület'],
  [/m�ret/g, 'méret'],
  [/M�ret/g, 'Méret'],
  [/�v/g, 'év'],
  [/�v/g, 'Év'],
  [/tart�ss�g/g, 'tartósság'],
  [/Tart�ss�g/g, 'Tartósság'],
  [/teherb�r�s/g, 'teherbírás'],
  [/Teherb�r�s/g, 'Teherbírás'],
  [/karbantart�s/g, 'karbantartás'],
  [/Karbantart�s/g, 'Karbantartás'],
  [/v�zelvezet�s/g, 'vízelvezetés'],
  [/V�zelvezet�s/g, 'Vízelvezetés'],
  [/alapoz�s/g, 'alapozás'],
  [/Alapoz�s/g, 'Alapozás'],
  [/tervez�s/g, 'tervezés'],
  [/Tervez�s/g, 'Tervezés'],
  [/felm�r�s/g, 'felmérés'],
  [/Felm�r�s/g, 'Felmérés'],
  [/aj�nlat/g, 'ajánlat'],
  [/Aj�nlat/g, 'Ajánlat'],
  [/szolg�ltat�s/g, 'szolgáltatás'],
  [/Szolg�ltat�s/g, 'Szolgáltatás'],
  [/min�s�g/g, 'minőség'],
  [/Min�s�g/g, 'Minőség'],
  [/m�ly/g, 'mély'],
  [/M�ly/g, 'Mély'],
  [/m�lys�g/g, 'mélység'],
  [/M�lys�g/g, 'Mélység'],
  [/praktikus/g, 'praktikus'],
  [/Praktikus/g, 'Praktikus'],
  [/modern/g, 'modern'],
  [/Modern/g, 'Modern'],
  [/professzion�lis/g, 'professzionális'],
  [/Professzion�lis/g, 'Professzionális'],

  // Generic single character replacements (most common Hungarian characters)
  [/á/g, 'á'],
  [/é/g, 'é'],
  [/í/g, 'í'],
  [/ó/g, 'ó'],
  [/ö/g, 'ö'],
  [/ő/g, 'ő'],
  [/ú/g, 'ú'],
  [/ü/g, 'ü'],
  [/ű/g, 'ű'],
  [/Á/g, 'Á'],
  [/É/g, 'É'],
  [/Í/g, 'Í'],
  [/Ó/g, 'Ó'],
  [/Ö/g, 'Ö'],
  [/Ő/g, 'Ő'],
  [/Ú/g, 'Ú'],
  [/Ü/g, 'Ü'],
  [/Ű/g, 'Ű']
];

// Apply all replacements
replacements.forEach(([pattern, replacement], index) => {
  const before = content.length;
  content = content.replace(pattern, replacement);
  const after = content.length;
  const matches = (content.match(pattern) || []).length;
  console.log(`${index + 1}. Applied ${pattern.source} -> ${replacement}: ${matches} remaining matches`);
});

console.log(`Final file size: ${content.length} characters`);
console.log(`Final � count: ${(content.match(/�/g) || []).length}`);

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');
console.log('File saved successfully!');