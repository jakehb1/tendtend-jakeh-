import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from './FAQ.module.css';

const ITEMS = [
  {
    q: 'What does "ontology" actually mean here?',
    a: 'It\'s the structured model of your business — your customers, jobs, invoices, leads, and the rules that connect them. We build it from your existing tools so agents have something coherent to reason against instead of guessing from raw data.',
  },
  {
    q: 'How is this different from a chatbot or automation platform?',
    a: 'Chatbots answer questions. Automation platforms run static flows. We install an operator — a set of agents bound to your ontology that can run multi-step jobs, exceptions, handoffs, and writeback to your systems of record.',
  },
  {
    q: 'What tools do you connect to?',
    a: 'Gmail, Google Calendar, Slack, HubSpot, Notion, Airtable, Zapier, most common CRMs, Stripe, QuickBooks, Postgres. If it has an API, we can usually bind it to the ontology.',
  },
  {
    q: 'How long until something is running?',
    a: 'Usually 30 days from kickoff to first agent in production. The ontology and first workflow go in together. From there we expand surface area.',
  },
  {
    q: 'Do agents take irreversible actions on their own?',
    a: 'No. Any action with real business consequence stays gated behind your approval until the behavior is trusted. Every action is logged and auditable.',
  },
  {
    q: 'What does this cost?',
    a: 'We scope per-engagement based on the workflows and tools involved. Most customers start in the low five figures for the first operator and scale from there.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container" id="faq">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">Questions</div>
        <h2>Common questions.</h2>
      </motion.div>

      <div className={styles.list}>
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.04 * i, duration: 0.4 }}
            >
              <button
                className={styles.q}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <motion.span
                  className={styles.plus}
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className={styles.a}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
