# GoFetch Universe coding test

_Welcome, traveler_ 👩‍🚀 _, to the Orion VII Station!_

_I understand you wish to sell your goods — excellent! Much of what you have, we will buy._

_I see that you already have a dashboard of your ships inventory (including your **cost** and **quantity**) and our market buy prices._

_I recommend adding something to see what will happen if you sell **all of your sellable goods**. **There are no limits** on what you can sell here, but **we do not buy all goods**._

## Your task:

As the merchant has alluded to, update your dashboard to include a component that shows per-item potential profits (`$pricePerUnit - $costPerUnit`) if you sell **all of your sellable goods** to the merchants at Orion VII (not all items can be sold), as well as the **total** profits (`Sum(sellableItems, item => potentialProfits(item))`).

Update the [inventory-vs-orion-seven.ts](components/organisms/inventory-vs-orion-seven.tsx) file to generate the required data and then display it in the `PotentialProfits` component within that file.

**Sort your list of items by most profitable**.

## Overview:

- Your goal is to do your best, not to "make it to the finish line". Talk it through with us, ask questions.
- Take about 30 minutes to achieve this.
  - You may want to focus on code organization over visual design (the dashboard doesn't have to look good, but your code should).
  - **You can verbally tell us what specific improvements you would make**, without having to make them.
- We'll make sure that there are 15 minutes left at the end for questions.
- Have fun!!
