'use client';

import NavigationBar from '@/components/NavigationBar';
import Highlights from '@/components/Highlights';
import Footer from '@/components/Footer';
import SafeImage from '@/components/SafeImage';

export default function Home() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationBar />
      
      {/* Spacer for desktop nav */}
      <div className="hidden md:block h-16"></div>
      
      <main className="max-w-4xl mx-auto">
        {/* Cover Image - Facebook Style */}
        <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
          <SafeImage
            src="/cover-image.jpg"
            alt="Ristorante Arabesque - Tavola imbandita"
            fill
            className="object-cover"
            sizes="100vw"
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Immagine di copertina</p>
              </div>
            }
          />
        </div>

        {/* Profile Section */}
        <div className="px-4 md:px-6 -mt-16 md:-mt-24 relative z-10">
          {/* Profile Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto border-4 border-white dark:border-gray-900 rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-purple-200 dark:from-gray-700 dark:to-gray-800 shadow-lg">
            <SafeImage
              src="/profile-image.jpg"
              alt="Ristorante Arabesque - Piatto di pesce"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 160px"
              unoptimized
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl">🐟</span>
                </div>
              }
            />
          </div>

          {/* Restaurant Name and Title */}
          <div className="text-center mt-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-montserrat">
              Ristorante Arabesque
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1 italic font-fireflies">
              Cucina e gusti, tradizioni e passioni
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto font-montserrat">
              Il punto d'incontro dove la freschezza del mare e l'alta cucina si abbracciano, 
              dando vita a un sublime connubio di sapori
            </p>
          </div>

          {/* Highlights */}
          <Highlights />

          {/* Description Section */}
          <div className="mt-8 mb-12 px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                Nel cuore di Terrasini, tra le onde del Mediterraneo e la tradizione siciliana, 
                il Ristorante Arabesque vi accoglie in un'atmosfera raffinata dove ogni piatto 
                racconta una storia di passione e maestria. La nostra cucina celebra la purezza 
                del pesce fresco, selezionato quotidianamente dai pescatori locali, e lo trasforma 
                in creazioni culinarie che uniscono l'autenticità della tradizione all'innovazione 
                della gastronomia moderna. Ogni ingrediente è scelto con cura, ogni ricetta è 
                frutto di anni di esperienza, ogni boccone è un viaggio attraverso i sapori del mare. 
                Benvenuti in un'esperienza gastronomica unica, dove l'eccellenza incontra la passione.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Spacer for mobile nav */}
      <div className="md:hidden h-20"></div>

      <Footer />
    </div>
  );
}

