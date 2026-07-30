# Cenovya Labs - website content brief

Draft copy for review. Nothing here is built yet. Mark up anything that sounds
wrong and the approved text gets poured into an Astro scaffold afterwards.

Date: 2026-07-30
Domain: cenovyalabs.com (apex canonical) · cenovya.com → 301 redirect

---

## 0. What this site is, and is not

Both products already have full marketing sites on their own domains:

| Site | Domain | Stack | Legal pages |
|---|---|---|---|
| Hoof & Claw | hoofandclaw.org | Astro 5 + Tailwind v4, Cloudflare Worker | privacy + terms, already name Cenovya Labs LLC |
| Nutovia | nutovia.app | Static HTML, GitHub Pages | privacy + terms, do **not** name the entity yet |
| Smart Gamers | smartgamers.org | currently on Wix, unrelated legacy content - to be moved to Cloudflare and rebuilt from scratch later | n/a |

The domain hierarchy, decided 2026-07-30:

```
cenovyalabs.com    entity, this site
├── nutovia.app        health label + app
└── smartgamers.org    games label hub - holds all games
    └── hoofandclaw.org    first title, keeps its own domain
```

Each subtree is a clean spin-out: when a label becomes its own LLC, its domains
move together and this site loses exactly one card.

So cenovyalabs.com is **not** a product marketing site. It is the corporate
layer: who the entity is, what it owns, how to reach it, and its own site-level
legal pages. Every product story stays on the product domain. This avoids
duplicate SEO, avoids two copies of the Nutovia pitch drifting apart, and keeps
the umbrella site small enough that it stays accurate.

Five pages total.

```
/                 home     - who we are, the brand cards, how we work
/about            about    - founder story, what we operate, entity facts
/contact          contact  - email routing
/legal/privacy    site-only privacy policy
/legal/terms      site-only terms
```

No product pages. No blog. No email capture. No commerce.

---

## 1. Home

### Hero

**Eyebrow:** Cenovya Labs LLC

**H1:** Software worth keeping.

**Body** - three paragraphs, set as a descent (lede, then two at body size):

> Cenovya Labs builds consumer applications across health and games, with further
> sectors to come.
>
> Built on modern, actively supported technology, each product is rigorously
> tested, continuously maintained, and designed with security and data protection
> at its core. Customers receive timely, reliable support throughout the product
> lifecycle.
>
> Every product follows the same rules: no ad SDKs, no data brokers, no dark
> patterns.

*The middle paragraph is claim-checkable, which is the only reason it is there:
both codebases run test gates before release, ship scoped security rules, and
carry a published support address. Nothing in it asserts headcount, awards, or
user numbers.*

> **Revised 2026-07-30 (second pass).** The hero no longer names the products -
> the brand cards do that one scroll down, and naming them twice made the
> landing page read like a product page rather than a company one. The headline
> now carries the same longevity idea as the About page without repeating its
> wording, and says nothing about size or category, so it survives any future
> expansion. The SEO title keeps "a software company in California" for search.

> **Revised 2026-07-30.** The site states no headcount anywhere, in either
> direction. No "one person", and equally no "our team" or "our engineers".
> Trust comes from verifiable facts - the registered entity, published policies,
> direct support addresses - not from a founder story. "Studio" and "small" are
> out too: both read narrower than health plus games plus later sectors.

*No call to action button. The two label cards below are the action.*

### Section: What we build

**Card 1 - Nutovia** *(label: Health)*

> Food tools for families. The Nutovia app scans any barcode or photographs a
> label in any language, returns an honest 0-100 health score with every reason
> explained, and finds healthier swaps at the stores you actually shop.
>
> Free. iOS and Android.
>
> **nutovia.app →**
>
> *Nutovia provides general nutrition information, not medical advice.*

**Card 2 - Smart Gamers** *(label: Games)*

> Our games label. First title: Hoof & Claw, a board game and companion app of
> social deduction on the savanna. Friends by day, predators by night.
> 6-20 players, 15-45 minutes, ages 13+.
>
> In development.
>
> **smartgamers.org →**

*Interim: smartgamers.org is an email domain today, not a site. Until the games
hub exists, this card points at hoofandclaw.org. Swapping it later is one `url`
field in `brands.ts`.*

### Section: How we work

**Privacy by default**
No ad SDKs. No data brokers. Nothing about you is sold or shared. When an app
can do its job on your device, it does it there.

**Plain pricing**
You can read the price in one sentence. No countdown timers, no fake discounts,
no subscription that hides its cancel button.

**Finished, not endless**
Products ship small and get finished, then get maintained. Better to do a few
things properly than many halfway.

### Footer (every page)

`© 2026 Cenovya Labs LLC · California · hello@cenovyalabs.com · Privacy · Terms`

