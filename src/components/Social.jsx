import React , {useState} from 'react';
import {FaBars, FaTimes , FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import VishrutLogo from '../assets/VishrutLogo.png';
import {Link, Button} from 'react-scroll';



const Social = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
   
  return (
    <div name="social" className='sm:w-full h-[450px] bg-[#0a192f] text-gray-300 social-content'>
        <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
            <div className='p-6 '>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Social</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 pt-8 text-center'>
                 <a target="_blank" href="https://www.linkedin.com/in/vishrut-sharma-448588166">
                     <button className='text-center flex gap-2 rounded-lg px-5 py-3 m-2 bg-blue-600 text-white-700 font-bold text-lg '>Linkedin<FaLinkedin size={25} /></button>
                </a>
                <a target="_blank" href="https://github.com/Vishrut1998">
                     <button className='text-center flex gap-2 rounded-lg px-7 py-3 m-2 bg-[#333333] text-white-700 font-bold text-lg '>Github<FaGithub size={30} /></button>
                </a>
                <a>
                     <button className='text-center flex gap-2 rounded-lg px-8 py-3 m-2 bg-[#6fc2b0] text-white-700 font-bold text-lg '><Link to='contact' smooth={true} duration={500}>Email</Link><HiOutlineMail size={30} /></button>
                </a>
                <a target="_blank" href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:9ffd9f5e-46cf-4e30-911f-fc07369b91d5">
                     <button className='text-center flex gap-2 rounded-lg px-5 py-3 m-2 bg-[#565f69] text-white-700 font-bold text-lg '>Resume<BsFillPersonLinesFill size={30} /></button>
                </a>
                
            </div>

        </div>
      
    </div>
  )
}

export default Social