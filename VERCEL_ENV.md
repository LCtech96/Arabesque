# Variabili d'Ambiente per Vercel

## Configurazione su Vercel

Vai su Vercel Dashboard → Il tuo progetto → Settings → Environment Variables

Aggiungi la seguente variabile d'ambiente:

### Variabile Richiesta

```
DATABASE_URL=your_neon_connection_string_here
```

**Dove trovare il valore:**
1. Vai su [Neon Console](https://console.neon.tech)
2. Seleziona il tuo progetto/database
3. Vai su "Connection Details" o "Connection String"
4. Copia la connection string (formato: `postgresql://user:password@host/database?sslmode=require`)

### Note Importanti

- **Ambiente**: Seleziona tutti gli ambienti (Production, Preview, Development)
- **Sicurezza**: Non committare mai la connection string nel repository
- **Formato**: La connection string deve essere completa e valida

### Esempio di Connection String Neon

```
postgresql://username:password@ep-xxxx-xxxx.region.aws.neon.tech/dbname?sslmode=require
```

---

## Variabili d'Ambiente Opzionali

Se in futuro aggiungi altre variabili d'ambiente, aggiungile qui seguendo lo stesso formato.


