import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='mr-10 text-xl px-2 py-2 rounded-full hover:bg-yellow-500'>
            <a className='px-8' href={route.path}>{route.name}</a>
        </li>
    );
};

Link.PropTypes = {
    route: PropTypes.object,
}
export default Link;