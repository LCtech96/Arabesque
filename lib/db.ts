import { neon } from '@neondatabase/serverless';

// Configurazione database Neon
// Aggiungi la tua connection string in .env.local come DATABASE_URL
let sql: ReturnType<typeof neon> | null = null;

if (process.env.DATABASE_URL) {
  try {
    sql = neon(process.env.DATABASE_URL);
  } catch (error) {
    console.warn('Database connection not configured:', error);
  }
}

export { sql };

