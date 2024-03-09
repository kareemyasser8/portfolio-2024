import Image from "next/image"
import Nav from "./components/nav/nav"
import ArrowedLink from "./components/arrowedLink/arrrowedLink"
import Badge from "./components/badge/badge"
import Collapsible from "./components/collapsible/collapsible"
import { KYLogo, Menu } from "./components/svgs"
import star from "../public/assets/Star.png"
import folder from "../public/assets/Folder.png"
import mobile from "../public/assets/Mobile.png"
import Hero from "./sections/hero"
import HighlightedProjects from "./sections/highlightedProjects"
import OtherProjects from "./sections/otherProjects"
import TechnicalSkills from "./sections/technicalSkills"
import Contact from "./sections/contact"
import Footer from "./components/footer/footer"

export default function Home() {
  return (
    <>
        <Hero/>
        <HighlightedProjects/>
        <OtherProjects/>
        <TechnicalSkills/>
        <Contact/>
    </>
  )
}
