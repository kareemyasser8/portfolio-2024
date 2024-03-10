import React from 'react'

const useHighlightedProjects = () => {

    let sectionRef: React.MutableRefObject<HTMLElement> | null = null;
  
    const setSection = (ref: React.MutableRefObject<HTMLElement>) => {
      sectionRef = ref;
    }
    
    return {
      sectionRef,
      setSection
    }
  }
  

export default useHighlightedProjects
