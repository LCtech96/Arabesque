'use client';

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Great_Vibes, Cinzel } from 'next/font/google';
import type { AmaroItem, DrinkRow, MenuDish, MenuSection, WineItem, WineryBlock } from '@/lib/menu-data';
import {
  amariColLeft,
  amariColRight,
  bibiteRows,
  birreRows,
  menuSections,
  pizzaPage1Section,
  pizzaPage2Section,
  wineWineries,
} from '@/lib/menu-data';

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

function AggiunteBanner() {
  return (
    <div
      className="mx-auto mt-8 max-w-lg rounded-sm bg-[#5d4037] px-4 py-3 text-center text-[0.65rem] font-bold uppercase leading-snug tracking-wide text-white shadow sm:text-xs"
      style={{ fontFamily: fontMenuBody.style.fontFamily }}
    >
      Aggiunte € 0,50 - 1,00 - 1,50 - 2,00
    </div>
  );
}

function PizzaFooterPage1() {
  return (
    <div className="mt-6">
      <AggiunteBanner />
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
    </div>
  );
}

function PizzaFooterPage2() {
  return (
    <div className="mt-6">
      <div className="mb-6 text-center" style={{ fontFamily: fontMenuBody.style.fontFamily }}>
        <p
          className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#5d4037] sm:text-sm"
        >
          CHIEDI LA PIZZA DEL GIORNO
        </p>
        <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[#6d4c41] sm:text-xs">
          (IL PREZZO VARIA)
        </p>
      </div>
      <AggiunteBanner />
      <div
        className="mt-8 flex flex-col gap-3 border-t border-[#8b5e3c]/25 pt-6 text-[0.6rem] sm:flex-row sm:items-end sm:justify-between sm:text-xs"
        style={{ fontFamily: fontMenuBody.style.fontFamily }}
      >
        <p className="max-w-xl italic leading-relaxed" style={{ color: inkMuted }}>
          *eccezionalmente possono essere serviti prodotti surgelati o congelati
        </p>
        <p
          className="shrink-0 text-right text-[0.7rem] font-bold uppercase tracking-wide sm:text-sm"
          style={{ color: ink }}
        >
          SERVIZIO € 2,00
        </p>
      </div>
    </div>
  );
}

function DrinkTable({ rows }: { rows: DrinkRow[] }) {
  return (
    <ul className="mt-4 list-none space-y-0 p-0">
      {rows.map((row) => (
        <li
          key={`${row.name}-${row.size}`}
          className="grid grid-cols-1 gap-x-4 gap-y-1 border-b border-[#8b5e3c]/18 py-2.5 text-[0.65rem] last:border-b-0 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-baseline sm:text-sm"
          style={{ fontFamily: fontMenuBody.style.fontFamily }}
        >
          <span className="font-semibold uppercase tracking-wide text-[#5d4037]">{row.name}</span>
          <span className="text-[#6d4c41] sm:text-right">{row.size}</span>
          <span className="font-semibold uppercase text-[#5d4037] sm:text-right">{row.price}</span>
        </li>
      ))}
    </ul>
  );
}

function AmaroRow({ item }: { item: AmaroItem }) {
  return (
    <li
      className="flex items-baseline justify-between gap-3 border-b border-[#8b5e3c]/18 py-2.5 text-[0.65rem] last:border-b-0 sm:text-sm"
      style={{ fontFamily: fontMenuBody.style.fontFamily }}
    >
      <span className="font-semibold uppercase tracking-wide text-[#5d4037]">{item.name}</span>
      <span className="shrink-0 font-semibold text-[#5d4037]">{item.price}</span>
    </li>
  );
}

function BeveragesCard() {
  return (
    <MenuParchmentCard>
      <section aria-labelledby="menu-bibite">
        <h2
          id="menu-bibite"
          className={`${fontMenuTitle.className} mb-4 text-center text-4xl text-[#6b4423] sm:text-5xl`}
        >
          Bibite
        </h2>
        <DrinkTable rows={bibiteRows} />
      </section>

      <section aria-labelledby="menu-birre" className="mt-12 border-t border-[#8b5e3c]/20 pt-12">
        <h2
          id="menu-birre"
          className={`${fontMenuTitle.className} mb-4 text-center text-4xl text-[#6b4423] sm:text-5xl`}
        >
          Birre
        </h2>
        <DrinkTable rows={birreRows} />
      </section>

      <section aria-labelledby="menu-amari" className="mt-12 border-t border-[#8b5e3c]/20 pt-12">
        <h2
          id="menu-amari"
          className={`${fontMenuTitle.className} mb-4 text-center text-4xl text-[#6b4423] sm:text-5xl`}
        >
          Amari e Digestivi
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
          <ul className="list-none p-0">
            {amariColLeft.map((item) => (
              <AmaroRow key={item.name} item={item} />
            ))}
          </ul>
          <ul className="list-none p-0">
            {amariColRight.map((item) => (
              <AmaroRow key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </section>

      <div
        className="mt-10 flex justify-end border-t border-[#8b5e3c]/25 pt-6 text-[0.7rem] font-bold uppercase tracking-wide sm:text-sm"
        style={{ color: ink, fontFamily: fontMenuBody.style.fontFamily }}
      >
        SERVIZIO € 2,00
      </div>
    </MenuParchmentCard>
  );
}

function WineryBanner({ title }: { title: string }) {
  return (
    <div className="mb-6 flex justify-center px-1">
      <div
        className="w-full max-w-xl bg-[#5d4037] px-4 py-2.5 text-center text-[0.6rem] font-bold uppercase leading-snug tracking-wider text-white shadow-md sm:px-8 sm:text-xs sm:tracking-widest"
        style={{
          fontFamily: fontMenuBody.style.fontFamily,
          clipPath: 'polygon(12px 0,calc(100% - 12px) 0,100% 50%,calc(100% - 12px) 100%,12px 100%,0 50%)',
        }}
      >
        {title}
      </div>
    </div>
  );
}

function wineToDish(w: WineItem): MenuDish {
  return { name: w.name, price: w.price, detail: w.detail };
}

function WineryBlockView({ block }: { block: WineryBlock }) {
  return (
    <div className="mb-12 last:mb-0">
      <WineryBanner title={block.winery} />
      {block.categories.map((cat) => (
        <div key={`${block.id}-${cat.label}`} className="mb-6 last:mb-0">
          <h3
            className="mb-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#5d4037] sm:text-xs"
            style={{ fontFamily: fontMenuBody.style.fontFamily }}
          >
            {cat.label}
          </h3>
          <ul className="list-none p-0">
            {cat.items.map((w) => (
              <MenuRow key={`${block.id}-${cat.label}-${w.name}`} dish={wineToDish(w)} />
            ))}
          </ul>
        </div>
      ))}
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

          <MenuParchmentCard>
            <MenuSectionBlock section={pizzaPage1Section} />
            <PizzaFooterPage1 />
          </MenuParchmentCard>

          <MenuParchmentCard>
            <MenuSectionBlock section={pizzaPage2Section} />
            <PizzaFooterPage2 />
          </MenuParchmentCard>

          <BeveragesCard />

          <MenuParchmentCard>
            <h2
              className={`${fontMenuTitle.className} mb-10 text-center text-4xl text-[#6b4423] sm:mb-12 sm:text-5xl md:text-6xl`}
            >
              Carta dei Vini
            </h2>
            {wineWineries.map((block) => (
              <WineryBlockView key={block.id} block={block} />
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
