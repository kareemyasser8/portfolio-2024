import Contact from './sections/contact';
import Hero from './sections/hero';
import HighlightedProjects from './sections/highlightedProjects';
import OtherProjects from './sections/otherProjects';
import TechnicalSkills from './sections/technicalSkills';

export default function Home() {
  return (
    <>
        <Hero/>
        <HighlightedProjects/>
        <OtherProjects/>
        <TechnicalSkills/>
        <Contact/>
    </>
  )
}
