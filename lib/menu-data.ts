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
