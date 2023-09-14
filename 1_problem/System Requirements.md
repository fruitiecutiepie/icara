# System Requirements

## Functional requirements

Built-in Features:

1. Create new item
2. Read all item states
3. Update item
4. Delete item
5. Archive item to history
6. Count item purchases
7. Create item variant
8. Pin opened item?
9. Bookmark any item?
10. Search item
11. Filter item
12. Repurchase item
13. Add tags to item
14. Rate item
15. Review item
16. Take photos of item
17. Unit conversions for item size
18. Share app
19. Barcode scanning?
20. Read manufacturer batch code
21. Reminder near expiry, restock, unopened items
22. Task scheduling and calendar integration
23. Sync with iCloud, Drive, etc.
24. Display analytics: average item price & total spending/category, trends, most frequently purchased items, ml/month usage
25. Opt: Change app theme
26. Opt: Change app icon
27. Skin concern, recommendation. See what people with sensitive skin are using. See what the hot products are. Need product database then, should I? But skinsort already does that. Maybe partner with skinsort?
28. Skin season, infrared for undertone? And then recommendation
29. Colour palette analytics, show graphs of hsl basically, like the one in fcp for sigma. How warm is your palette? Should be cool
30. Badges/info about your beauty preference/item. Like Dimensional
31. Biometric face scanning? We can show people where/how to put makeup
32. Educational info for each subcategory?, e.g. you should put 2 fingers amount of sunscreen every day, reapply every 3 hours, more often if exposed to more sun
33. Share with friends? Add by username. We want to keep our stuff private unless we don't.

