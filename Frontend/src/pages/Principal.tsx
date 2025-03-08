import React from 'react';
import { motion } from 'framer-motion';

const Main: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 gap-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-2/3"
                >
                    <h1 className="text-5xl lg:text-6xl font-medium text-white mb-6">
                        Hi, I'm <span className="text-amber-400">Adrielisa</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                        A passionate developer from Cancún, México, crafting digital experiences that inspire and innovate.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-amber-400 rounded-lg blur-lg opacity-20"></div>
                    <img 
                        src="/Yo.jpg" 
                        alt="Adriel" 
                        className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-lg object-cover shadow-xl" 
                    />
                </motion.div>
            </div>

            {/* Skills Section */}
            <div className="px-8 lg:px-16 py-16 bg-zinc-900/50">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl lg:text-4xl font-medium text-white mb-12"
                >
                    Technologies I Work With
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/70 transition-all duration-300"
                    >
                        <h3 className="text-xl font-medium text-white mb-4">Languages</h3>
                        <div className="flex flex-wrap gap-4">
                            <img src="/JavaScript.png" alt="JavaScript" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/TypeScript.png" alt="TypeScript" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/Python.png" alt="Python" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/HTML.png" alt="HTML" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/CSS.png" alt="CSS" className="h-10 hover:scale-110 transition-transform" />
                        </div>
                    </motion.div>

                    {/* Databases */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/70 transition-all duration-300"
                    >
                        <h3 className="text-xl font-medium text-white mb-4">Databases</h3>
                        <div className="flex flex-wrap gap-4">
                            <img src="/MySQL.png" alt="MySQL" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/PostgreSQL.png" alt="PostgreSQL" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/Mongo.png" alt="MongoDB" className="h-10 hover:scale-110 transition-transform" />
                        </div>
                    </motion.div>

                    {/* Tools & Frameworks */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/70 transition-all duration-300"
                    >
                        <h3 className="text-xl font-medium text-white mb-4">Tools & Frameworks</h3>
                        <div className="flex flex-wrap gap-4">
                            <img src="/FastAPI.png" alt="FastAPI" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/React.png" alt="React" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/Bootstrap.png" alt="Bootstrap" className="h-10 hover:scale-110 transition-transform" />
                            <img src="/Tailwind.png" alt="Tailwind" className="h-10 hover:scale-110 transition-transform" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Vision Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="px-8 lg:px-16 py-16"
            >
                <h2 className="text-3xl lg:text-4xl font-medium text-white mb-8">My Vision</h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                    I aspire to craft technology that transcends utility, inspiring humanity to dream beyond the possible.
                    Through artificial intelligence, quantum computing, and boundless curiosity, I aim to build systems that
                    not only solve problems but ignite hope. My goal is to shape a future where humans and machines grow together,
                    solving the challenges of today.
                </p>
            </motion.div>
        </div>
    );
};

export default Main;
