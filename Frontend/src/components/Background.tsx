import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Background: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const location = useLocation();


    return (
        <div className="bg-black min-h-screen border p-4 flex flex-col gap-2">
            {/* Parte superior NAVBAR */}
            <div className="flex-[0.1] bg-zinc-900 border border-white">
                {/* Título y subtítulo */}
                <h1 className="text-white text-4xl font-serif">Adrielisa</h1>
                {/*Links para navegación */}
                <nav className="mt-4">
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link
                                to="/main"
                                className={`text-white uppercase hover:underline ${location.pathname === '/main' ? 'font-bold' : ''
                                    }`}
                            >
                                Main
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/proyects"
                                className={`text-white uppercase hover:underline ${location.pathname === '/proyects' ? 'font-bold' : ''
                                    }`}
                            >
                                Proyects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`text-white uppercase hover:underline ${location.pathname === '/contact' ? 'font-bold' : ''
                                    }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>



            {/* Sección inferior */}
            <div className="flex-[0.9] bg-zinc-800 border border-white">
                {children}
            </div>
        </div>
    );
};

export default Background;
