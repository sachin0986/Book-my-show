import React from 'react'
import Slider from  'react-slick';




 const EntertainmentCard = (props) => {
  return (
    <>
    <div className="w-full h-30 px-2">
        <img className="w-full h-full rounded-xl" 
        src={props.src}
        alt='Ent_Img'
        />
    </div>
    </>
  );
};

export const EntertainmentCardSlider = () => {
    const EntertainmentImage = [    
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/music-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/upskill-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/interactive-games-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/theatre-shows-collection-202211140440.png",

    ];

    const setting = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 5,
            InitialSlide: 0,
            
            responsive: [
                {
                    breakpoint: 1024,
                    setting: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    setting: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
            ]
           
    }

    return(
        <>
        <Slider {...setting}>
        {
            EntertainmentImage.map((image) => (
                <EntertainmentCard src={image} />
            ))
        }
        </Slider>
        </>
    )
}

export default EntertainmentCardSlider;