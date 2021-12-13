import Image from "next/image";
import PropTypes from "prop-types";

const CardProject = ({ src, title, technology, link }) => {

    return (

        <a href={link} target="_blank" rel="noopener noreferrer" className="bg-gray-50 bg-opacity-20 rounded-xl shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="flex justify-center my-5">
                <Image
                    className="rounded-xl self-center"
                    src={src}
                    alt={title}
                    width="260"
                    height="260"
                    objectFit="cover"
                />
            </div>
            <div className="bg-gray-50 bg-opacity-20 rounded-b-xl py-4 px-6">
                <h2>{title}</h2>
                <p className="text-textdark">{technology}</p>
            </div>
        </a>

    )
};
CardProject.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
export default CardProject;