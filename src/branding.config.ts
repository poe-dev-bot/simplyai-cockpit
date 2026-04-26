/**
 * Branding configuration — single source of truth for white-label values.
 *
 * Concentrating brand-identity values here keeps customisations easy to
 * rebase when upstream nerve releases new versions: most of the merge
 * conflict surface collapses into this one file.
 *
 * When forking for a new client/brand, this is typically the only file
 * that needs editing (plus logo assets in `public/` and theme tokens in
 * `src/lib/themes.ts`).
 */

import type { ThemeName } from '@/lib/themes';
import type { FontName } from '@/lib/fonts';

export interface Branding {
  /** Primary brand name shown in chrome (top bar, login, etc.) */
  name: string;
  /** Long-form name / tagline shown under the logo */
  tagline: string;
  /** Theme used for new installs and after legacy-theme migration */
  defaultDarkTheme: ThemeName;
  /** Theme used after migration when the legacy theme was the old `light` */
  defaultLightTheme: ThemeName;
  /** Default font for new installs and after legacy-font migration */
  defaultFont: FontName;
  /**
   * One-time-migration localStorage flag for the theme rebrand.
   * Bump the date suffix on the next major brand refresh to re-trigger
   * the migration for existing customer installs.
   */
  themeRefreshKey: string;
  /** Same idea, for the font default. */
  fontRefreshKey: string;
}

export const branding: Branding = {
  name: 'SimplyAi',
  tagline: 'SimplyAi Solutions',
  defaultDarkTheme: 'simplyai-dark',
  defaultLightTheme: 'simplyai-light',
  defaultFont: 'source-serif',
  themeRefreshKey: 'nerve:theme-refresh-20260426-simplyai',
  fontRefreshKey: 'nerve:font-refresh-20260425-simplyai',
};
