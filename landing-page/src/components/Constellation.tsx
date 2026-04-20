import { motion } from 'framer-motion';
import styles from './Constellation.module.css';

type Node = {
  id: string;
  x: number;
  y: number;
  ring?: boolean;
};

const NODES: Node[] = [
  { id: 'n1', x: 155, y: 125, ring: true },
  { id: 'n2', x: 205, y: 155 },
  { id: 'n3', x: 245, y: 195 },
  { id: 'n4', x: 290, y: 165, ring: true },
  { id: 'n5', x: 370, y: 155, ring: true },
  { id: 'n6', x: 410, y: 210 },
  { id: 'n7', x: 320, y: 245 },
  { id: 'n8', x: 260, y: 270, ring: true },
  { id: 'n9', x: 180, y: 290 },
  { id: 'n10', x: 355, y: 310, ring: true },
  { id: 'n11', x: 440, y: 290 },
  { id: 'n12', x: 300, y: 370, ring: true },
  { id: 'n13', x: 225, y: 390 },
  { id: 'n14', x: 380, y: 400 },
];

const EDGES: [string, string][] = [
  ['n1', 'n2'],
  ['n2', 'n3'],
  ['n3', 'n4'],
  ['n4', 'n5'],
  ['n5', 'n6'],
  ['n4', 'n7'],
  ['n7', 'n8'],
  ['n8', 'n9'],
  ['n8', 'n10'],
  ['n10', 'n11'],
  ['n10', 'n12'],
  ['n12', 'n13'],
  ['n12', 'n14'],
  ['n9', 'n13'],
];

const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function Constellation() {
  return (
    <motion.div
      className={styles.wrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.svg
        className={styles.svg}
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="A constellation diagram of connected nodes representing your business ontology"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <pattern
            id="dot-grid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="0.9" fill="rgba(255, 255, 255, 0.08)" />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#000" stopOpacity="1" />
            <stop offset="70%" stopColor="#000" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect x="0" y="0" width="500" height="500" fill="url(#grid-fade)" />
          </mask>
        </defs>

        <rect
          x="0"
          y="0"
          width="500"
          height="500"
          fill="url(#dot-grid)"
          mask="url(#grid-mask)"
        />

        {EDGES.map(([from, to], i) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: 'easeOut',
                delay: 0.4 + i * 0.08,
              }}
            />
          );
        })}

        {NODES.map((n, i) => (
          <g key={n.id}>
            {n.ring && (
              <>
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={11}
                  fill="none"
                  stroke="rgba(184, 194, 107, 0.45)"
                  strokeWidth="1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.9 + i * 0.06,
                    type: 'spring',
                    stiffness: 260,
                    damping: 18,
                  }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={11}
                  fill="none"
                  stroke="rgba(184, 194, 107, 0.55)"
                  strokeWidth="1"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 1.2 + (i % 3) * 0.6,
                  }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
              </>
            )}
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.ring ? 4 : 2.5}
              fill="#F2F2EF"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.15 + i * 0.05,
                type: 'spring',
                stiffness: 320,
                damping: 22,
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          </g>
        ))}
      </motion.svg>
    </motion.div>
  );
}
