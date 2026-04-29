'use client';

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Great_Vibes, Cinzel } from 'next/font/google';
import type { MenuDish, MenuSection } from '@/lib/menu-data';
import { menuSections } from '@/lib/menu-data';

const fontMenuTitle = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const fontMenuBody = Cinzel({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const ink = '#5d4037';
const inkMuted = '#6d4c41';
const parchment = '#fdfaf5';
const parchmentEdge = '#f0e6d8';

function MenuRow({ dish }: { dish: MenuDish }) {
  return (
    <li className="border-b border-[#8b5e3c]/18 last:border-b-0">
      <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0 flex-1">
          <p
            className="text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.04em] sm:text-sm md:text-[0.95rem]"
            style={{ color: ink, fontFamily: fontMenuBody.style.fontFamily }}
          >
            {dish.name}
          </p>
          {dish.detail ? (
            <p
              className="mt-1 text-[0.65rem] italic leading-relaxed sm:text-xs md:text-sm"
              style={{ color: inkMuted, fontFamily: fontMenuBody.style.fontFamily }}
            >
              ({dish.detail})
            </p>
          ) : null}
        </div>
        <p
          className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-wide sm:pt-0.5 sm:text-right sm:text-sm md:text-[0.95rem]"
          style={{ color: ink, fontFamily: fontMenuBody.style.fontFamily }}
        >
          {dish.price}
        </p>
      </div>
    </li>
  );
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <section aria-labelledby={`menu-${section.id}`}>
      <h2
        id={`menu-${section.id}`}
        className={`${fontMenuTitle.className} mb-8 text-center text-4xl leading-none sm:text-5xl md:text-6xl`}
        style={{ color: '#6b4423' }}
      >
        {section.title}
      </h2>
      <ul className="list-none p-0">
        {section.items.map((dish) => (
          <MenuRow key={`${section.id}-${dish.name}`} dish={dish} />
        ))}
      </ul>
    </section>
  );
}

function MenuParchmentCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto w-full max-w-3xl rounded-sm px-4 py-8 shadow-md sm:px-8 md:px-12 md:py-12"
      style={{
        background: `linear-gradient(135deg, ${parchment} 0%, #faf6ef 45%, ${parchmentEdge} 100%)`,
        borderWidth: 3,
        borderStyle: 'double',
        borderColor: '#7b5233',
        boxShadow: 'inset 0 0 60px rgba(123, 82, 51, 0.06), 0 8px 24px rgba(0,0,0,0.08)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-3 rounded-sm border border-dotted border-[#a07860]/35 sm:inset-4"
        aria-hidden
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

function MenuFooterNote() {
  return (
    <div
      className="mt-8 flex flex-col gap-3 border-t border-[#8b5e3c]/25 pt-6 text-[0.6rem] sm:flex-row sm:items-end sm:justify-between sm:text-xs"
      style={{ fontFamily: fontMenuBody.style.fontFamily }}
    >
      <p className="max-w-xl italic leading-relaxed" style={{ color: inkMuted }}>
        *occasionalmente possono essere serviti prodotti surgelati o congelati
      </p>
      <p
        className="shrink-0 text-right text-[0.7rem] font-bold uppercase tracking-wide sm:text-sm"
        style={{ color: ink }}
      >
        SERVIZIO € 2,00
      </p>
    </div>
  );
}

const mainSections = menuSections.slice(0, 4);
const dolceBlockSections = menuSections.slice(4);

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#e8dfd0] dark:bg-gray-950">
      <NavigationBar />
      <BackButton />

      <div className="hidden md:block h-16" />

      <main
        className="mx-auto max-w-4xl px-3 py-8 sm:px-4 md:py-14"
        style={{ fontFamily: fontMenuBody.style.fontFamily }}
      >
        <div className="mb-10 text-center sm:mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6b4423]/80 dark:text-[#d4c4b0]"
            style={{ fontFamily: fontMenuBody.style.fontFamily }}
          >
            Ristorante Arabesque
          </p>
          <h1
            className={`${fontMenuTitle.className} mt-2 text-5xl text-[#5d4037] dark:text-[#e8dcc8] sm:text-6xl md:text-7xl`}
          >
            Menù
          </h1>
        </div>

        <div className="flex flex-col gap-10 sm:gap-14 md:gap-16">
          {mainSections.map((section) => (
            <MenuParchmentCard key={section.id}>
              <MenuSectionBlock section={section} />
            </MenuParchmentCard>
          ))}

          <MenuParchmentCard>
            {dolceBlockSections.map((section, i) => (
              <div key={section.id} className={i > 0 ? 'mt-12 border-t border-[#8b5e3c]/20 pt-12' : ''}>
                <MenuSectionBlock section={section} />
              </div>
            ))}
          </MenuParchmentCard>

          <div className="mx-auto w-full max-w-3xl px-1">
            <MenuFooterNote />
          </div>
        </div>
      </main>

      <div className="md:hidden h-20" />

      <Footer />
    </div>
  );
}
