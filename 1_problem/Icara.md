# Icara

Your beauty item management app. (
	-> Your beauty assistant.
	I feel that this is inevitable as the app/idea scales.
)

It's like a CRM but for *your* beauty items.

Features:
+ Keep an eye on your skincare, hair, body, makeup, nails, fragrance, and tools

---

> [!QUESTION] Why was this developed? 
> Because there is no alternative. It's been more than 5 years and no one made an actually useful beauty keeper app that keeps item states. Interestingly, all the competitor's developer is a Slavic (probably Russian) man, who, presumably/typically, doesn't wear skincare or makeup.

The logo: considering the semantics of the [[Brand Philosophy#The Name]], the logo should be universally recognised as an eye. It should have long, thick, and luscious eyelashes, both upper and lower, as that's what all girls dream of—since Icara is the ideal way to consume beauty items.

What it does: keeps track of, organize your beauty purchases. Build your beauty collection. Icara is about yourself. Your skin, your body, your face, your hair, your concerns. It lets you discover what's best for you, what's your preference, and who you are from the beauty perspective. It lets you see how you evolve over time.

It lets you answer:
1. What did I buy yesterday, today, and (tomorrow)? When should I buy it again?
2. How much did I spend? Did the price increase?
3. Was it worth it? Do I like it?
4. How long can I use it? How long before I should use it? When did I use it? How long did I use it for?
5. How many times have I purchased it? (Do I like it every time?)
6. What do I have now?

3. pake kpn? skin cycling, 7-day customised routine (widget), automatic? options moisturiser punya apa ae. user can delete & add item manually.
4. habis exfol butuh calming, pake mask apalagi pake makeup daily
5. makeup looks (natural, bold, korean) search like pinterest, google search image, select image, save. in-app pinterest. only for inspo
6. lek lagi breakout pake ini
7. mau liat aku punya apa
8. mau liat aku prnh beli apa ae

Routine: should be drag-and-drop like lego
1. Skin/hair/etc? cycling
2. Makeup looks from your owned items

User opens the app when:
1. They buy an item
2. They open an item
3. They archive an item
4. Item is almost expired (probably)
5. Item is expired (probably)
6. They change their skin cycling routine

User opens the app when they:
1. Add/Purchase (ideally) an item
2. Open an item
3. Archive an item
4. Look at their storage, collection, and archive

Keyword: personalised, history, dynamic, reference, better, yours.

Skinsort routine is what's ideal, but Icara's is what you actually have. What's realistic, so to speak.

Founder-market fit: Not many people are capable of building an app, female, and aesthetically aware. I am. After all, I've had this idea to make a better Beauty Keeper app sink in since I was in junior high school. I just didn't have the capabilities then. But now I do. Maybe. Most developers aren't interested in the beauty industry because they're males. Most beauty consumers aren't interested in technical things because they're females. They don't know the problem each other has. I know.

Inspiration: Beauty Keeper, should at least have all their features as a minimum

Target market: women of all ages, and men in their 20s (presumably). Honestly, everyone that wears makeup will benefit from this. (Or, rather, the people who look for this kind of app probably wear makeup) Why makeup? Because there are more variants. They need to keep records of them. And skincare as well, honestly. UI should not be gender-specific and should allow for customisations (app icon, theme). Beauty influencers/reviewers/bloggers/enthusiasts are *the* target for premium add-on features. But, if this is the case, it makes sense to use the subscription business model, since they use it to make money.

Supported devices: iOS, Android, web (for now, will consider desktop if makes sense in the future, and maybe even something like for VisionOS or iPadOS lol)

Database: local on user's device, sync with iCloud etc. (maybe should still do this with cache?)

Goal: get it published to app stores and talk to users

Priority: get skincare section done first (bcs that's where your expertise is), and then tools (bcs it's similar to skincare section, and simpler), and then makeup

[[Item Categories]] DONE

Item life cycle: 
1. Item is unopened.
2. Item is opened.
3. Item is discarded. Item can be discarded at any point.

Hmm, you can compare this with email life cycle. When you have a new email, it's unread, and then read, and then archived. It can be archived at any point. You can also add labels to certain emails based on some criteria. At least the flow is similar. Might be able to use similar UX flow -> swipe left, right, list view.

User possessions:
5-8 is premium
1. A user has a storage. This is a list of items that the user has bought but hasn't opened.
2. A user has a collection. This is a list of items that the user has opened. It doesn't matter if the item is used actively or not. 
3. A user has an archive. This is a list of items that the user has discarded, for whatever reasons. User can archive items manually. Archive automatically by system when expired. There can be multiple reasons a user archived an item: 1) They throw it away, 2) They give it away, 3) They recycle it, or 4) They have expired.
	> [!QUESTION] Does it matter for what reason user archives an item?
