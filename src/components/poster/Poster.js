import React from 'react'
// props - src, title, subtitle, is dark or not .? 


const Poster = (props) => {
  return (
    <>
    
    <div className="flex flex-col items-start gap-2 px-5">

       
            <img src={props.src} alt="img.." className="rounded-xl" />
        
        <h3 className={`text-black-700 font-bold text-sm px-1  ${props.isDark ? "text-white font-bold text-sm px-1" : "text-gray-800"}`} >{props.heading}</h3>
        <p className={`px-1 text-sm font-normal py-none ${props.isDark ? "text-white px-1 font-normal" : "text-gray-800"}`} >{props.discription}</p>
    </div>
    </>
  );
};

export default Poster;