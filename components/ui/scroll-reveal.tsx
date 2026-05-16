"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  yOffset?: number
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "", 
  yOffset = 50 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Exit "Push Back" Effect: Triggers when the top of the section hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"] 
  })

  // As the section leaves upwards, it scales down, darkens, and moves slightly down (parallax)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]) 

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity, y }} 
      className={`relative origin-top bg-background ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ 
          duration: 0.9, 
          delay: delay, 
          ease: [0.21, 0.47, 0.32, 0.98] // Premium ease-out curve
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
