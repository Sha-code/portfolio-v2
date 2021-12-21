import Image from "next/image";

const About = () => (
    <div id="about" className="relative bg-gray-100 dark:bg-gray-800 bg-opacity-30 p-4 md:p-5 lg:p-10 rounded-xl h-full shadow-sm md:w-11/12 lg:w-10/12 mt-12 md:mt-32 mx-auto">
        <div className="mt-14 xs:mt-15 bg-gray-50 bg-opacity-20 p-6 rounded-xl shadow-xl lg:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="hidden md:block">
                <Image src="/img/undraw_web_development_0l6v.svg" height={300} width={300} />
            </div>
            <div className="md:w-3/5">
                <h1 className="text-xl xs:text-3xl py-2 mt-5 text-center">Shannone Controu</h1>
                <h2 className="text-lg xs:text-2xl py-2 mb-5 text-center text-textdark dark:text-gray-300">Web Developer</h2>
                <div className="px-2 md:text-lg">
                    <p>
                        Yesterday school teacher without motivation, today a happy web developer!
                    </p>
                    <p>
                        I made my transition in 2019, since I never stopped to code.
                    </p>
                    <p>
                        I like travelling and freshly brewed cups of coffee.
                    </p>
                    <p>
                        My Personnal project: Help futur junior developer during their own transition.
                    </p>
                </div>
            </div>
        </div>
        <div className="hidden md:block">
            <div className="absolute bg-gray-50 bg-opacity-20 p-4 md:p-6 rounded-xl right-1 top-50 lg:top-32 lg:right-30 text-xl xs:text-2xl animate-float text-textdark">
                <Image src="/img/undraw_static_assets_rpm.svg" height={80} width={120} />
            </div>
            <div className="absolute bg-gray-50 bg-opacity-20 p-4 md:p-6 rounded-xl -bottom-4 left-20 md:-bottom-16 lg:left-48 text-xl xs:text-2xl animate-floatFast text-textdark">
                <Image src="/img/undraw_react_y-7-wq.svg" height={100} width={100} />
            </div>
            <div className="absolute bg-gray-50 bg-opacity-20 p-4 md:p-6 rounded-xl -left-3 -top-3 lg:-left-7 text-xl xs:text-2xl animate-floatSlow text-textdark">
                <Image src="/img/undraw_next_js_-8-g5m.svg" height={100} width={100} />
            </div>
            <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl top-10 xs:-top-3 left-32 md:left-1/2 xs:text-lg animate-float">
                <Image src="/img/undraw_tailwind_css_1egw.svg" height={100} width={100} />
            </div>
            <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl -bottom-6 -left-2 md:bottom-12 md:-left-7 xs:text-lg animate-floatSlow">Caring</div>
            <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl bottom-1/2 right-28 lg:bottom-12 md:-right-7 xs:text-lg animate-floatFast">Organized</div>
            <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl top-10 xs:top-16 left-32 md:left-56 xs:text-lg animate-float">Autonomous</div>
            <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl -top-2 xs:-top-8 -right-2 md:-top-2 md:-right-3 xs:text-lg animate-floatSlow">Pedagogical</div>
        </div>
        {/* Mobile integration */}
        <div className="bg-textbase bg-opacity-60 dark:bg-opacity-70 rounded-xl md:hidden py-5 my-10">
            <h1 className="text-4xl font-extrabold text-white dark:opacity-100 my-5 text-center">Skills</h1>
            <div className="grid grid-cols-2 text-textdark dark:text-gray-300">
                <div className="m-auto">
                    <Image src="/img/undraw_static_assets_rpm.svg" alt="hard skills, javascript, html, css" height={80} width={100} />
                </div>
                <div className="m-auto">Caring</div>
                <div className="m-auto">
                    <Image src="/img/undraw_react_y-7-wq.svg" alt="hard skills, React.js" height={80} width={100} />
                </div>
                <div className="m-auto">Organized</div>
                <div className="m-auto">
                    <Image src="/img/undraw_next_js_-8-g5m.svg" alt="hard skills, Next.js" height={80} width={100} />
                </div>
                <div className="m-auto">Autonomous</div>
                <div className="m-auto">
                    <Image src="/img/undraw_tailwind_css_1egw.svg" alt="hard skills, Tailwind.css" height={80} width={100} />
                </div>
                <div className="m-auto">Pedagogical</div>
            </div>
        </div>
    </div>
)
export default About;