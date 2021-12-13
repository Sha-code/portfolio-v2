import { Link } from "react-feather";
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
        // {
        //     id: 2,
        //     title: "Todo List",
        //     src: "/img/todo.png",
        //     technology: "Javascript - HTML - CSS",
        //     link: "https://sha-code.github.io/Todo-list-/",
        // },
        // {
        //     id: 1,
        //     title: "More or Less",
        //     src: "/img/game.png",
        //     technology: "Javascript - HTML - CSS",
        //     link: "https://sha-code.github.io/Portfolio/",
        // },
    ]
    return (
        <div>
            <div className="pb-20 bg-textbase bg-opacity-60 dark:bg-opacity-70 rounded-xl mx-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white dark:opacity-100 md:text-5xl lg:text-6xl">Project</h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
                        laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
                    </p>
                </div>
            </div>
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-8">
                    {
                        projects.map((project) =>
                            <ProjectCard
                                key={project.id}
                                src={project.src}
                                title={project.title}
                                technology={project.technology}
                                link={project.link}
                            />
                        )
                    }
                </div>
            </section>
        </div>
    )
}
export default Project;