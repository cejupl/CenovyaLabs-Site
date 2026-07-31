/**
 * The entity. Every page reads its legal identity from here, so a company
 * change (rename, re-domicile, spin-out) is a single-file edit.
 */
export const entity = {
  /** Full legal name. Used verbatim in legal copy and the footer. */
  legalName: 'Cenovya Labs LLC',
  /** Display name for headings and nav. */
  name: 'Cenovya Labs',
  /** Formation state. */
  state: 'California',
  /** How the entity describes itself in legal prose. */
  legalDescriptor: 'a California limited liability company',
  domain: 'https://cenovyalabs.com',
  /** Year the copyright line starts from. */
  founded: 2026,

  tagline: 'A California software company building consumer apps across different sectors.',

  /**
   * Email is the only public channel. No mailing address or phone on the site -
   * those live in App Store Connect / Play Console trader information.
   */
  emails: {
    general: 'hello@cenovyalabs.com',
    legal: 'legal@cenovyalabs.com',
  },

  seo: {
    title: 'Cenovya Labs - a software company in California',
    description:
      'Cenovya Labs LLC builds consumer apps across health and games, under the Nutovia and Smart Gamers labels. Privacy-first, no ads, no trackers.',
  },
} as const;

/** Effective date shown on the legal pages. Bump when the text materially changes. */
export const legalEffectiveDate = 'July 30, 2026';
