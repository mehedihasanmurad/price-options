import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-10 hover:bg-amber-600 px-3 md:py-2 rounded-lg'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;