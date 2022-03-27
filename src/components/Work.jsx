import React from 'react';
import Expensify from '../assets/Expensify.png';
import ChatApp from '../assets/ChatApp.png';
import ContactApp from '../assets/ContactApp.png';
import WorkImg from '../assets/workImg.jpeg';

const Work = () => {
  return (
    <div name="work" className='w-full h-[950px] md:h-[350px] text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
            <div className='mt-8 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of my work :</p>
            </div>

            {/**Conatiner */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/**Grid Items */}
                <div style={{backgroundImage: `url(${Expensify})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a  target="_blank" href="https://expensifyourbudget.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            {/*<a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>*/}
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${ChatApp})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            NodeJS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="https://wannacatchup.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            {/*<a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>*/}
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${ContactApp})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/**Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="https://manage-my-contacts.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            {/*<a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                            </a>*/}
                        </div>
                    </div>
                </div>

            

            </div>
        </div>
    </div>
  )
}

export default Work