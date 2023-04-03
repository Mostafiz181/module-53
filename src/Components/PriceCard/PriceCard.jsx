import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-purple-400 mt-3 rounded-md p-4 flex flex-col'>

            <h2  className='text-center py-5'>
                <span className='text-5xl font-extrabold text-purple-700 ps-3'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>

            <h5 className='text-2xl my-4 font-bold ps-3 text-center'>{price.name}</h5>

            <p className='text-2xl font-bold text-purple-700'>Features : </p>


                <div className='text-2xl text-white font-bold'>
                        {
                            price.features.map((feature, idx)=> <Feature

                                key ={idx}

                                feature={feature}
                            ></Feature>)
                        }


                </div>

                <button className='px-4 py-4 mt-auto bg-purple-800 rounded-md text-white font-bold w-full'>Buy Now</button>

            


            
        </div>
    );
};

export default PriceCard;