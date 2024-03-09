import { ProjectData } from "../ProjectsData"
import organicShopPic from "../../../public/assets/Organic Thumbnail maker.webp"
import o1 from "../../../public/assets/oShop/oshop1.webp"
import o2 from "../../../public/assets/oShop/oshop2.webp"
import o3 from "../../../public/assets/oShop/oshop3.webp"
import o4 from "../../../public/assets/oShop/oshop4.webp"

const organicShopDetails: ProjectData = {
  id: 1,
  frameWork: "angular",
  thumbnailPic: organicShopPic,
  title: "Organic shop",
  description:
    "An online e-commerce store for selling organic food like vegetables and fruits.",
  link: "https://online-shop-one-ruddy.vercel.app/",
  gitHubLink: "https://github.com/kareemyasser8/Online-shop",
  screenshots: [o1, o2, o3, o4],
  challenges: [
    "Developing the API backend for the website using Firebase",
    "Developing a user sign-up and registration system that dynamically displays pages based on user roles.",
    "Making the shopping cart page feature"
  ],
  technologiesUsed: [
    "Angular",
    "HTML",
    "CSS",
    "TypeScript",
    "RXJS",
    "Firebase"
  ],
}

export default organicShopDetails
