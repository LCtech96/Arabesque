export type MenuDish = {
  name: string;
  price: string;
  detail?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuDish[];
};

export const menuSections: MenuSection[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    items: [
      {
        name: "ANTIPASTO CALDO*",
        detail:
          "Panelle, patatine, arancinette, mozzarelline, anelli di cipolla",
        price: "€ 6,00",
      },
      { name: "CRUDO DI PARMA E BURRATA", price: "€ 13,00" },
      { name: "CRUDO DI PARMA E MELONE GIOIELLO", price: "€ 11,00" },
      {
        name: "CARPACCETTO DI BRESAOLA CON RUCOLA E SCAGLIE DI GRANA",
        price: "€ 11,00",
      },
      {
        name: "TRITTICO DI MARE*",
        detail:
          "Salmone, tonno, spada affumicato, cestinetto con cocktail tropicale con gamberi, mango, rucola e perle di cantalupo",
        price: "€ 17,00",
      },
      { name: "SALMONE KING RUCOLA E BURRATA", price: "€ 14,00" },
      {
        name: "COCKTAIL DI GAMBERI*",
        detail: "Lattuga, gamberi rossi di Mazara, salsa rosa, pasta kataifi",
        price: "€ 17,00",
      },
      {
        name: "ZUPPA DI COZZE",
        detail: "Pomodoro, olio d'oliva, basilico, aglio",
        price: "€ 12,00",
      },
      {
        name: "INSALATA DI MARE*",
        detail:
          "Polpo, cozze, gambero rosso e bruschetta con mustarda di cipolle",
        price: "€ 16,00",
      },
      { name: "INSALATA DI POLPO E PATATE", price: "€ 15,00" },
      { name: "OSTRICHE", price: "cad. € 3,00" },
      {
        name: "GAMBERI MARINATI*",
        detail: "Rosso di Mazara o Gobbetto",
        price: "€ 16,00",
      },
      {
        name: "ANTIPASTO DELIZIE DI MARE*",
        detail:
          "Insalata di mare, salmone, cocktail di gamberi, pasta kataifi, bruschetta con alici",
        price: "€ 16,00",
      },
      {
        name: "SOUTÈ DI VONGOLE E CAPESANTE",
        detail: "Aglio, olio, prezzemolo, pepe",
        price: "€ 21,00",
      },
      {
        name: "ANTIPASTO TRINACRIA",
        detail:
          "Lattuga, mandorle, cuori di palma, olive nere, tonno, cipolla, gambero, cetriolini",
        price: "€ 13,00",
      },
      { name: "CRUDITÉ DI PESCE* MISTO DEL GIORNO", price: "€ 28,00" },
      { name: "TARTARA DI TONNO*", price: "€ 16,00" },
      { name: "CAPESANTE GRILL / CRATER", price: "€ 16,00" },
      { name: "COZZE AL GORGONZOLA", price: "€ 12,00" },
      {
        name: "MISTO DI BRUSCHETTINE",
        detail:
          "Patè di olive nere; mustarda di cipolle; crostini gambero, mango e philadelphia; uova di lumpo rosso",
        price: "€ 15,00",
      },
      { name: "TAGLIERE DI FORMAGGI E SALUMI", price: "€ 20,00" },
    ],
  },
  {
    id: "primi",
    title: "Primi Piatti",
    items: [
      {
        name: "RISOTTO PORCINI, ZUCCA E SPECK",
        detail:
          "Riso Carnaroli con funghi porcini, zucca rossa, speck, parmigiano, olio al tartufo",
        price: "€ 16,00",
      },
      {
        name: "BUSIATE ALLA NORMA",
        detail: "Pomodoro, melanzane, ricotta salata, basilico",
        price: "€ 9,00",
      },
      { name: "BUSIATE CON SARDE*", price: "€ 12,00" },
      {
        name: "SPAGHETTI ALLE VONGOLE*",
        detail: "Aglio, olio, prezzemolo",
        price: "€ 16,00",
      },
      {
        name: "SPAGHETTI AL GAMBERO ROSSO DI MAZARA*",
        price: "€ 18,00",
      },
      {
        name: "RISOTTO ALLO SCOGLIO*",
        detail: "Gamberi, cozze, vongole, pomodorino",
        price: "€ 17,00",
      },
      {
        name: "SPAGHETTI ALLO SCOGLIO*",
        detail: "Gamberi, cozze, vongole, calamari, pomodorino",
        price: "€ 14,00",
      },
      { name: "FARFALLE AL SALMONE*", price: "€ 13,00" },
      {
        name: "BAVETTE PISTACCHIO E GAMBERI*",
        detail: "Gamberi, pistacchi, crema di panna e pomodoro",
        price: "€ 15,00",
      },
      {
        name: "GNOCCHI SARDI AI BALCANI",
        detail:
          "Salmone, tonno, spada, gambero, aglio, pomodoro, poca panna, menta fresca",
        price: "€ 15,00",
      },
      {
        name: "BUSIATE DEL BOSCO",
        detail:
          "Verdure grigliate, salsiccia, porcini, pomodorini e parmigiano",
        price: "€ 13,00",
      },
      {
        name: "RISOTTO REGINA",
        detail:
          "Spumante, burro, gamberi rossi di Mazara, timo, parmigiano, maggiorana",
        price: "€ 17,00",
      },
      {
        name: "GNOCCHI FRESCHI NOCI E GORGONZOLA",
        price: "€ 12,00",
      },
    ],
  },
  {
    id: "secondi-pesce",
    title: "Secondi di Pesce",
    items: [
      { name: "IL PESCATO DEL GIORNO", price: "al kg. € 50,00" },
      { name: "CALAMARI* ALLA GRIGLIA", price: "al kg. € 45,00" },
      {
        name: "BACCALÀ* ALLA MESSINESE",
        detail: "Pomodoro, aglio, olio, prezzemolo, capperi, olive",
        price: "€ 16,00",
      },
      {
        name: "FRITTURA MISTA***",
        detail: "Calamari, calamaretti, gambero, latterino",
        price: "€ 16,00",
      },
      { name: "GAMBERONI* ALLA GRIGLIA", price: "€ 30,00" },
      { name: "PESCE SPADA*", price: "€ 15,00" },
      {
        name: "POLPO ARROSTO CON TORTINO DI PATATE",
        price: "al kg. € 38,00",
      },
      { name: "ARAGOSTA* AGLI AROMI", price: "al kg. € 130,00" },
    ],
  },
  {
    id: "secondi-carne",
    title: "Secondi di Carne",
    items: [
      {
        name: "ARROSTO PANATO / AI FERRI",
        detail: "Mollica, sale, pepe, olio",
        price: "€ 13,00",
      },
      { name: "FILETTO ALLA GRIGLIA (Manzo)", price: "€ 18,00" },
      { name: "FILETTO AI FUNGHI (Manzo)", price: "€ 18,00" },
      {
        name: "FILETTO GORGONZOLA E NOCI (Manzo)",
        price: "€ 18,00",
      },
      { name: "TAGLIATA DI CARNE (Manzo)", price: "€ 16,00" },
    ],
  },
  {
    id: "contorni",
    title: "Contorni",
    items: [
      { name: "PATATINE FRITTE", price: "€ 3,50" },
      { name: "PATATE LESSE/GRIGLIATE", price: "€ 3,50" },
      { name: "CROCCHETTE DI PATATE*", price: "€ 4,00" },
      { name: "INSALATA MISTA", price: "€ 3,00" },
      { name: "VERDURINE GRIGLIATE", price: "€ 4,00" },
      { name: "SPINACI* AL BURRO/AGLIO", price: "€ 4,50" },
      {
        name: "INSALATA ALL'ITALIANA",
        detail: "Rucola, pomodorino, bufala",
        price: "€ 10,00",
      },
    ],
  },
  {
    id: "frutta",
    title: "Frutta",
    items: [
      { name: "FRUTTA DI STAGIONE", price: "€ 4,00" },
      { name: "MACEDONIA DI FRUTTA FRESCA", price: "€ 4,00" },
      { name: "ANANAS", price: "€ 4,00" },
      { name: "FRAGOLONI", price: "€ 4,00" },
    ],
  },
  {
    id: "dolce",
    title: "Dolce",
    items: [
      { name: "PISTACCHINA", price: "€ 6,00" },
      { name: "PANNA COTTA", price: "€ 4,50" },
      { name: "SEMIFREDDO ALLE MANDORLE", price: "€ 4,50" },
      {
        name: "CUORE DI CIOCCOLATO CALDO E GELATO ALLA VANIGLIA",
        price: "€ 6,00",
      },
      { name: "RAVIOLI DI RICOTTA CALDI", price: "€ 3,50" },
    ],
  },
];

