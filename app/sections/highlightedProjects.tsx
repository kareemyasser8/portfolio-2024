import React from "react"
import star from "../../public/assets/Star.webp"
import SectionHeading from "../components/sectionHeading"
import ProjectCard from "../components/projectCard/projectCard"
import { highlightedProjects } from "../data/ProjectsData"
import FadeInDiv from "../components/FadeInDiv"

const HighlightedProjects = () => {
  return (
    <section className="block" id="highlightedProjects">
      <SectionHeading title="Highlighted Projects" iconSrc={star}>
        Explore a Handpicked Selection of Highlighted Projects that I am proud
        of the most.
      </SectionHeading>

      <FadeInDiv>
        <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-10 mb-10">
          {highlightedProjects.map((p, index) => (
            <div key={index} className="lg:col-span-4 md:col-span-6">
              <ProjectCard type="highlighted" project={p} />
            </div>
          ))}
        </div>
      </FadeInDiv>
    </section>
  )
}

export default HighlightedProjects
