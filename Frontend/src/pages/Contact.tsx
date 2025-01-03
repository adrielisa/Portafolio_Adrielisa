const Contact = () => {
    return (
        <div className=" ">
            {/* Contenido de la vista (si es necesario agregar algo más) */}

            {/* Redes Sociales */}
            <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2 text-right">
                <a
                    href="https://www.instagram.com/adrielissaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline"
                >
                    Instagram
                </a>
                <a
                    href="https://www.linkedin.com/in/adriel-isai-rodriguez-pacheco-268693225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/adrielisa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:underline"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default Contact;
