import React from 'react';
import PricingCard from './PricingCard';

const Pricing = ({title,staticContent}) => {
    return (
        <div className='bg-slate-50' id='pricing'>
             <div className='container'>
                <h2 className='sm:text-[32px] md:text-[40px] font-[700] text-center mb-[50px] max-w-[500px] mx-auto'>{title}</h2>
            </div>

            <div className='grid gap-1 container sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-[30px]'>
                {
                    staticContent?.map((plan,index)=>{
                        return(
                            <PricingCard data={plan} primary={plan?.primary} key={index} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Pricing
