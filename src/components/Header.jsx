import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Header = ({ includeButton = false }) => {
    return (
        <div className="py-4 w-full border-b border-primary">
            <div className="flex items-center justify-between mx-auto max-w-7xl px-6 md:px-8">
                <Logo />
                { includeButton ? (
                    <Link to="/add-videos" className="border border-white btn text-white">
                        Nuevo Video
                    </Link>
                ): null}
            </div>
        </div>
    );
}

export default Header;