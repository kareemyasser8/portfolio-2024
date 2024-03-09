import React from "react"
import "./skill_Icon.css"
import { FaReact, FaAngular, FaNodeJs, FaHtml5 } from "react-icons/fa"
import {
  SiCss3,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"
import { BsGit } from "react-icons/bs"

import { technologyIcon } from "@/app/data/skills"

interface Props {
  skillIcon: technologyIcon
  stackType: "Front end Skills" | "Back end Skills"
}

const Skill_Icon = ({skillIcon, stackType}: Props) => {

  const ICON_SIZE = 50;

  const icons:{ [key: string]: React.JSX.Element } = {
    "Angular": <FaAngular size={ICON_SIZE} color={skillIcon.color} className="icon-white"/>,
    "React": <FaReact size={ICON_SIZE} color={skillIcon.color} className="icon-white"/>,
    "HTML": <FaHtml5 size={ICON_SIZE} color={skillIcon.color} className="icon-white" />,
    "CSS": <SiCss3 size={ICON_SIZE} color={skillIcon.color} className="icon-white" />,
    "Java script": <IoLogoJavascript size={ICON_SIZE} color={skillIcon.color} className="icon-white" />,
    "Type script": <SiTypescript size={ICON_SIZE} color={skillIcon.color}  className="icon-white"/>,
    "Git": <BsGit size={ICON_SIZE} color={skillIcon.color} className="icon-white"/>,
    "Node js": <FaNodeJs size={ICON_SIZE} color={skillIcon.color} className="icon-white"/>,
    "Express": <SiExpress size={ICON_SIZE} color={skillIcon.color} className="icon-white" />,
    "Mongo DB": <SiMongodb size={ICON_SIZE} color={skillIcon.color} className="icon-white" />,
    "MYSQL": <SiMysql size={ICON_SIZE} color={skillIcon.color} className="icon-white" />,
    "Postman": <SiPostman size={ICON_SIZE} color={skillIcon.color} className="icon-white" />,
  }
  
  return (
    <div className={`skill_icon ${stackType == "Back end Skills"? `backend` : `frontend`}`}>
      {icons[skillIcon.name]}
      <p>{skillIcon.name}</p>
    </div>
  )
}

export default Skill_Icon
