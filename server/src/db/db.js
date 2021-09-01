/*
- npm install pg for connecting to postgres
- specify necessary info
- export pool to be able to query
*/

const Pool = require("pg").Pool
const dotenv = require("dotenv")
dotenv.config()

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_URI,
  ssl: {
    rejectUnauthorized: false,
  },
})

module.exports = { pool }
