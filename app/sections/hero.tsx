import React from "react"
import Image from "next/image"
import "./hero.css"
import labtop2 from "../../public/assets/Labtop@2x.webp"
import { LeftIllustration, RightIllustration } from "../components/svgs"
import Motion from "../components/Motion"
import FadeInDiv from "../components/FadeInDiv"

const Hero = () => {
  return (
    <section className="hero block">
      <div className="md:pt-32 pt-20 grid md:grid-cols-12 sm:grid-cols-1 gap-9">
        <div className="col-span-5">
          <Motion duration={0.4}>
            <h1 className="hero__text text-white font-semibold sm:mt-10 mb-10">
              Hello, I am <br /> Kareem Yasser, a{" "}
              <span className="hero__text--gradient">Front end developer</span>
            </h1>
          </Motion>

          <Motion duration={0.4} delay={0.2}>
            <p className="hero__paragraph">
              I&apos;m committed to building web applications that solve
              real-world problems, focusing on user experience with React and
              Angular
            </p>
          </Motion>
        </div>

        <FadeInDiv delay={0.7} className="col-span-7">
          <LeftIllustration className="hero__leftIllustration" />
          <RightIllustration className="hero__rightIllustration" />

          <div className="gradient-spot"></div>
          <div className=" flex justify-center">
            <Image
              className="hero__image"
              src={labtop2}
              alt="labtop"
              priority
            ></Image>
          </div>
        </FadeInDiv>
      </div>
    </section>
  )
}

export default Hero
