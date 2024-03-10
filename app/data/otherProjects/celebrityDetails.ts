import { ProjectData } from "../ProjectsData"
import celebrityPic from "../../../public/assets/Celebrity Thumbnail maker.webp"
import celebrity1 from "../../../public/assets/celebrityPics/celebrity2.webp"
import celebrity2 from "../../../public/assets/celebrityPics/celebrity1.webp"
import celebrity3 from "../../../public/assets/celebrityPics/celebrity3.webp"
import celebrity4 from "../../../public/assets/celebrityPics/celebrity4.webp"
import celebrity5 from "../../../public/assets/celebrityPics/celebrity5.webp"
import celebrity6 from "../../../public/assets/celebrityPics/celebrity6.webp"
import celebrity7 from "../../../public/assets/celebrityPics/celebrity7.webp"
import celebrity8 from "../../../public/assets/celebrityPics/celebrity8.webp"

const celebrityDetails: ProjectData = {
  id: 3,
  frameWork: "vanilla",
  thumbnailPic: celebrityPic,
  title: "Celebrity site",
  description:
    "A platform for showing news, songs, videos and tickets of the singer.",
  link: "https://celebrity-website.vercel.app/index.html",
  gitHubLink: "https://github.com/kareemyasser8/Celebrity-website",
  screenshots: [
    celebrity2,
    celebrity1,
    celebrity3,
    celebrity4,
    celebrity5,
    celebrity6,
    celebrity7,
    celebrity8,
  ],
  challenges: [
    "Designing pages and ensuring their responsiveness using HTML, CSS",
    "Implementing music player using javascript and jQuery",
    "Making videos section",
    "Making Events section"
  ],
  technologiesUsed: [
    "HTML",
    "CSS",
    "JavaScript",
    "JQuery",
  ],
}

export default celebrityDetails
