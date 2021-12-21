import Image from "next/image";
import { Instagram, Linkedin, Mail, Twitter } from "react-feather";

const Contact = () => (
    <div id="contact" className="grid grid-cols-1 md:grid-cols-2 px-10 py-7 bg-gray-50 bg-opacity-20 p-3 rounded-t-xl mt-20" >
        <div className="flex flex-col md:flex-row mb-10 md:mb-0">
            <Image src="/img/undraw_confidential_letter_w6ux.svg" width="350" height="200" />
            <h2 className="my-auto text-3xl text-textdark dark:text-gray-800 font-medium text-center md:text-left">Contact and <br />Socials media</h2>
        </div>
        <div className="flex justify-around w-full py-2">
            <a className="xl:p-1 bg-gray-50 dark:bg-gray-700 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 md:h-12 my-auto" href="mailto:shannone.controu@gmail.com" target="blank"><Mail color="#6a6ba0" size={40} /></a>
            <a className="xl:p-1 bg-gray-50 dark:bg-gray-700 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 md:h-12 my-auto" href="https://www.instagram.com/sha_code/?hl=fr" target="blank"><Instagram color="#6a6ba0" size={40} /></a>
            <a className="xl:p-1 bg-gray-50 dark:bg-gray-700 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 md:h-12 my-auto" href="https://www.linkedin.com/in/shannone-controu/" target="blank"><Linkedin color="#6a6ba0" size={40} /></a>
            <a className="xl:p-1 bg-gray-50 dark:bg-gray-700 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 md:h-12 my-auto" href="https://twitter.com/sha_code" target="blank"><Twitter color="#6a6ba0" size={40} /></a>
        </div>
    </div>
);
export default Contact;