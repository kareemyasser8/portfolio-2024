'use client';
import "./projectCard.css"
import Image from "next/image"
import ArrowedLink from "../arrowedLink/arrrowedLink"
import Link from "next/link";
import Button from "../button/button"
import ProjectTechnologyIcon from "../projectTechnologyIcon"
import { ProjectData } from "../../data/ProjectsData"

interface Props{
  project: ProjectData
  type: "highlighted" | "others";
}

const ProjectCard = ({project, type}: Props) => {

  return (
    <article className="projectCard__container">
      <figure className="projectCard__image">
        <div className="projectCard__technology__icon">
          <ProjectTechnologyIcon frameWork={project.frameWork}/>
        </div>
        <Image src={project.thumbnailPic} alt="" />
      </figure>
      <div className="projectCard__content">
        <h4>{project.title}</h4>
        <p className="mb-6 mt-2">
          {project.description}
        </p>
        <ArrowedLink link={project.link} direction="forward">Visit website</ArrowedLink>
        <Link href={`/projects/${type}/${project.id}`}>
        <Button secondary block large rounded>More details</Button>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
