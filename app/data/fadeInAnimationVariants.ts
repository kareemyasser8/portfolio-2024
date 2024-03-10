const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
    },
  
    animate: (index: number)=> ({
      opacity: 1,
      transition: {
          delay: 0.05 * index,
          duration: 0.5
      }
    })
  }
  
  export default fadeInAnimationVariants
  