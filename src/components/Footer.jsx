import React from 'react';

import Logo from './Logo';

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    
    return (
        <div className="py-5 border-t border-primary center w-full bg-black/90">
            <div className="space-y-3 center flex-col">
                <Logo />
                <p className="text-white">Copyright © {fullYear} Picflix.</p>
            </div>
        </div>
    );
}

export default Footer;