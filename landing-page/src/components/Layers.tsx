import { motion } from 'framer-motion';
import styles from './Layers.module.css';

const LAYERS = [
  {
    n: '01',
    title: 'Ontology',
    body: 'We map every data point in your business into a connected graph. Shopify, QuickBooks, CRM, email, social — all of it, linked. This is the hard work. Once built, switching costs are prohibitive. The data layer is the moat.',
  },
  {
    n: '02',
    title: 'Dashboard',
    body: 'One screen. Chat on the left — Chief of Staff interface. Business state on the right. Live data, forecasting, alerts, revenue signals. Custom per client.',
  },
  {
    n: '03',
    title: 'Agents',
    body: 'Software that acts on the ontology — reordering inventory, contacting lapsed customers, flagging risk. They\'re smart because they see everything, not because they\'re better models.',
  },
];

export default function Layers() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.inner}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 28 }}
        >
          The three layers
        </motion.div>

        <div className={styles.grid}>
          {LAYERS.map((l, i) => (
            <motion.div
              key={l.n}
              className={styles.col}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.55 }}
            >
              <div className={styles.label}>Layer {l.n}</div>
              <h3 className={styles.title}>{l.title}</h3>
              <p className={styles.body}>{l.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
