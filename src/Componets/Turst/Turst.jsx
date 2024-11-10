import React from 'react'

const trustData = [
    {
        id: 1,
        blodText: "500+",
        subText: 'happy Members',
        des: 'Our community growing fast'
    },
    {
        id: 2,
        blodText: "30+",
        subText: 'weekly class',
        des: 'Our community growing fast'
    },
    {
        id: 1,
        blodText: "10",
        subText: 'certified trainers',
        des: 'Our community growing fast'
    },
    {
        id: 1,
        blodText: "99%",
        subText: 'custonmers satisfaction',
        des: 'Our community growing fast'
    },

]
const Turst = () => {
    return (
        <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-full gap-5 sm:py-[40px] md:p-4 bg-black  justify-items-center' >
            {
                trustData?.map((data) => {
                    return (
                        <div className='text-white ' key={data?.id}>
                            <h5 className='text-[30px] font-[700] mb-[8px]'>{data?.blodText}</h5>
                            <p className='text-[14px] font-[500] mb-[5px]'>{data?.subText}</p>
                            <p className='text-[14px]'>{data?.des}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Turst
