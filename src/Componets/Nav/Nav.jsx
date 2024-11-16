import React, { useState } from 'react';
import Image from 'next/image';
import menuIcon from '../../../public/menu.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Nav = ({ staticContent }) => {

    const [show, setShow] = useState(false)
    return (
        <div className='bg-[#141314] p-[10px]'>
            <div className='showMd hidden justify-between items-center text-white container'>
                <div>
                    {
                        staticContent?.logo ? <Image src={staticContent?.logo} className='w-[35px] h-[35px] rounded-full'></Image>
                            : <span className='text-theme'>Demo Site</span>
                    }

                </div>
                <div className='flex gap-[50px] items-center '>
                    {
                        staticContent?.navList?.map((data) => {
                            return (
                                data?.buttonText ? <> <PrimaryButton buttonText={data?.buttonText} /></> :
                                    <a key={data?.id} href={data?.link} className='hover:text-theme'>{data?.text}</a>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    {
                        staticContent?.logo ? <Image src={staticContent?.logo} className='w-[35px] h-[35px] rounded-full m-b-[15px] hidden showHidden'></Image>
                            : <span className='text-theme hidden showHidden'>Demo Site</span>
                    }

                </div>
                <div onClick={() => { setShow(!show) }}>
                    <Image src={menuIcon} width={30} height={30} className='hidden showHidden'></Image>
                </div>
            </div>

            <div className={`hidden absolute text-white p-4 bg-[#141314] ${show && 'showHidden'} z-40 left-0 h-screen top-0`}>
                <div className=' flex  text-white  flex-col w-[250px]  h-full'>
                    <div className='flex justify-between mb-[20px]'>
                        {
                            staticContent?.logo ? <Image src={staticContent?.logo} className='w-[35px] h-[35px] rounded-full m-b-[15px]'></Image>
                                : <span className='text-theme'>Demo Site</span>
                        }

                        <p className='text-white text-[18px]' onClick={() => { setShow(!show) }}>X</p>
                    </div>
                    <div className='flex gap-[15px] items-start flex-col '>
                        {
                            staticContent?.navList?.map((data) => {
                                return (
                                    data?.buttonText ? <> <PrimaryButton buttonText={data?.buttonText} /></> :
                                        <a key={data?.id} href={data?.link} className='hover:text-theme'>{data?.text}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Nav
