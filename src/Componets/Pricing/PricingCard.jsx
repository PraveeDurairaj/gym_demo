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
    <div className={`p-4 rounded-[10px] shadow-xl  max-w-[320px] mx-auto border border-theme ${primary ? "bg-gradient-to-br from-lime-500 to-slate-200" : 'bg-white'}`}>
      <span className='px-[10px] rounded-[20px] bg-slate-200 text-theme inline-block text-[14px] mb-2'>{pricingData?.pricingName}</span>
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
      <button className='w-full text-center bg-black text-white rounded-lg py-[10px] hover:bg-gray-800'>{pricingData?.buttonText}</button>
      
    </div>
  )
}

export default PricingCard
