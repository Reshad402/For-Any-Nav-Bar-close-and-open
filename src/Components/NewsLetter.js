import React from 'react';

const NewsLetter = () => {
    return (
        <div className='w-full py-16'>
            
            <div className='w-[720px] mx-auto px-6 lg:grid grid-cols-2'>
                
                <div className=' lg:col-span-4' >
                    <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl'>
                    Want trips to travel
                    </h1>
                    <p className='font-bold text-xl pt-5'>Sign up to our newsletter and stay up to date</p>
                </div>

                <div className='py-12 px-6 flex mx-auto'>
                    <div className='text-black'>                      
                        <input type="email" placeholder='Enter your Email'/>                      
                        <div>
                            <button className='mx-auto pt-2 mt-3 flex   justify-center text-white border border-green-400 bg-teal-800 rounded-3xl p-4 m-4'>Notify me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;