import { motion } from 'framer-motion';
import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className="container">
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Agents don't fail because the models are weak. They fail because your
          data isn't legible to them.
        </motion.h2>
        <motion.p
          className={styles.body}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          Scattered tools, unstructured records, institutional knowledge trapped
          in people's heads. That's why most AI deployments stall. We build the
          ontology — the objects, relationships, and rules that make your
          business one coherent layer agents can reason over and act on.
        </motion.p>
      </motion.div>
    </section>
  );
}
