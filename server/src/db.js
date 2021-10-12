/*
- npm install pg for connecting to postgres
- specify necessary info to connect to the db 
- export pool to be able to query
*/

const Pool = require('pg').Pool;

export const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
  })



