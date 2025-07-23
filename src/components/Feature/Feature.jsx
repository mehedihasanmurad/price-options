import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <div>
            <h2 className='flex items-center gap-2'><FaCircleCheck className='text-green-500'></FaCircleCheck> {feature}</h2>
        </div>
    );
};

export default Feature;