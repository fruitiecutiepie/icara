import sql from './db'

import { createId } from '@paralleldrive/cuid2';

(async () => {
  const now = await sql`
    SELECT NOW();
  `
  console.table(now);
  
  await sql`
    DROP TABLE users
  `
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT NOT NULL PRIMARY KEY,
      name TEXT NOT NULL
    )
  `
  
  const name = 'Audrey';
  await sql`
    INSERT INTO users (id, name)
    VALUES (${createId()}, ${name})
    RETURNING *
  `
  
  await sql`DROP TABLE purchases`
  const createPurchaseTable = await sql`
  CREATE TABLE IF NOT EXISTS purchases (
    id TEXT NOT NULL PRIMARY KEY,
    name text NOT NULL
    )
    `
  console.table(createPurchaseTable);
  
  const readUser = await sql`
      SELECT *
      FROM users
  `
  console.table(readUser)
  const readPurhcase = await sql`
      SELECT *
      FROM purchases
  `
  console.table(readPurhcase)
  })()


// await sql`
// CREATE TABLE IF NOT EXISTS users (
//   id TEXT NOT NULL PRIMARY KEY,
//   first_name TEXT NOT NULL
//   last_name TEXT NOT NULL
//   email_address TEXT NOT NULL,
//   email_password TEXT NOT NULL,
// );

// CREATE TABLE IF NOT EXISTS brands (
//   id TEXT NOT NULL PRIMARY KEY,
//   name TEXT NOT NULL,
//   user_id TEXT NOT NULL,
//   CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE RESTRICT ON UPDATE CASCADE
// );

// CREATE UNIQUE INDEX idx_username ON users(email_address);

// CREATE TABLE IF NOT EXISTS items (
//   id TEXT NOT NULL PRIMARY KEY,
//   name TEXT NOT NULL,
//   brand_id TEXT NOT NULL,
//   category TEXT NOT NULL,
//   type TEXT NOT NULL,
//   CONSTRAINT fk_brand_id FOREIGN KEY (brand_id) REFERENCES brands (id) ON DELETE RESTRICT ON UPDATE CASCADE
// );

// CREATE UNIQUE INDEX idx_item_name ON items(name);

// CREATE TABLE IF NOT EXISTS variants (
//   id TEXT NOT NULL PRIMARY KEY,
//   item_id TEXT NOT NULL,
//   name TEXT NOT NULL,
//   rating INTEGER,
//   pros TEXT,
//   cons TEXT,
//   CONSTRAINT fk_item_id FOREIGN KEY (item_id) REFERENCES items (id) ON DELETE RESTRICT ON UPDATE CASCADE
// );

// CREATE UNIQUE INDEX idx_variant_name ON variants(name);

// CREATE TABLE IF NOT EXISTS photos (
//   id TEXT NOT NULL PRIMARY KEY,
//   item_id TEXT NOT NULL,
//   variant_id TEXT NOT NULL,
//   height INTEGER NOT NULL,
//   width INTEGER NOT NULL,
//   url TEXT NOT NULL,
//   CONSTRAINT fk_item_id_variant_id FOREIGN KEY (item_id, variant_id) REFERENCES variants (item_id, id) ON DELETE RESTRICT ON UPDATE CASCADE
// );

// CREATE UNIQUE INDEX idx_photo_url ON photos(url);

// CREATE TABLE IF NOT EXISTS purchases (
//   id TEXT NOT NULL PRIMARY KEY,
//   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   opened BOOLEAN NOT NULL DEFAULT false,
//   archived BOOLEAN NOT NULL DEFAULT false,
//   finished BOOLEAN NOT NULL DEFAULT false,
//   item_id TEXT NOT NULL,
//   variant_id TEXT NOT NULL,
//   purchase_price REAL NOT NULL,
//   period_after_opening INTEGER NOT NULL,
//   expire_at TIMESTAMP NOT NULL,
//   opened_at TIMESTAMP,
//   archived_at TIMESTAMP,
//   CONSTRAINT fk_item_id_variant_id FOREIGN KEY (item_id, variant_id) REFERENCES variants (item_id, id) ON DELETE RESTRICT ON UPDATE CASCADE
// );
// `