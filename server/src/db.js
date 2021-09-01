/*
- npm install pg for connecting to postgres
- specify necessary info
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



