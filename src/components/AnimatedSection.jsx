import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export function AnimatedSection({ id, className, children }) {
  return (
    <motion.section
      id={id}
      className={cn('relative scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10', className)}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
