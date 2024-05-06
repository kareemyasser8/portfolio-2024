"use client"
import React, { useState } from "react"
import "./nav.css"
import { KYLogo, Menu } from "../svgs"
import Link from "next/link"

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleMenu = () => setIsExpanded(!isExpanded)
  const menuItems = [
    {
      content: "Projects",
      href: "/#highlightedProjects",
    },
    {
      content: "Skills",
      href: "/#skills",
    },
    {
      content: "Contact",
      href: "/#contact",
    },
  ]

  return (
    <header>
      <div className="nav-spacer"></div>
      <nav
        className={`nav collapsible ${
          isExpanded ? "collapsible--expanded" : ""
        } `}
      >
        <div className="nav__content">
          <Link href={"/"}>
            <KYLogo className="size-20 " />
          </Link>
          <div className="menu_btn" onClick={toggleMenu}>
            <Menu className="size-14 nav__toggler" />
          </div>

          <ul className="list nav__list collapsible__content">
            {menuItems.map((item, index) => (
              <li key={index} className="nav__item">
                <Link href={item.href}>
                  <div onClick={toggleMenu}>{item.content}</div>
                </Link>
              </li>
            ))}

            <li className="nav__item md:border-solid md:border  border-indigo-800 rounded-lg hover:bg-indigo-800 md:px-3">
              <Link
                target="__blank"
                href={
                  "https://drive.google.com/file/d/1WhiyOjB2T-nSHoobvdf5ZYVpn1PDGU7C/view?usp=sharing"
                }
              >
                <div onClick={toggleMenu}>Resume</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
