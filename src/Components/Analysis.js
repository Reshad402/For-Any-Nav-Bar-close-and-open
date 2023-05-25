import React from 'react';
import Laptop from '../assets/laptop.jpg'
const Analysis = () => {
    
    return (
        <div className='w-full bg-white '>
            <div className='  grid md:grid-cols-2 '>
                <img className='mt-20' src={Laptop} alt="" />
                <div  className='text-black mx-auto '>
                    <p className='font-bold text-3xl mt-[20px] text-green-400 md:text-5xl sm:mt-[100px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, odio!</p>
                    <h1 className='font-bold text-4xl mt-5 md:text-4xm sm:text-3xl '>Lets see the effects of travel</h1>
                    <p className='text-gray-900 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima autem repellat impedit, molestiae distinctio tempore quasi laudantium harum dolorem aperiam sapiente laboriosam. Nam, cum quia? Natus magnam blanditiis distinctio.</p>
                    <button className='mx-auto pt-3 mt-6 flex justify-center p-4 m-4  text-white border border-green-400 bg-teal-800 rounded rounded-3xl focus:bg-orange-300 '>Get Info</button>
                </div>
            </div>
        </div>
    );
};

export default Analysis;