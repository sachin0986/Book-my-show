import React from 'react'
import MainSlider from  'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import { NextArrow, PrevArrow } from './arrows';



const mianCarousal = () => {

    const settingLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScoll: 1,
        centerPadding: "70px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    }


    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const images = [
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1677493393240_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1677576131525_swagfestweb.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1678262369289_kamalkhanweb.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1675080138999_web.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1678276688384_bbsweb.jpg",
    ]


  return (
    <>

    <div className='lg:hidden '>
    <MainSlider {...settings}>
            {
                images.map((image) => (
                    <div className='w-full md:h-80 py-3'>
                        <img src={image} alt="testing" className='w-full h-full rounded-md ' />
                    </div>
                ))
            }
        </MainSlider>
    </div> 



    <div className='hidden lg:block'>

        <MainSlider {...settingLg}>
            {
                images.map((image) => (
                    <div className='w-full h-96 px-2 py-3'>
                        <img src={image} alt="testing" className='w-full h-full rounded-md' />
                    </div>
                ))
            }
        </MainSlider>
    </div>

    </>
  );
};

export default mianCarousal