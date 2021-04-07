import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";


import {
    Instagram,
    Linkedin,
    Mail,
    Twitter,
} from 'react-feather';

const Navigation = () => {
    const router = useRouter();

    return (
        <div className="bg-gray-50 bg-opacity-20 rounded-xl md:p-4 flex flex-col items-center justify-between md:py-10 shadow-sm h-full">
            <div className="hidden md:block">
                <figure className="relative h-24 w-24 mx-auto shadow-lg rounded-full">
                    <Image
                        src="/img/shannone.png"
                        className="rounded-full object-cover object-left"
                        alt="shannone"
                        layout="fill"
                        objectFit="cover"
                    />
                </figure>
                <h1 className="text-textdark text-2xl mt-4 font-semibold">Shannone Controu</h1>
            </div>
            <div className="md:bg-transparent md:flex-col bg-gray-50 bg-opacity-20 p-2 flex text-xl items-center justify-between w-full">
                <Link href="/">
                    <a className={router.pathname == "/" ? "md:px-10 text-xl text-textdark bg-gray-50 bg-opacity-20 shadow-md py-2 px-6 rounded-xl" : "my-4 px-6 md:px-0"}>
                        About
                    </a>
                </Link>
                <Link href="/project">
                    <a className={router.pathname == "/project" ? "md:px-10 text-xl text-textdark bg-gray-50 bg-opacity-20 shadow-md py-2 px-6 rounded-xl" : "my-4 px-6 md:px-0"}>
                        Project
                    </a>
                </Link>
                <Link href="/path">
                    <a className={router.pathname == "/path" ? "md:px-10 text-xl text-textdark bg-gray-50 bg-opacity-20 shadow-md py-2 px-6 rounded-xl" : "my-4 px-6 md:px-0"}>
                        Path
                    </a>
                </Link>
            </div>
            <div className="md:relative md:bg-transparent bg-gray-50 bg-opacity-20 absolute bottom-0 flex justify-around w-full py-2">
                <a className="md:p-1 bg-gray-50 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="https://www.instagram.com/sha_code/?hl=fr" target="blank"><Instagram color="#6a6ba0" size={38} /></a>
                <a className="md:p-1 bg-gray-50 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="https://www.linkedin.com/in/shannone-controu/" target="blank"><Linkedin color="#6a6ba0" size={38} /></a>
                <a className="md:p-1 bg-gray-50 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="mailto:shannone.controu@gmail.com" target="blank"><Mail color="#6a6ba0" size={38} /></a>
                <a className="md:p-1 bg-gray-50 bg-opacity-20 p-2 shadow-md rounded-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" href="https://twitter.com/sha_code" target="blank"><Twitter color="#6a6ba0" size={38} /></a>
            </div>
        </div>
    )
}
export default Navigation;