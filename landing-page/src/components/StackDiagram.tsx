import { motion } from 'framer-motion';
import styles from './StackDiagram.module.css';

const ENTITIES = [
  'Customers',
  'Revenue',
  'Operations',
  'Inventory',
  'Employees',
  'Vendors',
];

const EDGES: [number, number][] = [
  [0, 3],
  [1, 4],
  [2, 5],
  [0, 4],
  [2, 3],
  [1, 5],
];

export default function StackDiagram() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.frame}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className={styles.topRow}>
            <motion.div
              className={styles.topCard}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <div className={styles.cardLabel}>Dashboard</div>
              <div className={styles.cardSub}>Owner-Facing</div>
              <p className={styles.cardBody}>
                Chat interface. Live state. Alerts. The owner sees their
                business as a system for the first time.
              </p>
            </motion.div>

            <motion.div
              className={styles.topCard}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <div className={styles.cardLabel}>Agents</div>
              <div className={styles.cardSub}>Autonomous</div>
              <p className={styles.cardBody}>
                Reactivation. Churn detection. Scheduling. They act because
                they see the full graph — not a single data source.
              </p>
            </motion.div>
          </div>

          <div className={styles.connectors}>
            <div className={styles.connectorCol}>
              <motion.div
                className={styles.tick}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.45, duration: 0.4 }}
              />
              <div className={styles.connectorLabel}>Reads</div>
            </div>
            <div className={styles.connectorCol}>
              <motion.div
                className={styles.tick}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.55, duration: 0.4 }}
              />
              <div className={styles.connectorLabel}>Reads + Acts</div>
            </div>
          </div>

          <motion.div
            className={styles.ontology}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.65, duration: 0.55 }}
          >
            <div className={styles.cardLabel}>Ontology</div>
            <div className={styles.cardSub}>Infrastructure</div>

            <div className={styles.graph}>
              <div className={styles.pills}>
                {ENTITIES.map((e, i) => (
                  <motion.span
                    key={e}
                    className={styles.pill}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: 0.8 + i * 0.05, duration: 0.35 }}
                  >
                    {e}
                  </motion.span>
                ))}
              </div>

              <svg
                className={styles.edges}
                viewBox="0 0 600 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {EDGES.map(([a, b], i) => {
                  const x1 = 50 + a * 100;
                  const x2 = 50 + b * 100;
                  const y1 = 10;
                  const y2 = 100;
                  return (
                    <motion.line
                      key={`${a}-${b}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255, 255, 255, 0.14)"
                      strokeWidth={1}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        delay: 1.0 + i * 0.08,
                        duration: 0.7,
                        ease: 'easeOut',
                      }}
                    />
                  );
                })}
              </svg>
            </div>

            <motion.div
              className={styles.caption}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <span className={styles.dash} />
              Agents write back to ontology — the system learns
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
