import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 bg-purple-600 px-10 py-4 rounded-md text-white mt-1 duration-150 hover:bg-purple-900'>

            <a href={route.path}>{route.name}</a>



            
        </li>
    );
};

export default Link;