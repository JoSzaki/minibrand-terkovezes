// Safe pilot fix for the first blog post text without changing file encoding
// Edits specific lines based on current repository layout.
// Run with: node scripts/fix_first_post_pilot.js

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'live', 'src', 'data', 'blogPosts.js');

function main() {
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);

  // Quick sanity: check slug line roughly present near the top
  const slugIdx = lines.findIndex(l => l.includes('slug: "kocsibeallo-terkovezes-arak-tipusok-kivitelezes"'));
  if (slugIdx === -1) {
    console.error('Slug for first post not found. Aborting.');
    process.exit(1);
  }

  // Helper to replace line by absolute index if it somewhat matches an expected key
  const setLine = (idx, key, newLine) => {
    if (!lines[idx] || !lines[idx].includes(key)) return false;
    lines[idx] = newLine;
    return true;
  };

  // Header fields (search forward from slug)
  const replaceAfter = (startIdx, needle, newline) => {
    const idx = lines.findIndex((l, i) => i > startIdx && l.includes(needle));
    if (idx !== -1) lines[idx] = newline;
  };
  replaceAfter(slugIdx, 'title:', '    title: "Kocsibeálló térkövezés 2025: árak, típusok, kivitelezés",');
  replaceAfter(slugIdx, 'description:', '    description: "Kocsibeálló térkövezés 2025: árak, térkő típusok, kivitelezési lépések, alapozás, vízelvezetés. Szakértői tanácsok és ingyenes ajánlat.",');
  replaceAfter(slugIdx, 'excerpt:', '    excerpt: "Teljes útmutató kocsibeálló térkövezéshez 2025-ben. Árak, térkőtípusok, kivitelezés lépésről lépésre. Milyen térkövet válasszunk autónk számára?",');
  replaceAfter(slugIdx, 'category:', '    category: "Kocsibeálló térkövezés",');
  replaceAfter(slugIdx, 'author:', '    author: "Térkövezés Budapest",');

  // Hero image texts
  // Expect block starts a few lines later; we search forward for hero src and set alt/caption lines
  const heroIdx = lines.findIndex((l, i) => i > slugIdx && l.includes('src: "/images/hero-terkovezes.jpg"'));
  if (heroIdx !== -1) {
    replaceAfter(heroIdx - 1, 'alt:', '        alt: "Modern kocsibeálló térkövezés",');
    replaceAfter(heroIdx - 1, 'caption:', '        caption: "Professzionális kocsibeálló térkövezés - tartós és esztétikus megoldás"');
  }

  // First section: title + content
  const sec1TitleIdx = lines.findIndex((l, i) => i > slugIdx && l.includes('sections: ['));
  if (sec1TitleIdx !== -1) {
    replaceAfter(sec1TitleIdx, 'title:', '          title: "2025-ös árak és költségek",');
    // content block is next line; replace with clean HTML inside backticks
    {
      const html = `<p>A kocsibeálló térkövezés árai 2025-ben az anyagválasztástól és a terület méretétől függően <strong>8\u00A0000–25\u00A0000 Ft/m²</strong> között mozognak munkadíjjal együtt. Az árak változékonyságát számos tényező befolyásolja.</p>\n          <p>A költségek alakulását elsősorban a térkő típusa, a terület előkészítése, az alapozás mélysége és a vízelvezetési megoldások határozzák meg. Fontos tudni, hogy egy jól kivitelezett kocsibeálló 20–30 évig szolgálhat problémamentesen.</p>`;
      setLine(
        sec1TitleIdx + 3,
        'content:',
        '          content: ' + JSON.stringify(html) + ',',
      );
    }
  }

  // Infographic block
  const infoIdx = lines.findIndex((l, i) => i > slugIdx && l.includes('infographic: {'));
  if (infoIdx !== -1) {
    replaceAfter(infoIdx, 'title:', '            title: "Árak összetevői 2025-ben",');
    // Replace icons/titles/descriptions by scanning items
    let seen = 0;
    for (let i = infoIdx; i < Math.min(lines.length, infoIdx + 80); i++) {
      if (lines[i].includes('icon:')) {
        seen++;
        if (seen === 1) lines[i] = '                icon: "materials",';
        if (seen === 2) lines[i] = '                icon: "labor",';
        if (seen === 3) lines[i] = '                icon: "base",';
        if (seen === 4) lines[i] = '                icon: "drainage",';
        if (seen === 5) lines[i] = '                icon: "edging",';
        if (seen === 6) lines[i] = '                icon: "extra",';
      }
      if (seen === 1 && lines[i].includes('title:')) lines[i] = '                title: "Térkő anyagok",';
      if (seen === 1 && lines[i].includes('description:')) lines[i] = '                description: "Betonkő, természetes kő, antik térkő",';
      if (seen === 2 && lines[i].includes('title:')) lines[i] = '                title: "Munkadíj",';
      if (seen === 2 && lines[i].includes('description:')) lines[i] = '                description: "Földmunka, alapozás, lerakás",';
      if (seen === 4 && lines[i].includes('title:')) lines[i] = '                title: "Vízelvezetés",';
      if (seen === 4 && lines[i].includes('description:')) lines[i] = '                description: "Lejtések, csatornák kialakítása",';
      if (seen === 5 && lines[i].includes('title:')) lines[i] = '                title: "Szegélyek",';
      if (seen === 5 && lines[i].includes('description:')) lines[i] = '                description: "Betonszegély, kőszegély",';
      if (seen === 6 && lines[i].includes('title:')) lines[i] = '                title: "Extra költségek",';
      if (seen === 6 && lines[i].includes('description:')) lines[i] = '                description: "Engedélyek, tervezés, garancia",';
      if (seen === 6 && lines[i].includes('value:')) lines[i] = '                value: "5–15% felár"';
      if (seen >= 6 && lines[i].includes(']')) break;
    }
  }

  // Calculator block for first post
  const calcIdx = lines.findIndex((l, i) => i > slugIdx && l.includes('calculator: {'));
  if (calcIdx !== -1) {
    replaceAfter(calcIdx, 'title:', '      title: "Kocsibeálló térkövezés költségkalkulátor",');
    // Inputs
    replaceAfter(calcIdx, 'label:', '          label: "Kocsibeálló területe",');
    const paverLabelIdx = lines.findIndex((l, i) => i > calcIdx && l.trim().startsWith('label:'));
    replaceAfter(paverLabelIdx, 'label:', '          label: "Térkő típusa",');
    // Options
    const optBasic = lines.findIndex((l, i) => i > calcIdx && l.includes('{ value: "basic"'));
    if (optBasic !== -1) lines[optBasic] = '            { value: "basic", label: "Normál betontérkő (4 000 Ft/m²)", price: 4000 },';
    const optThick = lines.findIndex((l, i) => i > calcIdx && l.includes('{ value: "thick"'));
    if (optThick !== -1) lines[optThick] = '            { value: "thick", label: "Vastagított betontérkő (5 500 Ft/m²)", price: 5500 },';
    const optGranite = lines.findIndex((l, i) => i > calcIdx && l.includes('{ value: "granite"'));
    if (optGranite !== -1) lines[optGranite] = '            { value: "granite", label: "Gránit térkő (12 000 Ft/m²)", price: 12000 },';
    const optAntique = lines.findIndex((l, i) => i > calcIdx && l.includes('{ value: "antique"'));
    if (optAntique !== -1) lines[optAntique] = '            { value: "antique", label: "Antik térkő (9 000 Ft/m²)", price: 9000 }';
    // Alerts
    const alert1 = lines.findIndex((l, i) => i > calcIdx && l.includes("alert(") && l.includes('adja meg'));
    if (alert1 !== -1) lines[alert1] = "            alert('Kérem, adja meg a terület méretét!');";
    const alert2Idx = lines.findIndex((l, i) => i > (alert1 === -1 ? calcIdx : alert1) && l.includes('alert('));
    if (alert2Idx !== -1) lines[alert2Idx] = "            alert('Túl nagy terület! Nagyobb projektek esetén kérjen egyedi árajánlatot.');";
    // paverLabels
    const labelsIdx = lines.findIndex((l, i) => i > calcIdx && l.includes('const paverLabels ='));
    if (labelsIdx !== -1) {
      replaceAfter(labelsIdx, 'basic:', "            basic: 'Normál betontérkő',");
      replaceAfter(labelsIdx, 'thick:', "            thick: 'Vastagított betontérkő',");
      replaceAfter(labelsIdx, 'granite:', "            granite: 'Gránit térkő',");
      replaceAfter(labelsIdx, 'antique:', "            antique: 'Antik térkő'");
    }
    // Contact form payload
    const projectIdx = lines.findIndex((l, i) => i > calcIdx && l.includes('project:'));
    if (projectIdx !== -1) lines[projectIdx] = "              project: 'Kocsibeálló térkövezés',";
    const featuresIdx = lines.findIndex((l, i) => i > calcIdx && l.includes('features:'));
    if (featuresIdx !== -1) lines[featuresIdx] = "              features: needsDrainage ? 'Vízelvezetéssel' : 'Alap kivitelezés'";
    // Result HTML text lines
    const resultHtmlIdx = lines.findIndex((l, i) => i > calcIdx && l.includes('resultDiv.innerHTML'));
    if (resultHtmlIdx !== -1) {
      lines[resultHtmlIdx] = '          resultDiv.innerHTML = \'<div class="font-semibold text-green-800">Becsült költség: \' + ';
      // Update following static text parts by searching their markers
      const greenTextIdx = lines.findIndex((l, i) => i > resultHtmlIdx && l.includes('text-green-600'));
      if (greenTextIdx !== -1) {
        lines[greenTextIdx] = '            \'<div class="text-sm text-green-600 mt-2">*Az ár tartalmazza az anyagot és a munkadíjat</div>\' +';
      }
      const yellowWrapIdx = lines.findIndex((l, i) => i > resultHtmlIdx && l.includes('text-yellow-700'));
      if (yellowWrapIdx !== -1) {
        lines[yellowWrapIdx] = '            \'<div class="text-sm text-yellow-700 mt-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">\' +';
        const warnTextIdx = yellowWrapIdx + 1;
        if (lines[warnTextIdx]) {
          lines[warnTextIdx] = "            'Ez csak egy tájékoztató becslés! Teljesen pontos árajánlatot csak helyszíni felmérés után adhatunk.</div>' +";
        }
      }
      const btnTextIdx = lines.findIndex((l, i) => i > resultHtmlIdx && l.includes('Pontos'));
      if (btnTextIdx !== -1) lines[btnTextIdx] = "            'Pontos árajánlat kérése' +";
    }
  }

  const output = lines.join('\n');
  fs.writeFileSync(filePath, output, 'utf8');
  console.log('Pilot fix applied to first blog post.');
}

main();