4. A user has a routine. This is only for skincare. This is a list of items selected from their collection. But, if their collection is small enough, all of them is part of their routine.
5. X A user has a repurchase list. Remind them to buy it. They might want to keep stock of certain items. This means users can subscribe to items.
	1. Cc: "They don't need reminders, they will know to buy it when they almost run out of it. Also, they'll probably want to purchase a different item."
6. X A user has non-negotiable/must-have items. Remind them when they don't have it. They might want to keep stock of certain categories. This means users can subscribe to categories.
	1. Cc: "They don't need reminders, they will know to buy it when they almost run out of it. Also, they'll probably want to purchase a different item."

Use cases:
1. Store beauty items: haircare, skincare, makeup, bodycare, nailcare, perfume, tools? (brushes, gua shas, lash curler, beauty blender, cotton pads, fake lashes, etc.)
2. Keep track of item history: how many times have I purchased this item? 
3. Remind users near expiry (a month before)
4. Repurchase item
5. X See item ingredients & insights (no need for lengthy description, just brief overview in a pop-up window somewhere), anything related to insights may be premium
6. X Analytics on ingredients/main benefit (exclude makeup (bcs they're all over the place and no one cares)), price per item, total spending per month (sectioned off item categories)
7. Beauty routine?

Landing page: let users add new item, repurchase item, & see what items they have as quickly as possible

Notes:
1. Ideally, item blobs should be automated. User should not have to type in anything that's not their use-case specific.
	1. Reversed. Anything that is not user-specific doesn't need to be kept in the app. But this principle is still useful/has a utility.
2. We need to have purchases[] field in item, when new auto-append to list as first purchase.
3. Ask user if item is finished when archived

Add item flow (button):
1. Take a photo
2. Choose category: broad (e.g., haircare) and then specific (e.g., hair-specific categories)
3. Fill in fields/blobs

Repurchase item flow (button):
1. Choose from list of all items in history (based on category)
2. Fill additional fields per history [[Icara#^e1d165]]

View:
1. X Makeup should be in a different section (/theme) from the rest of the beauty items (skincare, bodycare, etc.), bcs vastly different fields, each complex on their own, can make user pay for this extra feature, this will also make the app gender-agnostic
2. X Tools should have a different section as well, bcs they don't have expiry date, use length, ingredients, etc.
	1. Solved by optional fields.
3. Need to be able to sort on (user-specific): name (alphabetical), brand (alphabetical, preview on how many items in total? or just active), purchase date (for/basically history log), expiry date. Name, brand, purchased, opened, finished, best before, rating, price
4. Main view: sort on categories (we should have a definite list of categories, but don't show in main view unless users have items in that category, otherwise clutter) -> toner, serum, ampoule, moisturiser, suncare, mask, exfoliator, face cleanser, makeup remover, makeup (gazillion sub-categories), etc.

Makeup-specific features:
1. Maybe we want to colour-code items? Natural, bold, warm, cool, neutral, gel, pencil, light, dark, seasons, shades. Definitely add-on.
	1. X. Solved with tags.

Store skincare (singleton) requirements:
1. Photos (product, swatches, etc.)
2. X Tags
	1. There seems to be no use case for this; clutter
3. Name (required)
4. Brand
5. Use before (derived)
6. Best before (fetched from history)
7. Period after opening (PAO) (3m, 6m, 12m, 24m, etc.)
8. X Purchase date (fetched from history, default to today, can be unspecified)
	1. Impractical?
9. X Purchased from (fetched from history): gifted text, online -> links (in-app transfer), offline -> store names & location (maps) (can show analytics as well, multiple will be interesting, need to figure out the layout)
	1. Impractical?
	> [!QUESTION] Does user want to know if an item is gifted? Do they need a reminder?
10. Opened date (fetched from history, default to today), shown when button "Open" clicked
11. ? Size (show /ml cost) // can be useful for stock items, just interesting for analytics
	1. Isn't really useful? Especially if e.g., eye palette
12. Variant (default: Original)
	1. Scents: unscented, eucalyptus, etc.
	2. Shades: brown, black, etc.
	3. Texture: glow, matte, satin, etc. 
	4. Size: mini, regular, value, etc.
	5. Finish: Glitter, Gloss, Metallic, Sheer; Matte, Creams, Powders, Dewy; Glow, Wet, Satin; Cream, gel, pencil, powder, stick
13. Category (subcategory: toner, moisturiser etc., within category: skincare, makeup, tools, perfume)
14. Purchase price (fetched from history, in a form of graph to show analytics, can be free ($0), spending & item price analytics)
	1. If price == 0, the item is gifted
15. ? Main benefit (multi-check field), inferred from ingredients (automatic): anti-aging, hydration, calming, brightness, acne, skin evenness, etc.
	1. Fork/partner with skinsort
16. ? Ingredients (scan)
	1. Need to determine if possible, do later
	2. Let's not worry of this for now. User can look in the internet for product details.
17. Rating
	1. An item rating is cumulative/the average of its variants.
	> [!QUESTION] Can ratings change with each purchase?
18. Opened date
19. Expiry date
20. X Comment/Notes/Reviews
	1. There seems to be no use case for this; clutter
	2. Instead of this, we have the below: (seems more concrete and useful)
21. Pros (display: What I like about ...)
22. Cons (display: What I dislike about ...)

The only built-in value: item category. Everything else is/can be custom. Why? Because the beauty industry is ever-changing, new brands, items, sizes, colours come out every time. Who can keep up? Also, this allows lock-in.

## Playing the Devil-Advocate in Making Decisions
My favourite thing to do. Instinctively.

> [!QUESTION]
> Q: Does user need reminder of where they kept the item? Is it lying around or kept properly? Does user care? 
> A: If I have a large collection, I might keep it in Box A instead of B. It will be useful to know where I keep it so I don't have to search until Box Z.
> C: Users with a relatively small collection probably don't care. Because they don't need to. So, can be supported as an add-on feature. Good.

> [!QUESTION]
> Q: Does user care whether the item is used? Item can be used, and then unused, and then used, and then unused. Item can only be used if it's opened. Item can be unused whether it's opened or not. Nevertheless, they can still be discarded at any point in time.
> A: What interval/metrics should be used to determine if an item is unused? It's impossible to determine. I use items today, but not tomorrow. But I might use it next week. Irrelevant. What matters is that it's still available for me to use if I want to use it. What matters is that it's still in my collection. I don't need a reminder whether I'm using it or not. I will *always* know at that relative point in time. It's relative. I just need to know what's available. What the options are.

Dev resources:
- Templates:
	- [GitHub - ionic-team/capacitor-solidjs-templates: Build native iOS, Android, and Web apps with Capacitor, SolidJS, and Vite](https://github.com/ionic-team/capacitor-solidjs-templates)
- Plugins: 
	- [GitHub - riderx/awesome-capacitor: 😎 Awesome lists of capacitor plugins.](https://github.com/riderx/awesome-capacitor)
	- [Capacitor Plugins | Capacitor Documentation](https://capacitorjs.com/docs/plugins)
	- Camera, clipboard, local notifications, sqlite, sharing, app icon, barcode scanner, camera preview?, date picker, apple pay, dark mode, rate app, app, dialog, google maps?, haptics?, splash screen
- Technologies: Capacitor, SolidJS, Vite, Tailwind CSS, TypeScript, Swift, SQLite, Prisma, tRPC, Capgo? (live update deployment). Hopefully this is feasible, still testing.
- Constraint: Capacitor needs at least one page that can be rendered statically, preferably the index page. So at least the index page would need to be CSR/SSG.