---

## 2. About

**Eyebrow:** About

**H1:** Built to last longer than a launch.

### Positioning

> Cenovya Labs is a software company based in California. It designs and
> publishes consumer applications, currently across two categories, health and
> games, with further sectors planned as the company grows.
>
> Each product runs under its own label. Nutovia covers health and nutrition.
> Smart Gamers covers games. New labels are added when a category is worth
> committing to properly, not before.

### Section: How we stand behind it

Heading: **What you can hold us to.** Four company-level statements, kept
deliberately distinct from the home page's three principles - those describe how
the products behave, these describe how the company is accountable.

> **Independent.** Cenovya Labs is privately held and self-funded. There are no
> outside investors.
>
> **Accountable.** Every product ships with a published privacy policy and a
> direct support address, and the company behind it is named on both.
>
> **No data business.** Our applications carry no advertising SDKs, and we do not
> sell or broker personal data.
>
> **Supported after launch.** Products are maintained past release rather than
> abandoned at version one.

### Section: What we operate

| Brand | What it is | Where |
|---|---|---|
| Nutovia | Health label. Food scanner app for iOS and Android. | nutovia.app |
| Smart Gamers | Games label. Home for all our games. | smartgamers.org |
| Hoof & Claw | Board game and companion app, published under Smart Gamers. | hoofandclaw.org |

### Section: The company

> Cenovya Labs LLC is a limited liability company registered in California. It
> owns and operates the brands above and is the developer of record on the App
> Store and Google Play.
>
> Nutovia and Smart Gamers are brands of Cenovya Labs LLC, not separate
> companies.

*That last sentence is true today and is the single line to change if either
label is ever spun out into its own entity.*

---

## 3. Contact

**H1:** Contact

**Lede:** Email is the only channel. Pick the one that gets you the fastest
answer.

| For | Address |
|---|---|
| Nutovia app support, bugs, data requests | admin@nutovia.app |
| Hoof & Claw support, bugs, playtest feedback | admin@smartgamers.org |
| Company, press, partnerships | hello@cenovyalabs.com |
| Legal, privacy requests, takedowns | legal@cenovyalabs.com |

*The first two already exist and are live on the product sites. The two new
ones can be aliases into the same inbox on day one.*

**No mailing address or phone number on this site.** Those live in App Store
Connect and Play Console trader information, where they are actually required.
See open question 3.

---

## 4. /legal/privacy - site only

Short by design. This site collects almost nothing, and saying so in five
paragraphs is more credible than saying it in fifty.

**H1:** Privacy Policy
**Effective:** [launch date]

**1. Who we are.** This site is operated by Cenovya Labs LLC, a California
limited liability company. Privacy questions: legal@cenovyalabs.com.

