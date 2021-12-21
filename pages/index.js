import Navigation from "../src/components/Navigation";
import Project from "../src/components/project";
import About from "../src/components/About";
import Path from "../src/components/path";
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
