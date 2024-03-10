"use client"
import { motion } from "framer-motion"
import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
  key?: number
}

const Motion = ({ children, key }: Props) => {
  return (
    <motion.div
      key={key?? key}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Motion
