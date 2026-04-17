import { motion } from 'framer-motion';
import styles from './OntologyDiagram.module.css';

const INPUTS = [
  { label: 'Email & Calendar', sub: 'Gmail · Cal' },
  { label: 'CRM & Forms', sub: 'HubSpot · Typeform' },
  { label: 'Inbound Leads', sub: 'Ads · Site Forms' },
];

const ACTIONS = [
  { label: 'Auto-Respond', sub: 'Leads · Follow-ups' },
  { label: 'Route & Escalate', sub: 'Triage · Notify' },
  { label: 'Brief & Report', sub: 'Daily · Weekly' },
];

const PATHS = [
  { id: 'in1', d: 'M205,190 C205,260 380,295 600,300' },
  { id: 'in2', d: 'M600,190 C600,235 600,260 600,300' },
  { id: 'in3', d: 'M995,190 C995,260 820,295 600,300' },
  { id: 'out1', d: 'M600,400 C600,440 380,475 205,510' },
  { id: 'out2', d: 'M600,400 C600,440 600,470 600,510' },
  { id: 'out3', d: 'M600,400 C600,440 820,475 995,510' },
];

export default function OntologyDiagram() {
  return (
    <section className="container" id="ontology" style={{ paddingTop: 24 }}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">The ontology layer</div>
        <h2>Your systems of record, made legible to agents.</h2>
        <p>
          We bind your tools into one structured model. Agents reason against
          it — and write back to the same systems your team already uses.
        </p>
      </motion.div>

      <motion.div
        className={styles.frame}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <svg
          className={styles.svg}
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {PATHS.map((p) => (
              <path key={`def-${p.id}`} id={`path-${p.id}`} d={p.d} />
            ))}
          </defs>

          {PATHS.map((p, i) => (
            <motion.path
              key={p.id}
              d={p.d}
              fill="none"
              stroke="rgba(180, 190, 120, 0.28)"
              strokeWidth={1.25}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.25 + i * 0.08, duration: 0.9, ease: 'easeInOut' }}
            />
          ))}

          {PATHS.map((p, i) => (
            <circle key={`dot-${p.id}`} r="4" fill="#B8C26B">
              <animateMotion
                dur="3.6s"
                repeatCount="indefinite"
                begin={`${1.4 + i * 0.4}s`}
                rotate="auto"
              >
                <mpath href={`#path-${p.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.85;1"
                dur="3.6s"
                repeatCount="indefinite"
                begin={`${1.4 + i * 0.4}s`}
              />
            </circle>
          ))}
        </svg>

        <div className={styles.layer}>
          {INPUTS.map((card, i) => (
            <motion.div
              key={card.label}
              className={`${styles.card} ${styles[`in${i + 1}`]}`}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
            >
              <div className={styles.kind}>Input</div>
              <div className={styles.title}>{card.label}</div>
              <div className={styles.sub}>{card.sub}</div>
            </motion.div>
          ))}

          <motion.div
            className={`${styles.card} ${styles.ontology}`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className={`${styles.kind} ${styles.kindOnto}`}>Ontology</div>
            <div className={styles.titleOnto}>Your Ontology</div>
            <div className={styles.subOnto}>
              Customers · Jobs · Leads · Invoices
            </div>
          </motion.div>

          {ACTIONS.map((card, i) => (
            <motion.div
              key={card.label}
              className={`${styles.card} ${styles[`act${i + 1}`]}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.4 + 0.05 * i, duration: 0.5 }}
            >
              <div className={styles.kind}>Action</div>
              <div className={styles.title}>{card.label}</div>
              <div className={styles.sub}>{card.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
