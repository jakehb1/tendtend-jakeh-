import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 40);
  });

  return (
    <motion.nav
      className={styles.nav}
      data-scrolled={scrolled}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Tend home">
          <svg className={styles.logoIcon} viewBox="0 0 100 100" fill="none">
            <rect x="10" y="15" width="80" height="14" fill="currentColor" />
            <rect x="10" y="38" width="80" height="14" fill="currentColor" />
            <rect x="38" y="62" width="24" height="24" fill="currentColor" />
          </svg>
          <span className={styles.logoText}>tend</span>
        </a>

        <ul className={styles.links}>
          <li><a href="#how">How it works</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <a
          href="https://cal.com/clawdbotdfw/15min"
          className={styles.cta}
          target="_blank"
          rel="noopener"
        >
          Book a call
          <span aria-hidden="true">→</span>
        </a>

        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span data-open={menuOpen} />
          <span data-open={menuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a
              href="https://cal.com/clawdbotdfw/15min"
              className={styles.mobileCta}
              target="_blank"
              rel="noopener"
              onClick={() => setMenuOpen(false)}
            >
              Book a call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
