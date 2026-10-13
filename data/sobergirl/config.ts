export const SG_SITE = 'https://shipailab.com';
export const SG_BASE = `${SG_SITE}/sobergirl`;
// Live on Google Play (package com.sobergirl.app, production release 2 Oct 2026).
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sobergirl.app';
// The iOS app is not live yet. Set this to the App Store URL on launch and the "coming soon" button becomes a link.
export const APP_STORE_URL: string | null = null;
export const SG_UPDATED = '2026-10-06';
/** Last-changed date for one guide. */
export const updatedOf = (a: { updated?: string }) => a.updated ?? SG_UPDATED;

/**
 * Play Store link tagged with the page it was clicked on. Google Play passes the referrer to the install,
 * so Play Console's acquisition reports show which page sent each install.
 */
export const playUrlFor = (campaign: string, medium = 'seo') =>
  `${PLAY_STORE_URL}&referrer=${encodeURIComponent(`utm_source=shipailab&utm_medium=${medium}&utm_campaign=${campaign}`)}`;
