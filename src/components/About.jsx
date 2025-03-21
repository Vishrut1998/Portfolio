import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-[400px] bg-[#0a192f] text-gray-300">
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className="sm:text-right pb-8 pl-4">
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Nice to meet your acquaintance</p>
                </div>
                <div>
                    <p className='mr-5'>
                     I am a web developer with over 4+ years of experience. I have worked on technologies like ReactJS and NodeJS framework, JavaScript, HTML and CSS. My main area of expertise is frontend development which focuses on building web applications,
                     features and maintain them. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About