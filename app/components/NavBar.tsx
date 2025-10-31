'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'ホーム' },
  { href: '#problem', label: '課題' },
  { href: '#solution', label: '解決策' },
  { href: '#value', label: '価値' },
  { href: '#experience', label: 'アプリ体験' },
  { href: '#incentive', label: 'インセンティブ' },
  { href: '#implementation', label: '実装' },
];

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = () => setMenuOpen(false);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(max-width: 960px)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        setMenuOpen(false);
      }
    };

    if (media.addEventListener) {
      media.addEventListener('change', handleChange);
      return () => media.removeEventListener('change', handleChange);
    }

    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-shell">
      <div className="nav-bar">
        <a className="nav-brand" href="#hero">
          <span className="nav-title">Motive</span>
          <span className="nav-subtitle">Movement with Meaning</span>
        </a>
        <button
          className={`nav-toggle${menuOpen ? ' nav-toggle-open' : ''}`}
          type="button"
          aria-label="メニューを開閉"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={handleLinkClick}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div
        className={`nav-backdrop${menuOpen ? ' nav-backdrop-visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />
    </header>
  );
}