/** Pizze — prima pagina (come menù cartaceo) */
export const pizzaPage1Section: MenuSection = {
  id: "pizze-1",
  title: "Pizze",
  items: [
    {
      name: "ARABESQUE",
      detail:
        "pomodoro, mozzarella, olive, cipolla, peperoni, salamino, origano",
      price: "€ 10,00",
    },
    {
      name: "BIANCO PIZZA",
      detail: "mozzarella di bufala, crema di asparagi, porcini, bresaola",
      price: "€ 11,00",
    },
    {
      name: "BUFALINA",
      detail: "mozzarella di bufala, pomodorini, scaglie di grana",
      price: "€ 10,00",
    },
    {
      name: "CALZONE",
      detail: "pomodoro, mozzarella, prosciutto, origano",
      price: "€ 8,00",
    },
    {
      name: "CAPRICCIOSA",
      detail:
        "pomodoro, mozzarella, prosciutto, carciofi, funghi, wurstel, origano",
      price: "€ 8,00",
    },
    {
      name: "CHICKEN PIZZA",
      detail: "biancaneve, pollo, patatine, salsa bbq",
      price: "€ 9,00",
    },
    {
      name: "AI FORMAGGI",
      detail:
        "bianca o rossa: mozzarella, gorgonzola, emmenthal, scamorza, origano",
      price: "€ 9,00",
    },
    {
      name: "FRESCHEZZA",
      detail: "crema di zucca, pesto di basilico, grana",
      price: "€ 9,00",
    },
    {
      name: "FRIARIELLA",
      detail: "pomodoro, mozzarella, salsiccia, friarielli, mollica, origano",
      price: "€ 10,00",
    },
    {
      name: "AI FRUTTI DI MARE*",
      detail: "pomodoro, gamberi, cozze, vongole, polpo, origano",
      price: "€ 16,00",
    },
    {
      name: "AI FUNGHI PORCINI",
      detail: "pomodoro, mozzarella, porcini, origano",
      price: "€ 9,00",
    },
    {
      name: "GRECA",
      detail: "pomodoro, mozzarella, melanzane, basilico",
      price: "€ 8,00",
    },
    {
      name: "LUSSUOSA",
      detail:
        "pomodoro, mozzarella di bufala, crema di asparagi, prosciutto di parma",
      price: "€ 12,00",
    },
    {
      name: "MARGHERITA",
      detail: "pomodoro, mozzarella",
      price: "€ 7,00",
    },
  ],
};

