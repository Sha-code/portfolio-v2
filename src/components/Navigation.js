import Link from "next/link";
import Image from "next/image";

import useDarkMode from "../func/useDarkMode";

import { Moon, Sun } from 'react-feather';

const Navigation = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div className="bg-gray-50 dark:bg-gray-700 bg-opacity-60 dark:bg-opacity-60 rounded-b-xl py-4 px-3 md:px-10 grid grid-cols-5 md:grid-cols-7 gap-5 shadow-sm h-full text-textdark sticky top-0 z-50">
            <div className="hidden xl:flex items-center col-span-2">
                <figure className="relative h-12 w-12 shadow-lg rounded-full">
                    <Image
                        src="/img/shannone.png"
                        className="rounded-full object-cover object-left"
                        alt="shannone"
                        layout="fill"
                        objectFit="cover"
                    />
                </figure>
                <h1 className="text-xl font-semibold ml-3">Shannone Controu</h1>
            </div>
            <Link href="#about">
                <a className="md:px-6 xl:px-0 my-auto text-lg hover:text-textdark">
                    About
                </a>
            </Link>
            <Link href="#project">
                <a className="md:px-6 xl:px-0 my-auto text-lg hover:text-textdark">
                    Project
                </a>
            </Link>
            <Link href="#path">
                <a className="px-2 md:px-6 xl:px-0 my-auto  text-lg hover:text-textdark">
                    Path
                </a>
            </Link>
            <Link href="#contact">
                <a className="md:px-6 xl:px-0 my-auto text-lg hover:text-textdark">
                    Contact
                </a>
            </Link>
            <div className="my-auto flex justify-end">
                {colorTheme === "light" ? <Sun onClick={() => setTheme("light")} /> : <Moon onClick={() => setTheme("dark")} />}
            </div>
        </div>
    )
}
export default Navigation;