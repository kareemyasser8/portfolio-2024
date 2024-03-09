import React from "react"
import ProjectCard from "../components/projectCard/projectCard"
import SectionHeading from "../components/sectionHeading"
import folder from "../../public/assets/Folder.webp"
import { otherProjects } from "../data/ProjectsData"

const OtherProjects = () => {
  return (
    <section className="block">
      <SectionHeading title="Other Projects" iconSrc={folder}>
        Check out my projects, if you have any questions feel free to ask me for
        more information
      </SectionHeading>

      <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-10 mb-10">
        {otherProjects.map((p, index) => (
          <div key={index} className="lg:col-span-4 md:col-span-6">
            <ProjectCard type="others" project={p} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherProjects
