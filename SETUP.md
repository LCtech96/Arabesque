# Guida Setup Ristorante Arabesque

## Installazione Dipendenze

```bash
npm install
```

## Configurazione Database Neon

1. Crea un account su [Neon](https://neon.tech)
2. Crea un nuovo database
3. Copia la connection string
4. Crea un file `.env.local` nella root del progetto:

```env
DATABASE_URL=your_neon_connection_string_here
```

## Aggiunta Immagini

Aggiungi le seguenti immagini nella cartella `public/`:

1. **cover-image.jpg** - Immagine di copertina (tavola imbandita)
   - Dimensioni consigliate: 1200x400px o superiore
   - Formato: JPG o PNG

2. **profile-image.jpg** - Immagine profilo (piatto di pesce)
   - Dimensioni consigliate: 400x400px (quadrata)
   - Formato: JPG o PNG

## Configurazione WhatsApp

Nel file `components/Footer.tsx`, modifica il numero di telefono:

```typescript
const phoneNumber = '39XXXXXXXXX'; // Sostituisci con il numero reale
```

Formato: 39 seguito dal numero senza spazi o caratteri speciali (es: 393123456789)

## Avvio Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## Build Produzione

```bash
npm run build
npm start
```

## Caratteristiche Implementate

✅ Layout stile Facebook (cover + profile image)
✅ Navigation bar responsive (mobile bottom, desktop top)
✅ Dark/Light mode toggle
✅ Highlights stile Instagram Stories
✅ Disclaimer modals per funzioni future
✅ Footer con bottoni Facebook e WhatsApp
✅ Design completamente responsive
✅ Database Neon configurato
✅ TypeScript e Next.js 14

## Prossimi Sviluppi

Le seguenti funzioni mostrano attualmente un disclaimer:
- Menù
- Chi siamo
- Asporto
- Facebook

Queste possono essere implementate in futuro aggiungendo le relative pagine/componenti.





