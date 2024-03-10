import ArrowedLink from "@/app/components/arrowedLink/arrrowedLink"
import Carousel from "@/app/components/carousel/carousel"
import ProjectDetails from "@/app/components/projectDetails/projectDetails"
import React from "react"
import { highlightedProjects, otherProjects } from "@/app/data/ProjectsData"
import Motion from "@/app/components/Motion"

interface Props {
  params: {
    type: "others" | "highlighted"
    id: number
  }
}

const ProjectDetailsPage = ({ params: { type, id } }: Props) => {
  const project =
    type == "highlighted"
      ? highlightedProjects.filter((p) => p.id == id)[0]
      : otherProjects.filter((p) => p.id == id)[0]

  return (
    <section className="block pb-28">
      <div className="pt-10">
        <ArrowedLink direction="backward">Back to Home</ArrowedLink>
        <div className="mt-10 grid md:grid-cols-2 sm:grid-cols-1 gap-9 mb-28">
          <div className="col-span-1">
            <Motion>
              <Carousel project={project} />
            </Motion>
          </div>
          <div className="col-span-1">
            <Motion>
              <ProjectDetails project={project} />
            </Motion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailsPage
