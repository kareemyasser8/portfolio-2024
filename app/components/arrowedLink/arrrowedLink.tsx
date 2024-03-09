import React, { ReactNode } from "react"
import "./arrowedLink.css"
import Link from "next/link"

interface Props {
  children: ReactNode
  link?: string
  direction?: "forward" | "backward"
}

const ArrowedLink = ({ children, link, direction = "forward" }: Props) => {
  return direction === "forward" ? (
    <a
      href={link || "/"}
      target="_blank"
      className={`link-arrow ${"link-arrow-forward"}`}
    >
      {children}
    </a>
  ) : (
    <Link href={"/"} className={`link-arrow ${"link-arrow-backward"}`}>
      {children}
    </Link>
  )
}

export default ArrowedLink
