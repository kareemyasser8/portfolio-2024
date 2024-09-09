import { ProjectData } from "../ProjectsData"
import doneWithItPic from "../../../public/assets/doneWithItPics/DoneWithItThumbnail.webp"
import done1 from "../../../public/assets/doneWithItPics/1.webp"
import done2 from "../../../public/assets/doneWithItPics/2.webp"
import done3 from "../../../public/assets/doneWithItPics/3.webp"
import done4 from "../../../public/assets/doneWithItPics/4.webp"
import done5 from "../../../public/assets/doneWithItPics/5.webp"
import done6 from "../../../public/assets/doneWithItPics/6.webp"
import done7 from "../../../public/assets/doneWithItPics/7.webp"
import done8 from "../../../public/assets/doneWithItPics/8.webp"
import done9 from "../../../public/assets/doneWithItPics/9.webp"
import done10 from "../../../public/assets/doneWithItPics/10.webp"

const doneWithItDetails: ProjectData = {
  id: 4,
  frameWork: "react",
  thumbnailPic: doneWithItPic,
  title: "Done with it",
  description:
    "A mobile app for buying and selling reusable items, helping people trade used goods quickly and easily with convenience.",
  link: "",
  gitHubLink: "https://github.com/kareemyasser8/DoneWithIt",
  screenshots: [
    done1,
    done2,
    done3,
    done4,
    done5,
    done6,
    done7,
    done8,
    done9,
    done10,
  ],
  challenges: [
    "Designing the UI with React Native components, ensuring compatibility and smooth performance across both Android and iOS platforms.",
    "Implementing proper navigation between different screens using Expo Router.",
    "Utilizing phone permissions to access the gallery and location for adding product photos.",
  ],
  technologiesUsed: [
    "React",
    "TypeScript",
    "Expo",
    "Expo-Router",
    "Axios",
    "Formik",
    "Yup",
  ],
}

export default doneWithItDetails
