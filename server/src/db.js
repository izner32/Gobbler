/*
- npm install pg for connecting to postgres
- specify necessary info to connect to the db 
- export pool to be able to query
*/

// import * as pg from 'pg';
// const { Pool,Client } = pg;
import pkg from "pg";
const { Pool } = pkg;
// const { Pool } = require('pg');

export const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
})





