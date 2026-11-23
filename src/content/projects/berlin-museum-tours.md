---
title: Berlin Museum Tours in Chinese
summary: "A monthly sign-up page for Chinese-language guided tours of Berlin museums and memorials, with per-session Tally forms and a Google Sheets reminder that tells me when to confirm or cancel a group; I ran the tours, set the rules, and built it with an AI coding assistant."
tag: Software
image: /images/berlin-museum-tours.jpg
stack: [HTML, CSS, JavaScript, Tally, Google Sheets, Google Apps Script, Gmail, Cloudflare Pages, Claude Code]
liveUrl: /museum-tours/
featured: false
order: 7
---

A Traditional Chinese page where Mandarin and Cantonese speakers in Berlin can find this month's museum tours and sign up. Each session is a ticket card with its date, meeting time, group size, and fee, and links to its own Tally form; a Google Sheet behind it counts sign-ups and emails me when a group needs a decision.

#### ***The Problem***

Several Berlin museums and memorials offer guided tours in Chinese, but only to groups booked in advance, so someone has to gather enough people first. I was doing this through chat groups and a Notion list: the dates, fees, and minimum group sizes were scattered across messages, people kept asking which tours were still open, and I had to count sign-ups by hand to know whether a tour would go ahead.

#### ***What I Built***

1. **Session page**: the next tour as a large ticket at the top, every upcoming session grouped by month below it, and the museum list with duration, group size, fee, and address
2. **Live status on every ticket**: open, full with a waiting list, or closed; sessions that are a few people short are highlighted in orange with "N more to go", and past sessions hide themselves
3. **Cantonese sessions**: marked in blue and written in Cantonese on the card itself, so Cantonese speakers can spot them at a glance
4. **Confirmation date**: each ticket shows the day, one week before the tour, when I decide whether it goes ahead
5. **Reminder, not auto-mail**: a daily Apps Script job counts sign-ups per session; a week before each tour it emails me the head count and the list, and leaves a ready-to-send confirmation or cancellation draft in Gmail with every participant in Bcc
6. **Hosting**: the page is its own Cloudflare Pages project, kept out of the site's GitHub repository, and served at mingslab.com/museum-tours/ through a small proxy function

#### ***Decisions***

1. **One form per session**: each tour has its own Tally form, so the submissions list doubles as the attendance list for that day
2. **I send the emails myself**: confirmation and payment messages go out only after I have checked them; the script prepares drafts and reminds me, but never writes to participants
3. **Fee transparency**: the page says plainly which tours the museum itself offers for free, and that the fee covers organising the group, not the museum's tour
4. **Pay after confirmation**: people register first and pay only once a group is confirmed, so nobody has to ask for refunds when a tour does not reach its minimum

#### ***My Role***

I chose the museums, booked the tours with each museum, set the group sizes, fees, and sign-up rules, and wrote the page copy in Mandarin and Cantonese. Claude Code wrote most of the code from my requirements, and I reviewed every change on desktop and phone. Testing caught several issues I then had fixed, including addresses being cut off on narrow phones and the museum list disappearing after I removed a line of text the page script still relied on.
