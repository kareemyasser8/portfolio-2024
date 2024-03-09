import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiAngularSimple } from "react-icons/di";

export type FrameWork = "angular" | "react" | "vanilla"

interface Props{
    frameWork: FrameWork
}

const ProjectTechnologyIcon = ({frameWork: technology}: Props) => {
    const icons = {
        angular: <DiAngularSimple size={28} color={"c3002f"} />,
        react: <FaReact size={25} color={"61DBFB"} />,
        vanilla: <IoLogoJavascript size={25} color={"F0DB4F"} />,
    };

    return icons[technology] || null;
}

export default ProjectTechnologyIcon