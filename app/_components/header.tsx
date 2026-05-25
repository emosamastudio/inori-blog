/*
 * Sticky Header — static markup rendered at build time. Headroom-style
 * hide/show and the live GitHub star count are attached by the tiny inline
 * scripts on each Astro page, so this marketing page ships no React runtime
 * to the browser.
 *
 * Simplified nav for personal blog — only /blog/ is a real page route.
 */

import {
  DEFAULT_LOCALE,
  getCommonCopy,
  localizedHref,
  type HeaderCopy,
  type LandingLocaleCode,
} from '../i18n';

const REPO = 'https://github.com/emosamastudio/inori-blog';
const REPO_RELEASES = `${REPO}`;

const ext = {
  target: '_blank',
  rel: 'noreferrer noopener',
} as const;

export interface HeaderProps {
  /** Nav highlight target. `'home'` is the default for `/`. */
  active?: 'home' | 'blog';
  /**
   * Live counts from the Markdown catalogs. Required so we can never
   * silently render stale fallback numbers when a caller forgets to
   * thread `getCatalogCounts()` through.
   */
  counts: {
    skills: number;
    systems: number;
    templates: number;
    craft: number;
  };
  github?: {
    starsLabel: string;
  };
  /** UI locale for nav labels and accessibility text. */
  locale?: LandingLocaleCode;
  /** Optional override for callers that already resolved localized chrome. */
  copy?: HeaderCopy;
  /** Brand link target — `#top` on the homepage, `/` on sub-pages. */
  brandHref?: string;
}

export function Header({
  active = 'home',
  counts: _counts,
  github,
  locale = DEFAULT_LOCALE,
  copy,
  brandHref = '#top',
}: HeaderProps) {
  const linkClass = (key: NonNullable<HeaderProps['active']>) =>
    active === key ? 'is-active' : undefined;
  const headerCopy = copy ?? getCommonCopy(locale).header;
  const href = (path: string) => localizedHref(path, locale);
  const homeBrandHref = brandHref === '/' ? href('/') : brandHref;

  return (
    <header className='nav' data-od-id='nav'>
      <div className='container nav-inner'>
        <a href={homeBrandHref} className='brand'>
          <span className='brand-mark'>
            <img src='/logo.webp' alt='' width={44} height={44} />
          </span>
          <span className='brand-name'>Inori</span>
        </a>
        {/*
          Mobile / tablet hamburger. Hidden by CSS at ≥1100px (the desktop
          breakpoint where the full nav fits). At narrower widths it toggles
          `.is-open` on the parent <header> via a small handler in
          `header-enhancer.astro` — when open, the `<nav>` element below
          drops down underneath the header bar as a vertical list.
        */}
        <button
          type='button'
          className='nav-toggle'
          aria-label={headerCopy.nav.blog}
          aria-controls='primary-nav'
          aria-expanded='false'
          data-nav-toggle
        >
          <span className='nav-toggle-icon' aria-hidden='true' />
        </button>
        <nav id='primary-nav' data-nav-primary>
          <ul className='nav-links'>
            <li>
              <a href={href('/blog/')} className={linkClass('blog')}>
                {headerCopy.nav.blog}
              </a>
            </li>
          </ul>
        </nav>
        <div className='nav-side'>
          <a
            className='nav-cta ghost'
            href={REPO_RELEASES}
            aria-label={headerCopy.downloadAria}
            title={headerCopy.downloadTitle}
            {...ext}
          >
            {headerCopy.download}
          </a>
          <a
            className='nav-cta'
            href={REPO}
            aria-label={headerCopy.starAria}
            title={headerCopy.starTitle}
            {...ext}
          >
            {headerCopy.starPrefix} ·{' '}
            <span data-github-stars>{github?.starsLabel ?? '40K+'}</span>
          </a>
          <span className='status-dot' aria-hidden='true' />
        </div>
      </div>
    </header>
  );
}
