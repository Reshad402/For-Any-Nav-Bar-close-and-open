import React, { useState } from 'react';
import { FaAlignLeft,FaMixer } from "react-icons/fa";
// import logo from './logo.png'
const Navbar = () => {

                                                        //?  Work for hide the nav
    const [nav,setNav] =useState(true);

    const handleNav = () =>{
        setNav(!nav)         //! This means !nav is false as useState(false)
    }


    return (
        <div className='text-black  flex justify-between items-center p-4 max-w-[1260px] mx-auto  '>
            <h2 className='text-3xl font-bold text-[#35e1ff]'>
                TourIsOn
                {/* <img className='w-[45px]' src={logo} alt="" /> */}
            </h2>
            
            <ul className='hidden md:flex justify-center '>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Blog</li>
                <li className='p-4'>Places</li>
                <li className='p-4'>Budget</li>
            </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav? <FaMixer size={20}/> :<FaAlignLeft size={20}/>}
                </div>
            <div className={!nav ? 'absolute left-0 top-0 w-[60%] h-[100%] bg-red-200 border-r border-r-gray-500 #24243e ease-in-out duration-200' : 'fixed left-[-100%]' }>
            <h2 className='text-3xl  font-bold pt-5 pl-4 text-[#35e1ff] '>
                TourIsOn
            </h2>
                <ul className='uppercase pt-14'>
                    <li className='p-4 border-b border-gray-300'>Home</li>
                    <li className='p-4 border-b border-gray-300'>About</li>
                    <li className='p-4 border-b border-gray-300'>Blog</li>
                    <li className='p-4 border-b border-gray-300'>Places</li>
                    <li className='p-4 border-b border-gray-300'>Budget</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;