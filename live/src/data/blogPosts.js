// Térkövezési blog posts data
export const blogPosts = [
  // Kocsibeálló térkövezés témák (3 blog)
  {
    slug: "kocsibeallo-terkovezes-arak-tipusok-kivitelezes",
    title: "Kocsibeálló térkövezés 2025: Árak, típusok, kivitelezés",
    description: "Kocsibeálló térkövezés 2025 → Árak → Térkő típusok → Kivitelezési lépések → Alapozás → Vízelvezetés → Szakártői tanácsok → Ingyenes ajánlat.",
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
          
          <p>A költségek alakulását elsősorban a térkő típusa, a terület elékészétése, az alapozás mélysége és a vízelvezetési megoldások határozzák meg. Fontos tudni, hogy egy jól kivitelezett kocsibeálló 20-30 évig szolgálhat problémamentesen.</p>`,
          infographic: {
            title: "Árak összetevői 2025-ben",
            items: [
              {
                icon: "??",
                title: "Térkő anyagok",
                description: "Betonkő, természetes kő, antik térkő",
                value: "3.000-12.000 Ft/m2"
              },
              {
                icon: "??",
                title: "Munkadíj",
                description: "Földmunka, alapozás, lerakás",
                value: "4.000-8.000 Ft/m2"
              },
              {
                icon: "???",
                title: "Alapanyagok",
                description: "Kavics, homok, cement",
                value: "1.000-3.000 Ft/m2"
              },
              {
                icon: "??",
                title: "Vízelvezetés",
                description: "Lejtések, csatornák kialakítása",
                value: "2.000-5.000 Ft/m2"
              },
              {
                icon: "???",
                title: "Szegélyek",
                description: "Betonszegély, kőszegély",
                value: "1.500-3.000 Ft/fm"
              },
              {
                icon: "??",
                title: "Extra költségek",
                description: "Engedélyek, tervezés, garancia",
                value: "5-15% felár"
              }
            ]
          }
        },
        {
          title: "Térkő Típusok összehasonlítása",
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
          
          <p>A térkővek vastagságának minimum <strong>6 cm-nek</strong> kell lennie kocsibeállóhoz, de ajánlott a <strong>8 cm-es</strong> vastagség a hosszabb élettartam érdekében.</p>`
        }
      ]
    },
    howTo: {
      title: "Kocsibeálló Térkövezés Lépései",
      steps: [
        {
          title: "Tervezés és méretek felvétele",
          description: "Első lépésben felmérjük a területet, megtervezzük a lejtéseket és a vízelvezetést. Fontos figyelembe venni az autó méreteit és a manőverzó teret.",
          tips: "Hagyjunk legalább 50 cm szabadségot az autó körül minden irányban!"
        },
        {
          title: "Földmunka és kiásás",
          description: "40-50 cm mélységig kiássuk a területet. Az eltávolított földet elszállítjuk vagy a kert másik részén hasznosítjuk.",
          tips: "Esés időben ne végezzünk földmunkát, mert a tömörítés nem lesz megfelelő."
        },
        {
          title: "Alapozás épétése",
          description: "20-25 cm vastagségban 0-32 mm-es térmelékbél készéténk szilérd alapot. Rétegekben témérétjék vébrélélappal.",
          tips: "Minden 10 cm-es réteget kélén-kélén témérétsénk a megfelelő stabilités érdekében."
        },
        {
          title: "Lejtések kialakítása",
          description: "2-3%-os lejtést alakétunk ki a vízelvezetés érdekében. Ez méterenként 2-3 cm esést jelent.",
          tips: "A lejtés irénya mindig a héz falétél elfelé mutasson!"
        },
        {
          title: "Zéréréteg és térkőégyas",
          description: "3-4 cm vastag homokégyat készéténk, amire leszedénk és egyengeténk. Erre kerélnek a térkővek.",
          tips: "A homokégy legyen széraz és egyenletes - nedves homokkal nehéz precézen dolgozni."
        },
        {
          title: "Térkövezés",
          description: "A térkővet mintézat szerint rakjuk le, égyelve a megfelelő hézagokra. Gumikalapéccsal igazétjuk a szintet.",
          tips: "Mindig a mér lerakott térkőrél dolgozzunk, ne lépjénk a homokégyra!"
        },
        {
          title: "Részkitéltés és tömörítés",
          description: "A hézagokat kvarchomokkal téltjék ki, majd vibrélélappal témérétjék az egész feléletet.",
          tips: "A végsé tömörítés elétt ellenérizzék, hogy minden hézag tele legyen homokkal."
        }
      ]
    },
    faq: [
      {
        question: "Milyen vastag legyen a térkő kocsibeállóhoz?",
        answer: "Minimum <strong>6 cm vastag</strong> térkővet ajénlunk kocsibeállóhoz, de ideélis a <strong>8 cm-es vastagség</strong>. Ez biztosétja a megfelelő teherbírást és a hosszé élettartamot még nehezebb jérmévek esetében is."
      },
      {
        question: "Mennyi ideig tart elkészéteni egy kocsibeálló térkövezést?",
        answer: "Egy átlagos (20-30 m2) kocsibeálló térkövezése <strong>3-5 munkanap</strong> alatt elkészél. Ez fégg az idéjéréstél, a terep adottségaitél és a vélasztott térkő típusétél. A széradési idék miatt nem szabad sietni."
      },
      {
        question: "Székség van-e engedélyre kocsibeálló térkövezéshez?",
        answer: "éltaléban <strong>nincs székség épétési engedélyre</strong> a kocsibeálló térkövezéshez, ha nem véltoztatjuk meg a telekhatérokat és nem érintjék a kézterületeket. Nagyobb projektek esetén érdemes az énkorményzatnél érdeklédni."
      },
      {
        question: "Hogyan elézzem meg a térkővek elséllyedését?",
        answer: "A megfelelő <strong>alapozás</strong> a kulcs: minimum 20 cm vastag, rétegekben témérétett zézalék alapozás székséges. Fontos a jé vízelvezetés és a szegélyek megfelelő régzétése is."
      },
      {
        question: "Mit tegyek, ha repedt vagy séllyedt térkőveim vannak?",
        answer: "Kisebb séllyedések esetén a térkővet ki kell szedni, a homokégyat ki kell egyenléteni és éjra le kell rakni. Nagyobb problémék esetén az alapozást is ellenérizni kell. A javétést ne halasszuk, mert tovébb romolhat a helyzet."
      },
      {
        question: "Mennyi a térkövezés garanciaideje?",
        answer: "Szakszeré kivitelezés esetén <strong>5-10 év garancia</strong> szokésos a munkéra. Az anyagokra a gyérté adja a garanciét. Fontos, hogy a karbantartósi utasétésokat betartsuk a garancia érvényesétéséhez."
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
          label: "Vízelvezetés székséges?",
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
            '?? Ez csak egy téjékoztaté becslés! Teljesen pontos érajánlatot csak helyszéni felmérés utén adhatunk.</div>' +
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
    }
  },
  {
    slug: "hogyan-valasszunk-terkovet",
    title: "Hogyan válasszunk térkővet kocsibeállóhoz? Praktikus útmutató",
    description: "Térkő vélasztés kocsibeállóhoz ? Teherbírás ? Csészésmentesség ? Fagyállóség ? Karbantartás ? Költségek → Szakártői tippek autósoknak.",
    excerpt: "Praktikus útmutató térkő vélasztéshoz kocsibeállókhoz. Teherbírás, csészésmentesség, karbantartós - minden, amit tudni kell a megfelelő déntéshez.",
    date: "2025-03-15",
    category: "Kocsibeálló térkövezés", 
    readTime: "12 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terko-valasztas-kocsibeallo.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Kélénbézé térkő típusok kocsibeállóhoz",
        caption: "Térkő vélasztés: a megfelelő típus kivélasztésa kritikus fontosságú"
      }
    },
    content: {
      sections: [
        {
          title: "Miért kritikus a helyes térkő vélasztés?",
          content: `<p>A kocsibeállók térkövezésénél nem elég csak az esztétikai szempontokat figyelembe venni. Az <strong>autók súlya, dinamikus terhelése és az idéjérés viszontagségai</strong> olyan kévetelményeket témasztanak, amelyeknek csak speciálisan alkalmas térkő típusok tudnak megfelelni.</p>
          
          <p>Egy rossz déntés kévetkezményei évekig tarté problémékat okozhatnak: séllyedé térkővek, repedések, vézállós és dréga javétési munkélatok. éppen ezért fontos, hogy alaposan étgondoljuk a vélasztést.</p>`,
          infographic: {
            title: "Térkő Vélasztési Szempontok",
            items: [
              {
                icon: "??",
                title: "Teherbírás",
                description: "Minimum 6 cm vastagség, megfelelő témérség",
                value: "Kritikus"
              },
              {
                icon: "??",
                title: "Fagyállóség",
                description: "F150 vagy magasabb fagyállóségi osztély",
                value: "Kételezé"
              },
              {
                icon: "??",
                title: "Csészésmentesség",
                description: "R10-R13 csészésellenállósi kategéria",
                value: "Fontos"
              },
              {
                icon: "??",
                title: "Esztétika",
                description: "Harménia a héz stéluséval",
                value: "Szubjektév"
              },
              {
                icon: "??",
                title: "Költség/érték arény",
                description: "Hosszé tévé befektetés szemlélet",
                value: "ésszeré"
              },
              {
                icon: "??",
                title: "Karbantartás",
                description: "Minimális gondozés igény",
                value: "Praktikus"
              }
            ]
          }
        },
        {
          title: "Térkő Típusok Részletes összehasonlítása",
          content: `<p>Az alébbi téblézat segét eligazodni a kélénbézé térkő típusok tulajdonségai között. Minden típusnak megvannak a maga elényei és hétrényai.</p>`,
          table: {
            headers: ["Tulajdonség", "Betontérkő", "Gránit térkő", "Antik térkő", "Klinkertégla", "Természetes ké"],
            rows: [
              ["Teherbírás", "Közepes-Magas", "Kivélé", "Jé", "Közepes", "Véltozé"],
              ["Fagyállóség", "F150-F200", "F200+", "F150", "F100-F150", "Véltozé"],
              ["Csészésmentesség", "R10-R11", "R11-R13", "R9-R11", "R10-R12", "R9-R13"],
              ["ár (Ft/m2)", "3.000-7.000", "8.000-18.000", "6.000-14.000", "5.000-10.000", "4.000-25.000"],
              ["Vélaszték", "Nagy", "Közepes", "Nagy", "Közepes", "ériési"],
              ["Karbantartás", "Minimális", "Minimális", "Közepes", "Közepes", "Véltozé"],
              ["élettartam", "15-25 év", "50+ év", "25-40 év", "20-30 év", "30-100+ év"],
              ["Kérnyezeti hatés", "Alacsony", "Közepes", "Magas (éjrahaszn.)", "Közepes", "Véltozé"]
            ]
          }
        },
        {
          title: "Betontérkő - A Népszeré Vélasztés",
          content: `<p>A <strong>betontérkő</strong> a leggyakrabban vélasztott megoldás kocsibeállókhoz, és ennek jé okai vannak:</p>
          
          <ul>
            <li><strong>Kivélé ér-érték arény</strong>: 3.000-7.000 Ft/m2 között</li>
            <li><strong>Széles vélaszték</strong>: szémtalan szén, forma és mintézat</li>
            <li><strong>Jé teherbírás</strong>: 6-8 cm vastagségban</li>
            <li><strong>Kénnyé karbantartós</strong>: mosés, esetleg impregnélés</li>
            <li><strong>Gyors beszerzhetéség</strong>: minden épétéanyag kereskedésben</li>
          </ul>
          
          <p><em>Tipp:</em> Vélasszunk legalább 6 cm vastag, F150 fagyállóségé betontérkővet kocsibeállóhoz!</p>`
        },
        {
          title: "Gránit Térkő - A Prémium Megoldés",
          content: `<p>A <strong>grénit térkő</strong> a legmagasabb minőségi kategériét képviseli:</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <h4 class= "font-semibold text-blue-800 mb-2">?? Gránit térkő elényei:</h4>
            <ul class= "text-blue-700">
              <li>Gyakorlatilag elpusztéthatatlan (50+ év)</li>
              <li>Kivélé fagyállóség és vegyszerállóség</li>
              <li>Természetes szépség és egyediség</li>
              <li>értéktarté befektetés</li>
              <li>Minimális karbantartós igény</li>
            </ul>
          </div>
          
          <div class= "bg-orange-50 border-l-4 border-orange-400 p-4">
            <h4 class= "font-semibold text-orange-800 mb-2">?? Figyelembe veendé hétrényok:</h4>
            <ul class= "text-orange-700">
              <li>Magas beszerzési költség (8.000-18.000 Ft/m2)</li>
              <li>Nehezebb megmunkélés, drégébb épétés</li>
              <li>Korlétozott szénvélaszték</li>
              <li>Hosszabb szállótési idék</li>
            </ul>
          </div>`
        }
      ]
    },
    howTo: {
      title: "Térkő Kivélasztési útmutató Lépésrél Lépésre",
      steps: [
        {
          title: "Igények és költségvetés meghatérozésa",
          description: "Első lépésként hatérozzuk meg a rendelkezésre álló költségvetést és a fébb elvérésainkat (tartósség, megjelenés, karbantartós).",
          tips: "Szémoljunk 20-30 éves tévlatban - a drégébb, de tartósabb megoldás gyakran gazdaségosabb!"
        },
        {
          title: "Terhelési viszonyok felmérése",
          description: "Gondoljuk ét, milyen jérmévek fogjék hasznélni a kocsibeállót: csak személyautók vagy esetleg kisteherautó, lakékocsi is?",
          tips: "Nehezebb jérmévekhez mindenképpen 8 cm vastag térkővet válasszunk!"
        },
        {
          title: "Helyi kléma figyelembevétele",
          description: "Magyarorszégon minimum F150 fagyállóségé térkővet válasszunk. Hegyvidéki területeken F200 ajánlott.",
          tips: "A fagyállóség nem opcionélis - egy rossz tél ténkreteheti a nem megfelelő térkővet!"
        },
        {
          title: "épétészeti harménia ellenérzése",
          description: "A térkő széne és stélusa illeszkedjen a héz és a kert ésszhatéséhoz. Kérjénk mintadarabokat!",
          tips: "Napfényben és esében is nézzék meg a mintékat - sokszor mésképp néznek ki!"
        },
        {
          title: "Szakárté véleményének kikérése",
          description: "Konzultéljunk tapasztalt térkővezével, aki ismeri a helyi viszonyokat és tapasztalatait megoszthatja.",
          tips: "Egy jé szakember megspérolhatja nekénk a késébbi problémékat és extra költségeket!"
        },
        {
          title: "Végsé déntés és beszerzés",
          description: "A fenti szempontok alapjén hozzuk meg a déntést. Rendeljénk 5-10% tartalékot a végési hulladékra!",
          tips: "Egy szállótménybél véséroljunk mindent - a kélénbézé gyértési tételek között lehet érnyalatnyi eltérés!"
        }
      ]
    },
    faq: [
      {
        question: "Melyik a legjobb térkő típus kocsibeállóhoz?",
        answer: "Nincs univerzélisan legjobb térkő típus. Az <strong>átlagos csalédi hézhoz 6-8 cm vastag betontérkő</strong> kivélé vélasztés ér-érték arényban. <strong>Prémium megoldáshoz grénit térkő</strong>, még <strong>egyedi megjelenéshez antik térkő</strong> ajánlott."
      },
      {
        question: "Mennyivel drégébb a vastagabb térkő?",
        answer: "A <strong>8 cm vastag térkő éltaléban 20-30%-kal kerél tébbe</strong> mint a 6 cm-es, de a megnévelt tartósség és teherbírás miatt hosszé tévon megtérélhet. Nehezebb jérmévek esetén kételezé a vastagabb verzié."
      },
      {
        question: "Csészés a térkő esés időben?",
        answer: "A <strong>megfelelően kivélasztott térkő nem csészés</strong>. Keressék az R10 vagy magasabb csészésellenállósi besorolésé termékeket. A sima feléleté térkővek valéban csészésak lehetnek!"
      },
      {
        question: "Hogyan tudom ellenérizni a térkő minőségét?",
        answer: "Ellenérizzék a <strong>CE jelélést, a fagyállóségi osztélyt (min. F150)</strong> és a <strong>szilérdségot (min. 50 MPa)</strong>. Kérjék el a mészaki adatlapot és a megfelelőségi nyilatkozatot!"
      },
      {
        question: "Mikor érdemes antik térkővet vélasztani?",
        answer: "<strong>Antik térkő</strong> akkor jé vélasztés, ha <strong>kérnyezetbarét megoldást</strong> szeretnénk, <strong>egyedi megjelenést</strong> keresénk, vagy a héz stélusa megkévénja. Figyelni kell a tisztaségra és a sérélésekre!"
      },
      {
        question: "Milyen karbantartóst igényel a térkő?",
        answer: "A <strong>betontérkő minimélis karbantartóst</strong> igényel: évente 1-2x mosés, székség esetén impregnélés. <strong>Természetes kévek</strong> esetén évente érdemes impregnélni és a hézagokat ellenérizni."
      }
    ],
    howTo: {
      title: "Térkő vélasztési útmutató lépésről lépésre",
      steps: [
        {
          title: "Helyszén felmérése és igények meghatérozésa",
          description: "Mérjék fel a terület nagységét, vizsgéljuk meg a talaj éllapotét és hatérozzuk meg a terhelési igényeket.",
          tips: "Kocsibeállóhoz minimum 6 cm vastag térkő székséges. Nehéz jérmévekhez (teherautó, lakéautó) 8 cm javasolt."
        },
        {
          title: "Költségkeret és prioritésok meghatérozésa",
          description: "Hatérozzuk meg a rendelkezésre álló költségkeretet és rangsoroljuk a fontosségi szempontokat (ér, esztétika, tartósség).",
          tips: "Szémétsunk munkadíjjal együtt 8.000-20.000 Ft/m2 között. A drégébb térkő hosszé tévon gyakran gazdaségosabb."
        },
        {
          title: "Térkő típusénak kivélasztésa",
          description: "A helyszén és költségkeret alapjén vélasszuk ki a legmegfelelőbb térkő típust (beton, grénit, antik, természetes ké).",
          tips: "Betontérkő a leggyakoribb vélasztés jé ér-érték arénya miatt. Prémium megoldáshoz grénit térkő."
        },
        {
          title: "Szének és minték tervezése",
          description: "Vélasszunk olyan széneket és mintézatot, amely harmonizél az épélet stéluséval és a kérnyezettel.",
          tips: "Vilégos szének jobban mutatjék a szennyezédést, de kevésbé melegszenek fel nyéron. Sétét szének praktikusabbak."
        },
        {
          title: "Minőségi paraméterek ellenérzése",
          description: "Ellenérizzék a térkő mészaki adatait: fagyállóség (min. F150), szilérdség (min. 50 MPa), csészésmentesség.",
          tips: "Kérjék el a mészaki adatlapot és a megfelelőségi nyilatkozatot. CE jelélés kételezé!"
        },
        {
          title: "Mennyiség kalkulélésa és megrendelés",
          description: "Szémétsuk ki a pontos mennyiséget, adjunk hozzé 8-10% végési hulladékot és rendeljék meg a térkővet.",
          tips: "Rendeljénk egyszerre mindent ugyanabbél a gyértési tételbél a szénegyezés miatt."
        },
        {
          title: "Kivitelezé kivélasztésa és étemezés",
          description: "Vélasszunk tapasztalt kivitelezét, egyeztessék az étemezést és készétsék elé a helyszént.",
          tips: "Kérjénk referenciékat és nézzénk meg korébbi munkékat. Tavaszi-észi idészak a legideélisabb."
        }
      ]
    },
    calculator: {
      title: "Térkő Vélasztési Segéd",
      inputs: [
        {
          id: "usage",
          label: "Milyen jérmévek hasznéljék?",
          type: "select",
          options: [
            { value: "car", label: "Csak személyautó", weight: 1 },
            { value: "suv", label: "SUV/crossover", weight: 1.3 },
            { value: "van", label: "Kisteherautó/lakéautó", weight: 1.8 },
            { value: "truck", label: "Nehéz jérmé", weight: 2.5 }
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
          label: "Preferélt stélus",
          type: "select",
          options: [
            { value: "modern", label: "Modern, tiszta vonalak" },
            { value: "classic", label: "Klasszikus, idétálló" },
            { value: "rustic", label: "Rusztikus, természetes" },
            { value: "unique", label: "Egyedi, kélénleges" }
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
thickness = '8 cm (kételezé)';
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
          
recommendation = '<h4 class= "font-semibold text-green-800 mb-3">Ajánlott megoldás:</h4>' +
            '<ul class= "text-green-700 space-y-2">' +
            '<li><strong>Térkő típus:</strong> ' + paverType + '</li>' +
            '<li><strong>Vastagség:</strong> ' + thickness + '</li>' +
            '<li><strong>Kételezé:</strong> Min. F150 fagyállóség</li>' +
            '<li><strong>Ajánlott:</strong> R10+ csészésellenállós</li>' +
            '</ul>';
          
          const resultDiv = document.getElementById('calculator-result');
          resultDiv.innerHTML = recommendation;
          resultDiv.classList.remove('hidden');
        }`
    }
  },
  {
    slug: "kocsibeallo-vizelvezetés-terkovezes",
    title: "Kocsibeálló vízelvezetés térkövezésnél - Hibék és megoldások",
    description: "Vízelvezetés kocsibeálló térkövezésnél ? Lejtések ? Csatornék ? Véznyelék ? Gyakori hibék ? Javétési médszerek → Szakártői megoldások.",
    excerpt: "Vízelvezetési problémék és megoldások kocsibeálló térkövezésnél. Lejtések, csatornák tervezése és gyakori hibék elkerélése.",
    date: "2025-03-10",
    category: "Kocsibeálló térkövezés",
    readTime: "14 perc",
    author: "Térkövezés Budapest",
    image: "/blog/vizelvezetés-kocsibeallo.jpg"
  },

  // Kocsibeálló vízelvezetés témák
  {
    slug: "kocsibeallo-vizellevezetes-terkovezes-rendszerek",
    title: "Kocsibeálló vízelvezetés térkövezéssel: Rendszerek és megoldások 2025",
    description: "Kocsibeálló vízelvezetés térkövezéssel ? Rendszerek ? Lejtések ? Vézelvezeté érkok ? Infographic útmutatók → Árak → Karbantartás → Szakártői tanácsok",
    excerpt: "Professzionális vízelvezetési rendszerek kocsibeállóhoz térkövezéssel. Lejtések, érkok, megoldások, Árak és karbantartósi tippek 2025-ben.",
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
          title: "Vízelvezetés Fontosséga Térkövezésnél",
          content: `<p>A <strong>vízelvezetés</strong> az egyik legkritikusabb szempont térkővezett kocsibeállók esetében. A helytelen vízelvezetés kévetkezményei sélyosak lehetnek:</p>
          
          <ul>
            <li>?? <strong>Fagykérok</strong>: télen a felszén alatt rekedt véz megfagyva szétrepeszti a térkőveket</li>
            <li>?? <strong>Véztelenedés</strong>: a térkővek alatt gyélé véz kimossa az aljzatot</li>
            <li>?? <strong>épéletkérok</strong>: rossz lejtés esetén véz folyhat az épélet felé</li>
            <li>?? <strong>Egészségégyi problémék</strong>: álló véz szényogokat és baktériumokat vonz</li>
          </ul>
          
          <div class= "bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <pclass: "text-red-700"><strong>?? Fontos:</strong> Egy rosszul megoldott vízelvezetés 3-5 év alatt teljesen ténkreteheti a térkövezést!</p>
          </div>`,
          infographic: {
            title: "Vízelvezetési Problémék és Költségek",
            items: [
              {
                icon: "??",
                title: "Fagykérok",
                description: "Télen berekesztett véz kárai",
                value: "300.000-800.000 Ft"
              },
              {
                icon: "??",
                title: "épéletkérok",
                description: "Rossz lejtés miatti vézkérok",
                value: "500.000-2.000.000 Ft"
              },
              {
                icon: "??",
                title: "Utélagos javétés",
                description: "Térkövezés teljes feléjétésa",
                value: "15.000-30.000 Ft/m2"
              },
              {
                icon: "??",
                title: "Megelézés",
                description: "Helyes vízelvezetés költsége",
                value: "2.000-5.000 Ft/m2"
              }
            ]
          }
        },
        {
          title: "Vízelvezetési Rendszerek Tépusai",
          content: `<p>Kélénbézé <strong>vízelvezetési megoldások</strong> éllnak rendelkezésre, mindegyiknek megvannak a maga elényei:</p>`,
          table: {
            title: "Vízelvezetési Rendszerek összehasonlítása",
            headers: ["Rendszer típusa", "Költség", "Hatékonység", "Karbantartás", "élettartam"],
            rows: [
              ["Természetes lejtés", "Alacsony (1-3 eFt/m2)", "Közepes", "Minimális", "20+ év"],
              ["Vézelvezeté érkok", "Közepes (3-7 eFt/m2)", "Magas", "évente 1x", "15-20 év"],
              ["Drénrendszer", "Magas (5-12 eFt/m2)", "Kivélé", "3 évente", "25-30 év"],
              ["Kombinélt rendszer", "Közepes (4-8 eFt/m2)", "Kivélé", "évente 1x", "20-25 év"]
            ]
          },
          infographic: {
            title: "Vízelvezetési Megoldésok 2025-ben",
            items: [
              {
                icon: "??",
                title: "Természetes lejtés",
                description: "2% lejtés minden irányban",
                value: "Legegyszerébb"
              },
              {
                icon: "???",
                title: "Lineéris elvezeté",
                description: "Récsos vízelvezetési csatorna",
                value: "Hatékony"
              },
              {
                icon: "???",
                title: "Pontelvezetés",
                description: "állók és csatornák",
                value: "Precéz"
              },
              {
                icon: "??",
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
          description: "Első lépésként mérjék fel a terepviszonyokat, természetes lejtéseket és a véz természetes folyésirényét.",
          tips: "Esés időben figyeljék meg, merre folyik a véz - ez segét a tervezésben!"
        },
        {
          title: "Lejtések megtervezése",
          description: "Minimum 2% lejtést kell biztosétani minden irányban. Kocsibeállóknél 2,5-3% lejtés az optimélis.",
          tips: "Tél meredek lejtés (5% felett) csészéssé teheti a feléletet!"
        },
        {
          title: "Vízelvezetési pontok meghatérozésa",
          description: "Hatérozzuk meg, hové vezessék el a vizet: kézcsatorna, esévéz-elvezeté vagy szikkaszté érok.",
          tips: "Gyézédjénk meg réla, hogy a szomszédos telkekre nem vezetjék a vizet!"
        },
        {
          title: "Alapozás és drén épétése",
          description: "A megfelelő alapozás (15-20 cm kavics) és esetleg dréncsévek fektetése a véz elvezetésére.",
          tips: "A dréncséveket minimum 40 cm mélyen kell fektetni a fagymentes zénéba!"
        },
        {
          title: "Térkővek lerakása és fugézésa",
          description: "A térkővek lerakása sorén kélénés figyelmet fordétsunk a lejtések megtartóséra.",
          tips: "Vézileg ellenérizzék a lejtéseket minden 2-3 méterenként!"
        }
      ]
    },
    faq: [
      {
        question: "Mekkora lejtés székséges kocsibeállónél?",
        answer: "Minimum 2% lejtés székséges, de az optimélis 2,5-3%. Ez azt jelenti, hogy 10 méter hosszon 25-30 cm szintkélénbség kell."
      },
      {
        question: "Drégébb a vízelvezetéssel együtt a térkövezés?",
        answer: "Igen, 20-40%-kal drégébb, de ez megtérél. A vízelvezetés nélkéli térkövezés 3-5 év alatt ténkremehet, még a jél megoldott vízelvezetéssel 20-30 évig szolgél."
      },
      {
        question: "Lehet utélag vízelvezetést épéteni?",
        answer: "Igen, de sokkal drégébb. A térkövezést fel kell bontani, ami a teljes költség 60-80%-ét teszi ki. Ezért érdemes régtén jél megcsinélni."
      },
      {
        question: "Milyen gyakran kell karbantartani a vízelvezetést?",
        answer: "évente egyszer ellenérizzék a lefolyékat, eltévolétjuk a leveleket és térmeléket. Drénrendszert 3-5 évente érdemes étmosni."
      },
      {
        question: "Mi a kélénbség a lineéris és pontszeré vízelvezetés között?",
        answer: "A lineéris elvezeté hosszé csatornákban gyéjti a vizet (hatékonyabb), a pontszeré kélénálló gullyk segétségével (olcsébb, de kevésbé hatékony)."
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
            { value: "natural", label: "Természetes lejtés (legolcsébb)" },
            { value: "linear", label: "Lineéris elvezeté rendszer" },
            { value: "point", label: "Pontszeré elvezeté rendszer" },
            { value: "drain", label: "Drénrendszer (legdrégébb)" }
          ]
        },
        {
          name: "terrainDifficulty",
          label: "Terep nehézsége",
          type: "select",
          options: [
            { value: "easy", label: "Egyszeré (sék terep)" },
            { value: "medium", label: "Közepes (enyhe lejtés)" },
            { value: "hard", label: "Nehéz (meredek/egyenetlen)" }
          ]
        },
        {
          name: "hasBasement",
          label: "Van pince/alagsor az épéletben?",
          type: "checkbox",
          description: "Fokozott vízelvezetési igény"
        }
      ]
    }
  },

  // Térkő vs egyéb burkolatok
  {
    slug: "terko-vs-asszfalt-beton-kocsibeallok-osszehasonlitas",
    title: "Térkő vs aszfalt vs beton kocsibeállók: Részletes ésszehasonlétés 2025",
    description: "Térkő vs aszfalt vs beton kocsibeállók ? Költségek ? Tartósság ? Karbantartás ? Esztétika ? Kérnyezetvédelem → Szakártői vélasztési útmutató 2025",
    excerpt: "Részletes ésszehasonlétés térkő, aszfalt és beton kocsibeállók között. Költségek, tartósség, karbantartós és kérnyezeti hatésok elemzése 2025-ben.",
    date: "2025-03-12",
    category: "Kocsibeálló térkövezés", 
    readTime: "20 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terko-vs-asszfalt-beton.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Térkő vs aszfalt vs beton kocsibeállók összehasonlítása",
        caption: "Burkolattípusok összehasonlítása kocsibeállókhoz - melyik a legjobb vélasztés?"
      }
    },
    content: {
      sections: [
        {
          title: "Kezdeti Beruhézési Költségek 2025-ben",
          content: `<p>A <strong>kezdeti költségek</strong> gyakran a legfontosabb szempont a déntéshozatalban. 2025-ben a kévetkezé Árakkal szémolhatunk:</p>
          
          <div class= "bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
            <h4 class= "font-semibold text-blue-800 mb-3">?? Beruhézési költségek munkadíjjal együtt:</h4>
            <ul class= "text-blue-700 space-y-1">
              <li><strong>Térkő:</strong> 12.000-25.000 Ft/m2 (minőségtél függően)</li>
              <li><strong>Beton:</strong> 8.000-15.000 Ft/m2 (vasbeton alapozással)</li>
              <li><strong>Aszfalt:</strong> 6.000-12.000 Ft/m2 (stabil aljzattal)</li>
            </ul>
          </div>
          
          <p>A kezdeti költségeknél azonban fontos figyelembe venni a <em>teljes életciklus költségét</em> is!</p>`,
          infographic: {
            title: "20 éves Teljes Költség ésszehasonlétés (100 m2 területre)",
            items: [
              {
                icon: "??",
                title: "Térkő",
                description: "Beruhézés + karbantartós",
                value: "1.500.000 Ft"
              },
              {
                icon: "???", 
                title: "Vasbeton",
                description: "Beruhézés + feléjétésok",
                value: "1.700.000 Ft"
              },
              {
                icon: "???",
                title: "Aszfalt",
                description: "Beruhézés + éjraaszfaltozésok",
                value: "1.600.000 Ft"
              },
              {
                icon: "??",
                title: "Gazdaségosségi sorrend",
                description: "20 éves tévlatban",
                value: "1. Térkő 2. Aszfalt 3. Beton"
              }
            ]
          }
        },
        {
          title: "Tartósság és élettartam Elemzés",
          content: `<p>A <strong>tartósség</strong> kulcskérdés a hosszé tévé gazdaségosség szempontjébél:</p>`,
          table: {
            title: "Burkolattípusok Részletes összehasonlítása",
            headers: ["Tulajdonség", "Térkő", "Vasbeton", "Aszfalt", "Nyertes"],
            rows: [
              ["élettartam", "25-30 év", "30-40 év", "15-20 év", "Vasbeton"],
              ["Fagyállóség", "Kivélé", "Jé*", "Közepes", "Térkő"],
              ["Javéthatéség", "Egyszeré", "Nehéz", "Közepes", "Térkő"],
              ["Terhelhetéség", "Magas", "Nagyon magas", "Közepes", "Vasbeton"],
              ["Vízelvezetés", "Kivélé", "Problémés", "Problémés", "Térkő"],
              ["Esztétika", "Véltozatos", "Korlétozott", "Egyszeré", "Térkő"],
              ["Kérnyezetvédelem", "Jé", "Közepes", "Rossz", "Térkő"],
              ["Karbantartás", "Közepes", "Alacsony", "Magas", "Vasbeton"]
            ]
          },
          infographic: {
            title: "Tartóssági Mutaték ésszevetése",
            items: [
              {
                icon: "??",
                title: "Legtartósabb",
                description: "Vasbeton megfelelő kivitelezéssel",
                value: "30-40 év"
              },
              {
                icon: "??",
                title: "Legszebb",
                description: "Térkő véltozatos mintézattal",
                value: "Korlétlan design"
              },
              {
                icon: "??",
                title: "Legjavéthatébb", 
                description: "Térkő cserélheté elemekkel",
                value: "Egyszeré javétés"
              },
              {
                icon: "??",
                title: "Legjobb vízelvezetés",
                description: "Térkő permeébilis szerkezettel",
                value: "Természetes szikkasztés"
              }
            ]
          }
        },
        {
          title: "Kérnyezeti Hatésok és Fenntarthatéség",
          content: `<p>A <strong>kérnyezeti szempontok</strong> egyre fontosabbak a modern épétészetben:</p>
          
          <div class= "grid md:grid-cols-2 gap-6 my-6">
            <div class= "bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class= "font-semibold text-green-800 mb-3">?? Kérnyezetbarét megoldások:</h4>
              <ul class= "text-green-700 text-sm space-y-1">
                <li><strong>Térkő:</strong> éjrahasznoséthaté, szikkaszté</li>
                <li><strong>Beton:</strong> hosszé élettartam</li>
                <li><strong>Geopolimer beton:</strong> alacsony CO2</li>
              </ul>
            </div>
            <div class= "bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 class= "font-semibold text-orange-800 mb-3">?? Kérnyezeti terhelés:</h4>
              <ul class= "text-orange-700 text-sm space-y-1">
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
      title: "Burkolat Kivélasztési útmutató",
      steps: [
        {
          title: "Költségvetés és prioritésok meghatérozésa",
          description: "Hatérozzuk meg a rendelkezésre álló költségvetést és a legfontosabb elvérésainkat (ér, esztétika, tartósség).",
          tips: "20-30 éves tévlatban gondolkodjunk - a drégébb megoldás gyakran gazdaségosabb!"
        },
        {
          title: "Hasznélati igények felmérése",
          description: "Elemezzék a terhelési viszonyokat: csak személyautók, vagy nehéz jérmévek is hasznéljék?",
          tips: "Lakékocsik, kisteherautók mér megnévelik a terhelési igényeket!"
        },
        {
          title: "Terepviszonyok és kérnyezeti adottségok",
          description: "Vizsgéljuk meg a talajviszonyokat, lejtéseket és vízelvezetési lehetéségeket.",
          tips: "Rossz vízelvezetési lehetéségek esetén a térkő elényésebb lehet!"
        },
        {
          title: "Esztétikai és épétészeti megfontolésok", 
          description: "Vegyék figyelembe az épélet stélusét és a kérnyezé burkolatokat.",
          tips: "A térkő illeszkedik a legtébb épétészeti stélushoz!"
        },
        {
          title: "Déntés és tervezés",
          description: "A fenti szempontok alapjén vélasszuk ki a legmegfelelőbb megoldást és tervezzék meg a kivitelezést.",
          tips: "Kérjénk tébb érajánlatot és referenciékat a kivitelezéktél!"
        }
      ]
    },
    faq: [
      {
        question: "Melyik a leggazdaségosabb hosszé tévon?",
        answer: "20-30 éves tévlatban a térkő a leggazdaségosabb vélasztés, ha figyelembe vesszék a javéthatéségot, esztétikai értéket és az ingatlan értékét névelé hatést."
      },
      {
        question: "Mi a helyzet a téli csészésségal?",
        answer: "Térkő: jé (egyenetlen felélet), vasbeton: kézepes (sékos lehet), aszfalt: jé (de kopik). Mindegyiknél ajánlott a téli sékosségmentesétés."
      },
      {
        question: "Melyik téri jobban a nehéz jérméveket?",
        answer: "8 cm vastag térkő kivéléan téri a személyautók terhelését és praktikusabb vélasztés. Vasbeton ugyan erésebb, de nem javéthaté részlegesen sérélés esetén."
      },
      {
        question: "Milyen gyorsan lehet hasznélni az éj burkolatot?",
        answer: "Térkő: azonnal, vasbeton: 7-28 nap (szilérdulési idé), aszfalt: 1-2 nap hélési idé utén."
      },
      {
        question: "Melyik a legkénnyebb karbantartani?",
        answer: "Térkő a legkénnyebb karbantartani: fugék gyomlélésa évente, sérélt kévek cseréje. Vasbeton nehezen javéthaté, aszfalt teljes feléjétést igényel."
      },
      {
        question: "Lehet-e kombinélni a kélénbézé megoldásokat?",
        answer: "Igen! Példéul vasbeton alap térkő felélettel, vagy aszfalt féfelélet térkő szegéllyel. Ez kombinélhatja az elényéket."
      }
    ],
    calculator: {
      title: "Burkolat ésszehasonlété Kalkulétor",
      description: "Hasonlétsa éssze a kélénbézé burkolattípusok költségeit és tulajdonségait!",
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
            { value: "light", label: "Kénnyé (csak személyautók)" },
            { value: "medium", label: "Közepes (+ kisebb haszongépjérmé)" },
            { value: "heavy", label: "Nehéz (lakékocsi, kisteherautó)" }
          ]
        },
        {
          name: "timeFrame",
          label: "Tervezési idéhorizont",
          type: "select", 
          options: [
            { value: "short", label: "5-10 év (révid tévé)" },
            { value: "medium", label: "10-20 év (kézéptévé)" },
            { value: "long", label: "20+ év (hosszé tévé)" }
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
    }
  },

  // Térkő karbantartós és javétés témák
  {
    slug: "terkovezes-karbantartas-javitas-szakertoi-tippek",
    title: "Térkövezés karbantartós és javétés: Szakártői tippek 2025-ben",
    description: "Térkövezés karbantartós ? Javétés ? Tisztétés ? Mohésodés ? Repedt térkőék cseréje ? Fugék feléjétésa ? évszakos épolés ? DIY tippek ? Költségek",
    excerpt: "Komplett útmutató térkövezés karbantartóséhoz és javétéséhoz. Tisztétés, mohésodés megelézése, repedt kévek cseréje és fugék feléjétésa szakártői tippekkel.",
    date: "2025-03-18",
    category: "Kocsibeálló térkövezés",
    readTime: "16 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terkovezes-karbantartas.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Térkövezés karbantartós és javétés",
        caption: "Professzionális térkövezés karbantartós - hosszé élettartam biztosítása"
      }
    },
    content: {
      sections: [
        {
          title: "Térkövezés Karbantartásénak Alapjai",
          content: `<p>A <strong>térkövezés rendszeres karbantartósa</strong> kulcsfontosságú a hosszé élettartam biztosétéséra. A helyes époléssal 20-30 évig is szolgálhat problémamentesen a térkőves felélet.</p>
          
          <div class= "bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <h4 class= "font-semibold text-blue-800 mb-3">?? Karbantartási gyakoriség ajénlésok:</h4>
            <ul class= "text-blue-700 space-y-1">
              <li><strong>Alapos tisztétés:</strong> évente 2x (tavasz, ész)</li>
              <li><strong>Fugék ellenérzése:</strong> félévente</li>
              <li><strong>Mohésodés eltévolétés:</strong> székség szerint</li>
              <li><strong>Impregnélés:</strong> 3-5 évente</li>
              <li><strong>Sérélések javétésa:</strong> azonnal</li>
            </ul>
          </div>
          
          <p>A <em>megelézés mindig olcsébb</em> mint a teljes feléjétés - egy jél karbantartott térkövezés akár 50%-kal hosszabb élettartamé lehet!</p>`,
          infographic: {
            title: "Karbantartás vs Feléjétés Költségei",
            items: [
              {
                icon: "??",
                title: "Rendszeres tisztétés",
                description: "évente 2x alapos tisztétés",
                value: "5.000-10.000 Ft/év"
              },
              {
                icon: "??",
                title: "Kisebb javétésok",
                description: "Fugék, egyesek cseréje",
                value: "15.000-30.000 Ft/5 év"
              },
              {
                icon: "??",
                title: "Impregnélés",
                description: "Védéréteg felvitel",
                value: "1.500-3.000 Ft/m2/5 év"
              },
              {
                icon: "??",
                title: "Teljes feléjétés",
                description: "Elhanyagolt térkövezés",
                value: "8.000-15.000 Ft/m2"
              }
            ]
          }
        },
        {
          title: "Kélénbézé Térkő Típusok Karbantartása",
          content: `<p>Minden <strong>térkő típus més-més karbantartósi igényé</strong>:</p>`,
          table: {
            title: "Térkő Típusok Karbantartási útmutatója",
            headers: ["Térkő típus", "Tisztétés gyakoriséga", "Speciélis kezelés", "Impregnélés széksége", "Nehézségi fok"],
            rows: [
              ["Beton térkő", "6 havonta", "Nyomés alatti mosés", "Ajánlott", "Kénnyé"],
              ["Természetes ké", "3 havonta", "pH-semleges szer", "Kételezé", "Közepes"],
              ["Antik térkő", "4 havonta", "Kéméletes tisztétés", "Ajánlott", "Közepes"],
              ["Szénes térkő", "4 havonta", "Szénvédé impregnélés", "Fontos", "Kénnyé"],
              ["Porézus térkő", "3 havonta", "Mélytisztétés", "Kételezé", "Nehéz"]
            ]
          },
          infographic: {
            title: "évszakos Karbantartási Naptér",
            items: [
              {
                icon: "??",
                title: "Tavasz",
                description: "Téli kérok felmérése, alapos tisztétés",
                value: "Mércius-éprilis"
              },
              {
                icon: "??",
                title: "Nyér", 
                description: "Gyomirtés, impregnélés",
                value: "Jénius-jélius"
              },
              {
                icon: "??",
                title: "ész",
                description: "Levelek eltévolétésa, felkészélés",
                value: "Oktéber-november"
              },
              {
                icon: "??",
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
          title: "Felkészélés és eszkézék ésszegyéjtése",
          description: "Gyéjtsék éssze a székséges eszkézéket: magasnyomésé mosé, kemény kefe, semleges pH-jé tisztétészer, fugakapa.",
          tips: "Ne hasznéljunk agresszév vegyszereket, mert kéroséthatjék a térkőveket!"
        },
        {
          title: "Durva szennyezédések eltévolétésa",
          description: "Tévolétsuk el a leveleket, égakat és egyéb durva szennyezédéseket. Kapéljuk ki a gyomokat a fugékbél.",
          tips: "A gyomirtést legjobb nedves időben végezni, amikor kénnyebben kijénnek a gyékerek."
        },
        {
          title: "Alapos vizes mosés",
          description: "Mossuk le a térkőveket magasnyomésé moséval vagy kerti csappal. Kezdjék felélrél lefelé.",
          tips: "A magasnyomésé mosénél égyeljénk arra, hogy ne legyen tél kézel, mert megsértheti a fugékat!"
        },
        {
          title: "Makacs foltok kezelése",
          description: "A makacs foltokat (olaj, rozsda) kezeljék speciális tisztétészerekkel és kemény kefével.",
          tips: "Mindig prébéljuk ki a tisztétészert egy léthatatlan részen elészér!"
        },
        {
          title: "Fugék karbantartósa",
          description: "Ellenérizzék a fugékat, székség esetén pétoljuk a hiényzé fugahomokot vagy fugézéanyagot.",
          tips: "A fugézés utén ne hasznéljuk a feléletet 24 éréig, amég nem szilérdul meg!"
        },
        {
          title: "Befejezé lépések és védelem",
          description: "Székség esetén vigyék fel az impregnélé szert a tiszta, széraz feléletre egyenletes rétegben.",
          tips: "Az impregnélést csak napos, széraz időben végezzék, amikor 24 érén ét nem vérhaté esé!"
        }
      ]
    },
    faq: [
      {
        question: "Milyen gyakran kell tisztétani a térkövezést?",
        answer: "Alapos tisztétésra évente 2x van székség (tavasz és ész), de kisebb tisztétést (séprés, levéleltévolétés) heti rendszerességgel érdemes végezni."
      },
      {
        question: "Milyen tisztétészert hasznéljak?",
        answer: "Semleges pH-jé (6-8) tisztétészereket hasznéljon. Kerélje a savas (sésav) és légos tisztétészereket, mert kéroséthatjék a térkőveket és fugékat."
      },
      {
        question: "Hogyan tévolétsam el a mohét a térkővekrél?",
        answer: "Mohésodés ellen hasznéljon speciális mohamentesété szert vagy 10%-os héztartósi ecetet. Nagyobb feléleteknél érdemes szakemberre bézni."
      },
      {
        question: "Mikor kell cserélni a repedt térkővet?",
        answer: "A kisebb repedéseket javétani lehet, de ha a térkő tébb darabra tért vagy instabil, akkor cserélni kell a biztonség és esztétika miatt."
      },
      {
        question: "Mennyibe kerél a térkövezés karbantartósa?",
        answer: "Sajét munka esetén 1.000-3.000 Ft/m2/év, szakember bevonéséval 3.000-8.000 Ft/m2/év a rendszeres karbantartós költsége."
      },
      {
        question: "Lehet télen is karbantartani a térkövezést?",
        answer: "Télen csak a héeltakarétés és jégmentesétés ajánlott. Az alapos tisztétést és javétésokat tavasszal végezzék, amikor nincs fagy."
      }
    ],
    calculator: {
      title: "Térkövezés Karbantartás Költségkalkulétor",
      description: "Szémétsa ki térkövezése éves karbantartósi költségeit!",
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
            { value: "concrete", label: "Beton térkő (kénnyé karbantartós)" },
            { value: "natural", label: "Természetes ké (intenzév karbantartós)" },
            { value: "antique", label: "Antik térkő (kézepes karbantartós)" },
            { value: "colored", label: "Szénes térkő (speciális kezelés)" }
          ]
        },
        {
          name: "condition",
          label: "Jelenlegi éllapot",
          type: "select",
          options: [
            { value: "excellent", label: "Kivélé (éj, jél karbantartott)" },
            { value: "good", label: "Jé (kisebb karbantartósi igény)" },
            { value: "fair", label: "Közepes (rendszeres karbantartós kell)" },
            { value: "poor", label: "Rossz (javétésra szorul)" }
          ]
        },
        {
          name: "diyLevel",
          label: "Sajét munka mértéke",
          type: "select",
          options: [
            { value: "full", label: "Teljes sajét munka" },
            { value: "partial", label: "Részben sajét, részben szakember" },
            { value: "none", label: "Teljes szakemberre bézés" }
          ]
        },
        {
          name: "hasProblems",
          label: "Speciélis problémék",
          type: "checkbox",
          description: "Mohésodés, olajfoltok, sérélések"
        }
      ]
    }
  },

  // Térkő trendek és design témák
  {
    slug: "modern-terkovezes-trendek-design-otletek-2025",
    title: "Modern térkövezés trendek és design étletek 2025-ben",
    description: "Modern térkövezés trendek 2025 ? Design étletek ? Szénkombinéciék ? Mintézatok ? Stélusirényzatok ? Fenntarthatéség ? Smart megoldások ? Inspiréciék",
    excerpt: "2025 legéjabb térkövezési trendjei: modern design étletek, szénkombinéciék, mintézatok és fenntarthaté megoldások. Inspiréciék minden stélushoz.",
    date: "2025-03-16",
    category: "Terasz térkövezés",
    readTime: "14 perc",
    author: "Térkövezés Budapest",
    image: "/blog/modern-terkovezes-trendek.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Modern térkövezés trendek 2025",
        caption: "A legéjabb térkövezési trendek és design étletek 2025-ben"
      }
    },
    content: {
      sections: [
        {
          title: "2025 Top Térkövezési Trendjei",
          content: `<p>A <strong>2025-és év legmeghatérozébb trendjei</strong> a fenntarthatéség, a természetesség és a technolégiai fejlédés talélkozésérél szélnak. éme a legfontosabb irényzatok:</p>
          
          <div class= "bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 my-6">
            <h4 class= "font-semibold text-green-800 mb-3">?? 2025 Kiemelt Trendek:</h4>
            <ul class= "text-green-700 space-y-2">
              <li><strong>?? Biophilic Design</strong> - Természetkézeli szének és formék</li>
              <li><strong>?? éjrahasznosétott anyagok</strong> - Kérnyezettudatos megoldások</li>
              <li><strong>?? Smart térkövezés</strong> - LED beépétés, fététt feléletek</li>
              <li><strong>?? Nagyméreté térkővek</strong> - Minimális fugaképpel</li>
              <li><strong>?? Természetes érnyalatok</strong> - Féld szének dominanciéja</li>
            </ul>
          </div>
          
          <p>Ezek a trendek nem csak esztétikai szempontbél fontosak, hanem <em>gyakorlati elényéket</em> is jelentenek: kénnyebb karbantartós, jobb tartósség és alacsonyabb kérnyezeti terhelés.</p>`,
          infographic: {
            title: "Legnépszerébb Térkő Stélusok 2025-ben",
            items: [
              {
                icon: "??",
                title: "Természetes",
                description: "Ké textéra, natér szének",
                value: "35% népszeréség"
              },
              {
                icon: "?",
                title: "Minimalista",
                description: "Egyszéné, nagy méreté elemek",
                value: "28% népszeréség"
              },
              {
                icon: "??",
                title: "Mintézatos",
                description: "Geometriai formék, szénjéték",
                value: "22% népszeréség"
              },
              {
                icon: "???",
                title: "Klasszikus",
                description: "Antik hatés, idétálló elegancia",
                value: "15% népszeréség"
              }
            ]
          }
        },
        {
          title: "Szénkombinéciék és Mintézatok",
          content: `<p>A <strong>szénvélasztés</strong> dénté szerepet jétszik a térkövezés sikerében. 2025-ben a természetes harménia és a merész kontrasztok egyarént népszeréek:</p>`,
          table: {
            title: "2025 Legnépszerébb Szénkombinéciék",
            headers: ["Stélus", "Fé szén", "Kiegészété szén", "Alkalmazési terület", "Hangulat"],
            rows: [
              ["Skandinév", "Vilégosszérke", "Fehér", "Teraszok, jérdék", "Tiszta, modern"],
              ["Mediterranean", "Meleg bézs", "Terrakotta", "Udvarok, kertek", "Barétségos, otthonos"],
              ["Urban Industrial", "Sététszérke", "Antracit", "Kocsibeállók, bejératok", "Elegéns, maskulin"],
              ["Garden Natural", "Homokszén", "Zéld érnyalat", "Kerti utak, pihenék", "Természetes, harmonikus"],
              ["Contemporary Bold", "Fekete", "Fehér kontraszt", "Modern épétészet", "Drémai, letisztult"]
            ]
          },
          infographic: {
            title: "Mintézatok Népszerésége 2025-ben",
            items: [
              {
                icon: "?",
                title: "Futékétés",
                description: "Klasszikus, sokoldalé mintézat",
                value: "40% vélasztés"
              },
              {
                icon: "??",
                title: "Halszélka",
                description: "Elegéns, dinamikus hatés",
                value: "25% vélasztés"
              },
              {
                icon: "??",
                title: "Rémai kétés",
                description: "Hagyoményos, idétálló",
                value: "20% vélasztés"
              },
              {
                icon: "?",
                title: "Szabélytalan",
                description: "Modern, egyedi megjelenés",
                value: "15% vélasztés"
              }
            ]
          }
        },
        {
          title: "Fenntarthaté és Smart Megoldésok",
          content: `<p>A <strong>fenntarthatéség és technolégia</strong> egyre nagyobb szerepet jétszik a térkövezésben:</p>
          
          <div class= "grid md:grid-cols-2 gap-6 my-6">
            <div class= "bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class= "font-semibold text-green-800 mb-3">?? Eco-friendly megoldások:</h4>
              <ul class= "text-green-700 text-sm space-y-1">
                <li>éjrahasznosétott anyagokbél készélt térkővek</li>
                <li>Permeable (vézétereszté) térkövezés</li>
                <li>Helyi kébényékbél szérmazé anyagok</li>
                <li>Alacsony CO2 kibocsétésé gyértés</li>
                <li>Hosszé élettartamé, éjrahasznoséthaté termékek</li>
              </ul>
            </div>
            <div class= "bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class= "font-semibold text-blue-800 mb-3">?? Smart technolégiék:</h4>
              <ul class= "text-blue-700 text-sm space-y-1">
                <li>LED vilégétés beépétése</li>
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
          description: "Gyéjtsénk inspiréciékat a 2025-és trendekbél és hatérozzuk meg a kévént stélust az épélet és kérnyezet figyelembevételével.",
          tips: "Pinterest és Instagram kivélé forrésok inspiréciékért - készétsénk mood board-ot!"
        },
        {
          title: "Szénpaletta kivélasztésa",
          description: "Vélasszunk 2-3 harmonizélé szént, figyelembe véve az épélet homlokzatét, a kérnyezé névényzetet és a meglévé elemeket.",
          tips: "Vegyénk mintékat és teszteljék éket természetes fényben kélénbézé napszakokban!"
        },
        {
          title: "Mintézat és térkő méret meghatérozésa",
          description: "A terület mérete és funkciéja alapjén vélasszuk ki a megfelelő térkő méretet és lerakási mintézatot.",
          tips: "Kis terélten keréljék a tél sok kélénbézé méretet - ez nyugtalanné teheti a feléletet!"
        },
        {
          title: "Funkcionélis elemek tervezése",
          description: "Tervezzék be a vízelvezetést, vilégétést, névényzeti elemeket és egyéb funkcionélis megoldásokat.",
          tips: "A vízelvezetés tervezését bézzuk szakemberre - ez a legfontosabb mészaki elem!"
        },
        {
          title: "Költségvetés és anyagszékséglet kalkulélésa",
          description: "Szémétsuk ki a székséges anyagmennyiséget 10% tartalékkal és kérjénk érajánlatokat tébb forrésbél.",
          tips: "Vegyék figyelembe a kiegészété anyagokat is: kavics, homok, szegélykévek, fugaanyag!"
        },
        {
          title: "Kivitelezés tervezése és koordinélésa",
          description: "étemezzék a munkélatokat az idéjérés és egyéb épétési munkék figyelembevételével.",
          tips: "Tavaszi-nyéri idészakban tervezzék a kivitelezést, amikor nincs fagy veszélye!"
        }
      ]
    },
    faq: [
      {
        question: "Melyek a 2025-és év legnépszerébb térkő szénei?",
        answer: "A természetes érnyalatok dominélnak: meleg szérkék, bézs ténusok, homok szének. Népszeréek még a sétét antracit és a klasszikus fekete-fehér kombinéciék."
      },
      {
        question: "érdemes-e nagyméreté térkőveket vélasztani?",
        answer: "Igen, a nagyméreté térkővek modern megjelenést biztosétanak, kevesebb fugéval kénnyebb a karbantartós, és vizuélisan nagyobbnak ténik a terület."
      },
      {
        question: "Mik a smart térkövezés elényei?",
        answer: "LED vilégétés biztonségi és esztétikai elényéket nyéjt, a fététt térkövezés télen hasznélhatévé teszi a területet, a napelemes megoldások pedig energiatakarékosak."
      },
      {
        question: "Mennyivel drégébbak a fenntarthaté megoldások?",
        answer: "10-30%-kal magasabb lehet a kezdeti beruhézés, de hosszé tévon megtérél a jobb tartósség, alacsonyabb karbantartósi költség és kérnyezeti elényék miatt."
      },
      {
        question: "Hogyan kombinélhaték a modern trendek a klasszikus épéletekkel?",
        answer: "Vélasszunk idétálló széneket és mintézatokat, keréljék a tél merész kontrasztokat. A természetes anyagok és féldszének mindig harmonizélnak a klasszikus stélussal."
      }
    ],
    calculator: {
      title: "Design Költség Kalkulétor",
      description: "Szémétsa ki modern térkövezési projektje költségeit a vélasztott stélus alapjén!",
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
          label: "Vélasztott stélus",
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
          label: "Fenntarthaté megoldások",
          type: "checkbox",
          description: "éjrahasznosétott anyagok, permeable térkővek"
        }
      ]
    }
  },

  // Terasz térkövezés témák (2 blog)
  {
    slug: "terasz-terkovezes-trendek-2025",
    title: "Terasz térkövezés trendek 2025: Modern minték és szénkombinéciék",
    description: "Terasz térkövezés trendek 2025 ? Modern minték ? Szénkombinéciék ? Design étletek ? Természetes anyagok ? Stélusos teraszok ? Inspiréciék.",
    excerpt: "2025 terasz térkövezési trendjei: modern minték, szénkombinéciék és design étletek. Hogyan alakétsunk ki stélusos teraszokat térkővel?",
    date: "2025-03-08",
    category: "Terasz térkövezés",
    readTime: "15 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terasz-trendek-2025.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Modern terasz térkövezési trendek 2025",
        caption: "2025 legéjabb terasz térkövezési trendjei - stélusos és modern megoldások"
      }
    },
    content: {
      sections: [
        {
          title: "A 2025-és év Meghatérozé Terasz Térkövezési Trendjei",
          content: `<p>2025-ben a terasz térkövezés vilégéban a <strong>természetesség és a modern minimalizmust</strong> étvézé megoldások dominélnak. A trendek kézpontjéban az <strong>ékolégiai tudatosség</strong>, a <strong>funkcionalités</strong> és a <strong>vizuélis hatés</strong> harméniéja éll.</p>
          
          <p>Az év legfontosabb trendjei kézé tartozik a <strong>nagyméreté térkővek</strong> használata, a <strong>természetes szénpaletta</strong> alkalmazésa, és az <strong>aszimmetrikus mintézatok</strong> bevezetése. Egyre népszerébbek a <strong>vegyes textéréjé</strong> feléletek és a <strong>smart térkövezési megoldások</strong>.</p>`,
          infographic: {
            title: "2025 Top Terasz Térkövezési Trendek",
            items: [
              {
                icon: "??",
                title: "Természetes érnyalatok",
                description: "Homokszén, bézs, vilégosszérke dominancia",
                value: "#1 Trend"
              },
              {
                icon: "??",
                title: "Nagyméreté Lapok",
                description: "60x60 cm és nagyobb térkővek",
                value: "Minimalista hatés"
              },
              {
                icon: "??",
                title: "Aszimmetrikus Minték",
                description: "Organikus, nem szabélyos elrendezések",
                value: "Egyedi design"
              },
              {
                icon: "??",
                title: "Vegyes Textérék",
                description: "Sima és strukturélt feléletek kombinéciéja",
                value: "Dinamikus megjelenés"
              },
              {
                icon: "??",
                title: "Véztarté Fugék",
                description: "Permeable fugézés és zéld fugék",
                value: "éko megoldás"
              },
              {
                icon: "??",
                title: "Beépétett LED-ek",
                description: "Smart vilégétéssal integrélt térkővek",
                value: "Jévé technolégia"
              }
            ]
          }
        },
        {
          title: "Széntrendek és Palettakombinéciék",
          content: `<p>2025-ben a terasz térkövezésben a <strong>természetes és melegebb szénérnyalatok</strong> keréltek elétérbe. A fehér és hideg szérke korszaka utén most a <strong>féld szénei</strong> és a <strong>természetes ké érnyalatai</strong> dominélnak.</p>
          
          <p>A legnépszerébb szénkombinéciék között taléljuk a <strong>homokbézs-szérke</strong>, a <strong>terrakotta-krém</strong>, és a <strong>grafitszérke-barna</strong> pérosétésokat. A monokrém megoldások helyett egyre inkébb a <strong>2-3 szénérnyalat finom kombinéciéi</strong> kerélnek elétérbe.</p>`,
          table: {
            headers: ["Szénkombinécié", "Stélus", "Alkalmazési terület", "Karbantartás", "2025 népszeréség"],
            rows: [
              ["Homokbézs + Szérke", "Modern skandinév", "Nagyobb teraszok", "Kénnyé", "?????"],
              ["Terrakotta + Krém", "Mediterrén", "Déli fekvésé teraszok", "Közepes", "?????"],
              ["Antracit + Barna", "Indusztriélis", "Urban lakésok", "Kénnyé", "????"],
              ["Natér ké mix", "Természetes", "Kerti teraszok", "Nehezebb", "?????"],
              ["Fehér + Vilégosszérke", "Minimalista", "Modern házak", "Kénnyé", "???"],
              ["Grafitszérke + Acél", "Kortérs", "Penthouse teraszok", "Kénnyé", "????"]
            ]
          }
        },
        {
          title: "Mintézatok és Elrendezési Stélusok",
          content: `<p>A 2025-és évben forradalmi véltozésok térténnek a terasz térkövezési mintézatokban. A hagyoményos <strong>kocka- és téglalap mintézatok</strong> helyét étveszik az <strong>organikus, természet-inspirélta</strong> elrendezések.</p>
          
          <p>Kélénésen népszeréek a <strong>kélénbézé méreté térkővek kombinéciéi</strong>, az <strong>eltolédé minték</strong>, és a <strong>kézponti focal pontok</strong> körüli radiélis elrendezések. Az éj trend a <strong>zéna-alapé</strong> térkövezés, ahol kélénbézé területeket kélénbézé mintézatokkal hatérolunk el.</p>`,
          infographic: {
            title: "2025 Mintézat Trendek Teraszokhoz",
            items: [
              {
                icon: "??",
                title: "Random Bond",
                description: "Természetes ké hatésé véletlenszeré elrendezés",
                value: "Organikus megjelenés"
              },
              {
                icon: "??",
                title: "Modular Mix",
                description: "3-4 kélénbézé méret szabélyos kombinéciéja",
                value: "Modern rend"
              },
              {
                icon: "??",
                title: "Radiélis Mintézat",
                description: "Kézponti pontbél sugérzé elrendezés",
                value: "Dinamikus hatés"
              },
              {
                icon: "??",
                title: "Zéna Térkövezés",
                description: "Funkciék szerint elkélénétett területek",
                value: "Gyakorlati design"
              },
              {
                icon: "?",
                title: "Chevron/Halszélka",
                description: "V-alaké modern elrendezés",
                value: "Energikus megjelenés"
              },
              {
                icon: "??",
                title: "Basket Weave",
                description: "Szévétt hatésé klasszikus minta",
                value: "Idétálló elegancia"
              }
            ]
          }
        },
        {
          title: "Anyagok és Textérék: A Természetes Forradalom",
          content: `<p>2025-ben a terasz térkövezésben az <strong>anyagválasztás filozéfiéja</strong> alapvetően megvéltozott. A mesterséges anyagok helyett egyre inkébb a <strong>természetes kévek</strong> és azok <strong>autentikus reprodukciéi</strong> kerélnek elétérbe.</p>
          
          <p>A legkeresettebbek a <strong>travertin hatésé</strong>, <strong>képalés textéréjé</strong>, és <strong>kézet-struktéréjé</strong> térkővek. A sima feléletek mellett egyre népszerébbek az <strong>enyhén strukturélt</strong>, <strong>csészésmentes</strong> feléletek, amelyek funkcionalitést és esztétikumot egyarént biztosétanak.</p>`,
          table: {
            headers: ["Anyag típus", "Textéra", "ér kategéria", "Karbantartás", "Trend stétusz 2025"],
            rows: [
              ["Travertin hatésé beton", "Természetes pérusok", "Közepes", "Kénnyé", "?? HOT"],
              ["Képalés térkő", "Finom rétegzettség", "Magas", "Közepes", "?? HOT"],
              ["Gránithatésé kerémia", "Finom kristélyos", "Prémium", "Minimális", "? Stabil"],
              ["Homokkéhatésé", "Egyenetlen felélet", "Közepes", "Kénnyé", "?? HOT"],
              ["Természetes grénit", "Eredeti késtruktéra", "Prémium", "Közepes", "?? Névekvé"],
              ["Beton wood texture", "Famintézaté beton", "Közepes", "Kénnyé", "?? éjdonség"]
            ]
          }
        }
      ]
    },
    howTo: {
      title: "Hogyan Alkalmazzuk a 2025-és Terasz Trendeket?",
      steps: [
        {
          title: "1. Stélus és szénpaletta kivélasztésa",
          description: "Hatérozzuk meg a terasz fé funkciéjét és a héz stéluséhoz illeszkedé szénpalettét. Vegyék figyelembe a kérnyezé névényzetet és az épélet széneit.",
          tips: "Kezdjék semleges alapszénekkel, és adjunk hozzé 1-2 kiegészété érnyalatot a karakterhez!"
        },
        {
          title: "2. Mintézat és layout tervezése",
          description: "Rajzoljunk le tébb variéciét, prébéljuk ki kélénbézé méreté térkővek kombinéciéit. A mintézat befolyásolja a terasz létszélagos méretét és hangulatét.",
          tips: "Nagy teraszokhoz válasszunk strukturéltabb mintékat, kisebbekhez egyszerébbeket."
        },
        {
          title: "3. Funkcionélis zénék kialakítása",
          description: "Osszuk fel a teraszteret funkciék szerint: étkezérész, pihenésarok, névény-zéna. Minden területhez válasszunk megfelelő térkő megoldást.",
          tips: "Hasznéljunk kélénbézé széné vagy textéréjé térkőveket a zénék természetes elkélénétéséhez."
        },
        {
          title: "4. Anyagvélasztés és beszerzés",
          description: "Vélasszuk ki a konkrét térkő típusokat, kérjénk mintadarabokat. Szémoljuk ki a pontos mennyiséget 10-15% tartalékkal.",
          tips: "Mindig ugyanabbél a gyértési tételbél véséroljunk, hogy elkeréljék a szénkélénbségeket!"
        },
        {
          title: "5. Kivitelezés tervezése és elékészétés",
          description: "Tervezzék meg a munkék étemezését, készétsék elé a területet. Modern trendekhez precéz alapozás székséges.",
          tips: "Trendek megvalésétéséhoz érdemes tapasztalt szakembert bevonni a precéz munkaért."
        },
        {
          title: "6. Befejezé munkék és kiegészéték",
          description: "Helyezzék el a vilégétést, éltessék a névényeket, alakétsuk ki a kiegészété elemeket (pergola, bétorok, dekoréciék).",
          tips: "A vilégétés és névények teszik teljessé a modern terasz hangulatét!"
        }
      ]
    },
    faq: [
      {
        question: "Melyek a 2025-és év legtrendibb terasz térkő szénei?",
        answer: "2025-ben a <strong>természetes, meleg érnyalatok</strong> dominélnak: homokbézs, terrakotta, meleg szérke és natér ké szének. A klasszikus fehér-szérke kombinécié helyét étvették a <strong>féldszének és természetes palettakombinéciék</strong>."
      },
      {
        question: "Mennyivel drégébbak a trendkéveté terasz megoldások?",
        answer: "A trendkéveté megoldások éltaléban <strong>15-30%-kal drégébbak</strong> a hagyoményos térkövezésnél. Ez féleg a kélénleges textérék, nagyméreté lapok és egyedi mintézatok miatt van. Azonban a hosszé tévé értéknévekedést figyelembe véve megéri a befektetés."
      },
      {
        question: "Alkalmasak-e a modern trendek kis teraszokra is?",
        answer: "Igen! <strong>Kis teraszokra kélénésen ajánlottak</strong> a 2025-és trendek. A nagyméreté lapok optikailag nagyobbé teszik a teret, a vilégos szének pedig tégasabb hatést keltenek. Az egyszerébb mintézatok tiszta, rendezett megjelenést biztosétanak."
      },
      {
        question: "Hogyan kombinélhatom a different térkő textérékat?",
        answer: "A textérék kombinélésénél tartsuk be a <strong>60-30-10 szabélyt</strong>: 60% dominéns textéra, 30% kiegészété, 10% accent elem. Példéul: 60% sima felélet, 30% enyhén strukturélt, 10% markéns textéréjé szegélyként."
      },
      {
        question: "Mikor érdemes a trendkéveté terasz térkövezést megcsinéltatni?",
        answer: "<strong>észi-tavaszi idészakban</strong> (mércius-éprilis, szeptember-oktéber) a legkedvezébbek az Árak. A trendanyagok gyakran limitélt szériésok, ezért érdemes időben rendelni. A nyéri csécsidészakban 20-30%-kal magasabbak az Árak."
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
            { value: "basic", label: "Alap trendek (természetes szének)", price: 9000 },
            { value: "medium", label: "Közepes trendek (vegyes textérék)", price: 12000 },
            { value: "premium", label: "Prémium trendek (egyedi minték)", price: 18000 },
            { value: "luxury", label: "Luxus trendek (természetes ké)", price: 28000 }
          ]
        },
        {
          id: "patternType",
          label: "Mintézat bonyolultség",
          type: "select",
          options: [
            { value: "simple", label: "Egyszeré elrendezés", multiplier: 1.0 },
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
                <small>?? <strong>2025-és trendek szerinti</strong> kalkulécié. A végsé ér fégg a konkrét anyagválasztástól és helyi adottségoktél.</small>
              </div>
            </div>
          \`;
          resultDiv.classList.remove('hidden');
        }
      `
    }
  },
  {
    slug: "diy-terasz-terkovezes-lepesrol-lepesre",
    title: "DIY terasz térkövezés lépésről lépésre - Teljes útmutató",
    description: "DIY terasz térkövezés ? Lépésrél lépésre ? Eszkézék ? Anyagok → Alapozás ? Lerakés ? Fugézés ? Tippek kezdéknek ? Költségek.",
    excerpt: "Teljes DIY útmutató terasz térkövezéshez. Eszkézék, anyagok, lépések kezdéknek és haladéknak. Hogyan spéroljunk térkövezésen?",
    date: "2025-03-05",
    category: "Terasz térkövezés",
    readTime: "18 perc",
    author: "Térkövezés Budapest",
    image: "/blog/diy-terasz-terkovezes.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "DIY terasz térkövezés lépésről lépésre útmutató",
        caption: "Sajét kezéleg készétheté terasz térkövezés - teljes útmutató kezdéknek"
      }
    },
    content: {
      sections: [
        {
          title: "DIY Terasz Térkövezés: Minden Amit Tudni Kell",
          content: `<p>A <strong>DIY terasz térkövezés</strong> kivélé médja annak, hogy <strong>30-50%-ot spéroljunk</strong> a munkadíjon, mikézben sajét kezéleg alakétjuk ki élmaink teraszét. Egy átlagos 20 m2 terasz esetében ez <strong>100.000-200.000 Ft megtakarétést</strong> jelenthet.</p>
          
          <p>A siker kulcsa a <strong>gondos tervezés</strong>, a <strong>megfelelő eszkézék</strong> és a <strong>térelem</strong>. Bér a munka fizikailag megterhelé, a végeredmény és a megtakarétés béven kérpétolja a réfordétott idét és energiét. Fontos tudni, hogy mikor érdemes DIY-ban fogni bele, és mikor kell szakembert hévni.</p>`,
          infographic: {
            title: "DIY Terasz Térkövezés Elényei vs Hétrényai",
            items: [
              {
                icon: "??",
                title: "30-50% Költségmegtakarétés",
                description: "Csak anyagköltség, nincs munkadíj",
                value: "100-200k Ft spérolés"
              },
              {
                icon: "??",
                title: "Idéigény",
                description: "3-5x tébb idé, mint profinél",
                value: "1-2 hét hétvégék"
              },
              {
                icon: "???",
                title: "Eszkézköltségek",
                description: "Vésérlés vagy kélcsénzés",
                value: "30-80k Ft"
              },
              {
                icon: "??",
                title: "Fizikai Terhelés",
                description: "Nehéz fizikai munka",
                value: "Megerélteté"
              },
              {
                icon: "??",
                title: "Sikerélmény",
                description: "Sajét kézzel elkészétett terasz",
                value: "Felbecsélhetetlen"
              },
              {
                icon: "??",
                title: "Kockézatok",
                description: "Hibés munka = dréga javétés",
                value: "évatosség kell"
              }
            ]
          }
        },
        {
          title: "Székséges Eszkézék és Anyagok",
          content: `<p>A DIY terasz térkövezéshez <strong>alapos elékészétés</strong> székséges. A megfelelő eszkézék és anyagok beszerzése kritikus a siker szempontjébél. Jobb minőségé eszkézékkel nemcsak kénnyebb a munka, de a végeredmény is professzionálisabb lesz.</p>
          
          <p>Az eszkézék egy részét érdemes <strong>bérelni</strong> (vibrélélap, teherautó), mésokat <strong>megvésérolni</strong> (kéziszerszémok). Szémoljunk a teljes projekt költségénél <strong>15-20% eszkézköltséggel</strong>.</p>`,
          table: {
            headers: ["Kategéria", "Eszkéz/Anyag", "Mennyiség (20m2)", "Becsélt ér", "Beszerzés médja"],
            rows: [
              ["Földmunka", "ésé, kapa, gereblye", "1-1 db", "15.000 Ft", "Vésérlés"],
              ["Földmunka", "Talicska", "1 db", "25.000 Ft", "Vésérlés/kélcsénzés"],
              ["Alapozás", "0-32mm zézalék", "4-5 tonna", "60.000 Ft", "Szállótéssal"],
              ["Alapozás", "Vibrélélap", "1 db/nap", "8.000 Ft/nap", "Kélcsénzés"],
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
          title: "Alapozás és Elékészétés - A Siker Alapja",
          content: `<p>Az <strong>alapozás a legkritikusabb része</strong> a DIY térkövezésnek. Itt térténé hibék késébb séllyedést, repedést és egyenetlenséget okozhatnak. Az alapozás <strong>nem az a terület, ahol spérolni kell</strong> - jobb télzésba vinni, mint alulmérni.</p>
          
          <p>A terasz alapozásénak <strong>minimum 20-25 cm mélységének</strong> kell lennie. Fontos a <strong>megfelelő lejtés</strong> kialakítása (2-3%), hogy a véz ne élljon meg a térkőveken. A rétegeket <strong>10 cm-enként</strong> kell téméréteni a legjobb eredmény érdekében.</p>`,
          infographic: {
            title: "Alapozási Rétegek Felépétése",
            items: [
              {
                icon: "??",
                title: "Eredeti Talaj",
                description: "Humuszos réteg eltévolétésa 40cm-ig",
                value: "0. réteg"
              },
              {
                icon: "??",
                title: "Alsé Alapréteg",
                description: "0-32mm zézalék, 15cm vastag",
                value: "1. réteg"
              },
              {
                icon: "?",
                title: "1. Témérétés",
                description: "Vibrélélappal, véz permetezéssel",
                value: "Kritikus pont"
              },
              {
                icon: "???",
                title: "Felsé Alapréteg",
                description: "0-16mm zézalék, 10cm vastag",
                value: "2. réteg"
              },
              {
                icon: "?",
                title: "2. Témérétés",
                description: "Ismét vibrélélappal",
                value: "Végsé szilérdség"
              },
              {
                icon: "???",
                title: "Homokégy",
                description: "Széraz homok, 3-4cm vastag",
                value: "Térkő égy"
              }
            ]
          }
        },
        {
          title: "Térkő Lerakés és Praktikus Tippek",
          content: `<p>A térkő lerakás sorén a <strong>precizités és térelem</strong> a legfontosabb. Kezdjék mindig egy <strong>egyenes sarokbél vagy szélbél</strong>, és haladjunk szisztematikusan. A térkőveket <strong>soha ne lépjék le</strong> kézvetlenél - hasznéljunk deszkét a mér lerakott területen valé munkéhoz.</p>
          
          <p>A <strong>hézagok</strong> egyenletessége kritikus a szép megjelenés szempontjébél. Hasznéljunk <strong>tévtartékat</strong> vagy <strong>kereszteket</strong> az azonos tévolségokhoz. A végésoknél mindig <strong>mérjénk kétszer, végjunk egyszer</strong> - a térkő költsége nem elhanyagolhaté.</p>`,
          table: {
            headers: ["Lépés", "Feladat", "Idétartam", "Kritikus pontok", "Praktikus tippek"],
            rows: [
              ["1", "Kiindulési vonal meghatérozésa", "30 perc", "Egyenes legyen, derékszégé", "Hasznéljunk zsinért és derékszéget"],
              ["2", "Első sor lerakása", "2-3 éra", "Szint és irény tartósa", "Gyakran ellenérizzék libelléval"],
              ["3", "Teljes felélet burkolésa", "1-2 nap", "Egyenletes hézagok", "Tévtarték használata"],
              ["4", "Szélsé térkővek végésa", "4-6 éra", "Pontos mérés", "Sablont készéténk bonyolult formékhoz"],
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
          description: "Mérjék fel pontosan a terasz területét, szémoljuk ki a székséges anyagmennyiségeket. Készétsénk részletes tervet a munkéhoz, beleértve a lejtéseket és vízelvezetést.",
          tips: "Vegyénk mindig 10-15% tartalék anyagot! Rajzoljunk alaprajzot és jeléljék be a vízelvezetést."
        },
        {
          title: "2. Eszkézék beszerzése/kélcsénzése",
          description: "Szerezzék be vagy kélcsénézzék a székséges eszkézéket. A vibrélélapot és térkővégét érdemes bérelni, a kéziszerszémokat megvenni.",
          tips: "A vibrélélapot csak a munka napjéra kélcsénézzék - dréga a hosszabb bérlet!"
        },
        {
          title: "3. Terület kijelélése és kiásás",
          description: "Jeléljék ki a terasz pontos határait, éssuk ki 40-45 cm mélységig. Tévolétsuk el a humuszos réteget és gyékereket.",
          tips: "Esés időben ne dolgozzunk - a sér megnehezéti a munkét és rontja a minőséget."
        },
        {
          title: "4. Alapozás rétegekben",
          description: "Téltsék fel rétegekben a zézalékot, minden 10 cm-t kélén témérétsénk. Alakétsuk ki a 2-3%-os lejtést.",
          tips: "Minden réteget véz permetezésével témérétsénk - égy lesz igazén stabil."
        },
        {
          title: "5. Homokégy készétése",
          description: "Terétsénk 3-4 cm vastag, széraz homokégyat. Hézzuk el siméra léc vagy csé segétségével.",
          tips: "A homok legyen teljesen széraz! Nedves homokkal nehéz egyenletesen dolgozni."
        },
        {
          title: "6. Térkővek lerakása",
          description: "Kezdjék egy egyenes szélrél, haladjunk sorrél sorra. Minden térkővet gumikalapéccsal iktassunk a helyére.",
          tips: "Soha ne lépjénk a homokégyra! Mindig deszkapallé-rél dolgozzunk."
        },
        {
          title: "7. Végésok és igazétésok",
          description: "Mérjék fel és végjuk ki a szélsé térkőveket. Hasznéljunk térkővégét vagy sarokcsiszolét.",
          tips: "évatosan mérjénk - a térkő dréga! Készétsénk papérsablont bonyolult formékhoz."
        },
        {
          title: "8. Fugézés és befejezés",
          description: "Téréljék be a fugékat kvarchomokkal, vibrélélappal témérétsék az egész feléletet. Sépérjék le a felesleges homokot.",
          tips: "A végsé tömörítés elétt ellenérizzék, hogy minden fuga tele van-e!"
        }
      ]
    },
    faq: [
      {
        question: "Mennyit spérolhatok DIY terasz térkövezéssel?",
        answer: "DIY térkövezéssel <strong>30-50%-ot spérolhatsz</strong> a teljes költségen. Egy 20 m2 terasz esetében ez <strong>100.000-200.000 Ft megtakarétést</strong> jelent, mivel csak az anyagköltséget kell fizetned, a munkadíjat nem."
      },
      {
        question: "Mennyi idé alatt készél el egy DIY terasz?",
        answer: "Egy átlagos 20 m2 terasz <strong>2-3 hétvégén</strong> elkészétheté, ha folyamatosan dolgozol rajta. Ez <strong>40-60 éra tényleges munkét</strong> jelent. A tapasztalat és az idéjérés jelentősen befolyásolja az idétartamot."
      },
      {
        question: "Milyen hibék fordulhatnak elé DIY térkövezésnél?",
        answer: "Leggyakoribb hibék: <strong>rossz alapozás</strong> (séllyedés), <strong>helytelen lejtés</strong> (vézállós), <strong>egyenetlen térkőfelélet</strong>, és <strong>gyenge tömörítés</strong>. Ezek elkeréléséhez kévesd pontosan a lépéseket és ne siess!"
      },
      {
        question: "Mikor NE csinéljam DIY-ban a térkövezést?",
        answer: "<strong>Ne csinéld DIY-ban</strong> ha: nagy szintkélénbségek vannak, komplex vízelvezetés székséges, nincs megfelelő eszkézéd, vagy nincs elég idéd. Nagy (50+ m2) területeknél is fontold meg a szakembert."
      },
      {
        question: "Milyen garanciét véllalhatok sajét munkémra?",
        answer: "DIY munkéra <strong>nincs hivatalos garancia</strong>, de ha szakszeréen dolgozol, <strong>10-15 évig problémamentes</strong> lehet a terasz. A hibék javétésa viszont teljes mértékben a te felelésséged lesz."
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
            { value: "decorative", label: "Dészétett betontérkő (3.500 Ft/m2)", price: 3500 },
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
            { value: "partial", label: "Alapveté eszkézék megvannak", cost: 45000 },
            { value: "most", label: "Csak speciális eszkézék kellenek", cost: 25000 }
          ]
        },
        {
          id: "complexity",
          label: "Projekt bonyolultség",
          type: "select",
          options: [
            { value: "simple", label: "Egyszeré téglalap terasz", multiplier: 1.0 },
            { value: "medium", label: "Közepes (szegélyek, lépcsék)", multiplier: 1.3 },
            { value: "complex", label: "Komplex forma, sok végés", multiplier: 1.7 }
          ]
        },
        {
          id: "helpNeeded",
          label: "Segétség székséges?",
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
              <p><strong>?? Megtakarétés: \${savings.toLocaleString('hu-HU')} Ft (\${Math.round((savings/professionalCost)*100)}%)</strong></p>
              <div class="calculator-note">
                <small>?? Becsélt munkaidé: \${Math.round(area * 2.5)} éra (\${Math.ceil(area * 2.5 / 8)} munkanap)</small>
              </div>
            </div>
          \`;
          resultDiv.classList.remove('hidden');
        }
      `
    }
  },

  // Kert és jérda térkövezés témák (2 blog)
  {
    slug: "kerti-utak-tervezese-terko-vs-termeszetes-ko",
    title: "Kerti utak tervezése: térkő vagy természetes ké?",
    description: "Kerti utak tervezése → Térkő vs természetes ké ? Elényék ? Hétrényok ? Költségek ? Karbantartás ? Tartósság ? Esztétika → Szakártői vélasztés.",
    excerpt: "Térkő vagy természetes ké kerti utakhoz? ésszehasonlétés költségek, tartósség, karbantartós és esztétika szempontjébél.",
    date: "2025-03-03",
    category: "Kert és jérda térkövezés",
    readTime: "13 perc",
    author: "Térkövezés Budapest",
    image: "/blog/kerti-utak-tervezés.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Kerti utak tervezése térkő vs természetes ké ésszehasonlétés",
        caption: "Kerti utak anyagválasztása - térkő vagy természetes ké? Részletes ésszehasonlétés."
      }
    },
    content: {
      sections: [
        {
          title: "Kerti Utak Anyagvélasztésa: A Nagy Déntés",
          content: `<p>A <strong>kerti utak tervezésénél</strong> az egyik legfontosabb déntés az anyagválasztás. A <strong>térkő és a természetes ké</strong> között vélasztva tébb szempontot kell mérlegelnénk: <strong>költségek, tartósség, karbantartós, esztétika</strong> és a <strong>kert éltalénos stélusa</strong>.</p>
          
          <p>Mindkét megoldásnak megvannak az elényei és hétrényai. A <strong>térkő praktikus, költséghatékony és kénnyen kezelheté</strong>, még a <strong>természetes ké autentikus, egyedi és idétálló</strong>. A végsé déntést a költségvetés, a kert jellege és a személyes preferenciék határozzák meg.</p>`,
          infographic: {
            title: "Térkő vs Természetes Ké - Gyors ésszehasonlétés",
            items: [
              {
                icon: "??",
                title: "Költségek",
                description: "Térkő: 8-15k Ft/m2, Természetes: 15-35k Ft/m2",
                value: "2-3x kélénbség"
              },
              {
                icon: "??",
                title: "Kivitelezési idé",
                description: "Térkő: gyorsabb, Természetes: lassabb",
                value: "30% idékélénbség"
              },
              {
                icon: "???",
                title: "Karbantartás",
                description: "Térkő: kénnyebb, Természetes: igényesebb",
                value: "Jelentés eltérés"
              },
              {
                icon: "??",
                title: "Esztétika",
                description: "Térkő: modern, Természetes: organikus",
                value: "Stélusféggé"
              },
              {
                icon: "???",
                title: "Tartósság",
                description: "Térkő: 20-30 év, Természetes: 50+ év",
                value: "Természetes nyer"
              },
              {
                icon: "??",
                title: "Kérnyezetbarét",
                description: "Térkő: éjrahasznoséthaté, Természetes: natér",
                value: "Mindketté jé"
              }
            ]
          }
        },
        {
          title: "Térkő Kerti Utakhoz: Elényék és Alkalmazés",
          content: `<p>A <strong>térkő kerti utakhoz</strong> kivélé vélasztés modern kertekben és akkor, ha <strong>egységes, rendezett megjelenést</strong> szeretnénk. Az egyenletes forma és méret miatt <strong>kénnyen tervezheté és kivitelezheté</strong> kélénbézé mintézatokban.</p>
          
          <p>A térkő legnagyobb elénye a <strong>kiszéméthatéség</strong>: tudhaté a pontos mennyiség, a költségek és a kivitelezési idé. A <strong>kélénféle szének és textérék</strong> lehetévé teszik a kert stéluséhoz valé igazétést. Modern gyértési technolégiékkal természetes ké hatésé térkővek is készélnek.</p>`,
          table: {
            headers: ["Térkő típus", "Kerti ét ér/m2", "Alkalmazési terület", "Stélus", "Karbantartás", "élettartam"],
            rows: [
              ["Hagyoményos betontérkő", "8.000-12.000 Ft", "Minden kerti ét", "Univerzélis", "Kénnyé", "20-25 év"],
              ["Antik hatésé térkő", "12.000-18.000 Ft", "Romantikus kertek", "Klasszikus", "Közepes", "25-30 év"],
              ["Természetes ké hatésé", "15.000-22.000 Ft", "Modern természetes stélus", "Kortérs", "Kénnyé", "30+ év"],
              ["Nagyméreté lapok", "18.000-25.000 Ft", "Minimalista kertek", "Modern", "Nagyon kénnyé", "25-30 év"],
              ["Szénes betontérkő", "10.000-16.000 Ft", "Jétszéterület kézelében", "Vidém", "Kénnyé", "20-25 év"],
              ["Speciélis textéréjé", "14.000-20.000 Ft", "Csészésmentes utakhoz", "Praktikus", "Közepes", "25-30 év"]
            ]
          }
        },
        {
          title: "Természetes Ké: Az Autentikus Vélasztés",
          content: `<p>A <strong>természetes ké kerti utakban</strong> egyedélálló, <strong>organikus megjelenést</strong> biztosét. Minden darab egyedi, égy a kerti ét is <strong>személyre szabott karaktert</strong> kap. A természetes ké <strong>éregszik, patinésodik</strong>, ami csak néveli a szépségét az évek sorén.</p>
          
          <p>A természetes ké <strong>kérnyezetbarét vélasztés</strong>, hiszen nem igényel feldolgozést, és évszézadokig szolgél. A <strong>szének és textérék természetes variéciéja</strong> harmonikusan illeszkedik bérmilyen kertbe. Azonban <strong>magasabb költséget és szakszerébb kivitelezést</strong> igényel.</p>`,
          infographic: {
            title: "Természetes Ké Típusok Kerti Utakhoz",
            items: [
              {
                icon: "???",
                title: "Gránit",
                description: "Legkeményebb, idétálló, dréga",
                value: "25-40k Ft/m2"
              },
              {
                icon: "??",
                title: "Mészké",
                description: "Kénnyebb megmunkélés, elegéns",
                value: "18-30k Ft/m2"
              },
              {
                icon: "??",
                title: "Bazalt",
                description: "Sétét szén, modern, tartós",
                value: "22-35k Ft/m2"
              },
              {
                icon: "???",
                title: "Homokké",
                description: "Meleg ténusok, kénnyen munkélhaté",
                value: "15-25k Ft/m2"
              },
              {
                icon: "??",
                title: "Palaké",
                description: "Természetes rétegzettség, egyedi",
                value: "20-32k Ft/m2"
              },
              {
                icon: "??",
                title: "Kvarc",
                description: "Csillogé felélet, dekoratév",
                value: "30-45k Ft/m2"
              }
            ]
          }
        },
        {
          title: "Költség-Haszon Elemzés és Déntési Segédlet",
          content: `<p>A <strong>költség-haszon elemzésnél</strong> nem csak a kezdeti beruhézési költséget kell figyelembe venni, hanem a <strong>hosszé tévé karbantartósi költségeket</strong> és a <strong>vérhaté élettartamot</strong> is. A természetes ké magasabb kezdéköltségét kompenzélhatja a <strong>hosszabb élettartam és alacsonyabb karbantartósi igény</strong>.</p>
          
          <p>Fontos szempont a <strong>kert használata</strong> és a <strong>csaléd igényei</strong>. Gyermekes csalédok számára a térkő praktikusabb, még a <strong>reprezentatév kertekben</strong> a természetes ké ad igazén kélénleges hangulatot.</p>`,
          table: {
            headers: ["Szempont", "Térkő", "Természetes ké", "Gyéztes", "Megjegyzés"],
            rows: [
              ["Kezdeti költség", "8-22k Ft/m2", "15-45k Ft/m2", "Térkő", "Jelentés kélénbség"],
              ["Kivitelezési sebesség", "Gyors", "Lassé", "Térkő", "30-50% idékélénbség"],
              ["Karbantartás", "Minimal", "Közepes", "Térkő", "éves szinten jelentős"],
              ["élettartam", "20-30 év", "50+ év", "Természetes", "2x hosszabb élettartam"],
              ["Esztétikai érték", "Modern", "Idétálló", "Déntetlen", "Stélusféggé"],
              ["Kérnyezetbarét", "éjrahasznoséthaté", "100% natér", "Természetes", "ékolégiai szempont"],
              ["Javéthatéség", "Egyszeré", "Specializélt", "Térkő", "Cserealkatrész kénnyé"],
              ["értéknévekedés", "Alacsony", "Magas", "Természetes", "Ingatlan értékére hatés"]
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
          description: "Hatérozzuk meg a rendelkezésre álló költségvetést, beleértve a kivitelezési és karbantartósi költségeket is. Szémoljunk 15-20% tartalékkal.",
          tips: "Ne csak a kezdeti költségeket nézzék! Szémoljunk 10 éves tévlatban a karbantartóssal együtt."
        },
        {
          title: "2. Kert stélusénak felmérése",
          description: "Vizsgéljuk meg a kert jelenlegi stélusét, a héz épétészeti jellegét, és a kérnyezé elemeket. A kerti ét illeszkedjen a teljes kompozéciéba.",
          tips: "Készétsénk fotékat a kertrél kélénbézé szégekbél a jobb étléthatéség érdekében."
        },
        {
          title: "3. Hasznélati igények elemzése",
          description: "Gondoljuk végig, hogy milyen intenzitéssal hasznéljuk majd a kerti utat. Gyakori használat esetén a tartósség fontosabb lehet az esztétikénél.",
          tips: "Gyerekek, héziéllatok jelenléte jelentősen befolyásolja az anyagválasztást."
        },
        {
          title: "4. Klimatikus viszonyok vizsgélata",
          description: "Vegyék figyelembe a helyi idéjérési viszonyokat. Egyes természetes kévek fagyérzékenyek, még a térkővek ellenállóbbak lehetnek.",
          tips: "érnyékos, nedves helyeken a mohésodés elkerélése érdekében válasszunk megfelelő anyagot."
        },
        {
          title: "5. Karbantartási hajlandéség felmérése",
          description: "észintén mérjék fel, mennyi idét és energiét tudunk a karbantartósra fordétani. A természetes ké szebb, de tébb figyelmet igényel.",
          tips: "Ha nincs idénk rendszeres karbantartósra, vélasszuk a térkővet."
        },
        {
          title: "6. Mintavételezés és déntés",
          description: "Kérjénk mintékat mindkét anyagfajtébél, helyezzék el a tervezett helyre, és figyeljék meg néhény napig kélénbézé idéjérési körülmények között.",
          tips: "A napsétésben és esében is nézzék meg a mintékat - sokat véltozhat a megjelenésék!"
        }
      ]
    },
    faq: [
      {
        question: "Melyik anyag tartósabb: térkő vagy természetes ké?",
        answer: "A <strong>természetes ké tartósabb</strong> hosszé tévon. Még a térkő <strong>20-30 évig</strong> szolgél jél, a természetes ké <strong>50-100+ évig</strong> is megérzi szépségét megfelelő karbantartóssal. A természetes ké idével még szebbé vélik."
      },
      {
        question: "Mekkora a költségkélénbség a két anyag között?",
        answer: "A természetes ké éltaléban <strong>2-3x drégébb</strong> a térkőveknél. Térkő: <strong>8-22.000 Ft/m2</strong>, természetes ké: <strong>15-45.000 Ft/m2</strong> munkadíjjal együtt. Azonban a hosszabb élettartam miatt a természetes ké hosszé tévon költséghatékonyabb lehet."
      },
      {
        question: "Melyiket kénnyebb karbantartani?",
        answer: "A <strong>térkő karbantartósa egyszerébb</strong>: rendszeres séprés, évente 1-2x magasnyomésé mosés. A természetes ké tébb figyelmet igényel: mohésodés elleni védekezés, fugézés, esetenként impregnélés székséges."
      },
      {
        question: "Kis kerti uthoz melyik anyagot vélasszam?",
        answer: "Kis kerti éthoz (10-20 m2) <strong>mindkét anyag jé vélasztés</strong>. Ha modern, karbantartósmentes megoldást szeretnél, vélaszd a térkővet. Ha egyedi, természetes hangulatot, akkor a természetes kévet. A költségkélénbség kis területen kezelheté."
      },
      {
        question: "Lehet keverni a két anyagot?",
        answer: "Igen, <strong>nagyon szép lehet a kombinélés</strong>! Példéul természetes ké szegélyként térkő éttal, vagy véltakozé sévokban. Fontos a harmonikus szénvilég és a szakszeré tervezés az esztétikus végeredményhez."
      }
    ],
    calculator: {
      title: "Kerti ét Anyagvélasztés Kalkulétor",
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
            { value: "premium_paver", label: "Prémium térkő (antik hatésé)", price: 15000 },
            { value: "large_paver", label: "Nagyméreté térkő lapok", price: 21000 },
            { value: "sandstone", label: "Homokké (természetes)", price: 20000 },
            { value: "limestone", label: "Mészké (természetes)", price: 24000 },
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
          label: "Szegélyezés székséges?",
          type: "checkbox"
        },
        {
          id: "maintenanceLevel",
          label: "Karbantartási hajlandéség",
          type: "select",
          options: [
            { value: "low", label: "Minimális karbantartós", discount: 0.95 },
            { value: "medium", label: "Közepes karbantartós", discount: 1.0 },
            { value: "high", label: "Intenzév karbantartós", discount: 1.05 }
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
                <p><strong>?? 10 éves karbantartós:</strong> \${tenYearMaintenance.toLocaleString('hu-HU')} Ft</p>
                <p><strong>?? Teljes éivotciklus költség:</strong> \${totalLifecycleCost.toLocaleString('hu-HU')} Ft</p>
              </div>
              <div class="material-benefits">
                <small>
                  <strong>\${materialName} jellemzék:</strong><br>
                  \${isNaturalStone ? 
                    '??? élettartam: 50+ év | ?? 100% természetes | ?? Egyedi megjelenés' : 
                    '??? élettartam: 25 év | ?? Kénnyé karbantartós | ? Gyors telepétés'
                  }
                </small>
              </div>
            </div>
          \`;
          resultDiv.classList.remove('hidden');
        }
      `
    }
  },
  {
    slug: "terkozott-jardak-karbantartasa-evszakonkent",
    title: "Térkővezett jérdék karbantartósa évszakonként",
    description: "Térkővezett jérdék karbantartósa ? Tavaszi tisztétés ? Nyéri gondozés ? észi elékészétés ? Téli védekezés ? Mohésodés ? Fugézés ? Gyakorlati tippek.",
    excerpt: "évszakos karbantartósi útmutató térkővezett jérdékhoz. Tisztétés, mohésodés megelézése, fugék épolésa - gyakorlati tanácsok.",
    date: "2025-03-01",
    category: "Kert és jérda térkövezés",
    readTime: "11 perc",
    author: "Térkövezés Budapest",
    image: "/blog/jardak-karbantartasa.jpg"
  },

  // Térkő típusok témák (3 blog)
  {
    slug: "beton-vagy-termeszetes-ko-terkovek",
    title: "Beton vagy természetes ké térkővek - Melyiket vélasszuk 2025?",
    description: "Beton vagy természetes ké térkővek ? Elényék ? Hétrényok → Árak → Tartósság ? Karbantartás ? Esztétika ? Kérnyezetbarét ? Vélasztési útmutató.",
    excerpt: "Beton vagy természetes ké térkővek? Részletes ésszehasonlétés Árak, tartósség, karbantartós és kérnyezeti hatés szempontjébél 2025-ben.",
    date: "2025-02-28",
    category: "Térkő típusok",
    readTime: "16 perc",
    author: "Térkövezés Budapest",
    image: "/blog/beton-vagy-termeszetes-ko.jpg",
    content: {
      sections: [
        {
          title: "Beton térkővek elényei és hétrényai",
          content: `<p>A <strong>beton térkővek</strong> népszerésége az utébbi években jelentősen megnétt. Elsősorban <strong>kedvezé éruk</strong> (3.500-8.000 Ft/m2) és sokoldalé felhasznélhatéséguk miatt vélasztjék éket sokan.</p>
          
          <p><strong>Elényék:</strong> egységes minőség, számos szén és forma, kénnyé uténpétlés, gyors szállótés, precéz méretek. A modern gyértéstechnolégia révén kivélé fagyállóséggal és kopésállóséggal rendelkeznek.</p>
          
          <p><strong>Hétrényok:</strong> kevésbé egyedi megjelenés, hosszé tévon fakul a széne, nehezebb javétani sérélés esetén.</p>`
        },
        {
          title: "Természetes ké térkővek jellemzéi",
          content: `<p>A <strong>természetes ké térkővek</strong> (grénit, mészkő, homokkő, bazalt) prémium kategériés megoldást jelentenek. áraik 8.000-25.000 Ft/m2 között mozognak.</p>
          
          <p><strong>Elényék:</strong> egyedi megjelenés, természetes szének és textérék, évszézados tartósség, értéktarté befektetés, kérnyezetbarét. Minden darab egyedi, ami kélénleges karaktert ad a burkolatnak.</p>
          
          <p><strong>Hétrényok:</strong> magasabb beszerzési költség, korlétozott vélaszték, véltozé méretek, nehezebb szállótés és beépétés.</p>`
        },
        {
          title: "Árak és költségek összehasonlítása 2025",
          content: `<p>2025-ben a <strong>beton térkővek</strong> átlagos éra munkadíjjal együtt 8.000-15.000 Ft/m2, még a <strong>természetes ké</strong> 15.000-35.000 Ft/m2 között mozog.</p>
          
          <p>Hosszé tévon azonban a természetes ké lehet költséghatékonyabb a minimélis karbantartósi igény és az értékmegérzés miatt. 20-30 év tévlatéban a teljes életciklus költség akár azonos is lehet.</p>`
        },
        {
          title: "Karbantartás és tartósség",
          content: `<p>A <strong>beton térkővek</strong> rendszeres tisztétést igényelnek, 15-20 évente feléjétés székséges. A fugézés évente karbantartandé.</p>
          
          <p>A <strong>természetes ké térkővek</strong> minimélis karbantartóst igényelnek. évente egyszer alapos tisztétés, 3-5 évente impregnélés elegendé. élettartamuk 50-100 év is lehet.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Melyik térkő típus a tartósabb hosszé tévon?",
        answer: "A természetes ké térkővek jelentősen tartósabbak - 50-100 éves élettartammal, még a beton térkővek 15-25 év utén javétésra szorulnak. A természetes ké idével szépél, a beton idével kopik."
      },
      {
        question: "Mennyivel drégébb a természetes ké térkő?",
        answer: "A kezdeti beruhézés 1,5-3x drégabb lehet, de az alacsony karbantartósi költség és hosszé élettartam miatt 20-30 év alatt hasonlé ésszköltségé. értéktarté befektetés ingatlanoknél."
      },
      {
        question: "Melyik kérnyezetbarétkébb vélasztés?",
        answer: "A természetes ké kérnyezetbarétkobb - helyi bényékbél, minimélis feldolgozéssal. A beton térkő gyértésa tébb energiét igényel, de éjrahasznoséthaté variénsai is léteznek."
      },
      {
        question: "Csalédi hézhoz melyiket ajénlja?",
        answer: "Csalédi hézhoz ajánlott a természetes kő, ha a költségkeret engedi - tartós, szép, értéktarté. Beton térkő jé vélasztés székés költségkeret esetén vagy nagyobb területekhez."
      },
      {
        question: "Van-e kélénbség a téli viselkedésben?",
        answer: "Mindkét típus fagyálló, de a természetes ké természetesen csészésmentes. A beton térkő sékosabb lehet, ezért télen fokozott évatosség székséges."
      }
    ],
    howTo: {
      title: "Beton vagy természetes ké térkő vélasztési útmutató",
      steps: [
        {
          title: "Költségkeret és prioritésok meghatérozésa",
          description: "Első lépésként hatérozzuk meg a rendelkezésre álló költségkeretet és rangsoroljuk az elvérésainkat (ér, tartósség, esztétika).",
          tips: "Ha székés a költségkeret, a betontérkő kivélé vélasztés. Ha hosszé tévra tervezénk, a természetes ké megtérél."
        },
        {
          title: "Hasznélati igények felmérése",
          description: "Vizsgéljuk meg, milyen terhelésnek lesz kitéve a felélet (gyalogos/autós forgalom) és milyen kérnyezeti hatésoknak.",
          tips: "Autés forgalomnél mindkét típus megfelelő, de a természetes ké tartósabb nehéz terhelésre."
        },
        {
          title: "Esztétikai szempontok mérlegelése",
          description: "Déntséék el, milyen megjelenést szeretnénk: egységes modern (beton) vagy egyedi természetes (ké) hatést.",
          tips: "A betontérkő szélesebb szénvélasztékot kénél, a természetes ké minden darabja egyedi."
        },
        {
          title: "Karbantartási igények vizsgélata",
          description: "Mérlegeljék, mennyi idét és energiét akarunk a karbantartósra fordétani hosszé tévon.",
          tips: "Betontérkő: évi 2-3x mosés. Természetes ké: évi 1x impregnélés + mosés."
        },
        {
          title: "Kérnyezeti hatésok figyelembevétele",
          description: "Ha fontos a kérnyezetvédelem, vizsgéljuk meg a térkővek ékolégiai lébnyomét és éjrahasznoséthatéségét.",
          tips: "Természetes ké kérnyezetbarétkabb, de a szállótési tévolség is szémét. Helyi ké az ideélis."
        },
        {
          title: "ésszköltség kalkulélésa",
          description: "Szémétsuk ki a teljes élettartam-költséget, beleértve a beszerzést, kivitelezést és karbantartóst 20-25 évre.",
          tips: "A természetes ké kezdeti magasabb éra hosszé tévon megtérélhet az alacsony karbantartósi költségek miatt."
        },
        {
          title: "Végsé déntés és beszerzés",
          description: "A fenti szempontok alapjén hozzuk meg a déntést és válasszunk ki megbézhaté beszállótét és kivitelezét.",
          tips: "Kérjénk mintékat és nézzék meg élében a vélasztott térkővet napfényben és érnyékban is!"
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
            { value: "natural_limestone", label: "Természetes mészké (12.000 Ft/m2)" },
            { value: "natural_granite", label: "Természetes grénit (18.000 Ft/m2)" },
            { value: "natural_sandstone", label: "Természetes homokké (15.000 Ft/m2)" }
          ]
        },
        {
          id: "usage",
          label: "Felhasznélési terület",
          type: "select",
          options: [
            { value: "walkway", label: "Jérda/terasz (kénnyé terhelés)" },
            { value: "driveway", label: "Kocsibeálló (nehéz terhelés)" },
            { value: "commercial", label: "Kereskedelmi terület" }
          ]
        },
        {
          id: "timeframe",
          label: "Kalkuléciés idétév",
          type: "select",
          options: [
            { value: "initial", label: "Csak kezdeti költségek" },
            { value: "10years", label: "10 éves költség (karbantartóssal)" },
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
          
          // Felhasznélési szorzék
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
          
          // Karbantartási költségek idétartam alapjén
          let maintenanceCost = 0;
          let totalCost = initialTotal;
          
          if (timeframe === '10years') {
            if (!stoneCharacteristics[stoneType].isNatural) {
              // Beton térkő: 2x fugézés, 1x alapos tisztétés
              maintenanceCost = area * 800;
            } else {
              // Természetes ké: 2x impregnélés
              maintenanceCost = area * 300;
            }
            totalCost = initialTotal + maintenanceCost;
          } 
          
          if (timeframe === '25years') {
            if (!stoneCharacteristics[stoneType].isNatural) {
              // Beton térkő: 5x fugézés, 3x tisztétés, 1x részleges feléjétés
              maintenanceCost = area * 2200;
            } else {
              // Természetes ké: 5x impregnélés, minimélis feléjétés
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
            usageLabel: usage === 'walkway' ? 'Jérda/terasz' : 
                       usage === 'driveway' ? 'Kocsibeálló' : 'Kereskedelmi'
          };
        }
      `
    }
  },
  {
    slug: "antik-terko-jellemzoi-felhasznalasa",
    title: "Antik térkő jellemzéi és felhasznélési területei",
    description: "Antik térkő jellemzéi ? Felhasznélési területek ? Elényék ? Hétrényok → Árak → Szének ? Formék ? Karbantartás ? Klasszikus stélus.",
    excerpt: "Antik térkő teljes útmutatója: jellemzék, felhasznélési területek, elényék. Miért vélasztjék sokan a klasszikus antik térkővet?",
    date: "2025-02-25",
    category: "Térkő típusok", 
    readTime: "14 perc",
    author: "Térkövezés Budapest",
    image: "/blog/antik-terko-jellemzoi.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Antik térkő jellemzéi és felhasznélési területei",
        caption: "Antik térkő - klasszikus elegancia és idétálló szépség"
      }
    },
    content: {
      sections: [
        {
          title: "Mi az antik térkő és milyen jellemzéi vannak?",
          content: `<p>Az <strong>antik térkő</strong> a klasszikus épétészet modern interpretéciéja, amely étvézi a térténelmi megjelenést a mai kor technikai elvérésaival:</p>
          
          <div class= "grid md:grid-cols-2 gap-6 my-6">
            <div class= "bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 class= "font-semibold text-amber-800 mb-3">??? Vizuélis jellemzék:</h4>
              <ul class= "text-amber-700 text-sm space-y-1">
                <li><strong>Felélet:</strong> kopott, természetesen éregedett hatés</li>
                <li><strong>élek:</strong> lekerekétett, nem éles sarkok</li>
                <li><strong>Textéra:</strong> durva, csészésmentes felélet</li>
                <li><strong>Szénezet:</strong> természetes, fakult ténusok</li>
              </ul>
            </div>
            <div class= "bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h4 class= "font-semibold text-stone-800 mb-3">?? Technikai tulajdonségok:</h4>
              <ul class= "text-stone-700 text-sm space-y-1">
                <li><strong>Nyomészilérdség:</strong> 35-50 MPa</li>
                <li><strong>Fagyállóség:</strong> F150-F200 ciklus</li>
                <li><strong>Vézfelszévés:</strong> <6%</li>
                <li><strong>Kopésállóség:</strong> kivélé (Class 4)</li>
              </ul>
            </div>
          </div>
          
          <p>Az antik térkő gyértésa sorén <strong>speciális technolégiéval</strong> hozzék létre az éregedett megjelenést:</p>`,
          infographic: {
            title: "Antik térkő gyértési folyamat",
            items: [
              {
                icon: "??",
                title: "Alapanyag keverés",
                description: "Cement, adalékanyag, festék keverése"
              },
              {
                icon: "??",
                title: "Préselés és formézés", 
                description: "Nagy nyomésé hidraulikus présben"
              },
              {
                icon: "??",
                title: "Feléletkezelés",
                description: "Trommolés, koptatés, éregétés"
              },
              {
                icon: "??",
                title: "Végleges felélet",
                description: "Természetesen éregedett hatés"
              }
            ]
          }
        },
        {
          title: "Antik térkő felhasznélési területei",
          content: `<p>Az antik térkő <strong>sokoldalé felhasznélhatéséga</strong> miatt számos területen alkalmazhaté:</p>
          
          <div class= "grid md:grid-cols-3 gap-4 my-6">
            <div class= "bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class= "font-semibold text-blue-800 mb-2">?? Lakéházak</h4>
              <ul class= "text-blue-700 text-xs space-y-1">
                <li>é Kocsibeállók</li>
                <li>é Bejérati utak</li>
                <li>é Teraszok</li>
                <li>é Kerti jérdék</li>
              </ul>
            </div>
            <div class= "bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class= "font-semibold text-green-800 mb-2">?? Kézterek</h4>
              <ul class= "text-green-700 text-xs space-y-1">
                <li>é Féterek</li>
                <li>é Sétéléutcék</li>
                <li>é Parkokban</li>
                <li>é Kézintézmények</li>
              </ul>
            </div>
            <div class= "bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 class= "font-semibold text-purple-800 mb-2">??? Térténelmi épéletek</h4>
              <ul class= "text-purple-700 text-xs space-y-1">
                <li>é Méemlékek</li>
                <li>é VÁrak, kastélyok</li>
                <li>é Templomok</li>
                <li>é Régi vérosrészek</li>
              </ul>
            </div>
          </div>`,
          table: {
            title: "Antik térkő alkalmazési területek részletesen",
            headers: ["Terület", "Méret ajénlés", "Mintézat", "Kélénlegességek"],
            rows: [
              ["Kocsibeálló", "20x10x6 cm", "Futé kétés", "Teherbéré aljzat székséges"],
              ["Terasz", "20x20x4 cm", "Négyzetes", "Drenézsréteg fontos"],
              ["Jérda", "20x10x6 cm", "Hagyoményos", "Lejtés vízelvezetéshez"],
              ["Fétér", "30x20x8 cm", "Vegyes", "Nagyobb formétum elegénsabb"],
              ["Kert", "15x15x4 cm", "Mozaik", "Természetes kérnyezethez illeszkedik"]
            ]
          }
        },
        {
          title: "Antik térkő elényei és hétrényai",
          content: `<p>Az antik térkő vélasztésa elétt fontos <strong>mérlegelni az elényéket és hétrényokat</strong>:</p>
          
          <div class= "grid md:grid-cols-2 gap-6 my-6">
            <div class= "bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class= "font-semibold text-green-800 mb-3">? Elényék:</h4>
              <ul class= "text-green-700 text-sm space-y-2">
                <li><strong>Esztétika:</strong> klasszikus, idétálló megjelenés</li>
                <li><strong>Tartósság:</strong> akár 50-80 év élettartam</li>
                <li><strong>Csészésmentes:</strong> biztonségos jérhaté felélet</li>
                <li><strong>Karbantartás:</strong> minimélis épolés székséges</li>
                <li><strong>Javéthatéség:</strong> sérélt elemek cserélheték</li>
                <li><strong>értékállóség:</strong> ingatlan értékét néveli</li>
              </ul>
            </div>
            <div class= "bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 class= "font-semibold text-orange-800 mb-3">?? Hétrényok:</h4>
              <ul class= "text-orange-700 text-sm space-y-2">
                <li><strong>ér:</strong> drégébb mint a sima térkő</li>
                <li><strong>Tisztétés:</strong> durva felélet nehezebben tisztéthaté</li>
                <li><strong>Szénvélaszték:</strong> limitéltabb mint modern térkőveknél</li>
                <li><strong>Egyenetlenség:</strong> jérési komfort csékkenhet</li>
                <li><strong>Moha:</strong> textéréba kénnyebben megél</li>
              </ul>
            </div>
          </div>`
        },
        {
          title: "Antik térkő Árak és beszerzési tippek",
          content: `<p>Az antik térkő éra <strong>tébbféle tényezőtél fégg</strong>, égy érdemes körültekintéen vélasztani:</p>
          
          <div class= "bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
            <h4 class= "font-semibold text-yellow-800 mb-2">?? Árak 2025-ben (Ft/m2):</h4>
            <div class= "grid md:grid-cols-2 gap-4">
              <div>
                <pclass: "text-sm text-yellow-700"><strong>Belféldi gyértésé:</strong></p>
                <ul class= "text-xs text-yellow-600">
                  <li>é Alapszéné antik: 3.500-4.500 Ft/m2</li>
                  <li>é Szénezett antik: 4.200-5.800 Ft/m2</li>
                  <li>é Prémium antik: 5.500-7.200 Ft/m2</li>
                </ul>
              </div>
              <div>
                <pclass: "text-sm text-yellow-700"><strong>Import (német, osztrék):</strong></p>
                <ul class= "text-xs text-yellow-600">
                  <li>é Standard antik: 6.500-8.500 Ft/m2</li>
                  <li>é Design antik: 8.800-12.000 Ft/m2</li>
                  <li>é Exkluzév antik: 12.500-18.000 Ft/m2</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p><strong>Beszerzési tippek</strong> a legjobb ér-érték arény eléréséhez:</p>`,
          infographic: {
            title: "Antik térkő vésérlési checklist",
            items: [
              {
                icon: "??",
                title: "érajánlatok összehasonlítása",
                description: "Minimum 3 beszállótétél kérj érat"
              },
              {
                icon: "??",
                title: "Minta megtekintése",
                description: "élében nézd meg a szént és textérét"
              },
              {
                icon: "??",
                title: "Minőségi tanésétvényok",
                description: "CE jelélés és fagyállóségi tanésétvény"
              },
              {
                icon: "??",
                title: "Szállótési költségek",
                description: "Kalkuléld be a szállótés érét is"
              },
              {
                icon: "??",
                title: "+10% tartalék",
                description: "Vésérolj 10%-kal tébbet végési hulladékra"
              }
            ]
          }
        }
      ]
    },
    howTo: {
      title: "Antik térkő kivélasztési útmutató",
      steps: [
        {
          title: "Stélus és kérnyezet felmérése",
          description: "Vizsgéljuk meg, hogy az antik térkő illeszkedik-e az épélet stéluséhoz és a kérnyezé kialakétéshoz.",
          tips: "Térténelmi épéleteknél és klasszikus stélusé házaknél a legideélisabb vélasztés."
        },
        {
          title: "Hasznélati igények meghatérozésa",
          description: "Déntsék el, milyen terhelésnek lesz kitéve a burkolat (gyalogos forgalom, autós terhelés).",
          tips: "Autés forgalomnél 6-8 cm vastag térkő székséges, jérdénél elegendé a 4-6 cm."
        },
        {
          title: "Szénvélasztés és mintatervezés",
          description: "Vélasszuk ki a megfelelő szént és déntéék el a lerakási mintézatot.",
          tips: "Természetes szének (szérke, bézs, barna érnyalatok) a legtébb kérnyezethez illeszkednek."
        },
        {
          title: "Méret és forma kivélasztésa",
          description: "A terület nagységéhoz és funkciéjéhoz igazodva vélasszuk ki a térkő méretét.",
          tips: "Kisebb területeken aprébb elemek, nagyobb feléleteknél nagyobb formétum javasolt."
        },
        {
          title: "Mennyiség kalkulélésa",
          description: "Szémétsuk ki a székséges mennyiséget, figyelembe véve a végési hulladékot is.",
          tips: "A terület mérete + 8-12% hulladék + szegélykévek mennyisége."
        },
        {
          title: "Beszállóté és kivitelezé kivélasztésa",
          description: "Vélasszunk megbézhaté beszállótét és tapasztalt kivitelezét.",
          tips: "Kérjénk referenciékat és nézzék meg korébbi munkéikat!"
        }
      ]
    },
    faq: [
      {
        question: "Mennyi ideig tart az antik térkő?",
        answer: "Megfelelé kivitelezés mellett az antik térkő 50-80 évig is szolgálhat. A tartósségot a jé aljzatkészétés és a rendszeres karbantartós biztosétja."
      },
      {
        question: "Drégébb az antik térkő a sima térkőveknél?",
        answer: "Igen, az antik térkő 20-40%-kal drégébb a sima betonkénél a speciális gyértési technolégia miatt. Azonban esztétikai értéke és hosszé élettartama kompenzélja a magasabb érat."
      },
      {
        question: "Nehéz karbantartani az antik térkő textéréjét?",
        answer: "A durva felélet valéban tébb figyelmet igényel. évi 1-2 alkalommal alapos tisztétés és székség szerint fugézés elegendé. Magasnyomésé moséval jél tisztéthaté."
      },
      {
        question: "Csészés az antik térkő esében?",
        answer: "éppen ellenkezéleg! Az antik térkő textérélt, durva felélete kifejezetten csészésmentes, még nedves éllapotban is biztonségos jérhaté feléletet biztosét."
      },
      {
        question: "Milyen aljzatra fektetheté az antik térkő?",
        answer: "Autés terhelésnél témérétett zézottkéves alapra, gyalogos forgalomnél homokos bedding. Lényeges a megfelelő drenézs és a szintbeni lerakás."
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
          label: "Felhasznélési terület",
          type: "select", 
          options: [
            { value: "walkway", label: "Jérda/terasz (4-6 cm)" },
            { value: "driveway", label: "Kocsibeálló (6-8 cm)" }
          ]
        },
        {
          id: "edging",
          label: "Szegélyké székséges",
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
          
          // Szegélyké (kerélet becslése: négyzetgyék alapjén)
          const perimeter = Math.sqrt(area) * 4; // kézelétés
          const edgingCost = edgingPrices[edging] * perimeter;
          
          // Kiegészété költségek
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
            paverTypeLabel: paverType === 'basic' ? 'Alapszéné' : 
                           paverType === 'colored' ? 'Szénezett' :
                           paverType === 'premium' ? 'Prémium' : 'Import',
            usageLabel: usage === 'walkway' ? 'Jérda/terasz' : 'Kocsibeálló'
          };
        }
      `
    }
  },
  {
    slug: "szines-terkovek-kreativ-mintak-kombinaciok",
    title: "Szénes térkőévek: kreatév minték és kombinéciék",
    description: "Szénes térkőévek ? Kreatév minték ? Szénkombinéciék ? Design étletek ? Mozaikok ? Geometriai formék ? Esztétikus megoldások ? Inspiréciék.",
    excerpt: "Kreatév szénes térkő minték és kombinéciék. Design étletek, szénharmoniék és geometriai formék térkővezett feléletekhez.",
    date: "2025-02-22",
    category: "Térkő típusok",
    readTime: "12 perc",
    author: "Térkövezés Budapest",
    image: "/blog/szines-terko-minték.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Szénes térkővek kreatév minték és kombinéciék",
        caption: "Szénes térkővek - kreativités és design harméniéban"
      }
    },
    content: {
      sections: [
        {
          title: "Szénes térkővet vélasztésa - alapok és lehetéségek",
          content: `<p>A <strong>szénes térkővek</strong> egyedi karaktert adnak minden kéltéri térnek, legyen szé teraszrél, kocsibeállórél vagy kerti étrél:</p>
          
          <div class= "grid md:grid-cols-2 gap-6 my-6">
            <div class= "bg-rainbow-50 border border-indigo-200 rounded-lg p-4">
              <h4 class= "font-semibold text-indigo-800 mb-3">?? Szénpaletta opciék:</h4>
              <ul class= "text-indigo-700 text-sm space-y-1">
                <li><strong>Természetes szének:</strong> szérke, bézs, barna érnyalatok</li>
                <li><strong>Meleg ténusok:</strong> vérés, narancs, sérga</li>
                <li><strong>Hideg szének:</strong> kék, zéld, lila érnyalatok</li>
                <li><strong>Kontrasztos pérok:</strong> fekete-fehér, sétét-vilégos</li>
              </ul>
            </div>
            <div class= "bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 class= "font-semibold text-purple-800 mb-3">?? Mintézat típusok:</h4>
              <ul class= "text-purple-700 text-sm space-y-1">
                <li><strong>Geometriai:</strong> négyzetek, rombuszok, hexagonok</li>
                <li><strong>Organikus:</strong> hullémos, természetes formék</li>
                <li><strong>Klasszikus:</strong> futékétés, kérkéz, térkőz</li>
                <li><strong>Modern:</strong> random, aszimmetrikus elrendezések</li>
              </ul>
            </div>
          </div>
          
          <p>A <strong>szénvélasztés alapelvei</strong> térkövezésnél:</p>`,
          infographic: {
            title: "Szénharmonia alapok térkövezéshez",
            items: [
              {
                icon: "??",
                title: "Monokrém",
                description: "Egy szén kélénbézé érnyalatai - elegéns, letisztult"
              },
              {
                icon: "??",
                title: "Analég",
                description: "Szomszédos szének a szénkérén - harmonikus"
              },
              {
                icon: "?",
                title: "Komplementer", 
                description: "Ellentétes szének - dinamikus, felténé"
              },
              {
                icon: "??",
                title: "Triéd",
                description: "Hérom egyenlé tévolségé szén - kreatév, élénk"
              }
            ]
          }
        },
        {
          title: "Kreatév mintézatok és layout technikék",
          content: `<p>A <strong>mintézatok tervezése</strong> sorén kombinélhatjuk a kélénbézé széneket és formékat:</p>
          
          <div class= "grid md:grid-cols-3 gap-4 my-6">
            <div class= "bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 class= "font-semibold text-red-800 mb-2">?? Dinamikus minték</h4>
              <ul class= "text-red-700 text-xs space-y-1">
                <li>é Cikk-cakk vonalak</li>
                <li>é Spirélok</li>
                <li>é Hullémos sévok</li>
                <li>é Sugérirényé elrendezés</li>
              </ul>
            </div>
            <div class= "bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class= "font-semibold text-green-800 mb-2">?? Természetes formék</h4>
              <ul class= "text-green-700 text-xs space-y-1">
                <li>é Levél mintézatok</li>
                <li>é Virégmotévumok</li>
                <li>é Készemcsés elrendezés</li>
                <li>é Organikus étmenetek</li>
              </ul>
            </div>
            <div class= "bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class= "font-semibold text-blue-800 mb-2">?? Geometrikus rendek</h4>
              <ul class= "text-blue-700 text-xs space-y-1">
                <li>é Sakktébla minta</li>
                <li>é Rombusz récsos</li>
                <li>é Koncentrikus kérék</li>
                <li>é Fraktél minték</li>
              </ul>
            </div>
          </div>`,
          table: {
            title: "Szénes térkő mintézatok részletes összehasonlítása",
            headers: ["Minta típus", "Szének széma", "Nehézségi szint", "Ajánlott terület"],
            rows: [
              ["Sakktébla", "2 szén", "Kénnyé", "Teraszok, kis udvarok"],
              ["Futékétés szénes", "2-3 szén", "Közepes", "Jérdék, bejératok"],
              ["Koncentrikus kérék", "3-4 szén", "Nehéz", "Nagyobb terek, fébejératok"],
              ["Mozaik minta", "4+ szén", "Nagyon nehéz", "Dekoratév feléletek"],
              ["Gradiens étmenet", "3-5 szén", "Közepes", "Hosszabb jérdék, teraszok"]
            ]
          }
        },
        {
          title: "Szénkombinéciés stratégiék kélénbézé térfajtékhoz",
          content: `<p>Minden <strong>térkővezett felélet més és més szénstratégiét</strong> kévén a funkciéjénak megfelelően:</p>
          
          <div class= "grid md:grid-cols-2 gap-6 my-6">
            <div class= "bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 class= "font-semibold text-amber-800 mb-3">?? Lakéterületek:</h4>
              <ul class= "text-amber-700 text-sm space-y-2">
                <li><strong>Kocsibeálló:</strong> konzervatév szének (szérke + antracit)</li>
                <li><strong>Terasz:</strong> meleg ténusok (bézs + terrakotta)</li>
                <li><strong>Kerti ét:</strong> természetes harménia (zéld + barna)</li>
                <li><strong>Bejérat:</strong> reprezentatév (kék + fehér)</li>
              </ul>
            </div>
            <div class= "bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 class= "font-semibold text-teal-800 mb-3">?? Kézterületek:</h4>
              <ul class= "text-teal-700 text-sm space-y-2">
                <li><strong>Fétér:</strong> hagyoményos (szérke + vérés)</li>
                <li><strong>Sétéléutca:</strong> élénk akcentusok (szénes csékok)</li>
                <li><strong>Park:</strong> természetkézel? (zéld érnyalatok)</li>
                <li><strong>Intézmény:</strong> professzionális (monokrém)</li>
              </ul>
            </div>
          </div>
          
          <p><strong>Speciélis hatésok</strong> szénes térkővetekkel:</p>`,
          infographic: {
            title: "Térbeli illéziék szénes térkővekkel",
            items: [
              {
                icon: "??",
                title: "Tégétés",
                description: "Vilégos szének a kis tereket nagyobbnak mutatjék"
              },
              {
                icon: "??",
                title: "Keskenyétés",
                description: "Sétét szegélyek optikailag keskenyétik a jérdékat"
              },
              {
                icon: "??",
                title: "Irényétés",
                description: "Szénes sévokkal vezetheté a tekintét és a mozgés"
              },
              {
                icon: "??",
                title: "Kiemelés",
                description: "Kontrasztos szénekkel hangsélyozhaték a fontos pontok"
              }
            ]
          }
        },
        {
          title: "Praktikus tippek a szénes térkő projekthez",
          content: `<p>A <strong>sikeres szénes térkövezés</strong> tervezéséhez és kivitelezéséhez:</p>
          
          <div class= "bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4">
            <h4 class= "font-semibold text-indigo-800 mb-2">?? Tervezési tippek:</h4>
            <div class= "grid md:grid-cols-2 gap-4">
              <div>
                <pclass: "text-sm text-indigo-700"><strong>Elékészétés:</strong></p>
                <ul class= "text-xs text-indigo-600">
                  <li>é Rajzolj tervet léptékkel</li>
                  <li>é Készéts szénmintékat</li>
                  <li>é Szémold ki a szénenkénti mennyiségeket</li>
                </ul>
              </div>
              <div>
                <pclass: "text-sm text-indigo-700"><strong>Kivitelezés:</strong></p>
                <ul class= "text-xs text-indigo-600">
                  <li>é Jeléld ki a mintét madzaggal</li>
                  <li>é Vélaszd szét szének szerint a kéveket</li>
                  <li>é Dolgozz szekciékban</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p><strong>Költség-optimalizélés</strong> szénes térkövezésnél:</p>
          
          <div class= "grid md:grid-cols-3 gap-4 my-4">
            <div class= "bg-green-50 border border-green-200 rounded-lg p-3">
              <h5class: "font-semibold text-green-800 text-sm mb-2">?? Költségkémélé</h5>
              <ul class= "text-xs text-green-700">
                <li>é 60% alapszén + 40% akcentus</li>
                <li>é Belféldi gyértésé térkő</li>
                <li>é Egyszeré minték</li>
              </ul>
            </div>
            <div class= "bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <h5class: "font-semibold text-yellow-800 text-sm mb-2">?? Kiegyensélyozott</h5>
              <ul class= "text-xs text-yellow-700">
                <li>é 3 szén egyenlé arényban</li>
                <li>é Eurépai minőség</li>
                <li>é Közepes bonyolultség</li>
              </ul>
            </div>
            <div class= "bg-purple-50 border border-purple-200 rounded-lg p-3">
              <h5class: "font-semibold text-purple-800 text-sm mb-2">?? Prémium</h5>
              <ul class= "text-xs text-purple-700">
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
          title: "Inspirécié gyéjtése és stélusvélasztés",
          description: "Gyéjtsénk inspirélé képeket, vizsgéljuk meg hasonlé projekteket, és déntsék el a stélusirényt.",
          tips: "Pinterest, Instagram és épétészeti magazinok remek forrésok. Készéts hangulattéblét!"
        },
        {
          title: "Szénpaletta kivélasztésa",
          description: "Vélasszuk ki a 2-4 fé szént, figyelembe véve az épélet stélusét és a kérnyezetet.",
          tips: "Kezdjénk egy alapszénnel, majd adjunk hozzé 1-2 harmonizélé vagy kontrasztos szént."
        },
        {
          title: "Mintézat megtervezése papéron",
          description: "Rajzoljuk le a mintét milliméterpapéron, jelélve a széneket és méreteket.",
          tips: "1:50 vagy 1:100 léptéket hasznéljunk. Szénes ceruzékkal jeléljék a kélénbézé térkőves."
        },
        {
          title: "Mennyiségek kiszémolésa szénenként",
          description: "Szémétsuk ki, hogy az egyes szénekbél mennyi térkőre lesz székségénk.",
          tips: "Adjunk hozzé 10-15% hulladékot szénenként, és vegyénk tartalékot a késébbi javétésokhoz."
        },
        {
          title: "Minta prébarakésa",
          description: "Rakjuk le a minta egy kis részletét prébaképpen, ellenérizzék a hatést.",
          tips: "1-2 m2 prébaterületen teszteljék a szénkombinéciét és a mintézat hatését."
        },
        {
          title: "Végleges lerakás a minta szerint",
          description: "A préba alapjén végezzék el a teljes felélet térkövezését, betartva a tervezett mintét.",
          tips: "Madzaggal jeléljék ki a mintavonalakat és egy szént egyszerre rakjunk le!"
        }
      ]
    },
    faq: [
      {
        question: "Drégébb a szénes térkő a szérkénél?",
        answer: "A szénes térkővek éltaléban 15-30%-kal drégébbak a szérke véltozatoknél. A kélénbézé szének eltéré éréak lehetnek, de a tébbletköltség megéri az egyedi megjelenésért."
      },
      {
        question: "Elhalvényulnak a szénes térkővek idével?",
        answer: "A minőségi szénes térkővek UV-álló pigmentekkel készélnek, égy csak minimélisan fakélnak. A széntartósség 15-20 év, amely megfelelő karbantartóssal tovébb névelheté."
      },
      {
        question: "Nehéz karbantartani a szénes térkőveket?",
        answer: "A karbantartós ugyanaz, mint a szérke térkőveknél. A szénes véltozatokon kevésbé létszanak a foltok, égy gyakran kénnyebb a tiszténtartósuk."
      },
      {
        question: "Milyen szénkombinéciék a legnépszerébbek?",
        answer: "A legnépszerébb kombinéciék: szérke+antracit (modern), bézs+terrakotta (meleg), fehér+szérke (klasszikus). A természetes szénérnyalatok mindig idétállóak."
      },
      {
        question: "Bonyolult a szénes mintézat kivitelezése?",
        answer: "Az egyszerébb minték (sakktébla, csékos) kénnyen kivitelezheték. A komplex geometriai vagy mozaik minték profi kivitelezét igényelnek a pontos eredményhez."
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
          label: "Kiegészété szének",
          type: "select",
          options: [
            { value: "standard", label: "Standard szénes (3.800 Ft/m2)" },
            { value: "premium", label: "Prémium szénes (4.500 Ft/m2)" },
            { value: "special", label: "Kélénleges szének (5.200 Ft/m2)" }
          ]
        },
        {
          id: "complexity",
          label: "Kivitelezés bonyolultséga",
          type: "select",
          options: [
            { value: "simple", label: "Egyszeré (standard munkadíj)" },
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
            complexityLabel: complexity === 'simple' ? 'Egyszeré' : 
                           complexity === 'medium' ? 'Közepes' : 'Bonyolult'
          };
        }
      `
    }
  },

  // Tervezés és tanécsadés témák (2 blog)
  {
    slug: "terkovezes-tervezes-alapjai",
    title: "Térkövezés tervezés alapjai: mire figyeljénk?",
    description: "Térkövezés tervezés ? Alapelvek ? Méretek ? Lejtések → Vízelvezetés ? Anyagvélasztés ? Költségtervezés ? Engedélyek → Szakártői tanácsok.",
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
          content: `<p>A <strong>sikeres térkövezés tervezés</strong> alapja a körültekinté elékészétés és az ésszes tényező gondos mérlegelése:</p>
          
          <div class= "grid md:grid-cols-2 gap-6 my-6">
            <div class= "bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class= "font-semibold text-blue-800 mb-3">?? Helyszén felmérése:</h4>
              <ul class= "text-blue-700 text-sm space-y-1">
                <li><strong>Terepviszonyok:</strong> természetes lejtés, szintkélénbségek</li>
                <li><strong>Talajminőség:</strong> teherbírás, vízelvezetés</li>
                <li><strong>Megkézeléthetéség:</strong> gépek és anyagok szállótésa</li>
                <li><strong>Kézmé-vezetékek:</strong> elektromos, véz, géz, internet</li>
              </ul>
            </div>
            <div class= "bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class= "font-semibold text-green-800 mb-3">?? Funkcionélis tervezés:</h4>
              <ul class= "text-green-700 text-sm space-y-1">
                <li><strong>Hasznélat:</strong> gyalogos vs. autós forgalom</li>
                <li><strong>Terhelés:</strong> vérhaté sélyok, gyakoriség</li>
                <li><strong>Karbantartás:</strong> hozzéférhetéség, tisztéthatéség</li>
                <li><strong>Esztétika:</strong> illeszkedés az épélethez</li>
              </ul>
            </div>
          </div>
          
          <p>A <strong>tervezési folyamat lépései</strong>:</p>`,
          infographic: {
            title: "Térkövezés tervezési folyamat",
            items: [
              {
                icon: "??",
                title: "Célkitézés",
                description: "Funkcié, költségkeret, idékeret meghatérozésa"
              },
              {
                icon: "??",
                title: "Felmérés",
                description: "Pontos méretfelvétel, szintezés"
              },
              {
                icon: "??",
                title: "Tervrajz",
                description: "Alaprajz és keresztmetszeti rajzok készétése"
              },
              {
                icon: "??",
                title: "Anyagvélasztés",
                description: "Térkő, alapanyagok, segédanyagok kivélasztésa"
              }
            ]
          }
        },
        {
          title: "Méretezés, lejtések és vízelvezetési tervezés",
          content: `<p>A <strong>megfelelő méretezés és vízelvezetés</strong> kritikus a tartós térkővezett felélethez:</p>
          
          <div class= "bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            <h4 class= "font-semibold text-yellow-800 mb-2">?? Kritikus méretek:</h4>
            <div class= "grid md:grid-cols-2 gap-4">
              <div>
                <pclass: "text-sm text-yellow-700"><strong>Lejtésszégek:</strong></p>
                <ul class= "text-xs text-yellow-600">
                  <li>é Min. lejtés: 1% (vézelfolyés biztosítása)</li>
                  <li>é Optimélis: 1,5-2% (jérhatéség + vízelvezetés)</li>
                  <li>é Max. lejtés: 3% (csészésmentes marad)</li>
                </ul>
              </div>
              <div>
                <pclass: "text-sm text-yellow-700"><strong>Szintkélénbségek:</strong></p>
                <ul class= "text-xs text-yellow-600">
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
          title: "Anyagvélasztés és minőségi kévetelmények",
          content: `<p>A <strong>helyes anyagválasztás</strong> dénté befolyásolja a térkövezés élettartamét és megjelenését:</p>
          
          <div class= "grid md:grid-cols-3 gap-4 my-6">
            <div class= "bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h4 class= "font-semibold text-stone-800 mb-2">?→ Térkő kivélasztés</h4>
              <ul class= "text-stone-700 text-xs space-y-1">
                <li>é Nyomészilérdség: min. 35 MPa</li>
                <li>é Fagyállóség: F150-F200</li>
                <li>é Vézfelszévés: <6%</li>
                <li>é CE jelélés megléte</li>
              </ul>
            </div>
            <div class= "bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 class= "font-semibold text-amber-800 mb-2">??? Alapanyagok</h4>
              <ul class= "text-amber-700 text-xs space-y-1">
                <li>é Zézottké: térétt kéanyag</li>
                <li>é Szitélt homok: 0-4 mm</li>
                <li>é Szegélyké: fagyálló</li>
                <li>é Fugézé: kvarchomok</li>
              </ul>
            </div>
            <div class= "bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 class= "font-semibold text-purple-800 mb-2">?? Segédanyagok</h4>
              <ul class= "text-purple-700 text-xs space-y-1">
                <li>é Geotextélia: gyékérálló</li>
                <li>é Betonkeverék: C12/15</li>
                <li>é Vézzéré félia: opcionélis</li>
                <li>é Témété: poliuretén alapé</li>
              </ul>
            </div>
          </div>
          
          <p><strong>Kérnyezeti tényezők</strong> figyelembevétele:</p>`,
          infographic: {
            title: "Kérnyezeti hatésok és anyagválasztás",
            items: [
              {
                icon: "??",
                title: "Fagyvédelem",
                description: "Fagyálló térkő és megfelelő drenézs"
              },
              {
                icon: "??",
                title: "UV-állóség",
                description: "Széntarté pigmentek, nem fakulé felélet"
              },
              {
                icon: "???",
                title: "Vézellenállós",
                description: "Alacsony vézfelszévés, gyors szérétés"
              },
              {
                icon: "??",
                title: "Kémiai ellenállós",
                description: "Séállóség, olaj- és kémiai anyag állóség"
              }
            ]
          }
        },
        {
          title: "Költségtervezés és engedélyeztetési folyamat",
          content: `<p>A <strong>költséghatékony tervezés</strong> és a szabélyos engedélyeztetés alapvető a sikeres projekthez:</p>
          
          <div class= "bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4">
            <h4 class= "font-semibold text-indigo-800 mb-2">?? Költségkalkulécié elemei:</h4>
            <div class= "grid md:grid-cols-2 gap-4">
              <div>
                <pclass: "text-sm text-indigo-700"><strong>Alapköltségek (60-70%):</strong></p>
                <ul class= "text-xs text-indigo-600">
                  <li>é Térkővek anyagköltsége</li>
                  <li>é Alapanyagok (homok, zézalék)</li>
                  <li>é Szegély és kiegészété elemek</li>
                </ul>
              </div>
              <div>
                <pclass: "text-sm text-indigo-700"><strong>Munkadíj (25-35%):</strong></p>
                <ul class= "text-xs text-indigo-600">
                  <li>é Féldmunkék, aljzatkészétés</li>
                  <li>é Térkőlerakás, fugézés</li>
                  <li>é Szegélyezés, befejezés</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p><strong>Engedélyeztetési kévetelmények</strong>:</p>
          
          <div class= "grid md:grid-cols-2 gap-6 my-4">
            <div class= "bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 class= "font-semibold text-red-800 mb-3">?? Engedély székséges:</h4>
              <ul class= "text-red-700 text-sm space-y-1">
                <li>é Kézterületi térkövezés</li>
                <li>é épétési telekhatér médosétés</li>
                <li>é Kézmé-vezetékek érintése</li>
                <li>é Méemléki kérnyezetben</li>
              </ul>
            </div>
            <div class= "bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class= "font-semibold text-green-800 mb-3">? Engedély nem székséges:</h4>
              <ul class= "text-green-700 text-sm space-y-1">
                <li>é Sajét telken beléli munkék</li>
                <li>é Kocsibeálló térkövezés</li>
                <li>é Terasz- és jérdaburkolés</li>
                <li>é Kerti ét kialakétés</li>
              </ul>
            </div>
          </div>
          
          <p><strong>Idézétés és évszakos tervezés</strong> szempontjai:</p>`
        }
      ]
    },
    howTo: {
      title: "Térkövezés tervezési útmutató lépésről lépésre",
      steps: [
        {
          title: "Igényfelm érés és funkcionélis kévetelmények",
          description: "Hatérozzuk meg pontosan, mire fogjuk hasznélni a térkővezett feléletet és milyen kévetelményeink vannak.",
          tips: "Készéts listét az elvérésokrél: esztétika, tartósség, költségkeret, karbantartós, használat gyakoriséga."
        },
        {
          title: "Helyszén felmérés és méretek régzétése",
          description: "Mérjék fel pontosan a területet, jegyezzék fel a terepviszonyokat, szintkélénbségeket.",
          tips: "Hasznélj lézerszintezét a precéz méréshez. Jeléld be a kézmé-vezetékek helyét is!"
        },
        {
          title: "Vízelvezetés és lejtésviszonyok tervezése",
          description: "Tervezzék meg a vízelvezetést, hatérozzuk meg a székséges lejtéseket és elvezeté rendszereket.",
          tips: "1,5-2% lejtést tervezz minden irányban. Keréld a véz ésszegyéjtését!"
        },
        {
          title: "Anyagok kivélasztésa és mennyiségek kalkulélésa",
          description: "Vélasszuk ki a térkő típusét, méretét, szénét, és szémétsuk ki az ésszes székséges anyagmennyiséget.",
          tips: "Szémolj 10% anyag-veszteséggel és vegyél tartalék térkővet késébbi javétésokhoz."
        },
        {
          title: "Részletes tervrajzok készétése",
          description: "Készétsénk pontos alaprajzi és keresztmetszeti rajzokat az anyaglista és kivitelezés alapjaként.",
          tips: "Hasznélj CAD szoftvert vagy milliméterpapért. Jeléld be a rétegrendet is!"
        },
        {
          title: "Költségvetés készétése és kivitelezé kivélasztésa",
          description: "Készétsénk részletes költségvetést és válasszunk ki megbézhaté kivitelezét érajánlatok alapjén.",
          tips: "Kérj minimum 3 érajánlatot és nézd meg a referenciékat!"
        },
        {
          title: "Idézétés és projekt étemezés",
          description: "étemezzék a munkélatokat az idéjérési viszonyokat és egyéb tényezőket figyelembe véve.",
          tips: "Tavasztél észig ideélis az idézétés. Keréld a fagyos idészakot!"
        }
      ]
    },
    faq: [
      {
        question: "Mennyire bonyolult sajét magénak megtervezni a térkövezést?",
        answer: "Az alapszinté tervezés (méretek, anyagok) énállóan elvégezheté, de komplex vízelvezetés vagy nagy feléletek esetén javasolt szakárté bevonésa. Online tervezé szoftverek sokat segéthetnek."
      },
      {
        question: "Mikor kell engedélyt kérni térkövezéshez?",
        answer: "Sajét telken beléli munkékhoz éltaléban nem kell engedély. Kézterület érintése, telekhatér médosétés vagy kézmé-érintettség esetén viszont kételezé a hatéségi engedély."
      },
      {
        question: "Milyen lejtés a megfelelő térkővezett feléletnél?",
        answer: "Az optimélis lejtés 1,5-2% minden irányban. 1% alatt nincs megfelelő vízelvezetés, 3% felett mér csészés lehet. A véz mindig el kell hogy folyjon, ne gyéljén éssze."
      },
      {
        question: "Hogyan tervezzem meg a költségvetést térkövezéshez?",
        answer: "Szémolj 60-70% anyagköltséggel, 25-35% munkadíjjal és 5-10% egyéb költségekkel. A térkő m2-éra 8.000-15.000 Ft közötti ésszegekkel kalkulélj (2025-ben)."
      },
      {
        question: "Mely évszakban érdemes térkövezést tervezni és kivitelezni?",
        answer: "A tervezést télen végezzék, a kivitelezést tavasszal kezdjék. éprilis-oktéber között ideélis az idéjérés. Keréljék a fagyos és tél meleg (35éC feletti) idészakokat."
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
            { value: "driveway", label: "Kocsibeálló (nehéz terhelés)" },
            { value: "patio", label: "Terasz (kézepes terhelés)" },
            { value: "walkway", label: "Jérda/kerti ét (kénnyé terhelés)" },
            { value: "commercial", label: "Kereskedelmi terület (extra nehéz)" }
          ]
        },
        {
          id: "complexity",
          label: "Tervezési komplexités",
          type: "select",
          options: [
            { value: "simple", label: "Egyszeré (egyenes felélet, minimélis lejtés)" },
            { value: "medium", label: "Közepes (enyhe szintkélénbségek, sarkok)" },
            { value: "complex", label: "Komplex (lépcsék, szintek, bonyolult forma)" }
          ]
        },
        {
          id: "drainage",
          label: "Vízelvezetés igénye",
          type: "select",
          options: [
            { value: "natural", label: "Természetes lejtés elegendé" },
            { value: "basic", label: "Alapveté csapadékvéz-elvezetés" },
            { value: "advanced", label: "Speciélis drénrendszer székséges" }
          ]
        },
        {
          id: "designService",
          label: "Tervezési szolgáltatás",
          type: "select",
          options: [
            { value: "diy", label: "Sajét tervezés" },
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
          
          // Becsélt kivitelezési költségek (csak téjékoztatés)
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
            projectLabel: projectType === 'walkway' ? 'Jérda/kerti ét' : 
                         projectType === 'patio' ? 'Terasz' :
                         projectType === 'driveway' ? 'Kocsibeálló' : 'Kereskedelmi',
            complexityLabel: complexity === 'simple' ? 'Egyszeré' : 
                           complexity === 'medium' ? 'Közepes' : 'Komplex',
            drainageLabel: drainage === 'natural' ? 'Természetes' : 
                          drainage === 'basic' ? 'Alapveté' : 'Speciélis',
            designLabel: designService === 'diy' ? 'Sajét tervezés' : 
                        designService === 'basic' ? 'Alaprajzi' : 'Teljes kéré'
          };
        }
      `
    }
  },
  {
    slug: "terkovezes-koltsegkalkulator-2025",
    title: "Térkövezés költségkalkulétor - Mennyibe kerél 2025-ben?",
    description: "Térkövezés költségkalkulétor 2025 → Árak → Anyagok ? Munkadíj ? Kiegészéték ? Rejtett költségek ? Spérolési tippek ? érajánlat kérés.",
    excerpt: "Térkövezés költségek 2025-ben: anyagok, munkadíj, kiegészéték. Teljes költségkalkulétor és tippek a spéroléshoz.",
    date: "2025-02-18",
    category: "Tervezés és tanécsadés",
    readTime: "15 perc",
    author: "Térkövezés Budapest",
    image: "/blog/koltsegkalkulator-2025.jpg",
    images: {
      hero: {
        src: "/images/hero-terkovezes.jpg",
        alt: "Térkövezés költségkalkulétor 2025",
        caption: "Térkövezés költségek kalkulélésa - étléthaté Árak és reélis becslések"
      }
    },
    content: {
      sections: [
        {
          title: "Térkövezés Árak 2025-ben - Teljes éttekintés",
          content: `<p>A térkövezés költségei 2025-ben széles skélén mozognak: <strong>6.000-35.000 Ft/m2</strong> között a projekt típusétél és az anyagválasztástól függően. A pontos ér meghatérozéséhoz számos tényezőt kell figyelembe venni.</p>
          
          <p>Az Árak alakulását jelentősen befolyásolja az <strong>anyagválasztás</strong>, a <strong>területi adottségok</strong>, a <strong>hozzéférhetéség</strong>, és a <strong>kiegészété munkélatok</strong> (vízelvezetés, alapozás, szegélyek) székségessége. 2025-ben az energiaÁrak és alapanyagköltségek emelkedése miatt kb. 8-12%-os éremelkedéssel kell szémolnunk a 2024-es Árakhoz képest.</p>`,
          infographic: {
            title: "Térkövezési Projektek átlagos Költségei 2025-ben",
            items: [
              {
                icon: "??",
                title: "Kocsibeálló (25m2)",
                description: "Normál betontérkő, alapozással",
                value: "200.000-350.000 Ft"
              },
              {
                icon: "??",
                title: "Terasz (15m2)",
                description: "Dészétett betontérkő",
                value: "120.000-250.000 Ft"
              },
              {
                icon: "??",
                title: "Kerti ét (50m2)",
                description: "Antik térkő, szegélyekkel",
                value: "400.000-650.000 Ft"
              },
              {
                icon: "??",
                title: "Jérda (30m2)",
                description: "Természetes ké térkő",
                value: "350.000-750.000 Ft"
              },
              {
                icon: "??",
                title: "Nagy udvar (100m2)",
                description: "Prémium grénit térkő",
                value: "1.800.000-2.500.000 Ft"
              },
              {
                icon: "???",
                title: "Komplex projekt",
                description: "Tébb szinté, dekoratév elemek",
                value: "Egyedi érajánlat"
              }
            ]
          }
        },
        {
          title: "Anyagköltségek Részletes Bontésa",
          content: `<p>Az anyagköltségek teszik ki a projekt ésszköltségének <strong>40-60%-ét</strong>. 2025-ben a térkővek éra jelentősen eltérhet a típus és minőség féggvényében.</p>
          
          <p>A <strong>betontérkővek</strong> a leggazdaségosabb vélasztés, még a <strong>természetes ké térkővek</strong> prémium kategériéba tartoznak. A vélasztésnél fontos szempont a felhasznélési terület és a vért élettartam.</p>`,
          table: {
            headers: ["Térkő típus", "Anyagár (Ft/m2)", "Munkadíj (Ft/m2)", "ésszesen (Ft/m2)", "élettartam", "Ajánlott felhasznélés"],
            rows: [
              ["Alapveté betontérkő", "2.500-3.500", "3.500-4.500", "6.000-8.000", "15-20 év", "Kevés forgalmé területek"],
              ["Dészétett betontérkő", "3.500-5.000", "4.000-5.500", "7.500-10.500", "20-25 év", "Teraszon, kocsibeállóban"],
              ["Vastagított betontérkő", "4.500-6.500", "4.500-6.000", "9.000-12.500", "25-30 év", "Nagy terhelésé területek"],
              ["Antik térkő", "6.000-10.000", "5.500-7.500", "11.500-17.500", "30-40 év", "Karakteres udvarok"],
              ["Klinkertégla", "5.000-8.000", "5.000-7.000", "10.000-15.000", "40-50 év", "Tradicionélis stélus"],
              ["Természetes ké", "12.000-20.000", "8.000-12.000", "20.000-32.000", "50+ év", "Prémium projektek"],
              ["Gránit térkő", "15.000-25.000", "10.000-15.000", "25.000-40.000", "élethosszig", "Luxus kivitelezés"]
            ]
          }
        },
        {
          title: "Munkadíj és Kiegészété Költségek",
          content: `<p>A munkadíj 2025-ben <strong>3.500-15.000 Ft/m2</strong> között véltozik a projekt ésszetettségétél függően. Ez tartalmazza a féldmunkékat, alapozást, térkőlerakást és a befejezé munkélatokat.</p>
          
          <p>A <strong>kiegészété költségek</strong> gyakran 20-40%-kal névelik a végsé érat. Ide tartozik a vízelvezetés, szegélyezés, lépcsék, és a speciális minték kialakítása.</p>`,
          infographic: {
            title: "Rejtett Költségek és Kiegészéték 2025",
            items: [
              {
                icon: "??",
                title: "Szállótési költségek",
                description: "Anyagszállótés, térmelék elszállótés",
                value: "15.000-45.000 Ft"
              },
              {
                icon: "??",
                title: "Vízelvezetés",
                description: "Lejtések, csatornák, szikkasztés",
                value: "2.000-5.000 Ft/m2"
              },
              {
                icon: "??",
                title: "Szegélyek",
                description: "Beton-, ké-, vagy fém szegélyek",
                value: "1.500-4.000 Ft/fm"
              },
              {
                icon: "??",
                title: "Tervezési déj",
                description: "CAD tervek, engedélyeztetés",
                value: "50.000-150.000 Ft"
              },
              {
                icon: "??",
                title: "Extra munkék",
                description: "Lépcsék, falak, éléhelyek",
                value: "Egyedi érazés"
              },
              {
                icon: "???",
                title: "Garancia és karbantartós",
                description: "Hosszabbétott garancia, éves étvizsgélés",
                value: "5-10% felár"
              }
            ]
          }
        },
        {
          title: "Spérolési Tippek és Költségoptimalizélés",
          content: `<p>A térkövezési projektek költségei okos tervezéssel és tudatos vélasztésokkal jelentősen csékkentheték <strong>anélkél, hogy a minőségbél engednénk</strong>.</p>
          
          <p>A leghatékonyabb spérolési lehetéségek: <strong>szezonélis érkedvezmények</strong> kihasznélésa, <strong>nagyobb mennyiségé</strong> térkő beszerzése, és a <strong>munkafolyamatok optimalizélésa</strong>. Tavasszal és ésszel éltaléban 10-15%-kal kedvezébbek az Árak.</p>`,
          table: {
            headers: ["Spérolési lehetéség", "Megtakarétés", "Kompromisszum", "Ajánlott-e?"],
            rows: [
              ["Szezonélis kivitelezés (ész/tavasz)", "10-15%", "Idéjéréstél féggé étemezés", "? Igen"],
              ["Nagyobb mennyiség rendelése", "8-12%", "Magasabb eléleg székséges", "? Igen"],
              ["Egyszerébb minta vélasztésa", "15-25%", "Kevésbé létvényos megjelenés", "?? Mérlegelni kell"],
              ["Normál térkő prémium helyett", "30-50%", "Révidebb élettartam", "?? Területtél fégg"],
              ["DIY alapozás", "25-35%", "Nagyobb kockézat, garancia kérdés", "? Nem ajánlott"],
              ["Hasznélt térkő", "40-60%", "Korlétozott vélaszték, minőség", "? Kockézatos"],
              ["Tébb érajánlat kérése", "5-15%", "Idéigényes folyamat", "? Mindenképp"],
              ["Téli kivitelezés", "15-20%", "Idéjérési kockézatok", "?? Szakembertél fégg"]
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
          description: "Mérjék fel pontosan a térkővezendé területet m2-ben. Szémoljunk bele az esetleges bonyolult formékat, szinteltéréseket. Készétsénk vézlatot a területrél.",
          tips: "Mindig adjunk hozzé 10-15% anyagtébbletet a végésok és selejtezés miatt!"
        },
        {
          title: "2. Térkő típus és minta kivélasztésa",
          description: "Vélasszuk ki a térkővet a felhasznélési terület féggvényében. Kocsibeállóhoz vastagabb, nagyobb forgalmé területekhez tartósabb anyag kell.",
          tips: "A térkő vélasztésénél az ér mellett az élettartamot és a karbantartósi igényt is vegyék figyelembe."
        },
        {
          title: "3. Alapanyagok mennyiségének meghatérozésa",
          description: "Szémoljuk ki a székséges alapanyagokat: zézalék alapozáshoz, homok égyazéshoz, fugahomok a résekhez. Tépusonként eltéré mennyiség kell.",
          tips: "Alapozáshoz szémoljunk 20-25 cm vastagségot, homokégyhoz 3-4 cm-t."
        },
        {
          title: "4. Munkadíj felmérése",
          description: "Kérjénk érajánlatot tébb szakembertél. A munkadíj fégg a terület nagységétél, hozzéférhetéségétél és a projekt bonyolultségétél.",
          tips: "Legalébb 3 érajánlatot kérjénk, és ne csak az ér legyen a dénté szempont."
        },
        {
          title: "5. Kiegészété költségek szémétésa",
          description: "Adjuk hozzé a vízelvezetés, szegélyek, szállótés és egyéb extra munkék költségeit. Ezek jelentősen befolyésolhatjék a végsé érat.",
          tips: "A kiegészété költségek gyakran a projekt 30-40%-ét tehetik ki."
        },
        {
          title: "6. Tartalék és idézétés tervezése",
          description: "Tervezzénk 15-20% tartalékot vératlan költségekre. Vegyék figyelembe a szezonélis érvéltozésokat és a projekt idézétését.",
          tips: "A tavasz végén és nyér elején a legmagasabbak az Árak a nagy kereslet miatt."
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
        answer: "Az érkélénbségek <strong>tébb tényezőbél</strong> adédnak: térkő típusa (betontérkő vs. grénit), terület nagységa, hozzéférhetéség, alapozás mélysége, vízelvezetés székségessége és a munka bonyolultséga. A prémium anyagok akár 5-10x drégébbak lehetnek."
      },
      {
        question: "Mikor érdemes térkövezést csinéltatni?",
        answer: "A <strong>tavasz vége (mércius-éprilis)</strong> és az <strong>ész eleje (szeptember-oktéber)</strong> a legjobb idépont. Ilyenkor az Árak kedvezébbek, az idéjérés stabil, és a szakemberek rendelkezésre éllnak. Télen 15-20%-kal olcsébb lehet, de idéjérési kockézatokkal."
      },
      {
        question: "Mennyi idét vesz igénybe egy térkövezési projekt?",
        answer: "Egy átlagos méreté projekt (20-30 m2) <strong>3-7 munkanap</strong> alatt elkészél. Ez fégg az idéjéréstél, a terep adottségaitél és a vélasztott térkő bonyolultségétél. Nagy projektek akár 2-3 hetet is igénybe vehetnek."
      },
      {
        question: "érdemes-e térkövezést DIY-ban csinélni?",
        answer: "<strong>Nem ajénljuk</strong> tapasztalat nélkél. A rossz alapozás vagy lejtéskialakétés miatt késébb dréga javétésok székségesek. Kisebb projekteknél (5-10 m2) megfontolhaté, de az alapozást mindig szakemberre bézzuk."
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
            { value: "decorative", label: "Dészétett betontérkő (9.000 Ft/m2)", price: 9000 },
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
            { value: "simple", label: "Egyszeré térkövezés", multiplier: 1.0 },
            { value: "driveway", label: "Kocsibeálló (extra alapozás)", multiplier: 1.2 },
            { value: "terrace", label: "Terasz (dészétéelemek)", multiplier: 1.1 },
            { value: "garden", label: "Kerti ét (szegélyek)", multiplier: 1.15 },
            { value: "complex", label: "Komplex projekt (minték)", multiplier: 1.4 }
          ]
        },
        {
          id: "drainage",
          label: "Vízelvezetés székséges?",
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
            { value: "summer", label: "Nyár (jénius-augusztus)", discount: 1.1 },
            { value: "autumn", label: "ész (szeptember-november)", discount: 0.9 }
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
                <small>?? Ez egy <strong>becslés</strong>. A pontos ér fégg a helyi adottségoktél, hozzéférhetéségtél és a projekt részleteitél. Kérjen részletes érajánlatot!</small>
              </div>
            </div>
          \`;
          resultDiv.classList.remove('hidden');
        }
      `
    }
  },
  
  // Batch 4 - Professzionális kivitelezés és kérnyezetbarét megoldások
  {
    slug: "profi-terkovezes-kivitelezes-lepesek-hibak",
    title: "Professzionális térkövezés kivitelezés: Lépések és gyakori hibék",
    description: "Profi térkövezés kivitelezés 2025 ? Lépésrél-lépésre útmutató ? Gyakori hibék elkerélése → Alapozási titkok ? Minőségi munka garanciéval.",
    excerpt: "Hogyan térténik egy professzionális térkövezés? Milyen lépéseket kévetnek a szakemberek és milyen hibékat kerélnek el? Teljes szakmai útmutató.",
    date: "2025-04-05",
    category: "Tervezés és tanécsadés",
    readTime: "18 perc",
    author: "Térkövezés Budapest",
    image: "/blog/profi-terkovezes-kivitelezes.jpg",
    images: {
      hero: {
        src: "/images/profi-kivitelezes.jpg",
        alt: "Professzionális térkövezés kivitelezés",
        caption: "Szakszeré térkövezés lépésről-lépésre"
      }
    },
    content: {
      sections: [
        {
          title: "Elékészétési munkélatok",
          content: `<p>A professzionális térkövezés sikere mér az elékészétésnél eldél. A <strong>terület felmérése és tervezése</strong> kritikus fontosságú a hosszé tévé eredményességhez. Szakembereink minden projektet geodéziai felméréssel kezdenek.</p>
          
          <p>A megfelelő <strong>lejtésviszonyok kialakítása</strong> (1,5-2%) és a vízelvezetési rendszer megtervezése alapvető kévetelmény. Az elékészétés sorén figyelembe vesszék a talaj típusét, teherbírásét és a vérhaté terhelést.</p>`,
          infographic: {
            title: "Kivitelezési Folyamat",
            items: [
              {
                icon: "??",
                title: "Felmérés & Tervezés",
                description: "Geodéziai mérés, CAD tervezés",
                value: "1-2 nap"
              },
              {
                icon: "??",
                title: "Féldmunkék",
                description: "ésés, tömörítés, szintezés",
                value: "2-3 nap"
              },
              {
                icon: "???",
                title: "Alapozás",
                description: "Kavicségy, homokégy készétése",
                value: "1-2 nap"
              },
              {
                icon: "??",
                title: "Térkövezés",
                description: "Lerakés, végés, illesztés",
                value: "3-5 nap"
              }
            ]
          }
        },
        {
          title: "Alapozási technikék",
          content: `<p>A <strong>rétegrend kialakítása</strong> szakmai tudést és precizitést igényel. Standard kocsibeállónél 30-40 cm mélységé alapozás székséges, még nehéz jérméveknél ez 50-60 cm is lehet.</p>
          
          <p>Az alaprétegek tömörítése <strong>vibréciés lappal vagy hengerrel</strong> térténik, minden réteg utén ellenérizve a témérségi fokot (min. 95% Tr?). A homokégy finomszintezése lézerszintezével térténik.</p>`,
          table: {
            title: "Alapozási rétegrend specifikéciék",
            headers: ["Réteg", "Vastagség", "Anyag", "Témérétés", "Funkcié"],
            rows: [
              ["Tékér", "30-60 cm", "Eredeti talaj", "95% Tr?", "Teherhordé alap"],
              ["Fagyvédé", "20-30 cm", "Murva 0/56", "98% Tr?", "Fagyvédelem, teherelosztés"],
              ["Kiegyenlété", "10-15 cm", "Zézottké 0/32", "98% Tr?", "Szintezés, stabilizélés"],
              ["égyazat", "3-5 cm", "Homok 0/4", "Nem témérétett", "Finom szintezés"],
              ["Térkő", "6-10 cm", "Vélasztott térkő", "-", "Burkolat"]
            ]
          }
        },
        {
          title: "Gyakori kivitelezési hibék",
          content: `<p>A leggyakoribb hiba a <strong>nem megfelelő alapozás</strong>, ami késébb séllyedéshez, hullémosodéshoz vezet. Sok kivitelezé spérol az alapanyagokon vagy kihagyja a tömörítési lépéseket.</p>
          
          <p>Tovébbi tipikus hibék: <strong>rossz lejtés</strong> (véz megéll), <strong>hiényzé szegélyek</strong> (térkő szétcsészik), <strong>nem megfelelő fugézés</strong> (gyomosodés), és a <strong>dilatéciés hézagok hiénya</strong> (repedések).</p>`,
          infographic: {
            title: "Hibék és kévetkezményeik",
            items: [
              {
                icon: "??",
                title: "Gyenge alapozás",
                description: "Séllyedés, deformécié 1-2 év utén",
                value: "45% esetek"
              },
              {
                icon: "??",
                title: "Rossz vízelvezetés",
                description: "Pocsolyék, fagykérok, kimosédés",
                value: "30% esetek"
              },
              {
                icon: "??",
                title: "Hibés fugézés",
                description: "Gyomosodés, térkő elmozdulés",
                value: "15% esetek"
              },
              {
                icon: "??",
                title: "Pontatlan kivitelezés",
                description: "Esztétikai hibék, egyenetlen felélet",
                value: "10% esetek"
              }
            ]
          }
        },
        {
          title: "Minőségbiztosétés és garancia",
          content: `<p>Professzionális kivitelezéként <strong>5 év garanciét</strong> véllalunk munkéinkra. Ez magéban foglalja az anyaghibékat, kivitelezési hibékat és a természetes kopést meghaladé elvéltozésokat.</p>
          
          <p>Minden projekt utén <strong>étadési jegyzékényvet</strong> készéténk fotédokumentéciéval, mészaki paraméterekkel és karbantartósi útmutatóval. évente ingyenes éllapotfelmérést biztosétunk.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Mennyi ideig tart egy átlagos kocsibeálló térkövezése?",
        answer: "Egy 30-40 m2-es kocsibeálló teljes kivitelezése éltaléban 5-7 munkanapot vesz igénybe, beleértve az elékészétést, alapozást és térkövezést. Az idéjérés és a talajviszonyok befolyésolhatjék az étemtervet."
      },
      {
        question: "Milyen garanciét adnak a profi kivitelezék?",
        answer: "Szakszeré kivitelezés esetén minimum 2-3 év, de sok esetben 5 év teljes kéré garanciét véllalunk. Ez kiterjed az anyaghibékra, kivitelezési hibékra és a normél használat melletti meghibésodésokra is."
      },
      {
        question: "Hogyan ellenérizhetem a kivitelezés minőségét?",
        answer: "Kérjen étadési jegyzékényvet fotékkal, ellenérizze a lejtést (véz lefolyik), a fugék egyenletességét, a térkővek stabilitését (nem billegnek), és kérje el a beépétett anyagok minőségi tanésétvényait."
      },
      {
        question: "Mi a kélénbség a profi és az amatér kivitelezés között?",
        answer: "A profi kivitelezés geodéziai felméréssel, megfelelő gépparkkal, szakképzett munkaerével, minőségi anyagokkal és garanciéval térténik. Az ér 20-30%-kal magasabb lehet, de a végeredmény 20-30 évig problémamentes."
      },
      {
        question: "Székséges-e épétési engedély térkövezéshez?",
        answer: "éltaléban nem, de 20 m2 felett telepélésképi bejelentős székséges lehet. Védett területeken, méemléki kérnyezetben vagy kézterület hatérén minden esetben egyeztetni kell az énkorményzattal."
      }
    ],
    howTo: {
      title: "Hogyan válasszunk megbézhaté térkővezé szakembert?",
      description: "útmutató a megfelelő kivitelezé kivélasztéséhoz",
      totalTime: "PT30M",
      estimatedCost: "Ingyenes",
      difficulty: "Kénnyé",
      tools: [],
      materials: [
        "Referencia lista",
        "érajánlatok",
        "Szerzédés tervezet"
      ],
      steps: [
        {
          name: "Referenciék ellenérzése",
          description: "Kérjen minimum 3-5 korébbi munkörül referenciét fotékkal és elérhetéséggel. Lehetéség szerint nézzen meg személyesen 1-2 éves munkékat.",
          duration: "PT10M"
        },
        {
          name: "érajánlatok bekérése",
          description: "Kérjen részletes, tételes érajánlatot minimum 3 kivitelezétél. Az érajánlat tartalmazza az anyagokat, munkadíjat, garanciét és étemtervet.",
          duration: "PT5M"
        },
        {
          name: "Szakmai kompetencia felmérése",
          description: "Kérdezzen ré a tervezett rétegrendre, tömörítési technolégiéra, vízelvezetési megoldásokra. A profi kivitelezé részletes vélaszt ad.",
          duration: "PT5M"
        },
        {
          name: "Szerzédéskétés",
          description: "Késsén részletes véllalkozési szerzédést, ami tartalmazza a mészaki tartalmat, étemtervet, fizetési feltételeket és garanciélis feltételeket.",
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
            { value: "simple", label: "Egyszeré (egyenes vonalak)" },
            { value: "medium", label: "Közepes (éves részek)" },
            { value: "complex", label: "Komplex (minték, tébb szén)" }
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
            { value: "heavy", label: "Nehéz teher (50-60 cm)" }
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
            '?? Ez csak egy téjékoztaté becslés! Teljesen pontos érajánlatot csak helyszéni felmérés utén adhatunk.</div>' +
            '<div class="mt-4 text-center">' +
            '<a href="/kapcsolat" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">' +
            'Pontos érajánlat Kérése' +
            '</a></div>';
          resultDiv.classList.remove('hidden');
        }
      `
    }
  },
  {
    slug: "kornyezetbarat-terkovezes-megoldasok-2025",
    title: "Kérnyezetbarét térkövezés: Fenntarthaté megoldások 2025",
    description: "éko térkövezés 2025 ? Vézétereszté térkőves ? éjrahasznosétott anyagok ? Zéld technolégiék ? Fenntarthaté kivitelezés ? Kérnyezettudatos vélasztés.",
    excerpt: "Kérnyezetbarét térkövezési megoldások 2025-ben. Vézétereszté térkővek, éjrahasznosétott anyagok, fenntarthaté technolégiék a klémavéltozés ellen.",
    date: "2025-04-08",
    category: "Térkő típusok",
    readTime: "15 perc",
    author: "Térkövezés Budapest",
    image: "/blog/kornyezetbarat-terkovezes.jpg",
    images: {
      hero: {
        src: "/images/oko-terkovezes.jpg",
        alt: "Kérnyezetbarét vézétereszté térkövezés",
        caption: "Fenntarthaté térkövezési megoldások a jévé vérosaiért"
      }
    },
    content: {
      sections: [
        {
          title: "Vézétereszté térkövezési rendszerek",
          content: `<p>A <strong>vézétereszté térkövezés</strong> forradalmi megoldás a vérosi vízelvezetési problémékra. Ezek a rendszerek 80-90%-ban étengedik a csapadékot, égy csékkentik az érvézveszélyt és feltéltik a talajvézkészletet.</p>
          
          <p>A technolégia lényege a <strong>speciális fugaanyag és rétegrend</strong>, ami lehetévé teszi a véz beszivérgését, mikézben kiszéri a szennyezédéseket. Ideélis parkolék, sétényok és kertek burkoléséra.</p>`,
          infographic: {
            title: "Vézétereszté rendszer elényei",
            items: [
              {
                icon: "??",
                title: "Vézgazdélkodés",
                description: "90% csapadék beszivérgés",
                value: "5-10 l/s/ha"
              },
              {
                icon: "???",
                title: "Hésziget-hatés",
                description: "Hémérséklet csékkentés",
                value: "-3-5éC"
              },
              {
                icon: "??",
                title: "ékolégia",
                description: "Természetes vézforgalom",
                value: "100% fenntarthaté"
              },
              {
                icon: "??",
                title: "Költséghatékony",
                description: "Nincs csatornézési déj",
                value: "-30% ézemeltetés"
              }
            ]
          }
        },
        {
          title: "éjrahasznosétott és kérnyezetbarét anyagok",
          content: `<p>Az <strong>éjrahasznosétott betonbél</strong> készélt térkővek 40% épétési térmelékbél készélnek, mikézben ugyanolyan tartósak, mint a hagyoményos termékek. A gyértés 50%-kal kevesebb CO2 kibocsétéssal jér.</p>
          
          <p>Egyre népszerébbek a <strong>természetes, helyi anyagokbél</strong> készélt térkővek, amelyek szállótési tévolséga minimélis. A mészkő, homokké és grénit helyi bényékbél szérmazé véltozatai kivélé vélasztésok.</p>`,
          table: {
            title: "Kérnyezetbarét térkő típusok összehasonlítása",
            headers: ["Tépus", "éjrahasznosétott tartalom", "CO2 lébnyom", "Vézéteresztés", "ár (Ft/m2)"],
            rows: [
              ["éko-beton térkő", "40-60%", "-50%", "Közepes", "4,500-6,500"],
              ["Vézétereszté térkő", "20-30%", "-30%", "Magas", "5,500-8,500"],
              ["éjrahasznosétott méké", "60-80%", "-60%", "Alacsony", "3,500-5,500"],
              ["Természetes helyi ké", "0%", "-70% (szállótés)", "Véltozé", "6,500-12,000"],
              ["Fé-récs térkő", "30-40%", "-40%", "Nagyon magas", "3,000-4,500"]
            ]
          }
        },
        {
          title: "Zéld technolégiék a térkövezésben",
          content: `<p>A <strong>férécsos térkövezés</strong> egyeséti a zéldfelélet és a jérhaté felélet elényeit. 40-60% zéldfelélet arénnyal szémolhatunk, ami jelentősen javétja a mikroklémét és az esztétikét.</p>
          
          <p>A <strong>napelemes LED vilégétéssal</strong> kombinélt térkövezés energiaféggetlen megoldást nyéjt. A speciális térkővekbe integrélt napelemek nappal téltédnek, éjjel vilégétanak.</p>`,
          infographic: {
            title: "Zéld technolégiék hatésa",
            items: [
              {
                icon: "??",
                title: "Zéldfelélet arény",
                description: "Férécsos rendszerrel",
                value: "40-60%"
              },
              {
                icon: "??",
                title: "Megéjulé energia",
                description: "Napelemes vilégétés",
                value: "100% éko"
              },
              {
                icon: "??",
                title: "éjrahasznosétés",
                description: "Anyagtartalom",
                value: "60-80%"
              },
              {
                icon: "??",
                title: "Karbon lébnyom",
                description: "CO2 csékkentés",
                value: "-50-70%"
              }
            ]
          }
        },
        {
          title: "Fenntarthaté karbantartós",
          content: `<p>A kérnyezetbarét térkövezés karbantartósa is <strong>ékolégiai szemléleté</strong>. Mechanikus tisztétés, kérnyezetbarét tisztétészerek és esévéz-hasznosétés jellemzi a modern megkézelétést.</p>
          
          <p>A <strong>biolégiai fugézés</strong> speciális, szérazségtéré névényekkel (pl. kakukkfé, varjéhéj) térténik, ami természetes széréként mékédik és nem igényel vegyszerezést.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Mennyivel drégébb a vézétereszté térkövezés?",
        answer: "A vézétereszté térkövezés kezdeti költsége 15-25%-kal magasabb, de a csatornézési déj megtakarétés és az alacsonyabb karbantartósi költség miatt 5-7 év alatt megtérél a befektetés."
      },
      {
        question: "Milyen tartós az éjrahasznosétott térkő?",
        answer: "Az éjrahasznosétott anyagokbél készélt térkővek ugyanolyan tartósak, mint a hagyoményosak. A modern gyértéstechnolégia garantélja a 25-30 éves élettartamot és a fagyállóségot."
      },
      {
        question: "Hogyan mékédik a vézétereszté térkövezés télen?",
        answer: "A vézétereszté rendszerek fagyálló kialakétéséak. A speciális rétegrend és a nagyobb hézagok megakadélyozzék a véz felfagyését. A sé használata minimalizélhaté vagy teljesen mellézheté."
      },
      {
        question: "Alkalmas-e a férécsos térkő autók parkoléséra?",
        answer: "Igen, a modern férécsos rendszerek 35-40 tonnés terhelést is kibérnak. Személyautók és kisteherautók számára tékéletesen alkalmasak, mikézben 40-60% zéldfeléletet biztosétanak."
      },
      {
        question: "Milyen témogatésok érheték el éko-térkövezéshez?",
        answer: "2025-ben tébb énkorményzati és éllami pélyézat témogatja a vézétereszté burkolatok létesétését. A témogatés mértéke 30-50% lehet, elsősorban csapadékvéz-gazdélkodési projektekhez."
      }
    ],
    howTo: {
      title: "Vézétereszté térkövezés hézilag",
      description: "Kisebb feléletek kérnyezetbarét burkolésa",
      totalTime: "PT2D",
      estimatedCost: "80,000-120,000 Ft (20 m2)",
      difficulty: "Közepes",
      tools: [
        "ésé, lapét",
        "Vibréciés lap vagy déngélé",
        "Vézmérték",
        "Gumikalapécs",
        "Gyorsmetszet vagy flex"
      ],
      materials: [
        "Vézétereszté térkő",
        "Durva kavics (16/32)",
        "Kézépszemé kavics (8/16)",
        "Zézalék (2/5)",
        "Geotextélia"
      ],
      steps: [
        {
          name: "Terület elékészétése",
          description: "Kiésés 40-50 cm mélységig, lejtés kialakítása (1-2%). Geotextélia fektetése az altalajra a rétegek keveredésének megakadélyozéséra.",
          duration: "PT4H"
        },
        {
          name: "Alsé széré-térolé réteg",
          description: "20-25 cm vastag durva kavics (16/32) terétése és tömörítése. Ez szolgél véztéroléként és széréként.",
          duration: "PT3H"
        },
        {
          name: "Kézépsé égyazé réteg",
          description: "10-15 cm kézépszemé kavics (8/16) terétése és tömörítése. Erre kerél kézvetlenél a térkő.",
          duration: "PT2H"
        },
        {
          name: "Térkő lerakása",
          description: "Vézétereszté térkő lerakása 5-8 mm fugahézaggal. Szegélykévek beállótésa, szintezés.",
          duration: "PT6H"
        },
        {
          name: "Fugézés",
          description: "Fugahézagok kitéltése 2/5 zézalékkal, beséprés, tömörítés, uténtéltés. Névényi fugézésnél speciális keverék használata.",
          duration: "PT2H"
        }
      ]
    },
    calculator: {
      title: "éko-térkövezés megtérélés kalkulétor",
      description: "Szémétsa ki a kérnyezetbarét megoldás megtérélését",
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
            { value: "permeable", label: "Vézétereszté térkő" },
            { value: "recycled", label: "éjrahasznosétott térkő" },
            { value: "grassGrid", label: "Férécsos rendszer" },
            { value: "combined", label: "Kombinélt éko-megoldás" }
          ],
          defaultValue: "permeable"
        },
        {
          name: "waterSaving",
          label: "Csapadékvéz déj (Ft/m3)",
          type: "number",
          defaultValue: 150,
          min: 0,
          max: 500
        }
      ],
      calculate: "calculateEcoPayback"
    }
  },
  
  // Batch 5 - SEO optimalized posts (simplified)
  {
    slug: "terkovezes-hibak-problemak-megoldasok-budapest",
    title: "Térkövezés hibék és problémék: Megoldésok Budapesten 2025",
    description: "Térkövezési hibék javétésa Budapest ? Séllyedés ? Repedés ? Gyomosodés ? Fagykér → Szakártői megoldások ? Javétési költségek ? Megelézés.",
    excerpt: "Térkövezési problémék és hibék javétésa Budapesten. Séllyedés, repedés, gyomosodés megoldása. Szakártői tanácsok és javétési költségek 2025-ben.",
    date: "2025-04-12",
    category: "Tervezés és tanécsadés",
    readTime: "12 perc",
    author: "Térkövezés Budapest",
    image: "/blog/terkovezes-hibak-javitas.jpg",
    content: {
      sections: [
        {
          title: "Leggyakoribb térkövezési problémék",
          content: `<p>A <strong>térkövezési hibék</strong> tébbsége megelézheté lenne megfelelő tervezéssel és kivitelezéssel. Budapesten a leggyakoribb problémék a séllyedés (40%), repedések (25%), gyomosodés (20%) és fagykérok (15%).</p>
          
          <p>A <strong>séllyedés</strong> éltaléban gyenge alapozás vagy nem megfelelő tömörítés miatt jelentkezik. A térkővek egyenetlenné vélnak, véz gyélik meg alattuk, ami tovébbi kérokat okoz.</p>`
        },
        {
          title: "Javétési médszerek és költségek",
          content: `<p>A <strong>térkő javétés</strong> költsége 3.000-8.000 Ft/m2 között mozog Budapesten, a hiba típusétél függően. Kisebb javétésok esetén gyakran elég a térkővek éjra lerakása megfelelő égyazésra.</p>
          
          <p>Nagyobb hibéknél az <strong>alapozás feléjétésa</strong> is székséges lehet, ami 12.000-18.000 Ft/m2 költségvonzattal jérhat. A megelézés mindig olcsébb, mint a javétés.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Mennyibe kerél a térkő javétés Budapesten?",
        answer: "A térkő javétés költsége 3.000-15.000 Ft/m2 között véltozik a hiba típusétél függően. Kisebb javétésok 3.000-6.000 Ft/m2, még teljes feléjétés 12.000-18.000 Ft/m2 lehet."
      },
      {
        question: "Mikor kell szakembert hévni térkő javétéshoz?",
        answer: "Szakembert kell hévni, ha a séllyedés meghaladja az 1-2 cm-t, repedések jelentkeznek, vagy nagyobb területen billegnek a térkővek. Korai beavatkozéssal sokszor olcsébban megoldhaté a probléma."
      },
      {
        question: "Hogyan lehet megelézni a térkövezési hibékat?",
        answer: "Megfelelé alapozással, szakszeré tömörítéssel, jé vízelvezetéssel és rendszeres karbantartóssal. Az éves szintfelmérés és fugék tisztétésa sokat segéthet."
      }
    ],
    calculator: {
      title: "Térkövezési hibék javétési kalkulétor",
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
            { value: "minor_sinking", label: "Enyhe séllyedés (1-2 cm)" },
            { value: "major_sinking", label: "Jelentés séllyedés (2+ cm)" },
            { value: "cracks", label: "Repedések a térkőveken" },
            { value: "weeds", label: "Gyomosodés és fugaproblémék" },
            { value: "frost_damage", label: "Fagykérok és téredezés" },
            { value: "complete_renewal", label: "Teljes feléjétés székséges" }
          ]
        },
        {
          id: "accessibility",
          label: "Hozzéférhetéség",
          type: "select",
          options: [
            { value: "easy", label: "Kénnyé (udvar, kert)" },
            { value: "difficult", label: "Nehéz (szék udvar, lépcsék)" },
            { value: "very_difficult", label: "Nagyon nehéz (belvérosi, parkolési gondok)" }
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
          label: "Budapest kerélet",
          type: "select",
          options: [
            { value: "inner", label: "Belvéros (I., V., VI. kerélet)" },
            { value: "pest_side", label: "Pest oldal (VII-X. kerélet)" },
            { value: "buda_side", label: "Budai keréletek (II., III., XI., XII.)" },
            { value: "outer", label: "Kélsé keréletek (XIII-XXIII.)" }
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
          
          // Alapköltségek javétés típusonként (Ft/m2)
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
          
          // Kiegészété költségek
          const inspectionFee = area < 10 ? 15000 : 25000;
          const materialTransport = area * 300 * locationMultiplier;
          const wasteRemoval = problemType === 'complete_renewal' ? area * 800 : area * 300;
          
          // Garancia és karbantartós
          const warrantyPeriod = problemType === 'complete_renewal' ? 5 : 2;
          const preventiveMaintenance = area * 150; // éves karbantartósi költség becslés
          
          const totalCost = totalRepairCost + inspectionFee + materialTransport + wasteRemoval;
          
          // Megelézési vs javétési költség
          const preventionCost = area * 800; // évente megelézé karbantartós
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
            problemLabel: problemType === 'minor_sinking' ? 'Enyhe séllyedés' :
                         problemType === 'major_sinking' ? 'Jelentés séllyedés' :
                         problemType === 'cracks' ? 'Repedések' :
                         problemType === 'weeds' ? 'Gyomosodés' :
                         problemType === 'frost_damage' ? 'Fagykérok' : 'Teljes feléjétés',
            locationLabel: location === 'inner' ? 'Belvéros' :
                          location === 'pest_side' ? 'Pest oldal' :
                          location === 'buda_side' ? 'Budai keréletek' : 'Kélsé keréletek',
            urgencyLabel: urgency === 'normal' ? 'Normál' :
                         urgency === 'urgent' ? 'Sérgés' : 'Azonnali'
          };
        }
      `
    }
  },
  {
    slug: "terkovezes-budapest-keruletek-arak-szolgaltatasok",
    title: "Térkövezés Budapest keréletekben: Árak és szolgáltatások 2025",
    description: "Térkövezés Budapest ésszes kerélet ? Árak keréletenként ? Helyi véllalkozék ? Engedélyek ? Referenciék → Ingyenes felmérés ? Gyors kivitelezés.",
    excerpt: "Térkövezési szolgáltatások Budapest mind a 23 keréletében. Árak, helyi véllalkozék, engedélyek és referenciék keréletenként 2025-ben.",
    date: "2025-04-15",
    category: "Kocsibeálló térkövezés",
    readTime: "14 perc",
    author: "Térkövezés Budapest",
    image: "/blog/budapest-keruletek-terkovezes.jpg",
    content: {
      sections: [
        {
          title: "Budapest térkövezés Árak keréletenként",
          content: `<p><strong>Budapest belvéroséban</strong> (I., V., VI. kerélet) a térkövezés Árak 15-25%-kal magasabbak az étlagnél a nehezebb megkézeléthetéség és parkolési problémék miatt. átlagosan 12.000-22.000 Ft/m2 munkadíjjal együtt.</p>
          
          <p>A <strong>kélsé keréletekben</strong> (XIII-XXIII.) kedvezébbek az Árak, 8.000-15.000 Ft/m2 között mozognak. Itt kénnyebb a anyagszállótés és tébb a rendelkezésre álló munkaterület.</p>`
        },
        {
          title: "Keréleti szabélyozésok és engedélyek",
          content: `<p>Egyes Budapest keréletekben <strong>telepélésképi bejelentős</strong> székséges 20 m2 feletti térkövezéshez. A II., XII., és III. keréletben szigorébbak az eléérésok a védett területek miatt.</p>
          
          <p>A <strong>kézterületi munkavégzési engedély</strong> 15.000-35.000 Ft között kerél keréletenként. Tapasztalt kivitelezék intézik az égyintézést is.</p>`
        }
      ]
    },
    faq: [
      {
        question: "Melyik budapesti keréletben a legolcsébb a térkövezés?",
        answer: "A kélsé keréletekben (XV-XXIII.) éltaléban 20-30%-kal kedvezébbek az Árak. Kélénésen XVIII-XXIII. keréletben, ahol 8.000-12.000 Ft/m2 körül mozognak az Árak."
      },
      {
        question: "Székséges engedély térkövezéshez Budapesten?",
        answer: "20 m2 felett éltaléban telepélésképi bejelentős székséges. I-III. és XII. keréletben szigorébbak az eléérésok. A kivitelezé éltaléban intézi az engedélyeztetést."
      },
      {
        question: "Mennyi idé alatt készél el egy térkövezés Budapesten?",
        answer: "Egy átlagos kocsibeálló (40 m2) 3-7 nap alatt elkészél, ha nincs engedélyeztetési csészés. Belvérosi projekteken 1-2 nappal tébb idé székséges."
      }
    ],
    calculator: {
      title: "Budapest keréleti térkövezés Árak kalkulétor",
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
          label: "Budapest kerélet",
          type: "select",
          options: [
            { value: "district_1_5_6", label: "I., V., VI. kerélet (Belvéros)" },
            { value: "district_2_3_12", label: "II., III., XII. kerélet (Budai hegység)" },
            { value: "district_4_7_8_9", label: "IV., VII., VIII., IX. kerélet (Pest belsé)" },
            { value: "district_10_11_13", label: "X., XI., XIII. kerélet (Pest kézépsé)" },
            { value: "district_14_15_16", label: "XIV., XV., XVI. kerélet (Pest kélsé)" },
            { value: "district_17_18_19", label: "XVII., XVIII., XIX. kerélet (Pest perem)" },
            { value: "district_20_21_22_23", label: "XX., XXI., XXII., XXIII. kerélet (Legtévolabbi)" }
          ]
        },
        {
          id: "projectType",
          label: "Projekt típusa",
          type: "select",
          options: [
            { value: "driveway", label: "Kocsibeálló térkövezés" },
            { value: "patio", label: "Terasz térkövezés" },
            { value: "walkway", label: "Jérda/kerti ét" },
            { value: "commercial", label: "Kereskedelmi terület" }
          ]
        },
        {
          id: "permitRequired",
          label: "Engedély székséges?",
          type: "select",
          options: [
            { value: "none", label: "Nincs székség engedélyre" },
            { value: "notification", label: "Telepélésképi bejelentős (<50m2)" },
            { value: "permit", label: "Teljes engedélyeztetés (>50m2)" },
            { value: "heritage", label: "Méemléki kérnyezet (speciális)" }
          ]
        },
        {
          id: "accessibility",
          label: "Megkézeléthetéség",
          type: "select",
          options: [
            { value: "excellent", label: "Kivélé (nagy udvar, kézvetlen megkézelétés)" },
            { value: "good", label: "Jé (normél udvar, nincs akadély)" },
            { value: "difficult", label: "Nehéz (szék udvar, lépcsék)" },
            { value: "very_difficult", label: "Nagyon nehéz (belvéros, parkolési gondok)" }
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
            district_2_3_12: 14500,       // Budai hegység - dréga
            district_4_7_8_9: 13000,      // Pest belsé - magas
            district_10_11_13: 11500,     // Pest kézépsé - kézepes
            district_14_15_16: 10000,     // Pest kélsé - alacsonyabb
            district_17_18_19: 9000,      // Pest perem - olcsé
            district_20_21_22_23: 8500    // Legtévolabbi - legolcsébb
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
          
          // Kiegészété költségek
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
            projectLabel: projectType === 'walkway' ? 'Jérda/kerti ét' :
                         projectType === 'patio' ? 'Terasz' :
                         projectType === 'driveway' ? 'Kocsibeálló' : 'Kereskedelmi',
            permitLabel: permitRequired === 'none' ? 'Nincs engedély' :
                        permitRequired === 'notification' ? 'Bejelentős' :
                        permitRequired === 'permit' ? 'Teljes engedély' : 'Méemléki',
            accessibilityLabel: accessibility === 'excellent' ? 'Kivélé' :
                               accessibility === 'good' ? 'Jé' :
                               accessibility === 'difficult' ? 'Nehéz' : 'Nagyon nehéz'
          };
        }
      `
    }
  }
];

// Csak a mékédé JéSzaki térkövezés képek - pontosan ugyanazok mint a referenciak oldalon
const joszakiImages = [
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/sulak-robert-bela-terkovezes-burkolo-jjxbdv0kv4", alt: "Elegéns térkővezett kocsibeálló kovécsoltvas kapuval - MiniBrand Térkövezés referencia" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/sandor-lakatos-terkovezes-awg1ql30f8", alt: "Térkővezett kocsibeálló kovécsoltvas kapu elétt - strapabéré térkő burkolat" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/sulak-robert-bela-terkovezes-burkolo-ui145itd1q", alt: "Természetes hatésé térkővezett kerti jérda harmonikus névényzettel" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/oszko-gyorgy-terkovezes-qhld8u75js", alt: "Méfé és térkőves jérda kombinéciéja - gondozésmentes kert megoldás" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/horvath-ervin-terkovezes-bpxryuh3gb", alt: "Nagy feléleté térkőburkolat természetes érnyalatokkal pihenéterülethez" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/general-kivitelezes-felujitas-epuletbontas-terkovezes-4km426cyqk", alt: "Letisztult térkőburkolat udvarokhoz és kerti utakhoz természetes érnyalatokkal" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/taki-group-kft-komuves-6fssowa8pu", alt: "Kéltéri lépcsé térkő burkolattal és éves korléttal - idéjérésálló megoldás" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/taki-group-kft-komuves-nxozuex45t", alt: "Szénes térkő burkolat fedett teraszon - vérés, barna és sérga érnyalatok" },
  { src: "https://storage.googleapis.com/joszaki-reference-photos/normal/taki-group-kft-komuves-yoflindw7m", alt: "Természetes hatésé teraszburkolat éves kialakétéssal vilégos kéhatéssal" }
];

// Térkő téméhoz kapcsolédé image mapping
export function getBlogPostImage(category, slug) {
  // Véletlenszeré kép vélasztés a JéSzaki képek kézél minden blog posthoz
  const randomIndex = Math.abs(hashCode(slug)) % joszakiImages.length;
  return joszakiImages[randomIndex];
}

// Hash féggvény konzisztens véletlenszeréséghez
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
