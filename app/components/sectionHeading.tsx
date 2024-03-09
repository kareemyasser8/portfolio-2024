import React, { ReactNode } from 'react'
import Image, { StaticImageData } from "next/image"

interface Props{
    title: string,
    iconSrc: StaticImageData,
    children? : ReactNode
}

const SectionHeading = ({ title, iconSrc, children }: Props) => {
  return (
    <header className="mt-20 flex-col section__heading mb-20">
    <div className="flex items-center gap-4">
      <h3 className="">{title}</h3>
      <Image className="emoji-icon" src={iconSrc} alt=""></Image>
    </div>
    <p className='font-extralight mt-3'>{children}</p>
  </header>
  )
}

export default SectionHeading