/** Pizze — seconda pagina */
export const pizzaPage2Section: MenuSection = {
  id: "pizze-2",
  title: "Pizze",
  items: [
    {
      name: "NAPOLI",
      detail: "pomodoro, mozzarella, acciughe, origano",
      price: "€ 7,50",
    },
    {
      name: "AL PARMA",
      detail: "pomodoro, mozzarella, prosciutto crudo di parma, origano",
      price: "€ 10,00",
    },
    {
      name: "PISTACCHI E GAMBERI*",
      detail: "crema di panna macchiata, mozzarella, pistacchi, gamberi",
      price: "€ 15,00",
    },
    {
      name: "PISTACCHIOSA",
      detail: "biancaneve, mortadella, burrata, pistacchio",
      price: "€ 14,00",
    },
    {
      name: "PIZZA BBQ",
      detail: "biancaneve, pollo, salsa bbq, salsa ranch",
      price: "€ 9,00",
    },
    {
      name: "QUATTRO GUSTI",
      detail: "pomodoro, mozzarella, prosciutto, carciofi, origano",
      price: "€ 8,50",
    },
    {
      name: "ROMANA",
      detail: "pomodoro, mozzarella, prosciutto, origano",
      price: "€ 7,50",
    },
    {
      name: "RUCOLINA",
      detail: "pomodoro, mozzarella, rucola, scaglie di grana",
      price: "€ 9,00",
    },
    {
      name: "AL SALMONE",
      detail: "pomodoro, mozzarella, salmone, origano",
      price: "€ 10,50",
    },
    {
      name: "SCHIACCIATA",
      detail: "pomodoro fresco, mozzarella, prosciutto, origano",
      price: "€ 8,00",
    },
    {
      name: "SFINCIONELLO",
      detail: "pomodoro cacio-cavallo, cipolla, origano, acciughe, mollica",
      price: "€ 8,00",
    },
    {
      name: "LA SOLEGGIATA",
      detail:
        "pomodoro, mozzarella, pesto alla genovese, pomodorini soleggiati, origano",
      price: "€ 8,00",
    },
    {
      name: "AL TONNO",
      detail: "pomodoro, mozzarella, tonno, olive, cipolla, origano",
      price: "€ 9,00",
    },
    {
      name: "VEGETARIANA",
      detail:
        "pomodoro, mozz., crema di asparagi, cipolla, melanzane, origano",
      price: "€ 9,00",
    },
  ],
};

