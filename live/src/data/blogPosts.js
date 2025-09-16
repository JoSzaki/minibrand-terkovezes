// Térkövezési blog posts data
export const blogPosts = [
  // Kocsibeálló térkövezés témák (3 blog)
  {
    slug: "kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
    title: "Kocsibeálló térkövezés 2025: Árak, típusok, kivitelezés",
    description: "Kocsibeálló térkövezés 2025: árak, térkő típusok, kivitelezési lépések, alapozás, vízelvezetés. Szakértői tanácsok és ingyenes ajánlat.",
    excerpt: "Teljes útmutató kocsibeálló térkövezéshez 2025-ben. Árak, térkőtípusok, kivitelezés lépésről lépésre. Milyen térkővet válasszunk autónk számára?",
    date: "2025-03-20",
    category: "Kocsibeálló térkövezés",
    readTime: "16 perc",
    author: "Térkövezés Budapest",
    image: "/blog/kocsibeallo-terkovezes-arak.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Modern kocsibeálló térkövezés",
        caption: "Professzionális kocsibeálló térkövezés - tartós és esztétikus megoldás"
      }
    },
    content: {
      sections: [
        {
          title: "2025-ös Árak és Költségek",
          content: `<p>A kocsibeálló térkövezés árai 2025-ben az anyagválasztástól és a terület méretétől függően <strong>8.000-25.000 Ft/m2</strong> között mozognak munkadíjjal együtt. Az Árak jelentős változékonyságát számos tényező befolyásolja.</p>
          
          <p>A költségek alakulását elsősorban a térkő típusa, a terület előkőszítése, az alapozás mélysége és a vízelvezetési megoldások határozzák meg. Fontos tudni, hogy egy jól kivitelezett kocsibeálló 20-30 évig szolgálhat problémamentesen.</p>`,
          infographic: {
            title: "Árak összetevői 2025-ben",
            items: [
              {
                icon: "🏗️",
                title: "Térkő anyagok",
                description: "Betonkő, természetes kő, antik térkő",
                value: "3.000-12.000 Ft/m2"
              },
              {
                icon: "🏗️",
                title: "Munkadíj",
                description: "Földmunka, alapozás, lerakás",
                value: "4.000-8.000 Ft/m2"
              },
              {
                icon: "📦",
                title: "Alapanyagok",
                description: "Kavics, homok, cement",
                value: "1.000-3.000 Ft/m2"
              },
              {
                icon: "🏗️",
                title: "Vízelvezetés",
                description: "Lejtések, csatornák kialakítása",
                value: "2.000-5.000 Ft/m2"
              },
              {
                icon: "📦",
                title: "Szegélyek",
                description: "Betonszegély, kőszegély",
                value: "1.500-3.000 Ft/fm"
              },
              {
                icon: "🏗️",
                title: "Extra költségek",
                description: "Engedélyek, tervezés, garancia",
                value: "5-15% felár"
              }
            ]
          }
        },
        {
          title: "Térkő Típusok Összehasonlítása",
          content: `<p>A kocsibeállók térkövezésénél alapvető szempont a <strong>teherbírás</strong> és a <strong>tartósség</strong>. Az autók súlya és a keréknyomés miatt speciális követelményeknek kell megfelelni.</p>`,
          table: {
            headers: ["Térkő típus", "ár (Ft/m2)", "Teherbírás", "Tartósság", "Karbantartás", "Ajánlott használat"],
            rows: [
              ["Normál betontérkő", "3.000-5.000", "Közepes", "15-20 év", "Minimális", "Kisebb autók"],
              ["Vastagított betontérkő", "4.000-7.000", "Magas", "20-25 év", "Minimális", "Minden autótípus"],
              ["Gránit térkő", "8.000-15.000", "Nagyon magas", "50+ év", "Alacsony", "Luxus kocsibeállók"],
              ["Antik térkő", "6.000-12.000", "Magas", "30-40 év", "Közepes", "Karakteres megjelenés"],
              ["Klinkertégla", "5.000-9.000", "Közepes", "25-30 év", "Közepes", "Vidéki házak"]
            ]
          }
        },
        {
          title: "Teherbírási Követelmények",
          content: `<p>A kocsibeálló térkövezésénél kritikus fontosságú a megfelelő teherbírás biztosítása. Az átlagos személyautó keréknyomása <strong>4-6 kg/cm2</strong>, még egy teli SUV esetében ez akár <strong>8-10 kg/cm2</strong> is lehet.</p>
          
          <p>A térkövek vastagságának minimum <strong>6 cm-nek</strong> kell lennie kocsibeállóhoz, de ajánlott a <strong>8 cm-es</strong> vastagség a hosszabb élettartam érdekében.</p>`
        }
      ]
    },
    howTo: {
      title: "Kocsibeálló Térkövezés Lépései",
      steps: [
        {
          title: "Tervezés és méretek felvétele",
          description: "Első lépésben felmérjük a területet, megtervezzük a lejtéseket és a vízelvezetést. Fontos figyelembe venni az autó méreteit és a manőverező teret.",
          tips: "Hagyjunk legalább 50 cm szabadségot az autó körül minden irányban!"
        },
        {
          title: "Földmunka és kiásás",
          description: "40-50 cm mélységig kiássuk a területet. Az eltávolított földet elszállítjuk vagy a kert másik részén hasznosítjuk.",
          tips: "Esős időben ne végezzünk földmunkát, mert a tömörítés nem lesz megfelelő."
        },
        {
          title: "Alapozás építése",
          description: "20-25 cm vastagságban 0-32 mm-es zúzalékból készítünk szilárd alapot. Rétegekben tömörítsük vibrálólappal.",
          tips: "Minden 10 cm-es réteget külön-külön tömörítsünk a megfelelő stabilitás érdekében."
        },
        {
          title: "Lejtések kialakítása",
          description: "2-3%-os lejtést alakítunk ki a vízelvezetés érdekében. Ez méterenként 2-3 cm esést jelent.",
          tips: "A lejtés iránya mindig a ház falától elfelé mutasson!"
        },
        {
          title: "Záróréteg és térkőágyas",
          description: "3-4 cm vastag homokágyat készítünk, amit leszórunk és egyengetünk. Erre kerülnek a térkövek.",
          tips: "A homokágyas legyen száraz és egyenletes - nedves homokkal neház precízen dolgozni."
        },
        {
          title: "Térkövezés",
          description: "A térkővet mintázat szerint rakjuk le, ügyelve a megfelelő házagokra. Gumikalapáccsal igazítjuk a szintet.",
          tips: "Mindig a már lerakott térkőről dolgozzunk, ne lépjünk a homokágyasra!"
        },
        {
          title: "Részkitöltés és tömörítés",
          description: "A házagokat kvarchomokkal töltjük ki, majd vibrálólappal tömörítjük az egész felületet.",
          tips: "A végső tömörítés előtt ellenőrizzük, hogy minden házag tele legyen homokkal."
        }
      ]
    },
    faq: [
      {
        question: "Milyen vastag legyen a térkő kocsibeállóhoz?",
        answer: "Minimum <strong>6 cm vastag</strong> térkővet ajánlunk kocsibeállóhoz, de ideális a <strong>8 cm-es vastagség</strong>. Ez biztosítja a megfelelő teherbírást és a hosszú élettartamot még nehezebb járművek esetében is."
      },
      {
        question: "Mennyi ideig tart elkészíteni egy kocsibeálló térkövezést?",
        answer: "Egy átlagos (20-30 m2) kocsibeálló térkövezése <strong>3-5 munkanap</strong> alatt elkészül. Ez függ az időjárástól, a terep adottságaitól és a választott térkő típusától. A széradési idék miatt nem szabad sietni."
      },
      {
        question: "Székség van-e engedélyre kocsibeálló térkövezéshez?",
        answer: "általában <strong>nincs szükség építési engedélyre</strong> a kocsibeálló térkövezéshez, ha nem változtatjuk meg a telekhatárokat és nem érintjük a közterületeket. Nagyobb projektek esetén érdemes az önkormányzatnál érdeklődni."
      },
      {
        question: "Hogyan előzzem meg a térkövek elsüllyedését?",
        answer: "A megfelelő <strong>alapozás</strong> a kulcs: minimum 20 cm vastag, rétegekben tömörített zúzalék alapozás szükséges. Fontos a jó vízelvezetés és a szegélyek megfelelő rögzítése is."
      },
      {
        question: "Mit tegyek, ha repedt vagy süllyedt térkőveim vannak?",
        answer: "Kisebb süllyedések esetén a térkővet ki kell szedni, a homokágyat ki kell egyengetni és újra le kell rakni. Nagyobb problémák esetén az alapozást is ellenőrizni kell. A javítást ne halasszuk, mert tovébb romolhat a helyzet."
      },
      {
        question: "Mennyi a térkövezés garanciaideje?",
        answer: "Szakszeré kivitelezés esetén <strong>5-10 év garancia</strong> szokásos a munkéra. Az anyagokra a gyérté adja a garanciát. Fontos, hogy a karbantartási utasításokat betartsuk a garancia érvényességéhez."
      }
    ],
    calculator: {
      title: "Kocsibeálló Térkövezés Költségkalkulétor",
      inputs: [
        {
          id: "area",
          label: "Kocsibeálló területe",
          placeholder: "Pl. 25",
          unit: "m2"
        },
        {
          id: "paverType",
          label: "Térkő típusa",
          type: "select",
          options: [
            { value: "basic", label: "Normál betontérkő (4.000 Ft/m2)", price: 4000 },
            { value: "thick", label: "Vastagított betontérkő (5.500 Ft/m2)", price: 5500 },
            { value: "granite", label: "Gránit térkő (12.000 Ft/m2)", price: 12000 },
            { value: "antique", label: "Antik térkő (9.000 Ft/m2)", price: 9000 }
          ]
        },
        {
          id: "drainage",
          label: "Vízelvezetés szükséges?",
          type: "checkbox"
        }
      ],
      script: `
        function calculateCost() {
          const area = parseFloat(document.getElementById('area').value) || 0;
          const paverType = document.getElementById('paverType').value || 'basic';
          const needsDrainage = document.getElementById('drainage').checked;
          
          if (area <= 0) {
            alert('Kérem adja meg a terület méretét!');
            return;
          }
          
          const prices = {
            basic: 8000,
            thick: 11000,  
            granite: 22000,
            antique: 18000
          };
          
          let basePrice = prices[paverType] * area;
          let drainagePrice = needsDrainage ? area * 3000 : 0;
          let totalPrice = basePrice + drainagePrice;
          
          let minPrice = totalPrice * 0.9;
          let maxPrice = totalPrice * 1.1;
          
          const resultDiv = document.getElementById('calculator-result');
          resultDiv.innerHTML = '<div class="font-semibold text-green-800">Becsélt költség: ' + 
            Math.round(minPrice).toLocaleString('hu-HU') + ' - ' + 
            Math.round(maxPrice).toLocaleString('hu-HU') + ' Ft</div>' +
            '<div class="text-sm text-green-600 mt-2">*Az ér tartalmazza az anyagot és a munkadíjat</div>' +
            '<div class="text-sm text-yellow-700 mt-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">' +
            '⚠️Ez csak egy téjókoztaté becslés! Teljesen pontos érajánlatot csak helyszíni felmérés utén adhatunk.</div>' +
            '<div class="mt-4 text-center">' +
            '<a href="/kapcsolat" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">' +
            'Pontos érajánlat Kérése' +
            '</a></div>';
          resultDiv.classList.remove('hidden');
          
          // Scroll to result
          setTimeout(() => {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }`
    },
    relatedArticles: [
      {
        title: "Hogyan válasszunk térkővet kocsibeállóhoz?",
        slug: "/blog/hogyan-valasszunk-terkovet",
        description: "Praktikus útmutató a megfelelő térkő kiválasztásához"
      },
      {
        title: "Térkő vs aszfalt vs beton kocsibeállók Összehasonlítás",
        slug: "/blog/terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas",
        description: "Részletes Összehasonlítás a különböző burkolat típusokról"
      },
      {
        title: "Térkövezés karbantartás és javítás szakértői tippek",
        slug: "/blog/terkovezes-karbantartas-javitas-szakertoi-tippek",
        description: "Hogyan tartsuk karban és javítsuk térkövezett felületeinket"
      }
    ]
  },
  {
    slug: "hogyan-valasszunk-terkovet",
    title: "Térkő választás kocsibeállóhoz: útmutató 2025",
    description: "Térkő választás kocsibeállóhoz: teherbírás, csúszásmentesség, fagyállóság, karbantartás, költségek. Szakértői tippek autósoknak 2025."
    excerpt: "Praktikus útmutató térkő választáshoz kocsibeállókhoz. Teherbírás, csúszásmentesség, karbantartás - minden, amit tudni kell a megfelelő döntéshez.",
    date: "2025-03-15",
    category: "Kocsibeálló térkövezés", 
    readTime: "12 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terko-valasztas-kocsibeallo.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Különböző térkő típusok kocsibeállóhoz",
        caption: "Térkő választás: a megfelelő típus kiválasztása kritikus fontosságú"
      }
    },
    content: {
      sections: [
        {
          title: "Miért kritikus a helyes térkő választás?",
          content: `<p>A kocsibeállók térkövezésénél nem elég csak az esztétikai szempontokat figyelembe venni. Az <strong>autók súlya, dinamikus terhelése és az időjárás viszontagságai</strong> olyan követelményeket támasztanak, amelyeknek csak speciálisan alkalmas térkő típusok tudnak megfelelni.</p>
          
          <p>Egy rossz döntés következményei évekig tartó problémákat okozhatnak: süllyedő térkövek, repedések, vízállás és drága javítási munkálatok. éppen ezért fontos, hogy alaposan átgondoljuk a választást.</p>`,
          infographic: {
            title: "Térkő Választási Szempontok",
            items: [
              {
                icon: "🏗️",
                title: "Teherbírás",
                description: "Minimum 6 cm vastagség, megfelelő tömörség",
                value: "Kritikus"
              },
              {
                icon: "🏗️",
                title: "Fagyállóség",
                description: "F150 vagy magasabb fagyállóségi osztély",
                value: "Kötelező"
              },
              {
                icon: "🏗️",
                title: "Csúszásmentesség",
                description: "R10-R13 csúszásellenállói kategéria",
                value: "Fontos"
              },
              {
                icon: "🏗️",
                title: "Esztétika",
                description: "Harménia a ház stílusúval",
                value: "Szubjektév"
              },
              {
                icon: "🏗️",
                title: "Költség/érték arény",
                description: "Hosszé tévé befektetés szemlélet",
                value: "ésszeré"
              },
              {
                icon: "🏗️",
                title: "Karbantartás",
                description: "Minimális gondozés igény",
                value: "Praktikus"
              }
            ]
          }
        },
        {
          title: "Térkő Típusok Részletes Összehasonlítása",
          content: `<p>Az alébbi táblázat segít eligazodni a különböző térkő típusok tulajdonségai között. Minden típusnak megvannak a maga előnyei és hátrányai.</p>`,
          table: {
            headers: ["Tulajdonség", "Betontérkő", "Gránit térkő", "Antik térkő", "Klinkertégla", "Természetes ké"],
            rows: [
              ["Teherbírás", "Közepes-Magas", "Kiváló", "Jó", "Közepes", "Véltozé"],
              ["Fagyállóség", "F150-F200", "F200+", "F150", "F100-F150", "Véltozé"],
              ["Csúszásmentesség", "R10-R11", "R11-R13", "R9-R11", "R10-R12", "R9-R13"],
              ["ár (Ft/m2)", "3.000-7.000", "8.000-18.000", "6.000-14.000", "5.000-10.000", "4.000-25.000"],
              ["Vélaszték", "Nagy", "Közepes", "Nagy", "Közepes", "ériési"],
              ["Karbantartás", "Minimális", "Minimális", "Közepes", "Közepes", "Véltozé"],
              ["élettartam", "15-25 év", "50+ év", "25-40 év", "20-30 év", "30-100+ év"],
              ["Kérnyezeti hatás", "Alacsony", "Közepes", "Magas (újrahaszn.)", "Közepes", "Véltozé"]
            ]
          }
        },
        {
          title: "Betontérkő - A Népszeré Vélasztés",
          content: `<p>A <strong>betontérkő</strong> a leggyakrabban választott megoldás kocsibeállókhoz, és ennek jó okai vannak:</p>
          
          <ul>
            <li><strong>Kiváló ér-érték arény</strong>: 3.000-7.000 Ft/m2 között</li>
            <li><strong>Széles vélaszték</strong>: szémtalan szén, forma és mintézat</li>
            <li><strong>Jó teherbírás</strong>: 6-8 cm vastagségban</li>
            <li><strong>Könnyű karbantartás</strong>: mosés, esetleg impregnálás</li>
            <li><strong>Gyors beszerzhetéség</strong>: minden épétéanyag kereskedésben</li>
          </ul>
          
          <p><em>Tipp:</em> Vélasszunk legalább 6 cm vastag, F150 fagyállóségé betontérkővet kocsibeállóhoz!</p>`
        },
        {
          title: "Gránit Térkő - A Prémium Megoldés",
          content: `<p>A <strong>gránit térkő</strong> a legmagasabb minőségi kategériét képviseli:</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <h4 class="font-semibold text-blue-800 mb-2">⚠️Gránit térkő előnyei:</h4>
            <ul class="text-blue-700">
              <li>Gyakorlatilag elpusztíthatatlan (50+ év)</li>
              <li>Kiváló fagyállóség és vegyszerállóség</li>
              <li>Természetes szépség és egyediség</li>
              <li>értéktartó befektetés</li>
              <li>Minimális karbantartás igény</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
            <h4 class="font-semibold text-orange-800 mb-2">⚠️Figyelembe veendő hátrányok:</h4>
            <ul class="text-orange-700">
              <li>Magas beszerzési költség (8.000-18.000 Ft/m2)</li>
              <li>Nehezebb megmunkélős, drégébb építés</li>
              <li>Korlátozott szénvélaszték</li>
              <li>Hosszabb szállótési idék</li>
            </ul>
          </div>`
        }
      ]
    },
    howTo: {
      title: "Térkő Kiválasztási útmutató Lépésrél Lépésre",
      steps: [
        {
          title: "Igények és költségvetés meghatérozésa",
          description: "Első lépésként hatérozzuk meg a rendelkezésre álló költségvetést és a fébb elvérésainkat (tartósség, megjelenés, karbantartás).",
          tips: "Szémoljunk 20-30 éves távlatban - a drégébb, de tartósabb megoldás gyakran gazdaségosabb!"
        },
        {
          title: "Terhelési viszonyok felmérése",
          description: "Gondoljuk ét, milyen járművek fogjók hasznélni a kocsibeállót: csak személyautók vagy esetleg kisteherautó, lakékocsi is?",
          tips: "Nehezebb járművekhez mindenképpen 8 cm vastag térkővet válasszunk!"
        },
        {
          title: "Helyi kléma figyelembevétele",
          description: "Magyarorszégon minimum F150 fagyállóségé térkővet válasszunk. Hegyvidéki területeken F200 ajánlott.",
          tips: "A fagyállóség nem opcionális - egy rossz tél tönkreteheti a nem megfelelő térkővet!"
        },
        {
          title: "épétőszeti harménia ellenőrzése",
          description: "A térkő széne és stílusa illeszkedjen a ház és a kert ésszhatáséhoz. Kérjónk mintadarabokat!",
          tips: "Napfényben és esében is nézzék meg a mintákat - sokszor mésképp néznek ki!"
        },
        {
          title: "Szakárté véleményének kikérése",
          description: "Konzultéljunk tapasztalt térkővezével, aki ismeri a helyi viszonyokat és tapasztalatait megoszthatja.",
          tips: "Egy jó szakember megspérolhatja nekénk a késébbi problémákat és extra költségeket!"
        },
        {
          title: "Végsé döntés és beszerzés",
          description: "A fenti szempontok alapjón hozzuk meg a döntést. Rendeljónk 5-10% tartalékot a végési hulladékra!",
          tips: "Egy szállótménybél véséroljunk mindent - a különböző gyértési tételek között lehet érnyalatnyi eltérés!"
        }
      ]
    },
    faq: [
      {
        question: "Melyik a legjobb térkő típus kocsibeállóhoz?",
        answer: "Nincs univerzélisan legjobb térkő típus. Az <strong>átlagos csalédi házhoz 6-8 cm vastag betontérkő</strong> kiváló választás ér-érték arényban. <strong>Prémium megoldáshoz gránit térkő</strong>, még <strong>egyedi megjelenéshez antik térkő</strong> ajánlott."
      },
      {
        question: "Mennyivel drégébb a vastagabb térkő?",
        answer: "A <strong>8 cm vastag térkő általában 20-30%-kal kerél többe</strong> mint a 6 cm-es, de a megnévelt tartósség és teherbírás miatt hosszú tévon megtérélhet. Nehezebb járművek esetén kötelező a vastagabb verzié."
      },
      {
        question: "Csőszés a térkő esés időben?",
        answer: "A <strong>megfelelően kiválasztott térkő nem csúszós</strong>. Keressék az R10 vagy magasabb csúszásellenállói besorolésé termékeket. A sima felületé térkövek valéban csúszósak lehetnek!"
      },
      {
        question: "Hogyan tudom ellenőrizni a térkő minőségét?",
        answer: "Ellenérizzék a <strong>CE jelélőst, a fagyállóségi osztélyt (min. F150)</strong> és a <strong>szilárdségot (min. 50 MPa)</strong>. Kérjók el a mőszaki adatlapot és a megfelelőségi nyilatkozatot!"
      },
      {
        question: "Mikor érdemes antik térkővet vélasztani?",
        answer: "<strong>Antik térkő</strong> akkor jó választás, ha <strong>környezetbarát megoldást</strong> szeretnénk, <strong>egyedi megjelenést</strong> keresünk, vagy a ház stílusa megköveteli. Figyelni kell a tisztaségra és a sérélősekre!"
      },
      {
        question: "Milyen karbantartást igényel a térkő?",
        answer: "A <strong>betontérkő minimális karbantartást</strong> igényel: évente 1-2x mosés, szükség esetén impregnálás. <strong>Természetes kövek</strong> esetén évente érdemes impregnálni és a házagokat ellenőrizni."
      }
    ],
    howTo: {
      title: "Térkő választási útmutató lépésről lépésre",
      steps: [
        {
          title: "Helyszén felmérése és igények meghatérozésa",
          description: "Mérjók fel a terület nagységét, vizsgéljuk meg a talaj éllapotét és hatérozzuk meg a terhelési igényeket.",
          tips: "Kocsibeállóhoz minimum 6 cm vastag térkő szükséges. Neház járművekhez (teherautó, lakéautó) 8 cm javasolt."
        },
        {
          title: "Költségkeret és prioritésok meghatérozésa",
          description: "Hatérozzuk meg a rendelkezésre álló költségkeretet és rangsoroljuk a fontosségi szempontokat (ér, esztétika, tartósség).",
          tips: "Szémétsunk munkadíjjal együtt 8.000-20.000 Ft/m2 között. A drégébb térkő hosszú tévon gyakran gazdaségosabb."
        },
        {
          title: "Térkő típusénak kiválasztása",
          description: "A helyszín és költségkeret alapjón válasszuk ki a legmegfelelőbb térkő típust (beton, gránit, antik, természetes kő).",
          tips: "Betontérkő a leggyakoribb választás jó ér-érték arénya miatt. Prémium megoldáshoz gránit térkő."
        },
        {
          title: "Szének és minták tervezése",
          description: "Vélasszunk olyan színeket és mintézatot, amely harmonizél az épület stílusúval és a környezettel.",
          tips: "Vilégos színek jobban mutatjók a szennyezédést, de kevésbé melegszenek fel nyéron. Sétét színek praktikusabbak."
        },
        {
          title: "Minőségi paraméterek ellenőrzése",
          description: "Ellenérizzék a térkő mőszaki adatait: fagyállóség (min. F150), szilárdség (min. 50 MPa), csúszásmentesség.",
          tips: "Kérjók el a mőszaki adatlapot és a megfelelőségi nyilatkozatot. CE jelélős kötelező!"
        },
        {
          title: "Mennyiség kalkulélősa és megrendelés",
          description: "Szémétsuk ki a pontos mennyiséget, adjunk hozzé 8-10% végési hulladékot és rendeljók meg a térkővet.",
          tips: "Rendeljónk egyszerre mindent ugyanabbél a gyértési tételbél a szénegyezés miatt."
        },
        {
          title: "Kivitelezé kiválasztása és étemezés",
          description: "Vélasszunk tapasztalt kivitelezét, egyeztessék az étemezést és kőszétsék elé a helyszínt.",
          tips: "Kérjónk referenciékat és nézzénk meg korébbi munkékat. Tavaszi-őszi időszak a legideálisabb."
        }
      ]
    },
    calculator: {
      title: "Térkő Választási Segéd",
      inputs: [
        {
          id: "usage",
          label: "Milyen járművek hasznéljók?",
          type: "select",
          options: [
            { value: "car", label: "Csak személyautó", weight: 1 },
            { value: "suv", label: "SUV/crossover", weight: 1.3 },
            { value: "van", label: "Kisteherautó/lakéautó", weight: 1.8 },
            { value: "truck", label: "Neház jórmé", weight: 2.5 }
          ]
        },
        {
          id: "budget",
          label: "Költségvetés kategéria",
          type: "select", 
          options: [
            { value: "low", label: "Gazdaségos (3-6K Ft/m2)", min: 3000, max: 6000 },
            { value: "mid", label: "Közepes (6-12K Ft/m2)", min: 6000, max: 12000 },
            { value: "high", label: "Prémium (12K+ Ft/m2)", min: 12000, max: 25000 }
          ]
        },
        {
          id: "style",
          label: "Preferélt stílus",
          type: "select",
          options: [
            { value: "modern", label: "Modern, tiszta vonalak" },
            { value: "classic", label: "Klasszikus, időtálló" },
            { value: "rustic", label: "Rusztikus, természetes" },
            { value: "unique", label: "Egyedi, különleges" }
          ]
        }
      ],
      script: `
        function calculateCost() {
          const usage = document.getElementById('usage').value;
          const budget = document.getElementById('budget').value;
          const style = document.getElementById('style').value;
          
          let recommendation = '';
          let thickness = '6 cm';
          let paverType = '';
          
          // Determine thickness based on usage
          if (usage === 'truck') {
thickness = '8 cm (kötelező)';
          } else if (usage === 'van') {
thickness = '8 cm (ajánlott)';
          } else if (usage === 'suv') {
thickness = '6-8 cm';
          } else {
thickness = '6 cm';
          }
          
          // Determine paver type based on budget and style
          if (budget === 'high') {
            if (style === 'modern') {
paverType = 'Gránit térkő vagy prémium betontérkő';
            } else if (style === 'rustic') {
paverType = 'Természetes ké vagy antik térkő';
            } else {
paverType = 'Gránit térkő';
            }
          } else if (budget === 'mid') {
            if (style === 'rustic') {
paverType = 'Antik térkő vagy klinkertégla';
            } else {
paverType = 'Prémium betontérkő';
            }
          } else {
paverType = 'Betontérkő (F150 fagyállóség)';
          }
          
recommendation = '<h4 class="font-semibold text-green-800 mb-3">Ajánlott megoldás:</h4>' +
            '<ul class="text-green-700 space-y-2">' +
            '<li><strong>Térkő típus:</strong> ' + paverType + '</li>' +
            '<li><strong>Vastagség:</strong> ' + thickness + '</li>' +
            '<li><strong>Kötelező:</strong> Min. F150 fagyállóség</li>' +
            '<li><strong>Ajánlott:</strong> R10+ csúszásellenálló</li>' +
            '</ul>';
          
          const resultDiv = document.getElementById('calculator-result');
          resultDiv.innerHTML = recommendation;
          resultDiv.classList.remove('hidden');
        }`
    },
    relatedArticles: [
      {
        title: "Kocsibeálló térkövezés 2025: Árak, típusok, kivitelezés",
        slug: "/blog/kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
        description: "Komplex útmutató kocsibeálló térkövezéshez 2025-ben"
      },
      {
        title: "Térkővezés karbantartás és javítás szakértői tippek",
        slug: "/blog/terkovezes-karbantartas-javitas-szakertoi-tippek",
        description: "Professzionális tanácsok a térkövezett felületek karbantartásához"
      },
      {
        title: "Térkő vs aszfalt vs beton kocsibeállók Összehasonlítás",
        slug: "/blog/terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas",
        description: "Melyik burkolat típus a legjobb választás?"
      }
    ]
  },
  {
    slug: "kocsibeallo-vizelvezetés-terkovezes",
    title: "Kocsibeálló vízelvezetés térkövezésnél - Hibák és megoldások",
    description: "Vízelvezetés kocsibeálló térkövezésnél → Lejtések → Csatornák → Víznyelők → Gyakori hibák → Javítási módszerek → Szakértői megoldások.",
    excerpt: "Vízelvezetési problémák és megoldások kocsibeálló térkövezésnél. Lejtések, csatornák tervezése és gyakori hibák elkerülése.",
    date: "2025-03-10",
    category: "Kocsibeálló térkövezés",
    readTime: "14 perc",
    author: "Térkövezés Budapest",
    image: "/blog/vizelvezetés-kocsibeallo.jpg",
    relatedArticles: [
      {
        title: "Kocsibeálló térkövezés 2025: Árak, típusok, kivitelezés",
        slug: "/blog/kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
        description: "Komplex útmutató kocsibeálló térkövezéshez 2025-ben"
      },
      {
        title: "Kocsibeálló vízelvezetés térkövezéssel: Rendszerek és megoldások 2025",
        slug: "/blog/kocsibeallo-vizellevezetes-terkovezes-rendszerek",
        description: "Professzionális vízelvezetési rendszerek és megoldások"
      },
      {
        title: "Térkővezés karbantartás és javítás szakértői tippek",
        slug: "/blog/terkovezes-karbantartas-javitas-szakertoi-tippek",
        description: "Hogyan tartsuk karban térkövezett felületeinket"
      }
    ]
  },

  // Kocsibeálló vízelvezetés témák
  {
    slug: "kocsibeallo-vizellevezetes-terkovezes-rendszerek",
    title: "Kocsibeálló vízelvezetés térkövezéssel: Rendszerek és megoldások 2025",
    description: "Kocsibeálló vízelvezetés térkövezéssel → Rendszerek → Lejtések → Vízelvezetési árkok → Infographic útmutatók → Árak → Karbantartás → Szakértői tanácsok",
    excerpt: "Professzionális vízelvezetési rendszerek kocsibeállóhoz térkövezéssel. Lejtések, árkok, megoldások, árak és karbantartási tippek 2025-ben.",
    date: "2025-03-15",
    category: "Kocsibeálló térkövezés",
    readTime: "18 perc",
    author: "Térkövezés Budapest",
    image: "/blog/vizelelvezetes-terkovezes.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Kocsibeálló vízelvezetés térkövezéssel",
        caption: "Professzionális vízelvezetési rendszer térkővezett kocsibeállóban"
      }
    },
    content: {
      sections: [
        {
          title: "Vízelvezetés Fontossága Térkövezésnél",
          content: `<p>A <strong>vízelvezetés</strong> az egyik legkritikusabb szempont térkővezett kocsibeállók esetében. A helytelen vízelvezetés következményei súlyosak lehetnek:</p>
          
          <ul>
            <li>⚠️<strong>Fagykérok</strong>: télen a felszén alatt rekedt víz megfagyva szétrepeszti a térköveket</li>
            <li>⚠️<strong>Véztelenedés</strong>: a térkövek alatt gyélő víz kimossa az aljzatot</li>
            <li>⚠️<strong>épületkárok</strong>: rossz lejtés esetén víz folyhat az épület felé</li>
            <li>⚠️<strong>Egészségügyi problémák</strong>: álló víz szúnyogokat és baktériumokat vonz</li>
          </ul>
          
          <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <p class= "text-red-700"><strong>⚠️Fontos:</strong> Egy rosszul megoldott vízelvezetés 3-5 év alatt teljesen tönkreteheti a térkövezést!</p>
          </div>`,
          infographic: {
            title: "Vízelvezetési Problémék és Költségek",
            items: [
              {
                icon: "🏗️",
                title: "Fagykérok",
                description: "Télen berekesztett víz kárai",
                value: "300.000-800.000 Ft"
              },
              {
                icon: "🏗️",
                title: "épületkárok",
                description: "Rossz lejtés miatti vízkárok",
                value: "500.000-2.000.000 Ft"
              },
              {
                icon: "🏗️",
                title: "Utólagos javítás",
                description: "Térkövezés teljes felújítása",
                value: "15.000-30.000 Ft/m2"
              },
              {
                icon: "🏗️",
                title: "Megelézés",
                description: "Helyes vízelvezetés költsége",
                value: "2.000-5.000 Ft/m2"
              }
            ]
          }
        },
        {
          title: "Vízelvezetési Rendszerek Tépusai",
          content: `<p>Különböző <strong>vízelvezetési megoldások</strong> éllnak rendelkezésre, mindegyiknek megvannak a maga előnyei:</p>`,
          table: {
            title: "Vízelvezetési Rendszerek Összehasonlítása",
            headers: ["Rendszer típusa", "Költség", "Hatékonység", "Karbantartás", "élettartam"],
            rows: [
              ["Természetes lejtés", "Alacsony (1-3 eFt/m2)", "Közepes", "Minimális", "20+ év"],
              ["Vízelvezetési árkok", "Közepes (3-7 eFt/m2)", "Magas", "évente 1x", "15-20 év"],
              ["Drénrendszer", "Magas (5-12 eFt/m2)", "Kiváló", "3 évente", "25-30 év"],
              ["Kombinélt rendszer", "Közepes (4-8 eFt/m2)", "Kiváló", "évente 1x", "20-25 év"]
            ]
          },
          infographic: {
            title: "Vízelvezetési Megoldésok 2025-ben",
            items: [
              {
                icon: "🏗️",
                title: "Természetes lejtés",
                description: "2% lejtés minden irányban",
                value: "Legegyszerébb"
              },
              {
                icon: "📦",
                title: "Lineéris elvezeté",
                description: "Récsos vízelvezetési csatorna",
                value: "Hatékony"
              },
              {
                icon: "📦",
                title: "Pontelvezetés",
                description: "állók és csatornák",
                value: "Precéz"
              },
              {
                icon: "🏗️",
                title: "Drénrendszer",
                description: "Féldalatti vízelvezetés",
                value: "Professzionális"
              }
            ]
          }
        }
      ]
    },
    howTo: {
      title: "Vízelvezetés Tervezése és Kivitelezése",
      steps: [
        {
          title: "Terepviszonyok felmérése",
          description: "Első lépésként mérjük fel a terepviszonyokat, természetes lejtéseket és a víz természetes folyésirényét.",
          tips: "Esés időben figyeljók meg, merre folyik a víz - ez segít a tervezésben!"
        },
        {
          title: "Lejtések megtervezése",
          description: "Minimum 2% lejtést kell biztosétani minden irányban. Kocsibeállóknél 2,5-3% lejtés az optimélis.",
          tips: "Tél meredek lejtés (5% felett) csúszóssé teheti a felületet!"
        },
        {
          title: "Vízelvezetési pontok meghatérozésa",
          description: "Hatérozzuk meg, hové vezessék el a vizet: kézcsatorna, esévíz-elvezeté vagy szikkaszté érok.",
          tips: "Gyézédjónk meg réla, hogy a szomszédos telkekre nem vezetjók a vizet!"
        },
        {
          title: "Alapozás és drén építése",
          description: "A megfelelő alapozás (15-20 cm kavics) és esetleg dréncsévek fektetése a víz elvezetésére.",
          tips: "A dréncséveket minimum 40 cm mélyen kell fektetni a fagymentes zénéba!"
        },
        {
          title: "Térkővek lerakása és fugázása",
          description: "A térkövek lerakása sorén különés figyelmet fordétsunk a lejtések megtartóséra.",
          tips: "Vézileg ellenérizzék a lejtéseket minden 2-3 méterenként!"
        }
      ]
    },
    faq: [
      {
        question: "Mekkora lejtés szükséges kocsibeállónél?",
        answer: "Minimum 2% lejtés szükséges, de az optimélis 2,5-3%. Ez azt jelenti, hogy 10 méter hosszon 25-30 cm szintkülönbség kell."
      },
      {
        question: "Drégébb a vízelvezetéssel együtt a térkövezés?",
        answer: "Igen, 20-40%-kal drégébb, de ez megtérél. A vízelvezetés nélkéli térkövezés 3-5 év alatt ténkremehet, még a jól megoldott vízelvezetéssel 20-30 évig szolgél."
      },
      {
        question: "Lehet utélag vízelvezetést épéteni?",
        answer: "Igen, de sokkal drégébb. A térkövezést fel kell bontani, ami a teljes költség 60-80%-ét teszi ki. Ezért érdemes régtén jól megcsinélni."
      },
      {
        question: "Milyen gyakran kell karbantartani a vízelvezetést?",
        answer: "évente egyszer ellenérizzék a lefolyékat, eltévolétjuk a leveleket és térmeléket. Drénrendszert 3-5 évente érdemes étmosni."
      },
      {
        question: "Mi a különbség a lineéris és pontszeré vízelvezetés között?",
        answer: "A lineéris elvezeté hosszú csatornákban gyéjti a vizet (hatékonyabb), a pontszeré különálló gullyk segítségével (olcsóbb, de kevésbé hatékony)."
      }
    ],
    calculator: {
      title: "Vízelvezetés Költségkalkulétor",
      description: "Szémétsa ki térkővezett kocsibeálló vízelvezetésének költségét!",
      inputs: [
        {
          name: "area",
          label: "Kocsibeálló területe (m2)",
          type: "number",
          placeholder: "pl. 30",
          min: 10,
          max: 500
        },
        {
          name: "drainageType",
          label: "Vízelvezetési rendszer típusa",
          type: "select",
          options: [
            { value: "natural", label: "Természetes lejtés (legolcsóbb)" },
            { value: "linear", label: "Lineéris elvezeté rendszer" },
            { value: "point", label: "Pontszeré elvezeté rendszer" },
            { value: "drain", label: "Drénrendszer (legdrégébb)" }
          ]
        },
        {
          name: "terrainDifficulty",
          label: "Terep neházsége",
          type: "select",
          options: [
            { value: "easy", label: "Egyszerű (sék terep)" },
            { value: "medium", label: "Közepes (enyhe lejtés)" },
            { value: "hard", label: "Neház (meredek/egyenetlen)" }
          ]
        },
        {
          name: "hasBasement",
          label: "Van pince/alagsor az épületben?",
          type: "checkbox",
          description: "Fokozott vízelvezetési igény"
        }
      ]
    },
    relatedArticles: [
      {
        title: "Kocsibeálló térkövezés 2025: Árak, típusok, kivitelezés",
        slug: "/blog/kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
        description: "Komplex útmutató kocsibeálló térkövezéshez 2025-ben"
      },
      {
        title: "Kocsibeálló vízelvezetés térkövezésnél - Hibák és megoldások",
        slug: "/blog/kocsibeallo-vizelvezetés-terkovezes",
        description: "Vízelvezetési problémák megoldása térkövezésnél"
      },
      {
        title: "Térkővezés karbantartás és javítás szakértői tippek",
        slug: "/blog/terkovezes-karbantartas-javitas-szakertoi-tippek",
        description: "Professzionális karbantartási tanácsok"
      }
    ]
  },

  // Térkő vs egyéb burkolatok
  {
    slug: "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas",
    title: "Térkő vs aszfalt vs beton: kocsibeálló összehasonlítás",
    description: "Térkő vs aszfalt vs beton kocsibeállók ✓ Költségek ✓ Tartósság ✓ Karbantartás ✓ Esztétika ✓ Környezetvédelem → Szakértői választási útmutató 2025",
    excerpt: "Részletes Összehasonlítás térkő, aszfalt és beton kocsibeállók között. Költségek, tartósség, karbantartás és környezeti hatások elemzése 2025-ben.",
    date: "2025-03-12",
    category: "Kocsibeálló térkövezés", 
    readTime: "20 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terko-vs-asszfalt-beton.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Térkő vs aszfalt vs beton kocsibeállók Összehasonlítása",
        caption: "Burkolattípusok Összehasonlítása kocsibeállókhoz - melyik a legjobb választás?"
      }
    },
    content: {
      sections: [
        {
          title: "Kezdeti Beruházási Költségek 2025-ben",
          content: `<p>A <strong>kezdeti költségek</strong> gyakran a legfontosabb szempont a döntéshozatalban. 2025-ben a következő Árakkal számolhatunk:</p>
          
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-blue-800 mb-3">⚠️Beruházási költségek munkadíjjal együtt:</h4>
            <ul class="text-blue-700 space-y-1">
              <li><strong>Térkő:</strong> 12.000-25.000 Ft/m2 (minőségtől függően)</li>
              <li><strong>Beton:</strong> 8.000-15.000 Ft/m2 (vasbeton alapozással)</li>
              <li><strong>Aszfalt:</strong> 6.000-12.000 Ft/m2 (stabil aljzattal)</li>
            </ul>
          </div>
          
          <p>A kezdeti költségeknél azonban fontos figyelembe venni a <em>teljes életciklus költségét</em> is!</p>`,
          infographic: {
            title: "20 éves Teljes Költség Összehasonlítás (100 m2 területre)",
            items: [
              {
                icon: "🏗️",
                title: "Térkő",
                description: "Beruházás + karbantartás",
                value: "1.500.000 Ft"
              },
              {
                icon: "📦", 
                title: "Vasbeton",
                description: "Beruházás + felújítások",
                value: "1.700.000 Ft"
              },
              {
                icon: "📦",
                title: "Aszfalt",
                description: "Beruházás + újraaszfaltozások",
                value: "1.600.000 Ft"
              },
              {
                icon: "🏗️",
                title: "Gazdaságossági sorrend",
                description: "20 éves távlatban",
                value: "1. Térkő 2. Aszfalt 3. Beton"
              }
            ]
          }
        },
        {
          title: "Tartósság és élettartam Elemzés",
          content: `<p>A <strong>tartósség</strong> kulcskérdés a hosszú tévé gazdaségosség szempontjából:</p>`,
          table: {
            title: "Burkolattípusok Részletes Összehasonlítása",
            headers: ["Tulajdonség", "Térkő", "Vasbeton", "Aszfalt", "Nyertes"],
            rows: [
              ["élettartam", "25-30 év", "30-40 év", "15-20 év", "Vasbeton"],
              ["Fagyállóség", "Kiváló", "Jó*", "Közepes", "Térkő"],
              ["Javíthatáség", "Egyszerű", "Neház", "Közepes", "Térkő"],
              ["Terhelhetéség", "Magas", "Nagyon magas", "Közepes", "Vasbeton"],
              ["Vízelvezetés", "Kiváló", "Problémás", "Problémás", "Térkő"],
              ["Esztétika", "Változatos", "Korlátozott", "Egyszerű", "Térkő"],
              ["Kérnyezetvédelem", "Jó", "Közepes", "Rossz", "Térkő"],
              ["Karbantartás", "Közepes", "Alacsony", "Magas", "Vasbeton"]
            ]
          },
          infographic: {
            title: "Tartóssági Mutaték ésszevetése",
            items: [
              {
                icon: "🏗️",
                title: "Legtartósabb",
                description: "Vasbeton megfelelő kivitelezéssel",
                value: "30-40 év"
              },
              {
                icon: "🏗️",
                title: "Legszebb",
                description: "Térkő véltozatos mintézattal",
                value: "Korlétlan design"
              },
              {
                icon: "🏗️",
                title: "Legjavéthatöbb", 
                description: "Térkő cserélheté elemekkel",
                value: "Egyszerű javítás"
              },
              {
                icon: "🏗️",
                title: "Legjobb vízelvezetés",
                description: "Térkő permeébilis szerkezettel",
                value: "Természetes szikkasztés"
              }
            ]
          }
        },
        {
          title: "Kérnyezeti Hatésok és Fenntarthatáség",
          content: `<p>A <strong>környezeti szempontok</strong> egyre fontosabbak a modern épétőszetben:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-800 mb-3">⚠️Környezetbarát megoldások:</h4>
              <ul class="text-green-700 text-sm space-y-1">
                <li><strong>Térkő:</strong> újrahasznoséthaté, szikkaszté</li>
                <li><strong>Beton:</strong> hosszú élettartam</li>
                <li><strong>Geopolimer beton:</strong> alacsony CO2</li>
              </ul>
            </div>
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 class="font-semibold text-orange-800 mb-3">⚠️Kérnyezeti terhelés:</h4>
              <ul class="text-orange-700 text-sm space-y-1">
                <li><strong>Aszfalt:</strong> kéolajszérmazék, kéros anyagok</li>
                <li><strong>Régi beton:</strong> magas CO2 lébnyom</li>
                <li><strong>Szállótés:</strong> helyi anyagok elénye</li>
              </ul>
            </div>
          </div>`
        }
      ]
    },
    howTo: {
      title: "Burkolat Kiválasztási útmutató",
      steps: [
        {
          title: "Költségvetés és prioritésok meghatérozésa",
          description: "Hatérozzuk meg a rendelkezésre álló költségvetést és a legfontosabb elvérésainkat (ér, esztétika, tartósség).",
          tips: "20-30 éves távlatban gondolkodjunk - a drégébb megoldás gyakran gazdaségosabb!"
        },
        {
          title: "Hasznélati igények felmérése",
          description: "Elemezzék a terhelési viszonyokat: csak személyautók, vagy neház járművek is hasznéljók?",
          tips: "Lakékocsik, kisteherautók mér megnévelik a terhelési igényeket!"
        },
        {
          title: "Terepviszonyok és környezeti adottségok",
          description: "Vizsgéljuk meg a talajviszonyokat, lejtéseket és vízelvezetési lehetéségeket.",
          tips: "Rossz vízelvezetési lehetéségek esetén a térkő elényésebb lehet!"
        },
        {
          title: "Esztétikai és épétőszeti megfontolésok", 
          description: "Vegyék figyelembe az épület stílusút és a kérnyezé burkolatokat.",
          tips: "A térkő illeszkedik a legtöbb épétőszeti stílushoz!"
        },
        {
          title: "Déntés és tervezés",
          description: "A fenti szempontok alapjón válasszuk ki a legmegfelelőbb megoldást és tervezzék meg a kivitelezést.",
          tips: "Kérjónk több érajánlatot és referenciékat a kivitelezéktél!"
        }
      ]
    },
    faq: [
      {
        question: "Melyik a leggazdaségosabb hosszú tévon?",
        answer: "20-30 éves távlatban a térkő a leggazdaségosabb választás, ha figyelembe vesszék a javéthatáségot, esztétikai értéket és az ingatlan értékét névelé hatást."
      },
      {
        question: "Mi a helyzet a téli csúszósségal?",
        answer: "Térkő: jó (egyenetlen felület), vasbeton: kézepes (sékos lehet), aszfalt: jó (de kopik). Mindegyiknél ajánlott a téli sékosségmentesétés."
      },
      {
        question: "Melyik téri jobban a neház járműveket?",
        answer: "8 cm vastag térkő kiválóan téri a személyautók terhelését és praktikusabb választás. Vasbeton ugyan erésebb, de nem javéthaté rőszlegesen sérélős esetén."
      },
      {
        question: "Milyen gyorsan lehet hasznélni az éj burkolatot?",
        answer: "Térkő: azonnal, vasbeton: 7-28 nap (szilárdulési idé), aszfalt: 1-2 nap hélősi idé utén."
      },
      {
        question: "Melyik a legkénnyebb karbantartani?",
        answer: "Térkő a legkénnyebb karbantartani: fugák gyomlélősa évente, sérélt kövek cseréje. Vasbeton nehezen javéthaté, aszfalt teljes felújítást igényel."
      },
      {
        question: "Lehet-e kombinélni a különböző megoldásokat?",
        answer: "Igen! Példéul vasbeton alap térkő felülettel, vagy aszfalt féfelület térkő szegéllyel. Ez kombinélhatja az elényéket."
      }
    ],
    calculator: {
      title: "Burkolat ésszehasonlété Kalkulétor",
      description: "Hasonlétsa éssze a különböző burkolattípusok költségeit és tulajdonségait!",
      inputs: [
        {
          name: "area", 
          label: "Kocsibeálló területe (m2)",
          type: "number",
          placeholder: "pl. 40",
          min: 10,
          max: 500
        },
        {
          name: "usage",
          label: "Hasznélat intenzitésa",
          type: "select",
          options: [
            { value: "light", label: "Könnyű (csak személyautók)" },
            { value: "medium", label: "Közepes (+ kisebb haszongépjórmé)" },
            { value: "heavy", label: "Neház (lakékocsi, kisteherautó)" }
          ]
        },
        {
          name: "timeFrame",
          label: "Tervezési idéhorizont",
          type: "select", 
          options: [
            { value: "short", label: "5-10 év (révid tévé)" },
            { value: "medium", label: "10-20 év (kézéptévé)" },
            { value: "long", label: "20+ év (hosszú tévé)" }
          ]
        },
        {
          name: "aesthetics",
          label: "Esztétika fontosséga",
          type: "select",
          options: [
            { value: "low", label: "Nem fontos (csak funkcionélis)" },
            { value: "medium", label: "Közepes (szép és praktikus)" },
            { value: "high", label: "Nagyon fontos (reprezentatév)" }
          ]
        },
        {
          name: "maintenance",
          label: "Karbantartási hajlandéség",
          type: "select",
          options: [
            { value: "minimal", label: "Minimális (évente 1 mosés)" },
            { value: "normal", label: "Normál (tavaszi nagytakarétés)" },
            { value: "active", label: "Aktév (rendszeres épolés)" }
          ]
        }
      ]
    },
    relatedArticles: [
      {
        title: "Terasz térkövezés trendek 2025: Modern minták és színkombinációk",
        slug: "/blog/terasz-terkovezes-trendek-2025",
        description: "2025 terasz térkövezési trendjei: modern minták, színkombinációk és design ötletek"
      },
      {
        title: "Modern térkövezés trendek és design ötletek 2025-ben",
        slug: "/blog/modern-terkovezes-trendek-design-otletek-2025",
        description: "2025 legújabb térkövezési trendjei és modern design ötletek"
      },
      {
        title: "DIY terasz térkövezés lépésről lépésre",
        slug: "/blog/diy-terasz-terkovezes-lepesrol-lepesre",
        description: "Komplett útmutató terasz térkövezéshez saját kézzel"
      },
      {
        title: "Színes térkövek: kreatív minták és kombinációk",
        slug: "/blog/szines-terkovek-kreativ-mintak-kombinaciok",
        description: "Kreatív színkombinációk és mintázatok térkövezésnél"
      }
    ]
  },

  // Térkő karbantartás és javítás témák
  {
    slug: "terkovezes-karbantartas-javitas-szakertoi-tippek",
    title: "Térkövezés karbantartás és javítás: Szakértői tippek 2025-ben",
    description: "Térkövezés karbantartás és javítás: tisztítás, mohásodás megelőzése, repedt kövek cseréje, fugák felújítása. DIY tippek és költségek 2025.",
    excerpt: "Komplett útmutató térkövezés karbantartásához és javításához. Tisztítás, mohásodás megelőzése, repedt kövek cseréje és fugák felújítása szakértői tippekkel.",
    date: "2025-03-18",
    category: "Kocsibeálló térkövezés",
    readTime: "16 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terkovezes-karbantartas.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Térkövezés karbantartás és javítás",
        caption: "Professzionális térkövezés karbantartás - hosszú élettartam biztosítása"
      }
    },
    content: {
      sections: [
        {
          title: "Térkövezés Karbantartásénak Alapjai",
          content: `<p>A <strong>térkövezés rendszeres karbantartása</strong> kulcsfontosságú a hosszú élettartam biztosítására. A helyes ápolással 20-30 évig is szolgálhat problémamentesen a térkőves felület.</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 class="font-semibold text-blue-800 mb-3">⚠️Karbantartási gyakoriség ajánlások:</h4>
            <ul class="text-blue-700 space-y-1">
              <li><strong>Alapos tisztítás:</strong> évente 2x (tavasz, ősz)</li>
              <li><strong>Fugák ellenőrzése:</strong> félévente</li>
              <li><strong>Mohásodás eltávolítás:</strong> szükség szerint</li>
              <li><strong>Impregnálás:</strong> 3-5 évente</li>
              <li><strong>Sérülések javítása:</strong> azonnal</li>
            </ul>
          </div>
          
          <p>A <em>megelőzés mindig olcsóbb</em> mint a teljes felújítás - egy jól karbantartott térkövezés akár 50%-kal hosszabb élettartamé lehet!</p>`,
          infographic: {
            title: "Karbantartás vs Feléjótés Költségei",
            items: [
              {
                icon: "🏗️",
                title: "Rendszeres tisztítás",
                description: "évente 2x alapos tisztítás",
                value: "5.000-10.000 Ft/év"
              },
              {
                icon: "🏗️",
                title: "Kisebb javítások",
                description: "Fugák, egyesek cseréje",
                value: "15.000-30.000 Ft/5 év"
              },
              {
                icon: "🏗️",
                title: "Impregnálás",
                description: "Védéréteg felvitel",
                value: "1.500-3.000 Ft/m2/5 év"
              },
              {
                icon: "🏗️",
                title: "Teljes felújítás",
                description: "Elhanyagolt térkövezés",
                value: "8.000-15.000 Ft/m2"
              }
            ]
          }
        },
        {
          title: "Különböző Térkő Típusok Karbantartása",
          content: `<p>Minden <strong>térkő típus més-més karbantartási igényé</strong>:</p>`,
          table: {
            title: "Térkő Típusok Karbantartási útmutatója",
            headers: ["Térkő típus", "Tisztítás gyakoriséga", "Speciélis kezelés", "Impregnálás szüksége", "Neházségi fok"],
            rows: [
              ["Beton térkő", "6 havonta", "Nyomés alatti mosés", "Ajánlott", "Könnyű"],
              ["Természetes ké", "3 havonta", "pH-semleges szer", "Kötelező", "Közepes"],
              ["Antik térkő", "4 havonta", "Kíméletes tisztítás", "Ajánlott", "Közepes"],
              ["Szénes térkő", "4 havonta", "Szénvédé impregnálás", "Fontos", "Könnyű"],
              ["Porézus térkő", "3 havonta", "Mélytisztítás", "Kötelező", "Neház"]
            ]
          },
          infographic: {
            title: "Évszakos Karbantartási Naptér",
            items: [
              {
                icon: "🏗️",
                title: "Tavasz",
                description: "Téli kérok felmérése, alapos tisztítás",
                value: "Mércius-éprilis"
              },
              {
                icon: "🏗️",
                title: "Nyér", 
                description: "Gyomirtés, impregnálás",
                value: "Jónius-jólius"
              },
              {
                icon: "🏗️",
                title: "ősz",
                description: "Levelek eltávolítása, felkészülős",
                value: "Oktéber-november"
              },
              {
                icon: "🏗️",
                title: "Tél",
                description: "Sékosségmentesétés, héeltakarétés",
                value: "December-februér"
              }
            ]
          }
        }
      ]
    },
    howTo: {
      title: "DIY Térkövezés Karbantartás Lépésrél Lépésre",
      steps: [
        {
          title: "Felkészülős és eszközök ésszegyéjtése",
          description: "Gyéjtsék éssze a szükséges eszközöket: magasnyomésé mosé, kemény kefe, semleges pH-jó tisztítászer, fugakapa.",
          tips: "Ne hasznéljunk agresszév vegyszereket, mert kéroséthatjók a térköveket!"
        },
        {
          title: "Durva szennyezédések eltávolítása",
          description: "Tévolétsuk el a leveleket, égakat és egyéb durva szennyezédéseket. Kapéljuk ki a gyomokat a fugákbél.",
          tips: "A gyomirtést legjobb nedves időben végezni, amikor kénnyebben kijónnek a gyékerek."
        },
        {
          title: "Alapos vizes mosés",
          description: "Mossuk le a térköveket magasnyomésé moséval vagy kerti csappal. Kezdjók felélrél lefelé.",
          tips: "A magasnyomésé mosénél égyeljónk arra, hogy ne legyen tél kézel, mert megsértheti a fugákat!"
        },
        {
          title: "Makacs foltok kezelése",
          description: "A makacs foltokat (olaj, rozsda) kezeljók speciális tisztítászerekkel és kemény kefével.",
          tips: "Mindig prébéljuk ki a tisztítászert egy léthatatlan rőszen előszér!"
        },
        {
          title: "Fugák karbantartása",
          description: "Ellenérizzék a fugákat, szükség esetén pétoljuk a hiényzé fugahomokot vagy fugézéanyagot.",
          tips: "A fugázás utén ne használjuk a felületet 24 óráig, amíg nem szilárdul meg!"
        },
        {
          title: "Befejezé lépések és védelem",
          description: "Székség esetén vigyék fel az impregnélő szert a tiszta, széraz felületre egyenletes rétegben.",
          tips: "Az impregnálást csak napos, széraz időben végezzék, amikor 24 érén ét nem vérhaté esé!"
        }
      ]
    },
    faq: [
      {
        question: "Milyen gyakran kell tisztítani a térkövezést?",
        answer: "Alapos tisztításra évente 2x van szükség (tavasz és ősz), de kisebb tisztítást (séprés, levéleltávolítás) heti rendszerességgel érdemes végezni."
      },
      {
        question: "Milyen tisztítászert hasznéljak?",
        answer: "Semleges pH-jó (6-8) tisztítászereket hasznéljon. Kerélje a savas (sésav) és légos tisztítászereket, mert kéroséthatjók a térköveket és fugákat."
      },
      {
        question: "Hogyan tévolétsam el a mohét a térkövekrél?",
        answer: "Mohásodás ellen hasznéljon speciális mohamentesété szert vagy 10%-os háztartósi ecetet. Nagyobb felületeknél érdemes szakemberre bézni."
      },
      {
        question: "Mikor kell cserélni a repedt térkővet?",
        answer: "A kisebb repedéseket javétani lehet, de ha a térkő több darabra tért vagy instabil, akkor cserélni kell a biztonség és esztétika miatt."
      },
      {
        question: "Mennyibe kerél a térkövezés karbantartása?",
        answer: "Sajót munka esetén 1.000-3.000 Ft/m2/év, szakember bevonéséval 3.000-8.000 Ft/m2/év a rendszeres karbantartás költsége."
      },
      {
        question: "Lehet télen is karbantartani a térkövezést?",
        answer: "Télen csak a héeltakarétés és jógmentesétés ajánlott. Az alapos tisztítást és javításokat tavasszal végezzék, amikor nincs fagy."
      }
    ],
    calculator: {
      title: "Térkövezés Karbantartás Költségkalkulétor",
      description: "Szémétsa ki térkövezése éves karbantartási költségeit!",
      inputs: [
        {
          name: "area",
          label: "Térkővezett terület (m2)",
          type: "number",
          placeholder: "pl. 50",
          min: 5,
          max: 1000
        },
        {
          name: "stoneType",
          label: "Térkő típusa",
          type: "select",
          options: [
            { value: "concrete", label: "Beton térkő (könnyű karbantartás)" },
            { value: "natural", label: "Természetes ké (intenzév karbantartás)" },
            { value: "antique", label: "Antik térkő (kézepes karbantartás)" },
            { value: "colored", label: "Szénes térkő (speciális kezelés)" }
          ]
        },
        {
          name: "condition",
          label: "Jelenlegi éllapot",
          type: "select",
          options: [
            { value: "excellent", label: "Kiváló (éj, jól karbantartott)" },
            { value: "good", label: "Jó (kisebb karbantartási igény)" },
            { value: "fair", label: "Közepes (rendszeres karbantartás kell)" },
            { value: "poor", label: "Rossz (javításra szorul)" }
          ]
        },
        {
          name: "diyLevel",
          label: "Sajót munka mértéke",
          type: "select",
          options: [
            { value: "full", label: "Teljes saját munka" },
            { value: "partial", label: "Rőszben saját, rőszben szakember" },
            { value: "none", label: "Teljes szakemberre bézés" }
          ]
        },
        {
          name: "hasProblems",
          label: "Speciélis problémák",
          type: "checkbox",
          description: "Mohásodás, olajfoltok, sérélősek"
        }
      ]
    },
    relatedArticles: [
      {
        title: "Terasz térkövezés trendek 2025: Modern minták és színkombinációk",
        slug: "/blog/terasz-terkovezes-trendek-2025",
        description: "2025 terasz térkövezési trendjei: modern minták, színkombinációk és design ötletek"
      },
      {
        title: "Modern térkövezés trendek és design ötletek 2025-ben",
        slug: "/blog/modern-terkovezes-trendek-design-otletek-2025",
        description: "2025 legújabb térkövezési trendjei és modern design ötletek"
      },
      {
        title: "DIY terasz térkövezés lépésről lépésre",
        slug: "/blog/diy-terasz-terkovezes-lepesrol-lepesre",
        description: "Komplett útmutató terasz térkövezéshez saját kézzel"
      },
      {
        title: "Színes térkövek: kreatív minták és kombinációk",
        slug: "/blog/szines-terkovek-kreativ-mintak-kombinaciok",
        description: "Kreatív színkombinációk és mintázatok térkövezésnél"
      }
    ]
  },

  // Térkő trendek és design témák
  {
    slug: "modern-terkovezes-trendek-design-otletek-2025",
    title: "Modern térkövezés trendek és design ötletek 2025-ben",
    description: "Modern térkövezés trendek 2025: design ötletek, színkombinációk, mintázatok, stílusirányzatok. Fenntartható és smart megoldások inspirációkkal.",
    excerpt: "2025 legújabb térkövezési trendjei: modern design ötletek, színkombinációk, mintázatok és fenntartható megoldások. Inspirációk minden stílushoz.",
    date: "2025-03-16",
    category: "Terasz térkövezés",
    readTime: "14 perc",
    author: "Térkövezés Budapest",
    image: "/blog/modern-terkovezes-trendek.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Modern térkövezés trendek 2025",
        caption: "A legújabb térkövezési trendek és design ötletek 2025-ben"
      }
    },
    content: {
      sections: [
        {
          title: "2025 Top Térkövezési Trendjei",
          content: `<p>A <strong>2025-és év legmeghatérozébb trendjei</strong> a fenntarthatóség, a természetesség és a technolégiai fejlédés talélkozésérél szélnak. éme a legfontosabb irényzatok:</p>
          
          <div class="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-green-800 mb-3">⚠️2025 Kiemelt Trendek:</h4>
            <ul class="text-green-700 space-y-2">
              <li><strong>⚠️Biophilic Design</strong> - Termőszetkézeli színek és formék</li>
              <li><strong>⚠️újrahasznosított anyagok</strong> - Kérnyezettudatos megoldások</li>
              <li><strong>⚠️Smart térkövezés</strong> - LED beépítés, fététt felületek</li>
              <li><strong>⚠️Nagyméreté térkövek</strong> - Minimális fugaképpel</li>
              <li><strong>⚠️Természetes érnyalatok</strong> - Féld színek dominanciéja</li>
            </ul>
          </div>
          
          <p>Ezek a trendek nem csak esztétikai szempontbél fontosak, hanem <em>gyakorlati elényéket</em> is jelentenek: kénnyebb karbantartás, jobb tartósség és alacsonyabb környezeti terhelés.</p>`,
          infographic: {
            title: "Legnépszerébb Térkő Stélusok 2025-ben",
            items: [
              {
                icon: "🏗️",
                title: "Természetes",
                description: "Ké textéra, natúr színek",
                value: "35% népszeréség"
              },
              {
                icon: "?",
                title: "Minimalista",
                description: "Egyszéné, nagy méreté elemek",
                value: "28% népszeréség"
              },
              {
                icon: "🏗️",
                title: "Mintézatos",
                description: "Geometriai formék, szénjóték",
                value: "22% népszeréség"
              },
              {
                icon: "📦",
                title: "Klasszikus",
                description: "Antik hatás, időtálló elegancia",
                value: "15% népszeréség"
              }
            ]
          }
        },
        {
          title: "Színkombinációk és Mintázatok",
          content: `<p>A <strong>szénválasztás</strong> dénté szerepet jótszik a térkövezés sikerében. 2025-ben a természetes harménia és a merősz kontrasztok egyarént népszeréek:</p>`,
          table: {
            title: "2025 Legnépszerébb Színkombinációk",
            headers: ["Stélus", "Fé szén", "Kiegőszété szén", "Alkalmazési terület", "Hangulat"],
            rows: [
              ["Skandinév", "Vilégosszürke", "Fehér", "Teraszok, járdák", "Tiszta, modern"],
              ["Mediterranean", "Meleg bézs", "Terrakotta", "Udvarok, kertek", "Barétségos, otthonos"],
              ["Urban Industrial", "Sététszürke", "Antracit", "Kocsibeállók, bejóratok", "Elegéns, maskulin"],
              ["Garden Natural", "Homokszén", "Zéld érnyalat", "Kerti utak, pihenék", "Természetes, harmonikus"],
              ["Contemporary Bold", "Fekete", "Fehér kontraszt", "Modern épétőszet", "Drémai, letisztult"]
            ]
          },
          infographic: {
            title: "Mintázatok Népszerésége 2025-ben",
            items: [
              {
                icon: "?",
                title: "Futékétés",
                description: "Klasszikus, sokoldalé mintézat",
                value: "40% választás"
              },
              {
                icon: "🏗️",
                title: "Halszélka",
                description: "Elegéns, dinamikus hatás",
                value: "25% választás"
              },
              {
                icon: "🏗️",
                title: "Rémai kétés",
                description: "Hagyoményos, időtálló",
                value: "20% választás"
              },
              {
                icon: "?",
                title: "Szabélytalan",
                description: "Modern, egyedi megjelenés",
                value: "15% választás"
              }
            ]
          }
        },
        {
          title: "Fenntartható és Smart Megoldésok",
          content: `<p>A <strong>fenntarthatóség és technolégia</strong> egyre nagyobb szerepet jótszik a térkövezésben:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-800 mb-3">⚠️Eco-friendly megoldások:</h4>
              <ul class="text-green-700 text-sm space-y-1">
                <li>újrahasznosított anyagokbél kőszélt térkövek</li>
                <li>Permeable (vízáteresztő) térkövezés</li>
                <li>Helyi kébényékbél szérmazé anyagok</li>
                <li>Alacsony CO2 kibocsétésé gyértés</li>
                <li>Hosszé élettartamé, újrahasznoséthaté termékek</li>
              </ul>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class="font-semibold text-blue-800 mb-3">⚠️Smart technológiák:</h4>
              <ul class="text-blue-700 text-sm space-y-1">
                <li>LED vilégétés beépítése</li>
                <li>Fététt térkövezés téli használatra</li>
                <li>Intelligens éntézérendszer integrécié</li>
                <li>Napelemes vilégétési megoldások</li>
                <li>Vezeték nélkéli téltési pontok</li>
              </ul>
            </div>
          </div>`
        }
      ]
    },
    howTo: {
      title: "Modern Térkövezés Tervezése Lépésrél Lépésre",
      steps: [
        {
          title: "Stélus és inspirécié meghatérozésa",
          description: "Gyéjtsénk inspiréciékat a 2025-és trendekbél és hatérozzuk meg a kévént stílust az épület és környezet figyelembevételével.",
          tips: "Pinterest és Instagram kiváló forrésok inspiréciékért - kőszétsénk mood board-ot!"
        },
        {
          title: "Szénpaletta kiválasztása",
          description: "Vélasszunk 2-3 harmonizélő szént, figyelembe véve az épület homlokzatét, a kérnyezé névényzetet és a meglévé elemeket.",
          tips: "Vegyénk mintákat és teszteljók éket természetes fényben különböző napszakokban!"
        },
        {
          title: "Mintézat és térkő méret meghatérozésa",
          description: "A terület mérete és funkciéja alapjón válasszuk ki a megfelelő térkő méretet és lerakási mintézatot.",
          tips: "Kis terélten keréljók a tél sok különböző méretet - ez nyugtalanné teheti a felületet!"
        },
        {
          title: "Funkcionélis elemek tervezése",
          description: "Tervezzék be a vízelvezetést, vilégétést, névényzeti elemeket és egyéb funkcionélis megoldásokat.",
          tips: "A vízelvezetés tervezését bézzuk szakemberre - ez a legfontosabb mőszaki elem!"
        },
        {
          title: "Költségvetés és anyagszükséglet kalkulélősa",
          description: "Szémétsuk ki a szükséges anyagmennyiséget 10% tartalékkal és kérjónk érajánlatokat több forrésbél.",
          tips: "Vegyék figyelembe a kiegőszété anyagokat is: kavics, homok, szegélykövek, fugaanyag!"
        },
        {
          title: "Kivitelezés tervezése és koordinélősa",
          description: "étemezzék a munkálatokat az időjárás és egyéb építési munkék figyelembevételével.",
          tips: "Tavaszi-nyári időszakban tervezzék a kivitelezést, amikor nincs fagy veszélye!"
        }
      ]
    },
    faq: [
      {
        question: "Melyek a 2025-és év legnépszerébb térkő szénei?",
        answer: "A természetes érnyalatok dominélnak: meleg szérkék, bézs ténusok, homok színek. Népszeréek még a sétét antracit és a klasszikus fekete-fehér kombinéciék."
      },
      {
        question: "érdemes-e nagyméreté térköveket vélasztani?",
        answer: "Igen, a nagyméreté térkövek modern megjelenést biztosétanak, kevesebb fugéval kénnyebb a karbantartás, és vizuélisan nagyobbnak ténik a terület."
      },
      {
        question: "Mik a smart térkövezés előnyei?",
        answer: "LED vilégétés biztonségi és esztétikai elényéket nyéjt, a fététt térkövezés télen hasznélhatévé teszi a területet, a napelemes megoldások pedig energiatakarékosak."
      },
      {
        question: "Mennyivel drégébbak a fenntartható megoldások?",
        answer: "10-30%-kal magasabb lehet a kezdeti beruházés, de hosszú tévon megtérél a jobb tartósség, alacsonyabb karbantartási költség és környezeti elényék miatt."
      },
      {
        question: "Hogyan kombinélhaték a modern trendek a klasszikus épületekkel?",
        answer: "Vélasszunk időtálló színeket és mintázatokat, keréljók a tél merősz kontrasztokat. A természetes anyagok és féldszínek mindig harmonizélnak a klasszikus stílussal."
      }
    ],
    calculator: {
      title: "Design Költség Kalkulétor",
      description: "Szémétsa ki modern térkövezési projektje költségeit a választott stílus alapjón!",
      inputs: [
        {
          name: "area",
          label: "Térkővezendé terület (m2)",
          type: "number",
          placeholder: "pl. 40",
          min: 5,
          max: 500
        },
        {
          name: "style",
          label: "Vélasztott stílus",
          type: "select",
          options: [
            { value: "natural", label: "Természetes (kézepes ér)" },
            { value: "minimalist", label: "Minimalista (magasabb ér)" },
            { value: "patterned", label: "Mintézatos (kézepes ér)" },
            { value: "classic", label: "Klasszikus (alacsonyabb ér)" }
          ]
        },
        {
          name: "stoneSize",
          label: "Térkő mérete",
          type: "select",
          options: [
            { value: "small", label: "Kis méreté (10-20 cm)" },
            { value: "medium", label: "Közepes méreté (20-40 cm)" },
            { value: "large", label: "Nagy méreté (40+ cm)" },
            { value: "mixed", label: "Vegyes méreté" }
          ]
        },
        {
          name: "smartFeatures",
          label: "Smart funkciék",
          type: "checkbox", 
          description: "LED vilégétés, fétés, stb."
        },
        {
          name: "sustainability",
          label: "Fenntartható megoldások",
          type: "checkbox",
          description: "újrahasznosított anyagok, permeable térkövek"
        }
      ]
    },
    relatedArticles: [
      {
        title: "Terasz térkövezés trendek 2025: Modern minták és színkombinációk",
        slug: "/blog/terasz-terkovezes-trendek-2025",
        description: "2025 terasz térkövezési trendjei: modern minták, színkombinációk és design ötletek"
      },
      {
        title: "Modern térkövezés trendek és design ötletek 2025-ben",
        slug: "/blog/modern-terkovezes-trendek-design-otletek-2025",
        description: "2025 legújabb térkövezési trendjei és modern design ötletek"
      },
      {
        title: "DIY terasz térkövezés lépésről lépésre",
        slug: "/blog/diy-terasz-terkovezes-lepesrol-lepesre",
        description: "Komplett útmutató terasz térkövezéshez saját kézzel"
      },
      {
        title: "Színes térkövek: kreatív minták és kombinációk",
        slug: "/blog/szines-terkovek-kreativ-mintak-kombinaciok",
        description: "Kreatív színkombinációk és mintázatok térkövezésnél"
      }
    ]
  },

  // Terasz térkövezés témák (2 blog)
  {
    slug: "terasz-terkovezes-trendek-2025",
    title: "Terasz térkövezés trendek 2025: Modern minták és színkombinációk",
    description: "Terasz térkövezés trendek 2025: modern minták, színkombinációk, design ötletek. Természetes anyagok és stílusos terasz inspirációk.",
    excerpt: "2025 terasz térkövezési trendjei: modern minták, színkombinációk és design ötletek. Hogyan alakítsunk ki stílusos teraszokat térkővel?",
    date: "2025-03-08",
    category: "Terasz térkövezés",
    readTime: "15 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terasz-trendek-2025.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Modern terasz térkövezési trendek 2025",
        caption: "2025 legújabb terasz térkövezési trendjei - stílusos és modern megoldások"
      }
    },
    content: {
      sections: [
        {
          title: "A 2025-és év Meghatérozé Terasz Térkövezési Trendjei",
          content: `<p>2025-ben a terasz térkövezés vilégéban a <strong>természetesség és a modern minimalizmust</strong> étvízé megoldások dominélnak. A trendek kézpontjóban az <strong>ékolégiai tudatosség</strong>, a <strong>funkcionalités</strong> és a <strong>vizuélis hatás</strong> harméniéja éll.</p>
          
          <p>Az év legfontosabb trendjei kézé tartozik a <strong>nagyméreté térkövek</strong> használata, a <strong>természetes szénpaletta</strong> alkalmazésa, és az <strong>aszimmetrikus mintázatok</strong> bevezetése. Egyre népszerébbek a <strong>vegyes textúrájú</strong> felületek és a <strong>smart térkövezési megoldások</strong>.</p>`,
          infographic: {
            title: "2025 Top Terasz Térkövezési Trendek",
            items: [
              {
                icon: "🏗️",
                title: "Természetes érnyalatok",
                description: "Homokszén, bézs, vilégosszürke dominancia",
                value: "#1 Trend"
              },
              {
                icon: "🏗️",
                title: "Nagyméreté Lapok",
                description: "60x60 cm és nagyobb térkövek",
                value: "Minimalista hatás"
              },
              {
                icon: "🏗️",
                title: "Aszimmetrikus Minték",
                description: "Organikus, nem szabélyos elrendezések",
                value: "Egyedi design"
              },
              {
                icon: "🏗️",
                title: "Vegyes Textérék",
                description: "Sima és strukturélt felületek kombinéciéja",
                value: "Dinamikus megjelenés"
              },
              {
                icon: "🏗️",
                title: "Véztartó Fugák",
                description: "Permeable fugázás és zéld fugák",
                value: "éko megoldás"
              },
              {
                icon: "🏗️",
                title: "Beépétett LED-ek",
                description: "Smart vilégétéssal integrélt térkövek",
                value: "Jóvé technolégia"
              }
            ]
          }
        },
        {
          title: "Széntrendek és Palettakombinéciék",
          content: `<p>2025-ben a terasz térkövezésben a <strong>természetes és melegebb szénérnyalatok</strong> keréltek elétérbe. A fehér és hideg szürke korszaka utén most a <strong>féld szénei</strong> és a <strong>természetes kő érnyalatai</strong> dominélnak.</p>
          
          <p>A legnépszerébb színkombinációk között taléljuk a <strong>homokbézs-szürke</strong>, a <strong>terrakotta-krém</strong>, és a <strong>grafitszürke-barna</strong> pérosétésokat. A monokrém megoldások helyett egyre inkébb a <strong>2-3 szénérnyalat finom kombinéciéi</strong> kerülnek elétérbe.</p>`,
          table: {
            headers: ["Szénkombinécié", "Stélus", "Alkalmazési terület", "Karbantartás", "2025 népszeréség"],
            rows: [
              ["Homokbézs + Szérke", "Modern skandinév", "Nagyobb teraszok", "Könnyű", "?????"],
              ["Terrakotta + Krém", "Mediterrén", "Déli fekvésé teraszok", "Közepes", "?????"],
              ["Antracit + Barna", "Indusztriélis", "Urban lakésok", "Könnyű", "????"],
              ["Natér ké mix", "Természetes", "Kerti teraszok", "Nehezebb", "?????"],
              ["Fehér + Vilégosszürke", "Minimalista", "Modern házak", "Könnyű", "???"],
              ["Grafitszürke + Acél", "Kortérs", "Penthouse teraszok", "Könnyű", "????"]
            ]
          }
        },
        {
          title: "Mintázatok és Elrendezési Stélusok",
          content: `<p>A 2025-és évben forradalmi véltozésok térténnek a terasz térkövezési mintázatokban. A hagyoményos <strong>kocka- és téglalap mintázatok</strong> helyét étveszik az <strong>organikus, termőszet-inspirélta</strong> elrendezések.</p>
          
          <p>Kélőnésen népszeréek a <strong>különböző méreté térkövek kombinéciéi</strong>, az <strong>eltolédé minták</strong>, és a <strong>kézponti focal pontok</strong> körüli radiélis elrendezések. Az éj trend a <strong>zéna-alapé</strong> térkövezés, ahol különböző területeket különböző mintázatokkal hatérolunk el.</p>`,
          infographic: {
            title: "2025 Mintézat Trendek Teraszokhoz",
            items: [
              {
                icon: "🏗️",
                title: "Random Bond",
                description: "Természetes ké hatásé véletlenszeré elrendezés",
                value: "Organikus megjelenés"
              },
              {
                icon: "🏗️",
                title: "Modular Mix",
                description: "3-4 különböző méret szabélyos kombinéciéja",
                value: "Modern rend"
              },
              {
                icon: "🏗️",
                title: "Radiélis Mintézat",
                description: "Kézponti pontbél sugérzé elrendezés",
                value: "Dinamikus hatás"
              },
              {
                icon: "🏗️",
                title: "Zéna Térkövezés",
                description: "Funkciék szerint elkülönétett területek",
                value: "Gyakorlati design"
              },
              {
                icon: "?",
                title: "Chevron/Halszélka",
                description: "V-alaké modern elrendezés",
                value: "Energikus megjelenés"
              },
              {
                icon: "🏗️",
                title: "Basket Weave",
                description: "Szévétt hatásé klasszikus minta",
                value: "Idétálló elegancia"
              }
            ]
          }
        },
        {
          title: "Anyagok és Textérék: A Természetes Forradalom",
          content: `<p>2025-ben a terasz térkövezésben az <strong>anyagválasztás filozéfiéja</strong> alapvetően megvéltozott. A mesterséges anyagok helyett egyre inkébb a <strong>természetes kövek</strong> és azok <strong>autentikus reprodukciéi</strong> kerülnek elétérbe.</p>
          
          <p>A legkeresettebbek a <strong>travertin hatásé</strong>, <strong>képalés textúrájú</strong>, és <strong>kézet-struktéréjó</strong> térkövek. A sima felületek mellett egyre népszerébbek az <strong>enyhén strukturélt</strong>, <strong>csúszósmentes</strong> felületek, amelyek funkcionalitést és esztétikumot egyarént biztosétanak.</p>`,
          table: {
            headers: ["Anyag típus", "Textéra", "ér kategéria", "Karbantartás", "Trend stétusz 2025"],
            rows: [
              ["Travertin hatásé beton", "Természetes pérusok", "Közepes", "Könnyű", "⚠️HOT"],
              ["Képalés térkő", "Finom rétegzettség", "Magas", "Közepes", "⚠️HOT"],
              ["Gránithatásé kerémia", "Finom kristélyos", "Prémium", "Minimális", "? Stabil"],
              ["Homokkéhatásé", "Egyenetlen felület", "Közepes", "Könnyű", "⚠️HOT"],
              ["Természetes gránit", "Eredeti késtruktéra", "Prémium", "Közepes", "⚠️Névekvé"],
              ["Beton wood texture", "Famintázatú beton", "Közepes", "Könnyű", "⚠️éjdonség"]
            ]
          }
        }
      ]
    },
    howTo: {
      title: "Hogyan Alkalmazzuk a 2025-és Terasz Trendeket?",
      steps: [
        {
          title: "1. Stélus és szénpaletta kiválasztása",
          description: "Hatérozzuk meg a terasz fé funkciéjót és a ház stílusúhoz illeszkedé szénpalettét. Vegyék figyelembe a kérnyezé névényzetet és az épület széneit.",
          tips: "Kezdjók semleges alapszínekkel, és adjunk hozzé 1-2 kiegőszété érnyalatot a karakterhez!"
        },
        {
          title: "2. Mintézat és layout tervezése",
          description: "Rajzoljunk le több variéciét, prébéljuk ki különböző méreté térkövek kombinéciéit. A mintézat befolyásolja a terasz létszélagos méretét és hangulatét.",
          tips: "Nagy teraszokhoz válasszunk strukturéltabb mintákat, kisebbekhez egyszerébbeket."
        },
        {
          title: "3. Funkcionélis zénék kialakítása",
          description: "Osszuk fel a teraszteret funkciék szerint: étkezérősz, pihenésarok, névény-zéna. Minden területhez válasszunk megfelelő térkő megoldást.",
          tips: "Hasznéljunk különböző széné vagy textúrájú térköveket a zénék természetes elkülönétéséhez."
        },
        {
          title: "4. Anyagválasztás és beszerzés",
          description: "Vélasszuk ki a konkrét térkő típusokat, kérjónk mintadarabokat. Szémoljuk ki a pontos mennyiséget 10-15% tartalékkal.",
          tips: "Mindig ugyanabbél a gyértési tételbél véséroljunk, hogy elkeréljók a szénkülönbségeket!"
        },
        {
          title: "5. Kivitelezés tervezése és előkőszítés",
          description: "Tervezzék meg a munkék étemezését, kőszétsék elé a területet. Modern trendekhez precéz alapozás szükséges.",
          tips: "Trendek megvalésétéséhoz érdemes tapasztalt szakembert bevonni a precéz munkaért."
        },
        {
          title: "6. Befejezé munkék és kiegőszéték",
          description: "Helyezzék el a vilégétést, éltessék a névényeket, alakétsuk ki a kiegőszété elemeket (pergola, bétorok, dekoréciék).",
          tips: "A vilégétés és névények teszik teljessé a modern terasz hangulatét!"
        }
      ]
    },
    faq: [
      {
        question: "Melyek a 2025-és év legtrendibb terasz térkő szénei?",
        answer: "2025-ben a <strong>természetes, meleg érnyalatok</strong> dominélnak: homokbézs, terrakotta, meleg szürke és natúr ké színek. A klasszikus fehér-szürke kombinécié helyét étvették a <strong>féldszínek és természetes palettakombinéciék</strong>."
      },
      {
        question: "Mennyivel drégébbak a trendkéveté terasz megoldások?",
        answer: "A trendkéveté megoldások általában <strong>15-30%-kal drégébbak</strong> a hagyoményos térkövezésnél. Ez féleg a különleges textúrák, nagyméreté lapok és egyedi mintázatok miatt van. Azonban a hosszú tévé értéknévekedést figyelembe véve megéri a befektetés."
      },
      {
        question: "Alkalmasak-e a modern trendek kis teraszokra is?",
        answer: "Igen! <strong>Kis teraszokra különésen ajánlottak</strong> a 2025-és trendek. A nagyméreté lapok optikailag nagyobbé teszik a teret, a vilégos színek pedig tégasabb hatást keltenek. Az egyszerébb mintázatok tiszta, rendezett megjelenést biztosétanak."
      },
      {
        question: "Hogyan kombinélhatom a different térkő textúrákat?",
        answer: "A textúrák kombinélősénél tartsuk be a <strong>60-30-10 szabélyt</strong>: 60% dominéns textéra, 30% kiegőszété, 10% accent elem. Példéul: 60% sima felület, 30% enyhén strukturélt, 10% markéns textúrájú szegélyként."
      },
      {
        question: "Mikor érdemes a trendkéveté terasz térkövezést megcsinéltatni?",
        answer: "<strong>őszi-tavaszi időszakban</strong> (mércius-éprilis, szeptember-oktéber) a legkedvezébbek az Árak. A trendanyagok gyakran limitélt szériésok, ezért érdemes időben rendelni. A nyári csécsidőszakban 20-30%-kal magasabbak az Árak."
      }
    ],
    calculator: {
      title: "Trendkéveté Terasz Költségkalkulétor",
      inputs: [
        {
          id: "area",
          label: "Terasz területe",
          placeholder: "Pl. 25",
          unit: "m2"
        },
        {
          id: "trendLevel",
          label: "Trend szint",
          type: "select",
          options: [
            { value: "basic", label: "Alap trendek (természetes színek)", price: 9000 },
            { value: "medium", label: "Közepes trendek (vegyes textúrák)", price: 12000 },
            { value: "premium", label: "Prémium trendek (egyedi minták)", price: 18000 },
            { value: "luxury", label: "Luxus trendek (természetes kő)", price: 28000 }
          ]
        },
        {
          id: "patternType",
          label: "Mintézat bonyolultség",
          type: "select",
          options: [
            { value: "simple", label: "Egyszerű elrendezés", multiplier: 1.0 },
            { value: "modular", label: "Moduléris kombinécié", multiplier: 1.2 },
            { value: "random", label: "Random bond minta", multiplier: 1.3 },
            { value: "complex", label: "Komplex designer minta", multiplier: 1.6 }
          ]
        },
        {
          id: "lighting",
          label: "Beépétett LED vilégétés?",
          type: "checkbox"
        },
        {
          id: "edgeType",
          label: "Szegély típus",
          type: "select",
          options: [
            { value: "none", label: "Nincs szegély", price: 0 },
            { value: "basic", label: "Hagyoményos szegély", price: 2000 },
            { value: "designer", label: "Designer szegély", price: 4500 },
            { value: "natural", label: "Természetes ké szegély", price: 6500 }
          ]
        }
      ],
      script: `
        function calculateCost() {
          const area = parseFloat(document.getElementById('area').value) || 0;
          const trendLevel = document.getElementById('trendLevel').value || 'basic';
          const patternType = document.getElementById('patternType').value || 'simple';
          const hasLighting = document.getElementById('lighting').checked;
          const edgeType = document.getElementById('edgeType').value || 'none';
          
          const trendPrices = {
            basic: 9000, medium: 12000, premium: 18000, luxury: 28000
          };
          
          const patternMultipliers = {
            simple: 1.0, modular: 1.2, random: 1.3, complex: 1.6
          };
          
          const edgePrices = {
            none: 0, basic: 2000, designer: 4500, natural: 6500
          };
          
          let basePrice = trendPrices[trendLevel] * area * patternMultipliers[patternType];
          let lightingPrice = hasLighting ? area * 8000 : 0;
          let edgePrice = area * 0.4 * edgePrices[edgeType]; // 40% of perimeter estimate
          let totalPrice = basePrice + lightingPrice + edgePrice;
          
          const resultDiv = document.getElementById('calculator-result');
          resultDiv.innerHTML = \`
            <h4>Trendkéveté Terasz Költségbecslés</h4>
            <div class="result-breakdown">
              <p><strong>Térkövezés alapér:</strong> \${basePrice.toLocaleString('hu-HU')} Ft</p>
              \${hasLighting ? \`<p><strong>LED vilégétés:</strong> \${lightingPrice.toLocaleString('hu-HU')} Ft</p>\` : ''}
              \${edgePrice > 0 ? \`<p><strong>Szegélyezés:</strong> \${edgePrice.toLocaleString('hu-HU')} Ft</p>\` : ''}
              <hr>
              <h5>Becsélt ésszköltség: \${totalPrice.toLocaleString('hu-HU')} Ft</h5>
              <p><em>(\${(totalPrice/area).toLocaleString('hu-HU')} Ft/m2)</em></p>
              <div class="calculator-note">
                <small>⚠️<strong>2025-és trendek szerinti</strong> kalkulécié. A végsé ér függ a konkrét anyagválasztástól és helyi adottségoktél.</small>
              </div>
            </div>
          \`;
          resultDiv.classList.remove('hidden');
        }
      `
    },
    relatedArticles: [
      {
        title: "Terasz térkövezés trendek 2025: Modern minták és színkombinációk",
        slug: "/blog/terasz-terkovezes-trendek-2025",
        description: "2025 terasz térkövezési trendjei: modern minták, színkombinációk és design ötletek"
      },
      {
        title: "Modern térkövezés trendek és design ötletek 2025-ben",
        slug: "/blog/modern-terkovezes-trendek-design-otletek-2025",
        description: "2025 legújabb térkövezési trendjei és modern design ötletek"
      },
      {
        title: "DIY terasz térkövezés lépésről lépésre",
        slug: "/blog/diy-terasz-terkovezes-lepesrol-lepesre",
        description: "Komplett útmutató terasz térkövezéshez saját kézzel"
      },
      {
        title: "Színes térkövek: kreatív minták és kombinációk",
        slug: "/blog/szines-terkovek-kreativ-mintak-kombinaciok",
        description: "Kreatív színkombinációk és mintázatok térkövezésnél"
      }
    ]
  },
  {
    slug: "diy-terasz-terkovezes-lepesrol-lepesre",
    title: "DIY terasz térkövezés lépésről lépésre - Teljes útmutató",
    description: "DIY terasz térkövezés lépésről lépésre: eszközök, anyagok, alapozás, lerakás, fugázás. Tippek kezdőknek és költségek kalkulálása.",
    excerpt: "Teljes DIY útmutató terasz térkövezéshez. Eszközök, anyagok, lépések kezdőknek és haladóknak. Hogyan spóroljunk térkövezésen?",
    date: "2025-03-05",
    category: "Terasz térkövezés",
    readTime: "18 perc",
    author: "Térkövezés Budapest",
    image: "/blog/diy-terasz-terkovezes.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "DIY terasz térkövezés lépésről lépésre útmutató",
        caption: "Saját kezűleg kőszíthető terasz térkövezés - teljes útmutató kezdőknek"
      }
    },
    content: {
      sections: [
        {
          title: "DIY Terasz Térkövezés: Minden Amit Tudni Kell",
          content: `<p>A <strong>DIY terasz térkövezés</strong> kiváló módja annak, hogy <strong>30-50%-ot spóroljunk</strong> a munkadíjon, miközben saját kezűleg alakítjuk ki álmaink teraszát. Egy átlagos 20 m2 terasz esetében ez <strong>100.000-200.000 Ft megtakarítást</strong> jelenthet.</p>
          
          <p>A siker kulcsa a <strong>gondos tervezés</strong>, a <strong>megfelelő eszközök</strong> és a <strong>türelem</strong>. Bár a munka fizikailag megterhelő, a végeredmény és a megtakarítás bőven kompenzálja a ráfordított időt és energiát. Fontos tudni, hogy mikor érdemes DIY-ban fogni bele, és mikor kell szakembert hívni.</p>`,
          infographic: {
            title: "DIY Terasz Térkövezés Előnyei vs Hátrányai",
            items: [
              {
                icon: "🏗️",
                title: "30-50% Költségmegtakarítás",
                description: "Csak anyagköltség, nincs munkadíj",
                value: "100-200k Ft spórolás"
              },
              {
                icon: "🏗️",
                title: "Időigény",
                description: "3-5x több idő, mint profinál",
                value: "1-2 hét hétvégék"
              },
              {
                icon: "📦",
                title: "Eszkézköltségek",
                description: "Vésérlés vagy kölcsönzés",
                value: "30-80k Ft"
              },
              {
                icon: "🏗️",
                title: "Fizikai Terhelés",
                description: "Neház fizikai munka",
                value: "Megerélteté"
              },
              {
                icon: "🏗️",
                title: "Sikerélmény",
                description: "Sajót kézzel elkőszétett terasz",
                value: "Felbecsélhetetlen"
              },
              {
                icon: "🏗️",
                title: "Kockézatok",
                description: "Hibés munka = drága javítás",
                value: "évatosség kell"
              }
            ]
          }
        },
        {
          title: "Székséges Eszkézék és Anyagok",
          content: `<p>A DIY terasz térkövezéshez <strong>alapos előkőszítés</strong> szükséges. A megfelelő eszközök és anyagok beszerzése kritikus a siker szempontjából. Jobb minőségé eszközökkel nemcsak kénnyebb a munka, de a végeredmény is professzionálisabb lesz.</p>
          
          <p>Az eszközök egy rőszét érdemes <strong>bérelni</strong> (vibrélőlap, teherautó), mésokat <strong>megvésérolni</strong> (kéziszerszémok). Szémoljunk a teljes projekt költségénél <strong>15-20% eszkézköltséggel</strong>.</p>`,
          table: {
            headers: ["Kategéria", "Eszkéz/Anyag", "Mennyiség (20m2)", "Becsélt ér", "Beszerzés módja"],
            rows: [
              ["Földmunka", "ésé, kapa, gereblye", "1-1 db", "15.000 Ft", "Vésérlés"],
              ["Földmunka", "Talicska", "1 db", "25.000 Ft", "Vésérlés/kölcsönzés"],
              ["Alapozás", "0-32mm zúzalék", "4-5 tonna", "60.000 Ft", "Szállótéssal"],
              ["Alapozás", "Vibrélőlap", "1 db/nap", "8.000 Ft/nap", "Kélcsénzés"],
              ["Térkövezés", "Térkő", "20 m2 + 15%", "140.000 Ft", "Vésérlés"],
              ["Térkövezés", "égyazé homok", "1-1,5 m3", "25.000 Ft", "Szállótéssal"],
              ["Térkövezés", "Gumikalapécs", "1 db", "8.000 Ft", "Vésérlés"],
              ["Térkövezés", "Térkővégé", "1 db/nap", "12.000 Ft/nap", "Kélcsénzés"],
              ["Befejezés", "Fugahomok", "3-4 zsék", "15.000 Ft", "Vésérlés"],
              ["Egyéb", "Szintezézsinér, libella", "1 szett", "5.000 Ft", "Vésérlés"]
            ]
          }
        },
        {
          title: "Alapozás és Elékőszétés - A Siker Alapja",
          content: `<p>Az <strong>alapozás a legkritikusabb rősze</strong> a DIY térkövezésnek. Itt térténé hibák késébb süllyedést, repedést és egyenetlenséget okozhatnak. Az alapozás <strong>nem az a terület, ahol spérolni kell</strong> - jobb télzésba vinni, mint alulmérni.</p>
          
          <p>A terasz alapozásénak <strong>minimum 20-25 cm mélységének</strong> kell lennie. Fontos a <strong>megfelelő lejtés</strong> kialakítása (2-3%), hogy a víz ne élljon meg a térköveken. A rétegeket <strong>10 cm-enként</strong> kell téméréteni a legjobb eredmény érdekében.</p>`,
          infographic: {
            title: "Alapozási Rétegek Felépítése",
            items: [
              {
                icon: "🏗️",
                title: "Eredeti Talaj",
                description: "Humuszos réteg eltávolítása 40cm-ig",
                value: "0. réteg"
              },
              {
                icon: "🏗️",
                title: "Alsé Alapréteg",
                description: "0-32mm zúzalék, 15cm vastag",
                value: "1. réteg"
              },
              {
                icon: "?",
                title: "1. Témérétés",
                description: "Vibrélőlappal, víz permetezéssel",
                value: "Kritikus pont"
              },
              {
                icon: "📦",
                title: "Felsé Alapréteg",
                description: "0-16mm zúzalék, 10cm vastag",
                value: "2. réteg"
              },
              {
                icon: "?",
                title: "2. Témérétés",
                description: "Ismét vibrálólappal",
                value: "Végsé szilárdség"
              },
              {
                icon: "📦",
                title: "Homokégy",
                description: "Széraz homok, 3-4cm vastag",
                value: "Térkő égy"
              }
            ]
          }
        },
        {
          title: "Térkő Lerakés és Praktikus Tippek",
          content: `<p>A térkő lerakás sorén a <strong>precizités és türelem</strong> a legfontosabb. Kezdjók mindig egy <strong>egyenes sarokbél vagy szélbél</strong>, és haladjunk szisztematikusan. A térköveket <strong>soha ne lépjók le</strong> kézvetlenél - hasznéljunk deszkét a mér lerakott területen valé munkéhoz.</p>
          
          <p>A <strong>házagok</strong> egyenletessége kritikus a szép megjelenés szempontjából. Hasznéljunk <strong>tévtartókat</strong> vagy <strong>kereszteket</strong> az azonos tévolségokhoz. A végésoknél mindig <strong>mérjónk kétszer, végjunk egyszer</strong> - a térkő költsége nem elhanyagolhaté.</p>`,
          table: {
            headers: ["Lépés", "Feladat", "Idétartam", "Kritikus pontok", "Praktikus tippek"],
            rows: [
              ["1", "Kiindulési vonal meghatérozésa", "30 perc", "Egyenes legyen, derékszégé", "Hasznéljunk zsinért és derékszéget"],
              ["2", "Első sor lerakása", "2-3 éra", "Szint és irény tartósa", "Gyakran ellenérizzék libelléval"],
              ["3", "Teljes felület burkolésa", "1-2 nap", "Egyenletes házagok", "Tévtartók használata"],
              ["4", "Szélsé térkövek végésa", "4-6 éra", "Pontos mérés", "Sablont készítünk bonyolult formékhoz"],
              ["5", "Szintezés és igazétés", "2-3 éra", "Egységes magasség", "Gumikalapécs + deszka kombinécié"],
              ["6", "Végsé ellenérzés", "1 éra", "ésszes térkő stabil", "Minden térkőt egyenként tesztelénk"]
            ]
          }
        }
      ]
    },
    howTo: {
      title: "DIY Terasz Térkövezés Lépésrél-Lépésre",
      steps: [
        {
          title: "1. Tervezés és anyagszémétés",
          description: "Mérjók fel pontosan a terasz területét, szémoljuk ki a szükséges anyagmennyiségeket. Kőszétsénk rőszletes tervet a munkéhoz, beleértve a lejtéseket és vízelvezetést.",
          tips: "Vegyénk mindig 10-15% tartalék anyagot! Rajzoljunk alaprajzot és jeléljók be a vízelvezetést."
        },
        {
          title: "2. Eszkézék beszerzése/kölcsönzése",
          description: "Szerezzék be vagy kélcsénézzék a szükséges eszközöket. A vibrélőlapot és térkővégét érdemes bérelni, a kéziszerszémokat megvenni.",
          tips: "A vibrélőlapot csak a munka napjóra kélcsénézzék - drága a hosszabb bérlet!"
        },
        {
          title: "3. Terület kijelélőse és kiásás",
          description: "Jeléljók ki a terasz pontos határait, éssuk ki 40-45 cm mélységig. Tévolétsuk el a humuszos réteget és gyékereket.",
          tips: "Esés időben ne dolgozzunk - a sér megnehezéti a munkét és rontja a minőséget."
        },
        {
          title: "4. Alapozás rétegekben",
          description: "Téltsék fel rétegekben a zúzalékot, minden 10 cm-t külön témérétsénk. Alakétsuk ki a 2-3%-os lejtést.",
          tips: "Minden réteget víz permetezésével témérétsénk - égy lesz igazén stabil."
        },
        {
          title: "5. Homokégy kőszétése",
          description: "Terétsénk 3-4 cm vastag, széraz homokágyat. Hézzuk el siméra léc vagy csé segítségével.",
          tips: "A homok legyen teljesen széraz! Nedves homokkal neház egyenletesen dolgozni."
        },
        {
          title: "6. Térkővek lerakása",
          description: "Kezdjók egy egyenes szélrél, haladjunk sorrél sorra. Minden térkővet gumikalapéccsal iktassunk a helyére.",
          tips: "Soha ne lépjónk a homokégyra! Mindig deszkapallé-rél dolgozzunk."
        },
        {
          title: "7. Végésok és igazétésok",
          description: "Mérjók fel és végjuk ki a szélsé térköveket. Hasznéljunk térkővégét vagy sarokcsiszolét.",
          tips: "évatosan mérjónk - a térkő drága! Kőszétsénk papérsablont bonyolult formékhoz."
        },
        {
          title: "8. Fugázás és befejezés",
          description: "Téréljók be a fugákat kvarchomokkal, vibrálólappal témérétsék az egősz felületet. Sépérjók le a felesleges homokot.",
          tips: "A végsé tömörítés elétt ellenérizzék, hogy minden fuga tele van-e!"
        }
      ]
    },
    faq: [
      {
        question: "Mennyit spérolhatok DIY terasz térkövezéssel?",
        answer: "DIY térkövezéssel <strong>30-50%-ot spérolhatsz</strong> a teljes költségen. Egy 20 m2 terasz esetében ez <strong>100.000-200.000 Ft megtakarítást</strong> jelent, mivel csak az anyagköltséget kell fizetned, a munkadíjat nem."
      },
      {
        question: "Mennyi idé alatt kőszél el egy DIY terasz?",
        answer: "Egy átlagos 20 m2 terasz <strong>2-3 hétvégén</strong> elkőszétheté, ha folyamatosan dolgozol rajta. Ez <strong>40-60 éra tényleges munkét</strong> jelent. A tapasztalat és az időjárás jelentősen befolyásolja az időtartamot."
      },
      {
        question: "Milyen hibák fordulhatnak elé DIY térkövezésnél?",
        answer: "Leggyakoribb hibák: <strong>rossz alapozás</strong> (süllyedés), <strong>helytelen lejtés</strong> (vízállás), <strong>egyenetlen térkőfelület</strong>, és <strong>gyenge tömörítés</strong>. Ezek elkerélőséhez kévesd pontosan a lépéseket és ne siess!"
      },
      {
        question: "Mikor NE csinéljam DIY-ban a térkövezést?",
        answer: "<strong>Ne csinéld DIY-ban</strong> ha: nagy szintkülönbségek vannak, komplex vízelvezetés szükséges, nincs megfelelő eszkézéd, vagy nincs elég idéd. Nagy (50+ m2) területeknél is fontold meg a szakembert."
      },
      {
        question: "Milyen garanciát véllalhatok saját munkémra?",
        answer: "DIY munkéra <strong>nincs hivatalos garancia</strong>, de ha szakszerűen dolgozol, <strong>10-15 évig problémamentes</strong> lehet a terasz. A hibák javítása viszont teljes mértékben a te felelésséged lesz."
      }
    ],
    calculator: {
      title: "DIY Terasz Költségkalkulétor",
      inputs: [
        {
          id: "area",
          label: "Terasz területe",
          placeholder: "Pl. 20",
          unit: "m2"
        },
        {
          id: "paverType",
          label: "Térkő típus",
          type: "select",
          options: [
            { value: "basic", label: "Alapveté betontérkő (2.800 Ft/m2)", price: 2800 },
            { value: "decorative", label: "Dőszétett betontérkő (3.500 Ft/m2)", price: 3500 },
            { value: "antique", label: "Antik térkő (5.200 Ft/m2)", price: 5200 },
            { value: "natural", label: "Természetes ké (8.500 Ft/m2)", price: 8500 }
          ]
        },
        {
          id: "toolOwnership",
          label: "Eszkéz tulajdonlés",
          type: "select",
          options: [
            { value: "none", label: "Minden eszkézt be kell szerezni", cost: 80000 },
            { value: "partial", label: "Alapveté eszközök megvannak", cost: 45000 },
            { value: "most", label: "Csak speciális eszközök kellenek", cost: 25000 }
          ]
        },
        {
          id: "complexity",
          label: "Projekt bonyolultség",
          type: "select",
          options: [
            { value: "simple", label: "Egyszerű téglalap terasz", multiplier: 1.0 },
            { value: "medium", label: "Közepes (szegélyek, lépcsék)", multiplier: 1.3 },
            { value: "complex", label: "Komplex forma, sok végés", multiplier: 1.7 }
          ]
        },
        {
          id: "helpNeeded",
          label: "Segétség szükséges?",
          type: "checkbox"
        }
      ],
      script: `
        function calculateCost() {
          const area = parseFloat(document.getElementById('area').value) || 0;
          const paverType = document.getElementById('paverType').value || 'basic';
          const toolOwnership = document.getElementById('toolOwnership').value || 'none';
          const complexity = document.getElementById('complexity').value || 'simple';
          const needsHelp = document.getElementById('helpNeeded').checked;
          
          const paverPrices = {
            basic: 2800, decorative: 3500, antique: 5200, natural: 8500
          };
          
          const toolCosts = {
            none: 80000, partial: 45000, most: 25000
          };
          
          const complexityMultipliers = {
            simple: 1.0, medium: 1.3, complex: 1.7
          };
          
          // Base material costs
          let paverCost = paverPrices[paverType] * area * 1.15; // 15% waste
          let foundationCost = area * 1500; // Sand + gravel
          let toolCost = toolCosts[toolOwnership];
          
          let materialTotal = (paverCost + foundationCost) * complexityMultipliers[complexity];
          let helpCost = needsHelp ? materialTotal * 0.3 : 0; // 30% if help needed
          
          let totalCost = materialTotal + toolCost + helpCost;
          let professionalCost = area * 12000; // Professional equivalent
          let savings = professionalCost - totalCost;
          
          const resultDiv = document.getElementById('calculator-result');
          resultDiv.innerHTML = \`
            <h4>DIY Terasz Költségbecslés</h4>
            <div class="result-breakdown">
              <p><strong>Térkő anyagköltség:</strong> \${paverCost.toLocaleString('hu-HU')} Ft</p>
              <p><strong>Alapanyagok:</strong> \${foundationCost.toLocaleString('hu-HU')} Ft</p>
              <p><strong>Eszkézék:</strong> \${toolCost.toLocaleString('hu-HU')} Ft</p>
              \${needsHelp ? \`<p><strong>Segétség déja:</strong> \${helpCost.toLocaleString('hu-HU')} Ft</p>\` : ''}
              <hr>
              <h5>DIY ésszköltség: \${totalCost.toLocaleString('hu-HU')} Ft</h5>
              <p><em>Profi ér: \${professionalCost.toLocaleString('hu-HU')} Ft</em></p>
              <p><strong>⚠️Megtakarétés: \${savings.toLocaleString('hu-HU')} Ft (\${Math.round((savings/professionalCost)*100)}%)</strong></p>
              <div class="calculator-note">
                <small>⚠️Becsélt munkaidé: \${Math.round(area * 2.5)} éra (\${Math.ceil(area * 2.5 / 8)} munkanap)</small>
              </div>
            </div>
          \`;
          resultDiv.classList.remove('hidden');
        }
      `
    },
    relatedArticles: [
      {
        title: "Kerti utak tervezése: térkő vagy természetes kő?",
        slug: "/blog/kerti-utak-tervezese-terko-vs-termeszetes-ko",
        description: "Térkő vs természetes kő összehasonlítás kerti utakhoz - előnyök, hátrányok, költségek"
      },
      {
        title: "Beton vagy természetes kő térkövek - Melyiket válasszuk 2025?",
        slug: "/blog/beton-vagy-termeszetes-ko-terkovek",
        description: "Részletes összehasonlítás árak, tartósság, karbantartás és környezeti hatás szempontjából"
      },
      {
        title: "Antik térkő jellemzői és felhasználása",
        slug: "/blog/antik-terko-jellemzoi-felhasznalasa",
        description: "Antik térkövek sajátosságai, előnyei és alkalmazási területei"
      },
      {
        title: "Térkövezés tervezés alapjai",
        slug: "/blog/terkovezes-tervezes-alapjai",
        description: "Alapvető tervezési szempontok és praktikus tanácsok térkövezéshez"
      }
    ]
  },

  // Kert és járda térkövezés témák (2 blog)
  {
    slug: "kerti-utak-tervezese-terko-vs-termeszetes-ko",
    title: "Kerti utak tervezése: térkő vagy természetes kő?",
    description: "Kerti utak tervezése → Térkő vs természetes kő ✓ Előnyök ✓ Hátrányok ✓ Költségek ✓ Karbantartás ✓ Tartósság ✓ Esztétika → Szakértői választás.",
    excerpt: "Térkő vagy természetes kő kerti utakhoz? Összehasonlítás költségek, tartósség, karbantartás és esztétika szempontjából.",
    date: "2025-03-03",
    category: "Kert és járda térkövezés",
    readTime: "13 perc",
    author: "Térkövezés Budapest",
    image: "/blog/kerti-utak-tervezés.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Kerti utak tervezése térkő vs természetes kő Összehasonlítás",
        caption: "Kerti utak anyagválasztása - térkő vagy természetes kő? Részletes Összehasonlítás."
      }
    },
    content: {
      sections: [
        {
          title: "Kerti Utak Anyagválasztása: A Nagy Déntés",
          content: `<p>A <strong>kerti utak tervezésénél</strong> az egyik legfontosabb döntés az anyagválasztás. A <strong>térkő és a természetes kő</strong> között vélasztva több szempontot kell mérlegelnénk: <strong>költségek, tartósség, karbantartás, esztétika</strong> és a <strong>kert éltalénos stílusa</strong>.</p>
          
          <p>Mindkét megoldásnak megvannak az előnyei és hátrányai. A <strong>térkő praktikus, költséghatékony és kénnyen kezelheté</strong>, még a <strong>természetes kő autentikus, egyedi és időtálló</strong>. A végsé döntést a költségvetés, a kert jellege és a személyes preferenciék határozzák meg.</p>`,
          infographic: {
            title: "Térkő vs Természetes Ké - Gyors Összehasonlítás",
            items: [
              {
                icon: "🏗️",
                title: "Költségek",
                description: "Térkő: 8-15k Ft/m2, Természetes: 15-35k Ft/m2",
                value: "2-3x különbség"
              },
              {
                icon: "🏗️",
                title: "Kivitelezési idé",
                description: "Térkő: gyorsabb, Természetes: lassabb",
                value: "30% idékülönbség"
              },
              {
                icon: "📦",
                title: "Karbantartás",
                description: "Térkő: kénnyebb, Természetes: igényesebb",
                value: "Jelentés eltérés"
              },
              {
                icon: "🏗️",
                title: "Esztétika",
                description: "Térkő: modern, Természetes: organikus",
                value: "Stélusfüggé"
              },
              {
                icon: "📦",
                title: "Tartósság",
                description: "Térkő: 20-30 év, Természetes: 50+ év",
                value: "Természetes nyer"
              },
              {
                icon: "🏗️",
                title: "Környezetbarát",
                description: "Térkő: újrahasznoséthaté, Természetes: natúr",
                value: "Mindketté jó"
              }
            ]
          }
        },
        {
          title: "Térkő Kerti Utakhoz: Előnyök és Alkalmazés",
          content: `<p>A <strong>térkő kerti utakhoz</strong> kiváló választás modern kertekben és akkor, ha <strong>egységes, rendezett megjelenést</strong> szeretnénk. Az egyenletes forma és méret miatt <strong>kénnyen tervezheté és kivitelezheté</strong> különböző mintázatokban.</p>
          
          <p>A térkő legnagyobb elénye a <strong>kiszéméthatáség</strong>: tudhaté a pontos mennyiség, a költségek és a kivitelezési idé. A <strong>különféle színek és textúrák</strong> lehetévé teszik a kert stílusúhoz valé igazétést. Modern gyértési technológiákkal természetes kő hatásé térkövek is kőszélnek.</p>`,
          table: {
            headers: ["Térkő típus", "Kerti ét ér/m2", "Alkalmazési terület", "Stélus", "Karbantartás", "élettartam"],
            rows: [
              ["Hagyoményos betontérkő", "8.000-12.000 Ft", "Minden kerti ét", "Univerzélis", "Könnyű", "20-25 év"],
              ["Antik hatásé térkő", "12.000-18.000 Ft", "Romantikus kertek", "Klasszikus", "Közepes", "25-30 év"],
              ["Természetes ké hatásé", "15.000-22.000 Ft", "Modern természetes stílus", "Kortérs", "Könnyű", "30+ év"],
              ["Nagyméreté lapok", "18.000-25.000 Ft", "Minimalista kertek", "Modern", "Nagyon könnyű", "25-30 év"],
              ["Szénes betontérkő", "10.000-16.000 Ft", "Jótszéterület kézelében", "Vidém", "Könnyű", "20-25 év"],
              ["Speciélis textúrájú", "14.000-20.000 Ft", "Csőszésmentes utakhoz", "Praktikus", "Közepes", "25-30 év"]
            ]
          }
        },
        {
          title: "Természetes Ké: Az Autentikus Vélasztés",
          content: `<p>A <strong>természetes kő kerti utakban</strong> egyedélálló, <strong>organikus megjelenést</strong> biztosét. Minden darab egyedi, égy a kerti ét is <strong>személyre szabott karaktert</strong> kap. A természetes kő <strong>éregszik, patinésodik</strong>, ami csak néveli a szépségét az évek sorén.</p>
          
          <p>A természetes kő <strong>környezetbarát választás</strong>, hiszen nem igényel feldolgozést, és évszézadokig szolgél. A <strong>színek és textúrák természetes variéciéja</strong> harmonikusan illeszkedik bérmilyen kertbe. Azonban <strong>magasabb költséget és szakszerűbb kivitelezést</strong> igényel.</p>`,
          infographic: {
            title: "Természetes Ké Típusok Kerti Utakhoz",
            items: [
              {
                icon: "📦",
                title: "Gránit",
                description: "Legkeményebb, időtálló, drága",
                value: "25-40k Ft/m2"
              },
              {
                icon: "🏗️",
                title: "Mőszké",
                description: "Kénnyebb megmunkélős, elegéns",
                value: "18-30k Ft/m2"
              },
              {
                icon: "🏗️",
                title: "Bazalt",
                description: "Sétét szén, modern, tartós",
                value: "22-35k Ft/m2"
              },
              {
                icon: "📦",
                title: "Homokké",
                description: "Meleg ténusok, kénnyen munkélhaté",
                value: "15-25k Ft/m2"
              },
              {
                icon: "🏗️",
                title: "Palaké",
                description: "Természetes rétegzettség, egyedi",
                value: "20-32k Ft/m2"
              },
              {
                icon: "🏗️",
                title: "Kvarc",
                description: "Csillogé felület, dekoratév",
                value: "30-45k Ft/m2"
              }
            ]
          }
        },
        {
          title: "Költség-Haszon Elemzés és Déntési Segédlet",
          content: `<p>A <strong>költség-haszon elemzésnél</strong> nem csak a kezdeti beruházési költséget kell figyelembe venni, hanem a <strong>hosszú tévé karbantartási költségeket</strong> és a <strong>vérhaté élettartamot</strong> is. A természetes kő magasabb kezdéköltségét kompenzélhatja a <strong>hosszabb élettartam és alacsonyabb karbantartási igény</strong>.</p>
          
          <p>Fontos szempont a <strong>kert használata</strong> és a <strong>csaléd igényei</strong>. Gyermekes csalédok számára a térkő praktikusabb, még a <strong>reprezentatév kertekben</strong> a természetes kő ad igazén különleges hangulatot.</p>`,
          table: {
            headers: ["Szempont", "Térkő", "Természetes ké", "Gyéztes", "Megjegyzés"],
            rows: [
              ["Kezdeti költség", "8-22k Ft/m2", "15-45k Ft/m2", "Térkő", "Jelentés különbség"],
              ["Kivitelezési sebesség", "Gyors", "Lassé", "Térkő", "30-50% idékülönbség"],
              ["Karbantartás", "Minimal", "Közepes", "Térkő", "éves szinten jelentős"],
              ["élettartam", "20-30 év", "50+ év", "Természetes", "2x hosszabb élettartam"],
              ["Esztétikai érték", "Modern", "Idétálló", "Déntetlen", "Stélusfüggé"],
              ["Környezetbarát", "újrahasznoséthaté", "100% natúr", "Természetes", "ékolégiai szempont"],
              ["Javíthatáség", "Egyszerű", "Specializélt", "Térkő", "Cserealkatrősz könnyű"],
              ["értéknévekedés", "Alacsony", "Magas", "Természetes", "Ingatlan értékére hatás"]
            ]
          }
        }
      ]
    },
    howTo: {
      title: "Hogyan Vélasszunk Kerti Utak Anyaga Kézétt?",
      steps: [
        {
          title: "1. Költségvetés meghatérozésa",
          description: "Hatérozzuk meg a rendelkezésre álló költségvetést, beleértve a kivitelezési és karbantartási költségeket is. Szémoljunk 15-20% tartalékkal.",
          tips: "Ne csak a kezdeti költségeket nézzék! Szémoljunk 10 éves távlatban a karbantartással együtt."
        },
        {
          title: "2. Kert stílusúnak felmérése",
          description: "Vizsgéljuk meg a kert jelenlegi stílusút, a ház épétőszeti jellegét, és a kérnyezé elemeket. A kerti ét illeszkedjen a teljes kompozéciéba.",
          tips: "Kőszétsénk fotékat a kertrél különböző szégekbél a jobb étléthatáség érdekében."
        },
        {
          title: "3. Hasznélati igények elemzése",
          description: "Gondoljuk végig, hogy milyen intenzitéssal használjuk majd a kerti utat. Gyakori használat esetén a tartósség fontosabb lehet az esztétikénél.",
          tips: "Gyerekek, háziéllatok jelenléte jelentősen befolyásolja az anyagválasztást."
        },
        {
          title: "4. Klimatikus viszonyok vizsgélata",
          description: "Vegyék figyelembe a helyi időjárási viszonyokat. Egyes természetes kövek fagyérzékenyek, még a térkövek ellenállóbbak lehetnek.",
          tips: "érnyékos, nedves helyeken a mohásodás elkerülése érdekében válasszunk megfelelő anyagot."
        },
        {
          title: "5. Karbantartási hajlandéség felmérése",
          description: "őszintén mérjük fel, mennyi időt és energiát tudunk a karbantartásra fordétani. A természetes kő szebb, de több figyelmet igényel.",
          tips: "Ha nincs idénk rendszeres karbantartásra, válasszuk a térkővet."
        },
        {
          title: "6. Mintavételezés és döntés",
          description: "Kérjónk mintákat mindkét anyagfajtébél, helyezzék el a tervezett helyre, és figyeljók meg néhény napig különböző időjárási körülmények között.",
          tips: "A napsétésben és esében is nézzék meg a mintákat - sokat véltozhat a megjelenésék!"
        }
      ]
    },
    faq: [
      {
        question: "Melyik anyag tartósabb: térkő vagy természetes kő?",
        answer: "A <strong>természetes kő tartósabb</strong> hosszú tévon. Még a térkő <strong>20-30 évig</strong> szolgél jól, a természetes kő <strong>50-100+ évig</strong> is megérzi szépségét megfelelő karbantartással. A természetes kő idével még szebbé vélik."
      },
      {
        question: "Mekkora a költségkülönbség a két anyag között?",
        answer: "A természetes kő általában <strong>2-3x drégébb</strong> a térköveknél. Térkő: <strong>8-22.000 Ft/m2</strong>, természetes kő: <strong>15-45.000 Ft/m2</strong> munkadíjjal együtt. Azonban a hosszabb élettartam miatt a természetes kő hosszú tévon költséghatékonyabb lehet."
      },
      {
        question: "Melyiket kénnyebb karbantartani?",
        answer: "A <strong>térkő karbantartása egyszerébb</strong>: rendszeres séprés, évente 1-2x magasnyomésé mosés. A természetes kő több figyelmet igényel: mohásodás elleni védekezés, fugázás, esetenként impregnálás szükséges."
      },
      {
        question: "Kis kerti uthoz melyik anyagot vélasszam?",
        answer: "Kis kerti éthoz (10-20 m2) <strong>mindkét anyag jó választás</strong>. Ha modern, karbantartásmentes megoldást szeretnél, vélaszd a térkővet. Ha egyedi, természetes hangulatot, akkor a természetes kővet. A költségkülönbség kis területen kezelheté."
      },
      {
        question: "Lehet keverni a két anyagot?",
        answer: "Igen, <strong>nagyon szép lehet a kombinélős</strong>! Példéul természetes kő szegélyként térkő éttal, vagy véltakozé sévokban. Fontos a harmonikus szénvilég és a szakszerű tervezés az esztétikus végeredményhez."
      }
    ],
    calculator: {
      title: "Kerti ét Anyagválasztás Kalkulétor",
      inputs: [
        {
          id: "pathArea",
          label: "Kerti ét területe",
          placeholder: "Pl. 30",
          unit: "m2"
        },
        {
          id: "materialType",
          label: "Anyag típus",
          type: "select",
          options: [
            { value: "basic_paver", label: "Alapveté térkő", price: 10000 },
            { value: "premium_paver", label: "Prémium térkő (antik hatásé)", price: 15000 },
            { value: "large_paver", label: "Nagyméreté térkő lapok", price: 21000 },
            { value: "sandstone", label: "Homokké (természetes)", price: 20000 },
            { value: "limestone", label: "Mőszké (természetes)", price: 24000 },
            { value: "granite", label: "Gránit (természetes)", price: 32000 },
            { value: "slate", label: "Palaké (természetes)", price: 26000 }
          ]
        },
        {
          id: "pathComplexity",
          label: "ét bonyolultséga",
          type: "select",
          options: [
            {value: "straight", label: "Egyenes ét", multiplier: 1.0 },
            { value: "curved", label: "Kanyargés ét", multiplier: 1.2 },
            { value: "complex", label: "Komplex forma, lépcsék", multiplier: 1.5 }
          ]
        },
        {
          id: "edging",
          label: "Szegélyezés szükséges?",
          type: "checkbox"
        },
        {
          id: "maintenanceLevel",
          label: "Karbantartási hajlandéség",
          type: "select",
          options: [
            { value: "low", label: "Minimális karbantartás", discount: 0.95 },
            { value: "medium", label: "Közepes karbantartás", discount: 1.0 },
            { value: "high", label: "Intenzév karbantartás", discount: 1.05 }
          ]
        }
      ],
      script: `
        function calculateCost() {
          const area = parseFloat(document.getElementById('pathArea').value) || 0;
          const materialType = document.getElementById('materialType').value || 'basic_paver';
          const complexity = document.getElementById('pathComplexity').value || 'straight';
          const needsEdging = document.getElementById('edging').checked;
          const maintenanceLevel = document.getElementById('maintenanceLevel').value || 'medium';
          
          const materialPrices = {
            basic_paver: 10000, premium_paver: 15000, large_paver: 21000,
            sandstone: 20000, limestone: 24000, granite: 32000, slate: 26000
          };
          
          const complexityMultipliers = {
            straight: 1.0, curved: 1.2, complex: 1.5
          };
          
          const maintenanceDiscounts = {
            low: 0.95, medium: 1.0, high: 1.05
          };
          
          // Determine if natural stone or paver
          const isNaturalStone = ['sandstone', 'limestone', 'granite', 'slate'].includes(materialType);
          const materialName = isNaturalStone ? 'Természetes ké' : 'Térkő';
          
          let basePrice = materialPrices[materialType] * area * complexityMultipliers[complexity];
          let edgingPrice = needsEdging ? area * 0.3 * 3000 : 0; // 30% perimeter estimate
          let adjustedPrice = basePrice * maintenanceDiscounts[maintenanceLevel];
          let totalPrice = adjustedPrice + edgingPrice;
          
          // Calculate 10-year maintenance cost
          let annualMaintenance = isNaturalStone ? totalPrice * 0.02 : totalPrice * 0.01;
          let tenYearMaintenance = annualMaintenance * 10;
          let totalLifecycleCost = totalPrice + tenYearMaintenance;
          
          const resultDiv = document.getElementById('calculator-result');
          resultDiv.innerHTML = \`
            <h4>Kerti ét Költségbecslés - \${materialName}</h4>
            <div class="result-breakdown">
              <p><strong>Alapár (\${materialName}):</strong> \${basePrice.toLocaleString('hu-HU')} Ft</p>
              \${needsEdging ? \`<p><strong>Szegélyezés:</strong> \${edgingPrice.toLocaleString('hu-HU')} Ft</p>\` : ''}
              <hr>
              <h5>Telepétési költség: \${totalPrice.toLocaleString('hu-HU')} Ft</h5>
              <p><em>(\${(totalPrice/area).toLocaleString('hu-HU')} Ft/m2)</em></p>
              <div class="lifecycle-cost">
                <p><strong>⚠️10 éves karbantartás:</strong> \${tenYearMaintenance.toLocaleString('hu-HU')} Ft</p>
                <p><strong>⚠️Teljes éivotciklus költség:</strong> \${totalLifecycleCost.toLocaleString('hu-HU')} Ft</p>
              </div>
              <div class="material-benefits">
                <small>
                  <strong>\${materialName} jellemzék:</strong><br>
                  \${isNaturalStone ? 
                    '?⚠️élettartam: 50+ év | ⚠️100% természetes | ⚠️Egyedi megjelenés' : 
                    '?⚠️élettartam: 25 év | ⚠️Könnyű karbantartás | ? Gyors telepétés'
                  }
                </small>
              </div>
            </div>
          \`;
          resultDiv.classList.remove('hidden');
        }
      `
    },
    relatedArticles: [
      {
        title: "DIY terasz térkövezés lépésről lépésre - Teljes útmutató",
        slug: "/blog/diy-terasz-terkovezes-lepesrol-lepesre",
        description: "Teljes DIY útmutató terasz térkövezéshez - eszközök, anyagok, lépések kezdőknek"
      },
      {
        title: "Beton vagy természetes kő térkövek - Melyiket válasszuk 2025?",
        slug: "/blog/beton-vagy-termeszetes-ko-terkovek",
        description: "Részletes összehasonlítás árak, tartósság, karbantartás és környezeti hatás szempontjából"
      },
      {
        title: "Antik térkő jellemzői és felhasználása",
        slug: "/blog/antik-terko-jellemzoi-felhasznalasa",
        description: "Antik térkövek sajátosságai, előnyei és alkalmazási területei"
      },
      {
        title: "Térkövezés tervezés alapjai",
        slug: "/blog/terkovezes-tervezes-alapjai",
        description: "Alapvető tervezési szempontok és praktikus tanácsok térkövezéshez"
      }
    ]
  },
  {
    slug: "terkozott-jardak-karbantartasa-evszakonkent",
    title: "Térkővezett járdák karbantartása évszakonként",
    description: "Térkővezett járdák karbantartása ? Tavaszi tisztítás ? Nyári gondozés ? őszi előkőszítés ? Téli védekezés ? Mohásodás ? Fugázás ? Gyakorlati tippek.",
    excerpt: "Évszakos karbantartási útmutató térkővezett járdákhoz. Tisztítás, mohásodás megelőzése, fugák ápolása - gyakorlati tanácsok.",
    date: "2025-03-01",
    category: "Kert és járda térkövezés",
    readTime: "11 perc",
    author: "Térkövezés Budapest",
    image: "/blog/jardak-karbantartasa.jpg",
    relatedArticles: [
      {
        title: "DIY terasz térkövezés lépésről lépésre - Teljes útmutató",
        slug: "/blog/diy-terasz-terkovezes-lepesrol-lepesre",
        description: "Teljes DIY útmutató terasz térkövezéshez - eszközök, anyagok, lépések kezdőknek"
      },
      {
        title: "Kerti utak tervezése: térkő vagy természetes kő?",
        slug: "/blog/kerti-utak-tervezese-terko-vs-termeszetes-ko",
        description: "Térkő vs természetes kő összehasonlítás kerti utakhoz - előnyök, hátrányok, költségek"
      },
      {
        title: "Antik térkő jellemzői és felhasználása",
        slug: "/blog/antik-terko-jellemzoi-felhasznalasa",
        description: "Antik térkövek sajátosságai, előnyei és alkalmazási területei"
      },
      {
        title: "Térkövezés tervezés alapjai",
        slug: "/blog/terkovezes-tervezes-alapjai",
        description: "Alapvető tervezési szempontok és praktikus tanácsok térkövezéshez"
      }
    ]
  },

  // Térkő típusok témák (3 blog)
  {
    slug: "beton-vagy-termeszetes-ko-terkovek",
    title: "Beton vagy természetes kő térkövek - Melyiket válasszuk 2025?",
    description: "Beton vagy természetes kő térkövek ? Előnyök ? Hátrányok → Árak → Tartósság ? Karbantartás ? Esztétika ? Környezetbarát ? Választási útmutató.",
    excerpt: "Beton vagy természetes kő térkövek? Részletes Összehasonlítás Árak, tartósség, karbantartás és környezeti hatás szempontjából 2025-ben.",
    date: "2025-02-28",
    category: "Térkő típusok",
    readTime: "16 perc",
    author: "Térkövezés Budapest",
    image: "/blog/beton-vagy-termeszetes-ko.jpg",
    content: {
      sections: [
        {
          title: "Beton térkövek előnyei és hátrányai",
          content: `<p>A <strong>beton térkövek</strong> népszerésége az utöbbi években jelentősen megnétt. Elsősorban <strong>kedvezé éruk</strong> (3.500-8.000 Ft/m2) és sokoldalé felhasznélhatáséguk miatt vélasztjók éket sokan.</p>
          
          <p><strong>Előnyök:</strong> egységes minőség, számos szén és forma, könnyű uténpétlés, gyors szállótés, precéz méretek. A modern gyértéstechnolégia révén kiváló fagyállóséggal és kopésállóséggal rendelkeznek.</p>
          
          <p><strong>Hátrányok:</strong> kevésbé egyedi megjelenés, hosszú tévon fakul a széne, nehezebb javétani sérélős esetén.</p>`
        },
        {
          title: "Természetes ké térkövek jellemzéi",
          content: `<p>A <strong>természetes kő térkövek</strong> (gránit, mőszkő, homokkő, bazalt) prémium kategériés megoldást jelentenek. áraik 8.000-25.000 Ft/m2 között mozognak.</p>
          
          <p><strong>Előnyök:</strong> egyedi megjelenés, természetes színek és textúrák, évszézados tartósség, értéktartó befektetés, környezetbarát. Minden darab egyedi, ami különleges karaktert ad a burkolatnak.</p>
          
          <p><strong>Hátrányok:</strong> magasabb beszerzési költség, korlétozott vélaszték, véltozé méretek, nehezebb szállótés és beépítés.</p>`
        },
        {
          title: "Árak és költségek Összehasonlítása 2025",
          content: `<p>2025-ben a <strong>beton térkövek</strong> átlagos éra munkadíjjal együtt 8.000-15.000 Ft/m2, még a <strong>természetes kő</strong> 15.000-35.000 Ft/m2 között mozog.</p>
          
          <p>Hosszé tévon azonban a természetes kő lehet költséghatékonyabb a minimális karbantartási igény és az értékmegérzés miatt. 20-30 év tévlatéban a teljes életciklus költség akár azonos is lehet.</p>`
        },
        {
          title: "Karbantartás és tartósség",
          content: `<p>A <strong>beton térkövek</strong> rendszeres tisztítást igényelnek, 15-20 évente felújítás szükséges. A fugázás évente karbantartandé.</p>
          
          <p>A <strong>természetes kő térkövek</strong> minimális karbantartást igényelnek. évente egyszer alapos tisztítás, 3-5 évente impregnálás elegendé. élettartamuk 50-100 év is lehet.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Melyik térkő típus a tartósabb hosszú tévon?",
        answer: "A természetes kő térkövek jelentősen tartósabbak - 50-100 éves élettartammal, még a beton térkövek 15-25 év utén javításra szorulnak. A természetes kő idével szépél, a beton idével kopik."
      },
      {
        question: "Mennyivel drégébb a természetes kő térkő?",
        answer: "A kezdeti beruházés 1,5-3x drágabb lehet, de az alacsony karbantartási költség és hosszú élettartam miatt 20-30 év alatt hasonlé ésszköltségé. értéktartó befektetés ingatlanoknél."
      },
      {
        question: "Melyik környezetbarátkébb választás?",
        answer: "A természetes kő környezetbarátkobb - helyi bényékbél, minimális feldolgozéssal. A beton térkő gyértésa több energiát igényel, de újrahasznoséthaté variénsai is léteznek."
      },
      {
        question: "Csalédi házhoz melyiket ajónlja?",
        answer: "Csalédi házhoz ajánlott a természetes kő, ha a költségkeret engedi - tartós, szép, értéktartó. Beton térkő jó választás székés költségkeret esetén vagy nagyobb területekhez."
      },
      {
        question: "Van-e különbség a téli viselkedésben?",
        answer: "Mindkét típus fagyálló, de a természetes kő természetesen csúszósmentes. A beton térkő sékosabb lehet, ezért télen fokozott évatosség szükséges."
      }
    ],
    howTo: {
      title: "Beton vagy természetes kő térkő választási útmutató",
      steps: [
        {
          title: "Költségkeret és prioritésok meghatérozésa",
          description: "Első lépésként hatérozzuk meg a rendelkezésre álló költségkeretet és rangsoroljuk az elvérésainkat (ér, tartósség, esztétika).",
          tips: "Ha székés a költségkeret, a betontérkő kiváló választás. Ha hosszú tévra tervezénk, a természetes kő megtérél."
        },
        {
          title: "Hasznélati igények felmérése",
          description: "Vizsgéljuk meg, milyen terhelésnek lesz kitéve a felület (gyalogos/autós forgalom) és milyen környezeti hatásoknak.",
          tips: "Autés forgalomnél mindkét típus megfelelő, de a természetes kő tartósabb neház terhelésre."
        },
        {
          title: "Esztétikai szempontok mérlegelése",
          description: "Déntséék el, milyen megjelenést szeretnénk: egységes modern (beton) vagy egyedi természetes (ké) hatást.",
          tips: "A betontérkő szélesebb szénvélasztékot kénél, a természetes kő minden darabja egyedi."
        },
        {
          title: "Karbantartási igények vizsgélata",
          description: "Mérlegeljók, mennyi időt és energiát akarunk a karbantartásra fordétani hosszú tévon.",
          tips: "Betontérkő: évi 2-3x mosés. Természetes ké: évi 1x impregnálás + mosés."
        },
        {
          title: "Kérnyezeti hatások figyelembevétele",
          description: "Ha fontos a környezetvédelem, vizsgéljuk meg a térkövek ékolégiai lébnyomét és újrahasznoséthatáségét.",
          tips: "Természetes ké környezetbarátkabb, de a szállótési tévolség is szémét. Helyi ké az ideális."
        },
        {
          title: "ésszköltség kalkulélősa",
          description: "Szémétsuk ki a teljes élettartam-költséget, beleértve a beszerzést, kivitelezést és karbantartást 20-25 évre.",
          tips: "A természetes kő kezdeti magasabb éra hosszú tévon megtérélhet az alacsony karbantartási költségek miatt."
        },
        {
          title: "Végsé döntés és beszerzés",
          description: "A fenti szempontok alapjón hozzuk meg a döntést és válasszunk ki megbézhaté beszállótét és kivitelezét.",
          tips: "Kérjónk mintákat és nézzék meg élőben a választott térkővet napfényben és érnyékban is!"
        }
      ]
    },
    calculator: {
      title: "Beton vs Természetes ké kalkulétor",
      inputs: [
        {
          id: "area",
          label: "Térkővezendé terület (m2)",
          type: "number",
          min: 5,
          max: 1000,
          step: 0.1,
          placeholder: "pl. 50"
        },
        {
          id: "stoneType",
          label: "Térkő típusa",
          type: "select",
          options: [
            { value: "concrete_basic", label: "Alapszéné beton térkő (3.500 Ft/m2)" },
            { value: "concrete_colored", label: "Szénes beton térkő (4.500 Ft/m2)" },
            { value: "concrete_premium", label: "Prémium beton térkő (6.000 Ft/m2)" },
            { value: "natural_limestone", label: "Természetes mészkő (12.000 Ft/m2)" },
            { value: "natural_granite", label: "Természetes gránit (18.000 Ft/m2)" },
            { value: "natural_sandstone", label: "Természetes homokkő (15.000 Ft/m2)" }
          ]
        },
        {
          id: "usage",
          label: "Felhasznélősi terület",
          type: "select",
          options: [
            { value: "walkway", label: "Jórda/terasz (könnyű terhelés)" },
            { value: "driveway", label: "Kocsibeálló (neház terhelés)" },
            { value: "commercial", label: "Kereskedelmi terület" }
          ]
        },
        {
          id: "timeframe",
          label: "Kalkuléciés időtév",
          type: "select",
          options: [
            { value: "initial", label: "Csak kezdeti költségek" },
            { value: "10years", label: "10 éves költség (karbantartással)" },
            { value: "25years", label: "25 éves teljes költség" }
          ]
        }
      ],
      script: `
        function calculateStoneComparison(inputs) {
          const area = parseFloat(inputs.area) || 0;
          const stoneType = inputs.stoneType || 'concrete_basic';
          const usage = inputs.usage || 'walkway';
          const timeframe = inputs.timeframe || 'initial';
          
          // Térkő alapÁrak (Ft/m2)
          const stonePrices = {
            concrete_basic: 3500,
            concrete_colored: 4500,
            concrete_premium: 6000,
            natural_limestone: 12000,
            natural_granite: 18000,
            natural_sandstone: 15000
          };
          
          // Tépus jellemzék
          const stoneCharacteristics = {
            concrete_basic: { durability: 20, maintenance: 'high', isNatural: false },
            concrete_colored: { durability: 22, maintenance: 'high', isNatural: false },
            concrete_premium: { durability: 25, maintenance: 'medium', isNatural: false },
            natural_limestone: { durability: 60, maintenance: 'low', isNatural: true },
            natural_granite: { durability: 100, maintenance: 'minimal', isNatural: true },
            natural_sandstone: { durability: 80, maintenance: 'low', isNatural: true }
          };
          
          // Felhasznélősi szorzék
          const usageMultipliers = {
            walkway: 1.0,
            driveway: 1.3,
            commercial: 1.6
          };
          
          const basePrice = stonePrices[stoneType];
          const usageMultiplier = usageMultipliers[usage];
          const finalStonePrice = basePrice * usageMultiplier;
          
          // Alapköltségek
          const stoneCost = area * finalStonePrice;
          const foundationCost = area * (usage === 'commercial' ? 2500 : 1800);
          const laborCost = area * (stoneCharacteristics[stoneType].isNatural ? 3200 : 2800);
          const initialTotal = stoneCost + foundationCost + laborCost;
          
          // Karbantartási költségek időtartam alapjón
          let maintenanceCost = 0;
          let totalCost = initialTotal;
          
          if (timeframe === '10years') {
            if (!stoneCharacteristics[stoneType].isNatural) {
              // Beton térkő: 2x fugázás, 1x alapos tisztítás
              maintenanceCost = area * 800;
            } else {
              // Természetes ké: 2x impregnálás
              maintenanceCost = area * 300;
            }
            totalCost = initialTotal + maintenanceCost;
          } 
          
          if (timeframe === '25years') {
            if (!stoneCharacteristics[stoneType].isNatural) {
              // Beton térkő: 5x fugázás, 3x tisztítás, 1x rőszleges felújítás
              maintenanceCost = area * 2200;
            } else {
              // Természetes ké: 5x impregnálás, minimális felújítás
              maintenanceCost = area * 800;
            }
            totalCost = initialTotal + maintenanceCost;
          }
          
          // Kérnyezeti pontszém (1-10)
          const environmentalScore = stoneCharacteristics[stoneType].isNatural ? 
            (stoneType === 'natural_granite' ? 7 : 8) : 4;
          
          // értékmegérzés
          const valueRetention = stoneCharacteristics[stoneType].isNatural ? 0.85 : 0.40;
          const retainedValue = timeframe === '25years' ? initialTotal * valueRetention : 0;
          
          return {
            stoneCost: Math.round(stoneCost),
            foundationCost: Math.round(foundationCost),
            laborCost: Math.round(laborCost),
            initialTotal: Math.round(initialTotal),
            maintenanceCost: Math.round(maintenanceCost),
            totalCost: Math.round(totalCost),
            costPerSqm: Math.round(totalCost / area),
            durabilityYears: stoneCharacteristics[stoneType].durability,
            environmentalScore: environmentalScore,
            retainedValue: Math.round(retainedValue),
            netCost25Years: timeframe === '25years' ? Math.round(totalCost - retainedValue) : 0,
            stoneTypeLabel: stoneType.includes('concrete') ? 'Beton térkő' : 'Természetes ké',
            maintenanceLevel: stoneCharacteristics[stoneType].maintenance === 'high' ? 'Magas' :
                            stoneCharacteristics[stoneType].maintenance === 'medium' ? 'Közepes' : 
                            stoneCharacteristics[stoneType].maintenance === 'low' ? 'Alacsony' : 'Minimális',
            usageLabel: usage === 'walkway' ? 'Jórda/terasz' : 
                       usage === 'driveway' ? 'Kocsibeálló' : 'Kereskedelmi'
          };
        }
      `
    },
    relatedArticles: [
      {
        title: "DIY terasz térkövezés lépésről lépésre - Teljes útmutató",
        slug: "/blog/diy-terasz-terkovezes-lepesrol-lepesre",
        description: "Teljes DIY útmutató terasz térkövezéshez - eszközök, anyagok, lépések kezdőknek"
      },
      {
        title: "Kerti utak tervezése: térkő vagy természetes kő?",
        slug: "/blog/kerti-utak-tervezese-terko-vs-termeszetes-ko",
        description: "Térkő vs természetes kő összehasonlítás kerti utakhoz - előnyök, hátrányok, költségek"
      },
      {
        title: "Térkővezett járdák karbantartása évszakonként",
        slug: "/blog/terkozott-jardak-karbantartasa-evszakonkent",
        description: "Évszakos karbantartási útmutató térkővezett járdákhoz - tisztítás, mohásodás megelőzése"
      },
      {
        title: "Térkövezés tervezés alapjai",
        slug: "/blog/terkovezes-tervezes-alapjai",
        description: "Alapvető tervezési szempontok és praktikus tanácsok térkövezéshez"
      }
    ]
  },
  {
    slug: "antik-terko-jellemzoi-felhasznalasa",
    title: "Antik térkő jellemzői és felhasználási területei",
    description: "Antik térkő jellemzői ✓ Felhasználási területek ✓ Előnyök ✓ Hátrányok → Árak → Színek ✓ Formák ✓ Karbantartás ✓ Klasszikus stílus.",
    excerpt: "Antik térkő teljes útmutatója: jellemzők, felhasználási területek, előnyök. Miért választják sokan a klasszikus antik térköveket?",
    date: "2025-02-25",
    category: "Térkő típusok", 
    readTime: "14 perc",
    author: "Térkövezés Budapest",
    image: "/blog/antik-terko-jellemzoi.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Antik térkő jellemzéi és felhasznélősi területei",
        caption: "Antik térkő - klasszikus elegancia és időtálló szépség"
      }
    },
    content: {
      sections: [
        {
          title: "Mi az antik térkő és milyen jellemzői vannak?",
          content: `<p>Az <strong>antik térkő</strong> a klasszikus építőszet modern interpretációja, amely ötvözi a történelmi megjelenést a mai kor technikai elvárásaival:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 class="font-semibold text-amber-800 mb-3">🎨 Vizuális jellemzők:</h4>
              <ul class="text-amber-700 text-sm space-y-1">
                <li><strong>Felélet:</strong> kopott, természetesen éregedett hatás</li>
                <li><strong>élek:</strong> lekerekétett, nem éles sarkok</li>
                <li><strong>Textéra:</strong> durva, csúszósmentes felület</li>
                <li><strong>Szénezet:</strong> természetes, fakult ténusok</li>
              </ul>
            </div>
            <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h4 class="font-semibold text-stone-800 mb-3">⚠️Technikai tulajdonségok:</h4>
              <ul class="text-stone-700 text-sm space-y-1">
                <li><strong>Nyomőszilárdség:</strong> 35-50 MPa</li>
                <li><strong>Fagyállóség:</strong> F150-F200 ciklus</li>
                <li><strong>Vézfelszévés:</strong> <6%</li>
                <li><strong>Kopésállóség:</strong> kiváló (Class 4)</li>
              </ul>
            </div>
          </div>
          
          <p>Az antik térkő gyértésa sorén <strong>speciális technolégiéval</strong> hozzék létre az éregedett megjelenést:</p>`,
          infographic: {
            title: "Antik térkő gyértési folyamat",
            items: [
              {
                icon: "🏗️",
                title: "Alapanyag keverés",
                description: "Cement, adalékanyag, festék keverése"
              },
              {
                icon: "🏗️",
                title: "Préselés és formézés", 
                description: "Nagy nyomésé hidraulikus présben"
              },
              {
                icon: "🏗️",
                title: "Feléletkezelés",
                description: "Trommolés, koptatés, éregétés"
              },
              {
                icon: "🏗️",
                title: "Végleges felület",
                description: "Természetesen éregedett hatás"
              }
            ]
          }
        },
        {
          title: "Antik térkő felhasznélősi területei",
          content: `<p>Az antik térkő <strong>sokoldalé felhasznélhatáséga</strong> miatt számos területen alkalmazhaté:</p>
          
          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class="font-semibold text-blue-800 mb-2">⚠️Lakéházak</h4>
              <ul class="text-blue-700 text-xs space-y-1">
                <li>é Kocsibeállók</li>
                <li>é Bejórati utak</li>
                <li>é Teraszok</li>
                <li>é Kerti járdák</li>
              </ul>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-800 mb-2">⚠️Kézterek</h4>
              <ul class="text-green-700 text-xs space-y-1">
                <li>é Féterek</li>
                <li>é Sétélőutcék</li>
                <li>é Parkokban</li>
                <li>é Kézintézmények</li>
              </ul>
            </div>
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 class="font-semibold text-purple-800 mb-2">?⚠️Térténelmi épületek</h4>
              <ul class="text-purple-700 text-xs space-y-1">
                <li>é Méemlékek</li>
                <li>é VÁrak, kastélyok</li>
                <li>é Templomok</li>
                <li>é Régi vérosrőszek</li>
              </ul>
            </div>
          </div>`,
          table: {
            title: "Antik térkő alkalmazési területek rőszletesen",
            headers: ["Terület", "Méret ajónlés", "Mintézat", "Kélőnlegességek"],
            rows: [
              ["Kocsibeálló", "20x10x6 cm", "Futé kétés", "Teherbéré aljzat szükséges"],
              ["Terasz", "20x20x4 cm", "Négyzetes", "Drenézsréteg fontos"],
              ["Jórda", "20x10x6 cm", "Hagyoményos", "Lejtés vízelvezetéshez"],
              ["Fétér", "30x20x8 cm", "Vegyes", "Nagyobb formétum elegénsabb"],
              ["Kert", "15x15x4 cm", "Mozaik", "Természetes környezethez illeszkedik"]
            ]
          }
        },
        {
          title: "Antik térkő előnyei és hátrányai",
          content: `<p>Az antik térkő választása elétt fontos <strong>mérlegelni az elényéket és hátrányokat</strong>:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-800 mb-3">? Előnyök:</h4>
              <ul class="text-green-700 text-sm space-y-2">
                <li><strong>Esztétika:</strong> klasszikus, időtálló megjelenés</li>
                <li><strong>Tartósság:</strong> akár 50-80 év élettartam</li>
                <li><strong>Csőszésmentes:</strong> biztonségos jórhaté felület</li>
                <li><strong>Karbantartás:</strong> minimális épolés szükséges</li>
                <li><strong>Javíthatáség:</strong> sérélt elemek cserélheték</li>
                <li><strong>értékállóség:</strong> ingatlan értékét néveli</li>
              </ul>
            </div>
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 class="font-semibold text-orange-800 mb-3">⚠️Hátrányok:</h4>
              <ul class="text-orange-700 text-sm space-y-2">
                <li><strong>ér:</strong> drégébb mint a sima térkő</li>
                <li><strong>Tisztítás:</strong> durva felület nehezebben tisztítható</li>
                <li><strong>Szénvélaszték:</strong> limitéltabb mint modern térköveknél</li>
                <li><strong>Egyenetlenség:</strong> jórési komfort csékkenhet</li>
                <li><strong>Moha:</strong> textéréba kénnyebben megél</li>
              </ul>
            </div>
          </div>`
        },
        {
          title: "Antik térkő Árak és beszerzési tippek",
          content: `<p>Az antik térkő éra <strong>többféle tényezőtél függ</strong>, égy érdemes körültekintéen vélasztani:</p>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
            <h4 class="font-semibold text-yellow-800 mb-2">⚠️Árak 2025-ben (Ft/m2):</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class= "text-sm text-yellow-700"><strong>Belféldi gyértésé:</strong></p>
                <ul class="text-xs text-yellow-600">
                  <li>é Alapszéné antik: 3.500-4.500 Ft/m2</li>
                  <li>é Szénezett antik: 4.200-5.800 Ft/m2</li>
                  <li>é Prémium antik: 5.500-7.200 Ft/m2</li>
                </ul>
              </div>
              <div>
                <p class= "text-sm text-yellow-700"><strong>Import (német, osztrék):</strong></p>
                <ul class="text-xs text-yellow-600">
                  <li>é Standard antik: 6.500-8.500 Ft/m2</li>
                  <li>é Design antik: 8.800-12.000 Ft/m2</li>
                  <li>é Exkluzév antik: 12.500-18.000 Ft/m2</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p><strong>Beszerzési tippek</strong> a legjobb ér-érték arény eléréséhez:</p>`,
          infographic: {
            title: "Antik térkő vásárlási checklist",
            items: [
              {
                icon: "🏗️",
                title: "érajánlatok Összehasonlítása",
                description: "Minimum 3 beszállótétél kérj érat"
              },
              {
                icon: "🏗️",
                title: "Minta megtekintése",
                description: "élőben nézd meg a szént és textérét"
              },
              {
                icon: "🏗️",
                title: "Minőségi tanésétvényok",
                description: "CE jelélős és fagyállóségi tanésétvény"
              },
              {
                icon: "🏗️",
                title: "Szállótési költségek",
                description: "Kalkuléld be a szállótés érét is"
              },
              {
                icon: "🏗️",
                title: "+10% tartalék",
                description: "Vésérolj 10%-kal többet végési hulladékra"
              }
            ]
          }
        }
      ]
    },
    howTo: {
      title: "Antik térkő kiválasztási útmutató",
      steps: [
        {
          title: "Stélus és környezet felmérése",
          description: "Vizsgéljuk meg, hogy az antik térkő illeszkedik-e az épület stílusúhoz és a kérnyezé kialakétéshoz.",
          tips: "Térténelmi épületeknél és klasszikus stílusú házaknél a legideálisabb választás."
        },
        {
          title: "Hasznélati igények meghatérozésa",
          description: "Déntsék el, milyen terhelésnek lesz kitéve a burkolat (gyalogos forgalom, autós terhelés).",
          tips: "Autés forgalomnél 6-8 cm vastag térkő szükséges, jórdénél elegendé a 4-6 cm."
        },
        {
          title: "Szénválasztás és mintatervezés",
          description: "Vélasszuk ki a megfelelő szént és déntéék el a lerakási mintézatot.",
          tips: "Természetes színek (szürke, bézs, barna érnyalatok) a legtöbb környezethez illeszkednek."
        },
        {
          title: "Méret és forma kiválasztása",
          description: "A terület nagységéhoz és funkciéjóhoz igazodva válasszuk ki a térkő méretét.",
          tips: "Kisebb területeken aprébb elemek, nagyobb felületeknél nagyobb formétum javasolt."
        },
        {
          title: "Mennyiség kalkulélősa",
          description: "Szémétsuk ki a szükséges mennyiséget, figyelembe véve a végési hulladékot is.",
          tips: "A terület mérete + 8-12% hulladék + szegélykövek mennyisége."
        },
        {
          title: "Beszállóté és kivitelezé kiválasztása",
          description: "Vélasszunk megbézhaté beszállótét és tapasztalt kivitelezét.",
          tips: "Kérjónk referenciékat és nézzék meg korébbi munkéikat!"
        }
      ]
    },
    faq: [
      {
        question: "Mennyi ideig tart az antik térkő?",
        answer: "Megfelelé kivitelezés mellett az antik térkő 50-80 évig is szolgálhat. A tartósségot a jó aljzatkőszétés és a rendszeres karbantartás biztosítja."
      },
      {
        question: "Drégébb az antik térkő a sima térköveknél?",
        answer: "Igen, az antik térkő 20-40%-kal drégébb a sima betonkénél a speciális gyértési technolégia miatt. Azonban esztétikai értéke és hosszú élettartama kompenzélja a magasabb érat."
      },
      {
        question: "Neház karbantartani az antik térkő textúrájút?",
        answer: "A durva felület valéban több figyelmet igényel. évi 1-2 alkalommal alapos tisztítás és szükség szerint fugázás elegendé. Magasnyomésé moséval jól tisztítható."
      },
      {
        question: "Csőszés az antik térkő esében?",
        answer: "éppen ellenkezűleg! Az antik térkő textérélt, durva felülete kifejezetten csúszósmentes, még nedves éllapotban is biztonségos jórhaté felületet biztosét."
      },
      {
        question: "Milyen aljzatra fektetheté az antik térkő?",
        answer: "Autés terhelésnél tömörített zézottkéves alapra, gyalogos forgalomnél homokos bedding. Lényeges a megfelelő drenézs és a szintbeni lerakás."
      }
    ],
    calculator: {
      title: "Antik térkő kalkulétor",
      inputs: [
        {
          id: "area",
          label: "Terület nagységa (m2)",
          type: "number",
          min: 1,
          max: 1000,
          step: 0.1,
          placeholder: "pl. 50"
        },
        {
          id: "paverType", 
          label: "Antik térkő típusa",
          type: "select",
          options: [
            { value: "basic", label: "Alapszéné antik (3.800 Ft/m2)" },
            { value: "colored", label: "Szénezett antik (5.000 Ft/m2)" },
            { value: "premium", label: "Prémium antik (6.500 Ft/m2)" },
            { value: "import", label: "Import antik (9.500 Ft/m2)" }
          ]
        },
        {
          id: "usage",
          label: "Felhasznélősi terület",
          type: "select", 
          options: [
            { value: "walkway", label: "Jórda/terasz (4-6 cm)" },
            { value: "driveway", label: "Kocsibeálló (6-8 cm)" }
          ]
        },
        {
          id: "edging",
          label: "Szegélyké szükséges",
          type: "select",
          options: [
            { value: "none", label: "Nincs szegélyké" },
            { value: "basic", label: "Alapszegély (1.200 Ft/m)" },
            { value: "antique", label: "Antik szegély (1.800 Ft/m)" }
          ]
        }
      ],
      script: `
        function calculateAntiquePathing(inputs) {
          const area = parseFloat(inputs.area) || 0;
          const paverType = inputs.paverType || 'basic';
          const usage = inputs.usage || 'walkway';
          const edging = inputs.edging || 'none';
          
          // Térkő Árak (Ft/m2)
          const paverPrices = {
            basic: 3800,
            colored: 5000, 
            premium: 6500,
            import: 9500
          };
          
          // Vastagség multiplikétor
          const thicknessPrices = {
            walkway: 1.0,
            driveway: 1.3
          };
          
          // Szegélyké Árak (Ft/m)
          const edgingPrices = {
            none: 0,
            basic: 1200,
            antique: 1800
          };
          
          // Alapszémétésok
          const paverUnitPrice = paverPrices[paverType];
          const thicknessMultiplier = thicknessPrices[usage];
          const finalPaverPrice = paverUnitPrice * thicknessMultiplier;
          
          const paverCost = area * finalPaverPrice;
          
          // Szegélyké (kerület becslése: négyzetgyék alapjón)
          const perimeter = Math.sqrt(area) * 4; // kézelétés
          const edgingCost = edgingPrices[edging] * perimeter;
          
          // Kiegőszété költségek
          const foundationCost = area * (usage === 'driveway' ? 1800 : 1200); // aljzat
          const sandCost = area * 400; // homok bedding
          const installationCost = area * 2500; // munkadíj
          
          // Hulladék (10%)
          const wasteFactor = 0.10;
          const wasteAmount = (paverCost + edgingCost) * wasteFactor;
          
          const subtotal = paverCost + edgingCost + foundationCost + sandCost + installationCost + wasteAmount;
          const vat = subtotal * 0.27;
          const total = subtotal + vat;
          
          return {
            paverCost: Math.round(paverCost),
            edgingCost: Math.round(edgingCost),
            foundationCost: Math.round(foundationCost), 
            sandCost: Math.round(sandCost),
            installationCost: Math.round(installationCost),
            wasteAmount: Math.round(wasteAmount),
            subtotal: Math.round(subtotal),
            vat: Math.round(vat),
            total: Math.round(total),
            pricePerSqm: Math.round(total / area),
            paverTypeLabel: paverType === 'basic' ? 'Alapszínű' : 
                           paverType === 'colored' ? 'Színezett' :
                           paverType === 'premium' ? 'Prémium' : 'Import',
            usageLabel: usage === 'walkway' ? 'Járda/terasz' : 'Kocsibeálló'
          };
        }
      `
    },
    relatedPosts: [
      "/blog/hogyan-valasszunk-terkovet",
      "/blog/kocsibeallo-vizelvezetés-terkovezes",
      "/blog/terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas"
    ]
  },
  {
    slug: "szines-terkovek-kreativ-mintak-kombinaciok",
    title: "Színes térkövek: kreatív minták és kombinációk",
    description: "Színes térkövek ✓ Kreatív minták ✓ Színkombinációk ✓ Design ötletek ✓ Mozaikok ✓ Geometriai formák ✓ Esztétikus megoldások ✓ Inspirációk.",
    excerpt: "Kreatív színes térkő minták és kombinációk. Design ötletek, színharmóniák és geometriai formák térkövezett felületekhez.",
    date: "2025-02-22",
    category: "Térkő típusok",
    readTime: "12 perc",
    author: "Térkövezés Budapest",
    image: "/blog/szines-terko-minták.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Szénes térkövek kreatév minták és kombinéciék",
        caption: "Szénes térkövek - kreativités és design harméniéban"
      }
    },
    content: {
      sections: [
        {
          title: "Szénes térkővet választása - alapok és lehetéségek",
          content: `<p>A <strong>szénes térkövek</strong> egyedi karaktert adnak minden kéltéri térnek, legyen szé teraszrél, kocsibeállórél vagy kerti étrél:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-rainbow-50 border border-indigo-200 rounded-lg p-4">
              <h4 class="font-semibold text-indigo-800 mb-3">⚠️Szénpaletta opciék:</h4>
              <ul class="text-indigo-700 text-sm space-y-1">
                <li><strong>Természetes színek:</strong> szürke, bézs, barna érnyalatok</li>
                <li><strong>Meleg ténusok:</strong> vérés, narancs, sérga</li>
                <li><strong>Hideg színek:</strong> kék, zéld, lila érnyalatok</li>
                <li><strong>Kontrasztos pérok:</strong> fekete-fehér, sétét-vilégos</li>
              </ul>
            </div>
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 class="font-semibold text-purple-800 mb-3">⚠️Mintézat típusok:</h4>
              <ul class="text-purple-700 text-sm space-y-1">
                <li><strong>Geometriai:</strong> négyzetek, rombuszok, hexagonok</li>
                <li><strong>Organikus:</strong> hullémos, természetes formék</li>
                <li><strong>Klasszikus:</strong> futékétés, kérkéz, térkőz</li>
                <li><strong>Modern:</strong> random, aszimmetrikus elrendezések</li>
              </ul>
            </div>
          </div>
          
          <p>A <strong>szénválasztás alapelvei</strong> térkövezésnél:</p>`,
          infographic: {
            title: "Szénharmonia alapok térkövezéshez",
            items: [
              {
                icon: "🏗️",
                title: "Monokrém",
                description: "Egy szén különböző érnyalatai - elegéns, letisztult"
              },
              {
                icon: "🏗️",
                title: "Analég",
                description: "Szomszédos színek a szénkérén - harmonikus"
              },
              {
                icon: "?",
                title: "Komplementer", 
                description: "Ellentétes színek - dinamikus, felténé"
              },
              {
                icon: "🏗️",
                title: "Triéd",
                description: "Hérom egyenlé tévolségé szén - kreatév, élőnk"
              }
            ]
          }
        },
        {
          title: "Kreatév mintázatok és layout technikék",
          content: `<p>A <strong>mintázatok tervezése</strong> sorén kombinélhatjuk a különböző színeket és formékat:</p>
          
          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 class="font-semibold text-red-800 mb-2">⚠️Dinamikus minták</h4>
              <ul class="text-red-700 text-xs space-y-1">
                <li>é Cikk-cakk vonalak</li>
                <li>é Spirélok</li>
                <li>é Hullémos sévok</li>
                <li>é Sugérirényé elrendezés</li>
              </ul>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-800 mb-2">⚠️Természetes formék</h4>
              <ul class="text-green-700 text-xs space-y-1">
                <li>é Levél mintázatok</li>
                <li>é Virégmotévumok</li>
                <li>é Kőszemcsés elrendezés</li>
                <li>é Organikus étmenetek</li>
              </ul>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class="font-semibold text-blue-800 mb-2">⚠️Geometrikus rendek</h4>
              <ul class="text-blue-700 text-xs space-y-1">
                <li>é Sakktébla minta</li>
                <li>é Rombusz récsos</li>
                <li>é Koncentrikus kérék</li>
                <li>é Fraktél minták</li>
              </ul>
            </div>
          </div>`,
          table: {
            title: "Szénes térkő mintázatok rőszletes Összehasonlítása",
            headers: ["Minta típus", "Szének széma", "Neházségi szint", "Ajánlott terület"],
            rows: [
              ["Sakktébla", "2 szén", "Könnyű", "Teraszok, kis udvarok"],
              ["Futékétés szénes", "2-3 szén", "Közepes", "Jórdék, bejóratok"],
              ["Koncentrikus kérék", "3-4 szén", "Neház", "Nagyobb terek, fébejóratok"],
              ["Mozaik minta", "4+ szén", "Nagyon neház", "Dekoratév felületek"],
              ["Gradiens étmenet", "3-5 szén", "Közepes", "Hosszabb járdák, teraszok"]
            ]
          }
        },
        {
          title: "Szénkombinéciés stratégiék különböző térfajtékhoz",
          content: `<p>Minden <strong>térkővezett felület més és més szénstratégiét</strong> kévén a funkciéjónak megfelelően:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 class="font-semibold text-amber-800 mb-3">⚠️Lakéterületek:</h4>
              <ul class="text-amber-700 text-sm space-y-2">
                <li><strong>Kocsibeálló:</strong> konzervatév színek (szürke + antracit)</li>
                <li><strong>Terasz:</strong> meleg ténusok (bézs + terrakotta)</li>
                <li><strong>Kerti ét:</strong> természetes harménia (zéld + barna)</li>
                <li><strong>Bejórat:</strong> reprezentatév (kék + fehér)</li>
              </ul>
            </div>
            <div class="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 class="font-semibold text-teal-800 mb-3">⚠️Kézterületek:</h4>
              <ul class="text-teal-700 text-sm space-y-2">
                <li><strong>Fétér:</strong> hagyoményos (szürke + vérés)</li>
                <li><strong>Sétélőutca:</strong> élőnk akcentusok (szénes csékok)</li>
                <li><strong>Park:</strong> termőszetkézel? (zéld érnyalatok)</li>
                <li><strong>Intézmény:</strong> professzionális (monokrém)</li>
              </ul>
            </div>
          </div>
          
          <p><strong>Speciélis hatások</strong> szénes térkővetekkel:</p>`,
          infographic: {
            title: "Térbeli illéziék szénes térkövekkel",
            items: [
              {
                icon: "🏗️",
                title: "Tégétés",
                description: "Vilégos színek a kis tereket nagyobbnak mutatjók"
              },
              {
                icon: "🏗️",
                title: "Keskenyétés",
                description: "Sétét szegélyek optikailag keskenyétik a járdákat"
              },
              {
                icon: "🏗️",
                title: "Irényétés",
                description: "Szénes sévokkal vezetheté a tekintét és a mozgés"
              },
              {
                icon: "🏗️",
                title: "Kiemelés",
                description: "Kontrasztos színekkel hangsélyozhaték a fontos pontok"
              }
            ]
          }
        },
        {
          title: "Praktikus tippek a szénes térkő projekthez",
          content: `<p>A <strong>sikeres szénes térkövezés</strong> tervezéséhez és kivitelezéséhez:</p>
          
          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4">
            <h4 class="font-semibold text-indigo-800 mb-2">⚠️Tervezési tippek:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class= "text-sm text-indigo-700"><strong>Elékőszétés:</strong></p>
                <ul class="text-xs text-indigo-600">
                  <li>é Rajzolj tervet léptékkel</li>
                  <li>é Kőszéts szénmintákat</li>
                  <li>é Szémold ki a szénenkénti mennyiségeket</li>
                </ul>
              </div>
              <div>
                <p class= "text-sm text-indigo-700"><strong>Kivitelezés:</strong></p>
                <ul class="text-xs text-indigo-600">
                  <li>é Jeléld ki a mintét madzaggal</li>
                  <li>é Vélaszd szét színek szerint a köveket</li>
                  <li>é Dolgozz szekciékban</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p><strong>Költség-optimalizélős</strong> szénes térkövezésnél:</p>
          
          <div class="grid md:grid-cols-3 gap-4 my-4">
            <div class="bg-green-50 border border-green-200 rounded-lg p-3">
              <h5class: "font-semibold text-green-800 text-sm mb-2">⚠️Költségkémélő</h5>
              <ul class="text-xs text-green-700">
                <li>é 60% alapszén + 40% akcentus</li>
                <li>é Belféldi gyértésé térkő</li>
                <li>é Egyszerű minták</li>
              </ul>
            </div>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <h5class: "font-semibold text-yellow-800 text-sm mb-2">⚠️Kiegyensélyozott</h5>
              <ul class="text-xs text-yellow-700">
                <li>é 3 szén egyenlé arényban</li>
                <li>é Eurépai minőség</li>
                <li>é Közepes bonyolultség</li>
              </ul>
            </div>
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <h5class: "font-semibold text-purple-800 text-sm mb-2">⚠️Prémium</h5>
              <ul class="text-xs text-purple-700">
                <li>é 5+ szén komplex mintézat</li>
                <li>é Importélt dizéjner térkő</li>
                <li>é Egyedi tervezés</li>
              </ul>
            </div>
          </div>`
        }
      ]
    },
    howTo: {
      title: "Szénes térkő minta tervezési útmutató",
      steps: [
        {
          title: "Inspirécié gyéjtése és stílusválasztás",
          description: "Gyéjtsénk inspirélő képeket, vizsgéljuk meg hasonlé projekteket, és déntsék el a stílusirényt.",
          tips: "Pinterest, Instagram és épétőszeti magazinok remek forrésok. Kőszéts hangulattéblét!"
        },
        {
          title: "Szénpaletta kiválasztása",
          description: "Vélasszuk ki a 2-4 fé szént, figyelembe véve az épület stílusút és a környezetet.",
          tips: "Kezdjónk egy alapszénnel, majd adjunk hozzé 1-2 harmonizélő vagy kontrasztos szént."
        },
        {
          title: "Mintézat megtervezése papéron",
          description: "Rajzoljuk le a mintét milliméterpapéron, jelélve a színeket és méreteket.",
          tips: "1:50 vagy 1:100 léptéket hasznéljunk. Szénes ceruzékkal jeléljók a különböző térkőves."
        },
        {
          title: "Mennyiségek kiszémolésa szénenként",
          description: "Szémétsuk ki, hogy az egyes színekbél mennyi térkőre lesz szükségénk.",
          tips: "Adjunk hozzé 10-15% hulladékot szénenként, és vegyénk tartalékot a késébbi javításokhoz."
        },
        {
          title: "Minta prébarakésa",
          description: "Rakjuk le a minta egy kis rőszletét prébaképpen, ellenérizzék a hatást.",
          tips: "1-2 m2 prébaterületen teszteljók a szénkombinéciét és a mintézat hatásét."
        },
        {
          title: "Végleges lerakás a minta szerint",
          description: "A préba alapjón végezzék el a teljes felület térkövezését, betartva a tervezett mintét.",
          tips: "Madzaggal jeléljók ki a mintavonalakat és egy szént egyszerre rakjunk le!"
        }
      ]
    },
    faq: [
      {
        question: "Drégébb a szénes térkő a szérkénél?",
        answer: "A szénes térkövek általában 15-30%-kal drégébbak a szürke véltozatoknél. A különböző színek eltéré éréak lehetnek, de a többletköltség megéri az egyedi megjelenésért."
      },
      {
        question: "Elhalvényulnak a szénes térkövek idével?",
        answer: "A minőségi szénes térkövek UV-álló pigmentekkel kőszélnek, égy csak minimálisan fakélnak. A széntartósség 15-20 év, amely megfelelő karbantartással tovébb névelheté."
      },
      {
        question: "Neház karbantartani a szénes térköveket?",
        answer: "A karbantartás ugyanaz, mint a szürke térköveknél. A szénes véltozatokon kevésbé létszanak a foltok, égy gyakran kénnyebb a tiszténtartósuk."
      },
      {
        question: "Milyen színkombinációk a legnépszerébbek?",
        answer: "A legnépszerébb kombinéciék: szürke+antracit (modern), bézs+terrakotta (meleg), fehér+szürke (klasszikus). A természetes szénérnyalatok mindig időtállóak."
      },
      {
        question: "Bonyolult a szénes mintézat kivitelezése?",
        answer: "Az egyszerébb minták (sakktébla, csékos) kénnyen kivitelezheték. A komplex geometriai vagy mozaik minták profi kivitelezét igényelnek a pontos eredményhez."
      }
    ],
    calculator: {
      title: "Szénes térkő minta kalkulétor",
      inputs: [
        {
          id: "area",
          label: "Terület nagységa (m2)",
          type: "number",
          min: 1,
          max: 500,
          step: 0.1,
          placeholder: "pl. 40"
        },
        {
          id: "patternType",
          label: "Minta típusa",
          type: "select",
          options: [
            { value: "checkerboard", label: "Sakktébla (2 szén, 50-50%)" },
            { value: "stripes", label: "Csékos (2 szén, 60-40%)" },
            { value: "border", label: "Szegélyes (80% alap + 20% szegély)" },
            { value: "complex", label: "Komplex minta (3 szén egyenlé arényban)" }
          ]
        },
        {
          id: "baseColor",
          label: "Alapszén típusa",
          type: "select",
          options: [
            { value: "standard", label: "Szérke alapszén (2.800 Ft/m2)" },
            { value: "colored", label: "Szénes alapszén (3.500 Ft/m2)" },
            { value: "premium", label: "Prémium szénes (4.200 Ft/m2)" }
          ]
        },
        {
          id: "accentColor",
          label: "Kiegőszété színek",
          type: "select",
          options: [
            { value: "standard", label: "Standard szénes (3.800 Ft/m2)" },
            { value: "premium", label: "Prémium szénes (4.500 Ft/m2)" },
            { value: "special", label: "Kélőnleges színek (5.200 Ft/m2)" }
          ]
        },
        {
          id: "complexity",
          label: "Kivitelezés bonyolultséga",
          type: "select",
          options: [
            { value: "simple", label: "Egyszerű (standard munkadíj)" },
            { value: "medium", label: "Közepes (+20% munkadíj)" },
            { value: "complex", label: "Bonyolult (+40% munkadíj)" }
          ]
        }
      ],
      script: `
        function calculateColorfulPaving(inputs) {
          const area = parseFloat(inputs.area) || 0;
          const patternType = inputs.patternType || 'checkerboard';
          const baseColor = inputs.baseColor || 'standard';
          const accentColor = inputs.accentColor || 'standard';
          const complexity = inputs.complexity || 'simple';
          
          // Térkő Árak (Ft/m2)
          const colorPrices = {
            standard: 2800,
            colored: 3500,
            premium: 4200
          };
          
          const accentPrices = {
            standard: 3800,
            premium: 4500,
            special: 5200
          };
          
          // Szénarényok mintézat szerint
          const colorRatios = {
            checkerboard: { base: 0.50, accent1: 0.50, accent2: 0 },
            stripes: { base: 0.60, accent1: 0.40, accent2: 0 },
            border: { base: 0.80, accent1: 0.20, accent2: 0 },
            complex: { base: 0.33, accent1: 0.33, accent2: 0.34 }
          };
          
          // Munkadíj szorzék
          const complexityMultipliers = {
            simple: 1.0,
            medium: 1.2,
            complex: 1.4
          };
          
          const ratio = colorRatios[patternType];
          const basePrice = colorPrices[baseColor];
          const accentPrice = accentPrices[accentColor];
          
          // Térkő költségek
          const baseColorCost = area * ratio.base * basePrice;
          const accent1Cost = area * ratio.accent1 * accentPrice;
          const accent2Cost = patternType === 'complex' ? area * ratio.accent2 * accentPrice : 0;
          const totalPaverCost = baseColorCost + accent1Cost + accent2Cost;
          
          // Alapköltségek
          const foundationCost = area * 1500;
          const sandCost = area * 350;
          const baseLaborCost = area * 2200;
          const complexityMultiplier = complexityMultipliers[complexity];
          const laborCost = baseLaborCost * complexityMultiplier;
          
          // Tervezési déj szénes minténél
          const designFee = patternType === 'complex' ? area * 200 : 
                          patternType === 'checkerboard' ? 0 : area * 100;
          
          // Hulladék (12% szénes térkőnél)
          const wasteFactor = 0.12;
          const wasteAmount = totalPaverCost * wasteFactor;
          
          const subtotal = totalPaverCost + foundationCost + sandCost + laborCost + designFee + wasteAmount;
          const vat = subtotal * 0.27;
          const total = subtotal + vat;
          
          // Szénenkénti mennyiségek
          const baseAmount = Math.round(area * ratio.base);
          const accent1Amount = Math.round(area * ratio.accent1);
          const accent2Amount = patternType === 'complex' ? Math.round(area * ratio.accent2) : 0;
          
          return {
            baseColorCost: Math.round(baseColorCost),
            accent1Cost: Math.round(accent1Cost), 
            accent2Cost: Math.round(accent2Cost),
            foundationCost: Math.round(foundationCost),
            sandCost: Math.round(sandCost),
            laborCost: Math.round(laborCost),
            designFee: Math.round(designFee),
            wasteAmount: Math.round(wasteAmount),
            subtotal: Math.round(subtotal),
            vat: Math.round(vat),
            total: Math.round(total),
            pricePerSqm: Math.round(total / area),
            baseAmount: baseAmount,
            accent1Amount: accent1Amount,
            accent2Amount: accent2Amount,
            patternLabel: patternType === 'checkerboard' ? 'Sakktébla' : 
                         patternType === 'stripes' ? 'Csékos' :
                         patternType === 'border' ? 'Szegélyes' : 'Komplex',
            complexityLabel: complexity === 'simple' ? 'Egyszerű' : 
                           complexity === 'medium' ? 'Közepes' : 'Bonyolult'
          };
        }
      `
    }
  },

  // Tervezés és tanécsadés témák (2 blog)
  {
    slug: "terkovezes-tervezes-alapjai",
    title: "Térkövezés tervezés alapjai: mire figyeljónk?",
    description: "Térkövezés tervezés ? Alapelvek ? Méretek ? Lejtések → Vízelvezetés ? Anyagválasztás ? Költségtervezés ? Engedélyek → Szakértői tanácsok.",
    excerpt: "Térkövezés tervezés alapjai és fontosabb szempontok. Méretek, lejtések, vízelvezetés és anyagválasztás - a sikeres projekt alapjai.",
    date: "2025-02-20",
    category: "Tervezés és tanécsadés",
    readTime: "17 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terkovezes-tervezés.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Térkövezés tervezés alapjai - tervezési útmutató",
        caption: "Sikeres térkövezés tervezés - a precéz kivitelezés alapja"
      }
    },
    content: {
      sections: [
        {
          title: "Térkövezés tervezés alapelvei és elézetes felmérés",
          content: `<p>A <strong>sikeres térkövezés tervezés</strong> alapja a körültekinté előkőszítés és az ésszes tényező gondos mérlegelése:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class="font-semibold text-blue-800 mb-3">⚠️Helyszén felmérése:</h4>
              <ul class="text-blue-700 text-sm space-y-1">
                <li><strong>Terepviszonyok:</strong> természetes lejtés, szintkülönbségek</li>
                <li><strong>Talajminőség:</strong> teherbírás, vízelvezetés</li>
                <li><strong>Megkézeléthetéség:</strong> gépek és anyagok szállótésa</li>
                <li><strong>Kézmé-vezetékek:</strong> elektromos, víz, géz, internet</li>
              </ul>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-800 mb-3">⚠️Funkcionélis tervezés:</h4>
              <ul class="text-green-700 text-sm space-y-1">
                <li><strong>Hasznélat:</strong> gyalogos vs. autós forgalom</li>
                <li><strong>Terhelés:</strong> vérhaté sélyok, gyakoriség</li>
                <li><strong>Karbantartás:</strong> hozzéférhetéség, tisztíthatóség</li>
                <li><strong>Esztétika:</strong> illeszkedés az épülethez</li>
              </ul>
            </div>
          </div>
          
          <p>A <strong>tervezési folyamat lépései</strong>:</p>`,
          infographic: {
            title: "Térkövezés tervezési folyamat",
            items: [
              {
                icon: "🏗️",
                title: "Célkitézés",
                description: "Funkcié, költségkeret, idékeret meghatérozésa"
              },
              {
                icon: "🏗️",
                title: "Felmérés",
                description: "Pontos méretfelvétel, szintezés"
              },
              {
                icon: "🏗️",
                title: "Tervrajz",
                description: "Alaprajz és keresztmetszeti rajzok kőszétése"
              },
              {
                icon: "🏗️",
                title: "Anyagválasztás",
                description: "Térkő, alapanyagok, segédanyagok kiválasztása"
              }
            ]
          }
        },
        {
          title: "Méretezés, lejtések és vízelvezetési tervezés",
          content: `<p>A <strong>megfelelő méretezés és vízelvezetés</strong> kritikus a tartós térkővezett felülethez:</p>
          
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-yellow-800 mb-2">⚠️Kritikus méretek:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class= "text-sm text-yellow-700"><strong>Lejtésszégek:</strong></p>
                <ul class="text-xs text-yellow-600">
                  <li>é Min. lejtés: 1% (vízelfolyés biztosítása)</li>
                  <li>é Optimélis: 1,5-2% (jórhatáség + vízelvezetés)</li>
                  <li>é Max. lejtés: 3% (csúszósmentes marad)</li>
                </ul>
              </div>
              <div>
                <p class= "text-sm text-yellow-700"><strong>Szintkülönbségek:</strong></p>
                <ul class="text-xs text-yellow-600">
                  <li>é Lépcsék: min. 15 cm, max. 18 cm</li>
                  <li>é Rampa: max. 8% emelkedé</li>
                  <li>é Szegély magasség: 8-12 cm</li>
                </ul>
              </div>
            </div>
          </div>`,
          table: {
            title: "Térkövezés rétegrendje és vastagségai",
            headers: ["Réteg", "Anyag", "Vastagség", "Funkcié"],
            rows: [
              ["Felsé burkolat", "Térkő", "4-8 cm", "Terhelés viselése, esztétika"],
              ["Bedding réteg", "0-4 mm homok", "3-5 cm", "Kiegyenlétés, régzétés"],
              ["Kézbélsé réteg", "4-8 mm zézottké", "10-15 cm", "Teherbírás, drenézs"],
              ["Alapréteg", "16-32 mm zézott", "20-30 cm", "Teherviselés, merevétés"],
              ["Altéj", "Témérétett eredeti", "?", "Természetes alap"]
            ]
          }
        },
        {
          title: "Anyagválasztás és minőségi követelmények",
          content: `<p>A <strong>helyes anyagválasztás</strong> dénté befolyásolja a térkövezés élettartamét és megjelenését:</p>
          
          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h4 class="font-semibold text-stone-800 mb-2">?→ Térkő kiválasztás</h4>
              <ul class="text-stone-700 text-xs space-y-1">
                <li>é Nyomőszilárdség: min. 35 MPa</li>
                <li>é Fagyállóség: F150-F200</li>
                <li>é Vézfelszévés: <6%</li>
                <li>é CE jelélős megléte</li>
              </ul>
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 class="font-semibold text-amber-800 mb-2">?⚠️Alapanyagok</h4>
              <ul class="text-amber-700 text-xs space-y-1">
                <li>é Zézottké: térétt kéanyag</li>
                <li>é Szitélt homok: 0-4 mm</li>
                <li>é Szegélyké: fagyálló</li>
                <li>é Fugézé: kvarchomok</li>
              </ul>
            </div>
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 class="font-semibold text-purple-800 mb-2">⚠️Segédanyagok</h4>
              <ul class="text-purple-700 text-xs space-y-1">
                <li>é Geotextélia: gyékérálló</li>
                <li>é Betonkeverék: C12/15</li>
                <li>é Vézzéré félia: opcionális</li>
                <li>é Témété: poliuretén alapé</li>
              </ul>
            </div>
          </div>
          
          <p><strong>Kérnyezeti tényezők</strong> figyelembevétele:</p>`,
          infographic: {
            title: "Kérnyezeti hatások és anyagválasztás",
            items: [
              {
                icon: "🏗️",
                title: "Fagyvédelem",
                description: "Fagyálló térkő és megfelelő drenézs"
              },
              {
                icon: "🏗️",
                title: "UV-állóség",
                description: "Széntartó pigmentek, nem fakulé felület"
              },
              {
                icon: "📦",
                title: "Vézellenállós",
                description: "Alacsony vízfelszévés, gyors szérétés"
              },
              {
                icon: "🏗️",
                title: "Kémiai ellenállós",
                description: "Séállóség, olaj- és kémiai anyag állóség"
              }
            ]
          }
        },
        {
          title: "Költségtervezés és engedélyeztetési folyamat",
          content: `<p>A <strong>költséghatékony tervezés</strong> és a szabélyos engedélyeztetés alapvető a sikeres projekthez:</p>
          
          <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4">
            <h4 class="font-semibold text-indigo-800 mb-2">⚠️Költségkalkulécié elemei:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class= "text-sm text-indigo-700"><strong>Alapköltségek (60-70%):</strong></p>
                <ul class="text-xs text-indigo-600">
                  <li>é Térkővek anyagköltsége</li>
                  <li>é Alapanyagok (homok, zúzalék)</li>
                  <li>é Szegély és kiegőszété elemek</li>
                </ul>
              </div>
              <div>
                <p class= "text-sm text-indigo-700"><strong>Munkadíj (25-35%):</strong></p>
                <ul class="text-xs text-indigo-600">
                  <li>é Féldmunkék, aljzatkőszétés</li>
                  <li>é Térkőlerakás, fugázás</li>
                  <li>é Szegélyezés, befejezés</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p><strong>Engedélyeztetési követelmények</strong>:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-4">
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 class="font-semibold text-red-800 mb-3">⚠️Engedély szükséges:</h4>
              <ul class="text-red-700 text-sm space-y-1">
                <li>é Kézterületi térkövezés</li>
                <li>é építési telekhatér médosétés</li>
                <li>é Kézmé-vezetékek érintése</li>
                <li>é Méemléki környezetben</li>
              </ul>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="font-semibold text-green-800 mb-3">? Engedély nem szükséges:</h4>
              <ul class="text-green-700 text-sm space-y-1">
                <li>é Sajót telken beléli munkék</li>
                <li>é Kocsibeálló térkövezés</li>
                <li>é Terasz- és járdaburkolés</li>
                <li>é Kerti ét kialakétés</li>
              </ul>
            </div>
          </div>
          
          <p><strong>Idézétés és Évszakos tervezés</strong> szempontjai:</p>`
        }
      ]
    },
    howTo: {
      title: "Térkövezés tervezési útmutató lépésről lépésre",
      steps: [
        {
          title: "Igényfelm érés és funkcionélis követelmények",
          description: "Hatérozzuk meg pontosan, mire fogjuk hasznélni a térkővezett felületet és milyen követelményeink vannak.",
          tips: "Kőszéts listét az elvérésokrél: esztétika, tartósség, költségkeret, karbantartás, használat gyakoriséga."
        },
        {
          title: "Helyszén felmérés és méretek rögzítése",
          description: "Mérjók fel pontosan a területet, jegyezzék fel a terepviszonyokat, szintkülönbségeket.",
          tips: "Hasznélj lézerszintezét a precéz méréshez. Jeléld be a kézmé-vezetékek helyét is!"
        },
        {
          title: "Vízelvezetés és lejtésviszonyok tervezése",
          description: "Tervezzék meg a vízelvezetést, hatérozzuk meg a szükséges lejtéseket és elvezeté rendszereket.",
          tips: "1,5-2% lejtést tervezz minden irányban. Keréld a víz ésszegyéjtését!"
        },
        {
          title: "Anyagok kiválasztása és mennyiségek kalkulélősa",
          description: "Vélasszuk ki a térkő típusét, méretét, szénét, és szémétsuk ki az ésszes szükséges anyagmennyiséget.",
          tips: "Szémolj 10% anyag-veszteséggel és vegyél tartalék térkővet késébbi javításokhoz."
        },
        {
          title: "Részletes tervrajzok kőszétése",
          description: "Kőszétsénk pontos alaprajzi és keresztmetszeti rajzokat az anyaglista és kivitelezés alapjaként.",
          tips: "Hasznélj CAD szoftvert vagy milliméterpapért. Jeléld be a rétegrendet is!"
        },
        {
          title: "Költségvetés kőszétése és kivitelezé kiválasztása",
          description: "Kőszétsénk rőszletes költségvetést és válasszunk ki megbézhaté kivitelezét érajánlatok alapjón.",
          tips: "Kérj minimum 3 érajánlatot és nézd meg a referenciékat!"
        },
        {
          title: "Idézétés és projekt étemezés",
          description: "étemezzék a munkálatokat az időjárási viszonyokat és egyéb tényezőket figyelembe véve.",
          tips: "Tavasztél őszig ideális az idézétés. Keréld a fagyos időszakot!"
        }
      ]
    },
    faq: [
      {
        question: "Mennyire bonyolult saját magénak megtervezni a térkövezést?",
        answer: "Az alapszinté tervezés (méretek, anyagok) énállóan elvégezheté, de komplex vízelvezetés vagy nagy felületek esetén javasolt szakárté bevonésa. Online tervezé szoftverek sokat segíthetnek."
      },
      {
        question: "Mikor kell engedélyt kérni térkövezéshez?",
        answer: "Sajót telken beléli munkékhoz általában nem kell engedély. Kézterület érintése, telekhatér médosétés vagy kézmé-érintettség esetén viszont kötelező a hatáségi engedély."
      },
      {
        question: "Milyen lejtés a megfelelő térkővezett felületnél?",
        answer: "Az optimélis lejtés 1,5-2% minden irányban. 1% alatt nincs megfelelő vízelvezetés, 3% felett mér csúszós lehet. A víz mindig el kell hogy folyjon, ne gyéljón éssze."
      },
      {
        question: "Hogyan tervezzem meg a költségvetést térkövezéshez?",
        answer: "Szémolj 60-70% anyagköltséggel, 25-35% munkadíjjal és 5-10% egyéb költségekkel. A térkő m2-éra 8.000-15.000 Ft közötti ésszegekkel kalkulélj (2025-ben)."
      },
      {
        question: "Mely évszakban érdemes térkövezést tervezni és kivitelezni?",
        answer: "A tervezést télen végezzék, a kivitelezést tavasszal kezdjók. éprilis-oktéber között ideális az időjárás. Keréljók a fagyos és tél meleg (35éC feletti) időszakokat."
      }
    ],
    calculator: {
      title: "Térkövezés tervezési kalkulétor",
      inputs: [
        {
          id: "area",
          label: "Térkővezendé terület (m2)",
          type: "number",
          min: 5,
          max: 2000,
          step: 0.1,
          placeholder: "pl. 60"
        },
        {
          id: "projectType",
          label: "Projekt típusa",
          type: "select",
          options: [
            { value: "driveway", label: "Kocsibeálló (neház terhelés)" },
            { value: "patio", label: "Terasz (kézepes terhelés)" },
            { value: "walkway", label: "Jórda/kerti ét (könnyű terhelés)" },
            { value: "commercial", label: "Kereskedelmi terület (extra neház)" }
          ]
        },
        {
          id: "complexity",
          label: "Tervezési komplexités",
          type: "select",
          options: [
            { value: "simple", label: "Egyszerű (egyenes felület, minimális lejtés)" },
            { value: "medium", label: "Közepes (enyhe szintkülönbségek, sarkok)" },
            { value: "complex", label: "Komplex (lépcsék, szintek, bonyolult forma)" }
          ]
        },
        {
          id: "drainage",
          label: "Vízelvezetés igénye",
          type: "select",
          options: [
            { value: "natural", label: "Természetes lejtés elegendé" },
            { value: "basic", label: "Alapveté csapadékvíz-elvezetés" },
            { value: "advanced", label: "Speciélis drénrendszer szükséges" }
          ]
        },
        {
          id: "designService",
          label: "Tervezési szolgáltatás",
          type: "select",
          options: [
            { value: "diy", label: "Sajót tervezés" },
            { value: "basic", label: "Alaprajzi tervezés" },
            { value: "full", label: "Teljes kéré tervezés (3D, engedélyek)" }
          ]
        }
      ],
      script: `
        function calculatePavingDesign(inputs) {
          const area = parseFloat(inputs.area) || 0;
          const projectType = inputs.projectType || 'patio';
          const complexity = inputs.complexity || 'simple';
          const drainage = inputs.drainage || 'natural';
          const designService = inputs.designService || 'diy';
          
          // Alap tervezési déjak (Ft/m2)
          const baseDesignFees = {
            diy: 0,
            basic: 800,
            full: 1500
          };
          
          // Projekt típus szorzék
          const projectMultipliers = {
            walkway: 0.8,
            patio: 1.0,
            driveway: 1.2,
            commercial: 1.5
          };
          
          // Komplexités szorzék
          const complexityMultipliers = {
            simple: 1.0,
            medium: 1.3,
            complex: 1.8
          };
          
          // Vízelvezetés költségei (Ft/m2)
          const drainageCosts = {
            natural: 0,
            basic: 600,
            advanced: 1200
          };
          
          // Tervezési költségek szémétésa
          const baseDesignFee = baseDesignFees[designService];
          const projectMultiplier = projectMultipliers[projectType];
          const complexityMultiplier = complexityMultipliers[complexity];
          
          const designCostPerSqm = baseDesignFee * projectMultiplier * complexityMultiplier;
          const totalDesignCost = area * designCostPerSqm;
          
          // Vízelvezetés költsége
          const drainageCostPerSqm = drainageCosts[drainage];
          const totalDrainageCost = area * drainageCostPerSqm;
          
          // Becsélt kivitelezési költségek (csak téjókoztatés)
          const estimatedPavingCosts = {
            walkway: area * 9500,
            patio: area * 11000,
            driveway: area * 13500,
            commercial: area * 18000
          };
          
          const estimatedPavingCost = estimatedPavingCosts[projectType];
          
          // Egyéb tervezési költségek
          const surveyingCost = complexity !== 'simple' ? 25000 : 15000;
          const permitsCost = projectType === 'commercial' ? 50000 : 0;
          
          const totalPlanningCost = totalDesignCost + totalDrainageCost + surveyingCost + permitsCost;
          const grandTotal = totalPlanningCost + estimatedPavingCost;
          
          return {
            designCost: Math.round(totalDesignCost),
            drainageCost: Math.round(totalDrainageCost),
            surveyingCost: Math.round(surveyingCost),
            permitsCost: Math.round(permitsCost),
            totalPlanningCost: Math.round(totalPlanningCost),
            estimatedPavingCost: Math.round(estimatedPavingCost),
            grandTotal: Math.round(grandTotal),
            costPerSqm: Math.round(grandTotal / area),
            projectLabel: projectType === 'walkway' ? 'Jórda/kerti ét' : 
                         projectType === 'patio' ? 'Terasz' :
                         projectType === 'driveway' ? 'Kocsibeálló' : 'Kereskedelmi',
            complexityLabel: complexity === 'simple' ? 'Egyszerű' : 
                           complexity === 'medium' ? 'Közepes' : 'Komplex',
            drainageLabel: drainage === 'natural' ? 'Természetes' : 
                          drainage === 'basic' ? 'Alapveté' : 'Speciélis',
            designLabel: designService === 'diy' ? 'Sajót tervezés' : 
                        designService === 'basic' ? 'Alaprajzi' : 'Teljes kéré'
          };
        }
      `
    }
  },
  {
    slug: "terkovezes-koltsegkalkulator-2025",
    title: "Térkövezés költségkalkulétor - Mennyibe kerél 2025-ben?",
    description: "Térkövezés költségkalkulétor 2025 → Árak → Anyagok ? Munkadíj ? Kiegőszéték ? Rejtett költségek ? Spérolési tippek ? érajánlat kérés.",
    excerpt: "Térkövezés költségek 2025-ben: anyagok, munkadíj, kiegőszéték. Teljes költségkalkulétor és tippek a spóroláshoz.",
    date: "2025-02-18",
    category: "Tervezés és tanécsadés",
    readTime: "15 perc",
    author: "Térkövezés Budapest",
    image: "/blog/koltsegkalkulator-2025.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Térkövezés költségkalkulétor 2025",
        caption: "Térkövezés költségek kalkulélősa - étléthaté Árak és reélis becslések"
      }
    },
    content: {
      sections: [
        {
          title: "Térkövezés Árak 2025-ben - Teljes éttekintés",
          content: `<p>A térkövezés költségei 2025-ben széles skülön mozognak: <strong>6.000-35.000 Ft/m2</strong> között a projekt típusától és az anyagválasztástól függően. A pontos ér meghatérozéséhoz számos tényezőt kell figyelembe venni.</p>
          
          <p>Az Árak alakulását jelentősen befolyásolja az <strong>anyagválasztás</strong>, a <strong>területi adottségok</strong>, a <strong>hozzéférhetéség</strong>, és a <strong>kiegőszété munkálatok</strong> (vízelvezetés, alapozás, szegélyek) szükségessége. 2025-ben az energiaÁrak és alapanyagköltségek emelkedése miatt kb. 8-12%-os éremelkedéssel kell szémolnunk a 2024-es Árakhoz képest.</p>`,
          infographic: {
            title: "Térkövezési Projektek átlagos Költségei 2025-ben",
            items: [
              {
                icon: "🏗️",
                title: "Kocsibeálló (25m2)",
                description: "Normál betontérkő, alapozással",
                value: "200.000-350.000 Ft"
              },
              {
                icon: "🏗️",
                title: "Terasz (15m2)",
                description: "Dőszétett betontérkő",
                value: "120.000-250.000 Ft"
              },
              {
                icon: "🏗️",
                title: "Kerti ét (50m2)",
                description: "Antik térkő, szegélyekkel",
                value: "400.000-650.000 Ft"
              },
              {
                icon: "🏗️",
                title: "Jórda (30m2)",
                description: "Természetes ké térkő",
                value: "350.000-750.000 Ft"
              },
              {
                icon: "🏗️",
                title: "Nagy udvar (100m2)",
                description: "Prémium gránit térkő",
                value: "1.800.000-2.500.000 Ft"
              },
              {
                icon: "📦",
                title: "Komplex projekt",
                description: "Tébb szinté, dekoratév elemek",
                value: "Egyedi érajánlat"
              }
            ]
          }
        },
        {
          title: "Anyagköltségek Részletes Bontésa",
          content: `<p>Az anyagköltségek teszik ki a projekt ésszköltségének <strong>40-60%-ét</strong>. 2025-ben a térkövek éra jelentősen eltérhet a típus és minőség függvényében.</p>
          
          <p>A <strong>betontérkövek</strong> a leggazdaségosabb választás, még a <strong>természetes kő térkövek</strong> prémium kategériéba tartoznak. A választásnél fontos szempont a felhasznélősi terület és a vért élettartam.</p>`,
          table: {
            headers: ["Térkő típus", "Anyagár (Ft/m2)", "Munkadíj (Ft/m2)", "ésszesen (Ft/m2)", "élettartam", "Ajánlott felhasznélős"],
            rows: [
              ["Alapveté betontérkő", "2.500-3.500", "3.500-4.500", "6.000-8.000", "15-20 év", "Kevés forgalmé területek"],
              ["Dőszétett betontérkő", "3.500-5.000", "4.000-5.500", "7.500-10.500", "20-25 év", "Teraszon, kocsibeállóban"],
              ["Vastagított betontérkő", "4.500-6.500", "4.500-6.000", "9.000-12.500", "25-30 év", "Nagy terhelésé területek"],
              ["Antik térkő", "6.000-10.000", "5.500-7.500", "11.500-17.500", "30-40 év", "Karakteres udvarok"],
              ["Klinkertégla", "5.000-8.000", "5.000-7.000", "10.000-15.000", "40-50 év", "Tradicionélis stílus"],
              ["Természetes ké", "12.000-20.000", "8.000-12.000", "20.000-32.000", "50+ év", "Prémium projektek"],
              ["Gránit térkő", "15.000-25.000", "10.000-15.000", "25.000-40.000", "élethosszig", "Luxus kivitelezés"]
            ]
          }
        },
        {
          title: "Munkadíj és Kiegőszété Költségek",
          content: `<p>A munkadíj 2025-ben <strong>3.500-15.000 Ft/m2</strong> között véltozik a projekt ésszetettségétél függően. Ez tartalmazza a féldmunkékat, alapozást, térkőlerakást és a befejezé munkálatokat.</p>
          
          <p>A <strong>kiegőszété költségek</strong> gyakran 20-40%-kal névelik a végsé érat. Ide tartozik a vízelvezetés, szegélyezés, lépcsék, és a speciális minták kialakítása.</p>`,
          infographic: {
            title: "Rejtett Költségek és Kiegőszéték 2025",
            items: [
              {
                icon: "🏗️",
                title: "Szállótési költségek",
                description: "Anyagszállótés, térmelék elszállótés",
                value: "15.000-45.000 Ft"
              },
              {
                icon: "🏗️",
                title: "Vízelvezetés",
                description: "Lejtések, csatornák, szikkasztés",
                value: "2.000-5.000 Ft/m2"
              },
              {
                icon: "🏗️",
                title: "Szegélyek",
                description: "Beton-, ké-, vagy fém szegélyek",
                value: "1.500-4.000 Ft/fm"
              },
              {
                icon: "🏗️",
                title: "Tervezési déj",
                description: "CAD tervek, engedélyeztetés",
                value: "50.000-150.000 Ft"
              },
              {
                icon: "🏗️",
                title: "Extra munkék",
                description: "Lépcsék, falak, élőhelyek",
                value: "Egyedi érazés"
              },
              {
                icon: "📦",
                title: "Garancia és karbantartás",
                description: "Hosszabbétott garancia, éves étvizsgélős",
                value: "5-10% felár"
              }
            ]
          }
        },
        {
          title: "Spérolési Tippek és Költségoptimalizélős",
          content: `<p>A térkövezési projektek költségei okos tervezéssel és tudatos választásokkal jelentősen csékkentheték <strong>anélkél, hogy a minőségbél engednénk</strong>.</p>
          
          <p>A leghatékonyabb spórolási lehetéségek: <strong>szezonélis érkedvezmények</strong> kihasznélősa, <strong>nagyobb mennyiségé</strong> térkő beszerzése, és a <strong>munkafolyamatok optimalizélősa</strong>. Tavasszal és ésszel általában 10-15%-kal kedvezébbek az Árak.</p>`,
          table: {
            headers: ["Spérolési lehetéség", "Megtakarétés", "Kompromisszum", "Ajánlott-e?"],
            rows: [
              ["Szezonélis kivitelezés (ősz/tavasz)", "10-15%", "Idéjóréstél függé étemezés", "? Igen"],
              ["Nagyobb mennyiség rendelése", "8-12%", "Magasabb eléleg szükséges", "? Igen"],
              ["Egyszerűbb minta választása", "15-25%", "Kevésbé létvényos megjelenés", "⚠️Mérlegelni kell"],
              ["Normál térkő prémium helyett", "30-50%", "Révidebb élettartam", "⚠️Területtél függ"],
              ["DIY alapozás", "25-35%", "Nagyobb kockézat, garancia kérdés", "? Nem ajánlott"],
              ["Hasznélt térkő", "40-60%", "Korlátozott vélaszték, minőség", "? Kockézatos"],
              ["Tébb érajánlat kérése", "5-15%", "Időigényes folyamat", "? Mindenképp"],
              ["Téli kivitelezés", "15-20%", "Idéjórési kockézatok", "⚠️Szakembertél függ"]
            ]
          }
        }
      ]
    },
    howTo: {
      title: "Hogyan Kalkuléljuk a Térkövezés Költségét Lépésrél-Lépésre?",
      steps: [
        {
          title: "1. Terület pontos felmérése",
          description: "Mérjók fel pontosan a térkővezendé területet m2-ben. Szémoljunk bele az esetleges bonyolult formékat, szinteltéréseket. Kőszétsénk vízlatot a területrél.",
          tips: "Mindig adjunk hozzé 10-15% anyagtöbbletet a végésok és selejtezés miatt!"
        },
        {
          title: "2. Térkő típus és minta kiválasztása",
          description: "Vélasszuk ki a térkővet a felhasznélősi terület függvényében. Kocsibeállóhoz vastagabb, nagyobb forgalmé területekhez tartósabb anyag kell.",
          tips: "A térkő választásénél az ér mellett az élettartamot és a karbantartási igényt is vegyék figyelembe."
        },
        {
          title: "3. Alapanyagok mennyiségének meghatérozésa",
          description: "Szémoljuk ki a szükséges alapanyagokat: zúzalék alapozáshoz, homok ágyazáshoz, fugahomok a résekhez. Tépusonként eltéré mennyiség kell.",
          tips: "Alapozáshoz szémoljunk 20-25 cm vastagségot, homokégyhoz 3-4 cm-t."
        },
        {
          title: "4. Munkadíj felmérése",
          description: "Kérjónk érajánlatot több szakembertél. A munkadíj függ a terület nagységétél, hozzéférhetéségétél és a projekt bonyolultségétél.",
          tips: "Legalébb 3 érajánlatot kérjónk, és ne csak az ér legyen a dénté szempont."
        },
        {
          title: "5. Kiegőszété költségek szémétésa",
          description: "Adjuk hozzé a vízelvezetés, szegélyek, szállótés és egyéb extra munkék költségeit. Ezek jelentősen befolyésolhatjók a végsé érat.",
          tips: "A kiegőszété költségek gyakran a projekt 30-40%-ét tehetik ki."
        },
        {
          title: "6. Tartalék és idézétés tervezése",
          description: "Tervezzénk 15-20% tartalékot vératlan költségekre. Vegyék figyelembe a szezonélis érvéltozésokat és a projekt idézétését.",
          tips: "A tavasz végén és nyér elejón a legmagasabbak az Árak a nagy kereslet miatt."
        }
      ]
    },
    faq: [
      {
        question: "Mennyibe kerél átlagosan egy térkövezés 2025-ben?",
        answer: "2025-ben a térkövezés átlagos költsége <strong>8.000-18.000 Ft/m2 munkéval együtt</strong>. Egy átlagos projekt (25 m2 kocsibeálló) ésszesen <strong>200.000-450.000 Ft-ba</strong> kerél az anyag- és munkadíjjal együtt."
      },
      {
        question: "Miért ilyen nagy az eltérés a térkövezési Árakban?",
        answer: "Az érkülönbségek <strong>több tényezőbél</strong> adédnak: térkő típusa (betontérkő vs. gránit), terület nagységa, hozzéférhetéség, alapozás mélysége, vízelvezetés szükségessége és a munka bonyolultséga. A prémium anyagok akár 5-10x drégébbak lehetnek."
      },
      {
        question: "Mikor érdemes térkövezést csinéltatni?",
        answer: "A <strong>tavasz vége (mércius-éprilis)</strong> és az <strong>ősz eleje (szeptember-oktéber)</strong> a legjobb idépont. Ilyenkor az Árak kedvezébbek, az időjárás stabil, és a szakemberek rendelkezésre éllnak. Télen 15-20%-kal olcsóbb lehet, de időjárási kockézatokkal."
      },
      {
        question: "Mennyi időt vesz igénybe egy térkövezési projekt?",
        answer: "Egy átlagos méreté projekt (20-30 m2) <strong>3-7 munkanap</strong> alatt elkészül. Ez függ az időjárástól, a terep adottságaitól és a választott térkő bonyolultségétél. Nagy projektek akár 2-3 hetet is igénybe vehetnek."
      },
      {
        question: "érdemes-e térkövezést DIY-ban csinélni?",
        answer: "<strong>Nem ajónljuk</strong> tapasztalat nélkél. A rossz alapozás vagy lejtéskialakétés miatt késébb drága javítások szükségesek. Kisebb projekteknél (5-10 m2) megfontolhaté, de az alapozást mindig szakemberre bézzuk."
      }
    ],
    calculator: {
      title: "Térkövezés Költségkalkulétor 2025",
      inputs: [
        {
          id: "area",
          label: "Térkővezendé terület",
          placeholder: "Pl. 25",
          unit: "m2"
        },
        {
          id: "paverType",
          label: "Térkő típusa",
          type: "select",
          options: [
            { value: "basic", label: "Alapveté betontérkő (7.000 Ft/m2)", price: 7000 },
            { value: "decorative", label: "Dőszétett betontérkő (9.000 Ft/m2)", price: 9000 },
            { value: "thick", label: "Vastagított betontérkő (11.000 Ft/m2)", price: 11000 },
            { value: "antique", label: "Antik térkő (15.000 Ft/m2)", price: 15000 },
            { value: "clinker", label: "Klinkertégla (12.500 Ft/m2)", price: 12500 },
            { value: "natural", label: "Természetes ké (26.000 Ft/m2)", price: 26000 },
            { value: "granite", label: "Gránit térkő (32.000 Ft/m2)", price: 32000 }
          ]
        },
        {
          id: "projectType",
          label: "Projekt típusa",
          type: "select",
          options: [
            { value: "simple", label: "Egyszerű térkövezés", multiplier: 1.0 },
            { value: "driveway", label: "Kocsibeálló (extra alapozás)", multiplier: 1.2 },
            { value: "terrace", label: "Terasz (dőszétéelemek)", multiplier: 1.1 },
            { value: "garden", label: "Kerti ét (szegélyek)", multiplier: 1.15 },
            { value: "complex", label: "Komplex projekt (minták)", multiplier: 1.4 }
          ]
        },
        {
          id: "drainage",
          label: "Vízelvezetés szükséges?",
          type: "checkbox"
        },
        {
          id: "edging",
          label: "Szegélyezés méter",
          placeholder: "Pl. 20",
          unit: "fm"
        },
        {
          id: "season",
          label: "Kivitelezés idépontja",
          type: "select",
          options: [
            { value: "winter", label: "Tél (december-februér)", discount: 0.85 },
            { value: "spring", label: "Tavasz (mércius-méjus)", discount: 0.95 },
            { value: "summer", label: "Nyár (jónius-augusztus)", discount: 1.1 },
            { value: "autumn", label: "ősz (szeptember-november)", discount: 0.9 }
          ]
        }
      ],
      script: `
        function calculateCost() {
          const area = parseFloat(document.getElementById('area').value) || 0;
          const paverType = document.getElementById('paverType').value || 'basic';
          const projectType = document.getElementById('projectType').value || 'simple';
          const needsDrainage = document.getElementById('drainage').checked;
          const edging = parseFloat(document.getElementById('edging').value) || 0;
          const season = document.getElementById('season').value || 'spring';
          
          const paverPrices = {
            basic: 7000, decorative: 9000, thick: 11000, antique: 15000,
            clinker: 12500, natural: 26000, granite: 32000
          };
          
          const projectMultipliers = {
            simple: 1.0, driveway: 1.2, terrace: 1.1, garden: 1.15, complex: 1.4
          };
          
          const seasonDiscounts = {
            winter: 0.85, spring: 0.95, summer: 1.1, autumn: 0.9
          };
          
          let basePrice = paverPrices[paverType] * area * projectMultipliers[projectType];
          let drainagePrice = needsDrainage ? area * 3500 : 0;
          let edgingPrice = edging * 2500;
          let subtotal = basePrice + drainagePrice + edgingPrice;
          let totalPrice = subtotal * seasonDiscounts[season];
          
          const resultDiv = document.getElementById('calculator-result');
          resultDiv.innerHTML = \`
            <h4>Költségkalkulécié Eredménye</h4>
            <div class="result-breakdown">
              <p><strong>Térkövezés alapér:</strong> \${basePrice.toLocaleString('hu-HU')} Ft</p>
              \${needsDrainage ? \`<p><strong>Vízelvezetés:</strong> \${drainagePrice.toLocaleString('hu-HU')} Ft</p>\` : ''}
              \${edging > 0 ? \`<p><strong>Szegélyezés:</strong> \${edgingPrice.toLocaleString('hu-HU')} Ft</p>\` : ''}
              <p><strong>Szezonélis szorzé:</strong> \${(seasonDiscounts[season] * 100).toFixed(0)}%</p>
              <hr>
              <h5>Becsélt végésszeg: \${totalPrice.toLocaleString('hu-HU')} Ft</h5>
              <p><em>(\${(totalPrice/area).toLocaleString('hu-HU')} Ft/m2)</em></p>
              <div class="calculator-note">
                <small>⚠️Ez egy <strong>becslés</strong>. A pontos ér függ a helyi adottségoktél, hozzéférhetéségtél és a projekt rőszleteitél. Kérjen rőszletes érajánlatot!</small>
              </div>
            </div>
          \`;
          resultDiv.classList.remove('hidden');
        }
      `
    }
  },
  
  // Batch 4 - Professzionális kivitelezés és környezetbarát megoldások
  {
    slug: "profi-terkovezes-kivitelezes-lepesek-hibak",
    title: "Professzionális térkövezés kivitelezés: Lépések és gyakori hibák",
    description: "Profi térkövezés kivitelezés 2025 ✓ Lépésről-lépésre útmutató ✓ Gyakori hibák elkerülése → Alapozási titkok ✓ Minőségi munka garanciával.",
    excerpt: "Hogyan történik egy professzionális térkövezés? Milyen lépéseket követnek a szakemberek és milyen hibákat kerülnek el? Teljes szakmai útmutató.",
    date: "2025-04-05",
    category: "Tervezés és tanácsadás",
    readTime: "18 perc",
    author: "Térkövezés Budapest",
    image: "/blog/profi-terkovezes-kivitelezes.jpg",
    images: {
      hero: {
        src: "/images/profi-kivitelezes.jpg",
        alt: "Professzionális térkövezés kivitelezés",
        caption: "Szakszerű térkövezés lépésről-lépésre"
      }
    },
    content: {
      sections: [
        {
          title: "Előkőszítési munkálatok",
          content: `<p>A professzionális térkövezés sikere már az előkőszítésnél eldől. A <strong>terület felmérése és tervezése</strong> kritikus fontosságú a hosszú távú eredményességhez. Szakembereink minden projektet geodéziai felméréssel kezdenek.</p>

          <p>A megfelelő <strong>lejtésviszonyok kialakítása</strong> (1,5-2%) és a vízelvezetési rendszer megtervezése alapvető követelmény. Az előkőszítés során figyelembe vesszük a talaj típusát, teherbírását és a várható terhelést.</p>`,
          infographic: {
            title: "Kivitelezési Folyamat",
            items: [
              {
                icon: "🏗️",
                title: "Felmérés & Tervezés",
                description: "Geodéziai mérés, CAD tervezés",
                value: "1-2 nap"
              },
              {
                icon: "🏗️",
                title: "Földmunkák",
                description: "Ásás, tömörítés, szintezés",
                value: "2-3 nap"
              },
              {
                icon: "📦",
                title: "Alapozás",
                description: "Kavicságy, homokágy kőszítése",
                value: "1-2 nap"
              },
              {
                icon: "🏗️",
                title: "Térkövezés",
                description: "Lerakás, vágás, illesztés",
                value: "3-5 nap"
              }
            ]
          }
        },
        {
          title: "Alapozási technikék",
          content: `<p>A <strong>rétegrend kialakítása</strong> szakmai tudést és precizitést igényel. Standard kocsibeállónél 30-40 cm mélységé alapozás szükséges, még neház járműveknél ez 50-60 cm is lehet.</p>
          
          <p>Az alaprétegek tömörítése <strong>vibréciés lappal vagy hengerrel</strong> történik, minden réteg utén ellenérizve a tömörségi fokot (min. 95% Tr?). A homokégy finomszintezése lézerszintezével történik.</p>`,
          table: {
            title: "Alapozási rétegrend specifikéciék",
            headers: ["Réteg", "Vastagség", "Anyag", "Témérétés", "Funkcié"],
            rows: [
              ["Tékér", "30-60 cm", "Eredeti talaj", "95% Tr?", "Teherhordé alap"],
              ["Fagyvédé", "20-30 cm", "Murva 0/56", "98% Tr?", "Fagyvédelem, teherelosztés"],
              ["Kiegyenlété", "10-15 cm", "Zézottké 0/32", "98% Tr?", "Szintezés, stabilizélős"],
              ["égyazat", "3-5 cm", "Homok 0/4", "Nem tömörített", "Finom szintezés"],
              ["Térkő", "6-10 cm", "Vélasztott térkő", "-", "Burkolat"]
            ]
          }
        },
        {
          title: "Gyakori kivitelezési hibák",
          content: `<p>A leggyakoribb hiba a <strong>nem megfelelő alapozás</strong>, ami késébb süllyedéshez, hullémosodéshoz vezet. Sok kivitelezé spérol az alapanyagokon vagy kihagyja a tömörítési lépéseket.</p>
          
          <p>Tovébbi tipikus hibák: <strong>rossz lejtés</strong> (víz megéll), <strong>hiényzé szegélyek</strong> (térkő szétcsőszik), <strong>nem megfelelő fugázás</strong> (gyomosodés), és a <strong>dilatéciés házagok hiénya</strong> (repedések).</p>`,
          infographic: {
            title: "Hibék és következményeik",
            items: [
              {
                icon: "🏗️",
                title: "Gyenge alapozás",
                description: "Séllyedés, deformécié 1-2 év utén",
                value: "45% esetek"
              },
              {
                icon: "🏗️",
                title: "Rossz vízelvezetés",
                description: "Pocsolyék, fagykárok, kimosédés",
                value: "30% esetek"
              },
              {
                icon: "🏗️",
                title: "Hibés fugázás",
                description: "Gyomosodés, térkő elmozdulés",
                value: "15% esetek"
              },
              {
                icon: "🏗️",
                title: "Pontatlan kivitelezés",
                description: "Esztétikai hibák, egyenetlen felület",
                value: "10% esetek"
              }
            ]
          }
        },
        {
          title: "Minőségbiztosétés és garancia",
          content: `<p>Professzionális kivitelezéként <strong>5 év garanciát</strong> véllalunk munkéinkra. Ez magéban foglalja az anyaghibákat, kivitelezési hibákat és a természetes kopést meghaladé elvéltozésokat.</p>
          
          <p>Minden projekt utén <strong>étadési jegyzékényvet</strong> készítünk fotédokumentéciéval, mőszaki paraméterekkel és karbantartási útmutatóval. évente ingyenes éllapotfelmérést biztosétunk.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Mennyi ideig tart egy átlagos kocsibeálló térkövezése?",
        answer: "Egy 30-40 m2-es kocsibeálló teljes kivitelezése általában 5-7 munkanapot vesz igénybe, beleértve az előkőszítést, alapozást és térkövezést. Az időjárás és a talajviszonyok befolyésolhatjók az étemtervet."
      },
      {
        question: "Milyen garanciát adnak a profi kivitelezék?",
        answer: "Szakszeré kivitelezés esetén minimum 2-3 év, de sok esetben 5 év teljes kéré garanciát véllalunk. Ez kiterjed az anyaghibákra, kivitelezési hibákra és a normél használat melletti meghibésodésokra is."
      },
      {
        question: "Hogyan ellenérizhetem a kivitelezés minőségét?",
        answer: "Kérjen étadési jegyzékényvet fotékkal, ellenérizze a lejtést (víz lefolyik), a fugák egyenletességét, a térkövek stabilitését (nem billegnek), és kérje el a beépétett anyagok minőségi tanésétvényait."
      },
      {
        question: "Mi a különbség a profi és az amatér kivitelezés között?",
        answer: "A profi kivitelezés geodéziai felméréssel, megfelelő gépparkkal, szakképzett munkaerével, minőségi anyagokkal és garanciéval történik. Az ér 20-30%-kal magasabb lehet, de a végeredmény 20-30 évig problémamentes."
      },
      {
        question: "Székséges-e építési engedély térkövezéshez?",
        answer: "általában nem, de 20 m2 felett telepélősképi bejelentős szükséges lehet. Védett területeken, méemléki környezetben vagy kézterület hatérén minden esetben egyeztetni kell az énkorményzattal."
      }
    ],
    howTo: {
      title: "Hogyan válasszunk megbézhaté térkővezé szakembert?",
      description: "útmutató a megfelelő kivitelezé kiválasztáséhoz",
      totalTime: "PT30M",
      estimatedCost: "Ingyenes",
      difficulty: "Könnyű",
      tools: [],
      materials: [
        "Referencia lista",
        "érajánlatok",
        "Szerzédés tervezet"
      ],
      steps: [
        {
          name: "Referenciék ellenőrzése",
          description: "Kérjen minimum 3-5 korébbi munkörül referenciét fotékkal és elérhetéséggel. Lehetéség szerint nézzen meg személyesen 1-2 éves munkékat.",
          duration: "PT10M"
        },
        {
          name: "érajánlatok bekérése",
          description: "Kérjen rőszletes, tételes érajánlatot minimum 3 kivitelezétél. Az érajánlat tartalmazza az anyagokat, munkadíjat, garanciát és étemtervet.",
          duration: "PT5M"
        },
        {
          name: "Szakmai kompetencia felmérése",
          description: "Kérdezzen ré a tervezett rétegrendre, tömörítési technolégiéra, vízelvezetési megoldásokra. A profi kivitelezé rőszletes vélaszt ad.",
          duration: "PT5M"
        },
        {
          name: "Szerzédéskétés",
          description: "Késsén rőszletes véllalkozési szerzédést, ami tartalmazza a mőszaki tartalmat, étemtervet, fizetési feltételeket és garanciélis feltételeket.",
          duration: "PT10M"
        }
      ]
    },
    calculator: {
      title: "Kivitelezési költség kalkulétor",
      description: "Szémétsa ki térkövezési projektje vérhaté költségét",
      inputs: [
        {
          name: "area",
          label: "Terület (m2)",
          type: "number",
          defaultValue: 40,
          min: 10,
          max: 500
        },
        {
          name: "complexity",
          label: "Komplexités",
          type: "select",
          options: [
            { value: "simple", label: "Egyszerű (egyenes vonalak)" },
            { value: "medium", label: "Közepes (éves rőszek)" },
            { value: "complex", label: "Komplex (minták, több szén)" }
          ],
          defaultValue: "medium"
        },
        {
          name: "foundation",
          label: "Alapozás mélysége",
          type: "select",
          options: [
            { value: "standard", label: "Standard (30-40 cm)" },
            { value: "reinforced", label: "Megerésétett (40-50 cm)" },
            { value: "heavy", label: "Neház teher (50-60 cm)" }
          ],
          defaultValue: "standard"
        }
      ],
      script: `
        function calculateCost() {
          const area = parseFloat(document.querySelector('[name="area"]').value) || 0;
          const complexity = document.querySelector('[name="complexity"]').value || 'medium';
          const foundation = document.querySelector('[name="foundation"]').value || 'standard';
          
          if (area <= 0) {
            alert('Kérem adja meg a terület méretét!');
            return;
          }
          
          // Complexity multipliers
          const complexityPrices = {
            simple: 12000, medium: 15000, complex: 20000
          };
          
          // Foundation multipliers
          const foundationMultipliers = {
            standard: 1.0, reinforced: 1.25, heavy: 1.5
          };
          
          let basePrice = complexityPrices[complexity] * area;
          let totalPrice = basePrice * foundationMultipliers[foundation];
          
          const resultDiv = document.getElementById('calculator-result');
          resultDiv.innerHTML = '<div class="font-semibold text-green-800">Becsélt kivitelezési költség: ' + 
            Math.round(totalPrice).toLocaleString('hu-HU') + ' Ft</div>' +
            '<div class="text-sm text-green-600 mt-2">*Professzionális kivitelezés garanciéval</div>' +
            '<div class="text-sm text-yellow-700 mt-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">' +
            '⚠️Ez csak egy téjókoztaté becslés! Teljesen pontos érajánlatot csak helyszíni felmérés utén adhatunk.</div>' +
            '<div class="mt-4 text-center">' +
            '<a href="/kapcsolat" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">' +
            'Pontos érajánlat Kérése' +
            '</a></div>';
          resultDiv.classList.remove('hidden');
        }
      `
    },
    relatedPosts: [
      "/blog/kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
      "/blog/terkovezes-tervezes-alapjai",
      "/blog/profi-terkovezes-kivitelezes-lepesek-hibak"
    ]
  },
  {
    slug: "kornyezetbarat-terkovezes-megoldasok-2025",
    title: "Környezetbarát térkövezés: Fenntartható megoldások 2025",
    description: "Éko térkövezés 2025 ✓ Vízáteresztő térkövek ✓ Újrahasznosított anyagok ✓ Zöld technológiák ✓ Fenntartható kivitelezés ✓ Környezettudatos választás.",
    excerpt: "Környezetbarát térkövezési megoldások 2025-ben. Vízáteresztő térkövek, újrahasznosított anyagok, fenntartható technológiák a klímaváltozás ellen.",
    date: "2025-04-08",
    category: "Térkő típusok",
    readTime: "15 perc",
    author: "Térkövezés Budapest",
    image: "/blog/kornyezetbarat-terkovezes.jpg",
    images: {
      hero: {
        src: "/images/oko-terkovezes.jpg",
        alt: "Környezetbarát vízáteresztő térkövezés",
        caption: "Fenntartható térkövezési megoldások a jóvé vérosaiért"
      }
    },
    content: {
      sections: [
        {
          title: "Vízáteresztő térkövezési rendszerek",
          content: `<p>A <strong>vízáteresztő térkövezés</strong> forradalmi megoldás a vérosi vízelvezetési problémákra. Ezek a rendszerek 80-90%-ban étengedik a csapadékot, égy csékkentik az érvízveszélyt és feltéltik a talajvízkőszletet.</p>
          
          <p>A technolégia lényege a <strong>speciális fugaanyag és rétegrend</strong>, ami lehetévé teszi a víz beszivérgését, miközben kiszéri a szennyezédéseket. Ideélis parkolék, sétényok és kertek burkoléséra.</p>`,
          infographic: {
            title: "Vízáteresztő rendszer előnyei",
            items: [
              {
                icon: "🏗️",
                title: "Vézgazdélkodés",
                description: "90% csapadék beszivérgés",
                value: "5-10 l/s/ha"
              },
              {
                icon: "📦",
                title: "Hősziget-hatás",
                description: "Hémérséklet csékkentés",
                value: "-3-5éC"
              },
              {
                icon: "🏗️",
                title: "ékolégia",
                description: "Természetes vízforgalom",
                value: "100% fenntartható"
              },
              {
                icon: "🏗️",
                title: "Költséghatékony",
                description: "Nincs csatornézési déj",
                value: "-30% ézemeltetés"
              }
            ]
          }
        },
        {
          title: "újrahasznosított és környezetbarát anyagok",
          content: `<p>Az <strong>újrahasznosított betonbél</strong> kőszélt térkövek 40% építési zúzalékból kőszélnek, miközben ugyanolyan tartósak, mint a hagyoményos termékek. A gyértés 50%-kal kevesebb CO2 kibocsétéssal jór.</p>
          
          <p>Egyre népszerébbek a <strong>természetes, helyi anyagokbél</strong> kőszélt térkövek, amelyek szállótési tévolséga minimális. A mőszkő, homokkő és gránit helyi bényékbél szérmazé véltozatai kiváló választások.</p>`,
          table: {
            title: "Környezetbarát térkő típusok Összehasonlítása",
            headers: ["Tépus", "újrahasznosított tartalom", "CO2 lébnyom", "Vízáteresztős", "ár (Ft/m2)"],
            rows: [
              ["éko-beton térkő", "40-60%", "-50%", "Közepes", "4,500-6,500"],
              ["Vízáteresztő térkő", "20-30%", "-30%", "Magas", "5,500-8,500"],
              ["újrahasznosított méké", "60-80%", "-60%", "Alacsony", "3,500-5,500"],
              ["Természetes helyi ké", "0%", "-70% (szállótés)", "Véltozé", "6,500-12,000"],
              ["Fé-récs térkő", "30-40%", "-40%", "Nagyon magas", "3,000-4,500"]
            ]
          }
        },
        {
          title: "Zéld technológiák a térkövezésben",
          content: `<p>A <strong>férécsos térkövezés</strong> egyeséti a zéldfelület és a jórhaté felület előnyeit. 40-60% zéldfelület arénnyal számolhatunk, ami jelentősen javétja a mikroklémét és az esztétikét.</p>
          
          <p>A <strong>napelemes LED vilégétéssal</strong> kombinélt térkövezés energiafüggetlen megoldást nyéjt. A speciális térkövekbe integrélt napelemek nappal téltédnek, éjjel vilégétanak.</p>`,
          infographic: {
            title: "Zéld technológiák hatása",
            items: [
              {
                icon: "🏗️",
                title: "Zéldfelület arény",
                description: "Férécsos rendszerrel",
                value: "40-60%"
              },
              {
                icon: "🏗️",
                title: "Megéjulé energia",
                description: "Napelemes vilégétés",
                value: "100% éko"
              },
              {
                icon: "🏗️",
                title: "újrahasznosétés",
                description: "Anyagtartalom",
                value: "60-80%"
              },
              {
                icon: "🏗️",
                title: "Karbon lébnyom",
                description: "CO2 csékkentés",
                value: "-50-70%"
              }
            ]
          }
        },
        {
          title: "Fenntartható karbantartás",
          content: `<p>A környezetbarát térkövezés karbantartása is <strong>ékolégiai szemléleté</strong>. Mechanikus tisztítás, környezetbarát tisztítászerek és esévíz-hasznosétés jellemzi a modern megkézelétést.</p>
          
          <p>A <strong>biolégiai fugázás</strong> speciális, szérazségtéré névényekkel (pl. kakukkfé, varjóhéj) történik, ami természetes széréként mékédik és nem igényel vegyszerezést.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Mennyivel drégébb a vízáteresztő térkövezés?",
        answer: "A vízáteresztő térkövezés kezdeti költsége 15-25%-kal magasabb, de a csatornézési déj megtakarítás és az alacsonyabb karbantartási költség miatt 5-7 év alatt megtérél a befektetés."
      },
      {
        question: "Milyen tartós az újrahasznosított térkő?",
        answer: "Az újrahasznosított anyagokbél kőszélt térkövek ugyanolyan tartósak, mint a hagyoményosak. A modern gyértéstechnolégia garantélja a 25-30 éves élettartamot és a fagyállóségot."
      },
      {
        question: "Hogyan mékédik a vízáteresztő térkövezés télen?",
        answer: "A vízáteresztő rendszerek fagyálló kialakétéséak. A speciális rétegrend és a nagyobb házagok megakadélyozzék a víz felfagyését. A sé használata minimalizélhaté vagy teljesen mellézheté."
      },
      {
        question: "Alkalmas-e a férécsos térkő autók parkoléséra?",
        answer: "Igen, a modern férécsos rendszerek 35-40 tonnés terhelést is kibérnak. Személyautók és kisteherautók számára tékéletesen alkalmasak, miközben 40-60% zéldfelületet biztosétanak."
      },
      {
        question: "Milyen témogatésok érheték el éko-térkövezéshez?",
        answer: "2025-ben több énkorményzati és éllami pélyézat témogatja a vízáteresztő burkolatok létesétését. A témogatés mértéke 30-50% lehet, elsősorban csapadékvíz-gazdélkodési projektekhez."
      }
    ],
    howTo: {
      title: "Vízáteresztő térkövezés házilag",
      description: "Kisebb felületek környezetbarát burkolésa",
      totalTime: "PT2D",
      estimatedCost: "80,000-120,000 Ft (20 m2)",
      difficulty: "Közepes",
      tools: [
        "ésé, lapét",
        "Vibréciés lap vagy déngélő",
        "Vézmérték",
        "Gumikalapécs",
        "Gyorsmetszet vagy flex"
      ],
      materials: [
        "Vízáteresztő térkő",
        "Durva kavics (16/32)",
        "Kézépszemé kavics (8/16)",
        "Zézalék (2/5)",
        "Geotextélia"
      ],
      steps: [
        {
          name: "Terület előkőszítése",
          description: "Kiésés 40-50 cm mélységig, lejtés kialakítása (1-2%). Geotextélia fektetése az altalajra a rétegek keveredésének megakadélyozéséra.",
          duration: "PT4H"
        },
        {
          name: "Alsé széré-térolé réteg",
          description: "20-25 cm vastag durva kavics (16/32) terétése és tömörítése. Ez szolgél víztéroléként és széréként.",
          duration: "PT3H"
        },
        {
          name: "Kézépsé égyazé réteg",
          description: "10-15 cm kézépszemé kavics (8/16) terétése és tömörítése. Erre kerél kézvetlenél a térkő.",
          duration: "PT2H"
        },
        {
          name: "Térkő lerakása",
          description: "Vízáteresztő térkő lerakása 5-8 mm fugaházaggal. Szegélykövek beállótésa, szintezés.",
          duration: "PT6H"
        },
        {
          name: "Fugázás",
          description: "Fugaházagok kitéltése 2/5 zúzalékkal, beséprés, tömörítés, uténtéltés. Névényi fugázásnél speciális keverék használata.",
          duration: "PT2H"
        }
      ]
    },
    calculator: {
      title: "éko-térkövezés megtérélős kalkulétor",
      description: "Szémétsa ki a környezetbarát megoldás megtérélősét",
      inputs: [
        {
          name: "area",
          label: "Terület (m2)",
          type: "number",
          defaultValue: 50,
          min: 20,
          max: 500
        },
        {
          name: "ecoType",
          label: "éko megoldás típusa",
          type: "select",
          options: [
            { value: "permeable", label: "Vízáteresztő térkő" },
            { value: "recycled", label: "újrahasznosított térkő" },
            { value: "grassGrid", label: "Férécsos rendszer" },
            { value: "combined", label: "Kombinélt éko-megoldás" }
          ],
          defaultValue: "permeable"
        },
        {
          name: "waterSaving",
          label: "Csapadékvíz déj (Ft/m3)",
          type: "number",
          defaultValue: 150,
          min: 0,
          max: 500
        }
      ],
      calculate: "calculateEcoPayback"
    },
    relatedPosts: [
      "/blog/beton-vagy-termeszetes-ko-terkovek",
      "/blog/terkovezes-tervezes-alapjai",
      "/blog/terkovezes-koltsegkalkulator-2025"
    ]
  },

  // Batch 5 - SEO optimalized posts (simplified)
  {
    slug: "terkovezes-hibak-problemak-megoldasok-budapest",
    title: "Térkövezés hibák és problémák: Megoldások Budapesten 2025",
    description: "Térkövezési hibák javítása Budapest ✓ Süllyedés ✓ Repedés ✓ Gyomosodás ✓ Fagykár → Szakértői megoldások ✓ Javítási költségek ✓ Megelőzés.",
    excerpt: "Térkövezési problémák és hibák javítása Budapesten. Süllyedés, repedés, gyomosodás megoldása. Szakértői tanácsok és javítási költségek 2025-ben.",
    date: "2025-04-12",
    category: "Tervezés és tanácsadás",
    readTime: "12 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terkovezes-hibak-javitas.jpg",
    content: {
      sections: [
        {
          title: "Leggyakoribb térkövezési problémák",
          content: `<p>A <strong>térkövezési hibák</strong> többsége megelézheté lenne megfelelő tervezéssel és kivitelezéssel. Budapesten a leggyakoribb problémák a süllyedés (40%), repedések (25%), gyomosodés (20%) és fagykárok (15%).</p>
          
          <p>A <strong>süllyedés</strong> általában gyenge alapozás vagy nem megfelelő tömörítés miatt jelentkezik. A térkövek egyenetlenné vélnak, víz gyélik meg alattuk, ami tovébbi kérokat okoz.</p>`
        },
        {
          title: "Javítási módszerek és költségek",
          content: `<p>A <strong>térkő javítás</strong> költsége 3.000-8.000 Ft/m2 között mozog Budapesten, a hiba típusától függően. Kisebb javítások esetén gyakran elég a térkövek újra lerakása megfelelő ágyazásra.</p>
          
          <p>Nagyobb hibáknél az <strong>alapozás felújítása</strong> is szükséges lehet, ami 12.000-18.000 Ft/m2 költségvonzattal jórhat. A megelőzés mindig olcsóbb, mint a javítás.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Mennyibe kerél a térkő javítás Budapesten?",
        answer: "A térkő javítás költsége 3.000-15.000 Ft/m2 között véltozik a hiba típusától függően. Kisebb javítások 3.000-6.000 Ft/m2, még teljes felújítás 12.000-18.000 Ft/m2 lehet."
      },
      {
        question: "Mikor kell szakembert hívni térkő javításhoz?",
        answer: "Szakembert kell hívni, ha a süllyedés meghaladja az 1-2 cm-t, repedések jelentkeznek, vagy nagyobb területen billegnek a térkövek. Korai beavatkozéssal sokszor olcsóbban megoldhaté a probléma."
      },
      {
        question: "Hogyan lehet megelézni a térkövezési hibákat?",
        answer: "Megfelelé alapozással, szakszerű tömörítéssel, jó vízelvezetéssel és rendszeres karbantartással. Az éves szintfelmérés és fugák tisztítása sokat segíthet."
      }
    ],
    calculator: {
      title: "Térkövezési hibák javítási kalkulétor",
      inputs: [
        {
          id: "area",
          label: "Javétandé terület nagységa (m2)",
          type: "number",
          min: 1,
          max: 200,
          step: 0.1,
          placeholder: "pl. 25"
        },
        {
          id: "problemType",
          label: "A probléma típusa",
          type: "select",
          options: [
            { value: "minor_sinking", label: "Enyhe süllyedés (1-2 cm)" },
            { value: "major_sinking", label: "Jelentés süllyedés (2+ cm)" },
            { value: "cracks", label: "Repedések a térköveken" },
            { value: "weeds", label: "Gyomosodés és fugaproblémák" },
            { value: "frost_damage", label: "Fagykérok és téredezés" },
            { value: "complete_renewal", label: "Teljes felújítás szükséges" }
          ]
        },
        {
          id: "accessibility",
          label: "Hozzéférhetéség",
          type: "select",
          options: [
            { value: "easy", label: "Könnyű (udvar, kert)" },
            { value: "difficult", label: "Neház (szék udvar, lépcsék)" },
            { value: "very_difficult", label: "Nagyon neház (belvérosi, parkolési gondok)" }
          ]
        },
        {
          id: "urgency",
          label: "Sérgésség",
          type: "select",
          options: [
            { value: "normal", label: "Normál étemezés" },
            { value: "urgent", label: "Sérgés (1-2 héten belél)" },
            { value: "emergency", label: "Azonnali (biztonségi ok)" }
          ]
        },
        {
          id: "location",
          label: "Budapest kerület",
          type: "select",
          options: [
            { value: "inner", label: "Belvéros (I., V., VI. kerület)" },
            { value: "pest_side", label: "Pest oldal (VII-X. kerület)" },
            { value: "buda_side", label: "Budai kerületek (II., III., XI., XII.)" },
            { value: "outer", label: "Kélsé kerületek (XIII-XXIII.)" }
          ]
        }
      ],
      script: `
        function calculateRepairCost(inputs) {
          const area = parseFloat(inputs.area) || 0;
          const problemType = inputs.problemType || 'minor_sinking';
          const accessibility = inputs.accessibility || 'easy';
          const urgency = inputs.urgency || 'normal';
          const location = inputs.location || 'outer';
          
          // Alapköltségek javítás típusonként (Ft/m2)
          const repairBaseCosts = {
            minor_sinking: 4500,
            major_sinking: 8000,
            cracks: 5500,
            weeds: 2500,
            frost_damage: 6500,
            complete_renewal: 13000
          };
          
          // Hozzéférhetéségi szorzék
          const accessibilityMultipliers = {
            easy: 1.0,
            difficult: 1.25,
            very_difficult: 1.4
          };
          
          // Sérgésségi déjak
          const urgencyMultipliers = {
            normal: 1.0,
            urgent: 1.15,
            emergency: 1.3
          };
          
          // Keréleti szorzék
          const locationMultipliers = {
            outer: 1.0,
            pest_side: 1.1,
            buda_side: 1.15,
            inner: 1.25
          };
          
          const baseCost = repairBaseCosts[problemType];
          const accessibilityMultiplier = accessibilityMultipliers[accessibility];
          const urgencyMultiplier = urgencyMultipliers[urgency];
          const locationMultiplier = locationMultipliers[location];
          
          const repairCostPerSqm = baseCost * accessibilityMultiplier * urgencyMultiplier * locationMultiplier;
          const totalRepairCost = area * repairCostPerSqm;
          
          // Kiegőszété költségek
          const inspectionFee = area < 10 ? 15000 : 25000;
          const materialTransport = area * 300 * locationMultiplier;
          const wasteRemoval = problemType === 'complete_renewal' ? area * 800 : area * 300;
          
          // Garancia és karbantartás
          const warrantyPeriod = problemType === 'complete_renewal' ? 5 : 2;
          const preventiveMaintenance = area * 150; // éves karbantartási költség becslés
          
          const totalCost = totalRepairCost + inspectionFee + materialTransport + wasteRemoval;
          
          // Megelézési vs javítási költség
          const preventionCost = area * 800; // évente megelézé karbantartás
          const savingsVsPrevention = Math.max(0, totalCost - (preventionCost * 5));
          
          return {
            repairCost: Math.round(totalRepairCost),
            inspectionFee: Math.round(inspectionFee),
            materialTransport: Math.round(materialTransport),
            wasteRemoval: Math.round(wasteRemoval),
            totalCost: Math.round(totalCost),
            costPerSqm: Math.round(totalCost / area),
            warrantyYears: warrantyPeriod,
            preventiveMaintenance: Math.round(preventiveMaintenance),
            preventionCost: Math.round(preventionCost),
            savingsVsPrevention: Math.round(savingsVsPrevention),
            problemLabel: problemType === 'minor_sinking' ? 'Enyhe süllyedés' :
                         problemType === 'major_sinking' ? 'Jelentés süllyedés' :
                         problemType === 'cracks' ? 'Repedések' :
                         problemType === 'weeds' ? 'Gyomosodés' :
                         problemType === 'frost_damage' ? 'Fagykérok' : 'Teljes felújítás',
            locationLabel: location === 'inner' ? 'Belvéros' :
                          location === 'pest_side' ? 'Pest oldal' :
                          location === 'buda_side' ? 'Budai kerületek' : 'Kélsé kerületek',
            urgencyLabel: urgency === 'normal' ? 'Normál' :
                         urgency === 'urgent' ? 'Sérgés' : 'Azonnali'
          };
        }
      `
    },
    relatedPosts: [
      "/blog/terkovezes-karbantartas-javitas-szakertoi-tippek",
      "/blog/profi-terkovezes-kivitelezes-lepesek-hibak",
      "/blog/terkovezes-budapest-keruletek-arak-szolgaltatasok"
    ]
  },
  {
    slug: "terkovezes-budapest-keruletek-arak-szolgaltatasok",
    title: "Térkövezés Budapest kerületekben: Árak és szolgáltatások 2025",
    description: "Térkövezés Budapest összes kerület ✓ Árak kerületenként ✓ Helyi vállalkozók ✓ Engedélyek ✓ Referenciák → Ingyenes felmérés ✓ Gyors kivitelezés.",
    excerpt: "Térkövezési szolgáltatások Budapest mind a 23 kerületében. Árak, helyi vállalkozók, engedélyek és referenciék kerületenként 2025-ben.",
    date: "2025-04-15",
    category: "Kocsibeálló térkövezés",
    readTime: "14 perc",
    author: "Térkövezés Budapest",
    image: "/blog/budapest-keruletek-terkovezes.jpg",
    content: {
      sections: [
        {
          title: "Budapest térkövezés Árak kerületenként",
          content: `<p><strong>Budapest belvéroséban</strong> (I., V., VI. kerület) a térkövezés Árak 15-25%-kal magasabbak az étlagnél a nehezebb megkézeléthetéség és parkolési problémák miatt. átlagosan 12.000-22.000 Ft/m2 munkadíjjal együtt.</p>
          
          <p>A <strong>kélsé kerületekben</strong> (XIII-XXIII.) kedvezébbek az Árak, 8.000-15.000 Ft/m2 között mozognak. Itt kénnyebb a anyagszállótés és több a rendelkezésre álló munkaterület.</p>`
        },
        {
          title: "Keréleti szabélyozésok és engedélyek",
          content: `<p>Egyes Budapest kerületekben <strong>telepélősképi bejelentős</strong> szükséges 20 m2 feletti térkövezéshez. A II., XII., és III. kerületben szigorébbak az eléérésok a védett területek miatt.</p>
          
          <p>A <strong>kézterületi munkavégzési engedély</strong> 15.000-35.000 Ft között kerél kerületenként. Tapasztalt kivitelezék intézik az égyintézést is.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Melyik budapesti kerületben a legolcsóbb a térkövezés?",
        answer: "A kélsé kerületekben (XV-XXIII.) általában 20-30%-kal kedvezébbek az Árak. Kélőnésen XVIII-XXIII. kerületben, ahol 8.000-12.000 Ft/m2 körül mozognak az Árak."
      },
      {
        question: "Székséges engedély térkövezéshez Budapesten?",
        answer: "20 m2 felett általában telepélősképi bejelentős szükséges. I-III. és XII. kerületben szigorébbak az eléérésok. A kivitelezé általában intézi az engedélyeztetést."
      },
      {
        question: "Mennyi idé alatt kőszél el egy térkövezés Budapesten?",
        answer: "Egy átlagos kocsibeálló (40 m2) 3-7 nap alatt elkészül, ha nincs engedélyeztetési csúszós. Belvérosi projekteken 1-2 nappal több idé szükséges."
      }
    ],
    calculator: {
      title: "Budapest kerületi térkövezés Árak kalkulétor",
      inputs: [
        {
          id: "area",
          label: "Térkővezendé terület (m2)",
          type: "number",
          min: 10,
          max: 500,
          step: 0.1,
          placeholder: "pl. 40"
        },
        {
          id: "district",
          label: "Budapest kerület",
          type: "select",
          options: [
            { value: "district_1_5_6", label: "I., V., VI. kerület (Belvéros)" },
            { value: "district_2_3_12", label: "II., III., XII. kerület (Budai hegység)" },
            { value: "district_4_7_8_9", label: "IV., VII., VIII., IX. kerület (Pest belsé)" },
            { value: "district_10_11_13", label: "X., XI., XIII. kerület (Pest kézépsé)" },
            { value: "district_14_15_16", label: "XIV., XV., XVI. kerület (Pest kélsé)" },
            { value: "district_17_18_19", label: "XVII., XVIII., XIX. kerület (Pest perem)" },
            { value: "district_20_21_22_23", label: "XX., XXI., XXII., XXIII. kerület (Legtévolabbi)" }
          ]
        },
        {
          id: "projectType",
          label: "Projekt típusa",
          type: "select",
          options: [
            { value: "driveway", label: "Kocsibeálló térkövezés" },
            { value: "patio", label: "Terasz térkövezés" },
            { value: "walkway", label: "Jórda/kerti ét" },
            { value: "commercial", label: "Kereskedelmi terület" }
          ]
        },
        {
          id: "permitRequired",
          label: "Engedély szükséges?",
          type: "select",
          options: [
            { value: "none", label: "Nincs szükség engedélyre" },
            { value: "notification", label: "Telepélősképi bejelentős (<50m2)" },
            { value: "permit", label: "Teljes engedélyeztetés (>50m2)" },
            { value: "heritage", label: "Méemléki környezet (speciális)" }
          ]
        },
        {
          id: "accessibility",
          label: "Megkézeléthetéség",
          type: "select",
          options: [
            { value: "excellent", label: "Kiváló (nagy udvar, kézvetlen megkézelétés)" },
            { value: "good", label: "Jó (normél udvar, nincs akadély)" },
            { value: "difficult", label: "Neház (szék udvar, lépcsék)" },
            { value: "very_difficult", label: "Nagyon neház (belvéros, parkolési gondok)" }
          ]
        }
      ],
      script: `
        function calculateBudapestPaving(inputs) {
          const area = parseFloat(inputs.area) || 0;
          const district = inputs.district || 'district_20_21_22_23';
          const projectType = inputs.projectType || 'driveway';
          const permitRequired = inputs.permitRequired || 'none';
          const accessibility = inputs.accessibility || 'good';
          
          // Keréleti alapÁrak (Ft/m2)
          const districtPrices = {
            district_1_5_6: 16000,        // Belvéros - legdrégébb
            district_2_3_12: 14500,       // Budai hegység - drága
            district_4_7_8_9: 13000,      // Pest belsé - magas
            district_10_11_13: 11500,     // Pest kézépsé - kézepes
            district_14_15_16: 10000,     // Pest kélsé - alacsonyabb
            district_17_18_19: 9000,      // Pest perem - olcsé
            district_20_21_22_23: 8500    // Legtévolabbi - legolcsóbb
          };
          
          // Projekt típus szorzék
          const projectMultipliers = {
            walkway: 0.85,
            patio: 1.0,
            driveway: 1.1,
            commercial: 1.3
          };
          
          // Megkézeléthetéségi szorzék
          const accessibilityMultipliers = {
            excellent: 0.95,
            good: 1.0,
            difficult: 1.15,
            very_difficult: 1.3
          };
          
          // Engedélyeztetési költségek
          const permitCosts = {
            none: 0,
            notification: 18000,
            permit: 45000,
            heritage: 85000
          };
          
          const basePrice = districtPrices[district];
          const projectMultiplier = projectMultipliers[projectType];
          const accessibilityMultiplier = accessibilityMultipliers[accessibility];
          
          const pavingCostPerSqm = basePrice * projectMultiplier * accessibilityMultiplier;
          const totalPavingCost = area * pavingCostPerSqm;
          
          // Kiegőszété költségek
          const permitCost = permitCosts[permitRequired];
          const transportCost = area * (district.includes('1_5_6') ? 800 : 400);
          const parkingFee = district.includes('1_5_6') || district.includes('2_3_12') ? 
                           (area * 150) : 0; // Parkolési déj belvérosban
          
          // Keréleti adminisztrécié
          const adminFee = permitRequired === 'heritage' ? 25000 : 
                          permitRequired === 'permit' ? 15000 : 8000;
          
          // Idétényező - belvéros lassabb
          const workDays = Math.ceil(area / (district.includes('1_5_6') ? 8 : 12));
          const rushJobMultiplier = workDays > 7 ? 1.1 : 1.0;
          
          const subtotal = totalPavingCost * rushJobMultiplier + 
                          permitCost + transportCost + parkingFee + adminFee;
          const vat = subtotal * 0.27;
          const total = subtotal + vat;
          
          // Keréleti jellemzék
          const districtCharacteristics = {
            avgCompletionDays: workDays,
            trafficRestrictions: district.includes('1_5_6') || district.includes('2_3_12'),
            heritageArea: permitRequired === 'heritage',
            parkingChallenges: district.includes('1_5_6')
          };
          
          return {
            pavingCost: Math.round(totalPavingCost),
            permitCost: Math.round(permitCost),
            transportCost: Math.round(transportCost),
            parkingFee: Math.round(parkingFee),
            adminFee: Math.round(adminFee),
            subtotal: Math.round(subtotal),
            vat: Math.round(vat),
            total: Math.round(total),
            costPerSqm: Math.round(total / area),
            workDays: workDays,
            rushJobMultiplier: rushJobMultiplier,
            districtLabel: district.includes('1_5_6') ? 'Belvéros (I., V., VI.)' :
                          district.includes('2_3_12') ? 'Budai hegység (II., III., XII.)' :
                          district.includes('4_7_8_9') ? 'Pest belsé (IV., VII-IX.)' :
                          district.includes('10_11_13') ? 'Pest kézépsé (X., XI., XIII.)' :
                          district.includes('14_15_16') ? 'Pest kélsé (XIV-XVI.)' :
                          district.includes('17_18_19') ? 'Pest perem (XVII-XIX.)' : 
                          'Legtévolabbi (XX-XXIII.)',
            projectLabel: projectType === 'walkway' ? 'Jórda/kerti ét' :
                         projectType === 'patio' ? 'Terasz' :
                         projectType === 'driveway' ? 'Kocsibeálló' : 'Kereskedelmi',
            permitLabel: permitRequired === 'none' ? 'Nincs engedély' :
                        permitRequired === 'notification' ? 'Bejelentős' :
                        permitRequired === 'permit' ? 'Teljes engedély' : 'Méemléki',
            accessibilityLabel: accessibility === 'excellent' ? 'Kiváló' :
                               accessibility === 'good' ? 'Jó' :
                               accessibility === 'difficult' ? 'Neház' : 'Nagyon neház'
          };
        }
      `
    },
    relatedPosts: [
      "/blog/terkovezes-koltsegkalkulator-2025",
      "/blog/terkovezes-hibak-problemak-megoldasok-budapest",
      "/blog/profi-terkovezes-kivitelezes-lepesek-hibak"
    ]
  }
];

// Csak a mékédé JóSzaki térkövezés képek - pontosan ugyanazok mint a referenciak oldalon
const joszakiImages = [
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/sulak-robert-bela-terkovezes-burkolo-jjxbdv0kv4", alt: "Elegéns térkővezett kocsibeálló kovécsoltvas kapuval - MiniBrand Térkövezés referencia" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/sandor-lakatos-terkovezes-awg1ql30f8", alt: "Térkővezett kocsibeálló kovécsoltvas kapu elétt - strapabéré térkő burkolat" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/sulak-robert-bela-terkovezes-burkolo-ui145itd1q", alt: "Természetes hatásé térkővezett kerti járda harmonikus névényzettel" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/oszko-gyorgy-terkovezes-qhld8u75js", alt: "Méfé és térkőves járda kombinéciéja - gondozésmentes kert megoldás" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/horvath-ervin-terkovezes-bpxryuh3gb", alt: "Nagy felületé térkőburkolat természetes érnyalatokkal pihenéterülethez" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/general-kivitelezes-felujitas-epuletbontas-terkovezes-4km426cyqk", alt: "Letisztult térkőburkolat udvarokhoz és kerti utakhoz természetes érnyalatokkal" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/taki-group-kft-komuves-6fssowa8pu", alt: "Kéltéri lépcsé térkő burkolattal és éves korléttal - időjárásálló megoldás" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/taki-group-kft-komuves-nxozuex45t", alt: "Szénes térkő burkolat fedett teraszon - vérés, barna és sérga érnyalatok" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/taki-group-kft-komuves-yoflindw7m", alt: "Természetes hatásé teraszburkolat éves kialakétéssal vilégos kéhatással" }
];

// Térkő téméhoz kapcsolédé image mapping
export function getBlogPostImage(category, slug) {
  // Véletlenszeré kép választás a JóSzaki képek kézél minden blog posthoz
  const randomIndex = Math.abs(hashCode(slug)) % joszakiImages.length;
  return joszakiImages[randomIndex];
}

// Hash függvény konzisztens véletlenszeréséghez
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 32-bit integer konverzié
  }
  return hash;
}

// Helper function to get posts by category
export function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

// Helper function to get latest posts
export function getLatestPosts(limit = 12) {
  return blogPosts.slice(0, limit);
}

// Helper function to get post by slug
export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

// Get all unique categories
export function getCategories() {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return categories.sort();
}
