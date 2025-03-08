import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="lg:text-xl">
            {/* Contenido de la vista (si es necesario agregar algo más) */}

            {/* Redes Sociales */}
            <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4 text-right">
                <a
                    href="https://www.instagram.com/adrielissaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                >
                    <span>Instagram</span>
                    <FaInstagram className="text-2xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/adriel-isai-rodriguez-pacheco-268693225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                    <span>LinkedIn</span>
                    <FaLinkedin className="text-2xl" />
                </a>
                <a
                    href="https://github.com/adrielisa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-500/50"
                >
                    <span>GitHub</span>
                    <FaGithub className="text-2xl" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
