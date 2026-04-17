import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div
          className={styles.word}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.08, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          tend
        </motion.div>

        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.label}>Tend</div>
            <p className={styles.tag}>
              The operational layer for AI agents. We make your business legible.
            </p>
          </div>

          <div className={styles.col}>
            <div className={styles.label}>Offices</div>
            <p>Dallas, TX</p>
            <p>Orange County, CA</p>
          </div>

          <div className={styles.col}>
            <div className={styles.label}>Built by</div>
            <p>
              <a href="https://kyros.ai" target="_blank" rel="noopener noreferrer">
                Kyros
              </a>
            </p>
            <p className={styles.small}>AI, crypto, and business systems.</p>
          </div>

          <div className={styles.col}>
            <div className={styles.label}>Contact</div>
            <p>
              <a href="mailto:hello@tryttend.com">hello@tryttend.com</a>
            </p>
          </div>
        </div>

        <div className={styles.base}>
          <span>© {new Date().getFullYear()} Tend. All rights reserved.</span>
          <span className={styles.mono}>v.2026.04</span>
        </div>
      </div>
    </footer>
  );
}
