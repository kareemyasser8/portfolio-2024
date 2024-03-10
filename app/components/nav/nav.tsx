"use client"
import React, { useState } from "react"
import "./nav.css"
import { KYLogo, Menu } from "../svgs"
import Link from "next/link"

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <header>
      <div className="nav-spacer"></div>
      <nav
        className={`nav collapsible ${
          isExpanded ? "" : "collapsible--expanded"
        } `}
      >
        <div className="nav__content">
          <Link href={"/"}>
            <KYLogo className="size-20 " />
          </Link>
          <div className="menu_btn" onClick={() => setIsExpanded(!isExpanded)}>
            <Menu className="size-14 nav__toggler" />
          </div>
          <ul className="list nav__list collapsible__content">
            <li className="nav__item">
              <Link href={"/#highlightedProjects"}>Projects</Link>
            </li>
            <li className="nav__item">
              <Link href={"/#skills"}>Skills</Link>
            </li>
            <li className="nav__item">
              <Link href={"/#contact"}>Contact</Link>
            </li>
            <li className="nav__item md:border-solid md:border  border-indigo-800 rounded-lg  md:px-3">
              <Link href={"/"}>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
