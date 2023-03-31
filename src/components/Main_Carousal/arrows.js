import React from 'react'

export const NextArrow = (props) => {
    //const {className, style, onClick}
    return(
        <>
        <div 
            className={props.className}
            style={{ ...props.style, colour: "#333333", 
            width: "40px",
            height: "40px",
            padding: "8px",
            pointerEvents: "all",
            borderRadius: "0 6px 6px 0",
            backgroundColor: "#00000066"}}
            onClick={props.onClick}
        />    
        </>
    );
};

export const PrevArrow = (props) => {
  return (
    <>
    <div 
            className={props.className}
            style={{ ...props.style, colour: "#333333", 
            width: "40px",
            height: "40px",
            padding: "8px",
            pointerEvents: "all",
            borderRadius: "0 6px 6px 0",
            backgroundColor: "#00000066"}}
            onClick={props.onClick}
        />    
    </>
  );
};

//task to create it like orignal