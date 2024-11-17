import React from 'react';
import Slider from "react-slick";
import ReviewCard from './ReviewCard';


const Review = ({staticContent,title}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 15000,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
    <div className='container' id='reviews'>
    <h2 className='sm:text-[32px] md:text-[40px] font-[700] text-center mb-6'>{title}</h2>
    </div>
    <div className="slider-container">
      <Slider {...settings}>
        {
          staticContent?.map((item)=>{
            return(
              <ReviewCard data={item} key={item?.id}/>
            )
          })
        }
      </Slider>
    </div>
    </>

  )
}

export default Review
