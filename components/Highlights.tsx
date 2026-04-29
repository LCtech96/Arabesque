'use client';

import { useState } from 'react';
import HighlightModal from './HighlightModal';

interface Highlight {
  id: string;
  title: string;
  emoji: string;
  content: React.ReactNode;
}

const highlights: Highlight[] = [
  {
    id: '1',
    title: 'Ingredienti',
    emoji: '🐟',
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I nostri piatti sono preparati con ingredienti freschi e di qualità, selezionati quotidianamente:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Pesce fresco:</strong> Spada, Salmone, Tonno, Cernia, Ricciola, Dentice, Gamberi, Polpo, Seppia, Scampi</li>
          <li><strong>Frutti di mare:</strong> Granchio, Gobbetto di Mazara, Capesante, Cozze, Vongole</li>
          <li><strong>Verdure:</strong> Patate, Pomodorini, Finocchio, Cavolfiore, Cardi, Zafferano</li>
          <li><strong>Condimenti:</strong> Agrumi di Sicilia, Aneto, Ginepro, Pernod, Bergamotto, Pistacchio, Mandorle</li>
          <li><strong>Formaggi:</strong> Ricotta, Philadelphia</li>
          <li><strong>Pasta e riso:</strong> Lasagne verdi, Ravioli, Risotto</li>
        </ul>
      </div>
    )
  },
  {
    id: '2',
    title: 'Allergeni',
    emoji: '⚠️',
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed font-semibold text-red-600 dark:text-red-400">
          ATTENZIONE: I nostri piatti possono contenere i seguenti allergeni:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Pesce e prodotti a base di pesce</strong> - Presente in tutti i piatti principali</li>
          <li><strong>Crostacei</strong> - Gamberi, granchi, scampi</li>
          <li><strong>Molluschi</strong> - Polpo, seppia, cozze, vongole, capesante</li>
          <li><strong>Uova</strong> - Presenti in paste, panettone, profiterol</li>
          <li><strong>Latte e derivati</strong> - Ricotta, Philadelphia, burro, panna</li>
          <li><strong>Glutine</strong> - Pasta, pane, panelle, pastella, panettone</li>
          <li><strong>Frutta a guscio</strong> - Pistacchi, mandorle, pinoli, nocciole</li>
          <li><strong>Solfiti</strong> - Presenti nel vino</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Si prega di informare il personale di eventuali allergie o intolleranze alimentari.
        </p>
      </div>
    )
  },
  {
    id: '3',
    title: 'Vegan/Gluten Free',
    emoji: '🌱',
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Alcuni dei nostri piatti sono adatti a diete specifiche:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Opzioni Vegetariane/Vegane:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Caponata di pesce spada (versione vegetariana disponibile)</li>
              <li>Flan di verdure</li>
              <li>Cardi in pastella (se preparati senza uova)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Opzioni Senza Glutine:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Spada marinato agli agrumi</li>
              <li>Salmone all&apos;aneto</li>
              <li>Insalatina di polpo e patate</li>
              <li>Polpi murati</li>
              <li>Pesce spada marinato</li>
              <li>Risottino (senza aggiunta di farina)</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Si prega di comunicare al personale eventuali esigenze dietetiche specifiche al momento della prenotazione.
        </p>
      </div>
    )
  },
  {
    id: '4',
    title: 'Best Seller',
    emoji: '⭐',
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I piatti più richiesti dai nostri clienti:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Dal Menù di Natale:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Risottino baia dei coralli</li>
              <li>Lasagne verdi ricco mare</li>
              <li>Saccottino di cernia gratinata</li>
              <li>Gamberoni in pastella</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Dal Menù di Capodanno:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Tartare di salmone avocado</li>
              <li>Risottino con gamberi rossi</li>
              <li>Ravioli bicolore ripieni di cernia</li>
              <li>Bauletto di ricciola</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Questi piatti rappresentano l&apos;eccellenza della nostra cucina e sono sempre disponibili.
        </p>
      </div>
    )
  }
];

export default function Highlights() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <div className="flex justify-center space-x-4 md:space-x-6 mt-6 mb-8 px-4">
        {highlights.map((highlight) => (
          <button
            key={highlight.id}
            onClick={() => setOpenModal(highlight.id)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 group-hover:scale-110 transition-transform">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-2xl md:text-3xl">{highlight.emoji}</span>
              </div>
            </div>
            <span className="mt-2 text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium text-center max-w-[60px] md:max-w-[80px]">
              {highlight.title}
            </span>
          </button>
        ))}
      </div>

      {highlights.map((highlight) => (
        <HighlightModal
          key={highlight.id}
          isOpen={openModal === highlight.id}
          onClose={() => setOpenModal(null)}
          title={highlight.title}
          content={highlight.content}
        />
      ))}
    </>
  );
}




