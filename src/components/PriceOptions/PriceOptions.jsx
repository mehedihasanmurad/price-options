import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Package",
            "price": 1000,
            "features": [
                "General gym access",
                "Locker facility",
                "1 personal trainer session per month"
            ]
        },
        {
            "id": 2,
            "name": "Standard Package",
            "price": 2000,
            "features": [
                "Unlimited gym access",
                "Group classes (Yoga, Zumba)",
                "Locker & shower access",
                "2 personal trainer sessions per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Package",
            "price": 3500,
            "features": [
                "24/7 gym access",
                "Unlimited group classes",
                "Daily personal trainer support",
                "Customized diet plan",
                "Steam & sauna access"
            ]
        },
        {
            "id": 4,
            "name": "Couple Package",
            "price": 5000,
            "features": [
                "All Premium features for 2 people",
                "Private couple sessions",
                "Free nutrition consultation"
            ]
        },
        {
            "id": 5,
            "name": "Student Package",
            "price": 800,
            "features": [
                "Gym access (8am - 5pm)",
                "Group classes (limited)",
                "No personal trainer",
                "Student ID required"
            ]
        }
    ];


    return (
        <div className='mx-6 my-10'>
            <h2 className='text-3xl mb-3 font-semibold font-mono'>My Best Price Options in GYM</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;