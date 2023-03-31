import React from "react";
import Premiere from "../premier/Premiere";




const PosterSlider = (props) => {
    return(
        <>

<div className="rounded-xl py-3 px-7" >
        <h3 className={
            `px-5 text-xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}` }>{props.title}</h3>
        <p className={
            `px-5 pb-2 ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
        <Premiere />  
      </div>

        </>
    );
}; 

export default PosterSlider;