export type DrinkRow = {
  name: string;
  size: string;
  price: string;
};

export const bibiteRows: DrinkRow[] = [
  { name: "COCA COLA", size: "33 cl", price: "€ 2,50" },
  { name: "COCA COLA VETRO", size: "1 lt", price: "€ 5,00" },
  { name: "FANTA", size: "33 cl", price: "€ 2,50" },
  { name: "ACQUA MANGIATORELLA VETRO", size: "1 lt.", price: "€ 3,50" },
  { name: "ACQUA MANGIATORELLA", size: "1 lt.", price: "€ 3,00" },
  { name: "ACQUA FERRARELLE VETRO", size: "750 ml", price: "€ 3,50" },
];

export const birreRows: DrinkRow[] = [
  { name: "HEINEKEN ALLA SPINA BLADE", size: "20 cl", price: "€ 3,50" },
  { name: "HEINEKEN ALLA SPINA BLADE", size: "25 cl", price: "€ 4,50" },
  { name: "HEINEKEN ALLA SPINA BLADE", size: "40 cl", price: "€ 5,00" },
  { name: "MORETTI BAFFO D'ORO", size: "66 cl", price: "€ 4,00" },
  { name: "BECK'S", size: "33 cl", price: "€ 2,50" },
  { name: "CERES", size: "33 cl", price: "€ 4,00" },
  { name: "CERES RED ERIK", size: "33 cl", price: "€ 4,00" },
  { name: "CORONA", size: "33 cl", price: "€ 4,00" },
  { name: "ICHNUSA NON FILTRATA", size: "50 cl", price: "€ 5,00" },
  { name: "MESSINA CRISTALLI DI SALE", size: "33 cl", price: "€ 3,50" },
];

export type AmaroItem = { name: string; price: string };

export const amariColLeft: AmaroItem[] = [
  { name: "CAFFÈ", price: "€ 1,00" },
  { name: "AMARO", price: "€ 3,50" },
  { name: "GRAPPA", price: "€ 4,00" },
];

export const amariColRight: AmaroItem[] = [
  { name: "GRAPPA BARRICATA", price: "€ 5,50" },
  { name: "GRAPPA 903", price: "€ 5,50" },
  { name: "COGNAC", price: "€ 6,00" },
];

export type WineItem = {
  name: string;
  price: string;
  detail?: string;
};

export type WineCategoryBlock = {
  label: string;
  items: WineItem[];
};

export type WineryBlock = {
  id: string;
  winery: string;
  categories: WineCategoryBlock[];
};

