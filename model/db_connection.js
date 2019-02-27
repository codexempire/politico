import { Pool } from 'pg';
import { config } from 'dotenv';

config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

console.log(`pool Running`);

export default pool;
