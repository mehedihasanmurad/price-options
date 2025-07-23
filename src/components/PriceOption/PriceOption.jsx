import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const {price,name,features} = option;
    console.log(option)
    return (
        <div className='bg-blue-500 p-12 rounded-lg flex flex-col space-y-4 text-center'>
            <h2>
                <span className='text-5xl'>{price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h2 className='text-2xl'>{name}</h2>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='w-full py-2 bg-green-500 hover:bg-green-400 font-bold rounded-lg'>Buy Now</button>
        </div>
    );
};

export default PriceOption;