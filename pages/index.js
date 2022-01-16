import Navigation from "../src/components/Navigation";
import Project from "../src/components/Project";
import About from "../src/components/About";
import Path from "../src/components/Path";
import Contact from "../src/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <About />
      <Project />
      <Path />
      <Contact />
    </>
  )
}
