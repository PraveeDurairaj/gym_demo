import React from 'react'
const pricingData = {
    pricingName:"Starter plan",
    amount:'$80',
    description:'Welcome to a space where women uplift each other through fitness.',
    aminitiesList : [
        'where women uplift',
        'where women uplift',
        'where women uplift',
        'where women uplift',
    ],
    buttonText:'Get started!'
}
const PricingCard = ({primary}) => {
  return (
    <div className={`p-4 rounded-[10px]  max-w-[320px] mx-auto border border-theme ${primary ? "bg-black text-white shadow-xl scale-y-110" : 'bg-white'}`}>
      <span className={`px-[12px] py-[3px] rounded-[20px] bg-slate-200 text-theme inline-block text-[14px] mb-2 ${primary ? 'bg-white text-black': 'bg-theme text-black'}`}>{pricingData?.pricingName}</span>
      <p className='text-[30px] font-[500] mb-3'>{pricingData?.amount} <span className='text-[14px]'>/ month</span></p>
      <p className='text-[13px] mb-2'>{pricingData?.description}</p>
      <div className='mb-3'>
        {
            pricingData?.aminitiesList?.map((data,index)=>{
                return(
                    <div key={index} className='flex gap-2 items-center mb-2'>
                        <p className='w-4 h-4 rounded-full bg-theme'></p>
                        <p className='text-[14px]'>{data}</p>
                    </div>
                )
            })
        }
      </div>
      <button className={` w-full text-center  rounded-lg py-[10px] hover:bg-gray-800 ${primary ? 'bg-theme text-black': 'bg-black text-white'}`}>{pricingData?.buttonText}</button>
      
    </div>
  )
}

export default PricingCard
