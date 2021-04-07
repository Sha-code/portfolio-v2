import Image from "next/image";
import PropTypes from "prop-types";

const CardProject = ({ src, title, technology, link }) => {

    return (
        <div className="bg-gray-50 bg-opacity-20 p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <figure className="bg-gray-50 bg-opacity-20 relative h-52 mb-3 mx-auto rounded-xl">
                    <Image
                        className="rounded-xl"
                        src={src}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                </figure>
                <h2>{title}</h2>
                <p className="text-textdark">{technology}</p>
            </a>
        </div>
    )
};
CardProject.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
export default CardProject;