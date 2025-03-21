import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import MySQL from '../assets/MySQL.png';
import Java from '../assets/Java.png';
import TypeScript from '../assets/typeScript.png';
import MaterialUi from '../assets/materialUI.svg'
import NextJs from '../assets/NextJs.svg';
import Redux from '../assets/redux.svg';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-[750px] bg-[#0a192f] text-gray-300'>
        <div className='mt-[10rem] md:mt-[4rem] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full cursor-pointer'> 
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with:</p>
            </div>
            <div className='w-full gap-4 grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={HTML} alt="HTML_icon"></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={CSS} alt="HTML_icon"></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={JavaScript} alt="HTML_icon"></img>
                    <p className='my-4'>JAVASCRIPT  </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={TypeScript} alt="HTML_icon"></img>
                    <p className='my-4'>TYPESCRIPT  </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={ReactImg} alt="HTML_icon"></img>
                    <p className='my-4'>REACT JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={NextJs} alt="HTML_icon"></img>
                    <p className='my-4'>NEXT JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Redux} alt="HTML_icon"></img>
                    <p className='my-4'>REDUX</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={MaterialUi} alt="HTML_icon"></img>
                    <p className='my-4'>MATERIAL UI</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={GitHub} alt="HTML_icon"></img>
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Node} alt="HTML_icon"></img>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-30 h-20 mx-auto" src={MySQL} alt="HTML_icon"></img>
                    <p className='my-4'>MYSQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className="w-20 mx-auto" src={Java} alt="HTML_icon"></img>
                    <p className='my-4'>Java</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills