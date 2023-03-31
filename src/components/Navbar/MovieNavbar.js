import React from 'react'
import { BsChevronRight, BsSearch,  } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { BiMenu, BiChevronLeft, BiShareAlt} from "react-icons/bi";
 
const style ={
    Mobile: `md:hidden`,
    Tab: `hidden lg:hidden md:block`,
    Desktop: `hidden lg:flex`,
    Nav_bar: `bg-navColor-900 px-4 py-2`,
    Name: `text-gray-400 text-xs flex items-center`,
    //for ipad screen
    Ipad: `w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md`,
    search: `w-full focus:outline-none`,
}

const NavSm = () => {
    return (
        <>
     
        <div className="text-white flex items-center justify-between">
        <div>
            <h3 className='text-xl font-bold'>It All Start's Here..</h3>
            
         </div>
         <div className='w-8 h-8'>
            <BiShareAlt className='w-full h-full'/>
         </div>
        </div>
     
        </>
    )
};

const NavLg = () => {
    return(
        <>
        <div className='container mx-auto px-4 flex items-center justify-between'>
            <div className='flex items-center w-1/2'>
                    <div className='w-12 h-12'>
                            <img src='' alt='logo' className="w-full h-full"/>
                    </div>  
                    <div className={style.Ipad}>
                        <BsSearch />   
                        <input type="search" className={style.search} placeholder="Search for Movies, Events, Plays, Sports & Activities"/> 
                    </div>  

            </div>

            <div className='flex items-center gap-4'>
            <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                Agra <FiChevronDown />
             </span>

             <button className="bg-red-600 text-white text-xs rounded px-2 py-1">Sign In</button>
             
             <div className='w-8 h-8 text-white'>
             <BiMenu className='w-full h-full' />
             </div>
            </div>
        </div>
        </>
    );
};

const MovieNavbar = () => {
  return (
    <>
    <nav className={style.Nav_bar}>
    <div className={style.Mobile}>
    <NavSm />
    </div>

    <div className={style.Tab}>
        <NavSm />
    </div>

    <div className={style.Desktop}>
    <NavLg />
    </div>
    </nav>
        
    </>
  )
}

export default MovieNavbar;