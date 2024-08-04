import React from 'react';
import { FaCheckCircle } from "react-icons/fa";


const Feature = ({feature}) => {
    return (
        <div className=''>
            <li>
                <p className='flex items-center text-justify mt-5'><FaCheckCircle className='mr-3 text-green-500'></FaCheckCircle> {feature}</p>
            </li>
        </div>
    );
};

export default Feature;