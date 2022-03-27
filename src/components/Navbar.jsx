import React, {useState} from 'react';
import {FaBars, FaTimes , FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import VishrutLogo from '../assets/VishrutLogo.png';
import {Link, Button} from 'react-scroll';



const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const downloadPdf = (url,filename) => {
        if(!url){
            return;
        }
        const el = document.createElement('a');
        el.setAttribute('href' , 'data:application/octet-stream;base64,' + url);
        el.setAttribute('download',filename);
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
    }
    

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={VishrutLogo} alt="Logo_Image" className="w-[85px]  mt-[20px] mb-[20px]"></img>
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
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
                </li>            
        </ul>
        {/*Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-5 mr-6' target="_blank" href="https://www.linkedin.com/in/vishrut-sharma-448588166">Linkedin <FaLinkedin size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-6 ml-5 mr-6' href="/">Github <FaGithub size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-10 mr-6'><Link to='contact' smooth={true} duration={500}>Email</Link><HiOutlineMail size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-5 mr-6' target="_blank" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:8b54570e-ea27-3ade-a78a-a1cad10d0481">Resume <BsFillPersonLinesFill size={30} />
                      </a>
                  </li>

            </ul>

        </div>

        <div className=' sm:flex fixed flex-col top-[35%] left-0'>
            <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-5 mr-6' target="_blank" href="https://www.linkedin.com/in/vishrut-sharma-448588166">Linkedin <FaLinkedin size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-6 ml-5 mr-6' href="/">Github <FaGithub size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-10 mr-6'><Link to='contact' smooth={true} duration={500}>Email</Link><HiOutlineMail size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                      <a className='flex justify-between items-center w-full text-gray-300 gap-4 ml-5 mr-6' target="_blank" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:8b54570e-ea27-3ade-a78a-a1cad10d0481">Resume <BsFillPersonLinesFill size={30} />
                      </a>
                  </li>

            </ul>

        </div>

    </div>

  )
}

export default Navbar