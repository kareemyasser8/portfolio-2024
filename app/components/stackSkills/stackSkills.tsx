import React from "react"
import "./stackSkills.css"
import Skill_Icon from "../skill_Icon/skill_Icon"
import { technologyIcon } from "@/app/data/skills"

interface Props {
  stackType: "Front end Skills" | "Back end Skills"
  icons: technologyIcon[]
}

const StackSkills = ({ stackType, icons }: Props) => {
  return (
    <>
      <header className={`stackSkills__heading ${stackType == "Back end Skills"? `backend` : `frontend`}`} >
        <h4>{stackType}</h4>
      </header>
      <div className="stackSkills__icons grid grid-cols-3 gap-4">
        {icons.map((skill, index) => (
          <div key={index} className="">
            <Skill_Icon skillIcon={skill} stackType={stackType} />
          </div>
        ))}
      </div>
    </>
  )
}

export default StackSkills
