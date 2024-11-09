import React from 'react';
import Image from 'next/image';

const ServicesCard = ({ staticContent, changeOrder ,aboutSection}) => {
    return (
        <div className={`${aboutSection ? 'bg-transparent':'bg-black text-white'}  p-3`}>
            <div className='container grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 md:gap-5 items-center'>
                <div className={changeOrder ? 'sm:order-2 md:order-2' : 'sm:order-2 md:order-1'}>
                    <h5 className=' font-[700] sm:text-[28px]  md:text-[32px] mb-[20px] themeLinear'>{staticContent?.title}</h5>
                    <p className='sm:text-[16px] md:text-[18px] mt-[15px]'>{staticContent?.description}</p>
                    <p className='sm:text-[16px] md:text-[18px]'>{staticContent?.description}</p>
                </div>
                <div className={changeOrder ? 'sm:order-1 md:order-1' : 'sm:order-1 md:order-2'}>
                    <Image src={staticContent?.img} alt='img' className='w-max-[450px] w-full sm:h-[250px] md:h-[300px] rounded-[10px]'></Image>
                </div>
            </div>
        </div>

    )
}

export default ServicesCard
