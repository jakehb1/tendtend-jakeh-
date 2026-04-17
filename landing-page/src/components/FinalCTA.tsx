import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './FinalCTA.module.css';

const EMAIL = 'hello@tryttend.com';

export default function FinalCTA() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    const id = setTimeout(() => setRevealed(false), 6000);
    return () => clearTimeout(id);
  }, [revealed]);

  return (
    <section className="container" id="contact">
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div className={styles.label}>Ready to deploy</div>
        <h2 className={styles.h}>
          Install an operator that actually runs your business.
        </h2>
        <p className={styles.sub}>
          Thirty days from now, your agents will know your workflows better
          than your first hire ever will. We handle the ontology, the wiring,
          and the on-the-ground tuning.
        </p>

        <div className={styles.actions}>
          <a href={`mailto:${EMAIL}`} className={styles.primary}>
            Email us
            <span className={styles.arrow}>→</span>
          </a>
          <button
            className={styles.secondary}
            onClick={() => setRevealed(true)}
            aria-label="Reveal email address"
          >
            <motion.span
              key={revealed ? 'email' : 'label'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
            >
              {revealed ? EMAIL : 'Show email'}
            </motion.span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
