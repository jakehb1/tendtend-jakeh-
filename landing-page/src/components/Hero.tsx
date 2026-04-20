import { motion } from 'framer-motion';
import Constellation from './Constellation';
import styles from './Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  shown: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <motion.div
            className="eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="shown"
            custom={0}
          >
            <span className="eyebrow-dot" />
            Now accepting clients
          </motion.div>

          <motion.h1
            className={styles.headline}
            variants={fadeUp}
            initial="hidden"
            animate="shown"
            custom={1}
          >
            The brain that powers autonomous businesses.
          </motion.h1>

          <motion.p
            className={styles.sub}
            variants={fadeUp}
            initial="hidden"
            animate="shown"
            custom={2}
          >
            You're losing leads, dropping follow-ups, and spending hours on work
            that shouldn't require you. We fix that. We connect to your tools,
            learn how your business actually works, and run the repetitive
            parts. You just deal with what needs a human.
          </motion.p>

          <motion.div
            className={styles.ctas}
            variants={fadeUp}
            initial="hidden"
            animate="shown"
            custom={3}
          >
            <a
              href="https://cal.com/clawdbotdfw/15min"
              className="btn-primary"
              target="_blank"
              rel="noopener"
            >
              Book a discovery call
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        <div className={styles.graphic}>
          <Constellation />
        </div>
      </div>
    </section>
  );
}
