/*
 * Inori Blog — minimal header.
 *
 * Personal blog header with brand name, Blog/About links,
 * and a hamburger for mobile. No logo, no CTAs, no GitHub stars.
 * Just a quiet navigation.
 */

import {
  DEFAULT_LOCALE,
  localizedHref,
  type LandingLocaleCode,
} from '../i18n';

export interface HeaderProps {
  active?: 'home' | 'blog' | 'about';
  locale?: LandingLocaleCode;
  brandHref?: string;
}

export function Header({
  active = 'home',
  locale = DEFAULT_LOCALE,
  brandHref = '#top',
}: HeaderProps) {
  const href = (path: string) => localizedHref(path, locale);
  const homeBrandHref = brandHref === '/' ? href('/') : brandHref;

  return (
    <header className='nav' data-od-id='nav'>
      <div className='container nav-inner'>
        <a href={homeBrandHref} className='brand'>
          <span className='brand-name'>Inori</span>
          <span className='brand-mark-jp'>祈</span>
        </a>

        <button
          type='button'
          className='nav-toggle'
          aria-label='Toggle navigation'
          aria-controls='primary-nav'
          aria-expanded='false'
          data-nav-toggle
        >
          <span className='nav-toggle-icon' aria-hidden='true' />
        </button>

        <nav id='primary-nav' data-nav-primary>
          <ul className='nav-links'>
            <li>
              <a href={href('/blog/')} className={active === 'blog' ? 'is-active' : undefined}>
                Blog
              </a>
            </li>
            <li>
              <a href={href('/about/')} className={active === 'about' ? 'is-active' : undefined}>
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
