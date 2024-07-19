import { Pool } from "pg";
const pool = new Pool({
    user: process.env.PGUSER || 'postgres',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'pessoas',
    password: process.env.PGPASSWORD || 'postgre',
    port: Number(process.env.PGPORT) || 5432
});
export default pool;