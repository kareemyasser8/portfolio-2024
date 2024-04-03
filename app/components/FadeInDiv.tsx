"use client"
import { motion } from "framer-motion"
import React, { ReactNode } from "react"
import fadeInAnimationVariants from "../data/fadeInAnimationVariants"

interface Props {
  children: ReactNode
  index?: number | 1
  delay?: number
  [key: string]: any
}

const FadeInDiv = ({ children, index, delay, ...rest }: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
        },
        animate: (index: number) => ({
          opacity: 1,
          transition: {
            delay: delay ? delay : 0.05 * index,
            duration: 0.5,
          },
        }),
      }}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true }}
      key={index}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default FadeInDiv
