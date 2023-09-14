import functions = require('firebase-functions');
import { Pool } from 'pg';

import pg from 'pg';
import {Connector} from '@google-cloud/cloud-sql-connector';
const {Pool} = pg;

const connector = new Connector();
const clientOpts = await connector.getOptions({
  instanceConnectionName: 'icara-app:us-central1:icara-db-dev',
  ipType: 'PUBLIC', 
});
const pool = new Pool({
  ...clientOpts,
  user: 'postgres',
  password: '#RY7@d@9dFrxR3mK',
  database: 'postgres',
  max: 5
});
const { rows } = await pool.query('SELECT NOW()');
console.table(rows); // prints returned time value from server

await pool.end();
connector.close();

// Create connection to Cloud SQL database
const pool = new Pool({
  host: '/cloudsql/audreysfirstproject:australia-southeast1:audrey-dev',
  user: 'postgres',
  password: 'JTZvzxy90v5z>BUi',
  database: 'postgres',
});

(async function init() {
  try {
    // Check if the 'myTable' table exists
    const checkTableQuery = `
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_name = 'myTable'
      );
    `;
    const { rows } = await pool.query(checkTableQuery);
    const tableExists = rows[0].exists;
  
    if (!tableExists) {
      // Clear the database
      const clearDatabaseQuery = 'DROP SCHEMA public CASCADE; CREATE SCHEMA public;';
      await pool.query(clearDatabaseQuery);
  
      // Create the 'myTable' table
      const createTableQuery = `
        CREATE TABLE myTable (
          id SERIAL PRIMARY KEY,
          column1 VARCHAR(255),
          column2 VARCHAR(255)
        );
      `;
      await pool.query(createTableQuery);
    }
    
    functions.logger.log('Database initialized successfully');
  } catch (err) {
    functions.logger.log('Error initializing database:', err);
  }
})();