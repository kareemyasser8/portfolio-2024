import { StaticImageData } from "next/image"
import { FrameWork } from "../components/projectTechnologyIcon";
import legoDetails from "./highlightedProjects/legoDetails";
import gameHubDetails from "./highlightedProjects/gameHubDetails";
import miniTwitterDetails from "./highlightedProjects/miniTwitterDetails";
import organicShopDetails from "./otherProjects/organicShopDetails";
import dashboardDetails from "./otherProjects/dashboardDetails";
import celebrityDetails from "./otherProjects/celebrityDetails";

export type TechnologyUsed =
     "React"| "Angular" | "HTML" | "CSS" | "JavaScript" | "TypeScript" | "Node JS" | "Express" | "MYSQL" | "Sequelize" | "React Query" | "Zustand" | "React Context" | "MongoDB" | "Postman" | "Chakra UI" | "RXJS" | "Firebase" | "JQuery"


export interface ProjectData{
    id: number,
    frameWork: FrameWork,
    thumbnailPic: StaticImageData,
    title: string,
    description: string,
    link: string,
    gitHubLink: string,
    screenshots: StaticImageData[],
    challenges?: string[],
    technologiesUsed: TechnologyUsed[] 
}

export const highlightedProjects : ProjectData[] = [
    legoDetails,
    gameHubDetails,
    miniTwitterDetails
]

export const otherProjects: ProjectData[] = [
    organicShopDetails,
    dashboardDetails,
    celebrityDetails
]