import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react'

const EASE_OUT = [0.23, 1, 0.32, 1] as const

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
  once?: boolean
}

export function Reveal({ children, delay = 0, once = true, ...rest }: RevealProps) {
  const reduce = useReducedMotion() ?? false

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, transform: 'translateY(12px)' }
  const shown = reduce ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }

  return (
    <motion.div
      initial={hidden}
      whileInView={shown}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: reduce ? 0.4 : 0.6, delay: reduce ? 0 : delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