**2. What this covers.** This policy covers the cenovyalabs.com website only.
Our apps have their own privacy policies: [Nutovia](https://nutovia.app/privacy.html) ·
[Hoof & Claw](https://hoofandclaw.org/privacy).

**3. What we collect.** Nothing you type. There are no accounts, no forms, and
no newsletter on this site.

**4. Analytics.** We use Cloudflare Web Analytics, which is cookieless. It
records aggregate page views, referring site, country, and device type. It sets
no cookies, does not fingerprint your browser, and does not follow you to other
sites. We cannot identify you from it.

**5. Hosting logs.** The site is served by Cloudflare, which processes IP
addresses in order to deliver and protect the site. This is a standard hosting
function and the data is handled under Cloudflare's own policies.

**6. Email.** If you email us, we receive your address and whatever you write.
We keep it only as long as needed to answer you and any follow-up.

**7. Cookies.** This site sets none.

**8. Sharing and selling.** We do not sell or share personal information. There
are no advertising networks, trackers, or third-party pixels on this site.

**9. Your rights.** California residents may request access to, correction of,
or deletion of personal information we hold. Email legal@cenovyalabs.com and we
will respond as required by law. In practice, this site holds nothing about you
unless you have emailed us.

*(A children's/COPPA section was dropped 2026-07-30. This site has no forms, no
accounts, and no cookies, so COPPA has no hook here. The clause stays where it
is load-bearing: the Nutovia and Hoof & Claw app policies.)*

**10. Changes.** If this policy changes, the effective date above changes with
it. Material changes will be noted on this page.

---

## 5. /legal/terms - site only

**H1:** Terms of Use
**Effective:** [launch date]

**1. This site.** cenovyalabs.com is an informational site about Cenovya Labs
LLC and its products. By using it you agree to these terms.

**2. Nothing is sold here.** Our apps are distributed through the Apple App
Store and Google Play. Any purchase, including in-app purchases, is made through
Apple or Google, and refunds are handled by them under their policies, not by
Cenovya Labs. Each app has its own terms, which govern your use of that app.

**3. Our brands.** Cenovya Labs, Nutovia, Smart Gamers, and Hoof & Claw, along
with the content and artwork on this site, belong to Cenovya Labs LLC.

**4. Links out.** This site links to our product sites and to the app stores. We
are not responsible for the content or policies of sites we do not operate.

**5. No warranty.** This site is provided as is. We do not warrant that it will
be uninterrupted or error free, and nothing on it is professional, medical, or
nutritional advice.

**6. Limitation of liability.** To the extent permitted by law, Cenovya Labs LLC
is not liable for indirect or consequential damages arising from your use of
this site.

**7. Governing law.** California.

**8. Contact.** legal@cenovyalabs.com

---

## 6. Voice rules

- **"We" is fine.** Revised from earlier guidance. The existing Hoof & Claw
  legal pages already say `Cenovya Labs LLC ("we," "us," "our")`, and a
  single-member LLC using "we" is normal. Consistency with the live pages wins.
- **State no headcount, in either direction.** No "one person" and no "our team"
  or "our engineers". Speak as the company. A reader is left with no unanswered
  question because the question never comes up.
- **No founder name on this site.** It is already public in the California
  filing, which is a different surface. Nothing here - App Store, legal pages,
  trust - requires it.
- **No "studio" and no "small".** Both read narrower than health plus games plus
  later sectors.
- **No unverifiable numbers.** No download counts, no "trusted by thousands", no
  awards. Add them when they're true.
- **No medical or health claims for Nutovia** anywhere on this site. It scores
  and explains labels. It does not diagnose, treat, or advise.
- **First person only on About.** Home, contact, and legal speak as the company.
- **Plain declaratives.** No "passionate", no "innovative", no "cutting-edge",
  no "revolutionize".

## 7. SEO

- Title: `Cenovya Labs - a software company in California`
- Description: `Cenovya Labs LLC builds consumer apps across health and games, under the Nutovia and Smart Gamers labels. Privacy-first, no ads, no trackers.`
- One OG image, company mark on a plain background.
- The product domains keep their own SEO. This site should not compete with
  them for "Nutovia" or "Hoof & Claw" queries - the brand cards link out with
  clean, unambiguous anchors.

## 8. Build notes (for after copy approval)

- Astro 5 + Tailwind v4 on Cloudflare, matching HoofAndClaw-Site exactly, so
  there is one stack to remember. Fully static, no adapter needed - this site
  has no dynamic route like the Hoof & Claw quiz.
- `src/config.ts` holds the entity: LLC name, state, emails, domain, copyright
  year. Every page reads from it. An entity change is a one-file edit.
- `src/data/brands.ts` holds one entry per label: name, category, blurb, status,
  URL, disclaimer. Adding a fourth product is one object. Spinning Nutovia out is
  deleting one object.
- Cloudflare Web Analytics is a dashboard toggle on the Pages project, not a
  script we hand-write.
- cenovya.com → cenovyalabs.com as a Cloudflare redirect rule, free, no origin.

## 9. Follow-up edits to the existing product sites

Not part of this site, but they close the entity trail and should ship near it:

1. **Nutovia-Site/privacy.html and terms.html** - add the operator line:
   "Nutovia is operated by Cenovya Labs LLC, a California limited liability
   company." Currently neither page names the entity. This is the real gap.
2. **Nutovia-Site** - confirm a "general nutrition information, not medical
   advice" line exists in terms, and add one if not.
3. **Both product sites** - add a footer line linking home:
   "A Cenovya Labs company" → cenovyalabs.com.
4. **HoofAndClaw-Site** - add "Published by Smart Gamers, a brand of Cenovya
   Labs LLC" wherever the publisher is named. Its legal pages already name the
   entity correctly, so nothing else is needed there.

## 10. Open questions

1. ~~smartgamers.org~~ **Decided 2026-07-30:** smartgamers.org becomes the games
   hub holding all titles, Hoof & Claw included. hoofandclaw.org survives as the
   game's own domain. `cenovyalabs.com/smart-gamers` will never exist.
   *Remaining sub-question:* does the Smart Gamers card link to hoofandclaw.org
   in the interim, or do we hold the card until the hub exists?
2. **Fictitious Business Name filings** for "Nutovia" and "Smart Gamers" in your
   county - worth confirming with Northwest whether brand use in marketing
   triggers it. Doesn't block the site.
3. **Northwest address** - can the registered-agent address be published as a
   business address, or is that the paid virtual-address product? Only affects
   App Store trader info now that the footer is email-only.
4. ~~Founder name~~ **Decided 2026-07-30:** no founder name anywhere on the
   site. It is already public in the California filing, which is a separate
   surface, and nothing here - App Store, legal pages, trust - requires it.
