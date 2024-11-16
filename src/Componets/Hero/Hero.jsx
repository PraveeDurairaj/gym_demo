import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Hero = ({staticContent}) => {
    return (
        <div className='relative min-h-[600px] flex items-center justify-center'>
            <div className=' sm:!bg-full absolute  h-full w-full md:!bg-cover brightness-50 hero'></div>
            <div className='container text-center z-10'>
                <h1 className=' sm:text-[40px] md:text-[65px] font-[500] text-white break-words'> 
                     {staticContent?.headerBeforeText}
                     {staticContent?.colorText && <span className='text-theme inline-block'>{staticContent?.colorText}</span>}
                  {staticContent?.headerAfterText && <span className='inline-blcok'>{staticContent?.headerAfterText}</span> } 
                </h1>
                <p className='text-white m-auto max-w-[800px]'>{staticContent?.subtext}</p>
                <PrimaryButton buttonText={'Get in Touch'} containerClass={'mt-3'}/>
            </div>
        </div>

    )
}

export default Hero
