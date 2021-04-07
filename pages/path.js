import Head from "next/head";
import 'react-vertical-timeline-component/style.min.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Archive, Book, Briefcase } from "react-feather";

const Path = () => {

    return (
        <>
            <Head>
                <title>Path</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative bg-gray-50 bg-opacity-20 py-10 px-5 md:p-10 rounded-xl h-full shadow-sm">
                <div className="w-full h-full overflow-y-scroll overflow-x-hidden">
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
                                <p>Plateform web development with Next.js and Tailwind.css</p>
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
                <div className="absolute bg-gray-50 bg-opacity-20 h-12 w-12 rounded-full top-2 left-2"></div>
                <div className="absolute bg-gray-50 bg-opacity-20 h-14 w-14 rounded-full -bottom-5 -right-4 "></div>
                <div className="absolute bg-gray-50 bg-opacity-25 h-24 w-24 rounded-full -top-10 -left-10 "></div>
            </div>
        </>
    )
}
export default Path;