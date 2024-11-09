import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ServicesCard from './ServicesCart';
import serviceImg1 from '../../../public/zumba.jpg';
import serviceImg2 from '../../../public/cardio.jpg';
import serviceImg3 from '../../../public/aerobics.jpg';
import serviceImg4 from '../../../public/wightloss.jpg';

const serviceData = [
    {
        title: 'ZUMBA',
        description: ` Zumba is a fitness program that combines Latin and international music with dance moves. Zumba routines incorporate interval training — alternating fast and slow rhythms — to help improve cardiovascular fitness .`,
        img: serviceImg1
    },
    {
        title: 'CARDIO',
        description: `Cardiovascular exercise is essential for maintaining a healthy heart, improving stamina, and boosting overall well-being.
       Regular cardio exercise can reduce the risk of chronic diseases, help manage weight, and improve mood and sleep quality.​`,
        img: serviceImg2
    },
    {
        title: 'AEROBICS',
        description: `​Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines. 
      The primary goal is to improve all elements of fitness, including flexibility, muscular strength, and cardiovascular fitness.​`,
        img: serviceImg3
    },
    {
        title: 'WEIGHT LOSS / GAIN',
        description: `​Join us to achieve both physical and mental well-being. With this you can develop a strong physique that will enable them to go into more advanced phases, such as a variety of 
      coordination and adjustments to fit a range of skill levels, from beginner to advanced. Make a reservation right now and pamper yourself; you deserve it!`,
        img: serviceImg4
    }
]
const Services = ({title}) => {
    return (
        <>
            <div className='container'>
                <h2 className='sm:text-[32px] md:text-[40px] font-[700] text-center mb-6'>{title}</h2>
            </div>
            <div>
                <Tabs
                    defaultActiveKey="ZUMBA"
                    id="uncontrolled-tab-example"
                    transition={false}
                    className="mb-3"
                >
                    {
                        serviceData?.map((data,index)=>{
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
