import { motion } from 'framer-motion';
import styles from './Features.module.css';

const FEATURES = [
  {
    tag: 'A',
    title: 'Ontology first, automation second',
    body: 'We map your objects, relationships, and rules into one structured model. The foundation agents need to reason, route, and act on your business.',
    hero: true,
  },
  {
    tag: 'B',
    title: 'Wired into your actual tools',
    body: 'Email, calendar, CRM, Slack, databases — bound to the ontology with scoped, permissioned access. Agents read from and write back to your systems of record.',
  },
  {
    tag: 'C',
    title: 'Forward-deployed operators',
    body: 'We embed agents inside your workflow and tune them in production. Multi-step jobs, handoffs, exceptions — with defined behavior and escalation logic.',
  },
  {
    tag: 'D',
    title: 'Human oversight built in',
    body: 'Any agent action with real business consequence stays gated behind your approval until the behavior is trusted. Every action logged and auditable.',
  },
  {
    tag: 'E',
    title: 'Maintained as you evolve',
    body: 'As your tools, schemas, and processes change, we keep the ontology and the operators calibrated. The layer doesn\'t drift.',
  },
];

export default function Features() {
  return (
    <section className="container" id="how">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">What we do</div>
        <h2>A legible data layer. Agents that actually run.</h2>
        <p>
          Not a chatbot shop. Not an enterprise consulting firm. We build the
          ontology, forward-deploy the operator, and run the jobs on top of it.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.tag}
            className={`${styles.card} ${f.hero ? styles.hero : ''}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.06 * i, duration: 0.5 }}
            whileHover={{ y: -2 }}
          >
            <span className={styles.tag}>{f.tag}</span>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
