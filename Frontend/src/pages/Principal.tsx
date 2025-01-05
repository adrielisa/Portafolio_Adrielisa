import React from 'react';

const Main: React.FC = () => {
    return (
        <div>
            {/* */}
            <div className="text-white text-center pt-4">
                <h1 className="text-4xl font-medium">¿Who am I?</h1>
                <p className='p-8 pl-10 pr-10 lg:pl-80 lg:pr-80 text-center lg:text-lg'>
                    Hi, I am adriel Isai Rodriguez Pacheco, a student from software engineering from cancún méxico.
                </p>
                <p className='lg:text-lg'>
                    I was born in April 15th
                </p>
                <div className='flex justify-center gap-6 mt-4'>
                    <img src="Yo.jpg" alt="Adriel" className='h-48 lg:h-48 rounded-md' />
                </div>
            </div>

            <div className='text-white text-center pt-10'>
                <h1 className="text-4xl font-medium ">What I know</h1>

                {/*Languages*/}
                <div className='mb-8'>
                    <h2 className='text-xl font-semibold mt-4'>Languages</h2>
                    <div className='flex justify-center gap-6 mt-4'>
                        <img src="/JavaScript.png" alt="JavaScript" className='h-12' />
                        <img src="/TypeScript.png" alt="TypeScript" className='h-12' />
                        <img src="/Python.png" alt="Python" className='h-12' />
                        <img src="/HTML.png" alt="HTML" className='h-12' />
                        <img src="/CSS.png" alt="CSS" className='h-12' />
                    </div>
                </div>

                {/*Databases*/}
                <div className='mb-8'>
                    <h2 className='text-xl font-semibold mt-4'>Databases</h2>
                    <div className='flex justify-center gap-6 mt-4'>
                        <img src="MySQL.png" alt="MySQL" className='h-12' />
                        <img src="PostgreSQL.png" alt="PostgreSQL" className='h-12' />
                        <img src="Mongo.png" alt="MongoDB" className='h-12' />
                    </div>
                </div>

                {/*Tools, libraries and frmeworks*/}
                <div className='mb-8'>
                    <h2 className='text-xl font-semibold mt-4 '>Tools, libraries and frmeworks</h2>
                    <div className='flex justify-center gap-6 mt-4'>
                        <img src="FastAPI.png" alt="FastAPI" className='h-12' />
                        <img src="React.png" alt="React" className='h-12' />
                        <img src="Bootstrap.png" alt="Bootstrap" className='h-12' />
                        <img src="Tailwind.png" alt="Tailwind" className='h-12' />
                    </div>
                </div>
            </div>

            <div className='text-white text-center pt-10'>
                <h1 className="text-4xl font-medium ">What I want to be</h1>
                <p className='p-8 pl-10 pr-10 lg:pl-80 lg:pr-80 text-center lg:text-lg'>
                    I aspire to craft technology that transcends utility, inspiring humanity to dream beyond the possible.
                    Through artificial intelligence, quantum computing, and boundless curiosity, I aim to build systems that
                    not only solve problems but ignite hope. My goal is to shape a future where humans and machines grow together,
                    solving the challenges of today.
                </p>
            </div>
        </div>

    );
};

export default Main;
