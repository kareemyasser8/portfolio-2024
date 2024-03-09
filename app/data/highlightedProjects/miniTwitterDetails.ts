import { ProjectData } from "../ProjectsData"
import miniTwitterPic from "../../../public/assets/twitter-Thumbnail-maker.webp"
import twitter1 from "../../../public/assets/twitterPics/miniTwitter1.webp"
import twitter2 from "../../../public/assets/twitterPics/miniTwitter2.webp"
import twitter3 from "../../../public/assets/twitterPics/miniTwitter3.webp"
import twitter4 from "../../../public/assets/twitterPics/miniTwitter4.webp"
import twitter5 from "../../../public/assets/twitterPics/miniTwitter5.webp"
import twitter6 from "../../../public/assets/twitterPics/miniTwitter6.webp"

const miniTwitterDetails: ProjectData = {
  id: 3,
  frameWork: "angular",
  thumbnailPic: miniTwitterPic,
  title: "Mini Twitter",
  description:
    "A web platform for sharing tweets, replying to posts, and receiving notifications for likes and comments on your posts.",
  link: "https://mini-twitter-ko2prti76-kareemyasser8.vercel.app/welcome/login",
  gitHubLink: "https://github.com/kareemyasser8/mini-twitter",
  screenshots: [twitter1, twitter2, twitter3, twitter4, twitter5, twitter6],
  challenges: [
    "Developing the API backend for the website using Node.js, Express, and MongoDB",
    "Implementing a login/signup system and a Guest mode allowing viewing of tweets but not replying or liking",
    "Integrating a reply feature for tweets and ensuring each tweet has a unique link containing its data",
    "Adding a notification page to provide updates on likes or replies to your tweets",
    "Enabling users to edit and delete their own tweets"
    ],
  technologiesUsed: [
    "Angular",
    "HTML",
    "CSS",
    "TypeScript",
    "RXJS",
    "Node JS",
    "Express",
    "MongoDB"
  ],
}

export default miniTwitterDetails
