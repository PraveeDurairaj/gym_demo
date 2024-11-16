import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';


const ServicesCard = ({ staticContent, changeOrder, aboutSection }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade:true,
        autoplay: true,
    };
    console.log(staticContent?.aboutImgList)
    return (
        <div className={`${aboutSection ? 'bg-transparent' : 'bg-black text-white'}  p-3`}>
            <div className='container grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 md:gap-5 items-center'>
                <div className={changeOrder ? 'sm:order-2 md:order-2' : 'sm:order-2 md:order-1'}>
                    <h5 className=' font-[700] sm:text-[28px]  md:text-[32px] mb-[20px] themeLinear'>{staticContent?.title}</h5>
                    <p className='sm:text-[16px] md:text-[18px] mt-[15px]'>{staticContent?.description}</p>
                    {staticContent?.description2 && <p className='sm:text-[16px] md:text-[18px] mt-[15px]'>{staticContent?.description2}</p>}
                </div>
                <div className={changeOrder ? 'sm:order-1 md:order-1' : 'sm:order-1 md:order-2'}>
                    {
                        aboutSection ? <>
                            <div className="slider-container rounded-[10px] w-auto">
                                <Slider {...settings}>
                                    {
                                        staticContent?.aboutImgList?.map((data,index)=>{
                                            return(
                                                <Image key={index} src={data} alt='img' className='w-max-[450px] sm:h-[250px] w-auto md:h-[300px] mx-auto rounded-[10px]
                                                sm:object-cover  md:object-contain'></Image>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </>
                            :
                            <Image src={staticContent?.img} alt='img' className='w-max-[450px] sm:h-[250px] w-auto md:h-[300px] mx-auto rounded-[10px]
                             sm:object-cover  md:object-contain'></Image>

                    }
                </div>

            </div>
        </div>

    )
}

export default ServicesCard
