import React from 'react';
import Typed from 'react-typed';
import Sea from '../Navbar/../Components/../assets/sea.jpg'
const Hero = () => {
    return (
        <div className=' text-white w-100% h-[90vh] '>
            <img src={Sea} className='h-[720px] w-full object-cover' alt="" />


            <div className='max-w-[800px] w-full mx-auto text-center '>

                <div className='absolute top-[20%]'>
                    <p className=' font-bold text-4xl mt-[150px] text-white md:text-5xl sm:text-4xl'>Ready to Guide You To The Place</p>
                    <h1 className='text-black font-extrabold text-4xl font-family: ui-serif pt-5 md:text-5xl sm:text-4xl'>Travel With Us</h1>
                    <p className='font-bold text-black mt-5 md:text-4xm sm:text-3xl text-2xl'>Travel For_  
                    <Typed className='font-bold text-black mt-5 md:text-4xm sm:text-3xl text-2xl' strings={[
                        'Explore','Adventure','CHILL','Relaxation','Recreation','Education',' Learning','Work',
                    ]}
                    typeSpeed={90}
                    backSpeed={50}
                    loop ></Typed>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Hero;