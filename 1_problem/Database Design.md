# Database Design

## v1.0

The user database keeps a list of beauty items for the purpose of referencing and performing data analysis on those items. This database is only accessed by the user.

Items:
1. Images
2. Tags
3. Name
4. Brand
5. Use before (derived)
6. Best before (fetched from history)
7. Period after opening (PAO) (3m, 6m, 12m, 24m, etc.)
8. Purchase date (fetched from history, default to today, can be unspecified)
9. Purchased from (fetched from history): gifted text, online link, offline maps (can show analytics as well, multiple will be interesting, need to figure out the layout)
10. Opened date (fetched from history, default to today), shown when button "Open" clicked
11. Finished date (automatic when archived)
12. Size (show /g or /ml cost)
13. Variant (colour, smell, etc.)
14. Type (subcategory: toner, moisturiser etc., within category: skincare, makeup, tools, perfume)
15. Purchase price
16. X Main benefit (multi-check field), inferred from ingredients (automatic): anti-aging, hydration, brightness, acne, skin evenness, etc.
17. X Ingredients (embedded from official product links)
18. Rating
19. Comment
20. Notes

History (multiple) requirements, put in each item page (in a form of list): ^e1d165
1. Purchased from: online -> links (in-app transfer), offline -> store names & location (maps)
2. Purchase date
3. Purchase price
4. Opened date
5. Expiry date

First iteration: completely offline/local scenario, this is like saying there is no world outside of your beauty collection, i just got ahold of my items somehow. 
```ts
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env(DATABASE_URL)
}

model User {
  id       String  @id @default(cuid())
  email    String  @unique
  password String
  name     String
  brands   Brand[]
}

model Brand {
  id     String @id @default(cuid())
  name   String @unique
  userId String
  items  Item[]
  user   User   @relation(fields: [userId], references: [id])
}

model Item {
  id       String    @id @default(cuid())
  name     String    @unique
  brandId  String
  category String // inferred from type
  type     String // choose from a definitive list, handled in app
  variants Variant[]
  brand    Brand     @relation(fields: [brandId], references: [id])
}

model Variant {
  id        String     @id @default(cuid())
  name      String     @unique
  itemId    String
  rating    Int?
  photos    Photo[]
  purchases Purchase[]
  item      Item       @relation(fields: [itemId], references: [id])

  @@unique([itemId, id])
}

model Purchase {
  id                 String    @id @default(cuid())
  createdAt          DateTime  @default(now())
  opened             Boolean   @default(false)
  archived           Boolean   @default(false)
  finished           Boolean   @default(false)
  itemId             String
  variantId          String
  purchasePrice      Float
  periodAfterOpening Int // value should change depending on `type`, handled in app
  expireAt           DateTime // value should change depending on `type`, handled in app
  openedAt           DateTime? // update to `now()` if `opened`, handled in app
  archivedAt         DateTime? // update to `now()` if `archived`, handled in app
  itemVariant        Variant   @relation(fields: [itemId, variantId], references: [itemId, id])
}

model Photo {
  id          String  @id @default(cuid())
  url         String  @unique
  itemId      String
  variantId   String
  height      Int
  width       Int
  itemVariant Variant @relation(fields: [itemId, variantId], references: [itemId, id])
}
```

## v2.0