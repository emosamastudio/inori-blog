import {
  DEFAULT_LOCALE,
  getLandingUiCopy,
  getLocalizedString,
  type LandingLocaleCode,
} from './i18n';
import {
  explicitLocalizedString,
  localizePluginText,
} from './content-i18n';

// Stub out plugin-registry functionality since it is a legacy catalog file.
// Returning minimum definitions so any orphaned imports (if any) don't crash compilation.

export type PublicPluginPreview = {
  type: 'html' | 'image' | 'video';
  label: string;
  poster: string | undefined;
  frameHref: string | undefined;
  localHtmlPath: string | undefined;
};

export type PublicPluginEntry = {
  id: string;
  slug: string;
  title: string;
  description: string;
  version: string;
  registryId: string;
  registryName: string;
  trust: 'official' | 'trusted' | 'restricted';
  source: string;
  sourceUrl: string | undefined;
  registryUrl: string;
  detailHref: string;
  installCommand: string;
  directInstallCommand: string;
  tags: string[];
  capabilities: string[];
  publisher: string | undefined;
  homepage: string | undefined;
  license: string | undefined;
  integrity: string | undefined;
  mode: string | undefined;
  taskKind: string | undefined;
  surface: string | undefined;
  visualKind: string;
  preview: PublicPluginPreview | undefined;
  exampleQuery: string | undefined;
  yanked: boolean;
  deprecated: boolean;
  searchText: string;
};

export const getPublicPlugins = (
  _locale: LandingLocaleCode = DEFAULT_LOCALE,
): PublicPluginEntry[] => [];

export const getRegistryCounts = () => ({
  all: 0,
  official: 0,
  community: 0,
  restricted: 0,
});

export const getPluginPreviewHtml = (_plugin: PublicPluginEntry): string | undefined => undefined;
