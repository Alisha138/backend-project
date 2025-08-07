//First file, model folder will be the next one
/*This file is responsible for setting up a connection to your PostgreSQL database using the pg library*/ 
const { Pool } = require('pg');    //importing pool class (used to manage multiple connections) from node postgres library     
require('dotenv').config();             //loads environment variables from .env into process.env
const pool = new Pool({            //Creates a new connection pool
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.connect()                 //check connection to the database.
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch((err) => console.error('❌ DB connection error:', err.message));

module.exports = pool;          //module.export cuz we are using commonJS (default in node). As export is different so import will also be different like first line of this file
