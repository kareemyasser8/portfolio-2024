import React from "react"
import Image from "next/image"
import "./hero.css"
import labtop2 from "../../public/assets/Labtop@2x.webp"
import { LeftIllustration, RightIllustration } from "../components/svgs"

const Hero = () => {
  return (
    <section className="hero block">
      <LeftIllustration className="hero__leftIllustration" />
      <RightIllustration className="hero__rightIllustration" />
      <div className="md:pt-32 pt-20 grid md:grid-cols-12 sm:grid-cols-1 gap-9">
        <div className="col-span-5">
          <div className="gradient-spot"></div>
          <h1 className="hero__text text-white font-semibold sm:mt-10 mb-10">
            Hello, I am <br /> Kareem Yasser, a{" "}
            <span className="hero__text--gradient">Front end developer</span>
          </h1>

          <p className="hero__paragraph">
            I&apos;m committed to building web applications that solve real-world
            problems, focusing on user experience with React and Angular
          </p>
        </div>

        <div className="col-span-7 flex justify-center">
          {/* <picture>
            <source type="image/webp" srcSet={`${labtop1.src} 1x, ${labtop2.src} 2x`} />
            <source
              type="image/png"
              srcSet={`${labtop1p.src} 1x, ${labtop2p.src} 2x`}
            />
            <Image className="hero__image" src={labtop2} alt="labtop" priority ></Image>
          </picture> */}
          <Image
            className="hero__image"
            src={labtop2}
            alt="labtop"
            priority
          ></Image>
        </div>
      </div>
    </section>
  )
}

export default Hero
