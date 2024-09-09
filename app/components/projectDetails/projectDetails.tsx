import React from "react"
import Badge from "../badge/badge"
import "./projectDetails.css"
import Button from "../button/button"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { ProjectData } from "@/app/data/ProjectsData"

interface Props {
  project: ProjectData
}
const ProjectDetails = ({ project }: Props) => {
  return (
    <>
      <h3>{project.title}</h3>
      <p className="mt-6">{project.description}</p>

      {project.challenges && (
        <>
          <h4 className="mt-5 text-purple-300 mb-5">Challenges</h4>
          <ul className="list__bullet">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </>
      )}

      <h4 className="mt-10 text-purple-300">Technologies used</h4>

      <div className="mt-7 flex gap-3 flex-wrap">
        {project.technologiesUsed.map((technology, index) => (
          <Badge color="primary" type="small" key={index}>
            {technology}
          </Badge>
        ))}
      </div>

      <div className="mt-5 project__actions__contianer">
        {project.link && (
          <Link href={project.link} target="__blank">
            <Button secondary block large rounded>
              Open website
            </Button>
          </Link>
        )}

        <Link href={project.gitHubLink} target="__blank">
          <div className="circle__container">
            <div className="circle">
              <FaGithub size={30} color="black" />
              <p className="circle--text"></p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProjectDetails
