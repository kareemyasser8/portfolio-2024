import { ProjectData } from "../ProjectsData"
import gamehubPic from "../../../public/assets/GameHub Thumbnail.webp"
import game1 from "../../../public/assets/gameHubPics/gamehub1.webp"
import game2 from "../../../public/assets/gameHubPics/gamehub2.webp"

const gameHubDetails: ProjectData = {
  id: 2,
  frameWork: "react",
  thumbnailPic: gamehubPic,
  title: "Gamehub",
  description:
    "The gaming platform highlights the newest gaming news, previews, and reviews. Users can stay informed about the gaming world.",
  link: "https://game-hub-three-jet.vercel.app/",
  gitHubLink: "https://github.com/kareemyasser8/game-hub",
  screenshots: [game1, game2],
  challenges: [
    "Utilizing the documentation of the online gaming API to determine the data that needs to be fetched",
    "Implementing the infinite query strategy to avoid retrieving excessive data that may not be necessary",
    "Constructing the UI using the Chakra UI CSS framework"
  ],
  technologiesUsed: [
    "React",
    "HTML",
    "CSS",
    "Chakra UI",
    "TypeScript",
    "React Query",
    "React Context",
  ],
}

export default gameHubDetails
