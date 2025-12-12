'use client';

import { useState } from 'react';
import { Facebook, MessageCircle } from 'lucide-react';
import DisclaimerModal from './DisclaimerModal';

export default function Footer() {
  const [showFacebookDisclaimer, setShowFacebookDisclaimer] = useState(false);

  const handleWhatsApp = () => {
    // Sostituisci con il numero reale del ristorante (formato: 39XXXXXXXXX senza +)
    const phoneNumber = '393123456789';
    const message = encodeURIComponent('Ciao, vorrei informazioni sul Ristorante Arabesque');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <button
              onClick={() => setShowFacebookDisclaimer(true)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>
          </div>
          <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
            <p>Via Vincenzo Madonia, 104</p>
            <p className="mt-1">Terrasini, Palermo - Sicilia</p>
          </div>
          <div className="mt-6 text-center text-gray-500 dark:text-gray-500 text-sm">
            <p>
              Creato da{' '}
              <a 
                href="https://facevoice.ai/ai-chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Facevoice.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <DisclaimerModal
        isOpen={showFacebookDisclaimer}
        onClose={() => setShowFacebookDisclaimer(false)}
      />
    </>
  );
}

