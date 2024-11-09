import React from 'react';
import Image from 'next/image';

const ReviewCard = ({data}) => {
  return (
    <div className='rounded-[10px]  bg-slate-200 p-3 sm:ms-[10px] sm:me-[10px] md:ms-[0px] md:me-[10px]'>
      <div className='mb-2 flex gap-[10px] items-center'>
        <Image src={data?.img} className='w-[50px] h-[50px] rounded-full object-contain'></Image>
        <p className='text-[16px] font-[600]'>{data?.name}</p>
      </div>
      <p className='text-[14px] '>{data?.review}</p>
    </div>
  )
}

export default ReviewCard
