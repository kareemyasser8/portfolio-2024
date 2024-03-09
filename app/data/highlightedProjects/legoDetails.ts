import { ProjectData } from "../ProjectsData"
import legoPic from "../../../public/assets/Lego Thumbnail.webp"

import lego2 from "../../../public/assets/legoPics/lego2.webp"
import lego3 from "../../../public/assets/legoPics/lego3.webp"
import lego4 from "../../../public/assets/legoPics/lego4.webp"
import lego5 from "../../../public/assets/legoPics/lego5.webp"
import lego6 from "../../../public/assets/legoPics/lego6.webp"
import lego7 from "../../../public/assets/legoPics/lego7.webp"
import lego8 from "../../../public/assets/legoPics/lego8.webp"
import lego9 from "../../../public/assets/legoPics/lego9.webp"
import lego10 from "../../../public/assets/legoPics/lego10.webp"
import lego11 from "../../../public/assets/legoPics/lego11.webp"

const legoDetails: ProjectData = {
  id: 1,
  frameWork: "react",
  thumbnailPic: legoPic,
  title: "LEGO clone",
  description:
    "An online e-commerce store for showcasing LEGO products.This project is a full stack application.",
  link: "https://lego-project-pi.vercel.app/",
  gitHubLink: "https://github.com/kareemyasser8/lego-project",
  screenshots: [
    lego3,
    lego4,
    lego2,
    lego11,
    lego5,
    lego6,
    lego7,
    lego8,
    lego9,
    lego10,
  ],
  challenges: [
    "Designing complex web pages and ensuring their responsiveness using HTML, CSS, and Bootstrap utility classes.",
    "Developing a backend API using Node.js, Express, and MySQL, including route testing with Postman.",
    "Implementing an image uploader service in the admin page to facilitate the upload of multiple product images.",
    "Enhancing the backend API with sorting and multiple filtering options.",
    "Developing a user sign-up and registration system that dynamically displays pages based on user roles.",
    "Optimizing site performance by implementing React Suspense to load only the necessary pages."
  ],
  technologiesUsed: [
    "React",
    "HTML",
    "CSS",
    "TypeScript",
    "React Query",
    "React Context",
    "Zustand",
    "Node JS",
    "Express",
    "Sequelize",
    "Postman",
  ],
}

export default legoDetails
