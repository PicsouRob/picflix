import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className='flex items-center gap-2 max-w-max'>
            <img src="/images/logo.png" alt="logo" className="h-8" />
            <h1 className="text-primary font-bold text-xl lg:text-2xl">Picflix</h1>
        </Link>
    );
}

export default Logo;