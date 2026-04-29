'use client';

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

const menuNatale = {
  title: 'Menù di Natale 2025',
  items: [
    'Spada marinato agli agrumi di Sicilia',
    'Salmone all\'aneto',
    'Insalatina di polpo e patate aromatizzata',
    'Polpette di tonno e ricotta',
    'Bruschette assortite',
    'Polpi murati',
    'Caponata di pesce spada',
    'Cardi in pastella',
    'Fritturina di paranza e panelle della casa',
    'Risottino baia dei coralli (granchio, lamelle di seppia, gobbetto di Mazara con pomodorini confit)',
    'Lasagne verdi ricco mare',
    'Saccottino di cernia gratinata con porcini etnei e lamelle di patate',
    'Gamberoni in pastella con finocchio gratinato al forno',
    'Panettone Classico con canditi e profiterol nocciola e cioccolato',
    'Cantina carta d\'oro Rallo Bianco',
    'Acqua-Caffè',
    'Amaro-Limoncello'
  ]
};

const menuCapodanno = {
  title: 'Menù di Capodanno',
  items: [
    'Cocktail di Benvenuto',
    'Tartare di salmone avocado lime ed erbetta cipollina',
    'Capesante in crema zafferano',
    'Crostino di pane nero con tonno philadelphia e pistacchio',
    'Pesce spada marinato con bacche di ginepro e pernod',
    'Risottino con gamberi rossi di mazara dentice, burro di mandorle al profumo di lime',
    'Ravioli bicolore ripieni di cernia con raguttata di triglie, finocchietto selvatico e pinoli tostati',
    'Bauletto di ricciola su crema di cavol fiore gratin, seppia ripiena e scampi scottati al profumo di bergamotto',
    'Flan di verdure',
    'Charlotte con ricotta cioccolato e frutti di bosco',
    'Dolcetti tipici siciliani',
    'Lenticche, cotechino e brindisi augurale con prosecco',
    'Cantina Carta d\'oro vino rallo',
    'Acqua-caffè',
    'Amaro-limoncello'
  ]
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationBar />
      <BackButton />
      
      {/* Spacer for desktop nav */}
      <div className="hidden md:block h-16"></div>
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <UtensilsCrossed className="text-blue-600 dark:text-blue-400" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              I Nostri Menù
            </h1>
            <Sparkles className="text-purple-600 dark:text-purple-400" size={40} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Scopri le nostre proposte gastronomiche per le festività
          </p>
        </div>

        {/* Menù di Natale */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-10 shadow-lg border-2 border-red-200 dark:border-red-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {menuNatale.title}
              </h2>
            </div>
            <div className="space-y-3">
              {menuNatale.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-semibold mt-1 min-w-[24px]">
                    {index + 1}.
                  </span>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menù di Capodanno */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-10 shadow-lg border-2 border-blue-200 dark:border-blue-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {menuCapodanno.title}
              </h2>
            </div>
            <div className="space-y-3">
              {menuCapodanno.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-purple-600 dark:text-purple-400 font-semibold mt-1 min-w-[24px]">
                    {index + 1}.
                  </span>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="text-center">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
              Per prenotazioni e informazioni sui nostri menù festivi, contattaci:
            </p>
            <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Via Vincenzo Madonia, 104 - Terrasini, Palermo
            </p>
          </div>
        </section>
      </main>

      {/* Spacer for mobile nav */}
      <div className="md:hidden h-20"></div>

      <Footer />
    </div>
  );
}

