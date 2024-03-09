import React, { ReactNode } from "react"
import "./button.css"

interface Props {
  children: ReactNode
  primary?: boolean
  secondary?: boolean
  accent?: boolean
  rounded?: boolean
  block?: boolean
  large?: boolean
  outlined?: boolean
}

const Button = ({
  children,
  primary = false,
  secondary = false,
  accent = false,
  rounded = false,
  block = false,
  large = false,
  outlined = false
}: Props) => {
  const classNames = [
    "btn",
    primary && "btn--primary",
    secondary && "btn--secondary",
    accent && "btn--accent",
    rounded && "btn--rounded",
    block && "btn--block",
    large && "btn--large",
    outlined && "btn--outlined"
  ].filter(Boolean).join(" ")

  return (
    <button className={classNames}>
      {children}
    </button>
  )
}

export default Button
