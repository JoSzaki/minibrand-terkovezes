# 🧮 Blogposzt Kalkulátor Javítási Template

## 📋 Feladat Leírás

**Cél**: A blogbejegyzés kalkulátorának javítása és optimalizálása a sikeres kocsibeálló kalkulátor mintájára.

## 🔧 Javítandó Hibák és Fejlesztések

### 1. JavaScript Szintaktikai Hibák
- [ ] `innerHTML:` → `innerHTML =` javítása
- [ ] `'divclass:` → `'<div class=` HTML tag formázás javítása
- [ ] Egyéb szintaktikai hibák kijavítása

### 2. Funkcionális Javítások
- [ ] **Input validáció** hozzáadása (terület ellenőrzése)
- [ ] **Magyar számformátum** implementálása (`toLocaleString('hu-HU')`)
- [ ] **Error handling** javítása (hibaüzenetek, edge case-ek)
- [ ] **Smooth scroll** az eredményhez

### 3. Kötelező Új Funkciók
- [ ] **Disclaimer szöveg hozzáadása**:
  ```
  ⚠️ Ez csak egy tájékoztató becslés! Teljesen pontos árajánlatot csak helyszíni felmérés után adhatunk.
  ```
- [ ] **"Pontos Árajánlat Kérése" gomb** hozzáadása kapcsolat oldalra navigálással:
  ```html
  <a href="/minibrand-terkovezes/kapcsolat" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">
    Pontos Árajánlat Kérése
  </a>
  ```

### 4. Pozicionálás
- [ ] **Kalkulátor áthelyezése** az első bekezdés utánra a tartalmi struktúrában
- [ ] Responsive design ellenőrzése és javítása

## 📁 Érintett Fájlok

### 1. `live/src/data/blogPosts.js`
**Módosítandó elemek**:
```javascript
// Keresendő blogposzt slug alapján
{
  slug: "[BLOGPOSZT_SLUG]",
  // ... egyéb mezők
  calculator: {
    title: "[KALKULÁTOR_CÍM]",
    inputs: [
      // Input mezők ellenőrzése és javítása
    ],
    script: `
      // JavaScript kód javítása itt
      function calculateCost() {
        // Input validáció
        if (area <= 0) {
          alert('Kérem adja meg a terület méretét!');
          return;
        }
        
        // Számítás logika
        // ...
        
        // Eredmény megjelenítés javított HTML-lel
        resultDiv.innerHTML = '<div class="font-semibold text-green-800">Becsült költség: ' + 
          Math.round(minPrice).toLocaleString('hu-HU') + ' - ' + 
          Math.round(maxPrice).toLocaleString('hu-HU') + ' Ft</div>' +
          '<div class="text-sm text-green-600 mt-2">*Az ár tartalmazza az anyagot és a munkadíjat</div>' +
          '<div class="text-sm text-yellow-700 mt-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">' +
          '⚠️ Ez csak egy tájékoztató becslés! Teljesen pontos árajánlatot csak helyszíni felmérés után adhatunk.</div>' +
          '<div class="mt-4 text-center">' +
          '<a href="/minibrand-terkovezes/kapcsolat" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">' +
          'Pontos Árajánlat Kérése' +
          '</a></div>';
        resultDiv.classList.remove('hidden');
        
        // Scroll to result
        setTimeout(() => {
          resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    `
  }
}
```

### 2. `live/src/pages/blog/[slug].astro`
**Ellenőrzendő**:
- onclick attribútum: `onclick="calculateCost()"`
- Script beágyazás: `<script set:html={calculator.script}></script>`

## 🧪 Tesztelési Lépések

### 1. Funkcionális Tesztek
- [ ] Kalkulátor betöltődik hibamentesen
- [ ] Input mezők kitölthetők
- [ ] "Számítás" gomb működik
- [ ] Eredmény megjelenik
- [ ] Magyar számformátum helyes
- [ ] Disclaimer szöveg megjelenik
- [ ] "Pontos Árajánlat Kérése" gomb navigál a kapcsolat oldalra

### 2. Browser Tesztek
- [ ] Chrome/Edge tesztelés
- [ ] Firefox tesztelés
- [ ] Mobile tesztelés

### 3. Console Hibák Ellenőrzése
- [ ] Nincsenek JavaScript hibák
- [ ] Nincsenek 404-es hibák (kivéve ismert, irreleváns)

## 📊 Siker Kritériumok

✅ **Teljes Siker**:
- JavaScript hibamentesen fut
- Kalkulátor eredményt ad
- Disclaimer szöveg megjelenik
- Ajánlatkérés gomb működik és navigál
- Mobile-on is működik

## 🚀 Telepítési Lépések

1. **Módosítások elvégzése**
2. **Git commit**:
   ```bash
   git add live/src/data/blogPosts.js live/src/pages/blog/[slug].astro
   git commit -m "🔧 [BLOGPOSZT_TITLE] kalkulátor javítás
   
   ✅ JavaScript szintaktikai hibák javítása
   ✅ Disclaimer és ajánlatkérés gomb hozzáadása
   ✅ Input validáció és magyar számformátum
   ✅ Kalkulátor pozicionálás javítása
   
   📋 Issue: #[ISSUE_NUMBER]"
   ```
3. **Git push** (GitHub Pages automatikusan újraépíti)
4. **Tesztelés élő oldalon**

## 📝 Referencia

**Sikeres implementáció**: [Kocsibeálló térkövezés blogposzt](https://joszaki.github.io/minibrand-terkovezes/blog/kocsibeallo-terkovezes-arak-tipusok-kivitelezes/)

**Kapcsolódó commit**: `cce0fd7` - "🔧 Kocsibeálló blogposzt kalkulátor javítás"