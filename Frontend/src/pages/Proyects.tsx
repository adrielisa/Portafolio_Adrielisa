const Proyects = () => {
    return (
        <div className="">
            <h2 className="text-white text-center pt-4 text-4xl font-semibold">PROYECTS</h2>
            <div className='flex justify-left gap-48 ml-10 mt-10'>
                <div className="flex flex-row">
                    <div>
                        <h2 className="text-center text-white p-2 font-medium text-2xl">Itzamná</h2>
                        <img src="Itzamna.png" alt="Adriel" className='h-40 lg:h-72 rounded-md' />
                    </div>
                    <div>
                        <div className="ml-6  mt-10 text-white font-medium md:text-2xl">
                            <p>Description</p>
                            <p className="font-thin text-xs md:text-xl mt-2 mr-24">Itzamná is an application made to make people's life easier heping them with any process.
                                
                            </p>
                        </div>
                        <div className="ml-6 mt-8 md:mt-12 text-white font-medium md:text-2xl">
                            <p>Technologies</p>
                            <div className="flex flex-row gap-2 mt-2">
                                <img className="h-6 md:h-10 mt-2" src="HTML.png" alt="" />
                                <img className="h-6 md:h-10 mt-2" src="CSS.png" alt="" />
                                <img className="h-6 md:h-10 mt-2" src="JavaScript.png" alt="" />
                                <img className="h-6 md:h-10 mt-2" src="React.png" alt="" />
                                <img className="h-6 md:h-10 mt-2" src="Tailwind.png" alt="" />
                                <img className="h-6 md:h-10 mt-2" src="TypeScript.png" alt="" />
                                <img className="h-6 md:h-10 mt-2" src="Python.png" alt="" />
                                <img className="h-6 md:h-10 mt-2" src="FastAPI.png" alt="" />
                                <img className="h-6 md:h-10 mt-2" src="MySQL.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-48 mt-10'>
                <div>
                    <img src="Cat.jpg" alt="Adriel" className='h-20 lg:h-48 rounded-md' />
                    <p className="text-center text-white p-2 font-medium">Cutie cat</p>
                </div>
                <div>
                    <img src="Cat.jpg" alt="Adriel" className='h-20 lg:h-48 rounded-md' />
                    <p className="text-center text-white p-2 font-medium">Cutie cat</p>
                </div>
            </div>
        </div>
    )
};

export default Proyects