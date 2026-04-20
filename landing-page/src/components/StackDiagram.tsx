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
            <svg
              className={styles.connectorSvg}
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <path id="sd-reads" d="M50,0 L50,60" />
                <path id="sd-acts-down" d="M150,0 L150,60" />
                <path id="sd-acts-up" d="M150,60 L150,0" />
              </defs>
              <motion.line
                x1="50"
                y1="0"
                x2="50"
                y2="60"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.45, duration: 0.5 }}
              />
              <motion.line
                x1="150"
                y1="0"
                x2="150"
                y2="60"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.55, duration: 0.5 }}
              />
              <circle r="1.8" fill="#B8C26B">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s">
                  <mpath href="#sd-reads" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.88;1"
                  dur="2.4s"
                  repeatCount="indefinite"
                  begin="1.2s"
                />
              </circle>
              <circle r="1.8" fill="#B8C26B">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.6s">
                  <mpath href="#sd-acts-down" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.88;1"
                  dur="2.2s"
                  repeatCount="indefinite"
                  begin="1.6s"
                />
              </circle>
              <circle r="1.8" fill="#B8C26B">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin="2.7s">
                  <mpath href="#sd-acts-up" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.88;1"
                  dur="2.2s"
                  repeatCount="indefinite"
                  begin="2.7s"
                />
              </circle>
            </svg>
            <div className={styles.connectorCol}>
              <div className={styles.connectorLabel}>Reads</div>
            </div>
            <div className={styles.connectorCol}>
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
                    <motion.span
                      className={styles.pillHighlight}
                      animate={{ opacity: [0, 0.9, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2.2 + i * 0.8,
                        repeatDelay: ENTITIES.length * 0.8 - 2.2,
                      }}
                    />
                    <span>{e}</span>
                  </motion.span>
                ))}
              </div>

              <svg
                className={styles.edges}
                viewBox="0 0 600 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  {EDGES.map(([a, b], i) => {
                    const x1 = 50 + a * 100;
                    const x2 = 50 + b * 100;
                    return (
                      <path
                        key={`def-${i}`}
                        id={`sd-edge-${i}`}
                        d={`M${x1},10 L${x2},100`}
                      />
                    );
                  })}
                </defs>

                {EDGES.map(([a, b], i) => {
                  const x1 = 50 + a * 100;
                  const x2 = 50 + b * 100;
                  return (
                    <motion.line
                      key={`${a}-${b}`}
                      x1={x1}
                      y1={10}
                      x2={x2}
                      y2={100}
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

                {[0, 2, 4].map((i) => (
                  <circle key={`dot-${i}`} r="2.4" fill="#B8C26B">
                    <animateMotion
                      dur={`${3 + (i % 3) * 0.5}s`}
                      repeatCount="indefinite"
                      begin={`${2.6 + i * 0.7}s`}
                    >
                      <mpath href={`#sd-edge-${i}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.1;0.9;1"
                      dur={`${3 + (i % 3) * 0.5}s`}
                      repeatCount="indefinite"
                      begin={`${2.6 + i * 0.7}s`}
                    />
                  </circle>
                ))}
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
