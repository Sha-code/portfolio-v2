import ProjectCard from "./CardProject";

const Project = () => {
    const projects = [
        {
            id: 5,
            title: "Deviens dev !",
            src: "/img/logo-sha-code.png",
            technology: "Nextjs - Tailwind",
            link: "https://shacode.fr/",
        },
        {
            id: 4,
            title: "Mimesis",
            src: "/img/mimesis.png",
            technology: "React - Ionic",
            link: "https://mimesis.fun/",
        },
        {
            id: 3,
            title: "Captime",
            src: "/img/captime.png",
            technology: "Angular - Ionic",
            link: "https://captime.app/home",
        },
        {
            id: 2,
            title: "Todo List",
            src: "/img/todo.png",
            technology: "Javascript - HTML - CSS",
            link: "https://sha-code.github.io/Todo-list-/",
        },
        {
            id: 1,
            title: "More or Less",
            src: "/img/game.png",
            technology: "Javascript - HTML - CSS",
            link: "https://sha-code.github.io/Portfolio/",
        },
    ]
    return (

        <div className="relative bg-gray-50 bg-opacity-20 py-10 px-5 xl:p-10 rounded-xl h-full shadow-sm">
            <div className="flex flex-wrap overflow-y-scroll overflow-x-hidden h-full">
                {
                    projects.map((project) =>
                        <div className="w-full md:w-1/2 xl:w-1/3 p-2 mb-5">
                            <ProjectCard
                                src={project.src}
                                title={project.title}
                                technology={project.technology}
                                link={project.link}
                            />
                        </div>
                    )
                }
            </div>
            <div className="absolute bg-gray-50 bg-opacity-20 h-16 w-16 md:h-32 md:w-32 rounded-full -top-10 -right-2 md:-right-10 "></div>
            <div className="absolute bg-gray-50 bg-opacity-20 h-10 w-10 rounded-full top-0 right-5 md:top-6 md:right-14 "></div>
            <div className="absolute bg-gray-50 bg-opacity-25 h-16 w-16 md:h-24 md:w-24 rounded-full -bottom-2 md:-bottom-10 -left-10 "></div>

        </div>

    )
}
export default Project;