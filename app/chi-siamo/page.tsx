'use client';

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import SafeImage from '@/components/SafeImage';
import BackButton from '@/components/BackButton';
import { ChefHat, Fish, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Claudio Parisi',
    role: 'Titolare e Chef',
    description:
      "Con oltre trent'anni di esperienza nella cucina di pesce, Claudio Parisi porta la passione per il mare in ogni piatto. La sua maestria nella selezione e preparazione del pesce fresco fa del Ristorante Arabesque un punto di riferimento per gli amanti della cucina siciliana.",
    image: '/Claudio-Parisi.png'
  }
];

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationBar />
      <BackButton />
      
      {/* Spacer for desktop nav */}
      <div className="hidden md:block h-16"></div>
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Chi Siamo
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
        </div>

        {/* Descrizione del Locale */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Fish className="text-blue-600 dark:text-blue-400" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Il Nostro Locale
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Nel cuore di Terrasini, tra le onde del Mediterraneo e la tradizione siciliana, 
              il Ristorante Arabesque vi accoglie in un&apos;atmosfera raffinata dove ogni piatto 
              racconta una storia di passione e maestria. La nostra cucina celebra la purezza 
              del pesce fresco, selezionato quotidianamente dai pescatori locali, e lo trasforma 
              in creazioni culinarie che uniscono l&apos;autenticità della tradizione all&apos;innovazione 
              della gastronomia moderna.
            </p>
          </div>
        </section>

        {/* Specialità */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <ChefHat className="text-purple-600 dark:text-purple-400" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Le Nostre Specialità
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ogni giorno, i nostri pescatori portano a riva il pescato più fresco del Mediterraneo. 
                  La nostra cucina trasforma questi tesori del mare in piatti che esaltano la naturale 
                  bontà del pesce, rispettando le tradizioni culinarie siciliane.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dalle crudità di pesce alle zuppe di mare, dai primi piatti con frutti di mare 
                  alle grigliate di pesce fresco, ogni ricetta è frutto di anni di esperienza e 
                  di un amore profondo per il mare e i suoi sapori.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ogni ingrediente è scelto con cura, ogni ricetta è frutto di anni di esperienza, 
                  ogni boccone è un viaggio attraverso i sapori del mare. La nostra passione per 
                  l&apos;eccellenza si riflette in ogni piatto che portiamo in tavola.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Benvenuti in un&apos;esperienza gastronomica unica, dove l&apos;eccellenza incontra la passione 
                  e dove ogni pasto diventa un momento indimenticabile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-blue-600 dark:text-blue-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Il Nostro Team
            </h2>
          </div>
          
          <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="text-gray-400" size={64} />
                      </div>
                    }
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Spacer for mobile nav */}
      <div className="md:hidden h-20"></div>

      <Footer />
    </div>
  );
}

