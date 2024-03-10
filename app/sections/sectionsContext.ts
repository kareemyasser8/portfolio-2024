import React from "react"

interface SectionContextType{
    sectionsRefs: React.LegacyRef<HTMLElement>[]
}

const SectionsContext = React.createContext<SectionContextType>({} as SectionContextType);

export default SectionsContext;