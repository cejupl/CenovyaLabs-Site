/**
 * One entry per label. Adding a product is one object; spinning a label out
 * into its own LLC is deleting one object.
 *
 * `url` is where the card sends people. Smart Gamers points at hoofandclaw.org
 * until smartgamers.org is rebuilt - swap that one field when the hub is live.
 */
export type Brand = {
  id: string;
  name: string;
  /** Eyebrow above the card title. */
  category: string;
  blurb: string;
  /** Short status line: pricing, platforms, or development stage. */
  status: string;
  url: string;
  /** Label shown on the outbound link. */
  urlLabel: string;
  /** Optional small-print line under the card (e.g. the not-medical-advice note). */
  note?: string;
  /** Accent used for the card's dot + hover rule. */
  accent: 'leaf' | 'forest';
};

export const brands: Brand[] = [
  {
    id: 'nutovia',
    name: 'Nutovia',
    category: 'Health',
    blurb:
      'Food tools for families. The Nutovia app scans any barcode or photographs a label in any language, returns an honest 0-100 health score with every reason explained, and finds healthier swaps at the stores you actually shop.',
    status: 'In development. iOS and Android.',
    url: 'https://nutovia.app',
    urlLabel: 'nutovia.app',
    note: 'Nutovia provides general nutrition information, not medical advice.',
    accent: 'leaf',
  },
  {
    id: 'smart-gamers',
    name: 'Smart Gamers',
    category: 'Games',
    blurb:
      'Our games label. First title: Hoof & Claw, a board game and companion app of social deduction on the savanna. Friends by day, predators by night. 6-20 players, 15-45 minutes, ages 13+.',
    status: 'In development. iOS and Android.',
    url: 'https://hoofandclaw.org',
    urlLabel: 'hoofandclaw.org',
    note: 'Smart Gamers is the game label for all our games.',
    accent: 'forest',
  },
];

/** The "what we operate" table on /about - the entity trail, brands plus titles. */
export const operations = [
  {
    brand: 'Nutovia',
    what: 'Health label. Food scanner app for iOS and Android.',
    url: 'https://nutovia.app',
    urlLabel: 'nutovia.app',
  },
  {
    brand: 'Smart Gamers',
    what: 'Games label. Home for all our games.',
    url: 'https://hoofandclaw.org',
    urlLabel: 'smartgamers.org',
  },
  {
    brand: 'Hoof & Claw',
    what: 'Board game and companion app, published under Smart Gamers.',
    url: 'https://hoofandclaw.org',
    urlLabel: 'hoofandclaw.org',
  },
];

/**
 * Support routing, in the order shown on /contact. The two product addresses
 * are also published in the shipped app privacy policies - do not change them
 * here without changing them there, or the store-listed contact goes stale.
 */
export const contacts = [
  { for: 'Company, press, partnerships', email: 'hello@cenovyalabs.com' },
  { for: 'Nutovia app support, bugs, data requests', email: 'support@nutovia.app' },
  { for: 'Hoof & Claw support, bugs, playtest feedback', email: 'support@smartgamers.org' },
  { for: 'Legal, privacy requests, takedowns', email: 'legal@cenovyalabs.com' },
];

/** The three operating principles on the home page. */
export const principles = [
  {
    title: 'Privacy by default',
    body: 'No ad SDKs. No data brokers. Nothing about you is sold or shared. When an app can do its job on your device, it does it there.',
  },
  {
    title: 'Plain pricing',
    body: 'You can read the price in one sentence. No countdown timers, no fake discounts, no subscription that hides its cancel button.',
  },
  {
    title: 'Finished, not endless',
    body: 'Products ship small and get finished, then get maintained. Better to do a few things properly than many halfway.',
  },
];

/**
 * Company-level trust statements on /about. Deliberately distinct from
 * `principles` above, which describe how the products behave - these describe
 * how the company is held to account. Keep them non-overlapping.
 */
export const commitments = [
  {
    title: 'Independent',
    body: 'Cenovya Labs is privately held and self-funded. There are no outside investors.',
  },
  {
    title: 'Accountable',
    body: 'Every product ships with a published privacy policy and a direct support address, and the company behind it is named on both.',
  },
  {
    title: 'No data business',
    body: 'Our applications carry no advertising SDKs, and we do not sell or broker personal data.',
  },
  {
    title: 'Supported after launch',
    body: 'Products are maintained past release rather than abandoned at version one.',
  },
];
