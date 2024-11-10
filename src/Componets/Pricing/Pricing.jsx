import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
        <div className='bg-slate-50'>
            <div className='grid gap-1 container sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                <PricingCard />
                <PricingCard primary/>
                <PricingCard />
            </div>
        </div>

    )
}

export default Pricing
