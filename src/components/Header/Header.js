import React from 'react';
import img from '../../img.jpg';

const Header = () => {
    return (
        <div className="w-full h-25">
            <img style={{height: '300px', width: '100vw'}} src={img} alt="" />
        </div>
    );
};

export default Header;