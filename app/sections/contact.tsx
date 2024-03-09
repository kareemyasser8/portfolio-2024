import React from "react"
import SectionHeading from "../components/sectionHeading"
import mobile from "../../public/assets/Mobile.webp"
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaWhatsapp } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"

const Contact = () => {
  const ICON_SIZE = 27

  return (
    <section className="block ">
      <SectionHeading iconSrc={mobile} title="Contacts">
        When looking to connect, feel free to reach out via email. You can also
        find me on LinkedIn if that's more your style.
      </SectionHeading>

      <div className="contact__logos flex flex-wrap gap-10">
        <a target="__blank" href="https://www.linkedin.com/in/kareemyasser8/">
          <FaLinkedin color="fff" size={ICON_SIZE} className="contact_icon" />
        </a>
        {/* <SiGmail color="fff" size={ICON_SIZE} className="contact_icon" />
        <span>kareem.yasserr@gmail.com</span> */}
        <a
          target="__blank"
          href="https://api.whatsapp.com/send/?phone=01212164113&text&type=phone_number&app_absent=0"
        >
          <FaWhatsapp color="fff" size={ICON_SIZE} className="contact_icon" />
        </a>
        <a target="__blank" href="https://github.com/kareemyasser8">
          <FaGithub color="fff" size={ICON_SIZE} className="contact_icon" />
        </a>
      </div>
    </section>
  )
}

export default Contact
