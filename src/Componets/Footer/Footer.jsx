import React from 'react';
import Image from 'next/image';



const Footer = ({ staticContent }) => {
    return (
        <div className='bg-black'>
         <div className='grid sm:grid-cols-1 sm:py-[20px] sm:!px-[10px] md:grid-cols-2 lg:grid-cols-4 gap-3 container text-white md:py-[50px]' id='footer' >
            {
                staticContent?.map((data) => {
                    return (
                        <div key={data?.id}>
                            <h6 className={`text-[16px] font-[600] mb-[15px] ${data?.primary ? 'text-theme' : 'text-white'}`}>{data?.fTitle}</h6>
                            {
                                data?.fDescription?.map((item) => {
                                    return (
                                        <>
                                            {item?.text && <a href={item?.link} key={item?.id} className=' text-[14px] mb-[10px] flex gap-2 items-center justify-start cursor-pointer text-[#70767C] hover:text-theme'>{item?.icon && <Image src={item?.icon} alt='footerIcon' className='w-[15px] h-[15px] themeFilterColor'></Image>}{item?.text} </a>}
                                            {/* {item?.buttonText && <Button text={item?.buttonText} />} */}
                                            {item?.iconList && <div className='flex gap-4'>
                                                {item?.iconList?.map((icon,index)=>{
                                                    return(
                                                        <Image key={index} src={icon} alt='iconś' className='w-[30px] h-[30px]'></Image>
                                                    )
                                                })}
                                            </div>}
                                        </>

                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
        </div>
        
    )
}

export default Footer
