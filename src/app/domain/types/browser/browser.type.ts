
// noinspection SpellCheckingInspection

export const BrowserTypes: string[] =
  [
    'crawler',
    'cli',
    'email',
    'fetcher',
    'inapp',
    'mediaplayer',
    'library',
    'unrecognized',
  ];

export type BrowserType = typeof BrowserTypes[number];

export const CrowlerBrowser: BrowserType = BrowserTypes[0];
export const CliBrowser: BrowserType = BrowserTypes[1];
export const EmailBrowser: BrowserType = BrowserTypes[2];
export const FetcherBrowser: BrowserType = BrowserTypes[3];
export const InAppBrowser: BrowserType = BrowserTypes[4];
export const MediaPlayerBrowser: BrowserType = BrowserTypes[5];
export const LibraryBrowser: BrowserType = BrowserTypes[6];
export const UnrecognizedBrowser: BrowserType = BrowserTypes[7];
