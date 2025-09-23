# Google Sheets Integráció Beállítása

Ez a dokumentum leírja, hogyan állítsd be a Google Sheets integrációt az ajánlatkérő űrlapokhoz.

## 1. Google Apps Script létrehozása

### Lépések:

1. **Nyisd meg a Google Sheets dokumentumot:**
   https://docs.google.com/spreadsheets/d/1ZZfR6iEkybgQ-GATKtIAvzXuxcLZxWzCvQKKST8K7Ro/edit?gid=9065713#gid=9065713

2. **Bővítmények → Apps Script**

3. **Töröld az alapértelmezett kódot és illeszd be ezt:**

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Aktuális dátum és idő
    const timestamp = new Date();

    // Adatok hozzáadása a spreadsheet-hez
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.area || '',
      data.timeline || '',
      data.message || '',
      data.privacy || 'false',
      data.source || 'website'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Sikeres beküldés!'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'GET kérés nem támogatott'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. **Mentés (Ctrl+S)**

5. **Telepítés → Új telepítés**
   - **Típus**: Webalkalmazás
   - **Végrehajtás mint**: Én
   - **Hozzáférés**: Bárki
   - **Telepítés**

6. **Másold ki a Web App URL-t**

## 2. Spreadsheet beállítása

A Google Sheets első sorába írd be ezeket a fejléceket:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Dátum | Név | Email | Telefon | Szolgáltatás | Terület (m²) | Határidő | Üzenet | Adatvédelem | Forrás |

## 3. Weboldal konfigurálása

1. **Nyisd meg:** `live/src/config/google-sheets.js`

2. **Cseréld le a placeholder URL-t:**
```javascript
export const GOOGLE_SHEETS_CONFIG = {
    url: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
    enabled: true,
    fallbackBehavior: 'alert'
};
```

3. **Frissítsd a form scripteket:**
   - `live/src/pages/kapcsolat.astro` (344. sor)
   - `live/src/components/ContactForm.astro` (149. sor)

   Cseréld le: `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'`
   Erre: `'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'`

## 4. Tesztelés

1. **Build a projektet:**
   ```bash
   cd live && npm run build
   ```

2. **Küldjél teszt űrlapot**

3. **Ellenőrizd a Google Sheets-ben az adatokat**

## 5. Hibaelhárítás

### Gyakori problémák:

1. **CORS hiba**: Az Apps Script automatikusan kezeli
2. **Hozzáférés megtagadva**: Ellenőrizd a telepítési beállításokat
3. **Adatok nem érkeznek**: Ellenőrizd a script URL-t és a fejléceket

### Debug tippek:

1. **Konzol naplók**: F12 → Console
2. **Apps Script naplók**: Apps Script → Execution transcript
3. **Network tab**: Ellenőrizd a HTTP kéréseket

## 6. Biztonság

- Az Apps Script URL nem tartalmaz érzékeny adatokat
- A form validáció kliens és szerver oldalon is működik
- HTTPS kapcsolat kötelező

## 7. Karbantartás

- **Rendszeres mentés**: A Google Sheets automatikus
- **Script frissítés**: Új verzió telepítése szükséges
- **Monitoring**: Ellenőrizd a bejövő adatokat

---

**Fontos:** A `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` placeholder-eket cseréld le a tényleges URL-re!