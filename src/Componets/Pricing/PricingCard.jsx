import React from 'react';
import Image from 'next/image';
import tickIcon from '../../../public/check-mark.png';

const PricingCard = ({primary,data}) => {
  const openWhatapp = () => {
    const phNo = '9345818731';
    const message = 'hello';
    const url = `https://wa.me/${phNo}?text=${encodeURIComponent(message)}`
    window.open(url,'_blank')
  }
  return (
    <div className={`p-4 rounded-[10px]  max-w-[350px] mx-auto border border-theme ${primary ? "bg-black text-white shadow-xl scale-y-110" : 'bg-white'} sm:mb-[30px] md:mb-[0px]`}>
      <span className={`px-[12px] py-[3px] rounded-[20px]
         bg-slate-200 text-theme inline-block text-[14px] mb-2 ${primary ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white': 'bg-theme text-black'}`}>
          {data?.planName}</span>
      <p className='text-[30px] font-[500] mb-3'>{data?.price} <span className='text-[14px]'>/ month</span></p>
      <p className='text-[13px] mb-2'>{data?.description}</p>
      <div className='mb-3'>
        {
            data?.features?.map((item,index)=>{
                return(
                    <div key={index} className='flex gap-2 items-center mb-2'>
                        <Image className={`w-4 h-4 rounded-full ${primary && 'themeFilterColor'}`} src={tickIcon} alt='tickIcon'></Image>
                        <p className='text-[14px]'>{item}</p>
                    </div>
                )
            })
        }
      </div>
      <button onClick={openWhatapp} className={` w-full text-center  rounded-lg py-[10px]  ${primary ? 'bg-theme text-black': 'bg-black text-white'}`}>{data?.contactButton}</button>
      
    </div>
  )
}

export default PricingCard
