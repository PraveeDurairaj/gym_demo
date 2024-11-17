import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ServicesCard from './ServicesCart';

const Services = ({title,staticContent}) => {
    return (
        <>
            <div className='container' id='services'>
                <h2 className='sm:text-[32px] md:text-[40px] font-[700] text-center mb-[30px]'>{title}</h2>
            </div>
            <div className='px-[10px]'>
                <Tabs
                    defaultActiveKey="Strength Training"
                    id="uncontrolled-tab-example"
                    transition={false}
                    className="mb-3"
                >
                    {
                        staticContent?.map((data,index)=>{
                            return(
                                <Tab eventKey={data?.title} title={data?.title} key={index}>
                                <ServicesCard staticContent={data} />
                            </Tab>
                            )
                        })
                    }
                </Tabs>
            </div>
        </>

    )
}

export default Services
