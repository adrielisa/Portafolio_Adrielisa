const Proyects = () => {
    return (
        <div className="p-8">
            <h2 className="text-white text-center text-4xl font-semibold mb-12">PROJECTS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Itzamná Project */}
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                        <img src="Itzamna.png" alt="Itzamná Project" className='w-full h-48 object-cover' />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-medium">Itzamná</h2>
                    </div>
                    
                    <div className="p-4">
                        <div className="text-white">
                            <h3 className="text-lg font-medium mb-2">Description</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Itzamná is an intelligent assistant designed to streamline everyday processes.
                            </p>
                        </div>
                        
                        <div className="mt-4">
                            <h3 className="text-white text-lg font-medium mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                <img className="h-6 hover:scale-110 transition-transform" src="HTML.png" alt="HTML" title="HTML" />
                                <img className="h-6 hover:scale-110 transition-transform" src="CSS.png" alt="CSS" title="CSS" />
                                <img className="h-6 hover:scale-110 transition-transform" src="JavaScript.png" alt="JavaScript" title="JavaScript" />
                                <img className="h-6 hover:scale-110 transition-transform" src="React.png" alt="React" title="React" />
                                <img className="h-6 hover:scale-110 transition-transform" src="Tailwind.png" alt="Tailwind" title="Tailwind" />
                                <img className="h-6 hover:scale-110 transition-transform" src="TypeScript.png" alt="TypeScript" title="TypeScript" />
                                <img className="h-6 hover:scale-110 transition-transform" src="Python.png" alt="Python" title="Python" />
                                <img className="h-6 hover:scale-110 transition-transform" src="FastAPI.png" alt="FastAPI" title="FastAPI" />
                                <img className="h-6 hover:scale-110 transition-transform" src="MySQL.png" alt="MySQL" title="MySQL" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Komi Project */}
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                        <img src="Komi.jpg" alt="Komi Project" className='w-full h-48 object-cover' />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-medium">Komi</h2>
                    </div>
                    
                    <div className="p-4">
                        <div className="text-white">
                            <h3 className="text-lg font-medium mb-2">Description</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                A minimalist social media dashboard with powerful analytics tools.
                            </p>
                        </div>
                        
                        <div className="mt-4">
                            <h3 className="text-white text-lg font-medium mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                <img className="h-6 hover:scale-110 transition-transform" src="React.png" alt="React" title="React" />
                                <img className="h-6 hover:scale-110 transition-transform" src="TypeScript.png" alt="TypeScript" title="TypeScript" />
                                <img className="h-6 hover:scale-110 transition-transform" src="Tailwind.png" alt="Tailwind" title="Tailwind" />
                                <img className="h-6 hover:scale-110 transition-transform" src="FastAPI.png" alt="FastAPI" title="FastAPI" />
                                <img className="h-6 hover:scale-110 transition-transform" src="PostgreSQL.png" alt="PostgreSQL" title="PostgreSQL" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* NekoChat Project */}
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                        <img src="Cat.jpg" alt="NekoChat Project" className='w-full h-48 object-cover' />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-medium">NekoChat</h2>
                    </div>
                    
                    <div className="p-4">
                        <div className="text-white">
                            <h3 className="text-lg font-medium mb-2">Description</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Real-time chat application with cute cat-themed emojis and stickers.
                            </p>
                        </div>
                        
                        <div className="mt-4">
                            <h3 className="text-white text-lg font-medium mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                <img className="h-6 hover:scale-110 transition-transform" src="React.png" alt="React" title="React" />
                                <img className="h-6 hover:scale-110 transition-transform" src="JavaScript.png" alt="JavaScript" title="JavaScript" />
                                <img className="h-6 hover:scale-110 transition-transform" src="Tailwind.png" alt="Tailwind" title="Tailwind" />
                                <img className="h-6 hover:scale-110 transition-transform" src="FastAPI.png" alt="FastAPI" title="FastAPI" />
                                <img className="h-6 hover:scale-110 transition-transform" src="Mongo.png" alt="MongoDB" title="MongoDB" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* TaskMaster Project */}
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                        <img src="Cat.jpg" alt="TaskMaster Project" className='w-full h-48 object-cover' />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-medium">TaskMaster</h2>
                    </div>
                    
                    <div className="p-4">
                        <div className="text-white">
                            <h3 className="text-lg font-medium mb-2">Description</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Smart task management system with AI-powered prioritization.
                            </p>
                        </div>
                        
                        <div className="mt-4">
                            <h3 className="text-white text-lg font-medium mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                <img className="h-6 hover:scale-110 transition-transform" src="TypeScript.png" alt="TypeScript" title="TypeScript" />
                                <img className="h-6 hover:scale-110 transition-transform" src="React.png" alt="React" title="React" />
                                <img className="h-6 hover:scale-110 transition-transform" src="Python.png" alt="Python" title="Python" />
                                <img className="h-6 hover:scale-110 transition-transform" src="FastAPI.png" alt="FastAPI" title="FastAPI" />
                                <img className="h-6 hover:scale-110 transition-transform" src="PostgreSQL.png" alt="PostgreSQL" title="PostgreSQL" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* WeatherViz Project */}
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                        <img src="Cat.jpg" alt="WeatherViz Project" className='w-full h-48 object-cover' />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-medium">WeatherViz</h2>
                    </div>
                    
                    <div className="p-4">
                        <div className="text-white">
                            <h3 className="text-lg font-medium mb-2">Description</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Beautiful weather visualization app with interactive 3D globe.
                            </p>
                        </div>
                        
                        <div className="mt-4">
                            <h3 className="text-white text-lg font-medium mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                <img className="h-6 hover:scale-110 transition-transform" src="JavaScript.png" alt="JavaScript" title="JavaScript" />
                                <img className="h-6 hover:scale-110 transition-transform" src="React.png" alt="React" title="React" />
                                <img className="h-6 hover:scale-110 transition-transform" src="Tailwind.png" alt="Tailwind" title="Tailwind" />
                                <img className="h-6 hover:scale-110 transition-transform" src="Python.png" alt="Python" title="Python" />
                                <img className="h-6 hover:scale-110 transition-transform" src="FastAPI.png" alt="FastAPI" title="FastAPI" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Proyects;