What maintaining a server allows (which only makes sense! User doesn't have brands, brands have items! User purchase is just a side-effect of brands selling their items):
1. Community brands
	1. See most purchased products
	2. Browse products -> this will be the only way for users to add products, they have to add them to the community first
		1. See official ingredients!
			1. See benefits!
		2. See official photos and swatches!
			> [!QUESTION] How can we ensure accurate photos and swatches? How can we get the accurate hex value of the colours?
		3. See reviews! or maybe not*
		4. See how many people like it! or maybe not*
		5. See what kind of people like it! or maybe not* -> user will have a persona/profile
	3. Compare products (up to 3 or 4, because that's as much as people's attention span can go) -> photos, ingredients, reviews, benefits, analytics
		1. Community vs owned
		2. Owned vs owned
		3. Community vs community
	4. Add to wishlist!

> [!QUESTION] Should we have custom personal/private brands? -> what if you make your own items?

> [!QUESTION] \* Why shouldn't users see product reviews in-app?
> The system can see these, but maybe it's better if people don't see them, because it will confuse/mix/influence people's judgement of products, and we want to help them figure out what really works for themselves. If it works for themselves, they don't need to know what works for other people. Why would they care? If a product review is great, they want to try them to figure out if it is the same case for them. If it's not, they will avoid them. The end goal is to figure out, "Is this product for me?". Seeing reviews are helpful, but there are plenty of reviews on the Internet already that has much bigger datasets and nuances. For now, Icara's users/audiences are not more unique than people on the Internet are. And it doesn't plan to, or expect to, since it wants to cater to as many people as possible, not a niche type/group of people only.

User profile:
- Skin type: sensitive, oily, acne-prone, normal, etc.
- Skin undertone: warm, cool, neutral, olive, etc.
- Skin season: spring light, summer cool, autumn deep, winter bright, etc.
- Skin concern: 

Note:
- Users will have to sign up before using the app
- Workflow of adding a product will and should not change, users should add community and owned item in one go (if the community product doesn't exist yet), but user should know that their submission is for the community. The experience should be indifferentiable, e.g. user should be able to add reviews from their owned items list, but their entry will be submitted to the `brands` database, not specific to their account; ofc, they will be able to update or delete them later.
	- Take their own photo for the product
	- Users only need to fill out brand and item name
		- The rest will be figured out by the system -> need to figure out a way to automate this -> learn how skinsort does it
		- User will be able to use their submission directly, but the status will be unverified -> will change to verified once the step above is done, including verifying names.
	- Etc.
- `brands` database structure will be exactly the same as `users`, except without the `Purchase` table
- There should be some default values in the community brand list, so that user feel a sense of progress -> minimising barrier to add more products (blank canvas problem)
- User should know that their submission is for the community. What is submitted to the community? Everything in `brands` that is not automated and their item reviews.
- User belongs to the community. Will/Should feel a connection. But should feel private as well. Icara is not a beauty social media. One of the core values of Icara is that it belongs to you personally, it is personalised, private, yours.

Onboarding experience, goal -> get user to set up at least one item so that user feel a sense of progress, walk hand-in-hand? Don't be too annoying.

Recommend ingredients/routine based on Profile. Have a profile page, something like Dimensional's.

Beautypedia with mini info icon on labels, or Did you know?-s or Fun fact of the day-s, e.g., physical vs chemical sunscreen, should I refrigerate items? (if it can oxidise, generally yes, otherwise no *need*, nevertheless follow the manufacturer instructions.)

> [!QUESTION] Hmm, should Type has its own table?

Best of Beauty -> Awards every year, recap, analytics, sort of like Spotify.

Makeup visualiser, ideally using face biometrics scanning, build a 3d model, should be easy/feasible with tools like meta spark ar studio. If can get hex value of things, will be very accurate and useful. Might need a hardware (this probably already exists). Otherwise, it's still useful for sculpting structure/outline and ideals. That is basically what makeup is, sculpting, mixing dark and light values, playing with hue and saturation. Can let user play around with the tool, arched vs straight brows, red vs natural lips, blush placement, etc. Can act as means to teach people how to do makeup as well. And based on this, save makeup looks / create snapshots (read-only so we don't waste too much CPU, but have presets/history of previous playgrounds) of the 3d model!!! (won the award of the best idea of the year) You can see people loving this with the rise of Instagram beauty filters sometime ago. Now the trend is natural unedited pics, lol. But it's because they miss the point of educating people, they miss to address the underlying, deeper problem of why people use "filters". Can scale to hairstyles as well. Execution is a bit tricky to deal with tho, because people will be very sensitive to accuracy, especially if it involves their own face/entity/ego. Ultimately, the whole body -> fashion. But that's too complex, another whole problem to solve. Only later.

> [!QUESTION] What is the most accurate way to get colours? Hmm, now we're working with the graphics world... another set of tools to learn.

Personalise recommendations:
1. Dynamic/Fluctuating factors:
	1. How often do you wear makeup? every day, every other day, rarely
	2. What kind of makeup? heavy, moderate, light (provide definitions)
2. Constant factors (this will be listed in user profile): 
	1. Skin type (e.g., oily type might want to use asiatica centella, etc.)
	2. Skin concern (e.g., sensitive type might want to use unscented products, etc.)
	3. Seasons (e.g., light moisturiser for summer, and heavy for winter. based on region/country, not nationality)

Provide recommendations on skincare routine/ingredients, but ultimately products. Because that is the most concrete form of action that user can take, at least easily/for the majority of people (unless they're scientist, right). Products should be community-made/derived from the community, because who cares about a product that no one uses. We want real products that I can buy now for my needs now. Should figure out a way to scale this without annoying users.

Buttons workflow: Create a product/item -> (fill out non-Purchase fields) -> Add to Storage, Add to Collection, Add to Wishlist 

Something along the lines of
"Your item submission will be verified and available to the Community. We'll let you know if there's any changes on your item."

Can also build a user's persona around the products they use -> clean makeup, fragrance preference, etc. Hmm, ultimately the end-goal will be product recommendations. There are two ways to approach this:
1. Have a database of all the products in the world -> impossible, new products come all the time.
2. Recommend ingredients -> universal. Every product can only be made with some finite ingredients. This is the way to go. Product recommendation is still more actionable, but can only be effective once we have a lot of users populating the product database.

> [!QUESTION] Do users want to share their beauty routines/items? Is this a secret?
> In-house female "authorities" provide protection for same-kind or kin or lower-power females, so in this sense, having a network of friends would support/benefit/makes sense. We'll try to explore this more.

> [!QUESTION] How strict should expiry date / period-after-opening be followed? Are they faked? How real are them?

> [!QUESTION] Are subcategories fixed? Can user add more subcategories?
> There will always be more subcategories. The most granular value, will ultimately be each product itself. Because you can argue that each product is unique within itself. The question is: how granular should you be? Should figure out a balance that don't confuse users. Make a framework that's easy to understand, like Liam's self tech interface.

Rating definitions: 
1. 
2. 
3. 
4. 
5. Holy grail

This is the default value, but let users customise this! Will be fun, don't you think? Also, let users customise their app colour palette and icon for free (Provide some options/presets, ofc. Not build from scratch). Because everyone has a different taste, personality, style, whatever you call it. This aligns with Icara's first [[Brand Values]] and principle. Also, it adds a sense of ownership for users, which increases the brand's emotional value (I believe this is a core strategy of Apple as well). In the range of product value proposition, yes, Icara is a logical/rational product, but the nature of beauty (which, Icara is a byproduct of) itself is irrational/emotional. 

> Emotional products are driven by feelings. They should be easy to process. Don't sell the technical details. Sell the experience.[^1]

## Non-functional requirements

[^1]: [Newsletter | Science backlash effect | September 1, 2023](https://nickkolenda.com/newsletter/2023-09-01)