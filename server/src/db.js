/*
- npm install pg for connecting to postgres
- specify necessary info to connect to the db 
- export pool to be able to query
*/

const Pool = require('pg').Pool;

export const pool = new Pool({
    user: '',
    host: 'localhost',
    database:  '',
    password: '',
    port:5432,
  })



