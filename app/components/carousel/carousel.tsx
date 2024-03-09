"use client"
import React, { MutableRefObject, useRef, useState } from "react"
import "./carousel.css"
import Image from "next/image"
import { IoChevronForwardSharp } from "react-icons/io5"
import { IoChevronBackSharp } from "react-icons/io5"
import { ProjectData } from "@/app/data/ProjectsData"

interface Props{
  project: ProjectData;
}

const Carousel = ({project}: Props) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const imageListRef = useRef<HTMLDivElement>(null)
  const prevButtonRef = useRef<HTMLDivElement>(null)
  const nextButtonRef = useRef<HTMLDivElement>(null)
  const CHEVERON_SIZE = 40
  const images = project.screenshots;

  const slideScroll = (direction: number) => {
    const newIndex = (slideIndex + direction) % images.length
    setSlideIndex(newIndex >= 0 ? newIndex : images.length - 1)

    const scrollAmount = imageListRef.current?.clientWidth || 0
    imageListRef.current?.scrollBy({
      left: scrollAmount * direction,
      behavior: "smooth",
    })
  }

  return (
    <>
      <div className="carousel__container">
        <div
          className="carousel_left"
          onClick={() => slideScroll(-1)}
          ref={prevButtonRef}
        >
          <div className="cursor-pointer">
            <IoChevronBackSharp size={CHEVERON_SIZE} />
          </div>
        </div>
        <div ref={imageListRef} className="carousel__list">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              priority
              alt=""
              className="carousel__img"
              style={{ display: index === slideIndex ? "block" : "none" }}
            />
          ))}
        </div>
        <div
          className="carousel_right"
          onClick={() => slideScroll(1)}
          ref={nextButtonRef}
        >
          <div className="cursor-pointer">
            <IoChevronForwardSharp size={CHEVERON_SIZE} />
          </div>
        </div>
        <div className="dots__container">
          {images.map((_, index) => (
            <div
              key={index}
              className={`carousel__dot ${
                index === slideIndex ? "active__dot" : ""
              }`}
              onClick={() => setSlideIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel
