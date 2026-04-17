import { motion } from 'framer-motion';
import styles from './Process.module.css';

const STEPS = [
  {
    n: '01',
    title: 'Discovery',
    body: 'We map your objects, relationships, and systems of record. This is the ontology — the structured model agents reason against.',
  },
  {
    n: '02',
    title: 'Scope',
    body: 'We pick the first high-leverage workflows to put on top of the ontology. Usually lead capture, follow-up, and reporting.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'We wire agents into your tools with scoped, permissioned access. Every action is logged. Every consequential action is gated.',
  },
  {
    n: '04',
    title: 'Run',
    body: 'We forward-deploy an operator inside your workflow. They tune behavior in production and raise approval gates as needed.',
  },
  {
    n: '05',
    title: 'Expand',
    body: 'New workflows get added on top of the same ontology. The layer compounds. Each new job is cheaper than the last.',
  },
];

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.55)' }}>
            How we deploy
          </div>
          <h2 style={{ color: 'var(--signal-white)' }}>
            Five steps. Thirty days. One operator in production.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.62)' }}>
            We don't sell software. We install an operational layer, run the
            first jobs on it, and stay on to scale the surface area.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          <motion.div
            className={styles.rail}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className={styles.step}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.12 * i, duration: 0.5 }}
            >
              <div className={styles.num}>{s.n}</div>
              <div className={styles.body}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
