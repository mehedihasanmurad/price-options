import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {price,name,features,currency} = option;
    return (
        <div className='border bg-blue-600 flex flex-col rounded-lg text-center p-6 text-white'>
            <h2>
                <span className='text-5xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            
            <h4 className='text-3xl my-4'>{name}</h4>
            
            <ul className='flex-grow'>
                {
                    features.map(feature => <Feature feature={feature}></Feature>)
                }
                
            </ul>
            <button className='text-white rounded-lg my-10 text-xl hover:bg-green-600 w-full py-3  bg-green-400'>Buy Now</button>
        </div>
    );
};

export default PriceOption;