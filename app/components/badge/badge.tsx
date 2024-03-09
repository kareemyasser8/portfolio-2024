import React, { ReactNode } from "react"
import "./badge.css"

interface Props {
  children: ReactNode
  color?: "primary" | "secondary"
  type?: "small" | "big"
}

const Badge = ({ children, color = "primary", type= "big" }: Props) => {
  return (
    <span
      className={`badge 
      ${color == "primary" ? "badge--primary" : "badge--secondary"} 
      ${type == "small" ? "badge--small" : ""} 
      `}
    >
      {children}
    </span>
  )
}

export default Badge
