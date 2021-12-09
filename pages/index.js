import Image from "next/image";
import Navigation from "../src/components/Navigation";
import Project from "../src/components/project";
import Path from "../src/components/path";

import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from 'react-feather';

export default function Home() {
  return (
    <>
      <Navigation />
      <div id="about" className="relative bg-gray-50 dark:bg-black bg-opacity-20 p-5 md:p-10 rounded-xl h-full shadow-sm w-10/12 my-24 mx-auto">
        <div className="mt-14 xs:mt-15 md:w-3/5 bg-gray-50 bg-opacity-20 p-6 rounded-xl shadow-xl w-4/5 mx-auto flex justify-between items-center">
          <Image src="/img/undraw_web_development_0l6v.svg" height={300} width={300} />
          <div>
            <h1 className="text-xl xs:text-3xl py-2 mt-5 text-center">Shannone Controu</h1>
            <h2 className="text-lg xs:text-2xl py-2 mb-5 text-center text-textdark">Web Developer</h2>
          </div>
        </div>
        <div className="absolute bg-gray-50 bg-opacity-20 p-4 md:p-6 rounded-xl right-20 top-96 md:top-32 md:right-32 text-xl xs:text-2xl animate-float text-textdark">Front-end</div>
        <div className="absolute bg-gray-50 bg-opacity-20 p-4 md:p-6 rounded-xl -bottom-4 -left-3 md:bottom-24 md:left-24 text-xl xs:text-2xl animate-floatFast text-textdark">
          <Image src="/img/undraw_react_y-7-wq.svg" height={100} width={100} />
        </div>
        <div className="absolute bg-gray-50 bg-opacity-20 p-4 md:p-6 rounded-xl -left-3 -top-2 md:-left-7 text-xl xs:text-2xl animate-floatSlow text-textdark">
          <Image src="/img/undraw_next_js_-8-g5m.svg" height={100} width={100} />
        </div>
        <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl -bottom-6 -right-2 md:bottom-12 md:-right-7 xs:text-lg animate-floatFast">Organized</div>
        <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl top-10 xs:top-16 left-32 md:top-18 md:left-56 xs:text-lg animate-float">Autonomous</div>
        <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl -top-2 xs:-top-8 -right-2 md:-top-2 md:-right-3 xs:text-lg animate-floatSlow">Pedagogical</div>
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="path" >
        <Path />
      </div>
      <div id="contact" className="xl:relative xl:bg-transparent bg-gray-50 bg-opacity-20 absolute bottom-0 flex justify-around w-full py-2">
        <a className="xl:p-1 bg-gray-50 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="https://www.instagram.com/sha_code/?hl=fr" target="blank"><Instagram color="#6a6ba0" size={38} /></a>
        <a className="xl:p-1 bg-gray-50 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="https://www.linkedin.com/in/shannone-controu/" target="blank"><Linkedin color="#6a6ba0" size={38} /></a>
        <a className="xl:p-1 bg-gray-50 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="mailto:shannone.controu@gmail.com" target="blank"><Mail color="#6a6ba0" size={38} /></a>
        <a className="xl:p-1 bg-gray-50 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="https://twitter.com/sha_code" target="blank"><Twitter color="#6a6ba0" size={38} /></a>
      </div>
    </>
  )
}
