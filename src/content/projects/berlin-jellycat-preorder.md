---
title: Berlin Jellycat Pre-order Page
summary: "A mobile-first order page and Google Sheets back office for a two-person personal-shopping run from Berlin to Taiwan; I scoped the workflow, set the pricing, and built it with an AI coding assistant."
tag: Software
image: /images/berlin-jellycat-preorder.jpg
stack: [HTML, CSS, JavaScript, Google Apps Script, Google Sheets, Google Drive, Netlify, Claude Code]
liveUrl: /demos/berlin-jellycat/
featured: false
order: 6
---

A Traditional Chinese order page for buyers in Taiwan who want Berlin-only Jellycat plush toys, backed by a Google Sheet that collects every order. Buyers pick items, see a live price estimate, and submit; the order lands in the sheet with a readable order ID, ready for payment follow-up.

#### ***The Problem***

The plush toys are sold only at a booked event inside KaDeWe, a Berlin department store, with a limit of three per item per customer. Running this through Instagram DMs alone means order details are scattered across chats, prices have to be worked out from euros by hand, and there is no clear order of who gets the limited spots.

#### ***What I Built***

1. **Order page**: product cards with per-buyer limits, a live price estimate, Instagram-only contact, and required phone and pickup details for Taiwanese convenience-store shipping
2. **Wish list**: buyers can request items that are not listed and attach up to two reference photos, which are compressed in the browser and saved to Google Drive
3. **Back office**: a Google Apps Script web app writes each order to Google Sheets by column header, so columns can be added or reordered without breaking the import
4. **Order IDs**: built from the date and the buyer's Instagram handle, so orders, chats, and photo filenames match at a glance
5. **Deadlines**: ordering closes automatically at the cut-off, checked both in the browser and on the server so a wrong device clock cannot get around it
6. **Payment tracking**: entering the date payment details were sent fills in a three-day payment deadline, and overdue unpaid orders are highlighted

#### ***Decisions***

1. **Web page over Notion or Tally**: neither could show product cards, quantity limits, and a running total in one mobile-friendly form
2. **Pricing**: worked out from the official euro prices, the exchange rate, and card fees, landing at roughly a 27–30% margin per item
3. **One per buyer**: because the store allows only three per item per customer, a lower per-buyer limit spreads the spots across more people
4. **Full prepayment within three days**: items cannot be returned once bought, so payment comes first, and unpaid spots pass to the next buyer

#### ***My Role***

I defined the workflow, the business rules, and the pricing, and tested every feature end to end with real test orders. Claude Code wrote most of the code from my requirements. Testing caught several issues I then had fixed, including orders shifting into the wrong columns after a column was added to the sheet, and a deadline that could be bypassed by changing the device clock.

#### ***About the Demo***

The live demo runs the full ordering flow but does not send orders anywhere, and product photos are replaced with placeholders. This is a personal project and is not affiliated with Jellycat.
