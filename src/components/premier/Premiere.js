import React from "react";
import Slider from "react-slick";
import Poster from "../poster/Poster";
import settings from "../../config/PosterCarosal";
import PremiereImage from "../../config/TempPoster";



 const Premiere = () => {
    
    return(
        <>
         <Slider {...settings} >
            {
                PremiereImage.map((image) => (
                    <Poster {...image} isDark />
                ))
            }

         </Slider>

         
        </>
    );

};

export default Premiere;