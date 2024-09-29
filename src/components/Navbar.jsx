import React, {useState} from 'react';
import {FaBars, FaTimes , FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import VishrutLogo from '../assets/VishrutLogo.png';
import {Link} from 'react-scroll';
import Social from './Social';
import { GITHUB_URL, LINKEDIN_URL, RESUME_LINK } from '../constants';


const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <Link to="home" smooth={true} duration={500}><img src={VishrutLogo} alt="Logo_Image"  className="w-[85px]  mt-[20px] mb-[20px]"></img></Link>
        </div>
        
            <ul className='hidden md:flex space-x-10 '>
                <li className='inline border-b-4 border-pink-600'>
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='inline border-b-4 border-pink-600'>
                    <Link to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li className='inline border-b-4 border-pink-600'>
                    <Link to='skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='inline border-b-4 border-pink-600'>
                    <Link to='work' smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='inline border-b-4 border-pink-600'>
                    <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        

        <div className='md:hidden z-10' onClick={handleClick}>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='inline border-b-4 border-pink-600 py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='inline border-b-4 border-pink-600 py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li className='inline border-b-4 border-pink-600 py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='inline border-b-4 border-pink-600 py-6 text-4xl'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='inline border-b-4 border-pink-600 py-6 text-4xl'>
                    <Link onClick={handleClick} to='social' smooth={true} duration={500}>Social</Link>
                </li>  
                <li className='inline border-b-4 border-pink-600 py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
                </li> 
                          
        </ul>
        {/*Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-5 mr-6' target="_blank" href={LINKEDIN_URL}>Linkedin <FaLinkedin size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-6 ml-5 mr-6' target="_blank" href={GITHUB_URL}>Github <FaGithub size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-10 mr-6'><Link to='contact' smooth={true} duration={500}>Email</Link><HiOutlineMail size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-5 mr-6' target="_blank" href={RESUME_LINK}>Resume <BsFillPersonLinesFill size={30} />
                      </a>
                  </li>

            </ul>

        </div>
        {/**Social Icons for Mobile */}
       
    </div>

  )
}

export default Navbar