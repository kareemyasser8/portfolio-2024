import { ProjectData } from "../ProjectsData";
import dashboardPic from '../../../public/assets/dashboard Thumbnail maker.webp';
import d1 from '../../../public/assets/dashboardPic/dashboard.webp'

const dashboardDetails: ProjectData = {
    id: 2,
    frameWork: "angular",
    thumbnailPic: dashboardPic,
    title: "Dashboard page",
    description: "A static page, made to be implemented after a UI design, it is responsive on all window sizes.",
    link: "https://dashboard-2-steel.vercel.app/",
    gitHubLink: "https://github.com/kareemyasser8/dashboard-2",
    screenshots: [d1],
    technologiesUsed: ["Angular", "HTML", "CSS", "TypeScript"]   
}

export default dashboardDetails;
