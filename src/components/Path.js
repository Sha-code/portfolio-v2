import 'react-vertical-timeline-component/style.min.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Archive, Book, Briefcase } from "react-feather";
import Image from 'next/image';

const Path = () => {

    return (
        <div id="path" className="bg-gray-50 bg-opacity-20 dark:bg-opacity-0 rounded-xl h-full shadow-sm pt-10">

            <div className="relative pb-20 bg-textbase bg-opacity-60 dark:bg-opacity-70 rounded-xl mx-4 md:mx-12 mt-20">
                <div className="absolute w-40 h-40 md:w-64 md:h-64 z-10 right-1 bottom-0 md:top-0 md:right-24">
                    <Image src="/img/undraw_travel_mode_re_2lxo.svg" objectFit="contain" layout="fill" />
                </div>
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Path</h1>
                    <p className="mt-6 max-w-3xl text-xl text-textdark dark:text-gray-300">
                        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
                        laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
                    </p>
                </div>
            </div>

            <VerticalTimeline className="vertical-timeline-custom-line">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgba(255, 255, 255, 0.2)", boxShadow: "2px 4px rgb(0, 0, 0,0.05)", borderRadius: ".7em" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.2)" }}
                    date="2020 - present"
                    dateClassName="ml-3"
                    iconStyle={{ background: "#6a6ba0", color: "#fff", border: "rgba(255, 255, 255, 0.2)" }}
                    icon={<Briefcase />}
                >
                    <a href="https://danae.io/" target="blank">
                        <h3 className="vertical-timeline-element-title font-medium text-xl text-textdark">
                            Web Developer at Danae
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm">Remote</h4>
                        <p>Plateform web development with Next.js, Tailwind.css and AWS lambda, Node.js</p>
                    </a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.2)" }}
                    contentStyle={{ background: "rgba(255, 255, 255, 0.2)", boxShadow: "2px 4px rgb(0, 0, 0,0.05)", borderRadius: ".7em" }}
                    className="vertical-timeline-element--work"
                    date="2020 - 2020"
                    dateClassName="mr-3"
                    iconStyle={{ background: "#6a6ba0", color: "#fff" }}
                    icon={<Briefcase />}
                >
                    <a href="https://fr.funnl.fr/" target="blank">
                        <h3 className="vertical-timeline-element-title font-medium text-xl text-textdark">
                            Freelancing at Funnl
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm">Remote</h4>
                        <p>Plateform web development with Angular8 and Bootstrap</p>
                    </a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.2)" }}
                    contentStyle={{ background: "rgba(255, 255, 255, 0.2)", boxShadow: "2px 4px rgb(0, 0, 0,0.05)", borderRadius: ".7em" }}
                    className="vertical-timeline-element--work"
                    date="2019 - 2020"
                    dateClassName="ml-3"
                    iconStyle={{ background: "#8e8fd2", color: "#fff" }}
                    icon={<Book />}
                >
                    <a href="https://oclock.io/" target="blank">
                        <h3 className="vertical-timeline-element-title  font-medium text-xl">O'clock School</h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm">Remote</h4>
                        <p>
                            Learning to code, to work in remote, to work on Pair-Programming and
                            Agile Method.
                        </p>
                    </a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.2)" }}
                    contentStyle={{ background: "rgba(255, 255, 255, 0.2)", boxShadow: "2px 4px rgb(0, 0, 0,0.05)", borderRadius: ".7em" }}
                    className="vertical-timeline-element--work"
                    date="2017 - 2019"
                    dateClassName="mr-3"
                    iconStyle={{ background: "#6a6ba0", color: "#fff" }}
                    icon={<Briefcase />}
                >
                    <h3 className="vertical-timeline-element-title font-medium text-xl text-textdark">School Teacher</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm">Nîmes, France</h4>
                    <p>
                        teacher in primary schools, group management, organization, team
                        work
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.2)" }}
                    contentStyle={{ background: "rgba(255, 255, 255, 0.2)", boxShadow: "2px 4px rgb(0, 0, 0,0.05)", borderRadius: ".7em" }}
                    className="vertical-timeline-element--work"
                    date="2016 - 2018"
                    dateClassName="ml-3"
                    iconStyle={{ background: "#8e8fd2", color: "#fff" }}
                    icon={<Book />}
                >
                    <a href="https://inspe-academiedemontpellier.fr/formation-initiale/master-meef/master-1er-degre" target="blank">
                        <h3 className="vertical-timeline-element-title font-medium text-xl">
                            Master - education
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-sm">
                            Montpellier, France
                        </h4>
                        <p>
                            Pass the national competitive examination from Nationnal Education,
                            getting my Master
                        </p>
                    </a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: "#8e8fd2", color: "#fff" }}
                    icon={<Archive />}
                />
            </VerticalTimeline>
        </div>
    )
}
export default Path;