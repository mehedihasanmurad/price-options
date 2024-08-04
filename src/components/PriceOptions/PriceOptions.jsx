import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic",
      "price": 30,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "1 group fitness class per month"
      ]
    },
    {
      "id": 2,
      "name": "Standard",
      "price": 50,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "1 personal training session per month",
        "Access to sauna"
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": 70,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "4 personal training sessions per month",
        "Access to sauna",
        "Access to swimming pool",
        "Free guest pass once a month"
      ]
    },
    {
      "id": 4,
      "name": "VIP",
      "price": 100,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "8 personal training sessions per month",
        "Access to sauna",
        "Access to swimming pool",
        "Free guest pass twice a month",
        "Priority booking for classes and trainers",
        "Complimentary sports drinks and snacks"
      ]
    }
  ]


    return (
        <div>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            <h2 className="text-2xl">Best Prices</h2>
        </div>
    );
};

export default PriceOptions;