export const wineWineries: WineryBlock[] = [
  {
    id: "costantino",
    winery: "CASA VINICOLA COSTANTINO",
    categories: [
      {
        label: "BIANCHI",
        items: [
          {
            name: "QUATER",
            detail: "Muller thurgau, Chardonnay, Grillo, Catarratto",
            price: "€ 20,00",
          },
          { name: "CATARRATTO", price: "€ 18,00" },
          { name: "SBRIU", price: "€ 20,00" },
        ],
      },
      {
        label: "ROSSI",
        items: [{ name: "MERLOT", price: "€ 20,00" }],
      },
    ],
  },
  {
    id: "milazzo",
    winery: "AZIENDA AGRICOLA MILAZZO",
    categories: [
      {
        label: "BIANCHI",
        items: [
          { name: "BIANCO DI NERA", price: "€ 28,00" },
          { name: "CHARME", price: "€ 28,00" },
        ],
      },
    ],
  },
  {
    id: "rapitala",
    winery: "RAPITALÀ",
    categories: [
      {
        label: "BIANCHI",
        items: [{ name: "BOUQUET", price: "€ 25,00" }],
      },
    ],
  },
  {
    id: "donnafugata",
    winery: "CASA VINICOLA DONNAFUGATA",
    categories: [
      {
        label: "BIANCHI",
        items: [
          { name: "ANTHILIA", detail: "Ansonica - Catarratto", price: "€ 22,00" },
          { name: "LA FUGA", detail: "100% Chardonnay", price: "€ 25,00" },
        ],
      },
      {
        label: "ROSSI",
        items: [
          {
            name: "MILLE E UNA NOTTE",
            detail: "90% Nero d'Avola",
            price: "€ 80,00",
          },
        ],
      },
    ],
  },
  {
    id: "firriato",
    winery: "CASA VINICOLA FIRRIATO",
    categories: [
      {
        label: "BIANCHI",
        items: [
          { name: "ALTAVILLA D. CORTE", detail: "100% Grillo", price: "€ 20,00" },
          { name: "CHARME", detail: "Vino frizzante", price: "€ 22,00" },
        ],
      },
    ],
  },
  {
    id: "ducasalaparuta",
    winery: "DUCA DI SALAPARUTA",
    categories: [
      {
        label: "BIANCHI",
        items: [
          { name: "CORVO GLICINE", price: "€ 16,00" },
          { name: "CORVO COLOMBA PLATINO", price: "€ 20,00" },
        ],
      },
      {
        label: "ROSSI",
        items: [
          { name: "PASSO DELLE MULE", detail: "Nero d'Avola", price: "€ 22,00" },
        ],
      },
    ],
  },
  {
    id: "gorghitondi",
    winery: "TENUTA GORGHI TONDI",
    categories: [
      {
        label: "BIANCHI",
        items: [
          { name: "BABBIÒ", detail: "Frizzante Biologico", price: "€ 22,00" },
        ],
      },
    ],
  },
  {
    id: "planeta",
    winery: "AZIENDA AGRICOLA PLANETA",
    categories: [
      {
        label: "BIANCHI",
        items: [
          {
            name: "LA SEGRETA",
            detail: "Insolia, Chardonnay",
            price: "€ 22,00",
          },
          { name: "ALASTRO", detail: "Grecanico", price: "€ 23,00" },
        ],
      },
      {
        label: "ROSSI",
        items: [
          {
            name: "PLUMBAGO",
            detail: "Nero d'Avola 100% in purezza",
            price: "€ 22,00",
          },
        ],
      },
    ],
  },
  {
    id: "tasca",
    winery: "TASCA D'ALMERITA",
    categories: [
      {
        label: "BIANCHI",
        items: [
          {
            name: "REGALEALI",
            detail: "Insolia - Catarratto",
            price: "€ 20,00",
          },
          {
            name: "LEONE DI TASCA",
            detail: "Insolia - Chardonnay",
            price: "€ 25,00",
          },
        ],
      },
      {
        label: "ROSSI",
        items: [{ name: "LAMURI", price: "€ 24,00" }],
      },
    ],
  },
  {
    id: "rallo",
    winery: "RALLO",
    categories: [
      {
        label: "BIANCHI",
        items: [
          {
            name: "CARTA D'ORO",
            detail: "Insolia - Catarratto",
            price: "€ 20,00",
          },
        ],
      },
      {
        label: "ROSSI",
        items: [
          {
            name: "PRINCIPE",
            detail: "Nero d'Avola - Syrah",
            price: "€ 20,00",
          },
        ],
      },
    ],
  },
  {
    id: "cassara",
    winery: "CASSARÀ",
    categories: [
      {
        label: "BIANCHI",
        items: [
          { name: "GRILLO", price: "€ 25,00" },
          { name: "BION DOLCANO", price: "€ 25,00" },
        ],
      },
    ],
  },
  {
    id: "frizzanti",
    winery: "VINI FRIZZANTI E PROSECCHI",
    categories: [
      {
        label: "BIANCHI",
        items: [
          { name: "MIONETTO LEGATURA CALVARESE", price: "€ 25,00" },
          {
            name: "BELSTAR PROSECCO DOC VALDOBBIADENE",
            price: "€ 18,00",
          },
          { name: "MOËT & CHANDON", detail: "Champagne", price: "€ 60,00" },
          {
            name: "VEUVE CLIQUOT",
            detail: "Brut millesimato",
            price: "€ 70,00",
          },
        ],
      },
    ],
  },
];
