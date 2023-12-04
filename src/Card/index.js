import React from 'react'
import productImg from '../images/headphone.png';
import heartImg from '../images/heart.png';
import weightImg from '../images/weight.png';

const Card = () => {
    return (
        <div className='p-10 m-3 space-y-10 md:space-y-0 md:space-x-10 md:m-0 md:p-16 bg-white rounded-xl flex flex-col md:flex-row shadow-2xl'>
            <div><img className='mx-auto w-60 hover:scale-105 duration-200' src={productImg} /></div>
            <div className='flex flex-col space-y-6 items-center md:items-start'>
                <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
                    <div>
                        <div className='text-white px-3 py-1 text-sm bg-black rounded-full inline-block'>Free shipping</div>
                    </div>
                    <div className=' max-w-sm text-2xl font-semibold'>Razer kraken Kitty Edt Gaming Headest Quartz</div>
                    <div className='text-sm line-through'>$799</div>
                    <div className='text-5xl text-red-800 font-bold'>$599</div>
                    <div className='text-sm text-gray-400'>The offer is valid until April 3 or as long as stock lasts!</div>
                    <button className='w-full bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg'>
                        <div className='px-8 py-4 bg-blue-500 rounded-lg '>Add to card</div>
                    </button>
                    <div className='flex items-center space-x-3 group'>
                        <div className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping'></div>
                        <div className='font-medium text-sm'>50+ pcs. in stock.</div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <button className='border border-gray-400 rounded-lg px-4 py-2.5 flex flex-row justify-center gap-2 shadow-sm
                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                            <img className='h-6' src={weightImg} />
                            <div>Add to card</div>
                        </button>
                        <button className='border border-gray-400 rounded-lg px-4 py-2.5 flex flex-row justify-center gap-2 shadow-sm
                    hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                            <img className='h-6' src={heartImg} />
                            <div>Add to wishlist</div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;