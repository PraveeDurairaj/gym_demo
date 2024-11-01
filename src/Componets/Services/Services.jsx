import React from 'react';
import Image from 'next/image';

const Services = ({staticContent,changeOrder}) => {
    return (
        <div className='container grid sm:grid-cols-1 md:grid-cols-2 gap-5 items-center'>
            <div className={ changeOrder?'sm:order-2 md:order-2' :'sm:order-2 md:order-1'}>
                <h5 className=' font-[700] sm:text-[30px]  md:text-[38px] mb-[20px]'>{staticContent?.title}</h5>
                <p className='sm:text-[16px] md:text-[18px]'>{staticContent?.description}</p>
            </div>
            <div className={changeOrder?'sm:order-1 md:order-1':'sm:order-1 md:order-2'}>
                <Image src={staticContent?.img} alt='img' className='w-max-[450px] w-full sm:h-[250px] md:h-[300px] rounded-[10px]'></Image>
            </div>
        </div>
    )
}

export default Services
