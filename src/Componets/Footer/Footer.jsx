import React from 'react';
import Image from 'next/image';

const Footer = ({staticContent}) => {
    return (
        <div className='bg-black rounded-t-[20px]'>
            <div className=' sm:p-[20px] md:p-[50px] container'>
                <p className='text-[16px] text-white mb-[15px] text-center'>
                    {staticContent?.text}
                </p>
                <div className='flex gap-4 justify-center'>
                    {
                        staticContent?.iconList?.map((data)=> {
                           return(
                            <Image src={data?.icon} key={data?.id} className='w-[30px] h-[30px]'></Image>
                           )
                        })
                    }
                   
                </div>
            </div>
        </div>

    )
}

export default Footer
