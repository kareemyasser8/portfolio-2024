import React from "react"
import SectionHeading from "../components/sectionHeading"
import toolsIcon from "../../public/assets/Tools.webp"
import StackSkills from "../components/stackSkills/stackSkills"
import { frontEndSkills, backEndSkills} from "@/app/data/skills"

const TechnicalSkills = () => {
  return (
    <section className="block" id="skills">
      <SectionHeading iconSrc={toolsIcon} title="Technical Skills">
        Those are the most technologies I am familiar with
      </SectionHeading>

      <div className="grid md:grid-cols-6 sm:grid-cols-3 gap-8">
        <div className="sm:col-span-3">
          <StackSkills icons={frontEndSkills} stackType="Front end Skills"/>
        </div>
        {/* <div className="bg-cyan-50  h-full w-1"></div> */}
        <div className="sm:col-span-3">
          <StackSkills icons={backEndSkills} stackType="Back end Skills"/>
        </div>
      </div>
      
    </section>
  )
}

export default TechnicalSkills
