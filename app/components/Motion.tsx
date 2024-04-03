"use client"
import { motion } from "framer-motion"
import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
  key?: number
  duration?: number
  delay?: number
}

const Motion = ({ children, key, duration, delay }: Props) => {
  return (
    <motion.div
      key={key ?? key}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay ? delay : 0,
        duration: duration ? duration : 0.2,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Motion
