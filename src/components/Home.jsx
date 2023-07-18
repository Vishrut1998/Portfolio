import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link, Button} from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='w-full h-[750px] bg-[#0a192f]'>

            {/*Container*/}

            <div className='max-w-[1000px] gap-2 mx-auto px-8 flex flex-col justify-center h-full'>
                <p className="mt-12 text-4xl text-white">Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Vishrut Sharma</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack web developer with 2.5+ years of experience. I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development with various frameworks such as React 
                    and also handcoding with HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
                    <div>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'><Link to="work" smooth={true} duration={500}>View Work</Link>
                        <span className='group-hover:rotate-90 duration-300'><Link to="work" smooth={true} duration={500}>
                        <HiArrowNarrowRight className='ml-3'/></Link>
                        </span>
                        </button>
                    </div>
            </div>

        </div>
    )
}


export default Home