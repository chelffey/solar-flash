import dotenv from "dotenv";
import { Pool, QueryResult, QueryConfig } from "pg";

dotenv.config();

const database = process.env.PGDATABASE;

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;

const pool = new Pool({
  connectionString: connectionString,
});

type QueryParams = (err: Error, result: QueryResult) => void;
export const query = (text : string | QueryConfig, params : QueryParams) => pool.query(text, params);
export const end = () => pool.end();
export default { query, end };
