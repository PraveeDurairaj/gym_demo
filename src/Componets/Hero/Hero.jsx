import React from 'react';



const Hero = () => {
    return (
        <div className='relative min-h-[600px]'>
            <div className=' sm:!bg-full absolute  h-full w-full md:!bg-cover brightness-50 hero'></div>
            <div className='container left-1/2 -translate-x-1/2 text-center absolute md:top-[100px] sm:bottom-[180px]'>
                <h1 className=' sm:text-[40px] md:text-[65px] font-[500] text-white'> <span className='text-[#14a91a]'>Vivify</span> Fitness Studio</h1>
                <p className='text-white m-auto max-w-[800px]'>Welcome to a space where women uplift each other through fitness. Explore 
                    tailored programs, inspiring classes, and a supportive environment designed 
                    for every level. Your journey to strength starts here!
                </p>
                <button className='bg-[#14a91a] font-[500] text-white px-[20px] py-[5px] rounded-full mt-4 '>Get in Touch</button>
            </div>
        </div>

    )
}

export default Hero
