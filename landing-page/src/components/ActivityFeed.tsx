import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './ActivityFeed.module.css';

const LINES = [
  ['09:01', 'New lead from Google Ads — auto-replied in 12s'],
  ['09:14', 'Invoice #1087 sent to Martinez Roofing — paid'],
  ['09:22', 'Rescheduled Johnson consult → Tue 2:30 PM'],
  ['10:01', 'Weekly report compiled — revenue up 18% WoW'],
  ['10:45', 'Follow-up sent to 6 cold leads from last Thursday'],
  ['11:30', 'Appointment confirmed: Davis Electric, Wed 10 AM'],
  ['12:00', '✓ All tasks running · 0 issues · 47 actions today'],
];

export default function ActivityFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="container" style={{ paddingTop: 0 }}>
      <motion.div
        ref={ref}
        className={styles.feed}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div className={styles.bar}>
          <span className={`${styles.dot} ${styles.red}`} />
          <span className={`${styles.dot} ${styles.yellow}`} />
          <span className={`${styles.dot} ${styles.green}`} />
          <span className={styles.barLabel}>tend · operator log</span>
        </div>
        <div className={styles.body}>
          {LINES.map(([time, text], i) => (
            <motion.div
              key={i}
              className={styles.line}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.35 }}
            >
              <span className={styles.time}>{time}</span>
              <span className={styles.text}>{text}</span>
            </motion.div>
          ))}
          <motion.span
            className={styles.cursor}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ▊
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
